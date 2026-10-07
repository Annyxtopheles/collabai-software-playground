# Agency page: edge-to-edge reason pictures, clearer certs/clients, animated Proven Results

## 1. "3 Reasons" cards: pictures touch the card edges
- Each picture fills the full width of the top of its card, with no gap at the top, left or right. The card's rounded top corners clip the picture.
- The space below the picture and the text padding stay the same.

## 2. Certifications and Trusted By: two separate, clearly different blocks
Right now both are small grey labels over similar grids, so they blur together. The new layout:
- **Certifications** sits in a soft grey rounded panel with a bold title ("Certified & Partnered"), a short blue tag, and larger logos in an even grid.
- **Trusted By** is its own full-width band below the whole SJ section, not squeezed into the right column. It gets a bold title ("Trusted By Leading Brands"), thin dividers above and below, and client logos in a single row that wraps on smaller screens, spaced generously.
- The right column then holds only Certifications, so each block has room to be seen.
- No hover glow (you removed it earlier). The ISO link and the Rentah wordmark stay.

## 3. Proven Results: animated rows, emphasized savings, and a summary
**Row animation (runs once, when the list scrolls into view):**
- Each "before" box fills slowly from left to right with a soft grey bar, which shows the old, slow way.
- At the same time, each "after" box fills quickly with brand blue.
- When a blue bar finishes, a small burst of confetti bits (blue and black dots and dashes) pops out around the savings badge. The badge (-87%, -100%, -96%, -94%) then scales up with a bounce and stays emphasized.
- Rows start one after another, a short moment apart.

**Stronger savings badges:** bigger, bold, solid brand-blue pills with white text and a down-arrow mark. On phones they sit on their own line so they stay clear.

**New summary under the 8 items (above the 4 metrics):** a highlighted blue-bordered strip:
- Headline: "Every week, ~3.5 hours of busywork → 22 minutes."
- Supporting line: "That's about 93% less admin per person, freeing roughly 160 hours a year for client work."
- The math comes from the four rows: 120 + 30 + 45 + 90 = 285 min before, and 15 + 0 + 2 + 5 = 22 min after. That is 92% less, rounded to 93% in copy only if you approve. The yearly figure assumes about 48 working weeks. I wrote this wording myself, so please confirm or send your own.

**Reduced motion:** visitors with reduced motion turned on see the bars already full and no confetti.

## Technical details
- `AgencyWhyAct.tsx`: take the card's `p-7` off the image area. Wrap the image in `-mx-7 -mt-7` (or split the padding) with `overflow-hidden rounded-t-2xl`, and keep the bottom spacing.
- `AgencySjBacking.tsx`: the right column holds only the Certifications panel (`rounded-2xl bg-slate-light p-6`). Move the clients list into a new full-width `border-t` band after the grid, using `flex flex-wrap justify-center gap-x-10`.
- `AgencyBeforeAfter.tsx`:
  - Use `useScrollReveal` on the list.
  - Each box gets an absolutely positioned fill bar that animates `scaleX` from 0 to 1 with framer-motion: about 2.4s for before, about 0.7s for after, staggered by row index.
  - Add a small `Confetti` burst of about 10 absolutely positioned framer-motion spans in brand tokens, triggered by `onAnimationComplete`, and a spring scale on the badge.
  - Add the summary strip. Check `prefers-reduced-motion`.
- No new dependencies. Framer-motion is already used. Verify with `npx tsgo --noEmit`.
