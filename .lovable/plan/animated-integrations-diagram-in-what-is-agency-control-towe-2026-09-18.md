# Animated integrations diagram in "What is Agency Control Tower"

Replace the plain sentence "HubSpot, Monday, Notion, Zoom, Slack, Drive, and GitHub — ties them into one operating picture for leadership." with an animated hub diagram: your tool logos on the left, the Agency Control Tower in the middle, and the people/outputs on the right, with glowing lines that pulse from the tools into the hub and out again.

## What the visitor sees

- Left column: seven round tiles with real brand logos — HubSpot, Monday, Notion, Zoom, Slack, Google Drive, GitHub.
- Centre: a larger Agency Control Tower tile (brand colours, slight glow) as the single hub everything feeds into.
- Right column: three round tiles for where the work lands — Leadership dashboard, Pods / Team, AI Agents.
- Animated light beams travel continuously left → hub → right, in the brand blue.
- Under the diagram, a short line stays as text: "One operating picture for leadership."
- Mobile: the diagram scales down and stays readable; if motion is reduced in the visitor's system settings, the lines render static with no animation.

## Technical notes

- New `src/components/ui/animated-beam.tsx` — the magicui AnimatedBeam primitive: SVG path between two refs, measured via `getBoundingClientRect` with a `ResizeObserver` on the container, animated gradient stroke using framer-motion (already installed). No new dependency, no shadcn registry import.
- New `src/components/new/agency/AgencyIntegrationsBeam.tsx` — the diagram: `Circle` tiles (forwardRef), refs for each node, beams wired left→centre and centre→right. Brand tokens only (`hsl(var(--brand-secondary))`, `hsl(var(--brand-primary))`), no hardcoded hex.
- Logos come from the existing catalog `src/data/logos.ts` (`resolveLogos([...])`) so artwork stays in one place — hubspot, monday, notion, zoom, slack, googledrive, github all exist there.
- `src/components/new/agency/AgencyProofBar.tsx` — remove the plain-text paragraph (lines 42-45) and render `<AgencyIntegrationsBeam />` in its place; everything else in that section is untouched.
- Respect `prefers-reduced-motion`: skip the gradient animation.
- Prerender safety: beam positions are computed in `useEffect`, so the static HTML snapshot renders the tiles without lines — no SSR crash.
