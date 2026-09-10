# Listing Board

An interactive spinal charting tool for chiropractors: click where you adjusted, and the
segmental effect, neurological territory, and expected response populate automatically.
Generates both a clinical note and a plain-language patient handout.

## Running it

`listing-board.html` is a single self-contained file with no dependencies, no build step,
and no network calls. Open it in any browser:

```
open listing-board.html          # macOS
xdg-open listing-board.html      # Linux
```

Bookmark it, or drop it on a clinic machine or tablet. It also publishes as a hosted page
unchanged — the file deliberately omits the `<!doctype>`/`<html>`/`<body>` wrapper so it can
be served as an artifact, and browsers render it correctly either way.

## What it covers

- **29 levels** — occiput, C1–C7, T1–T12, L1–L5, sacrum, left and right SI joints, coccyx.
  Click a segment's left wing, body, or right wing to set the side of contact. The two SI
  joints are separate selectable levels, so a bilateral SI adjustment records as two entries.
- **Multi-segment selection.** Keep clicking to build up everything you adjusted that day;
  shift-click takes a whole run of levels at once (say C5 through T2). With more than one
  segment selected, technique, position, PART findings, response, and note apply to all of
  them and "Record all" writes one entry per segment. Clicking the same side again removes
  a segment; each selected segment shows as a chip you can re-side or drop.
  Keyboard throughout: up/down to move, space to select, shift+up/down to extend,
  left/right for side, enter to record.
- **Shared listings are computed, not assumed.** In multi-segment mode the listing dropdown
  offers only listings valid for every selected segment — pick C2–T12 and you get the
  PR/PL/PRS/PLS/PRI/PLI family; include C1, whose atlas listings share nothing with the rest,
  and listings stay blank rather than writing a meaningless one into the record.
- **Listings** by region — Palmer/Gonstead atlas listings (ASRA/ASRP/ASLA/ASLP), the PR/PL/PRS/PLS
  family for cervical, thoracic and lumbar, rib listings, sacral base and innominate listings.
  Set individually per segment in single-segment mode.
- **11 techniques** — Diversified, Gonstead, toggle recoil, Thompson drop, Activator/instrument,
  flexion-distraction, mobilisation, muscle energy, SOT blocking, traction, soft tissue. Changing
  the technique changes the generated effect text.
- **PART findings** (the CMS documentation method) and a response checklist per segment.
- **Auto-populated effect panel** — segmental mechanics for that level, what the chosen technique
  delivers, the level's root/dermatome/myotome/reflex, how it commonly presents, the traditional
  chart association, and region-specific screening to clear before thrusting.
- **Two outputs** — a clinical note in SOAP order, and a patient handout in plain language.
  Copy, print, or export the visit as JSON.
- **Visit storage** — save visits, reload them from History, or pull the whole set of segments
  forward from a patient's last visit with "Repeat last visit".

## Three things to know before clinical use

1. **It documents; it does not decide.** Every generated line is a draft for the treating
   clinician to review, correct, and sign. Nothing about a patient is inferred.

2. **The visceral chart is labelled as traditional.** The organ and symptom associations under
   "Traditional chart association" come from the historical meric / spinal nerve chart. That is
   long-standing chiropractic teaching, not established physiological causation, and it is marked
   as such everywhere it appears — including in the patient handout, so a patient is never handed
   a claim the record cannot support.

3. **Storage is local and unencrypted.** Visits live in the browser's localStorage on that one
   machine. Nothing is transmitted anywhere. This is not a certified EHR, has no backup, and is
   not a HIPAA-compliant system of record — export anything you need to keep.
