# Fix the Control Tower connection diagram

Three problems in the diagram inside "What is Agency Control Tower": the tool logos sit in one tall stack, the three icons on the right are unlabelled, and no connecting lines are drawn.

## What changes

**1. Scatter the tool logos**
Instead of a single vertical column, place the seven tool logos in a loose arc on the left of the hub (staggered horizontally, some closer, some further out). This makes the block much shorter and wider, so it eats far less vertical space.

**2. Name the right-hand nodes**
Each of the three result nodes gets a visible text label next to its icon, so it reads clearly:
- Leadership dashboard
- Pods & team
- AI agents

**3. Actually draw the connections**
The animated lines currently never appear because the drawing runs before the circles exist on the page. Fix the measurement so lines are drawn once everything is laid out (and redrawn on resize). Result: every logo has a glowing line flowing into Agency Control Tower, and the Tower has lines flowing out to the three named results.

**4. Mobile**
Below ~640px the diagram compresses: smaller circles, tighter arc, labels stay readable. If a visitor has reduced-motion turned on, the lines show as static connections with no pulsing.

## Technical notes

- `AgencyIntegrationsBeam.tsx`: replace the flex columns with an absolutely positioned arc layout inside a fixed-aspect container so beam endpoints are stable; add labels to the output nodes.
- `animated-beam.tsx`: run the initial measurement after layout (`requestAnimationFrame` / layout effect) and observe the container plus the endpoint elements, so `pathD` is set and the SVG renders.
- Keep `resolveLogos` and the existing seven logo IDs unchanged.
