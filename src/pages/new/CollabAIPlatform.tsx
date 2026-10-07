import { Link } from "react-router-dom";
import {
  ArrowRight,
  Cpu,
  BookOpen,
  ShieldCheck,
  Workflow,
  Database,
  Search,
  Activity,
  Plug,
} from "lucide-react";
import ProductPageShell from "@/components/new/ProductPageShell";
import { FaqSection } from "@/components/ui/faq-section";

const surfaces = [
  { label: "Control Tower", to: "/control-tower" },
  { label: "Agencies", to: "/agency" },
  { label: "Mortgage", to: "/mortgage-bank" },
  { label: "Healthcare", to: "/healthcare" },
  { label: "Non-profit", to: "/non-profit" },
];

const runtimeFeatures = [
  { icon: Workflow, title: "Orchestrated", body: "Agents chain into multi-step workflows with retries, branching, and human-in-the-loop checkpoints." },
  { icon: Activity, title: "Observed", body: "Every run is traced: input, tool calls, output, latency, cost. Debug what an agent actually did." },
  { icon: ShieldCheck, title: "Audited", body: "Every agent action is logged with actor, timestamp, and payload — ready for SOC 2 and HIPAA review." },
];

const knowledgeFeatures = [
  { icon: Database, title: "Ingested in your tenant", body: "Meetings, docs, CRM, tickets, EHR, LOS — pulled into a private vector + relational store. No third-party training." },
  { icon: Search, title: "Semantic recall", body: "Agents find what you mean, not just what you typed. Citations point back to the source row, file, or call." },
  { icon: BookOpen, title: "Meeting memory", body: "Every Zoom transcript becomes structured memory — decisions, owners, follow-ups — searchable forever." },
];

const faqs = [
  { question: "Is the CollabAI Platform a separate product from Control Tower?", answer: "No. Control Tower is the operator surface for the CollabAI Platform. The platform is the engine underneath — agent runtime + knowledge layer — that also powers our vertical products (Agency, Mortgage, Healthcare, Non-profit)." },
  { question: "Can we build our own agents on the platform?", answer: "Yes. Customers and partners can define new agents — tools, prompts, memory bindings, guardrails — and ship them into the same runtime that runs our 100+ shipped agents." },
  { question: "Where does the data live?", answer: "Inside your tenant. Self-hosted by default. We never train AI models on your data. Postgres + row-level security at the data layer; full audit trail at the runtime layer." },
  { question: "Which models does the platform run on?", answer: "Model-agnostic. The platform supports OpenAI, Anthropic, Google, AWS Bedrock, and Azure OpenAI — you bring your own API keys. Your deployment routes between models using your keys and your policy. Model traffic stays under your contracts — CollabAI never sees it." },
];

