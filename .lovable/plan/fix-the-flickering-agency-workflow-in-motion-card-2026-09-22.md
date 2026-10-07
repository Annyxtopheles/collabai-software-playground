# Fix the flickering "Agency Workflow in Motion" card

## What's happening

The Outcome box at the bottom of the card is added and removed from the page as you scroll. Adding it makes the card taller, which shifts the section's own height — and the scroll animation measures that height to decide how far along it is. So the moment the box appears, the measurement changes, the progress drops back, the box disappears, the card shrinks, and the cycle repeats. That's the clip-in/clip-out you see.

## The fix

- The Outcome box always occupies its space in the card. It simply fades and slides in when the workflow finishes instead of appearing and disappearing, so the card height never changes mid-scroll.
- Add a small buffer so the final step doesn't flip on and off right at the threshold: once the workflow reaches its end it stays complete until you scroll back up noticeably.
- Same treatment for the step rows: they are all laid out from the start (already the case) and only change appearance, so nothing reflows.

Result: one smooth pass — steps light up as you scroll down, the outcome fades in at the end, and scrolling back up reverses cleanly with no jumping.

## Technical notes

- `src/components/new/agency/AgencyWorkflowMotion.tsx` only.
- Drop `AnimatePresence`; render the outcome block permanently and animate `opacity` / `y` off `showOutcome`, plus `pointer-events-none` and `aria-hidden` while hidden. This keeps the scroll target's height constant and removes the measurement feedback loop.
- Replace the single `progress > 0.9` test with hysteresis kept in state: turn the outcome on above ~0.92 and off only below ~0.82.
- Keep `useScroll` offsets `["start 0.55", "end 0.75"]` and the reduced-motion path unchanged.
