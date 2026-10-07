import PageSeoHead from "@/components/PageSeoHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const endpoints = [
  {
    method: "POST",
    path: "/functions/v1/agents/invoke",
    summary: "Invoke a Control Tower agent with a typed payload. Returns a streamed result.",
  },
  {
    method: "GET",
    path: "/rest/v1/agents",
    summary: "List agents available in your tenant, filtered by team and permissions.",
  },
  {
    method: "POST",
    path: "/functions/v1/knowledge/query",
    summary: "Semantic search across your private knowledge base (meetings, docs, CRM).",
  },
  {
    method: "GET",
    path: "/rest/v1/audit_log",
    summary: "Read the immutable audit trail for every agent action in your tenant.",
  },
];

const Api = () => (
  <>
    <PageSeoHead
      title="API Reference — CollabAI"
      description="REST and Edge Function APIs for invoking agents, querying knowledge, and streaming events in a self-hosted CollabAI deployment."
      canonicalPath="/api"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: "CollabAI API Reference",
        description: "Developer documentation for CollabAI's agent invocation, knowledge query, and audit log endpoints.",
        url: "https://collabai.software/api",
      }}
    />
    <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">API reference</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        CollabAI API
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Every CollabAI deployment exposes a REST and Edge Function surface inside your own tenant. Auth uses
        Supabase JWT bearer tokens; rate limits, retries, and audit logging are enforced server-side.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-foreground">Authentication</h2>
      <p className="mt-3 text-sm text-muted-foreground">
        Pass a valid Supabase JWT in the <code className="rounded bg-muted px-1.5 py-0.5">Authorization: Bearer &lt;token&gt;</code>{" "}
        header. RLS policies on each table scope responses to the calling user's roles.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-foreground">Core endpoints</h2>
      <ul className="mt-4 space-y-3">
        {endpoints.map((e) => (
          <li key={e.path} className="rounded-lg border border-border bg-card p-4">
            <div className="flex items-center gap-3">
              <span className="rounded bg-foreground px-2 py-0.5 text-xs font-mono font-semibold text-background">
                {e.method}
              </span>
              <code className="text-sm font-mono text-foreground">{e.path}</code>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{e.summary}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-foreground">Need full schemas?</h2>
      <p className="mt-3 text-sm text-muted-foreground">
        Detailed request/response schemas, error codes, and SDK examples ship with each Control Tower
        deployment. Talk to engineering for an OpenAPI spec.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button asChild className="bg-foreground text-background hover:bg-foreground/90">
          <Link to="/contact">Request API access</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/developers">Developer hub</Link>
        </Button>
      </div>
    </section>
  </>
);

export default Api;