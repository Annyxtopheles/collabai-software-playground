# Two new illustrations + custom artwork in Proven Results

## 1. Swap two card illustrations

Replace the artwork in two cards of "How Does Agency Control Tower Help Small & Mid-Scale Businesses" with the newly uploaded versions:

| Card | New picture |
| --- | --- |
| Pods, OKR & Productivity | Pods_OKR_Productivity_1-2 |
| Projects & Delivery | Projects_Delivery_1-2 |

Card order, labels, titles, paragraphs and the smooth fade-in stay exactly as they are. Alt text is unchanged.

## 2. Hand-drawn icons in Proven Results

The four rows in Proven Results currently use small generic outline icons (clock, magnifier, document, calendar on the left; lightning, sparkle, brain, target on the right) — eight in total. These get the same treatment already used in "Agency Workflow in Motion": custom inline vector artwork in brand blue and black, sized to match the row height, no tinted tile, minimal padding, sitting tight beside the text.

Artwork per item:

- 2 hrs writing status reports -> clock with blue rim, black hands
- 15 min with an AI draft -> document with blue sparkle
- 30 min post-meeting admin -> stacked paper with black rules
- 0 min, tasks auto-created -> checklist with blue ticks
- 45 min hunting context -> magnifier with blue lens, black handle
- 2 min semantic search -> blue search burst over document lines
- 90 min L10 prep -> calendar, black grid, blue header
- 5 min agenda auto-populated -> target with blue arrow landing inside

Layout, copy, the savings pills, the counting metrics and the CTA all stay as they are.

## Technical notes

- Upload both SVGs via `lovable-assets create` into `src/assets/*.asset.json`-style pointers, swap the two imports in `src/pages/new/AgencyHub.tsx`, and delete the superseded pointers.
- In `src/components/new/agency/AgencyBeforeAfter.tsx`, replace the Lucide icon references with an inline SVG registry mirroring the `IconTile` approach in `AgencyWorkflowMotion.tsx` (52px square, `currentColor`-free explicit brand blue `hsl(var(--brand-secondary))` and `hsl(var(--brand-primary))`, no background tile).
- Row grid may need `items-start` tweaks so the taller graphics align cleanly; keep the responsive `sm:grid-cols-[1fr_auto_1fr_auto]` structure.
- Run `npx tsgo --noEmit` after the change.
