# Tighten the Control Tower diagram

The centre block and the six right-hand items use more space than they need, while the connecting lines are squeezed into a narrow gap. This rebalances the diagram.

## What changes

**Centre block**
- Less padding around the logo and the "Agency Control Tower" wording, and a slightly smaller gap between them, so the box is shorter and less airy.
- The box keeps its white fill, blue border and glow.

**Right-hand items**
- Tighter rows: less inner padding and a smaller gap between the six cards, so the column is more compact and matches the left column's rhythm.
- Titles and icons stay exactly as they are.

**Connecting lines**
- Widen the space between the columns and the centre so the lines have room to bend naturally instead of looking cramped.
- The centre column becomes narrower and the side columns give back the extra width.

Mobile stays stacked with no lines, unchanged.

## Technical notes

- `src/components/new/agency/AgencyIntegrationsBeam.tsx` only.
- Grid `gap-8` → larger horizontal gap on `lg` (e.g. `lg:gap-16`); column template adjusted so the centre takes less width.
- Hub tile: `px-4 py-8 sm:py-10` → tighter vertical padding, `gap-3` → `gap-2`, width reduced.
- Output column: `gap-2` → `gap-1.5`, tile padding `px-3 py-2` → `px-3 py-1.5`.
- Elbow path measurement logic untouched; it re-measures on resize, so the wider channel is picked up automatically.
