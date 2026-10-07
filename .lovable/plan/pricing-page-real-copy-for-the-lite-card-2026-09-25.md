# Pricing page: real copy for the Lite card

Replace the placeholder content on the Lite card in "Explore All Packages" with:

- Description: "For small teams getting started. Installed on your server."
- Price: "$299" with "/year" (same style as Starter)
- Features (checkmarks):
  - Up to 10 employees
  - Self-hosted on your server
  - Software license + updates & patches
  - Email / community support
  - Basic connectors included

The "Buy Now" button, card position and layout stay the same.

## Technical details
- `src/pages/new/Pricing.tsx`, Lite entry in `controlTowerTiers`: set `cadence: "/year"`, update `blurb` and `features`, remove the placeholder comment.
