# Certifications: swap in the new vector logos

Replace five certification logos in the SJ Innovation section of the Agency page with your new SVG versions:

- Claude Partner Network
- AWS Partner Network
- Adobe Solution Partner Bronze
- Shopify Business Fundamentals
- Shopify Product Fundamentals

Everything else stays the same: the order, sizing, layout, the "Certifications" label, and the other certification logos (ISO 9001, Inc. 5000, AWS certifications, Veeva, Acquia).

## Technical notes
- Upload each SVG with `lovable-assets create` to `src/assets/certs/<name>.svg.asset.json`.
- Update the five imports in `src/components/new/agency/AgencySjBacking.tsx`.
- Delete the old `.png.asset.json` pointers.
- Check with `npx tsgo --noEmit`.
