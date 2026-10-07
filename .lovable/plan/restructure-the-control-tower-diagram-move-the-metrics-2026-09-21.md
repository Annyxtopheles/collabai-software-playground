# Restructure the Control Tower diagram + move the metrics

## 1. New diagram structure

Replace the scattered circles with a clean three-column rectangular layout (structure only — our own colours and typography, not the reference's):

```text
  TOOLS                    HUB                    WHAT YOU GET
 ┌──────────┐                                    ┌─────────────────────┐
 │ HubSpot  │──┐                            ┌───▶│ Projects & Delivery │
 ├──────────┤  │      ┌──────────────┐      │    ├─────────────────────┤
 │ Monday   │──┼─────▶│    Agency    │──────┼───▶│ BD & Pipeline       │
 ├──────────┤  │      │ Control Tower│      │    ├─────────────────────┤
 │ Notion   │──┘      └──────────────┘      └───▶│ ... (6 total)       │
 └──────────┘
```

- Left: seven bordered rectangular tiles, each with its logo **and its name** (HubSpot, Monday, Notion, Zoom, Slack, Google Drive, GitHub).
- Centre: one larger rectangular Agency Control Tower panel.
- Right: six bordered tiles, each with icon, title and sub-line:
  - Projects & Delivery — Monday + Notion, unified
  - BD & Pipeline — HubSpot deals + Deal Coach
  - Pods, OKRs, Productivity — Utilization + scorecards
  - Meetings & Knowledge — Zoom transcripts + semantic search
  - EOS / L10 — Rocks, Issues, IDS, V/TO
  - AI Agents — 100+ specialized for agency work
- Connecting lines: tools collect into a vertical bracket into the hub, hub branches out to the six results, with the existing subtle animated flow (static if reduced motion is on).
- Mobile: stacks into tools → hub → results, lines hidden.

## 2. Remove the now-duplicated cards

The six result items currently also appear as a separate card grid lower in the same section — that grid is removed so the content isn't shown twice.

## 3. Move the metrics

The four metrics (40+ hours saved, 2,500+ meetings, 10,000+ agent tasks, 166 active projects) move out of the "What is Agency Control Tower" section and sit directly above the "Get A Demo Now" button in **Proven Results**.

## Technical notes

- `src/components/new/agency/AgencyIntegrationsBeam.tsx`: rewrite as a 3-column grid (`grid-cols-[1fr_auto_1fr]`) with refs per tile; keep `AnimatedBeam`, `resolveLogos`, brand tokens only.
- `src/components/new/agency/AgencyProofBar.tsx`: delete the `nodes` card grid and the `metrics` block.
- `src/components/new/agency/AgencyBeforeAfter.tsx`: add the metrics row above the CTA.
