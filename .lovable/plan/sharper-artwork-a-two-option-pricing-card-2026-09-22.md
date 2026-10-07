# Sharper artwork + a two-option pricing card

## 1. Swap the six illustrations to vector

Replace the six pictures in "How Does Agency Control Tower Help Small & Mid-Scale Businesses" with the newly uploaded vector versions, so they stay crisp at any screen size and load lighter.

| Card | New artwork |
| --- | --- |
| Pods, OKR & Productivity | Pods_OKR_Productivity_1.svg |
| Meeting Intelligence & Knowledge Base | Meeting_Intelligence_Knowledge_Base_1.svg |
| Finance & Invoicing | Finance_Invoicing_1.svg |
| AI & Automation | AI_Automation_1.svg |
| Projects & Delivery | Projects_Delivery_1.svg |
| HR & Leave Tracking | HR_Leave_Tracking_1.svg |

Card order, headings, labels, paragraphs, alt text and the fade-in stay exactly as they are.

## 2. Two clear options in the "Get Agency Control Tower Now" card

Turn the two price lines into two side-by-side option boxes inside the same card, so they read as a choice rather than a sentence:

```text
        Get Agency Control Tower Now

 ┌──────────────────────┐  ┌──────────────────────┐
 │ FULL                 │  │ LITE                 │
 │ $2,500 one-time      │  │ $299                 │
 │ Up to 5 softwares    │  │ Lite Version         │
 │ 20 Agents            │  │ Quick start          │
 └──────────────────────┘  └──────────────────────┘

  Not sure which one is right for you?
  [Book a Call with an Expert]  [Try the Lite Version]
```

- Two equal boxes on desktop, stacked on mobile.
- The full option carries a subtle blue highlight as the main offer; the lite box is plain.
- Heading, the "Not sure which one…" line and both existing buttons stay unchanged.

## Technical notes

- SVGs are inline-image artwork (no `<use>` refs), so upload each from `/mnt/user-uploads/` with `lovable-assets create` into `src/assets/*.svg.asset.json`; update the six imports in `src/pages/new/AgencyHub.tsx`.
- SVG assets are served with `Content-Disposition: attachment` on the CDN in some cases — verify one renders in an `<img>` in the preview before swapping all six; if it downloads instead of rendering, keep the existing PNG pointers and report back.
- Delete the six superseded `*_1.png.asset.json` pointers with `lovable-assets delete` only after the swap renders correctly.
- Pricing card: replace the three copy lines (AgencyHub.tsx ~361-369) with a `grid gap-4 sm:grid-cols-2` of two bordered tiles using existing tokens (`border-border`, `bg-card`, `hsl(var(--brand-secondary))`).
- Run `npx tsgo --noEmit`.
