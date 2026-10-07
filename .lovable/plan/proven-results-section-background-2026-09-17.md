# Proven Results section background

Change the "Proven Results" section on the agency page from plain white to the light grey tone already used elsewhere on the site (the same shade behind the "What is Agency Control Tower" block).

## Change
- In `src/components/new/agency/AgencyBeforeAfter.tsx`, swap the section background `bg-background` for `bg-slate-light` and add a top/bottom border (`border-y border-border`) so it reads as a distinct band, matching the existing pattern.
- The white cards inside stay white, so the contrast still works.

No copy, layout, or logic changes.
