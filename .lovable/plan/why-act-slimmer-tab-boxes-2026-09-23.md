# Why ACT: slimmer tab boxes

- Remove the blue glow/drop shadow from the selected item. It keeps only the blue outline to show which one is active.
- Make the three boxes shorter: less space above and below the titles, so the row is compact instead of tall.

## Technical notes

`src/components/new/agency/AgencyWhyAct.tsx`, tab buttons:
- Active class: drop the `shadow-[...]` glow, keep `border-[hsl(var(--brand-secondary))]` (optionally a plain `ring-1` in the same color for crispness).
- Sizing: `min-h-[76px]` → `min-h-0`, padding `px-4 py-3` → `px-3 py-2.5`, title `text-base` → `text-sm`.
- Keep equal heights via the existing `items-stretch` grid, plus rotation, transitions and accessibility unchanged.
- Verify with `npx tsgo --noEmit`.
