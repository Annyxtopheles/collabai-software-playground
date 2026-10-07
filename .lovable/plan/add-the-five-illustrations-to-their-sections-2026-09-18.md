# Add the five illustrations to their sections

The uploaded artwork file names match the placeholder captions in the "How Does Active Control Tower Help Small & Mid-Scale Businesses" area of the Agency page.

## Where each picture goes

| Picture | Section | Placeholder it replaces |
| --- | --- | --- |
| Pods_OKR_Productivity | Pods, OKR & Productivity | "Ufff, I have to create team reviews" |
| Meeting_Intelligence_Knowledge_Base | Meeting Intelligence & Knowledge Base | "What did the manager say in the meeting?" |
| AI_Automation | AI & Automation | "Why do I have to repeat this task everyday?" |
| Projects_Delivery | Projects & Delivery | "Has anyone seen the project update?" (currently shows the meeting caption by mistake) |
| HR_Leave_Tracking | HR & Leave Tracking | "Where is my graphic designer?" |

Each picture sits inside the existing bordered card, shown full width, with the same smooth fade-in already used for the Finance artwork, plus descriptive alt text for search engines and screen readers.

## One thing to note

The Finance & Invoicing card currently shows the "Why do I have to repeat this task everyday?" artwork — which is really the AI & Automation picture. I will use it in AI & Automation where it belongs. Finance & Invoicing then has no artwork of its own; it will keep showing the same picture for now unless you send a Finance-specific one, in which case I will swap it in.

## Technical notes

- Upload the four new files via `lovable-assets create` from `/mnt/user-uploads/`, writing pointers to `src/assets/*.png.asset.json`; reuse the existing `finance-repeat-task` pointer for AI & Automation.
- In `src/pages/new/AgencyHub.tsx`, replace the five placeholder `<ul>` blocks with `SmoothImage` (aspectRatio `3 / 2`, `object-contain`, rounded wrapper), matching the existing Finance usage.
