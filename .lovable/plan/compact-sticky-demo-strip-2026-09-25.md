# Compact sticky demo strip

## What changes
The floating strip at the bottom of the Agency page shrinks to fit its content. "Ready to see Agencies on Control Tower?" sits right next to the "Get Free Demo Now" button, with a small gap instead of the wide empty stretch. The strip stays centred at the bottom of the screen. On phones it looks the same as today, with just the button.

Other industry pages that use this strip keep their current layout.

## Technical notes
- `StickyNicheCTA.tsx`: add an optional `compact?: boolean` prop. When it is set:
  - The inner pill becomes `w-fit mx-auto` instead of stretching to `max-w-3xl`.
  - The text drops `flex-1` and uses `pl-4 pr-1`.
  - The gap is `sm:gap-2`.
  - The button drops `flex-1` on desktop.
- `AgencyHub.tsx`: pass `compact` to `StickyNicheCTA`.
- Run `npx tsgo --noEmit`.
