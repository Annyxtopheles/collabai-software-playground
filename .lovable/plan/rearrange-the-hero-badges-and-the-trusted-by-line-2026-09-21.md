# Rearrange the hero badges and the trusted-by line

## What changes

1. On the Agency hero, the three chips ("Your Data, Your Server", "Works With Your Existing Tools", "40+ hrs/wk saved") move from above the "Get A Demo Now" button to just below it. Same look, same order.

2. The line "Trusted by Healthcare, Mortgage, Finance, and Property Management Teams / No Data Leaves Your Infrastructure" leaves the hero entirely and appears in the "Backed by SJ Innovation" section, directly under the four stat cards.

Nothing else on the page moves.

## Technical notes

- `src/pages/new/AgencyHub.tsx`: move the badge row `<div>` to after the CTA `<div>`; delete the trusted-by block from the hero.
- `src/components/new/agency/AgencySjBacking.tsx`: wrap the stats grid in a column container and render the trusted-by text below it, centered, using `text-xs text-slate-secondary` tokens (no new colors).
