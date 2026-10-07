# Start the workflow animation later on scroll

The Agency Workflow in Motion steps currently begin completing as soon as the top of the section peeks into view. They should only start once the section is properly on screen.

## Change

- Delay the start point: the first step completes only after the section's card area is well inside the viewport (roughly when its top reaches the middle of the screen), instead of at the very bottom edge.
- Keep the end point so the final step and outcome land while the section is still comfortably in view.
- Scroll-up still reverses the steps; reduced-motion behaviour unchanged.

## Technical note

In `src/components/new/agency/AgencyWorkflowMotion.tsx`, change the `useScroll` offset from `["start 0.85", "end 0.55"]` to `["start 0.55", "end 0.75"]` so progress begins when the section top passes mid-viewport, and keep the existing 0.85 step / 0.9 outcome split.
