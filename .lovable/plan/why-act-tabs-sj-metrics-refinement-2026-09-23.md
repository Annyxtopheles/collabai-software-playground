# Why ACT tabs + SJ metrics refinement

## Why ACT section

- The left column (label, headline, paragraph) stays fixed in place no matter which item is selected — it no longer shifts when the panel height changes.
- The three items become equal-size rounded boxes instead of underlined text. All three boxes are the same height, and "Data Privacy & Protection" wrapping to two lines no longer makes its box taller or wider than the others.
- The selected box gets a soft blue glow and blue border, matching the highlight style used elsewhere on the page.
- The small numbers 01 / 02 / 03 above the titles are removed.

## SJ Innovation metrics

- Remove the extra empty space to the left of "22 Years" and to the right of "4 Offices" so the row starts and ends flush with the text above it.
- Shorten the vertical divider lines between the four metrics so they only span the height of the numbers, not the full block.

## Technical notes

- `src/components/new/agency/AgencyWhyAct.tsx`
  - Grid container: set `lg:items-start` and give the left column `lg:sticky`-free fixed alignment; give the right column a min-height so panel content changes do not move the left column. Simplest fix: change `lg:items-center` to `lg:items-start` and reserve a stable panel area (`min-h-[...]`) on the tab panel.
  - Tab buttons: replace the bottom-bar markup with `rounded-xl border border-border bg-card px-4 py-3 h-full` inside a `grid sm:grid-cols-3 items-stretch` so all boxes share height; active state adds `border-[hsl(var(--brand-secondary))]` plus a blue glow (`shadow-[0_0_0_1px_hsl(var(--brand-secondary)/0.35),0_8px_24px_-8px_hsl(var(--brand-secondary)/0.45)]`).
  - Remove the `reason.index` span and the `mt-1 h-0.5` underline element; keep `index` out of the `Reason` type.
  - Title text uses `text-balance` so the two-line title stays centered without widening.
- `src/components/new/agency/AgencySjBacking.tsx`
  - Stats row: drop the outer horizontal padding on the first/last cells (`first:pl-0 last:pr-0`) and left-align content or keep centered while removing the leading/trailing gap.
  - Replace `divide-x divide-border` with per-item `border-l` on a wrapper whose divider is height-limited — e.g. render dividers as a pseudo-element/`span` of `h-8 self-center w-px bg-border`, so the lines are shorter than the block.
- Verify with `npx tsgo --noEmit`.
