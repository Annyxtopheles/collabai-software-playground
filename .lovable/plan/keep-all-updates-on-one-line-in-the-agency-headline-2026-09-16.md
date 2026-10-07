# Keep "All Updates." on one line in the agency headline

## What you see now

The headline reads "All Tools. All Tasks. All Updates." followed by "in one place!" on its own line. There is no forced break after the word "All" in the code — at your screen width the browser wraps the phrase on its own, splitting "All" from "Updates.".

## The change

Keep each of the three phrases unbreakable, so "All Updates." always stays together. The intentional break before "in one place!" stays as is.

## Technical detail

In `src/pages/new/AgencyHub.tsx` (hero h1, line 36), wrap each phrase in a span with `whitespace-nowrap`:
"All Tools." / "All Tasks." / "All Updates." — keeping the existing `<br />` and the blue "in one place!" line unchanged.
