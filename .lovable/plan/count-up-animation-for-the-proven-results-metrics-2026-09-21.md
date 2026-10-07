# Count-up animation for the Proven Results metrics

Make the four numbers (40+, 2,500+, 10,000+, 166) animate from 0 up to their final value the first time the Proven Results section scrolls into view.

## Behaviour

- Numbers start at 0 and count up smoothly, easing out so they slow down as they land on the final value.
- Animation runs once per page visit, triggered when the metrics row is properly in view (same in-view approach already used elsewhere on the page).
- Formatting is preserved exactly: thousands separators (2,500 / 10,000) and the trailing "+" where present.
- Labels underneath stay unchanged.
- If the visitor has reduced-motion enabled, the final numbers show immediately with no counting.

## Technical notes

- Add a small reusable `CountUp` component (`src/components/ui/CountUp.tsx`) that takes a target number, optional suffix, duration, and a `start` flag; it animates with `requestAnimationFrame` and an ease-out curve, and cleans up on unmount.
- In `src/components/new/agency/AgencyBeforeAfter.tsx`, change the `metrics` array to hold numeric `value` plus `suffix`, and render each with `CountUp`.
- Trigger via the existing `useScrollReveal` hook on the metrics grid wrapper (it already unobserves after first intersect, giving the once-only behaviour); use a threshold that requires the row to be meaningfully visible.
- No layout or styling changes; text sizes and spacing stay as-is.
