# Focus Fuel

A pomodoro-style focus timer with a plant-growth metaphor: a completed focus
session grows a plant, resetting mid-session wilts it.

The whole app is `focus-fuel/index.html` — one self-contained file with inline
`<style>` and `<script>`. There is no build step, no package manager, no
dependencies, and no test suite. Run it by opening the file in a browser.

## Constraints

- **Keep it a single dependency-free file.** No npm, no bundler, no external
  scripts, stylesheets, or fonts. If something needs a library, inline it or
  find another way.
- **Colors live in CSS custom properties, defined in four places.** A token
  added to `:root` must be mirrored in every block below it that overrides it,
  or the theme breaks in one mode:
  - `:root` — light defaults
  - `@media (prefers-color-scheme: dark)` — system dark
  - `:root[data-theme="dark"]` — explicit dark
  - `:root[data-theme="light"]` — explicit light
  Nothing in the page sets `data-theme` itself; the host does.
- Never hardcode a color inline when a `--token` exists for it.

## State

Stats persist in `localStorage` under the key `focusFuelStats`, shaped
`{ date, today, total, wilted }`. `date` is a `toDateString()` value used to
roll `today` over at midnight. `loadStats()` must stay tolerant of missing or
malformed values — it is the only migration path for existing users.

## Verifying changes

There are no automated tests. After changing timer or plant logic, actually
exercise it in a browser: start a focus session, let it run down, reset
mid-session, and confirm the counts and the plant SVG both respond.
