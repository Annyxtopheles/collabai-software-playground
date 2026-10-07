# Agency pack card becomes the pricing offer

## What changes

Replace the contents of the "Agency pack" card on the Agency page with the offer copy currently sitting in the dark band near the bottom, and remove that dark band.

New card contents (in order):

- Get Agency Control Tower Now
- at $2,500 one-time instalment fees
- Up to 5 softwares | 20 Agents
- Or get Lite Version at just $299
- Not sure which one is right for you? Got Questions or need more information?
- Buttons: "Book a Call with an Expert" (contact page) and "Try the Lite Version" (opens the lite demo in a new tab)

Removed from the card: the "$2,500 / year, starting" price row, the teams/setup-fee line, the agents/modules line, and the "See full pricing" / "Talk to sales" buttons.

Removed from the page: the whole dark "Get Agency Control Tower Now" band, so the offer appears once only.

Everything else on the page (testimonials above, the 3-reasons accordion, FAQ) stays where it is.

## Technical notes

- File: `src/pages/new/AgencyHub.tsx`.
- Rewrite the pack section (lines ~251-284) with the new copy and the two CTAs; keep the existing card shell (light-grey section, blue-bordered rounded card, centred text) so it matches the rest of the page.
- Delete the final CTA section (lines ~393-429); keep the FAQ section that follows.
- Lite button keeps `demos?.lite?.url ?? "https://agencylite.collabai.software"` with `target="_blank" rel="noopener noreferrer"`.
- Drop now-unused imports if any become unused; run `npx tsgo --noEmit`.
