# Agency page: reorder, remove demos band, animate workflows

## 1. Move testimonials up

The employee/employer testimonial carousel moves to sit directly below the SJ Innovation credibility section, instead of further down the page.

## 2. Remove the "Live demos" band

The whole "See it running, right now" block goes away — heading, description, and both demo cards (full Control Tower sandbox and lite demo).

The "Agency pack — $2,500/year" pricing card currently lives inside that block. It stays on the page as its own standalone section in the same spot, unchanged.

## 3. Make "Agency Workflow in Motion" dynamic

Replace the static text cards with an animated, self-running workflow player:

- A row of workflow tabs at the top; the active workflow auto-advances and can also be clicked.
- Inside the active workflow, steps light up one after another along a connected vertical track: a progress line fills downward, each step fades/slides in as it activates, the actor chip and step text highlight, and completed steps get a check.
- The trigger appears as a pill at the top of the track; the outcome slides in at the end, then the player moves to the next workflow.
- Pauses on hover so users can read; respects reduced-motion (everything shown at once, no animation).

Same workflow content as today — only the presentation changes.

## Technical notes

- `src/pages/new/AgencyHub.tsx`: move `<AgencyVouchedReviews />` to directly after `<AgencySjBacking />`; delete the `<DemosBand ... />` usage and render the former `footer` pack card directly inside a plain `<section className="bg-slate-light py-12">`. `DemosBand` stays in the codebase for other hub pages.
- New `src/components/new/agency/AgencyWorkflowMotion.tsx` taking `workflows` from `verticals.agency`; uses framer-motion (already a dependency) with `useReducedMotion`, timers cleared on unmount, and hover pause. Replaces the inline workflows `<section>`.
- No data, routes, or pricing logic change.
