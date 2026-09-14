# MCGirlsWrestling.com

Website for **Mountain Crest High School Girls Wrestling** — Hyrum, Utah.

A plain static site: HTML, CSS and a little vanilla JavaScript. No build step, no
dependencies, no framework. Open `index.html` in a browser and it works.

## Pages

| File | Tab | What's on it |
| --- | --- | --- |
| `index.html` | Home | Intro, quick links, next few events, how to join |
| `schedule.html` | Schedule | Full season calendar, filters, `.ics` calendar download |
| `nutrition.html` | Nutrition | Macro targets, fuel calculator, competition day, weight management |
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

1. ~~**Logo.**~~ Done — `assets/img/logo.png` is the official running-mustang mark
   from the athletic director, with the navy background keyed out to transparency
   so it sits on any section, and recolored to the school's PMS 172 orange.
   `assets/img/favicon.png` is the same mustang on PMS 289 navy.
2. **sportsYou link.** Every `https://sportsyou.com` link should point at the team's
   actual join/team URL. They are in the nav and footer of all six pages —
   `grep -rl "sportsyou.com" *.html` finds them.
3. ~~**Schedule.**~~ Done — `data/schedule.js` holds the real 2026-27 schedule from
   the team workbook (updated Sept 11, 2026). Two weekends are still marked as being
   decided (Jan 8-9 and Jan 15-16), and most start times are not set yet; add them as
   they come in.
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

## Nutrition page

The nutrition content is adapted from the coaching staff's own handouts — the
*Nutrition Basics* presentation from the UVU wrestling retreat and the *Basic
Nutrition Guidelines* sheet — plus NFHS/UHSAA weight management rules. The page
credits both at the bottom. The per-kilogram targets that drive the daily fuel
calculator live in the `FUEL` object near the bottom of `assets/js/main.js`:

```js
var FUEL = {
  training:    { carbs: [7, 10] },   // g per kg bodyweight
  competition: { carbs: [6, 8] },
  protein:     [1.5, 2]
};
```

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
