# Task: MTGO on a phone

## Goal

Play real MTGO matches from a phone with acceptable latency and a usable
touch interface.

## Constraint that shapes everything

MTGO has no public API and no mobile client. A native reimplementation is
out of scope permanently (Terms of Service, ban risk, protocol churn). Every
phase below builds on streaming the real Windows client.

## Phases

### Phase 0. Prove remote play works (no code)

- [ ] Install Sunshine on the Windows PC and add MTGO as an app.
- [ ] Install Moonlight on the phone and pair on LAN.
- [ ] Play one full match on LAN. Record perceived latency and readability.
- [ ] Repeat over cellular with Tailscale. Record whether it is playable.
- [ ] Decide host resolution and scaling that keeps card text legible.

Exit criteria: one match completed from the phone without touching the PC.

### Phase 1. Companion app MVP

Stack: Expo (React Native) so one codebase ships to iOS and Android.

- [ ] Scaffold `mtgo-mobile/app` with Expo.
- [ ] Settings screen: host IP or Tailscale name, MAC address for
      Wake-on-LAN, Moonlight app name.
- [ ] Wake-on-LAN sender.
- [ ] "Connect" button that opens Moonlight via deep link to the MTGO app.
- [ ] Floating priority bar overlay (Android only at first, using a
      system-overlay permission) with buttons that send F-key presses
      through a tiny WebSocket helper running on the PC.
- [ ] PC helper: a small Python or AutoHotkey script that listens on
      localhost, receives a key name, and injects the keystroke into the
      MTGO window.

Exit criteria: pass priority for a full match using only the overlay
buttons plus the stream.

### Phase 2. Playability

- [ ] Card zoom toggle that changes the Sunshine stream crop or sends a
      magnifier hotkey.
- [ ] Session guard: keep screen awake during a match, warn on background.
- [ ] Haptic feedback on button presses.
- [ ] Bluetooth mouse detection to hide the overlay when a mouse is paired.

### Phase 3. Polish

- [ ] iOS overlay approach (picture-in-picture or a split-screen layout
      instead of a system overlay, which iOS does not allow).
- [ ] Profiles for multiple PCs.
- [ ] Optional cloud-VM setup guide for players with no home PC.

## Non-goals

- Reimplementing any part of the MTGO client or protocol.
- Automating in-game decisions. The helper only forwards keystrokes the
  player explicitly taps.
- Supporting MTG Arena. It already has a native mobile app.

## Open questions

- Exact MTGO F-key bindings for yield variants. Verify in the client's
  settings before hard-coding.
- Whether Moonlight's Android deep-link scheme is stable enough to rely on,
  or whether the app should embed the Moonlight client library instead.
- Minimum upload bandwidth at home for a stable 1080p 60fps stream over 5G.

## Status

Phase 0 not started. No code yet. Docs only.
