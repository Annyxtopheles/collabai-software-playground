# Proven Results: slower fills and aligned cards

## What changes
- **Slower "before" fills (left side):** each grey bar takes about 7 seconds to fill instead of 2.4, so it feels like the old process drags on.
- **Slightly slower "after" fills (right side):** each blue bar takes about 1.8 seconds instead of 0.7. It still finishes well before the grey one, so the contrast stays clear.
- **More time between rows:** each row starts about 0.8 seconds after the previous one, so visitors can read each row before the next one starts. Confetti and the badge bounce still fire when each blue bar completes.
- **Aligned cards:** all "before" boxes, arrows, "after" boxes and percentage badges line up in straight columns. Today each row sizes its own columns, and badges of different widths (for example "100%" vs "87%") push the boxes out of line.

## Technical details
- `src/components/new/agency/AgencyBeforeAfter.tsx`, in `ResultRow`:
  - Change `fill(2.4)` to `fill(7)` and `fill(0.7)` to `fill(1.8)`.
  - Change the delay from `index * 0.35` to `index * 0.8`.
  - Replace `sm:grid-cols-[1fr_auto_1fr_auto]` with fixed tracks `sm:grid-cols-[minmax(0,1fr)_1rem_minmax(0,1fr)_6.5rem]`.
  - Make both boxes `h-full` so each row's boxes match in height.
  - Centre the badge in its fixed column.
- The reduced-motion behaviour is unchanged.
- Verify with `npx tsgo --noEmit`.
