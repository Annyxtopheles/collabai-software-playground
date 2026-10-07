# Add a "Lite" placeholder pricing card

## What changes
On the Pricing page, under "Explore All Packages" (Control Tower view), add a fourth card called **Lite**, placed first (left of Starter) as the entry-level option.

Placeholder content, to be replaced when you send final copy:
- Name: Lite
- Price: $299 (matches the Lite offer already shown on the page)
- Short line: "Placeholder — details coming soon."
- A few placeholder feature bullets
- Button: "Buy Now", opening the Lite site (agencylite.collabai.software) in a new tab

## Layout
- Four cards in one row on desktop, two per row on tablets, stacked on phones.
- Growth stays the highlighted card.

## Technical details
- `src/pages/new/Pricing.tsx`: prepend a Lite entry to `controlTowerTiers` (external CTA), change the grid to `md:grid-cols-2 lg:grid-cols-4`.
- Verify with typecheck.