const CollabAIPlatform = () => (
  <ProductPageShell
    seo={{
      title: "CollabAI Platform — The Private Agentic Engine",
      description:
        "The CollabAI Platform is the private agentic engine powering Control Tower and our vertical products. Agent runtime + knowledge layer, running inside your tenant.",
      canonicalPath: "/collabai-platform",
    }}
    eyebrow="The Engine Underneath"
    h1="One platform. Two pillars. Many surfaces."
    sub="The CollabAI Platform is the private agentic engine that powers Control Tower and every vertical product we ship. An agent runtime and a knowledge layer — running inside your tenant."
    ctas={[
      { label: "Book a Demo", url: "/book-demo" },
      { label: "Try the Live Demo", url: "https://controltowerdemo.collabai.software/login", external: true, variant: "secondary" },
    ]}
    badges={["Self-hosted by default", "Your tenant · your keys", "HIPAA-ready", "SOC 2 path"]}
  >
    {/* Two-pillar diagram */}
    <section className="bg-slate-light py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
            The architecture
          </span>
          <h2 className="mt-5 text-3xl font-bold text-brand-primary lg:text-4xl">
            Two pillars. One engine.
          </h2>
          <p className="mt-4 text-base text-slate-secondary">
            Every surface — operator dashboards, vertical apps, mobile — calls into the same agent runtime backed by the same knowledge layer.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-border bg-background p-6 lg:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <Cpu className="h-7 w-7 text-[hsl(var(--brand-secondary))]" />
              <h3 className="mt-4 text-lg font-semibold text-brand-primary">Agent Runtime</h3>
              <p className="mt-2 text-sm text-slate-secondary">
                100+ specialized agents. Orchestration, retries, observability, audit — production-grade.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <BookOpen className="h-7 w-7 text-[hsl(var(--brand-secondary))]" />
              <h3 className="mt-4 text-lg font-semibold text-brand-primary">Knowledge + RAG</h3>
              <p className="mt-2 text-sm text-slate-secondary">
                Private vector + relational store. Semantic recall over your meetings, docs, CRM, and decisions.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-dashed border-border bg-slate-light p-4">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-secondary">Surfaces</div>
              <div className="mt-2 text-sm text-brand-primary">
                Control Tower · Vertical apps · Mobile (iOS/Android)
              </div>
            </div>
            <div className="rounded-xl border border-dashed border-border bg-slate-light p-4">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-secondary">Connectors</div>
              <div className="mt-2 text-sm text-brand-primary">
                HubSpot · Zoom · Slack · Drive · Encompass · EHR · LOS · 20+ more
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Pillar 1 deep-dive */}
    <section id="agents" className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block rounded-full bg-[hsl(var(--brand-secondary))]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
            Pillar 01 — Agent Runtime
          </span>
          <h2 className="mt-5 text-3xl font-bold text-brand-primary lg:text-4xl">
            Agents that run like production code.
          </h2>
          <p className="mt-4 text-base text-slate-secondary">
            Define an agent once — tools, prompts, memory bindings, guardrails. The runtime handles execution, recovery, and the audit trail your security team needs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {runtimeFeatures.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6">
              <Icon className="h-7 w-7 text-[hsl(var(--brand-secondary))]" />
              <h3 className="mt-4 text-lg font-semibold text-brand-primary">{title}</h3>
              <p className="mt-2 text-sm text-slate-secondary">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/control-tower/ai-agents"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-secondary))]"
          >
            Browse the 100+ agents <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>

    {/* Pillar 2 deep-dive */}
    <section className="bg-slate-light py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block rounded-full bg-[hsl(var(--brand-secondary))]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
            Pillar 02 — Knowledge + RAG
          </span>
          <h2 className="mt-5 text-3xl font-bold text-brand-primary lg:text-4xl">
            Your private memory. Queryable in plain English.
          </h2>
          <p className="mt-4 text-base text-slate-secondary">
            Every meeting, doc, ticket, and CRM record becomes structured memory inside your tenant. Agents recall it; people search it; nothing leaves your perimeter.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {knowledgeFeatures.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-border bg-background p-6">
              <Icon className="h-7 w-7 text-[hsl(var(--brand-secondary))]" />
              <h3 className="mt-4 text-lg font-semibold text-brand-primary">{title}</h3>
              <p className="mt-2 text-sm text-slate-secondary">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Surfaces — same engine, four shapes */}
    <section className="bg-[hsl(var(--brand-primary))] py-20 text-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold lg:text-4xl">Same engine. Many shapes.</h2>
          <p className="mt-4 text-background/70">
            One platform powers our flagship product and every vertical we ship.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {surfaces.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="rounded-xl border border-background/20 bg-background/5 px-5 py-6 text-center transition-all hover:bg-background/10"
            >
              <span className="text-base font-semibold">{s.label}</span>
              <ArrowRight className="ml-2 inline h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Built on Supabase band */}
    <section id="open-source" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl border border-border bg-slate-light p-8 text-center lg:p-12">
          <Plug className="h-8 w-8 text-[hsl(var(--brand-secondary))]" />
          <h2 className="text-2xl font-bold text-brand-primary lg:text-3xl">
            Built on Supabase. Built to stay open.
          </h2>
          <p className="max-w-2xl text-base text-slate-secondary">
            Postgres-native. Row-level security by design. If our managed service ever goes away, you can self-host. That's the contract.
          </p>
          <Link
            to="/built-on-supabase"
            className="group inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold text-brand-primary transition-all hover:shadow-md"
          >
            Read the architecture <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>

    <FaqSection title="Platform questions" items={faqs} className="bg-slate-light" />
  </ProductPageShell>
);

export default CollabAIPlatform;