# Trusted By: swap in the new vector client logos

- Replace all eight Trusted By logos on the Agency page with your new SVG versions: Neutrogena, Janssen, Frasada, Johnson & Johnson, Vygilance, Rentah, St. John's University, and Teachers Pay Teachers (the unnamed file is the TpT logo).
- Rentah: show your logomark with the word "Rentah" beside it in bold dark text, sized to match the other logos.
- The layout, order, spacing and "Trusted By" label stay the same.

## Technical notes
- Upload each SVG with `lovable-assets create` to new `src/assets/clients/<name>.svg.asset.json` pointers. Update the imports in `AgencySjBacking.tsx`. Then delete the old `.png.asset.json` pointers with `lovable-assets delete`.
- Add an optional `wordmark` field to the `Logo` type. For Rentah, render the logomark `SmoothImage` plus a `<span className="font-bold text-brand-primary">Rentah</span>` inside an inline flex row.
- Check with `npx tsgo --noEmit`.
