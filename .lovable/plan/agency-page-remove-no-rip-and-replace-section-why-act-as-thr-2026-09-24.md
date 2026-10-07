# Agency page: remove "No rip-and-replace" section + Why ACT as three cards

## 1. Remove the integrations section
- Delete the "Works with your existing tools / No rip-and-replace." section, including its logo strip.

## 2. Restructure Why ACT
- Heading block moves to the top, centered: "Why ACT" tag, the "3 Reasons to go for ACT over other AI Assisting Tools & Apps" heading, and the short intro line.
- Below it, the three reasons appear as three cards side by side (like the pricing option cards): Data Privacy & Protection, Easy to Use, Cost-effective.
- Each card: bold title at the top, then its full explanation text underneath (all existing copy kept exactly).
- Cards are equal height, rounded, with a thin border, white on the page background. Stacked on mobile.
- The auto-rotating tabs and timer are removed, since all three are now visible at once.

## Technical notes
- `src/pages/new/AgencyHub.tsx`: remove the integrations `<section>` and the now-unused `LogoStrip` import.
- `src/components/new/agency/AgencyWhyAct.tsx`: keep the `reasons` data; replace the two-column tabs/panel with a centered header plus `grid gap-6 md:grid-cols-3 items-stretch` of `rounded-2xl border border-border bg-card p-6` cards; drop the rotation state, reduced-motion hook and timers.
- Verify with `npx tsgo --noEmit`.
