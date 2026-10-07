# Retitle the "What is Agency Control Tower" section

## What changes

In that section header:

- "What is Agency Control Tower" becomes the section title — bold (Inter, weight 700), at the usual section-heading size, replacing the small blue uppercase label.
- The two large bold lines below it merge into one regular paragraph (Inter, weight 400): "The Agency Control Tower is a unified hub. It connects all systems your agency runs on."

Everything below (the connection diagram, benefits heading, metrics, cards) stays as is.

## Technical notes

- `src/components/new/agency/AgencyProofBar.tsx` lines 33-43.
- Replace the eyebrow `<span>` with an `<h2 className="text-3xl font-bold text-brand-primary lg:text-4xl">`, and replace the existing `<h2>` + `<p>` pair with a single `<p className="mt-4 text-lg font-normal text-slate-secondary">`.
- Inter is already the page font; no font or color tokens change.
