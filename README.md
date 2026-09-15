# MCGirlsWrestling.com

Website for **Mountain Crest High School Girls Wrestling** — Hyrum, Utah.

A plain static site: HTML, CSS and a little vanilla JavaScript. No build step, no
dependencies, no framework. Open `index.html` in a browser and it works.

## Pages

| File | Tab | What's on it |
| --- | --- | --- |
| `index.html` | Home | Intro, quick links, next few events, how to join |
| `schedule.html` | Schedule | Full season calendar, filters, `.ics` calendar download |
| `seasons.html` | Pre & Post Season | Summer/fall prep, offseason lifting, freestyle, camps |
| `accomplishments.html` | Accomplishments | Year-by-year state results, region results, milestones |
| `faq.html` | FAQ | Joining, gear, weight classes, safety, travel, meet days |
| `contact.html` | Contact Us | How the team communicates and how to get sportsYou access |
| `404.html` | (not found) | GitHub Pages serves it for any missing address; links use absolute paths |

`assets/img/og.png` is the link-preview image (1200x630) that sportsYou, texts and social
apps show when the site is shared. Rebuild it after a design change with
`node tools/render-og.js` (edit `tools/og.html` first; needs Edge on this PC).

Headings use Archivo Black, bundled in `assets/fonts/` so phones (which have neither Arial
Black nor Impact) show the same face as a PC.

The team's sportsYou page is linked from the footer and several pages ("download the
app" links go to sportsyou.com itself), and the Pre & Post Season page links to White
Rhino Wrestling, where the team's official pre and post season training runs.

A nutrition page was removed on request; it is still in git history (`git show
6754b0e:nutrition.html`) if it is ever wanted back.

## Updating the schedule

The **"Mountain Crest Wrestling 2026-2027" Google Calendar is the source of truth.**
Add or change events there, then re-sync the site:

1. Export the calendar's events to `scripts/calendar-events.json` (a Calendar API
   list-events response, or just its `events` array).
2. `node scripts/calendar-to-schedule.mjs`
3. Commit the regenerated `data/schedule.js`.

`data/schedule.js` is a generated file — edits made directly to it are lost on the
next sync. The script handles the mapping:

- `@ Opponent` becomes an away meet, `Opponent @ MC (home)` or any event at a
  Mountain Crest venue becomes a home meet
- all-day spans become single or multi-day events (Google's end date is exclusive)
- calendar descriptions become the note under each event, minus boilerplate like
  "Home dual." that the tags already show

Two lists in the script are worth knowing about: `EXTRAS` holds real team dates that
are not on the calendar yet (currently the Nov 9 first practice), and
`EXCLUDE_SUMMARIES` drops personal entries that live on the team calendar.

Calendar conventions the script understands: a title starting `TBD:` becomes a
"Weekend TBD" event with the options in its notes and a TBD tag; a description of
"Times to come." shows on the site as a "Time TBA" tag rather than a sentence; a
description that only repeats the location is dropped.

Past events drop off the "Upcoming" views automatically — no need to delete them.

## Things to replace before going live

1. ~~**Logo.**~~ Done — `assets/img/logo.png` is the official running-mustang mark
   from the athletic director, with the navy background keyed out to transparency
   so it sits on any section, and recolored to the school's PMS 172 orange.
   `assets/img/favicon.png` is the same mustang on PMS 289 navy.
2. ~~**Subscribing families.**~~ Done — the calendar is public and the schedule page
   carries Google, iPhone/Outlook and one-time .ics links.
3. ~~**sportsYou link.**~~ Done — team-channel links go to the team page (Sept 15, 2026).
4. ~~**Schedule.**~~ Done — `data/schedule.js` holds the real 2026-27 schedule from
   the team workbook (updated Sept 11, 2026). Two weekends are still marked as being
   decided (Jan 8-9 and Jan 15-16), and most start times are not set yet; add them as
   they come in.
5. **Accomplishments.** `data/results.js` holds the year-by-year state results: a
   complete placer list for every season from the state brackets, with team titles
   and scores from published coverage (Deseret News, KSL, The Herald Journal). The
   newest season opens by default; older ones are collapsed. Divisional results go
   back to 2023-24; earlier years, academic honors and alumnae in college are still
   to be gathered before they get a section. Placers are supported alongside champions: give each wrestler a `place` from 1 to
   8 (1 renders as a highlighted champion row), or omit `place` and pass a short
   `result` string when the exact finish isn't confirmed. A season's `medalists`
   count shows how many podium names are still missing.
6. **Contact info.** The head coach's e-mail is on the site; assistant coaches are
   first names only until they say otherwise.

## Colors

The school's official colors, per the athletic director: **Orange PMS 172**,
**Blue PMS 289**. Their standard hex conversions are set once as CSS variables at
the top of `assets/css/styles.css`, and everything else derives from them:

```css
--navy: #0c2340;   /* PMS 289 */
--orange: #fa4616; /* PMS 172 */
```

Give printers and apparel vendors the PMS numbers, not the hex.

## Hosting

The repo includes a `CNAME` file for `MCGirlsWrestling.com`, so it can be served
straight from GitHub Pages:

1. Repo **Settings → Pages** → deploy from the `main` branch, `/` (root).
2. Point the domain's DNS at GitHub Pages (`A` records to GitHub's IPs, or a `CNAME`
   record for `www`).
3. Enable **Enforce HTTPS** once the certificate is issued.

Any static host (Netlify, Cloudflare Pages, school web server) works the same way —
upload the files as-is.

---

The `focus-fuel/` folder in this repo is a separate, unrelated pomodoro timer app.
