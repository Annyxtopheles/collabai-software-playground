# Smooth image loading (no more pop-in)

Pictures currently appear abruptly the moment they finish downloading, which looks unpolished — most visible with the Finance & Invoicing artwork on the Agency page.

## What changes

- Add one shared picture component used across the site that:
  - reserves the space the picture will occupy, so nothing jumps when it arrives
  - shows a soft neutral placeholder while loading
  - fades the picture in gently (about 0.5s) instead of snapping in
  - keeps loading pictures only as they come into view (except the top-of-page hero, which loads immediately so it is never late)
  - respects the "reduce motion" accessibility setting by skipping the fade
  - shows the placeholder if a picture fails to load, rather than a broken icon

- Apply it to the Agency page pictures, starting with the Finance & Invoicing artwork, plus the other illustration and logo images on that page.
- Apply it to the homepage hero and security illustration so the behaviour is consistent on the main entry pages.

Other pages keep working exactly as now; they can be moved over later.

## Technical notes

- New `src/components/ui/SmoothImage.tsx`: wraps `<img>`, tracks `onLoad`/`onError`, toggles `opacity-0 → opacity-100` with a Tailwind transition, wrapper carries `bg-muted` and an optional `aspectRatio`/`width`+`height` to reserve layout space (prevents CLS).
- Props pass through `src`, `alt`, `className`, `width`, `height`, `sizes`, plus `priority` (sets `loading="eager"` + `fetchpriority="high"`, otherwise `loading="lazy"` `decoding="async"`).
- Reduced motion handled via the `motion-reduce:transition-none` utility.
- Replace `<img>` usages in `src/pages/new/AgencyHub.tsx`, `src/components/new/agency/*`, `src/components/Hero.tsx` image path, and `src/components/new/sections/SecuritySection.tsx`.
- No change to data fetching, `useSiteImage`, or asset pipeline.
