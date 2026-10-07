# Agency page: reorder two sections

## What changes

1. The "3 Reasons to go for ACT over other AI Assisting Tools & Apps" section moves up so it sits directly above the "Get Agency Control Tower Now" card.
2. The "How Does Agency Control Tower Help Small & Mid-Scale Businesses" cards grid moves up so it sits above the "What is Agency Control Tower" section.

Nothing else changes: same copy, same styling, same illustrations and accordion behaviour.

## Resulting order

```text
Hero
How Does Agency Control Tower Help Small & Mid-Scale Businesses
What is Agency Control Tower (proof bar + diagram)
Agency Workflow in Motion
Proven Results
Why Choose Agency Control Tower
Integrations strip
SJ Innovation credibility
Testimonials
3 Reasons to go for ACT
Get Agency Control Tower Now (Agency pack card)
FAQ / footer
```

## Technical notes

Single file: `src/pages/new/AgencyHub.tsx`. Relocate the help-cards `<section>` (currently after `AgencyBeforeAfter`) to just before `<AgencyProofBar />`, and relocate the three-reasons `<section>` to just before the Agency pack `<section>`. Alternating background colours (`bg-background` / `bg-slate-light`) will be checked after the move so adjacent sections don't end up with the same background.
