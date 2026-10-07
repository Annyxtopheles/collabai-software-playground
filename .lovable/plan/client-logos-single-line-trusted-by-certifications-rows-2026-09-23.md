# Client logos + single-line Trusted By / Certifications rows

## What changes

- Replace the combined "Trusted By" screenshot with the eight individual client logos you just uploaded: Neutrogena, Janssen, Frasada, Johnson & Johnson, Vigilance, Rentah, St. John's University, Teachers Pay Teachers.
- Restructure both rows on the Agency page's SJ Innovation section so each sits on a single line:
  - "Trusted By" label on the left, the eight client logos in one row to its right.
  - "Certifications" label on the left, the eight certification badges in one row to its right.
- Logos scale down so all eight fit comfortably on one line at desktop width; on smaller screens they wrap and the label moves above the row, so nothing gets squeezed unreadably.
- Each logo keeps its own name as alt text, lazy loading, reserved space and fade-in like the rest of the page.

## Technical notes

- Upload each client logo via `lovable-assets` into `src/assets/clients/` as `.asset.json` pointers.
- In `src/components/new/agency/AgencySjBacking.tsx`: swap the `sj-client-logos` collage for a typed `clients` array rendered through `SmoothImage`; make each row a flex layout (`label | logo row`) with the label fixed-width and uppercase, logo row `flex-1 flex-wrap items-center justify-between`.
- Logo heights around h-7/h-8 (clients) and h-12/h-14 (certs) to fit one line at desktop; grayscale-to-color hover is not added unless asked.
- Delete the unused `src/assets/sj-client-logos.png.asset.json` pointer.
- Verify with `npx tsgo --noEmit`.
