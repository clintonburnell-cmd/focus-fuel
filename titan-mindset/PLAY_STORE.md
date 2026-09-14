# Publishing Titan Mindset to Google Play

Titan Mindset is a web app, so the Play Store build is a **Trusted Web Activity (TWA)**: a thin Android wrapper, built with Google's Bubblewrap tool, that opens the hosted app full-screen with no browser chrome. Push notifications, periodic background sync, offline caching, and the home-screen icon all work through it. This is the same approach used by many Play Store apps built from PWAs.

You need three things: the app hosted on HTTPS, a Play Console account, and the Android package built and signed. Work top to bottom.

## 1. Host the app on HTTPS

The Android app points at a live URL, so hosting comes first.

**Easiest: GitHub Pages.** This repo includes `.github/workflows/pages.yml`, which deploys everything on every push to `main`.

1. Merge the pull request to `main`.
2. In the GitHub repo go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. After the workflow finishes, the app is at `https://clintonburnell-cmd.github.io/focus-fuel/titan-mindset/`.

Any other static host works too (Netlify, Vercel, Cloudflare Pages, Firebase Hosting). A custom domain such as `titanmindset.com` looks better in the store listing and makes step 4 cleaner, but it is optional.

Check the hosted app with Chrome DevTools → Application → Manifest: no errors, installable.

## 2. Create the Play Console account

Register at https://play.google.com/console (one-time fee, identity verification, and for personal accounts a 12-day closed test with 12 testers before production is allowed). While it is pending you can do everything below.

## 3. Build the Android app with Bubblewrap

Install once (Node 18+ and a Java JDK 17 are required; Bubblewrap can download the Android SDK for you):

```bash
npm install -g @bubblewrap/cli
```

Then, from `titan-mindset/android/`:

1. Edit `twa-manifest.json`: replace every `YOUR-DOMAIN.example` with your real host (for GitHub Pages: `clintonburnell-cmd.github.io`, and keep the `/focus-fuel/titan-mindset/` paths). Change `packageId` if you want a different Android package name; it cannot be changed after the first upload.
2. Run:

```bash
bubblewrap build
```

The first run creates a signing keystore (`android.keystore`). **Back it up and keep the passwords.** It is gitignored on purpose. The build produces `app-release-bundle.aab` (upload this to Play) and `app-release-signed.apk` (install on a phone to test).

To test on a phone: enable developer mode and USB debugging, then `adb install app-release-signed.apk`.

## 4. Link the app to the website (Digital Asset Links)

Android only shows the app full-screen if the website says it trusts the app. That is the `.well-known/assetlinks.json` file already in this folder.

1. In Play Console open the app → **Setup → App signing** (you must upload the bundle once first, see step 5). Copy the **SHA-256 certificate fingerprint** under *App signing key certificate*. Use this one, not the upload key, because Google re-signs the app.
2. Paste it into `titan-mindset/.well-known/assetlinks.json` replacing the placeholder, and make sure `package_name` matches `packageId`.
3. Push to `main` so it deploys.
4. Verify at `https://YOUR-HOST/.well-known/assetlinks.json` (note: at the site root, which is what the workflow serves for GitHub Pages: `https://clintonburnell-cmd.github.io/.well-known/...` will **not** work for a project site. For a project site under `/focus-fuel/`, asset links must be served from the domain root, so use a custom domain or a user site repo named `clintonburnell-cmd.github.io`. See the note at the end.)

If the link is wrong the app still runs, but with a browser address bar at the top.

## 5. Create the store listing

In Play Console → **Create app**: name *Titan Mindset*, app (not game), free.

Fill in the dashboard tasks. Suggested answers:

- **Privacy policy URL**: `https://YOUR-HOST/titan-mindset/privacy.html` (included in this folder).
- **App access**: all functionality available without special access.
- **Ads**: no ads.
- **Content rating**: complete the questionnaire; it will come out *Everyone*.
- **Target audience**: 13 and over is the simplest choice. Selecting under-13 triggers the Families policy review.
- **Data safety**: *Does your app collect or share user data?* → **No**. The app stores settings on-device only. If you run the optional push server, it receives a push token and time zone; that still counts as no personal data collected, but say so honestly if asked.
- **Government apps / financial features / health**: no.
- **Category**: Health & Fitness (or Sports). Tags: motivation, wrestling.

**Store listing text** (edit freely):

- Short description (80 chars max): `Daily wrestling motivation from the world's best coaches, morning and night.`
- Full description: see `store/description.txt`.

**Graphics required**:

| Asset | Size | File |
| --- | --- | --- |
| App icon | 512×512 PNG | `icons/icon-512.png` |
| Feature graphic | 1024×500 PNG | `store/feature-graphic.png` |
| Phone screenshots (2 to 8) | 16:9 to 9:16, at least 320 px | `store/screenshot-*.png` |

Upload `app-release-bundle.aab` under **Testing → Internal testing** first. Install it from the internal test link on your phone, check that notifications arrive, then promote to production.

## 6. Notifications on Android

- The app asks for notification permission when the user turns reminders on. On Android 13+ Chrome shows the system prompt.
- On-device reminders use the service worker and Periodic Background Sync, which Chrome allows for installed apps. Android may still delay them on aggressive battery-saver settings.
- For guaranteed delivery, run the push server in `server/` and put its URL in the app under **Reminders → Advanced**. The server sends at each user's local time even when the app is closed. Hosting options: any Node host (Render, Railway, Fly.io, a small VPS). It needs a persistent disk for `subscriptions.json` or swap the file store for a database.

## 7. Updating the app later

Web changes (new quotes, UI fixes) go live the moment you push to `main`; users do not need a Play update. Only re-run `bubblewrap build` and upload a new bundle when the Android wrapper itself changes (new package name, icon, or Bubblewrap version). Bump `appVersionCode` each time.

## Note on GitHub Pages project sites and asset links

Digital Asset Links must be served from the **root** of the host (`https://host/.well-known/assetlinks.json`). A GitHub Pages *project* site lives under `/focus-fuel/`, so the file would land at `/focus-fuel/.well-known/` and Android will not find it. Two clean fixes:

1. Point a custom domain (e.g. `titanmindset.com`) at the Pages site. Pages then serves the repo root at the domain root and asset links work.
2. Host the app on Netlify, Vercel, or Cloudflare Pages, which serve the repo root at the domain root by default.

Everything else in this guide is the same either way.
