# Focus Fuel

A tiny pomodoro-style focus timer with a plant-growth visual metaphor. Every completed focus session grows a plant; resetting mid-session wilts it.

## Usage

Open [`index.html`](index.html) in a browser — no build step or dependencies required.

- **Focus / Break** — toggle between session types.
- **Start / Pause** — control the timer.
- **Reset** — restart the current session (wilts the plant if a focus session was in progress).
- Adjust the **Focus** and **Break** durations (in minutes) before starting a session.

Session counts (today, total grown, total wilted) are saved to `localStorage` and persist between visits.
