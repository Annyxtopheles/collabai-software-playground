# Proven Results summary: new clock picture + stronger copy

## What changes
1. **New picture:** your pie-clock drawing replaces the current stopwatch on the left of the summary box. It keeps its original colours and shape, sized to fill the left side neatly.
2. **More impactful copy:** the same two facts, shown as a clear before/after:

```text
[ clock ]  |   BEFORE                 AFTER
           |   4hrs 45min   ──►       22 minutes
           |   (grey, crossed out)    (large, bold, blue)
           |   Total weekly time taken, per person
```

- "4hrs 45min" in smaller grey text with a line through it, labelled "Before".
- An arrow pointing to "22 minutes" in large bold brand blue, labelled "With Agency Control Tower".
- One short caption underneath: "Total time taken each week".
- On phones, the clock sits above and the before/after stacks and centres.

No other wording changes. If you'd rather avoid the labels "Before" and "With Agency Control Tower", tell me and I'll use just the two numbers with the arrow.

## Technical notes
- Upload `CAI_Pie_Clock.svg` via lovable-assets to `src/assets/cai-pie-clock.svg.asset.json`; render with `SmoothImage` (alt empty, decorative), `h-28 w-auto`.
- In `AgencyBeforeAfter.tsx`, replace the inline stopwatch SVG and the two paragraphs with the before/arrow/after block using existing tokens (`text-slate-secondary line-through`, `text-[hsl(var(--brand-secondary))] text-4xl font-bold`, `ArrowRight` icon).
- Run `npx tsgo --noEmit`.
