# Certifications as individual badges

Replace the single certifications screenshot in the SJ Innovation section of the Agency page with the individual badge images you just uploaded.

## What changes

- Remove the combined certifications collage image.
- Add each badge as its own image, shown in a responsive row/grid under the "Certifications" label:
  - AWS Certified Cloud Practitioner
  - AWS Certified Solutions Architect – Associate
  - Veeva Vault Certified
  - Acquia Certified Drupal 9 Site Builder
  - Acquia Certified Drupal 10 Site Builder
  - Shopify Product Fundamentals
  - Adobe Solution Partner Bronze
  - Shopify Business Fundamentals
  - the ninth uploaded badge file (included as well)
- Badges sit on a neutral card-free background, evenly spaced, centred, wrapping to fewer per row on tablet and mobile.
- Each badge keeps its own descriptive alt text for accessibility and search.
- Lazy loading with reserved space and gentle fade-in, matching the rest of the page, so nothing pops in abruptly.

The "Trusted By" client logo strip stays as-is for now; you'll send separate client logos next.

## Technical notes

- Upload each badge via `lovable-assets` into `src/assets/certs/` as `.asset.json` pointers.
- Update `src/components/new/agency/AgencySjBacking.tsx`: drop the `sj-certifications` import and render a typed array of badges through `SmoothImage` in a flex-wrap grid with uniform height (about 64–80px).
- Delete the now-unused `src/assets/sj-certifications.png.asset.json` pointer.
- Verify with `npx tsgo --noEmit`.
