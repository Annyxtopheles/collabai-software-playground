# Add client logos and certifications to the SJ Innovation section

## What changes

In the "Backed by SJ Innovation" block on the Agency page, two new rows are added below the four stat cards and the existing trusted-by line:

1. **Trusted By** — a small centered label, then the strip of client logos (Neutrogena, Janssen, Frasada, Johnson & Johnson, Vigilance, Rentah, St. John's University, Teachers Pay Teachers) as one wide image, scaled to fit and readable on mobile.

2. **Certifications** — a small centered label, then the badge set (AWS Cloud Practitioner, AWS Solutions Architect, Veeva Vault, Acquia Drupal 9 Site Builder, Acquia Drupal 10 Site Builder, Shopify Product Fundamentals, Adobe Solution Partner Bronze, Shopify Business Fundamentals) shown as the uploaded badge grid image.

Both rows span the full width of the section so they read as a credibility band, rather than sitting in the narrow right column.

## Note on the uploads

Both uploads are single combined images (one logo strip, one badge grid), not separate files per brand. They will be used as-is. If you'd prefer individually tiled, hover-able logos with their own alt text, send the logos as separate files and I'll switch to a proper grid.

## Technical notes

- Upload both images through `lovable-assets` as `src/assets/sj-client-logos.png.asset.json` and `src/assets/sj-certifications.png.asset.json`.
- Edit `src/components/new/agency/AgencySjBacking.tsx`: move the two-column grid into a wrapper and append a full-width block containing the two rows.
- Render with `SmoothImage` (lazy, reserved space, fade-in), `w-full h-auto max-w-5xl mx-auto`, alt text listing the brands / certifications.
- Labels use existing tokens: `text-xs font-semibold uppercase tracking-wider text-slate-secondary`. No new colors.
- Static content only; no data or backend changes.
