# Add Agency Control Tower Lite offer on Pricing page

## What changes
Directly below the line "All pricing is annual. Software is installed on your server — your data never leaves your environment." on the Pricing page, add a small centred offer block:

- Title: **Get Agency Control Tower Lite**
- Price line: **At Just $299**
- Button: **Get Now**

## Button destination
"Get Now" opens the Lite version at https://agencylite.collabai.software in a new tab (same link used earlier on the Agency page). Tell me if it should go somewhere else, such as Book Demo or Contact.

## Design
- Compact, centred, matches the existing "Contact Now" strip style (brand blue button, Inter, no drop shadow).
- Shown only for the Control Tower plans view (not the Industry Packs view, which has its own note).
- Stacks neatly on phones.

## Technical details
- Edit only `src/pages/new/Pricing.tsx`, right after the pricing footnote `<p>`.
- External link uses `target="_blank" rel="noopener noreferrer"`.
- Verify with typecheck.
