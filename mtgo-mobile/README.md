# MTGO Mobile

Play Magic: The Gathering Online (MTGO) from your phone.

## The short answer

You cannot build a phone app that *is* an MTGO client. MTGO is a
proprietary Windows-only desktop program run by Daybreak Games. There is
no public gameplay API, no web client, and no official mobile build.
Reverse-engineering the wire protocol to write your own client breaks the
MTGO Terms of Service, risks a permanent account ban, and would break every
time the client updates.

What you *can* do, and what this project is about, is **remote play**: run
the real MTGO client on a Windows machine and stream it to your phone with
a low-latency game-streaming stack. That works today with zero code. The
app this project builds is a thin companion layer on top of that stream
which makes MTGO usable on a small touchscreen.

## How it works

```
+----------------------------+          LAN / Internet          +------------------------+
|  Windows host              |  <---- video + audio stream ---- |  Phone                 |
|  - MTGO client             |                                  |  - Moonlight (stream)  |
|  - Sunshine (host server)  |  ---- touch / hotkey input ----> |  - MTGO Mobile overlay |
|  - helper script (hotkeys) |                                  |    (this repo)         |
+----------------------------+                                  +------------------------+
```

- **Sunshine** is an open-source streaming host that runs on the Windows PC.
- **Moonlight** is the open-source client for iOS and Android that receives
  the stream and sends touch and keyboard input back.
- **MTGO Mobile** (this repo) adds MTGO-specific conveniences on the phone:
  big buttons for pass-priority and yield hotkeys, a zoom toggle for card
  text, and a one-tap "wake PC and connect" flow.

## Your options, ranked

| Option | Cost | Latency | Effort | Verdict |
| --- | --- | --- | --- | --- |
| Home PC + Sunshine + Moonlight | Free | Best on LAN, good over Wi-Fi/5G | Low | **Recommended** |
| Home PC + Parsec | Free tier | Good | Low | Good alternative, closed source |
| Cloud Windows VM + Moonlight | Hourly VM fee | Depends on region | Medium | Use if you have no PC at home |
| Native mobile MTGO client | n/a | n/a | n/a | **Not possible** without violating ToS |
| MTG Arena mobile | Free | Native | None | Different game economy, not MTGO |

## Quick start (no code required)

1. On the Windows PC, install and run the MTGO client once so it is logged in.
2. Install [Sunshine](https://github.com/LizardByte/Sunshine) on the PC and
   add MTGO as an application in its web UI.
3. Install [Moonlight](https://moonlight-stream.org/) on your phone.
4. Pair the phone with the PC on the same network, then launch the MTGO app
   from Moonlight.
5. For play away from home, either enable Sunshine's UPnP port forwarding or
   put both devices on a Tailscale network.

Set the host resolution to match your phone's aspect ratio (for example
2400x1080 for most Android phones) so cards do not render letterboxed.

## What the companion app adds

- **Priority bar.** A row of large touch targets bound to MTGO's F-key
  shortcuts (OK / pass, yield until end of turn, yield through turn, and so
  on). Confirm the exact bindings in the MTGO client's settings before
  wiring them.
- **Card zoom.** A toggle that sends the stream a zoom region so card text
  is readable on a 6-inch screen.
- **Wake and connect.** Wake-on-LAN packet, then a Moonlight deep link that
  opens the MTGO stream directly.
- **Session guard.** Warns before the phone sleeps or the app is backgrounded
  during a match so you do not time out.

## Project layout

```
mtgo-mobile/
  README.md   this file
  TASK.md     scoped build plan and status
```

Source for the companion app lands here once Phase 1 in `TASK.md` starts.

## Known limits

- Touch-to-mouse is awkward for drag-heavy actions like attacking with
  many creatures. Use a Bluetooth mouse for tournament play.
- Cellular play is only as good as your upload bandwidth at home.
- Keep the PC awake and logged in. MTGO does not run headless.
- This is not affiliated with Daybreak Games or Wizards of the Coast.
