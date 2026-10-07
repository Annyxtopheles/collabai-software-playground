ALTER TABLE public.media_files
  ADD COLUMN IF NOT EXISTS alt_text text DEFAULT '',
  ADD COLUMN IF NOT EXISTS title_text text DEFAULT '';