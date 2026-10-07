# Agency page: diagram polish + scroll-driven workflow

## 1. "What is Agency Control Tower" diagram

- Centre Agency Control Tower box: white background with blue border (same treatment as the other cards, slightly stronger blue), logo mark and label in the dark brand colour instead of white.
- Right column: the six items stack in a single vertical column, matching the left tool list (no 2-up grid on desktop). Mobile stays stacked.
- Connectors: replace straight centre-pointing lines with clean elbow routing. Each line leaves a tile horizontally, runs to a shared vertical channel between the column and the hub, travels up/down in that channel, then runs horizontally into the hub edge — so lines never cut across other cards. Rounded corners, solid brand blue, static (no animation).
- Lines attach to the hub's left and right edges rather than its centre.

## 2. Agency Workflow in Motion — scroll driven

- The workflow player advances from scroll position instead of a timer: as the section scrolls through the viewport, steps complete one by one; scrolling back up un-completes them in reverse.
- The outcome block appears once the final step completes and hides again on scroll-up.
- Workflow tabs stay clickable to switch workflows; the scroll progress then applies to the selected workflow.
- Reduced-motion users see the full completed workflow with no scroll dependency.

## Technical notes

- `src/components/new/agency/AgencyIntegrationsBeam.tsx`: hub tile restyled, right column becomes `flex flex-col`, and the `AnimatedBeam` usages are replaced by a small local orthogonal-connector SVG component (measures tile/hub rects against the container, builds an `M/H/V` path with rounded corners, re-measures on resize).
- `src/components/ui/animated-beam.tsx` stays unchanged (used elsewhere) unless the elbow logic is cleaner as an added variant there.
- `src/components/new/agency/AgencyWorkflowMotion.tsx`: swap the `setTimeout` stepper for framer-motion `useScroll` with a section target and `offset: ["start 0.8", "end 0.4"]`, mapping progress to the revealed step count; keep timer cleanup removal, hover-pause removal, and keep the existing visuals, progress rail, and reduced-motion branch.
- Typecheck with `npx tsgo --noEmit` after the edits.
