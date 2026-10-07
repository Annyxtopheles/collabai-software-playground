# Fix orphaned words in the workflow cards

## Problem
In both "Agency in Motion" cards, several step lines end with a single word stranded on its own last line ("context", "click", "called out", "prep"). The outcome paragraphs can do the same.

## Fix
- Balance the wrapping of every step line and outcome paragraph so text is distributed evenly across lines instead of leaving one word alone.
- Keep the small ACTOR tag on the first line with the text, but stop it from pushing the last word onto a new line.
- Add a safety net so the final two words of each line never separate.
- Give the text column a touch more room by keeping the graphic and spacing as they are now.

## Untouched
Copy, icons, card layout, scroll animation, and outcome reveal stay exactly as they are.

## Technical notes
- File: `src/components/new/agency/AgencyWorkflowMotion.tsx`.
- Apply `text-pretty`/`[text-wrap:balance]` to the step label and outcome text, and join the last two words with a non-breaking space where balancing alone is not enough.
- Verify at desktop and mobile widths with a screenshot, then run `npx tsgo --noEmit`.
