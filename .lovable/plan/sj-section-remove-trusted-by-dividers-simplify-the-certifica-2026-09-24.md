# SJ section: remove Trusted By dividers, simplify the Certifications title

## What changes
- Remove the thin grey lines above and below the Trusted By strip. The spacing stays the same.
- Remove the small blue "Certifications" tag at the top of the certifications panel.
- Change the panel title from "Certified & Partnered" to "Certifications".

## Technical details
- In `src/components/new/agency/AgencySjBacking.tsx`:
  - Drop `border-y border-border` from the Trusted By wrapper.
  - Delete the tag `<span>`.
  - Change the `h3` text to "Certifications" and remove its `mt-3`.
- Verify with `npx tsgo --noEmit`.
