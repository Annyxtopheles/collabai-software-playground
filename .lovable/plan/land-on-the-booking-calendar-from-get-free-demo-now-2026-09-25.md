# Land on the booking calendar from "Get Free Demo Now"

## What changes
Clicking any "Get Free Demo Now" button on the Agency page opens Book Demo scrolled to the booking calendar, with a little breathing room above it. Right now the page keeps your scroll position from the Agency page, which is why you land near the footer.

Opening Book Demo any other way (the menu, a typed address) still starts at the top as usual.

## Technical notes
- The site has no scroll reset when you move between pages, so Book Demo inherits the Agency page's scroll position.
- `BookDemo.tsx`: give the calendar wrapper `id="calendar"` and `scroll-mt-24` so it clears the fixed header. On mount, if `location.hash === "#calendar"`, scroll it into view after a frame. Otherwise scroll to the top.
- `AgencyHub.tsx` (hero, pricing, sticky bar) and `AgencyBeforeAfter` (via its `demoUrl` prop): change `/book-demo` to `/book-demo#calendar`.
- Run `npx tsgo --noEmit`.
