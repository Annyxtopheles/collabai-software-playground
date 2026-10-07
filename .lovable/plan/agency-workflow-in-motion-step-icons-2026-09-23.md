# Agency Workflow in Motion — step icons

Bring the section in line with the reference: every step gets its own vector icon in a soft tinted square tile, and each outcome gets an icon too.

## What changes visually

Each step row becomes: coloured icon tile → actor tag (AGENT / SYSTEM / HUMAN) → step text.

Meeting → tasks → owners
- Meeting Intelligence extracts… → document with sparkle (blue tile)
- Task AI Chat creates tasks… → checklist (indigo tile)
- Slack DM sent to each owner → Slack brand mark (green tile)
- Owner accepts, edits, reassigns → person with check (green tile)
- Outcome → target/bullseye

Sunday-night Pod Briefing
- Pod Weekly AI pulls productivity… → bar chart (teal tile)
- Drafts 1-page briefing per pod → document (indigo tile)
- Email + Slack delivery to leads → envelope (amber tile)
- Lead reviews, opens Monday → people with eye (pink tile)
- Outcome → bar chart

All icons are vector: Lucide components plus the existing Slack SVG already in the logo catalog. No raster images added.

## Technical notes

- Add optional `icon` and `iconTone` fields to `VerticalWorkflowStep` (and an optional `outcomeIcon` on `VerticalWorkflow`) in `src/data/verticals.ts`, typed as a union of allowed icon keys — no free-form strings.
- Set those keys on the two agency workflows only. Other verticals keep today's behaviour via a fallback to the existing actor icon (Bot / User / Cpu), so no other page changes.
- In `AgencyWorkflowMotion.tsx`, add a small typed icon registry mapping key → Lucide component (or the Slack SVG for the Slack step), and a tone map → background/foreground classes built from existing design tokens (no hardcoded hex).
- Keep the timeline rail, check-mark progress dots, scroll-driven reveal, outcome hysteresis and reduced-motion handling exactly as they are; the tile sits between the rail dot and the text.
- Icon tiles are decorative (`aria-hidden`), step text stays the accessible label.
- Verify with `npx tsgo --noEmit`.
