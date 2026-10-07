# Agency page cleanup and card restructure

## 1. Remove three lines from "What is Agency Control Tower"

In `src/components/new/agency/AgencyProofBar.tsx`, delete:
- The heading "What are the Benefits of Agency Control Tower" (and its wrapper div)
- The line "Battle-tested inside SJ Innovation — a 100-person agency — for over a year." (and its check icon)
- The line "Real-time sync · Role-based access · Audit log on every action"

The section keeps its title, intro paragraph, and the integrations diagram. The now-unused `CheckCircle2` import is removed.

## 2. Reorder the six help cards

In `src/pages/new/AgencyHub.tsx`, each card in the "How Does Agency Control Tower Help..." grid changes order to:

```text
1. Illustration (image)
2. Blue label text (e.g. YOU DON'T!)
3. Title (e.g. Pods, OKR & Productivity)
4. Paragraph
```

Spacing is adjusted so the image sits flush at the top of the card and the text block below reads cleanly. No copy, images, or alt text change.
