# Social links in the footer

Add LinkedIn, Facebook and X links to the footer, placed directly under the logo and the short description on the left.

## What changes

In `src/components/new/FooterNew.tsx` (the footer used on the Agency page and the other new pages):

- Below the paragraph in the first (logo) column, add a row of three social icons:
  - LinkedIn: https://www.linkedin.com/company/collabaisoftware/
  - Facebook: https://www.facebook.com/collabai/
  - X: https://x.com/CollabAI1
- All open in a new tab (`target="_blank"`, `rel="noopener noreferrer"`) with accessible labels.
- Icons are solid/filled inline SVG brand marks (the same ones already used in `src/components/Footer.tsx`), not outlined generic icons.
- Styling: small `h-5 w-5` marks, muted colour by default, brand blue (`hover:text-secondary`) on hover, matching the footer's existing link behaviour.

No other footer content, layout, or page changes.
