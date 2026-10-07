# Agency testimonials: continuous sliding carousel

Replace the static two-column grid of review cards in the "Vouched By Employees & Employers Like You" section with a compact marquee-style carousel that slides continuously from right to left.

## What changes

- The six review cards sit in one horizontal row that scrolls smoothly and endlessly, right to left, with no arrows or dots.
- Cards get more compact: smaller photo slot, tighter padding, fixed card width, review text trimmed to a few lines so heights stay even.
- Motion pauses when the visitor hovers over the strip, so a review can be read.
- Edges fade out softly so cards appear and disappear instead of cutting off hard.
- Heading, subtitle, section background and star ratings stay exactly as they are.
- On phones the cards narrow but the same sliding behaviour applies.

## Technical notes

- Edit only `src/components/new/agency/AgencyVouchedReviews.tsx`.
- CSS-driven marquee (duplicate the list twice, `translateX(-50%)` keyframes, ~40s linear infinite), same pattern already used in `src/components/new/sections/IntegrationsMarquee.tsx` — no new dependency, no embla carousel.
- `hover:[animation-play-state:paused]` on the track; `prefers-reduced-motion` disables the animation and falls back to a horizontally scrollable row.
- Duplicated cards get `aria-hidden="true"`; the section keeps a single accessible list.
- Card: fixed `w-[340px] sm:w-[380px]`, `shrink-0`, reduced padding, `h-14 w-14` icon slot.
- Mask the edges with a `[mask-image:linear-gradient(...)]` utility on the wrapper.
- Placeholder review content stays unchanged.
