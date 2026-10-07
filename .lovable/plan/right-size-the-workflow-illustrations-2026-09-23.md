# Right-size the workflow illustrations

## Problem
The step graphics now force each row taller and wider than the text needs, leaving empty padding above, below, and beside each graphic (the red boxes in the screenshot).

## Changes
- Shrink the graphic back to about the height of the two lines of text next to it (roughly 56-60px), so rows are no taller than the text alone.
- Remove the inner padding and tinted box around the artwork so the drawing itself fills the whole area it occupies — no empty margin inside the tile.
- Tighten the row's own vertical padding and the gap between graphic and text so nothing is wasted horizontally either.
- Keep the artwork's bolder strokes so it still reads clearly at the smaller size.
- Apply the same treatment to the outcome panel graphic.

## Untouched
Two side-by-side cards, scroll-driven progress, outcome reveal, reduced-motion behaviour, copy, and the filled blue eye stay as they are.

## Technical notes
- File: `src/components/new/agency/AgencyWorkflowMotion.tsx` (`IconTile`, step row, outcome row).
- Drop `toneClass` background/padding usage on the tile; size with a fixed square that matches the text block, artwork at `h-full w-full`.
- Run `npx tsgo --noEmit` after the change.
