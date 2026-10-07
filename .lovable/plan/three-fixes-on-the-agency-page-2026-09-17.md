# Three fixes on the Agency page

## 1. Orphan word in the reviews headline
"Vouched By Employees & Employers Like You" drops "You" onto its own line. Add balanced text wrapping and keep "Like You" together so the headline breaks evenly.

File: `src/components/new/agency/AgencyVouchedReviews.tsx`

## 2. "See it running" band gets a colored background
The demos band currently sits on plain white. Switch it to the light grey band tone used by the neighbouring sections, with a top/bottom border so it reads as its own band. This band is shared with the other industry hub pages, so they gain the same tone — consistent with the alternating pattern already in use there.

File: `src/components/new/sections/DemosBand.tsx`

## 3. Agency pack card moves into the "See it running" section
Instead of a separate grey band right below, the Agency pack pricing card (the $2,500/year card with "See full pricing" and "Talk to sales") is rendered inside the demos section, directly under the two demo cards. The standalone section wrapper around it is removed so there is no duplicated padding.

Implementation: `DemosBand` gets an optional `footer` slot rendered below the demo cards; on the agency page the pack card is passed into that slot. Other hub pages pass nothing and are unchanged.

Files: `src/components/new/sections/DemosBand.tsx`, `src/pages/new/AgencyHub.tsx`

No copy changes to the card itself.
