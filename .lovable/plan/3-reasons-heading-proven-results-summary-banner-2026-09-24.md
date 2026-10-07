# 3 Reasons heading + Proven Results summary banner

## 1. 3 Reasons section heading
- Remove the small blue "Why ACT" tag above the heading.
- Heading shows on exactly two lines on desktop:
  - Line 1: "3 Reasons to Choose Agency Control Tower"
  - Line 2: "Over Other AI Assisting Tools & Apps"
- Each line stays together on desktop. On phones, text wraps to fit the screen.

## 2. Proven Results closing banner
Rebuild the summary box to match the reference:
- Left: a custom drawn stopwatch in brand blue and black, with speed lines on the left and small burst marks near the top.
- A thin vertical divider between the drawing and the text.
- Right: "Every week, ~4.75 hours of busywork becomes **22 minutes**." ("22 minutes" in blue), with the supporting line underneath: "That's about 92% less admin per person, freeing roughly 210 hours a year for real client work."
- Soft light blue background, thin blue border, rounded corners. Left-aligned text.
- On phones, the drawing sits above the text and the content is centered.
- The strikethrough on "~4.75 hours" is removed so the sentence matches the reference.

## Technical notes
- `AgencyWhyAct.tsx`: delete the eyebrow span. Wrap each heading line in `block lg:whitespace-nowrap` spans and widen the heading container from `max-w-3xl` to `max-w-5xl`.
- `AgencyBeforeAfter.tsx`: replace the summary div with a `flex flex-col sm:flex-row` layout. Add an inline SVG stopwatch that uses the existing `BLUE`/`INK` constants, with an accent burst in blue. Use a `sm:border-l` divider. Keep the section's existing semantic tokens.
- Run `npx tsgo --noEmit` afterwards.
