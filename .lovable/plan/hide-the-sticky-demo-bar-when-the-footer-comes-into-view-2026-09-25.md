# Hide the sticky demo bar when the footer comes into view

## What changes
The floating "Get Free Demo Now" bar slides away as soon as the footer starts to appear, the same way it stays hidden in the top section of the page. If you scroll back up, it comes back.

This applies to every industry page that uses the bar (Agency, Healthcare, Mortgage, Non-Profit, Touring), since they all have the same overlap with the footer.

## Technical notes
- `StickyNicheCTA.tsx`: add an `IntersectionObserver` on the page `footer` element and track `footerInView`.
- Visible = `scrollY > 600 && !footerInView`. Use the existing slide and fade animation.
- Disconnect the observer when the component unmounts. If no footer exists, keep today's behaviour.
