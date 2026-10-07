# Make the "3 Reasons" section compact and expandable

Today the three reasons sit in tall side-by-side cards with all copy showing, which makes the block long and text-heavy.

## What changes

Replace the three cards with a compact accordion-style stack:

- Each reason becomes one clickable row: the number (01/02/03), the title (Data Privacy & Protection, Easy to Use, Cost-effective) and a one-line teaser.
- Clicking a row expands it smoothly to reveal the full copy for that reason; clicking again collapses it. Multiple rows can be open at once.
- The first reason is open by default so the section never looks empty.
- A chevron on the right rotates to show open/closed state.

All existing wording stays exactly as it is — nothing is rewritten or dropped, just tucked behind the expand.

## Look

Modern and tight: one bordered container with hairline dividers between rows, generous but not bloated padding, the number in the accent blue mono style already used, bold dark titles, grey body copy. Section heading stays as is, with reduced spacing above the list so the whole block is noticeably shorter.

## Technical notes

- Edit the reasons block in `src/pages/new/AgencyHub.tsx` (currently lines ~458–517).
- Use the existing shadcn `Accordion` (`@/components/ui/accordion`, Radix, already in the project) with `type="multiple"` and `defaultValue={["r1"]}` — gives keyboard accessibility and animation for free.
- Keep content verbatim, including the Self-Hosted / DDRP-Aligned / SOC 2-Aligned list and the whitespace-preserved cost-effective paragraph.
