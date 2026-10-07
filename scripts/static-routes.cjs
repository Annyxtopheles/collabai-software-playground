/**
 * Static route metadata used by scripts/prerender.cjs.
 * Each entry produces dist/<path>/index.html with per-route head tags.
 *
 * Keep titles <= 60 chars and descriptions <= 160 chars where possible.
 * If a route is missing here, the prerender script still emits the file
 * using sitewide defaults (correct canonical/og:url, generic title).
 */
module.exports = [
  // Home
  { path: "/", title: "Control Tower by CollabAI — Private AI ops for your company", description: "Control Tower is the private AI operations platform for regulated industries. Visibility, control, and AI agents that read and write across your stack." },

  // Platform
  { path: "/collabai-platform", title: "CollabAI Platform — The Private Agentic Engine", description: "The CollabAI Platform is the private agentic engine powering Control Tower. Agent runtime + knowledge layer, running inside your tenant." },
  { path: "/agents", title: "Featured Control Tower Agents — A curated set from the 100+ agent library", description: "Pre-built and custom AI agents for regulated industries." },

  // Developers / API
  { path: "/developers", title: "Developers — CollabAI", description: "Build on the CollabAI Platform: open-source agent runtime, knowledge layer, and APIs for self-hosted AI deployments." },
  { path: "/api", title: "API Reference — CollabAI", description: "REST and Edge Function APIs for invoking agents, querying knowledge, and streaming events in a self-hosted CollabAI deployment." },

  // Control Tower
  { path: "/control-tower", title: "Control Tower — Private AI Ops | CollabAI", description: "Control Tower is a private, agentic AI platform with 100+ specialized agents, role-based dashboards, and built-in security for regulated industries." },
  { path: "/control-tower/how-it-works", title: "How Control Tower Works — From Data to Production in 4 Weeks", description: "A four-week deployment path for Control Tower: connect data, configure agents, pilot, and roll out — with audit trail at every step." },
  { path: "/control-tower/dashboards", title: "Control Tower Dashboards — Role-based Live Views", description: "Live dashboards for executives, ops, and field teams. Pipeline, meetings, agent runs — one view per role." },
  { path: "/control-tower/ai-agents", title: "AI Agents in Control Tower — 100+ Specialized Agents Across 6 Teams", description: "Sales, Operations, Marketing, HR, Finance, Engineering — every team has its own AI workforce inside Control Tower." },
  { path: "/control-tower/security", title: "Control Tower Security — Private, Self-hosted, HIPAA-ready", description: "Self-hosted deployment, row-level security, SSO, full audit trail, and HIPAA-readiness. Built for regulated industries." },
  { path: "/control-tower/mobile", title: "Control Tower Mobile — iOS and Android Apps for Field Teams", description: "Native iOS and Android apps for Control Tower. Capture meetings, approve tasks, and stay ahead of the pipeline — anywhere." },
  { path: "/control-tower/integrations", title: "Control Tower Integrations — Works With Your Existing Stack", description: "HubSpot, Salesforce, Zoom, Slack, Drive, Encompass, eClinicalWorks, and more. Plus webhooks and a REST API for everything else." },

  // Industries - Agency
  { path: "/agency", title: "Agency Control Tower — Run your agency from one cockpit", description: "One hub for HubSpot, Monday, Zoom, Slack, Notion. 100+ AI agents tuned for agencies. 1+ year in production, 40+ hrs/week saved. Try the live demo." },
  { path: "/agency/agents", title: "Agents for Agencies — Control Tower by CollabAI", description: "Every agent that ships with this niche, grouped by team. Each one runs inside Control Tower on top of your existing stack." },
  { path: "/agency/use-cases", title: "Use cases — Agencies — Control Tower by CollabAI", description: "Concrete scenarios our customers run on day one — and the outcome attached to each." },
  { path: "/agency/workflows", title: "Workflows — Agencies — Control Tower by CollabAI", description: "How agents combine, who triggers them, and where humans review. Each workflow is a real production trigger chain." },

  // Mortgage Bank
  { path: "/mortgage-bank", title: "Mortgage Control Tower — AI Ops Layer", description: "AI agents that sit on top of Encompass, LendingPad, or ICE Mortgage Tech. Real-time pipeline risk, rate-lock alerts, and compliance monitoring. Live in under 2 weeks." },
  { path: "/mortgage-bank/agents", title: "Agents for Mortgage — Control Tower by CollabAI", description: "Every agent that ships with this niche, grouped by team. Each one runs inside Control Tower on top of your existing stack." },
  { path: "/mortgage-bank/use-cases", title: "Use cases — Mortgage — Control Tower by CollabAI", description: "Concrete scenarios our customers run on day one — and the outcome attached to each." },
  { path: "/mortgage-bank/workflows", title: "Workflows — Mortgage — Control Tower by CollabAI", description: "How agents combine, who triggers them, and where humans review. Each workflow is a real production trigger chain." },

  // Healthcare
  { path: "/healthcare", title: "ePhysician — HIPAA-Ready Voice Agents for Clinics", description: "Replace your front-desk phone queue with HIPAA-compliant voice agents that book, verify insurance, and confirm identity — 24/7. Live in 10 minutes." },
  { path: "/healthcare/agents", title: "Agents for Healthcare — Control Tower by CollabAI", description: "Every agent that ships with this niche, grouped by team. Each one runs inside Control Tower on top of your existing stack." },
  { path: "/healthcare/use-cases", title: "Use cases — Healthcare — Control Tower by CollabAI", description: "Concrete scenarios our customers run on day one — and the outcome attached to each." },
  { path: "/healthcare/workflows", title: "Workflows — Healthcare — Control Tower by CollabAI", description: "How agents combine, who triggers them, and where humans review. Each workflow is a real production trigger chain." },

  // Non-profit
  { path: "/non-profit", title: "Nonprofit Control Tower — Free, Open-Source AI", description: "Free, open-source AI for nonprofits and boards. Connect Salesforce NPSP, Bloomerang, QuickBooks — one operational layer for donors, grants, programs, and governance." },
  { path: "/non-profit/agents", title: "Agents for Nonprofits — Control Tower by CollabAI", description: "Every agent that ships with this niche, grouped by team. Each one runs inside Control Tower on top of your existing stack." },
  { path: "/non-profit/use-cases", title: "Use cases — Nonprofits — Control Tower by CollabAI", description: "Concrete scenarios our customers run on day one — and the outcome attached to each." },
  { path: "/non-profit/workflows", title: "Workflows — Nonprofits — Control Tower by CollabAI", description: "How agents combine, who triggers them, and where humans review. Each workflow is a real production trigger chain." },

  // Touring
  { path: "/touring", title: "TourOps Control Tower — AI Ops Layer for Modern Tour Operators", description: "Unify Bokun, GetYourGuide, Viator, Stripe, and direct bookings into one operator dashboard. AI agents that quote, confirm, and follow up — 24/7. Live in 2 weeks." },
  { path: "/touring/agents", title: "Agents for Touring — Control Tower by CollabAI", description: "Every agent that ships with this niche, grouped by team. Each one runs inside Control Tower on top of your existing stack." },
  { path: "/touring/use-cases", title: "Use cases — Touring — Control Tower by CollabAI", description: "Concrete scenarios our customers run on day one — and the outcome attached to each." },
  { path: "/touring/workflows", title: "Workflows — Touring — Control Tower by CollabAI", description: "How agents combine, who triggers them, and where humans review. Each workflow is a real production trigger chain." },

  // Pharma
  { path: "/pharma", title: "ClinicalAI by CollabAI — AI Agents for Pharma & Clinical Trials", description: "Purpose-built AI agents for clinical trials, pharmacovigilance, and regulatory compliance. 21 CFR Part 11 compliant, HIPAA-ready, white-label available." },
  { path: "/pharma/agents", title: "Agents for Pharma — Control Tower by CollabAI", description: "Every agent that ships with this niche, grouped by team. Each one runs inside Control Tower on top of your existing stack." },
  { path: "/pharma/use-cases", title: "Use cases — Pharma — Control Tower by CollabAI", description: "Concrete scenarios our customers run on day one — and the outcome attached to each." },
  { path: "/pharma/workflows", title: "Workflows — Pharma — Control Tower by CollabAI", description: "How agents combine, who triggers them, and where humans review. Each workflow is a real production trigger chain." },
  { path: "/pharma/clinicaltrials-ai", title: "ClinicalAI — AI for Clinical Trial Follow-Up & MedDRA Coding", description: "AI agents purpose-built to accelerate and de-risk clinical trials." },
  { path: "/pharma/pharmacovigilance-ai", title: "Pharmacovigilance AI — Adverse Event Coding & SMQ Signal Detection", description: "Automate adverse-event detection and reporting with private AI." },
  { path: "/pharma/regulatory-doc-validator", title: "Regulatory Doc Validator — AI FDA, EMA & ICH Document Review", description: "AI-powered validation for regulatory submissions." },
  { path: "/pharma/ivr-navigator", title: "AI IVR Navigator — Zero Hold Time for Pharma Benefit Verification", description: "AI-driven interactive voice response for clinical trial operations." },

  // Company
  { path: "/pricing", title: "Control Tower Pricing — Self-Hosted AI from $2,500/yr", description: "Transparent Control Tower pricing. Self-hosted private AI from $2,500/year. Control Tower plans plus industry packs for Agency, Healthcare, Mortgage, and Nonprofit teams." },
  { path: "/agency-pricing", title: "Agency Control Tower Pricing — Self-Hosted AI", description: "Agency Control Tower pricing. Self-hosted private AI installed on your server, with Lite, Starter, Growth and Enterprise plans." },
  { path: "/about", title: "About Control Tower — Built by SJ Innovation since 2004", description: "Control Tower is built by SJ Innovation LLC — founded 2004, 3 global offices, 400+ clients. Powered by CollabAI, our private AI operations platform." },
  { path: "/partnership", title: "Partnership — Build, refer, and resell with CollabAI", description: "Three partnership tracks: referral, implementation, and technology. Co-build the future of private AI ops." },
  { path: "/built-on-supabase", title: "Built on Supabase — Why we chose the open Postgres stack", description: "Control Tower is built on Supabase. Open-source Postgres, row-level security, edge functions, and full self-host portability." },
  { path: "/contact", title: "Contact CollabAI — Sales, support, partnerships", description: "Talk to sales, request a demo, or reach support. Real engineers respond within 1 business day." },
  { path: "/book-demo", title: "Book a Demo — See Control Tower with your data", description: "30-minute working session with a solutions engineer. Real product, real data, real answers." },
  { path: "/privacy", title: "Privacy Policy — CollabAI", description: "How CollabAI collects, stores, and protects customer data. GDPR, CCPA, HIPAA aligned." },
  { path: "/terms", title: "Terms of Service — CollabAI", description: "Plain-English terms for Control Tower and the CollabAI Platform." },

  // Resources
  { path: "/resources", title: "Resources — Docs, case studies, and whitepapers", description: "Everything you need to evaluate, deploy, and operate Control Tower and the CollabAI Platform." },
  { path: "/try-demo", title: "Try the Live Demo — Control Tower by CollabAI", description: "Pick your industry and open a live demo — no signup, no install. Plus the full library of CollabAI sandboxes." },
  { path: "/ai-readiness", title: "AI Readiness — Quick Assessment", description: "Answer 7 guided questions and share your business details to prepare your AI readiness assessment." },
  { path: "/blog", title: "Blog - AI Insights & Resources | CollabAI", description: "Get the latest updates on AI agents, industry insights, and resources from CollabAI. Expert articles on AI for accounting, legal, healthcare, and more." },
  { path: "/case-studies", title: "Case Studies – Control Tower in Action", description: "See how enterprises across banking, healthcare, and legal deploy Control Tower to automate workflows and protect sensitive data." },
  { path: "/resources/faqs", title: "FAQs – CollabAI Frequently Asked Questions", description: "Get answers to common questions about CollabAI's self-hosted AI platform, data security, support, pricing, and customization options." },
  { path: "/resources/whitepapers", title: "Whitepapers & Research – CollabAI", description: "Download CollabAI whitepapers on enterprise AI deployment, data privacy, and industry-specific AI strategies for regulated sectors." },
  { path: "/resources/installation", title: "Install CollabAI – Setup Guide", description: "Step-by-step installation guide for self-hosting CollabAI. Docker, database setup, API keys, and configuration instructions." },
  { path: "/resources/knowledge-base", title: "Knowledge Base – CollabAI Help Center", description: "Browse CollabAI's knowledge base for guides, tutorials, and troubleshooting articles on deploying and managing your enterprise AI platform." },
  { path: "/resources/playbooks/private-secure-ai", title: "Private & Secure AI Deployment – CollabAI", description: "Learn how to deploy AI that keeps all data on your own servers. A guide to self-hosted, encrypted, and compliance-ready AI infrastructure." },
  { path: "/resources/playbooks/custom-ai-agents", title: "Custom AI Agents Playbook – CollabAI", description: "Build and deploy custom AI agents tailored to your business. A guide to creating industry-specific AI assistants with CollabAI." },
  { path: "/resources/playbooks/ai-workflows", title: "AI Workflow Automation Playbook – CollabAI", description: "Learn how to automate repetitive business workflows with AI agents. Step-by-step guide to building efficient AI-powered processes." },
  { path: "/events", title: "Events & Webinars – CollabAI", description: "Join CollabAI webinars, workshops, and live events. Learn about enterprise AI deployment, security best practices, and industry-specific solutions." },
  { path: "/webinars", title: "Events & Webinars – CollabAI", description: "Join CollabAI webinars, workshops, and live events. Learn about enterprise AI deployment, security best practices, and industry-specific solutions." },
  { path: "/integrations", title: "Control Tower Integrations – 30+ Enterprise Connectors", description: "Connect Control Tower with Slack, Google Drive, Outlook, HubSpot, and 30+ tools. Seamless enterprise integrations for your AI workflows." },
  { path: "/testimonials", title: "Customer Testimonials – Control Tower Reviews", description: "Hear from enterprise teams using Control Tower to deploy private AI agents. Real feedback from banking, healthcare, and professional services clients." },

  // Additional top-level pages
  { path: "/security", title: "Security - CollabAI", description: "How CollabAI protects your data with SOC 2-aligned controls, encryption, and tenant isolation." },
  { path: "/use-cases", title: "AI Use Cases - CollabAI", description: "Real-world AI use cases across regulated industries — agency, healthcare, mortgage, pharma, and more." },
  { path: "/features", title: "Features - CollabAI", description: "Explore the features of CollabAI's private, agentic AI platform." },
  { path: "/features/open-source", title: "Open Source - CollabAI", description: "The open-source core of CollabAI — self-host, audit, and extend freely." },
  { path: "/mobile", title: "Mobile - CollabAI", description: "Run and monitor your private AI agents from the CollabAI mobile experience." },
  { path: "/legal", title: "Legal - CollabAI", description: "Legal information for CollabAI by SJ Innovation LLC." },
  { path: "/enterprise-architecture", title: "Enterprise Architecture - CollabAI", description: "How CollabAI fits into modern, secure enterprise AI architectures." },

  // Vertical-style top-level industry pages
  { path: "/accounting", title: "AI for Accounting - CollabAI", description: "Private AI agents for accounting and small law firm workflows." },
  { path: "/banking", title: "AI for Banking - CollabAI", description: "Compliant, private AI agents for banking operations." },
  { path: "/mortgage", title: "AI for Mortgage - CollabAI", description: "Private AI agents for mortgage origination, processing, and servicing." },

  // /industry/* hubs
  { path: "/industry/accounting", title: "AI for Accounting - CollabAI", description: "Private AI agents purpose-built for accounting firms." },
  { path: "/industry/agency", title: "AI for Agencies - CollabAI", description: "Private AI agents purpose-built for agencies." },
  { path: "/industry/healthcare", title: "AI for Healthcare - CollabAI", description: "HIPAA-aligned private AI agents for healthcare organizations." },
  { path: "/industry/legal", title: "AI for Legal - CollabAI", description: "Private AI agents purpose-built for legal teams and law firms." },
  { path: "/industry/mortgage", title: "AI for Mortgage - CollabAI", description: "Private AI agents purpose-built for mortgage lenders." },
  { path: "/industry/non-profit", title: "AI for Non-Profits - CollabAI", description: "Affordable, private AI agents purpose-built for non-profits." },

  // Touring (legacy /tour slug)
  { path: "/tour", title: "AI for Touring & Live Events - CollabAI", description: "Private AI agents for touring, production, and live events." },
  { path: "/tour/agents", title: "Touring AI Agents", description: "AI agents built for touring and live event operations." },
  { path: "/tour/use-cases", title: "Touring AI Use Cases", description: "AI use cases for touring and live entertainment." },
  { path: "/tour/workflows", title: "Touring AI Workflows", description: "Automated workflows for touring teams." },

  // Playbooks (top-level + per-vertical)
  { path: "/playbooks", title: "Playbooks - CollabAI", description: "Practical playbooks for deploying private, agentic AI in your organization." },
  { path: "/playbooks/ai-workflows", title: "AI Workflows Playbook - CollabAI", description: "Design effective AI workflows for regulated industries." },
  { path: "/playbooks/custom-ai-agents", title: "Custom AI Agents Playbook - CollabAI", description: "Build and deploy custom AI agents for your business." },
  { path: "/playbooks/private-secure-ai", title: "Private & Secure AI Playbook - CollabAI", description: "A practical playbook for deploying private, secure AI." },
  { path: "/playbooks/accounting", title: "Accounting AI Playbook - CollabAI", description: "How accounting firms deploy private AI agents in practice." },
  { path: "/playbooks/healthcare", title: "Healthcare AI Playbook - CollabAI", description: "How healthcare teams deploy private, compliant AI agents." },
  { path: "/playbooks/legal", title: "Legal AI Playbook - CollabAI", description: "How legal teams deploy private, secure AI agents." },
  { path: "/playbooks/mortgage", title: "Mortgage AI Playbook - CollabAI", description: "How mortgage lenders deploy private AI agents." },

  // Legacy /new/* mirror — same content, canonical points at the live URL
  { path: "/new", title: "CollabAI - Enterprise AI Platform", description: "Deploy secure, industry-specific AI agents behind your firewall.", canonical: "https://collabai.software/" },
  { path: "/new/about", title: "About CollabAI", description: "Our mission: bring private, agentic AI to regulated industries.", canonical: "https://collabai.software/about" },
  { path: "/new/agents", title: "AI Agents - CollabAI", description: "Pre-built and custom AI agents for regulated industries.", canonical: "https://collabai.software/agents" },
  { path: "/new/blog", title: "Blog - CollabAI", description: "Insights on private AI, agentic systems, and regulated industries.", canonical: "https://collabai.software/blog" },
  { path: "/new/book-demo", title: "Book a Demo - CollabAI", description: "See CollabAI in action - book a personalized demo.", canonical: "https://collabai.software/book-demo" },
  { path: "/new/built-on-supabase", title: "Built on Supabase - CollabAI", description: "Why CollabAI is built on Supabase for secure, private AI deployments.", canonical: "https://collabai.software/built-on-supabase" },
  { path: "/new/case-studies", title: "Case Studies - CollabAI", description: "How regulated organizations deploy CollabAI.", canonical: "https://collabai.software/case-studies" },
  { path: "/new/collabai-platform", title: "CollabAI Platform - Private Agentic AI", description: "A modular, self-hosted platform for building and deploying secure AI agents.", canonical: "https://collabai.software/collabai-platform" },
  { path: "/new/contact", title: "Contact CollabAI", description: "Get in touch with the CollabAI team.", canonical: "https://collabai.software/contact" },
  { path: "/new/control-tower", title: "Control Tower by CollabAI", description: "The command center for your private AI agents.", canonical: "https://collabai.software/control-tower" },
  { path: "/new/control-tower/ai-agents", title: "Control Tower AI Agents", description: "Manage every AI agent in your enterprise from one place.", canonical: "https://collabai.software/control-tower/ai-agents" },
  { path: "/new/control-tower/dashboards", title: "Control Tower Dashboards", description: "Real-time visibility into AI agent performance and usage.", canonical: "https://collabai.software/control-tower/dashboards" },
  { path: "/new/control-tower/how-it-works", title: "How Control Tower Works", description: "See how Control Tower orchestrates secure AI agents.", canonical: "https://collabai.software/control-tower/how-it-works" },
  { path: "/new/control-tower/integrations", title: "Control Tower Integrations", description: "Connect Control Tower to your existing enterprise systems.", canonical: "https://collabai.software/control-tower/integrations" },
  { path: "/new/control-tower/mobile", title: "Control Tower Mobile", description: "Manage your AI agents on the go.", canonical: "https://collabai.software/control-tower/mobile" },
  { path: "/new/control-tower/security", title: "Control Tower Security", description: "Enterprise-grade security and access control for your AI agents.", canonical: "https://collabai.software/control-tower/security" },
  { path: "/new/features/agency", title: "AI for Agencies - CollabAI", description: "Private AI agents purpose-built for agencies.", canonical: "https://collabai.software/agency" },
  { path: "/new/features/healthcare", title: "AI for Healthcare - CollabAI", description: "HIPAA-aligned private AI agents for healthcare organizations.", canonical: "https://collabai.software/healthcare" },
  { path: "/new/features/mortgage", title: "AI for Mortgage - CollabAI", description: "Private AI agents for mortgage operations.", canonical: "https://collabai.software/mortgage-bank" },
  { path: "/new/features/non-profit", title: "AI for Non-Profits - CollabAI", description: "Affordable, private AI agents for non-profits.", canonical: "https://collabai.software/non-profit" },
  { path: "/new/partnership", title: "Partnerships - CollabAI", description: "Partner with CollabAI to deliver private AI to regulated industries.", canonical: "https://collabai.software/partnership" },
  { path: "/new/pricing", title: "Pricing - CollabAI", description: "Transparent pricing for private, enterprise-grade AI agents.", canonical: "https://collabai.software/pricing" },
  { path: "/new/privacy", title: "Privacy Policy - CollabAI", description: "How CollabAI handles your data.", canonical: "https://collabai.software/privacy" },
  { path: "/new/resources", title: "Resources - CollabAI", description: "Guides, playbooks, whitepapers, and more from CollabAI.", canonical: "https://collabai.software/resources" },
  { path: "/new/resources/faqs", title: "FAQs - CollabAI", description: "Answers to common questions about CollabAI.", canonical: "https://collabai.software/resources/faqs" },
  { path: "/new/resources/installation", title: "Installation Guide - CollabAI", description: "How to install and deploy CollabAI in your environment.", canonical: "https://collabai.software/resources/installation" },
  { path: "/new/resources/knowledge-base", title: "Knowledge Base - CollabAI", description: "Documentation and how-to guides for CollabAI.", canonical: "https://collabai.software/resources/knowledge-base" },
  { path: "/new/resources/whitepapers", title: "Whitepapers - CollabAI", description: "In-depth whitepapers on private and agentic AI.", canonical: "https://collabai.software/resources/whitepapers" },
  { path: "/new/terms", title: "Terms of Service - CollabAI", description: "CollabAI terms of service.", canonical: "https://collabai.software/terms" },
  { path: "/new/try-demo", title: "Try the Demo - CollabAI", description: "Try CollabAI's private AI agents in your browser.", canonical: "https://collabai.software/try-demo" },
];