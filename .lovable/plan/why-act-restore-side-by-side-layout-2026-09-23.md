# Why ACT: restore side-by-side layout

Put the section back to a left/right layout instead of the current stacked, centered one.

- Left column: the "Why ACT" tag, the heading "3 Reasons to go for ACT over other AI Assisting Tools & Apps", and the short intro paragraph — left-aligned, same as before.
- Right column: the three rotating items (Data Privacy & Protection, Easy to Use, Cost-effective) in a row across the top, with the explanation panel underneath them.
- On mobile, the two columns stack: text block first (centered), then the items.
- The auto-rotation, click-to-switch, fade transition, hover pause, and reduced-motion behavior stay exactly as they are.

## Technical notes

- `src/components/new/agency/AgencyWhyAct.tsx`: wrap the content in the same grid the section used before — `grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-14` — with the heading block as the first child (`text-center lg:text-left`) and the tab row plus panel as the second.
- Remove the `mx-auto max-w-3xl` / `max-w-4xl` centering wrappers added in the stacked version.
- Run `npx tsgo --noEmit` afterwards.
