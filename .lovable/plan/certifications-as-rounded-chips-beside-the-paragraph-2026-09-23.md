# Certifications as rounded chips beside the paragraph

## What changes

- Every certification becomes a rounded pill like the current Inc. 5000 one: small logo on the left, its name in text next to it.
- The pills all move up under the SJ Innovation paragraph, joining the Inc. 5000 and ISO 9001 items that already sit there.
- A small "Certifications" label sits beside that group so the row reads clearly.
- The ISO 9001 pill uses the ISO badge image you supplied, keeping its link to the LinkedIn post.
- The separate full-width certifications row lower down is removed, since everything now lives in the pill group.
- The "Trusted By" client logo strip stays exactly as it is.

Pills:
Inc. 5000, ISO 9001 Certified, Claude Partner Network, AWS Partner Network, AWS Certified Cloud Practitioner, AWS Certified Solutions Architect – Associate, Veeva Vault Certified, Acquia Certified Drupal 9 Site Builder, Acquia Certified Drupal 10 Site Builder, Shopify Product Fundamentals, Adobe Solution Partner Bronze, Shopify Business Fundamentals.

They wrap onto multiple lines as needed and stay readable on mobile.

## Technical notes

- Work stays in `src/components/new/agency/AgencySjBacking.tsx`.
- Reuse the existing `chipClass` and `SmoothImage`; render the `certifications` array as `<li className={chipClass}>` with a `h-6 w-auto` logo plus label text.
- Add a `label` field to the certification entries so each pill shows its name; ISO entry carries the LinkedIn href and renders as an anchor with the existing hover treatment.
- Prefix the group with a `text-xs uppercase tracking-wider text-slate-secondary` "Certifications" label.
- Delete the bottom certifications block; keep the Trusted By row untouched.
- Verify with `npx tsgo --noEmit`.
