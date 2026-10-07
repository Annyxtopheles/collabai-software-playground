# Unify the Agency page on one typeface (Inter)

Goal: everything on /agency renders in Inter. No monospace labels, no second typeface.

## What changes visually

- The small uppercase labels above section headings (e.g. "THE AGENCY CONTROL TOWER") lose their typewriter look and become Inter, still uppercase with wide letter spacing.
- Big numbers in the stats blocks ("40+", "2,500+") switch from monospace to Inter bold — same size, cleaner look.
- Hero badges ("Your Data, Your Server", etc.), module tags, the savings pill in Proven Results, and the demo link URLs all switch to Inter.
- No layout, wording, colour, or spacing changes.

## Where

Remove every `font-mono` usage from the components rendered on /agency:

- `src/pages/new/AgencyHub.tsx` (hero badges, section eyebrows, numbered list, module tag)
- `src/components/new/agency/AgencyProofBar.tsx`
- `src/components/new/agency/AgencySjBacking.tsx`
- `src/components/new/agency/AgencyBeforeAfter.tsx`
- `src/components/new/agency/AgencyModuleGrid.tsx`
- `src/components/new/agency/AgencyEcosystem.tsx`
- `src/components/new/sections/DemosBand.tsx`

Where the mono class carried visual weight (large stat numbers), replace with `font-semibold`/`font-bold` and `tracking-tight` so the numbers keep their presence.

## Technical notes

- Tailwind's `font-sans` is currently mapped to Open Sans while the body sets Inter. To guarantee a single typeface on this page, the Agency page wrapper gets an explicit `font-sans`-free Inter inheritance (body already sets Inter) and no component may set `font-sans`, `font-mono`, or `font-serif`.
- `DemosBand` is shared with the other industry hub pages, so removing its mono styling also affects those hubs. Consistent with the goal of one typeface site-wide; flagging it since it is outside /agency.
- No other font families are loaded on this page (verified: no `font-serif`, no inline `fontFamily`).
- Verify with a typecheck and a quick page load after the edits.
