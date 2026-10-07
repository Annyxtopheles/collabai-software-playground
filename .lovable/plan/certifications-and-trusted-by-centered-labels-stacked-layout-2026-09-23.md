# Certifications and Trusted By: centered labels, stacked layout

## What changes

- The "Certifications" label moves from the left side to the centre, sitting above the logo grid.
- The "Trusted By" row stops being a separate full-width strip at the bottom. It moves directly under the certifications, in the same right-hand column.
- "Trusted By" gets the same treatment: centred label on top, client logos in a grid underneath, with the same soft blue glow on hover.
- Client logos keep their current size and alignment; certification logos stay logo-only as they are now.
- The left column (Powered by, headline, paragraph, four stat cards, trusted-by line) is unchanged.

## Technical notes

- All work in `src/components/new/agency/AgencySjBacking.tsx`.
- Change both label paragraphs to `text-center`.
- Render the clients list inside the right-hand column below the certifications block, reusing the same grid pattern (`grid grid-cols-3 gap-2 sm:grid-cols-4`) and the shared `blockClass` hover-glow cell.
- Delete the old bottom `mt-14` wrapper containing the horizontal Trusted By row.
- Verify with `npx tsgo --noEmit`.
