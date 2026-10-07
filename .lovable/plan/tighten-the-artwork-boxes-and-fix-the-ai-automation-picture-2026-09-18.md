# Tighten the artwork boxes and fix the AI & Automation picture

## What changes

1. **No wasted space around the artwork.** Each illustration box in the "How Does Active Control Tower Help Small & Mid-Scale Businesses" section currently has thick inner padding and fits the picture inside it, leaving a visible empty band. The pictures will instead fill the rounded box edge to edge, with the corners clipped so the artwork follows the rounded shape. Applies to all five: Pods/OKR, Meeting Intelligence, Finance & Invoicing, AI & Automation, Projects & Delivery, HR & Leave Tracking.

2. **AI & Automation picture.** The newly uploaded "Why do I have to repeat this task everyday?" artwork is added as its own picture and used in the AI & Automation block. Finance & Invoicing keeps the picture it has now, so nothing goes blank; send a Finance-specific illustration whenever you have one and it will be swapped in.

## Technical notes

- Add a pointer for the upload via `lovable-assets` into `src/assets/ai-automation.png.asset.json`, import it in `src/pages/new/AgencyHub.tsx`, and use it for the AI & Automation `SmoothImage`.
- In the five illustration cards: drop `p-7`, add `overflow-hidden`, and switch the image to `object-cover` with a consistent `aspectRatio` (`3 / 2`) so it bleeds to the rounded border.
- No copy, layout, or section-order changes.
