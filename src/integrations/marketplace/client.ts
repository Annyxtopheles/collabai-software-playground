// Read-only Supabase client for the CollabAI Agents Marketplace project.
// Uses the marketplace's publishable anon key. Public-read RLS only — never used for writes or auth.
import { createClient } from "@supabase/supabase-js";

const MARKETPLACE_URL = "https://hipawempvghpfqzlbdvd.supabase.co";
const MARKETPLACE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpcGF3ZW1wdmdocGZxemxiZHZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4ODQwNjcsImV4cCI6MjA2OTQ2MDA2N30.hTHeamvjKtiqIRQegkOVbsCr_T-v9ewZI2maA3pl4dE";

export const MARKETPLACE_SITE_URL = "https://marketplace.collabai.software";

export const marketplaceSupabase = createClient(MARKETPLACE_URL, MARKETPLACE_ANON_KEY, {
  auth: { persistSession: false, autoRefreshToken: false, storageKey: "marketplace-anon" },
});

export type MarketplaceAgent = {
  slug: string;
  agent_name: string;
  description: string | null;
  vertical: string | null;
  subcategory: string | null;
  is_featured: boolean | null;
  is_free: boolean | null;
  install_count: number | null;
  demo_url: string | null;
};