## Add custom-work line + CTA under "What's Included in Every Control Tower Plan"

On the Pricing page, directly below the four "included" cards, add a centred line:

- Text: "For Custom agents, integrations, or workflows: contact our team"
- Button: "Contact Now", brand blue, opens the Contact page (/contact) in the same tab, with the site's standard hover letter-spacing and press effect.

Nothing else on the page changes.

### Technical details
- File: src/pages/new/Pricing.tsx, after the grid at line ~349.
- Uses existing `Link` from react-router-dom; flex row on desktop, stacked on mobile; noOrphan-safe wrapping (`[text-wrap:pretty]`).
