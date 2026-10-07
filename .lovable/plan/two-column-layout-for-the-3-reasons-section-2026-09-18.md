# Two-column layout for the "3 Reasons" section

Change the Agency page section so the heading text sits on the left and the expandable list sits on the right, instead of heading-on-top / list-below.

## Layout

```text
Desktop (>=1024px)
+---------------------------+  +-----------------------------+
| 3 Reasons to go for ACT   |  | 01 Data Privacy & Protection|
| over other AI Assisting   |  | 02 Easy to Use              |
| Tools & Apps              |  | 03 Cost-effective           |
+---------------------------+  +-----------------------------+

Mobile: heading stacked above the list (unchanged order)
```

- Heading left-aligned on desktop, centered on mobile, and kept sticky-free (simple top alignment).
- Accordion keeps its current card styling, numbers, copy, multi-open behavior, and first item open.
- No text changes.

## Technical notes

- File: `src/pages/new/AgencyHub.tsx`, the `{/* 3 reasons to choose ACT */}` section.
- Replace the centered `max-w-3xl` wrappers with a `grid gap-8 lg:grid-cols-2 lg:items-start` container.
- Left column: existing `h2` with `text-center lg:text-left`.
- Right column: existing `Accordion` with `mx-auto`/`max-w-3xl`/`mt-6` removed so it fills the column.
- Verify with a typecheck.
