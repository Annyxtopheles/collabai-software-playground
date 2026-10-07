# Shopify logo text + Why ACT cleanup

## Shopify certifications
- In both Shopify logos (Business Fundamentals, Product Fundamentals), recolor the white wording to the site's dark text color so it reads on the white background. The hexagon badge artwork itself stays unchanged.

## Why ACT section
- Stop "Tower" from dropping onto its own line in the heading: keep "Agency Control Tower" together on line one (smaller-screen safe).
- Remove the "Most loved" tag.
- All three cards get equal weight: same border, same height, no raised middle card, no extra blue shadow. Hover lift with blue border stays on all three.
- Remove the blue icon badge and the "Reason 01/02/03" labels; each card starts with its title.
- Check marks, divider line and the bottom highlight strip stay.

## Technical notes
- Copy both SVGs to /tmp, change `fill` to `#171717` only on `<path>` elements whose start x > 170 (the wordmark area, right of the badge), re-upload with `lovable-assets create` to new pointers, update the two imports in `AgencySjBacking.tsx`, delete the old pointers.
- `AgencyWhyAct.tsx`: wrap "Agency Control Tower" in `whitespace-nowrap`; drop `featured`, `icon`, `eyebrow` fields and the related markup/imports; single card class for all.
- Verify with `npx tsgo --noEmit` and render the logos to PNG to check the text is dark.
