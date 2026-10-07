# Update "Why ACT" reasons 2 and 3 copy

Replace the body text of the second and third accordion items in the "Why Choose Agency Control Tower" section on the Agency page. Titles ("Easy to Use", "Cost-effective") and the section layout stay as they are.

## Reason 2 — Easy to Use

Intro:
- Most AI tools add another app to your stack.
- Another login. Another workflow. Another tab.
- ACT brings it together.

Bulleted list:
- Keep your existing tools
- Connect your workflows
- Automate repetitive tasks
- Manage everything from one hub
- Cut the back-and-forth

Closing:
- ACT doesn't replace the tools your team already uses. It makes them work better together.
- Less juggling. More doing. 2X productivity.

## Reason 3 — Cost-effective

- Built for growing SMBs, ACT keeps costs practical.
- No per-user licence fees. No endless subscription stack.
- One-time payment.
- Then cover annual maintenance and add customized services when you need them.
- Invest once. Scale smarter.
- More automation. More productivity. More value from the tools you already use.

## Technical notes

- File: `src/pages/new/AgencyHub.tsx`, accordion items `r2` and `r3`.
- Reason 2 body: paragraphs plus a styled `ul` with existing muted text tokens; reason 3 body: short paragraphs, emphasis on "One-time payment." using the existing primary text style.
- No new components, colors, or dependencies; typecheck after the edit.
