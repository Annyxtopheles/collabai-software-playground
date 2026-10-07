# Simplify the "What is Agency Control Tower" diagram

## Changes

1. **Static blue connector lines**
   Replace the animated flowing beams with plain static lines in the brand blue. Left tool tiles connect into the hub; the hub connects out to the six cards on the right. No motion, no gradient pulse.

2. **Right-side cards: titles only**
   Drop the small description line under each of the six cards (Projects & Delivery, BD & Pipeline, Pods/OKRs/Productivity, Meetings & Knowledge, EOS / L10, AI Agents). Icon plus title only, so the cards sit tighter.

3. **New hub artwork**
   Use the uploaded CT logo mark inside the centre block above the "Agency Control Tower" wording.

4. **Remove "One unified hub"**
   Delete that sub-line from the centre block.

## Technical notes

- `src/components/new/agency/AgencyIntegrationsBeam.tsx`: strip `desc` from the `outputs` array and its markup; register the uploaded SVG via a Lovable asset pointer (`src/assets/ct-mark.svg.asset.json`) and render it with `SmoothImage` in the hub tile.
- Add a small static-line variant (a `StaticBeam` component, or an `animated` prop on `AnimatedBeam`) that draws the same measured path with a solid `hsl(var(--brand-secondary))` stroke and no framer-motion gradient. Keeps the existing resize/measure logic so lines stay aligned.
- Lines stay desktop-only (`hidden lg:block`), as today.
