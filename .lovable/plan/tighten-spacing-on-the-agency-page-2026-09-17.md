# Tighten spacing on the Agency page

The page has large empty gaps between sections, so it scrolls much longer than it needs to. This pass reduces vertical padding site-page-wide on /agency without changing any copy, images, colors, or layout structure.

## What changes

- Reduce the tall top/bottom padding on the big sections (hero, workflows, Proven Results, video, integrations, SJ backing, reviews, 3 reasons, pricing, FAQ lead-in) roughly 30-40%: the `py-24` bands become `py-14`, and the `py-20` bands become `py-12`.
- Reduce the gap between a section's heading and the content below it (the `mt-12` / `mb-10` spacers become `mt-8` / `mb-6`).
- Tighten the six alternating split sections so consecutive blocks don't stack two large paddings on top of each other.
- Close the extra dead space above "Proven Results" left behind when the old label and subtitle were removed, and the empty spot at the very top of the hero.
- Slightly tighten the proof-bar block (stats, satellites grid, benefits heading) which currently uses several stacked `mt-10`/`mt-12` spacers.

Mobile keeps a bit more breathing room than desktop where the current classes already differ.

## Files touched

- `src/pages/new/AgencyHub.tsx`
- `src/components/new/agency/AgencyBeforeAfter.tsx`
- `src/components/new/agency/AgencyProofBar.tsx`
- `src/components/new/agency/AgencySjBacking.tsx`
- `src/components/new/agency/AgencyVouchedReviews.tsx`

Only Tailwind spacing utilities change — no text, no components added or removed.
