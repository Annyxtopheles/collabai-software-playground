## Pricing page: comparison heading

On the Pricing page comparison section:

- Change the big heading to just **Comparison**.
- Right under it, add a small line: "Control Tower vs. ChatGPT Enterprise, Microsoft Copilot, and white-label AI".
- Keep the existing line below it ("Per-seat tools price you out…") and the table unchanged.

### Technical details
- File: src/pages/new/Pricing.tsx, lines 357-359.
- Heading text becomes "Comparison"; add a `<p className="mt-2 text-base text-slate-secondary">` subline before the existing paragraph.
