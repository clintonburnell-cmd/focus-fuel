# Titan Mindset

Daily motivation for wrestlers. Every morning and every night the app pushes a quote from one of the world's top wrestling coaches and champions, and the full library lets you tap any coach or wrestler and read everything they've said. Alongside the wrestling world, the library also carries legendary coaches and athletes from other sports (Nick Saban, John Wooden, Kobe Bryant, Michael Jordan, and more) and lines from the book Chop Wood Carry Water.

Open [`index.html`](index.html) over HTTP (any static host works: GitHub Pages, Netlify, `npx serve`), then add it to your home screen. No build step.

## What it does

- **Today** shows the morning and evening quote for the day. Every device and the push server agree on the same quote for the same date, and the list cycles through all 380+ quotes before repeating.
- **Quotes** lists every coach and wrestler with a search box and Coach / Wrestler filters. Tap a name for their bio, all their quotes, the source each one came from, and Share / Copy buttons. Every quote is tagged by theme (grit, grace, effort, attitude, gratitude, resilience, belief, discipline); tap a theme chip to see all matching quotes at once.
- **Reminders** turns on two daily notifications, defaulting to **7:30 AM** and **8:30 PM** in the device's own time zone. Both times are editable.

## How the notifications work

Times are always interpreted in the user's local time zone, which the app detects from the device.

| Mode | When it works | Setup |
| --- | --- | --- |
| On-device reminders | App is open in a tab, or installed to the home screen on Android/Chromium (uses Periodic Background Sync) | None. Toggle reminders on. |
| Web Push server | Any installed PWA, including iPhone (iOS 16.4+), even when the app is closed | Run `server/` and paste its URL under **Reminders → Advanced** |

Tapping a notification opens the app on that quote's author.

### Running the push server

```bash
cd titan-mindset/server
npm install
npm run keys          # prints a VAPID key pair
cp .env.example .env  # paste the keys in, set VAPID_SUBJECT to your email
npm start             # listens on http://localhost:8787
```

Deploy it anywhere Node 18+ runs and give the app its HTTPS URL. The server stores each subscriber's push endpoint, time zone, and chosen times in `subscriptions.json`, and once a minute sends the day's quote to everyone whose local clock has reached their morning or evening time. Expired subscriptions are removed automatically.

Endpoints: `GET /vapid-public-key`, `POST /subscribe`, `POST /unsubscribe`, `POST /test`, `GET /health`.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The app: Today, Quotes, Reminders |
| `quotes.js` | The quote library. Add people or quotes here. |
| `shared.js` | Quote-of-the-day selection and time-zone/schedule logic shared by the page, service worker, and server |
| `sw.js` | Service worker: offline cache, scheduled reminders, push handling |
| `manifest.webmanifest`, `icons/` | Installable-app metadata |
| `server/` | Optional Node push server plus `npm test` for the shared logic |

## Adding quotes

Edit `quotes.js`. Each person looks like:

```js
{
  id: "dan-gable",
  name: "Dan Gable",
  role: "coach",            // "coach", "wrestler", "athlete", or "author"
  affiliation: "University of Iowa · 1972 Olympic champion",
  bio: "One sentence.",
  quotes: [
    { text: "If it's important, do it every day. If it isn't, don't do it at all.", source: "Where it was found", themes: ["discipline"] }
  ]
}
```

Themes are: `grit`, `grace`, `effort`, `attitude`, `gratitude`, `resilience`, `belief`, `discipline`.

Quotes were gathered from published interviews, articles, talks, and quote collections; the `source` field records where each one was found so anyone can check or improve the attribution.
