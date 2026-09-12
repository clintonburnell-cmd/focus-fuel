/* Titan Mindset — shared logic used by the page, the service worker, and the push server.
   Loaded via <script> in the browser, importScripts() in the service worker, and require() in Node. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('./quotes.js'));
  } else {
    root.TitanMindset = factory(root.TITAN_MINDSET_QUOTES);
  }
})(typeof self !== 'undefined' ? self : this, function (QUOTES) {
  'use strict';

  const DEFAULTS = Object.freeze({
    enabled: false,
    morning: '07:30',
    evening: '20:30',
  });

  // Flatten people -> quotes into one list, each entry knowing its author.
  function flatQuotes(people) {
    const out = [];
    (people || QUOTES).forEach(function (p) {
      p.quotes.forEach(function (q, i) {
        out.push({
          id: p.id + ':' + i,
          text: q.text,
          source: q.source || '',
          themes: q.themes || [],
          author: p.name,
          authorId: p.id,
          role: p.role,
          affiliation: p.affiliation || '',
        });
      });
    });
    return out;
  }

  // Deterministic PRNG (mulberry32) so every device and the server agree on the same order.
  function mulberry32(seed) {
    return function () {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  let cachedOrder = null;
  function shuffledQuotes() {
    if (cachedOrder) return cachedOrder;
    const list = flatQuotes();
    const rand = mulberry32(20260101);
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      const tmp = list[i]; list[i] = list[j]; list[j] = tmp;
    }
    cachedOrder = list;
    return list;
  }

  // Days since 2026-01-01 for a YYYY-MM-DD local date key.
  function dayNumber(dateKey) {
    const parts = dateKey.split('-').map(Number);
    const utc = Date.UTC(parts[0], parts[1] - 1, parts[2]);
    return Math.floor((utc - Date.UTC(2026, 0, 1)) / 86400000);
  }

  // The morning and evening quotes for a given local date. Cycles through every quote before repeating.
  function quoteFor(dateKey, slot) {
    const list = shuffledQuotes();
    if (!list.length) return null;
    const n = dayNumber(dateKey) * 2 + (slot === 'evening' ? 1 : 0);
    return list[((n % list.length) + list.length) % list.length];
  }

  // --- Time helpers -------------------------------------------------------

  // Local date key (YYYY-MM-DD) and HH:MM for `date` in an IANA timezone (or the runtime's zone if omitted).
  function localParts(date, timeZone) {
    const opts = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false };
    if (timeZone) opts.timeZone = timeZone;
    const parts = {};
    new Intl.DateTimeFormat('en-US', opts).formatToParts(date).forEach(function (p) { parts[p.type] = p.value; });
    const hour = parts.hour === '24' ? '00' : parts.hour; // some engines print 24:00
    return {
      dateKey: parts.year + '-' + parts.month + '-' + parts.day,
      time: hour + ':' + parts.minute,
      minutes: parseInt(hour, 10) * 60 + parseInt(parts.minute, 10),
    };
  }

  function toMinutes(hhmm) {
    const m = /^(\d{1,2}):(\d{2})$/.exec(hhmm || '');
    if (!m) return null;
    return parseInt(m[1], 10) * 60 + parseInt(m[2], 10);
  }

  // Which slot(s) are due for a user right now, given what has already been sent.
  // `sent` is { morning: 'YYYY-MM-DD', evening: 'YYYY-MM-DD' } of the last date each slot was delivered.
  // A slot counts as due from its scheduled minute until `graceMinutes` later, so a background
  // check that wakes a little late still delivers.
  function dueSlots(settings, sent, now, timeZone, graceMinutes) {
    const grace = typeof graceMinutes === 'number' ? graceMinutes : 90;
    const local = localParts(now || new Date(), timeZone);
    const out = [];
    ['morning', 'evening'].forEach(function (slot) {
      const target = toMinutes(settings[slot]);
      if (target === null) return;
      const alreadySent = sent && sent[slot] === local.dateKey;
      if (!alreadySent && local.minutes >= target && local.minutes <= target + grace) {
        out.push(slot);
      }
    });
    return { dateKey: local.dateKey, slots: out };
  }

  // Build the notification title/body for a slot on a date.
  function notificationFor(dateKey, slot) {
    const q = quoteFor(dateKey, slot);
    if (!q) return null;
    return {
      title: slot === 'morning' ? 'Titan Mindset · Morning' : 'Titan Mindset · Evening',
      body: '“' + q.text + '” — ' + q.author,
      tag: 'titan-mindset-' + slot + '-' + dateKey,
      data: { slot: slot, dateKey: dateKey, quoteId: q.id, authorId: q.authorId },
    };
  }

  function formatTime12(hhmm) {
    const m = toMinutes(hhmm);
    if (m === null) return hhmm;
    const h = Math.floor(m / 60), min = m % 60;
    const h12 = h % 12 === 0 ? 12 : h % 12;
    return h12 + ':' + String(min).padStart(2, '0') + ' ' + (h < 12 ? 'AM' : 'PM');
  }

  return {
    DEFAULTS: DEFAULTS,
    QUOTES: QUOTES,
    flatQuotes: flatQuotes,
    shuffledQuotes: shuffledQuotes,
    quoteFor: quoteFor,
    localParts: localParts,
    toMinutes: toMinutes,
    dueSlots: dueSlots,
    notificationFor: notificationFor,
    formatTime12: formatTime12,
  };
});
