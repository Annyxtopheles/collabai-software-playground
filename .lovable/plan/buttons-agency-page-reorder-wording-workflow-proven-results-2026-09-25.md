# Buttons, Agency page reorder, wording, workflow, Proven Results, pricing block

## 1. Button animation (site-wide)
- Remove the letter-spacing-out hover effect from every button and CTA across the site. Keep the press-down on click, the colour/gradient changes and the glows.
- Header "Get Free Demo": on hover, only the brand gradient shift plus a softer glow, matching other CTAs. No other hover effects.

## 2. "How Does Agency Control Tower Help…" card order
Row 1: AI & Automation, Meeting Intelligence, Projects & Delivery.
Row 2: OKR & Productivity, Finance & Invoicing, HR & Leave Tracking.

## 3. Pod(s) becomes Team(s) on the Agency page
- Covers card titles and text, the diagram label, workflow names and steps, and other Agency copy (for example "Pods, OKR & Productivity" becomes "Teams, OKR & Productivity", and "Pod-level scorecards" becomes "Team-level scorecards").
- "Sunday-night Pod Briefing" becomes "Monday Team Briefing".
- Other industry pages stay the same.

## 4. Agency Workflow in Motion: completes once
- Steps fill in as you scroll down the first time. Once they're complete, they stay complete, and scrolling back up doesn't undo them.
- Refreshing the page starts it over.

## 5. Proven Results label
- A "With Agency Control Tower" label goes in the white box, above the four items on the right. The space above the left column stays empty.

## 6. "Get Agency Control Tower Now" (before FAQ)
- Remove the outer bordered box. The title sits on its own, followed by the Full and Lite cards side by side, then the "A single Command Center…" line and the "Get Free Demo" button. The content stays the same.

## Technical notes
- Remove `hover:tracking-[…]` and `group-hover:tracking-[…]` everywhere under `src/`, including the `button.tsx` variants. Update the button-interaction memory (hover letter-spacing is no longer used).
- `NavigationNew.tsx`: drop the `bg-foreground` overrides so the default gradient variant applies, and use a lighter glow, e.g. `hover:shadow-[0_4px_14px_0_rgba(49,94,255,0.25)]`.
- `AgencyHub.tsx`: reorder the `helpCards` array and edit the Pod copy. Also rename Pod text in `AgencyIntegrationsBeam.tsx`, `AgencyModuleGrid.tsx` and the agency entry of `verticals.ts` only.
- `AgencyWorkflowMotion.tsx`: keep progress at its highest value so far (`setProgress(p => Math.max(p, v))`) and latch `outcomeOn` once it's true.
- `AgencyBeforeAfter.tsx`: add a header row inside the same grid columns, with the label over the "after" column only.
