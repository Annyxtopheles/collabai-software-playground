# SJ section metrics + workflow icon fixes

## What changes

**SJ Innovation section**
- The four metrics (22 / 500+ / 100+ / 4) lose their boxes. They sit in one row, separated by thin vertical divider lines, keeping the blue number and small dark label.
- Certification logos and Trusted By logos no longer glow on hover — they stay plain.

**Agency Workflow in Motion**
- The outcome illustration on the meeting/tasks card (target with arrow) gets its arrow flipped so it reads as an arrow flying into the target, with the arrowhead at the bullseye.
- The checklist illustration's two tick boxes get lighter strokes so they no longer look heavy next to the rest of the artwork.
- The first illustration on the left card is redrawn to match the clean document artwork used on the right card (same proportions and line work), keeping its sparkle accent.

## Technical notes

- `src/components/new/agency/AgencySjBacking.tsx`: replace the stat card markup with a divider row (`divide-x divide-border` on a 2/4-column grid, `border-0`, no card background); remove the `hover:drop-shadow-...` from `blockClass`.
- `src/components/new/agency/AgencyWorkflowMotion.tsx`:
  - `target`: reverse the shaft/arrowhead so the head sits at the centre circle and the tail at the top-right.
  - `checklist`: reduce box and tick stroke width (2 -> ~1.6) while leaving the black rules unchanged.
  - `doc-sparkle`: reuse the `document` path geometry plus the existing blue sparkle.
- Verify with `npx tsgo --noEmit`.
