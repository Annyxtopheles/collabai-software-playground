# Slim down the Control Tower diagram tiles

## What changes

**Left tool tiles (HubSpot, Monday, Notion, Zoom, Slack, Google Drive, GitHub)**
- Each tile shrinks to fit its logo and name instead of stretching the full column width, roughly halving the horizontal space it takes.
- Tiles align toward the centre so the connecting lines still meet them cleanly.

**Right result tiles (Projects & Delivery, BD & Pipeline, etc.)**
- Same treatment: each tile hugs its icon and title rather than filling the column.
- Tiles align toward the centre side so the lines stay tidy.

**Centre block**
- The Control Tower mark image is removed; the block shows only the "Agency Control Tower" wording.

Everything else — stacking order, static blue lines, mobile layout — stays as it is.

## Technical notes

- `src/components/new/agency/AgencyIntegrationsBeam.tsx` only.
- Left column: `items-end` (or `items-start` on mobile) with `w-fit` tiles; right column: `items-start` with `w-fit` tiles, so tiles size to content.
- Remove the `SmoothImage` hub mark and the `ctMark` import; keep the tile's white fill, blue border and glow, tightening its padding slightly now that the logo is gone.
- Elbow measurement logic is untouched; it re-measures on resize and picks up the new tile edges automatically.
