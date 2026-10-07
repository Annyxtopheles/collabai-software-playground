# Fix blog heading sizes

## Problem
On blog articles, H2 (and H3) headings render at paragraph size. The article body uses "prose" styling classes, but the plugin that powers them is installed yet not switched on, so heading sizes are never applied.

## Fix
- Enable the already-installed typography plugin in the Tailwind config (no new dependency).
- Result: article H2 shows at the size already set on the page (text-2xl, bold), H3 at text-xl, with proper spacing; paragraphs, lists and links get consistent styling.

## Scope
- Only `tailwind.config.ts` changes. Other pages using `prose` (e.g. knowledge base article) will also get proper heading sizes, which is the intended behavior.

## How to test
Open any blog post and check that section headings are clearly larger and bolder than the paragraph text.
