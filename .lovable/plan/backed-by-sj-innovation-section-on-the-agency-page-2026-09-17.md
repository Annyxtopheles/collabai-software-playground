# "Backed by SJ Innovation" section on the Agency page

Add a credibility section just above the "No rip-and-replace." integrations block, matching the layout of the reference image.

## What it looks like

- Small "POWERED BY" pill at the top
- SJ Innovation logo (the uploaded SVG) below it
- Headline: "Backed by 22 years of enterprise engineering" with "22 years" in the blue accent
- Short paragraph: Agency Control Tower is a product of SJ Innovation — the NYC software company founded in 2004 that has shipped 500+ production systems across healthcare, finance, real estate, and government.
- Four small trust chips: Anthropic Claude Partner, AWS Partner Network, Inc. 5000, ISO 9001 Certified
- A text link "Learn about SJ Innovation" opening in a new tab
- On the right, a dark stat card in a 2x2 grid: 22 Years, 500+ Projects, 100+ Team, 4 Offices
- Two columns on desktop, stacked on mobile

## Technical notes

- New component `src/components/new/agency/AgencySjBacking.tsx`, rendered in `src/pages/new/AgencyHub.tsx` immediately before the integrations section (currently around line 352).
- Logo uploaded via `lovable-assets` to `src/assets/sj-logo.svg.asset.json` and referenced by its CDN url in an `<img>` with alt text "SJ Innovation".
- Styling uses existing tokens only (`brand-primary`, `brand-secondary`, `slate-light`, `slate-secondary`, `border`, `card`) — no hardcoded colors.
- Static content only; no data or backend changes.

## Open items

- The external link target for "Learn about SJ Innovation" defaults to https://sjinnovation.com — tell me if it should point elsewhere.
