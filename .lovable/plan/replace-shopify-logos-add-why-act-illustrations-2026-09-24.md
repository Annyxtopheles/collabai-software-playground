# Replace Shopify logos + add Why ACT illustrations

## Shopify certifications (SJ Innovation section)
- Replace the current Shopify Business Fundamentals and Shopify Product Fundamentals logos with your two new files. Order, size and layout stay the same.

## 3 Reasons cards
- Add an illustration at the top of each card, above the title:
  - Data Privacy & Protection -> Data_Privacy_Protection
  - Easy to Use -> Easy_to_Use
  - Cost-effective -> Cost-effective
- Each image fills the card width in a rounded frame with the same 3:2 shape, so all three cards line up evenly. It fades in smoothly as it loads, like the other artwork on the page.
- Copy, checklists and bottom strips stay as they are.

## Technical notes
- Upload all five SVGs with `lovable-assets create` into `src/assets/certs/` and `src/assets/why-act/`.
- `AgencySjBacking.tsx`: swap the two Shopify imports and delete the old `-dark` pointers with `lovable-assets delete`.
- `AgencyWhyAct.tsx`: add `image` and `imageAlt` to `Reason`, and render them with `SmoothImage` (`aspect-[3/2] w-full rounded-xl object-cover`) above the `h3`.
- Verify with `npx tsgo --noEmit`.
