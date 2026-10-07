# Certifications: logos only, new ISO link

## What changes

- The ISO 9001 certification now links to https://sjinnovation.com/security (opens in a new tab) instead of the LinkedIn post.
- Certification names are removed — each certification shows only its logo, so the group takes far less space.
- The boxes around the certifications go away. The logos sit on a plain background and get a soft blue glow on hover.
- Logos stay evenly sized and aligned in a tidy grid; each keeps its name as hidden alt text for accessibility.
- The four stat cards (22 / 500+ / 100+ / 4) and the Trusted By strip stay exactly as they are.

## Technical notes

- Work stays in `src/components/new/agency/AgencySjBacking.tsx`.
- Update the ISO entry `href` to `https://sjinnovation.com/security`.
- Drop `blockClass` boxes and the label span plus `ExternalLink` icon; render each item as `SmoothImage` (`h-12 w-auto object-contain`) inside a padded flex cell with `transition hover:drop-shadow-[0_0_10px_hsl(var(--brand-secondary)/0.45)]`.
- Grid becomes denser (e.g. `grid-cols-3 sm:grid-cols-4`) since items are logo-only.
- Remove the now-unused `ExternalLink` import; verify with `npx tsgo --noEmit`.
