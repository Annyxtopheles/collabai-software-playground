# Agency page: workflow cards + SJ section restructure

## 1. Agency Workflow in Motion — show both workflows side by side

Today the section shows one workflow at a time with toggle buttons above it.

Change to:
- Remove the toggle buttons entirely.
- Render both workflows (`Meeting → tasks → owners` and `Sunday-night Pod Briefing`) as two cards side by side on desktop, stacked on mobile.
- Both cards keep the existing look: trigger badge, numbered step rail with progress line, and the outcome block at the bottom.
- The scroll-driven reveal stays: as the visitor scrolls through the section, steps reveal in both cards at the same time, and the outcome appears at the end. Reduced-motion users see everything fully revealed immediately.
- Card height stays stable while scrolling (the outcome block keeps its reserved space), so no jumping.

## 2. SJ Innovation section — swap the stats and the certifications

Current layout: left column has the SJ logo, headline, paragraph, and a long row of certification pills; the right column has the four stat cards (22 / 500+ / 100+ / 4) plus the trusted-by line.

New layout:
- The four stat cards move into the left column, sitting side by side directly under the SJ paragraph, where the certification pills are now.
- The certifications move into the right column and become blocks in a grid — each block shows the certification logo on top and its name underneath, mirroring how the stat cards show a value on top and a label underneath.
- Each certification block keeps the same rounded card styling and hover glow as the stat cards.
- The ISO 9001 block keeps its link to the LinkedIn post (opens in a new tab).
- Inc. 5000 stays part of the certification set.
- The "Trusted by Healthcare, Mortgage…" line and the "Trusted By" client logo strip below stay unchanged.

## Technical notes

- `src/components/new/agency/AgencyWorkflowMotion.tsx`: drop the `active` state and toggle buttons; map over `workflows` into a responsive grid (`md:grid-cols-2`), extracting the current card markup into a local card component driven by shared scroll progress.
- `src/components/new/agency/AgencySjBacking.tsx`: swap the contents of the two grid columns, adjust the column ratio for the new content weight, replace `chipClass` pills with a logo-over-label block grid (2 columns mobile, 3–4 on desktop), keep `SmoothImage` with reserved space and lazy loading.
- No data or business-logic changes; presentation only. Verify with `npx tsgo --noEmit`.
