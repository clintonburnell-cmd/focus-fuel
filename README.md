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

The sportsYou app is linked from the main nav, the footer and several pages, and
the Pre & Post Season page links to White Rhino Wrestling, where the team's official
pre and post season training runs.

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

Past events drop off the "Upcoming" views automatically — no need to delete them.

## Things to replace before going live

1. ~~**Logo.**~~ Done — `assets/img/logo.png` is the official running-mustang mark
   from the athletic director, with the navy background keyed out to transparency
   so it sits on any section, and recolored to the school's PMS 172 orange.
   `assets/img/favicon.png` is the same mustang on PMS 289 navy.
2. **Subscribing families.** For parents to add the team calendar to their phones,
   the Google Calendar has to be shared publicly (Calendar settings → Access
   permissions → "Make available to public"). Once it is, the site can carry a
   subscribe button and a live embed instead of only the generated list.
3. **sportsYou link.** Every `https://sportsyou.com` link should point at the team's
   actual join/team URL. They are in the nav and footer of all six pages —
   `grep -rl "sportsyou.com" *.html` finds them.
4. ~~**Schedule.**~~ Done — `data/schedule.js` holds the real 2026-27 schedule from
   the team workbook (updated Sept 11, 2026). Two weekends are still marked as being
   decided (Jan 8-9 and Jan 15-16), and most start times are not set yet; add them as
   they come in.
5. **Accomplishments.** `data/results.js` holds the year-by-year state results. Team
   titles and scores (5 4A championships: 2021, 2022, 2023, 2024, 2026) were compiled
   from published coverage — Deseret News, KSL, The Herald Journal and Cache Valley
   Daily. The individual lists are the champions those articles named, **not** full
   top-six placer lists, and 2024 and 2025 individual results are still missing.
   Verify against the official UHSAA/Trackwrestling brackets and fill in the gaps.
   Placers are supported alongside champions: give each wrestler a `place` from 1 to
   8 (1 renders as a highlighted champion row), or omit `place` and pass a short
   `result` string when the exact finish isn't confirmed. A season's `medalists`
   count shows how many podium names are still missing. The region-results table in
   `accomplishments.html` is still empty.
6. **Contact info.** Add coach names/emails in the footer if the staff wants them
   public.

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
