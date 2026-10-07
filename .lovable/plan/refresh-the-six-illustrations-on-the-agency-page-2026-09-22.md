# Refresh the six illustrations on the Agency page

Replace the artwork in all six cards of "How Does Agency Control Tower Help Small & Mid-Scale Businesses" with the newly uploaded versions. Filenames map directly to card titles.

| Card | New picture |
| --- | --- |
| Pods, OKR & Productivity | Pods_OKR_Productivity_1 |
| Meeting Intelligence & Knowledge Base | Meeting_Intelligence_Knowledge_Base_1 |
| Finance & Invoicing | Finance_Invoicing_1 |
| AI & Automation | AI_Automation_1 |
| Projects & Delivery | Projects_Delivery_1 |
| HR & Leave Tracking | HR_Leave_Tracking_1 |

Layout, card order, headings, labels and paragraphs stay exactly as they are. Only the pictures change, keeping the same smooth fade-in and descriptive alt text.

## Technical notes

- Upload each file from `/mnt/user-uploads/` with `lovable-assets create`, writing new pointers into `src/assets/*.png.asset.json` (suffixed `-v3` style names to avoid clashing with current pointers).
- Update the six imports at the top of `src/pages/new/AgencyHub.tsx` to the new pointers; `helpCards` entries keep their existing structure.
- Delete the six superseded pointers with `lovable-assets delete` so no orphaned CDN objects remain.
- Run `npx tsgo --noEmit` after the swap.
