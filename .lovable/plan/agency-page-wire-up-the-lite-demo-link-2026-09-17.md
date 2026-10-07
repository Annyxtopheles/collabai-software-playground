# Agency page: wire up the Lite demo link

The Lite demo lives at https://agencylite.collabai.software — it is already stored
as the agency "lite" demo, but the pricing block does not link to it.

## Changes

1. **Pricing block ("Get Agency Control Tower Now")** — turn the line
   "Or get Lite Version at just $299" into a linked call to action:
   keep the line as text and add a secondary button "Try the Lite Version" next to
   "Book a Call with an Expert", opening https://agencylite.collabai.software in a new tab.

2. **Demos band** — confirm the existing demos band on this page shows the lite link
   with a clean URL (no trailing slash) so both demo options are reachable.

3. No other links on the page currently point to a lite demo, so nothing else changes.

## Technical notes

- Lite URL comes from `demos.lite.url` in `src/data/verticals.ts` (agency entry),
  updated to `https://agencylite.collabai.software`.
- Pricing button added in `src/pages/new/AgencyHub.tsx`, styled as the outline variant
  on the dark section, `target="_blank" rel="noopener noreferrer"`, with ExternalLink icon.
