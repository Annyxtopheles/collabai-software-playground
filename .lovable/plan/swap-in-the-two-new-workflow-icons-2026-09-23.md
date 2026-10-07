# Swap in the two new workflow icons

Replace two of the hand-drawn graphics in the "Agency Workflow in Motion" section with the uploaded versions:

- The target-with-arrow graphic (used on the outcome panel) becomes the new blue target with the black arrow and corner bracket.
- The envelope graphic becomes the new version: blue inner flap, black outline.

Everything else stays the same — sizes, colours, placement, and the scroll animation are untouched.

## Technical notes

In `src/components/new/agency/AgencyWorkflowMotion.tsx`, inside `StepIcon`:

- `case "target"`: replace the paths with the uploaded `svgexport-20_1.svg` geometry (viewBox 0 0 57 57 scaled to the existing icon box, or set that case's svg to its own viewBox). Blue `#315EFF` strokes for the rings, filled centre dot, `#171717` for the arrow and bracket, `stroke-linecap/linejoin: round`.
- `case "mail"`: replace with the uploaded `svgexport-24_1.svg` geometry (viewBox 0 0 52 52), blue flap path, black rounded rect body.
- Keep using the existing `BLUE` / `INK` constants rather than hard-coded hex, and keep the `common` props spread so sizing stays consistent; override `viewBox` per case where the source artwork needs it.
- The SVGs stay inline in the component — no new asset files.
- Verify with `npx tsgo --noEmit`.
