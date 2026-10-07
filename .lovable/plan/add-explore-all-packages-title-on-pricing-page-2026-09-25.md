# Add "Explore All Packages" title on Pricing page

## What changes
Add a centred heading **Explore All Packages** directly above the Control Tower / Industry Packs / CollabAI Platform switcher, so it introduces the pricing cards underneath. It sits below the blue "Self-hosted" note.

## Design
- Same style as the other section headings on the page: bold Inter, 3xl on mobile, 4xl on desktop, dark brand colour.
- Compact gap between the heading and the switcher.

## Technical details
- Edit only `src/pages/new/Pricing.tsx`: insert an `h2` before the product toggle `div`.
- Verify with typecheck.
