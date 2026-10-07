# Change the agency hero badge text

## Change

On the Agency page hero, the first highlighted badge currently reads "100+ agency agents". Replace it with "Your Data, Your Server".

The two neighbouring badges ("1+ year in production at SJ Innovation" and "40+ hrs/wk saved") stay unchanged, as does the badge styling.

## Technical detail

`src/pages/new/AgencyHub.tsx`, line 46 — swap the badge label text only.

Note: the "100+ agents" claim is a canonical brand stat used across the site; removing it here only affects this badge, not other pages.
