# Fix: Blog panel fails to load posts

## What is actually wrong

The admin Blog panel asks the database for every column of every blog post, including the full article body. The stored articles are very large — about 52 MB of body text in total, with a single post at 7.6 MB (almost certainly images pasted directly into the editor). The request exceeds the database time limit and fails, so the panel shows the "Failed to fetch blog posts" message and an empty list.

Confirmed directly: the same request returns a database timeout error (`canceling statement due to statement timeout`), not a permission problem. There are 39 posts in the database and they are all intact — nothing is lost.

## The fix

1. **Blog list loads without article bodies.** The list only needs title, slug, author, category, status, dates, image and SEO fields. Removing the body from the list query makes it load fast.
2. **Load a post's body only when it is opened for editing.** When the user clicks Edit (or Duplicate / preview), fetch that one post's full content by id, with a loading state on the editor while it arrives.
3. **Blog Analytics panel gets the same treatment.** It currently also pulls every article body just to count words, so it will hit the same timeout. It will instead read a word count and body length computed in the database, and keep all existing charts and the top-posts table working.
4. **Clearer error messages.** If a fetch does fail, show the real reason instead of a generic message, and log it.

## Follow-up worth doing (not part of this fix unless you want it)

The 7.6 MB post means images are being embedded inside the article text instead of uploaded to the media library. That will keep making the editor slow and pages heavy. I can add a check that flags oversized posts and moves embedded images into storage.

## Technical notes

- `src/components/admin/BlogManager.tsx`: `fetchPosts()` switches from `select("*")` to an explicit column list excluding `content`; a new `loadPostContent(id)` fetches the body on demand before opening the editor. The `BlogPost` type gets `content` as optional in list context.
- `src/components/admin/BlogAnalyticsDashboard.tsx`: drops `content` from its select; adds a security-definer SQL function (e.g. `blog_post_word_counts()`) returning `id, word_count` for admins, used for the word-count metrics.
- No schema changes to `blog_posts`, no RLS changes — grants and policies are already correct.
