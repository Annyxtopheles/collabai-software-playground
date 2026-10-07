# Why ACT: bold pricing-style cards

## Copy
- Heading becomes two lines: "3 Reasons to Choose Agency Control Tower" / "Over Other AI Assisting Tools & Apps".
- Remove the line "Private by design, simple to adopt, and priced for growing teams — here is what sets Agency Control Tower apart."
- All card text stays the same.

## New look (modelled on a pricing page)
- Section gets the soft grey background so the white cards stand out.
- Each card gets a strong top band: a blue icon badge (shield for Privacy, pointer/sparkle for Easy to Use, wallet for Cost-effective), a small blue label ("Reason 01/02/03") and a large bold title, divided from the body by a thin line.
- **Middle card (Easy to Use) is featured**, like the "most popular" plan: 2px brand-blue border, a small blue "Most loved" pill on its top edge, slightly raised on desktop, and a soft blue shadow.
- Bullet points become blue check marks, like pricing feature lists.
- Each card ends with a highlighted "bottom line" strip, like a price footer: "Your data never leaves your servers" / "Less juggling. More doing. 2X productivity." / "Invest once. Scale smarter." in bold on a light-blue tinted panel.
- Hover: cards lift slightly and the border turns blue. Stacks on mobile; the featured card stays in the middle.

## Technical notes
- Edit only `src/components/new/agency/AgencyWhyAct.tsx`.
- Add `icon`, `eyebrow`, `featured?`, `bottomLine` to the `Reason` type; Lucide `ShieldCheck`, `MousePointerClick`, `Wallet`, `Check`.
- Move the closing lines ("Less juggling…", "Invest once…") out of the body into `bottomLine` to avoid repeats.
- Only existing tokens (`brand-secondary`, `slate-light`, `border`, `card`); no new colors.
- Verify with `npx tsgo --noEmit`.
