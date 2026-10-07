# Proven Results: grey "before" bars fill over about 1 minute

## What changes
- The four grey "before" bars on the left fill steadily over about 60 seconds each, starting when the list comes into view, to show how long the old way takes.
- Blue "after" bars, confetti, badges and row timing stay the same, so the fast result lands long before the grey bars finish.
- The grey fill moves at a constant speed instead of speeding up and slowing down, so the slow crawl is always visible.

## Technical details
- In `src/components/new/agency/AgencyBeforeAfter.tsx`, change the grey bar's duration from `fill(7)` to `fill(60)`.
- Allow an optional easing value in `fill` so the grey bar uses `"linear"`. The blue bar keeps `easeInOut`.
- Verify with `npx tsgo --noEmit`.
