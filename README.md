# MCGirlsWrestling.com

Website for **Mountain Crest High School Girls Wrestling** — Hyrum, Utah.

A plain static site: HTML, CSS and a little vanilla JavaScript. No build step, no
dependencies, no framework. Open `index.html` in a browser and it works.

## Pages

| File | Tab | What's on it |
| --- | --- | --- |
| `index.html` | Home | Intro, quick links, next few events, how to join |
| `schedule.html` | Schedule | Full season calendar, filters, `.ics` calendar download |
| `nutrition.html` | Nutrition | Fueling, hydration, competition day, safe weight management |
| `seasons.html` | Pre & Post Season | Summer/fall prep, offseason lifting, freestyle, camps |
| `accomplishments.html` | Accomplishments | Year-by-year state results, region results, milestones |
| `faq.html` | FAQ | Joining, gear, weight classes, safety, travel, meet days |

The sportsYou app is linked from the main nav, the footer and several pages.

## Updating the schedule

Edit **`data/schedule.js`** — it is the only file you need to touch to change the
calendar. Both the home page and the schedule page read from it. Each event looks
like this:

```js
{
  date:    "2026-12-05",   // required, YYYY-MM-DD
  endDate: "2026-12-06",   // optional, multi-day tournaments
  time:    "9:00 AM",      // optional
  title:   "Mustang Girls Invitational",
  type:    "tournament",   // "dual" | "tournament" | "event"
  location:"Mountain Crest HS",
  home:    true,           // true = home, false = away, omit = neutral site
  notes:   "Weigh-ins 7:30 AM"   // optional
}
```

Past events drop off the "Upcoming" views automatically — no need to delete them.

## Things to replace before going live

1. **Logo.** `assets/img/logo.svg` is a hand-traced stand-in of the Mustang mark
   drawn as vector art with a **transparent background**, so it blends into whatever
   is behind it. To use the official school artwork instead, drop the file in as
   `assets/img/logo.png` and change the two `<img src="assets/img/logo.svg">` lines
   in each page (header and hero) — `grep -rn "logo.svg" *.html` finds them. If the
   official file has the solid navy square behind the horse, it will still blend:
   the site's `--navy` is set to that same navy (`#0b0f2f`). Check with the school
   before publishing district logos.
2. **sportsYou link.** Every `https://sportsyou.com` link should point at the team's
   actual join/team URL. They are in the nav and footer of all six pages —
   `grep -rl "sportsyou.com" *.html` finds them.
3. **Schedule.** The events in `data/schedule.js` are placeholders for the 2026-27
   season. Replace with the real schedule from the athletic office.
4. **Accomplishments.** `data/results.js` holds the year-by-year state results. Team
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
5. **Contact info.** Add coach names/emails in the footer if the staff wants them
   public.

## Colors

Mountain Crest orange and blue, set once as CSS variables at the top of
`assets/css/styles.css`:

```css
--navy: #00376e;   /* blue */
--orange: #f26a21; /* orange */
```

Adjust those two values to match the official district colors exactly and the whole
site follows.

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
