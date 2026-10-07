# Polish the "3 Reasons" two-column section

## What changes

- Left column: tidier, better-balanced text block instead of a wide raw heading.
  - Small blue eyebrow label above the heading ("WHY ACT").
  - Heading wrapped to a comfortable measure so lines break naturally, with tighter line spacing.
  - A short supporting line under the heading so the left side doesn't look empty next to the tall panel.
  - Vertically centered against the panel on desktop; centered text on mobile.
- Right column: only one reason open at a time — opening one closes the others. First reason stays open by default and stays open until another is clicked.
- Seamless, modern feel: softer card (subtle border, light shadow, rounded corners), smoother row hover tint, chevron rotation kept, consistent padding.

## Technical notes

- File: `src/pages/new/AgencyHub.tsx`, the `{/* 3 reasons to choose ACT */}` section.
- Switch `<Accordion type="multiple" defaultValue={["r1"]}>` to `type="single" collapsible defaultValue="r1"`.
- Left column: add eyebrow span, constrain heading with `max-w-md`/`text-balance`, `leading-tight`, add supporting paragraph; grid gets `lg:items-center`.
- Card styling: keep `divide-y divide-border rounded-2xl border border-border bg-card`, add `shadow-sm`; add `hover:bg-muted/40 transition-colors` on triggers.
- Verify with a typecheck.
