# Bigger, bolder workflow step icons

Make the icons in "Agency Workflow in Motion" match the reference: large, legible, tightly framed, and coloured in the brand palette.

## What changes

- Icon tiles grow from 40px to roughly 56px, with the artwork itself filling most of the tile instead of floating in empty space.
- Tile corners, padding and the gap to the text tighten so the icon sits snugly beside the copy and the row stays compact.
- Colour treatment: brand blue as the lead colour, with black as the supporting colour. Tinted pastel backgrounds stay very light, matching the reference cards.
  - Bar chart: three bars, the two shorter ones black, the tallest one brand blue.
  - Checklist: black rule lines with blue check boxes/marks.
  - Document / document-with-sparkle: black page outline, blue content lines, blue-gold accent on the sparkle.
  - Envelope: black outline, blue interior flap accent.
  - Person / people: blue figure with a black or blue accent badge.
  - Target (outcome): blue rings with a black arrow.
  - Slack keeps its official multi-colour brand mark.
- Outcome icon rendered at the same larger size as the step icons.

## Technical notes

- Replace the current generic Lucide glyphs in `AgencyWorkflowMotion.tsx` with small purpose-drawn inline SVGs (two-tone: brand blue + foreground black), still pure vector, `aria-hidden`, no raster assets.
- Colours come from existing tokens (`--brand-secondary` for blue, `--brand-primary` for black); tile backgrounds use low-opacity tints of those tokens rather than new hardcoded hexes, so no palette drift.
- The Slack step keeps the existing `slack.svg` logo asset, sized up to match.
- Keep the scroll-driven reveal, rail progress, outcome hysteresis and reduced-motion behaviour untouched — this is a presentation-only change.
- Verify with `npx tsgo --noEmit` and a screenshot of the section at desktop width.
