# Two headline line breaks on the Agency page

## 1. Section heading

"How Does Agency Control Tower Help Small & Mid-Scale Businesses" splits onto two lines:

```text
How Does Agency Control Tower
Help Small & Mid-Scale Businesses
```

## 2. Card title

The "Meeting Intelligence & Knowledge Base" card title splits onto two lines:

```text
Meeting Intelligence
& Knowledge Base
```

Wording stays exactly the same in both places; only where the line breaks changes. On narrow screens text still wraps naturally to fit.

## Technical notes

- `src/pages/new/AgencyHub.tsx`: in the section `h2`, wrap each half in a `<span className="block">` so the break is explicit.
- Same file: give the Meeting Intelligence card an optional two-part title (or a `<span className="block">` split in the rendered `h3`) so only that card breaks; other cards render unchanged.
