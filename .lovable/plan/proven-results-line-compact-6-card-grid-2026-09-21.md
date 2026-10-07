# Proven Results line + compact 6-card grid

## 1. Proven Results section

- Between the metrics strip (40+, 2,500+, 10,000+, 166) and the button, add a centered line: "Find out how you can get similar results for your team."
- Change the button label from "Get A Demo Now" to "Get In Touch Now" (link unchanged).

## 2. "How Does Agency Control Tower Help Small & Mid-Scale Businesses"

Replace the six alternating full-width bands with one compact grid: 2 rows of 3 cards (3 across on desktop, 2 on tablet, 1 on mobile).

Each card, top to bottom:
- small blue label (YOU DON'T!, TRACK IN REAL-TIME!, NO GUESSING!, NO REPETITION!, NO CHASING!, REDUCE SURPRISES!)
- title (Pods, OKR & Productivity / Finance & Invoicing / Meeting Intelligence & Knowledge Base / AI & Automation / Projects & Delivery / HR & Leave Tracking)
- the illustration
- the existing explanation paragraph below the image

Card order: Pods OKR & Productivity, Finance & Invoicing, Meeting Intelligence & Knowledge Base, AI & Automation, Projects & Delivery, HR & Leave Tracking.

All existing text and images are kept as-is; only the layout changes. Titles drop to a smaller size so three fit per row neatly, and cards share equal height with a light border and rounded corners, matching the rest of the page.

## Technical notes

- `src/components/new/agency/AgencyBeforeAfter.tsx`: add the sentence above the CTA, change the button copy.
- `src/pages/new/AgencyHub.tsx`: collapse sections 2a–2f into a single `<section>` with a `grid md:grid-cols-2 lg:grid-cols-3` driven by a local array of `{ label, title, image, alt, body }`; keep `SmoothImage` with `aspectRatio="3 / 2"`, `object-cover`, rounded wrapper; card titles become `text-xl font-bold`, headings stay as `h3` under the section `h2`.
