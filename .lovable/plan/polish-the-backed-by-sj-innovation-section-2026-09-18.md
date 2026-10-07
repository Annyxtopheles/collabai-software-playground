# Polish the "Backed by SJ Innovation" section

## What changes

1. **"POWERED BY" no longer crowds the logo** — the label and the SJ Innovation logo sit on one row with clear spacing between them, so they never touch or overlap.

2. **Headline breaks on two lines** — "Backed by 22 years of" on the first line, "enterprise engineering" on the second ("22 years" stays blue).

3. **Right side becomes a collage of four white cards** instead of one dark box:
   - One card per stat: 22 / Years, 500+ / Projects, 100+ / Team, 4 / Offices
   - Number in brand blue, label in black
   - On hover, only the hovered card gets a soft blue glow, matching the "Try the live demo" hover treatment

4. **Trust chips**
   - "ISO 9001 Certified" becomes a link to the LinkedIn post, opening in a new tab
   - "Inc. 5000" shows the uploaded Inc. 5000 badge image next to (or in place of) the text

## Technical notes

- All work in `src/components/new/agency/AgencySjBacking.tsx`.
- Header row: wrap pill + logo in a `flex items-center gap-4` container.
- Stat collage: `grid grid-cols-2 gap-4`, each cell `rounded-2xl border border-border bg-card p-6`, number `text-3xl font-bold text-[hsl(var(--brand-secondary))]`, label `text-xs uppercase tracking-wider text-brand-primary`. Hover: `transition hover:border-[hsl(var(--brand-secondary))] hover:shadow-[0_0_0_4px_hsl(var(--brand-secondary)/0.12)]` — same token-based glow used by the demo cards.
- Inc. 5000 badge uploaded via `lovable-assets` to `src/assets/inc-5000-badge.png.asset.json`, rendered with `SmoothImage` at a small fixed height inside the chip, alt "Inc. 5000".
- ISO chip becomes an `<a target="_blank" rel="noopener noreferrer">` to the LinkedIn URL, keeping the same chip styling plus hover state.
- No hardcoded colors; existing design tokens only.
