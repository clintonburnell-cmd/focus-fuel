/* Unit tests for the shared scheduling logic. Run with: npm test */
'use strict';
const assert = require('assert');
const MM = require('../shared.js');

// Every quote is reachable and the two daily slots never collide.
const list = MM.shuffledQuotes();
assert(list.length > 50, 'expected a real quote library, got ' + list.length);
const seen = new Set();
for (let d = 0; d < Math.ceil(list.length / 2); d++) {
  const dayKey = new Date(Date.UTC(2026, 0, 1 + d)).toISOString().slice(0, 10);
  const m = MM.quoteFor(dayKey, 'morning'), e = MM.quoteFor(dayKey, 'evening');
  assert.notStrictEqual(m.id, e.id, 'morning and evening should differ on ' + dayKey);
  seen.add(m.id); seen.add(e.id);
}
assert.strictEqual(seen.size, list.length, 'every quote should appear before the cycle repeats');

// Same date + slot always gives the same quote (client and server agree).
assert.strictEqual(MM.quoteFor('2026-09-12', 'morning').id, MM.quoteFor('2026-09-12', 'morning').id);

// Time zone handling: 07:30 in Denver is 13:30 UTC in September (MDT).
const denver = MM.localParts(new Date('2026-09-12T13:30:00Z'), 'America/Denver');
assert.strictEqual(denver.time, '07:30');
assert.strictEqual(denver.dateKey, '2026-09-12');

// Due detection with the grace window and de-duplication.
const settings = { morning: '07:30', evening: '20:30' };
let due = MM.dueSlots(settings, {}, new Date('2026-09-12T13:30:00Z'), 'America/Denver');
assert.deepStrictEqual(due.slots, ['morning']);
due = MM.dueSlots(settings, { morning: '2026-09-12' }, new Date('2026-09-12T13:45:00Z'), 'America/Denver');
assert.deepStrictEqual(due.slots, [], 'already sent today');
due = MM.dueSlots(settings, {}, new Date('2026-09-12T13:29:00Z'), 'America/Denver');
assert.deepStrictEqual(due.slots, [], 'one minute early');
due = MM.dueSlots(settings, {}, new Date('2026-09-13T03:00:00Z'), 'America/Denver'); // 21:00 local
assert.deepStrictEqual(due.slots, ['evening'], 'evening within grace; morning long past its window');
due = MM.dueSlots(settings, {}, new Date('2026-09-13T02:45:00Z'), 'America/Denver', 30); // 20:45 local, 30 min grace
assert.deepStrictEqual(due.slots, ['evening'], 'custom grace window');

// Notification payload is well-formed.
const n = MM.notificationFor('2026-09-12', 'evening');
assert(n.title && n.body.includes(n.body.split(' — ').pop()) && n.tag.startsWith('titan-mindset-evening-'));
assert.strictEqual(MM.formatTime12('07:30'), '7:30 AM');
assert.strictEqual(MM.formatTime12('20:30'), '8:30 PM');
assert.strictEqual(MM.formatTime12('00:05'), '12:05 AM');

console.log('All tests passed. Library: ' + list.length + ' quotes from ' + MM.QUOTES.length + ' people.');
