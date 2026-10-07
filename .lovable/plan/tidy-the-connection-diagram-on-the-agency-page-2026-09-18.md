# Tidy the connection diagram on the Agency page

Match the sketch: tool logos scattered naturally on the left, all lines converging into the hub, and the three labelled points on the right sitting closer together.

## What changes

1. **Logos placed naturally** — replace the even arc with a slightly irregular scatter across the left half (varied horizontal and vertical offsets, no two logos in a straight column), so it reads organic rather than stacked.
2. **Tighter right column** — the three points (Leadership dashboard, Pods & team, AI agents) move from spanning the full height to a compact group near the vertical middle, reducing the empty space between them.
3. **Shorter block** — with the right side tightened, the diagram's overall height comes down a little, so the section takes less scroll space.
4. All connecting lines still run from each logo into the hub and from the hub out to the three points; labels, colours, and animation stay as they are.

## Technical notes

- Single file: `src/components/new/agency/AgencyIntegrationsBeam.tsx`.
- Adjust the `toolPositions` array (irregular left/top values), the `outputs` `top` values (e.g. ~30% / 50% / 70%), and the container height classes.
- No changes to `animated-beam.tsx`, data, or other sections.
