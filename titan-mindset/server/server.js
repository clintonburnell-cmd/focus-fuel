/* Titan Mindset push server.
 *
 * Stores Web Push subscriptions with each user's IANA time zone and preferred
 * morning/evening times, then once a minute pushes the day's quote to everyone
 * whose local clock has reached one of their times.
 *
 * Endpoints (all JSON, CORS-enabled):
 *   GET  /vapid-public-key   -> { publicKey }
 *   POST /subscribe          <- { subscription, timeZone, morning, evening, enabled }
 *   POST /unsubscribe        <- { endpoint }
 *   POST /test               <- { endpoint }   sends the current slot's quote right now
 *   GET  /health             -> { ok, subscribers }
 */
'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const webpush = require('web-push');
const MM = require('../shared.js');

loadDotEnv(path.join(__dirname, '.env'));

if (process.argv.includes('--generate-keys')) {
  const keys = webpush.generateVAPIDKeys();
  console.log('VAPID_PUBLIC_KEY=' + keys.publicKey);
  console.log('VAPID_PRIVATE_KEY=' + keys.privateKey);
  process.exit(0);
}

const PORT = parseInt(process.env.PORT || '8787', 10);
const DATA_FILE = path.resolve(__dirname, process.env.DATA_FILE || './subscriptions.json');
const ALLOWED = (process.env.ALLOWED_ORIGINS || '*').split(',').map((s) => s.trim());
const { VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY, VAPID_SUBJECT } = process.env;

if (!VAPID_PUBLIC_KEY || !VAPID_PRIVATE_KEY) {
  console.error('Missing VAPID keys. Run `npm run keys` and put the output in server/.env');
  process.exit(1);
}
webpush.setVapidDetails(VAPID_SUBJECT || 'mailto:admin@example.com', VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);

// ---- storage: { [endpoint]: { subscription, timeZone, morning, evening, enabled, sent: {morning, evening} } }
let subs = {};
try { subs = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')); } catch (e) { subs = {}; }
let saveTimer = null;
function save() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    fs.writeFileSync(DATA_FILE + '.tmp', JSON.stringify(subs, null, 2));
    fs.renameSync(DATA_FILE + '.tmp', DATA_FILE);
  }, 250);
}

function validTimeZone(tz) {
  try { new Intl.DateTimeFormat('en-US', { timeZone: tz }); return true; } catch (e) { return false; }
}
function validTime(t) { return MM.toMinutes(t) !== null; }

// ---- delivery
async function sendSlot(entry, slot, dateKey, isTest) {
  const n = MM.notificationFor(dateKey, slot);
  if (!n) return;
  const payload = JSON.stringify({
    title: isTest ? 'Test: ' + n.title : n.title,
    body: n.body,
    tag: isTest ? 'titan-mindset-test' : n.tag,
    slot, dateKey, data: n.data,
  });
  try {
    await webpush.sendNotification(entry.subscription, payload, { TTL: 60 * 60 * 3, urgency: 'normal' });
    return true;
  } catch (err) {
    if (err.statusCode === 404 || err.statusCode === 410) {
      delete subs[entry.subscription.endpoint];
      save();
      console.log('Removed expired subscription');
    } else {
      console.error('Push failed:', err.statusCode || err.message);
    }
    return false;
  }
}

async function sweep() {
  const now = new Date();
  for (const entry of Object.values(subs)) {
    if (!entry.enabled) continue;
    let due;
    try { due = MM.dueSlots(entry, entry.sent || {}, now, entry.timeZone, 60); } catch (e) { continue; }
    for (const slot of due.slots) {
      entry.sent = entry.sent || {};
      entry.sent[slot] = due.dateKey; // mark first so a slow push can't double-send
      save();
      await sendSlot(entry, slot, due.dateKey, false);
    }
  }
}
setInterval(() => sweep().catch((e) => console.error(e)), 60 * 1000);
sweep().catch((e) => console.error(e));

// ---- http
function cors(req, res) {
  const origin = req.headers.origin || '';
  const allow = ALLOWED.includes('*') ? '*' : (ALLOWED.includes(origin) ? origin : ALLOWED[0]);
  res.setHeader('Access-Control-Allow-Origin', allow);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}
function json(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(body));
}
function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (c) => { data += c; if (data.length > 64 * 1024) { reject(new Error('too large')); req.destroy(); } });
    req.on('end', () => { try { resolve(data ? JSON.parse(data) : {}); } catch (e) { reject(e); } });
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  cors(req, res);
  if (req.method === 'OPTIONS') { res.writeHead(204); return res.end(); }
  const url = new URL(req.url, 'http://localhost');

  try {
    if (req.method === 'GET' && url.pathname === '/vapid-public-key') {
      return json(res, 200, { publicKey: VAPID_PUBLIC_KEY });
    }
    if (req.method === 'GET' && url.pathname === '/health') {
      return json(res, 200, { ok: true, subscribers: Object.keys(subs).length, quotes: MM.flatQuotes().length });
    }
    if (req.method === 'POST' && url.pathname === '/subscribe') {
      const body = await readBody(req);
      const sub = body.subscription;
      if (!sub || typeof sub.endpoint !== 'string' || !sub.keys) return json(res, 400, { error: 'subscription required' });
      if (!validTimeZone(body.timeZone)) return json(res, 400, { error: 'valid IANA timeZone required' });
      const morning = validTime(body.morning) ? body.morning : MM.DEFAULTS.morning;
      const evening = validTime(body.evening) ? body.evening : MM.DEFAULTS.evening;
      const existing = subs[sub.endpoint] || {};
      subs[sub.endpoint] = {
        subscription: sub, timeZone: body.timeZone, morning, evening,
        enabled: body.enabled !== false, sent: existing.sent || {}, updatedAt: new Date().toISOString(),
      };
      save();
      return json(res, 200, { ok: true });
    }
    if (req.method === 'POST' && url.pathname === '/unsubscribe') {
      const body = await readBody(req);
      if (body.endpoint && subs[body.endpoint]) { delete subs[body.endpoint]; save(); }
      return json(res, 200, { ok: true });
    }
    if (req.method === 'POST' && url.pathname === '/test') {
      const body = await readBody(req);
      const entry = subs[body.endpoint];
      if (!entry) return json(res, 404, { error: 'unknown subscription' });
      const local = MM.localParts(new Date(), entry.timeZone);
      const ok = await sendSlot(entry, local.minutes < 720 ? 'morning' : 'evening', local.dateKey, true);
      return json(res, ok ? 200 : 502, { ok });
    }
    return json(res, 404, { error: 'not found' });
  } catch (err) {
    return json(res, 400, { error: err.message });
  }
});

server.listen(PORT, () => {
  console.log('Titan Mindset push server on http://localhost:' + PORT + ' with ' + Object.keys(subs).length + ' subscriber(s)');
});

// Minimal .env loader so there is no dotenv dependency.
function loadDotEnv(file) {
  try {
    fs.readFileSync(file, 'utf8').split('\n').forEach((line) => {
      const m = /^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/.exec(line);
      if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    });
  } catch (e) { /* no .env file */ }
}
