// Renders tools/og.html to assets/img/og.png (1200x630), the link-preview image.
//   node tools/render-og.js
// Needs Node 22+ and Edge; drives Edge over the DevTools protocol.
const { spawn } = require('child_process');
const http = require('http'); const fs = require('fs'); const os = require('os'); const path = require('path');
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const SRC = path.join(__dirname, 'og.html');
const OUT = path.join(__dirname, '..', 'assets', 'img', 'og.png');
const PORT = 9944;
const edge = spawn(EDGE, ['--headless=new', `--remote-debugging-port=${PORT}`, '--allow-file-access-from-files',
  `--user-data-dir=${path.join(os.tmpdir(), 'mcgw-og')}`, '--disable-gpu', '--hide-scrollbars', 'about:blank'], { stdio: 'ignore' });
const getJSON = (url) => new Promise((res, rej) => http.get(url, (r) => { let b = ''; r.on('data', (d) => b += d); r.on('end', () => { try { res(JSON.parse(b)); } catch (e) { rej(e); } }); }).on('error', rej));
const pause = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  let targets; for (let i = 0; i < 60 && !targets; i++) { try { targets = await getJSON(`http://127.0.0.1:${PORT}/json`); } catch { await pause(200); } }
  const ws = new WebSocket(targets.find((t) => t.type === 'page').webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener('open', r));
  let id = 0; const pending = new Map();
  ws.addEventListener('message', (e) => { const m = JSON.parse(e.data); if (pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } });
  const send = (method, params = {}) => new Promise((r) => { const n = ++id; pending.set(n, r); ws.send(JSON.stringify({ id: n, method, params })); });
  await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 1200, height: 630, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: `file:///${SRC.split(path.sep).join('/')}` });
  await pause(1500);
  const shot = await send('Page.captureScreenshot', { format: 'png', clip: { x: 0, y: 0, width: 1200, height: 630, scale: 1 } });
  fs.writeFileSync(OUT, Buffer.from(shot.result.data, 'base64'));
  console.log('Wrote assets/img/og.png');
  ws.close(); edge.kill(); process.exit(0);
})().catch((e) => { console.error(e.message || e); edge.kill(); process.exit(1); });
