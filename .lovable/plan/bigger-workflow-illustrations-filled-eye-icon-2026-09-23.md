# Bigger workflow illustrations + filled eye icon

## Goal
In "Agency in Motion", the step graphics should read as illustrations at reference-image scale, not small icons. Also replace the eye in the 4th step of the Sunday-night pod briefing with a filled blue eye with a white pupil.

## Changes

### 1. Much larger illustration tiles
- Increase the tile from 56px to roughly 88px on mobile and 104px on desktop, with the drawing filling nearly the whole tile (minimal inner padding).
- Scale the artwork itself so strokes stay proportional (thicker strokes, larger shapes) instead of a small glyph floating in a big box.
- Tighten the gap between the tile and its text so the graphic clearly owns its space beside the copy.
- Do the same for the outcome panel graphic so it matches the new scale.

### 2. Filled eye
- Replace the current stroked eye in the "people + eye" graphic with a solid brand-blue eye shape and a white pupil, in the same larger scale.

### 3. Layout safety
- Keep the two side-by-side workflow cards, scroll-driven progress rail, outcome reveal, and reduced-motion behaviour untouched; only sizing and the eye artwork change.
- Verify nothing wraps awkwardly at desktop and mobile widths.

## Technical notes
- File: `src/components/new/agency/AgencyWorkflowMotion.tsx` (icon registry, `IconTile`, step and outcome rows).
- SVGs keep their 32-unit viewBox; scale via tile size and stroke widths.
- Colors stay brand blue + black tokens; run `npx tsgo --noEmit` after the edit.
