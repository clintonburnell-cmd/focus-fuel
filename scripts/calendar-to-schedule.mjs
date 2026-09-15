#!/usr/bin/env node
/**
 * Turns a Google Calendar event dump into data/schedule.js.
 *
 * The team calendar ("Mountain Crest Wrestling 2026-2027") is the source of
 * truth for the website calendar. To re-sync:
 *
 *   1. Export the calendar's events as JSON to scripts/calendar-events.json
 *      (any Calendar API list-events response works — the whole response, or
 *      just its `events` array).
 *   2. node scripts/calendar-to-schedule.mjs
 *   3. Commit the regenerated data/schedule.js.
 *
 * Anything hand-written in data/schedule.js is overwritten, so make schedule
 * changes on the Google Calendar, not in the data file.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const IN = join(here, "calendar-events.json");
const OUT = join(here, "..", "data", "schedule.js");

const SEASON = "2026-27 Season";

/** Events on the team calendar that are not team events. */
const EXCLUDE_SUMMARIES = ["bear lake"];

/** Real team dates that are not on the Google Calendar yet. */
const EXTRAS = [
  {
    date: "2026-11-09",
    title: "First Day of Practice",
    type: "event",
    location: "Mountain Crest HS",
    notes:
      "Registration, a current sports physical and school paperwork must be cleared first."
  }
];

/** Leading boilerplate to drop from notes — the tags already say this. */
const BOILERPLATE =
  /^(Away dual\.|Home dual\.|Home dual and Senior Night\.|Two-day tournament\.|Tournament\.|Postseason\.|Our home tournament\.)\s*/;

const MONTHS = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");

function classify(summary) {
  const s = summary.toLowerCase();
  if (/parent meeting|auction|inter-squad|practice|banquet|awards/.test(s)) return "event";
  if (/tournament|duals|clash|invitational|rumble|divisionals|state|best of the west|tbd:/.test(s))
    return "tournament";
  return "dual";
}

/** "@ Box Elder" => away; "Ridgeline @ MC (home)" or a meet at our gym => home. */
function homeFlag(summary, location) {
  if (/^@\s/.test(summary)) return false;
  if (/\(home[^)]*\)|@ MC\b/i.test(summary)) return true;
  if (/mountain crest/i.test(location || "")) return true;
  return undefined;
}

/** "TBD: Best of the West or Ridgeline" => a "Weekend TBD" event, options in the notes. */
function isTbd(summary) {
  return /^TBD:/i.test(summary);
}

function cleanTitle(summary) {
  return summary
    .replace(/^@\s*/, "")
    .replace(/\s*@ MC\b/i, "")
    .replace(/\s*\(home,\s*/i, " (")
    .replace(/\s*\(home\)\s*/i, "")
    .replace(/^TBD:\s*/i, "")
    .replace(/,\s*Senior Night/i, " — Senior Night")
    .trim();
}

/** All-day events carry an exclusive end date; step back a day for display. */
function dayBefore(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d - 1));
  return dt.toISOString().slice(0, 10);
}

function formatTime(dateTime) {
  const t = dateTime.slice(11, 16).split(":").map(Number);
  const hour = t[0] % 12 === 0 ? 12 : t[0] % 12;
  const min = String(t[1]).padStart(2, "0");
  return `${hour}:${min} ${t[0] < 12 ? "AM" : "PM"}`;
}

function convert(ev) {
  const summary = (ev.summary || "").trim();
  const tbd = isTbd(summary);
  const out = { title: tbd ? "Weekend TBD" : cleanTitle(summary), type: classify(summary) };

  if (ev.start.date) {
    out.date = ev.start.date.slice(0, 10);
    const end = dayBefore(ev.end.date.slice(0, 10));
    if (end !== out.date) out.endDate = end;
  } else {
    out.date = ev.start.dateTime.slice(0, 10);
    out.time = formatTime(ev.start.dateTime);
  }

  // An undecided weekend has no settled location; the options go in the notes instead.
  if (ev.location && !tbd) out.location = ev.location;

  const home = homeFlag(summary, ev.location);
  if (home !== undefined && out.type !== "event" && !tbd) out.home = home;

  let notes = (ev.description || "").replace(BOILERPLATE, "").trim();
  // A description that only repeats the location says nothing new.
  if (notes === (ev.location || "").trim()) notes = "";
  if (tbd) {
    out.tbd = true;
    notes = `Options: ${cleanTitle(summary)}. ${notes}`.trim();
  }
  if (notes) out.notes = notes;

  return out;
}

const raw = JSON.parse(readFileSync(IN, "utf8"));
const events = Array.isArray(raw) ? raw : raw.events;

const converted = events
  .filter((ev) => ev.status !== "cancelled")
  .filter((ev) => !EXCLUDE_SUMMARIES.includes((ev.summary || "").trim().toLowerCase()))
  .map(convert);

const all = [...converted, ...EXTRAS].sort((a, b) => a.date.localeCompare(b.date));

const KEYS = ["date", "endDate", "time", "title", "type", "location", "home", "tbd", "notes"];
const body = all
  .map((ev) => {
    const lines = KEYS.filter((k) => ev[k] !== undefined).map((k) => {
      const v = typeof ev[k] === "string" ? JSON.stringify(ev[k]) : ev[k];
      return `    ${k}: ${v}`;
    });
    return `  {\n${lines.join(",\n")}\n  }`;
  })
  .join(",\n");

const stamp = new Date().toISOString().slice(0, 10);
const [sy, sm, sd] = stamp.split("-");
const pretty = `${MONTHS[Number(sm) - 1]} ${Number(sd)}, ${sy}`;

writeFileSync(
  OUT,
  `/* ---------------------------------------------------------------------------
 * Mountain Crest Girls Wrestling — ${SEASON} schedule
 * ---------------------------------------------------------------------------
 * GENERATED FILE — do not edit by hand.
 *
 * Source: the "Mountain Crest Wrestling 2026-2027" Google Calendar.
 * Regenerate with:  node scripts/calendar-to-schedule.mjs
 * Last synced: ${pretty}.
 *
 * Change the schedule on the Google Calendar, then re-run the sync. Anything
 * typed into this file directly is lost on the next sync — the one exception
 * is the EXTRAS list in the script, which holds real team dates that are not
 * on the calendar yet.
 * ------------------------------------------------------------------------- */

window.MCW_SEASON = ${JSON.stringify(SEASON)};

window.MCW_SCHEDULE = [
${body}
];
`
);

console.log(`wrote ${all.length} events to data/schedule.js`);
