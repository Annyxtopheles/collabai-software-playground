# Agency page: one sticky button, all free-demo buttons go to Book Demo

## What changes
1. **Sticky bar (bottom of the Agency page):** remove the "Book demo" button. Rename "Try live demo" to "Get Free Demo Now".
2. **Every "Get Free Demo Now" button on the Agency page** opens the Book Demo page in the same tab:
   - Hero button (currently opens the external live demo)
   - Proven Results button (currently opens the external live demo)
   - Pricing card button (currently goes to the contact page)
   - Sticky bar button

Other industry pages that share the sticky bar keep their current two buttons.

## Technical notes
- `StickyNicheCTA.tsx`: add optional props `hideBookDemo?: boolean` and `demoLabel?: string` (default "Try live demo"), so other hubs are unchanged.
- `AgencyHub.tsx`: pass `demoUrl="/book-demo"`, no `demoExternal`, `hideBookDemo`, `demoLabel="Get Free Demo Now"`. Hero `<a>` becomes `<Link to="/book-demo">` (icon swapped to ArrowRight); pricing `Link` to `/book-demo`; pass `demoUrl="/book-demo"` to `AgencyBeforeAfter`.
- `AgencyBeforeAfter.tsx`: render internal `Link` when `demoUrl` starts with "/", no new-tab.
- Remove unused imports; run `npx tsgo --noEmit`.
