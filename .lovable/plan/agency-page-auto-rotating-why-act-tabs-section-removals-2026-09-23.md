# Agency page: auto-rotating "Why ACT" tabs + section removals

## 1. Rebuild the three reasons as rotating tabs

Replace the current vertical accordion with a horizontal layout:

- The three titles — Data Privacy & Protection, Easy to Use, Cost-effective — sit side by side in one row across the top (numbered 01/02/03, stacked on mobile).
- The active title is highlighted (brand blue label, bold title, blue underline bar); the others are muted.
- Below the row, one panel shows the explanation text for the active item.
- Every 7 seconds it advances 1 → 2 → 3 → 1 automatically.
- Clicking a title jumps to it and restarts the timer.
- Transition: the outgoing text fades out and the incoming text fades in with a small upward slide (~200ms), and the active underline slides between titles. Simple and refined, no bounce.
- Rotation pauses on hover/focus within the section, and respects the reduced-motion setting (instant swap, no auto-advance).
- All existing copy for the three reasons is kept exactly as-is, including the left-hand heading block "3 Reasons to go for ACT over other AI Assisting Tools & Apps".

## 2. Remove two sections

- Remove the "Why Choose Agency Control Tower" section containing the embedded YouTube video, including the video itself.
- Remove the "Vouched by employees" testimonials carousel section.

## Technical notes

- `src/pages/new/AgencyHub.tsx`: delete the YouTube `<section>` and the `<AgencyVouchedReviews />` usage plus its import; swap the shadcn `Accordion` block for a new component.
- New `src/components/new/agency/AgencyWhyAct.tsx` holds the reason data array, tab row, active panel, interval timer (cleared on unmount), hover/focus pause, keyboard-accessible tab semantics (`role="tab"`/`tabpanel`), and `prefers-reduced-motion` handling.
- Delete `src/components/new/agency/AgencyVouchedReviews.tsx` since nothing else references it.
- Run `npx tsgo --noEmit` after the change.
