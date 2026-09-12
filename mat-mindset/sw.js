/* Mat Mindset service worker: offline cache, scheduled reminders, and Web Push. */
importScripts('./quotes.js', './shared.js');

const CACHE = 'mat-mindset-v1';
const ASSETS = [
  './', './index.html', './quotes.js', './shared.js', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png',
];

// ---- tiny IndexedDB key/value store (localStorage is not available in workers) ----
function idb() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('mat-mindset', 1);
    req.onupgradeneeded = () => req.result.createObjectStore('kv');
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function kvGet(key) {
  const db = await idb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('kv', 'readonly');
    const req = tx.objectStore('kv').get(key);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function kvSet(key, value) {
  const db = await idb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('kv', 'readwrite');
    tx.objectStore('kv').put(value, key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

// ---- lifecycle ----
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Cache-first for our own assets, network for everything else.
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) return;
  event.respondWith(
    caches.match(event.request).then((hit) => hit || fetch(event.request).then((res) => {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(event.request, copy));
      return res;
    }))
  );
});

// ---- showing a reminder ----
async function showSlot(slot, dateKey) {
  const n = MatMindset.notificationFor(dateKey, slot);
  if (!n) return;
  await self.registration.showNotification(n.title, {
    body: n.body,
    tag: n.tag,
    icon: './icons/icon-192.png',
    badge: './icons/icon-192.png',
    data: n.data,
    renotify: false,
  });
  const sent = (await kvGet('sent')) || {};
  sent[slot] = dateKey;
  await kvSet('sent', sent);
}

// Check whether a reminder is due and fire it. Used by the page (via message),
// by periodic background sync, and after a push arrives.
async function checkDue(graceMinutes) {
  const settings = (await kvGet('settings')) || MatMindset.DEFAULTS;
  if (!settings.enabled) return;
  const sent = (await kvGet('sent')) || {};
  const due = MatMindset.dueSlots(settings, sent, new Date(), undefined, graceMinutes);
  for (const slot of due.slots) await showSlot(slot, due.dateKey);
}

self.addEventListener('message', (event) => {
  const msg = event.data || {};
  if (msg.type === 'settings') {
    event.waitUntil(kvSet('settings', msg.settings).then(() => checkDue()));
  } else if (msg.type === 'check') {
    event.waitUntil(checkDue());
  } else if (msg.type === 'test') {
    const local = MatMindset.localParts(new Date());
    const slot = local.minutes < 12 * 60 ? 'morning' : 'evening';
    const n = MatMindset.notificationFor(local.dateKey, slot);
    event.waitUntil(self.registration.showNotification('Test: ' + n.title, {
      body: n.body, icon: './icons/icon-192.png', badge: './icons/icon-192.png', data: n.data, tag: 'mat-mindset-test',
    }));
  }
});

// Periodic Background Sync (installed PWA on Chromium/Android): wake up and deliver anything due.
self.addEventListener('periodicsync', (event) => {
  // The browser decides when this actually runs, so accept a reminder up to three hours late.
  if (event.tag === 'mat-mindset-check') event.waitUntil(checkDue(180));
});

// Web Push from the optional server. The payload carries the quote so it works even
// if this service worker's quote list is older than the server's.
self.addEventListener('push', (event) => {
  let payload = {};
  try { payload = event.data ? event.data.json() : {}; } catch (e) { payload = { body: event.data && event.data.text() }; }
  const slot = payload.slot || 'morning';
  const dateKey = payload.dateKey || MatMindset.localParts(new Date()).dateKey;
  const fallback = MatMindset.notificationFor(dateKey, slot) || { title: 'Mat Mindset', body: '' };
  event.waitUntil((async () => {
    await self.registration.showNotification(payload.title || fallback.title, {
      body: payload.body || fallback.body,
      tag: payload.tag || fallback.tag,
      icon: './icons/icon-192.png',
      badge: './icons/icon-192.png',
      data: Object.assign({}, fallback.data, payload.data || {}, { slot, dateKey }),
    });
    const sent = (await kvGet('sent')) || {};
    sent[slot] = dateKey;
    await kvSet('sent', sent);
  })());
});

// Tapping a notification opens the app on that quote's author.
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const data = event.notification.data || {};
  const target = new URL('./index.html', self.location.href);
  if (data.authorId) target.hash = '#person/' + data.authorId;
  event.waitUntil((async () => {
    const all = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const client of all) {
      if ('focus' in client) {
        client.navigate ? await client.navigate(target.href).catch(() => {}) : null;
        return client.focus();
      }
    }
    return self.clients.openWindow(target.href);
  })());
});
