import PageSeoHead from "@/components/PageSeoHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Developers = () => (
  <>
    <PageSeoHead
      title="Developers — CollabAI"
      description="Build on the CollabAI Platform: open-source agent runtime, knowledge layer, and APIs for self-hosted AI deployments."
      canonicalPath="/developers"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "CollabAI Developers",
        description: "Developer resources for the CollabAI Platform.",
        url: "https://collabai.software/developers",
      }}
    />
    <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">For developers</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Build on the CollabAI Platform
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        CollabAI is a self-hosted agent runtime and knowledge layer. The platform is open-source
        (MIT-style license) and runs entirely inside your tenant — your model keys, your data, your audit trail.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <article className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground">Open-source core</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Clone the agent runtime, knowledge layer, and Control Tower scaffolding from GitHub. Self-host on
            your own infrastructure.
          </p>
          <a
            href="https://github.com/sjinnovation/CollabAI"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium text-secondary hover:underline"
          >
            github.com/sjinnovation/CollabAI →
          </a>
        </article>

        <article className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground">REST + Edge Function APIs</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Trigger agents, query knowledge, and stream events via documented HTTP endpoints. See the API
            reference for schemas and examples.
          </p>
          <Link to="/api" className="mt-4 inline-block text-sm font-medium text-secondary hover:underline">
            API reference →
          </Link>
        </article>

        <article className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground">Agent SDK</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Define new agents in TypeScript with typed tool inputs/outputs. Ship them to your Control Tower
            without touching the runtime.
          </p>
        </article>

        <article className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground">Marketplace</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Publish reusable agents to the CollabAI Agents Marketplace and reach customers across regulated
            verticals.
          </p>
          <a
            href="https://marketplace.collabai.software/submit"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium text-secondary hover:underline"
          >
            Submit an agent →
          </a>
        </article>
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Button asChild className="bg-foreground text-background hover:bg-foreground/90">
          <Link to="/contact">Talk to engineering</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/collabai-platform">Platform overview</Link>
        </Button>
      </div>
    </section>
  </>
);

export default Developers;