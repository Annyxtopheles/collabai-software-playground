/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useEffect, useState } from "react";
import { sanitizeWithNewTabLinks } from "@/lib/sanitizeHtml";
import { supabase } from "@/integrations/supabase/client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

// ── Shortcode Data ──────────────────────────────────────────────

const performanceData = [
  { metric: "Query Speed (ms)", before: 450, after: 120 },
  { metric: "API Response (ms)", before: 380, after: 95 },
  { metric: "Cold Start (ms)", before: 1200, after: 300 },
  { metric: "Auth Latency (ms)", before: 520, after: 85 },
];

const featureConsolidationData = [
  { feature: "Authentication", separate: 3, unified: 1 },
  { feature: "File Storage", separate: 2, unified: 1 },
  { feature: "Realtime", separate: 4, unified: 1 },
  { feature: "REST APIs", separate: 5, unified: 1 },
  { feature: "Edge Functions", separate: 3, unified: 1 },
];

const validationData = [
  { collection: "Users", mongodb: 12847, supabase: 12847, match: true },
  { collection: "Agents", mongodb: 3421, supabase: 3421, match: true },
  { collection: "Projects", mongodb: 8956, supabase: 8956, match: true },
  { collection: "Chats", mongodb: 142390, supabase: 142390, match: true },
  { collection: "Files", mongodb: 67234, supabase: 67234, match: true },
];

// ── Shortcode Components ────────────────────────────────────────

const ChartPerformance = () => (
  <div className="my-8">
    <div className="bg-muted/30 rounded-xl p-6 border border-border">
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={performanceData} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="metric" tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
          <YAxis tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} label={{ value: 'Milliseconds', angle: -90, position: 'insideLeft', style: { fill: 'hsl(var(--muted-foreground))' } }} />
          <Tooltip
            contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }}
            labelStyle={{ color: 'hsl(var(--foreground))' }}
          />
          <Legend />
          <Bar dataKey="before" name="MongoDB (Before)" fill="hsl(0, 70%, 55%)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="after" name="Supabase (After)" fill="hsl(142, 70%, 45%)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
    {/* Performance Summary Table */}
    <div className="overflow-x-auto rounded-lg border border-border mt-6">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted/50">
            <th className="text-left px-4 py-3 font-semibold text-brand-primary border-b border-border">Metric</th>
            <th className="text-right px-4 py-3 font-semibold text-brand-primary border-b border-border">MongoDB</th>
            <th className="text-right px-4 py-3 font-semibold text-brand-primary border-b border-border">Supabase</th>
            <th className="text-right px-4 py-3 font-semibold text-brand-primary border-b border-border">Improvement</th>
          </tr>
        </thead>
        <tbody>
          {performanceData.map((row, i) => {
            const improvement = Math.round(((row.before - row.after) / row.before) * 100);
            return (
              <tr key={row.metric} className={`border-b border-border ${i % 2 === 1 ? 'bg-muted/20' : ''}`}>
                <td className="px-4 py-3 text-slate-secondary font-medium">{row.metric}</td>
                <td className="px-4 py-3 text-right font-mono text-red-500">{row.before}ms</td>
                <td className="px-4 py-3 text-right font-mono text-green-600">{row.after}ms</td>
                <td className="px-4 py-3 text-right font-mono font-semibold text-green-600">↓ {improvement}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
);

const ChartConsolidation = () => (
  <div className="my-8">
    <div className="bg-muted/30 rounded-xl p-6 border border-border">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={featureConsolidationData} layout="vertical" margin={{ top: 10, right: 30, left: 100, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis type="number" tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} label={{ value: 'Number of Services', position: 'insideBottom', offset: -5, style: { fill: 'hsl(var(--muted-foreground))' } }} />
          <YAxis dataKey="feature" type="category" tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} width={90} />
          <Tooltip
            contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }}
            labelStyle={{ color: 'hsl(var(--foreground))' }}
          />
          <Legend />
          <Bar dataKey="separate" name="Before (Separate Services)" fill="hsl(0, 70%, 55%)" radius={[0, 4, 4, 0]} />
          <Bar dataKey="unified" name="After (Supabase)" fill="hsl(142, 70%, 45%)" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const TableValidation = () => (
  <div className="overflow-x-auto rounded-lg border border-border my-8">
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-muted/50">
          <th className="text-left px-4 py-3 font-semibold text-brand-primary border-b border-border">Collection</th>
          <th className="text-right px-4 py-3 font-semibold text-brand-primary border-b border-border">MongoDB Count</th>
          <th className="text-right px-4 py-3 font-semibold text-brand-primary border-b border-border">Supabase Count</th>
          <th className="text-center px-4 py-3 font-semibold text-brand-primary border-b border-border">Match</th>
        </tr>
      </thead>
      <tbody>
        {validationData.map((row, i) => (
          <tr key={row.collection} className={`border-b border-border ${i % 2 === 1 ? 'bg-muted/20' : ''}`}>
            <td className="px-4 py-3 text-slate-secondary font-medium">{row.collection}</td>
            <td className="px-4 py-3 text-slate-secondary text-right font-mono">{row.mongodb.toLocaleString()}</td>
            <td className="px-4 py-3 text-slate-secondary text-right font-mono">{row.supabase.toLocaleString()}</td>
            <td className="px-4 py-3 text-center">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">✓ 100%</span>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="bg-muted/50">
          <td className="px-4 py-3 font-semibold text-brand-primary">Total</td>
          <td className="px-4 py-3 text-right font-mono font-semibold text-brand-primary">
            {validationData.reduce((s, r) => s + r.mongodb, 0).toLocaleString()}
          </td>
          <td className="px-4 py-3 text-right font-mono font-semibold text-brand-primary">
            {validationData.reduce((s, r) => s + r.supabase, 0).toLocaleString()}
          </td>
          <td className="px-4 py-3 text-center">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">✓ All Match</span>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
);

const TableMapping = () => (
  <div className="overflow-x-auto rounded-lg border border-border my-8">
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-muted/50">
          <th className="text-left px-4 py-3 font-semibold text-brand-primary border-b border-border">MongoDB Collection</th>
          <th className="text-left px-4 py-3 font-semibold text-brand-primary border-b border-border">Supabase Table</th>
          <th className="text-left px-4 py-3 font-semibold text-brand-primary border-b border-border">Key Changes</th>
          <th className="text-left px-4 py-3 font-semibold text-brand-primary border-b border-border">RLS Enabled</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-border">
          <td className="px-4 py-3 text-slate-secondary font-mono text-xs">users</td>
          <td className="px-4 py-3 text-slate-secondary font-mono text-xs">auth.users + profiles</td>
          <td className="px-4 py-3 text-slate-secondary">Split auth data into Supabase Auth; profile metadata in public schema</td>
          <td className="px-4 py-3 text-green-600 font-semibold">✓</td>
        </tr>
        <tr className="border-b border-border bg-muted/20">
          <td className="px-4 py-3 text-slate-secondary font-mono text-xs">agents</td>
          <td className="px-4 py-3 text-slate-secondary font-mono text-xs">public.agents</td>
          <td className="px-4 py-3 text-slate-secondary">JSONB config column for flexible agent settings; FK to profiles</td>
          <td className="px-4 py-3 text-green-600 font-semibold">✓</td>
        </tr>
        <tr className="border-b border-border">
          <td className="px-4 py-3 text-slate-secondary font-mono text-xs">projects</td>
          <td className="px-4 py-3 text-slate-secondary font-mono text-xs">public.projects</td>
          <td className="px-4 py-3 text-slate-secondary">Proper foreign keys to users; enum for status; GIN index on tags</td>
          <td className="px-4 py-3 text-green-600 font-semibold">✓</td>
        </tr>
        <tr className="border-b border-border bg-muted/20">
          <td className="px-4 py-3 text-slate-secondary font-mono text-xs">chats</td>
          <td className="px-4 py-3 text-slate-secondary font-mono text-xs">public.chats + messages</td>
          <td className="px-4 py-3 text-slate-secondary">Normalized into two tables; realtime enabled on messages</td>
          <td className="px-4 py-3 text-green-600 font-semibold">✓</td>
        </tr>
        <tr>
          <td className="px-4 py-3 text-slate-secondary font-mono text-xs">files</td>
          <td className="px-4 py-3 text-slate-secondary font-mono text-xs">storage.objects + metadata</td>
          <td className="px-4 py-3 text-slate-secondary">Moved to Supabase Storage with bucket policies; metadata in public table</td>
          <td className="px-4 py-3 text-green-600 font-semibold">✓</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const TableServices = () => (
  <div className="overflow-x-auto rounded-lg border border-border my-8">
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-muted/50">
          <th className="text-left px-4 py-3 font-semibold text-brand-primary border-b border-border">Capability</th>
          <th className="text-left px-4 py-3 font-semibold text-brand-primary border-b border-border">Before (MongoDB Stack)</th>
          <th className="text-left px-4 py-3 font-semibold text-brand-primary border-b border-border">After (Supabase)</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-border">
          <td className="px-4 py-3 text-slate-secondary font-medium">Authentication</td>
          <td className="px-4 py-3 text-slate-secondary">Auth0 + custom JWT middleware + session store</td>
          <td className="px-4 py-3 text-slate-secondary">Supabase Auth (built-in)</td>
        </tr>
        <tr className="border-b border-border bg-muted/20">
          <td className="px-4 py-3 text-slate-secondary font-medium">File Storage</td>
          <td className="px-4 py-3 text-slate-secondary">AWS S3 + custom signed-URL service</td>
          <td className="px-4 py-3 text-slate-secondary">Supabase Storage (S3-compatible)</td>
        </tr>
        <tr className="border-b border-border">
          <td className="px-4 py-3 text-slate-secondary font-medium">Realtime</td>
          <td className="px-4 py-3 text-slate-secondary">Pusher + Redis pub/sub + custom WebSocket server + event handlers</td>
          <td className="px-4 py-3 text-slate-secondary">Supabase Realtime (PostgreSQL CDC)</td>
        </tr>
        <tr className="border-b border-border bg-muted/20">
          <td className="px-4 py-3 text-slate-secondary font-medium">REST APIs</td>
          <td className="px-4 py-3 text-slate-secondary">Express.js routes + Mongoose models + validation middleware + error handlers + rate limiter</td>
          <td className="px-4 py-3 text-slate-secondary">PostgREST (auto-generated)</td>
        </tr>
        <tr>
          <td className="px-4 py-3 text-slate-secondary font-medium">Serverless Functions</td>
          <td className="px-4 py-3 text-slate-secondary">AWS Lambda + API Gateway + CloudWatch</td>
          <td className="px-4 py-3 text-slate-secondary">Supabase Edge Functions (Deno)</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const FigureDashboard = () => (
  <figure className="my-12 rounded-xl border border-border overflow-hidden shadow-lg">
    <img
      src="/lovable-uploads/collabai-dashboard-preview.png"
      alt="CollabAI platform dashboard running on Supabase PostgreSQL infrastructure"
      className="w-full"
      loading="lazy"
    />
    <figcaption className="p-4 text-center text-sm text-muted-foreground border-t border-border bg-muted/30">
      The CollabAI dashboard — now powered by Supabase PostgreSQL infrastructure with Row-Level Security.
    </figcaption>
  </figure>
);

// ── Shortcode Registry ──────────────────────────────────────────

const SHORTCODE_REGISTRY: Record<string, Record<string, React.FC>> = {
  chart: {
    performance: ChartPerformance,
    consolidation: ChartConsolidation,
  },
  table: {
    validation: TableValidation,
    mapping: TableMapping,
    services: TableServices,
  },
  figure: {
    dashboard: FigureDashboard,
  },
};

/** Available shortcodes for the admin UI */
export const AVAILABLE_SHORTCODES = [
  { code: "[chart:performance]", label: "Performance Chart", description: "Before vs After bar chart with summary table" },
  { code: "[chart:consolidation]", label: "Service Consolidation Chart", description: "Horizontal bar chart showing service reduction" },
  { code: "[table:validation]", label: "Validation Results Table", description: "Migration record count validation" },
  { code: "[table:mapping]", label: "Data Mapping Table", description: "MongoDB → Supabase collection mapping" },
  { code: "[table:services]", label: "Services Comparison Table", description: "Before/after capability comparison" },
  { code: "[figure:dashboard]", label: "Dashboard Preview", description: "CollabAI dashboard screenshot with caption" },
];

// ── Shortcode Regex ─────────────────────────────────────────────

const SHORTCODE_REGEX = /\[(\w+):(\w+)\]/g;

// ── Renderer ────────────────────────────────────────────────────

interface BlogShortcodeRendererProps {
  content: string;
}

const PIE_COLORS = [
  "hsl(var(--primary))",
  "hsl(142, 70%, 45%)",
  "hsl(0, 70%, 55%)",
  "hsl(45, 90%, 50%)",
  "hsl(200, 70%, 50%)",
  "hsl(280, 60%, 55%)",
];

function pivotData(data: any[], groups: string[]) {
  const labelMap: Record<string, any> = {};
  for (const row of data) {
    if (!labelMap[row.label]) labelMap[row.label] = { label: row.label };
    labelMap[row.label][row.group || "value"] = row.value;
  }
  return Object.values(labelMap);
}

const DynamicChart = ({ chartType, data, title }: { chartType: string; data: any[]; title: string }) => {
  const groups = [...new Set(data.map((d: any) => d.group).filter(Boolean))];
  const hasGroups = groups.length > 1;
  const isHorizontal = chartType === "horizontal_bar";

  return (
    <div className="my-8">
      {title && <h4 className="text-lg font-semibold mb-4 text-foreground">{title}</h4>}
      <div className="bg-muted/30 rounded-xl p-6 border border-border">
        {chartType === "pie" ? (
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie data={data} dataKey="value" nameKey="label" cx="50%" cy="50%" outerRadius={120} label>
                {data.map((_: any, i: number) => (
                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        ) : chartType === "line" ? (
          <ResponsiveContainer width="100%" height={350}>
            {hasGroups ? (
              <LineChart data={pivotData(data, groups)}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="label" tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                <YAxis tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }} />
                <Legend />
                {groups.map((g, i) => (
                  <Line key={g} type="monotone" dataKey={g} stroke={PIE_COLORS[i % PIE_COLORS.length]} strokeWidth={2} />
                ))}
              </LineChart>
            ) : (
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="label" tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                <YAxis tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }} />
                <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} />
              </LineChart>
            )}
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={hasGroups ? pivotData(data, groups) : data} layout={isHorizontal ? "vertical" : "horizontal"}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              {isHorizontal ? (
                <>
                  <XAxis type="number" tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis dataKey="label" type="category" tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} width={100} />
                </>
              ) : (
                <>
                  <XAxis dataKey="label" tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                </>
              )}
              <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }} />
              <Legend />
              {hasGroups ? (
                groups.map((g, i) => (
                  <Bar key={g} dataKey={g} fill={PIE_COLORS[i % PIE_COLORS.length]} radius={[4, 4, 0, 0]} />
                ))
              ) : (
                <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              )}
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

const BlogShortcodeRenderer = ({ content }: BlogShortcodeRendererProps) => {
  const [dbCharts, setDbCharts] = useState<Record<string, { chart_type: string; data: any[]; title: string; config: any }>>({});
  const [loadedSlugs, setLoadedSlugs] = useState<Set<string>>(new Set());

  // Extract chart shortcode slugs that aren't in the hardcoded registry
  const dynamicChartSlugs = useMemo(() => {
    const matches = [...content.matchAll(new RegExp(SHORTCODE_REGEX))];
    return matches
      .filter(([, type, id]) => type === "chart" && !SHORTCODE_REGISTRY.chart?.[id])
      .map(([, , id]) => id);
  }, [content]);

  // Fetch dynamic charts from DB
  useEffect(() => {
    const slugsToFetch = dynamicChartSlugs.filter((s) => !loadedSlugs.has(s));
    if (slugsToFetch.length === 0) return;

    const fetchCharts = async () => {
      const { data } = await supabase
        .from("blog_charts")
        .select("slug, chart_type, data, title, config")
        .in("slug", slugsToFetch);

      if (data) {
        const chartMap: typeof dbCharts = {};
        for (const chart of data) {
          chartMap[chart.slug] = {
            chart_type: chart.chart_type,
            data: chart.data as any[],
            title: chart.title,
            config: chart.config,
          };
        }
        setDbCharts((prev) => ({ ...prev, ...chartMap }));
        setLoadedSlugs((prev) => {
          const next = new Set(prev);
          slugsToFetch.forEach((s) => next.add(s));
          return next;
        });
      }
    };
    fetchCharts();
  }, [dynamicChartSlugs]);

  const segments = useMemo(() => {
    const result: Array<
      | { type: "html"; html: string }
      | { type: "shortcode"; component: React.FC }
      | { type: "dynamic_chart"; slug: string }
    > = [];
    let lastIndex = 0;

    const matches = [...content.matchAll(new RegExp(SHORTCODE_REGEX))];

    for (const match of matches) {
      const [fullMatch, scType, scId] = match;
      const startIdx = match.index!;

      if (startIdx > lastIndex) {
        result.push({ type: "html", html: content.slice(lastIndex, startIdx) });
      }

      const Component = SHORTCODE_REGISTRY[scType]?.[scId];
      if (Component) {
        result.push({ type: "shortcode", component: Component });
      } else if (scType === "chart") {
        result.push({ type: "dynamic_chart", slug: scId });
      } else {
        result.push({ type: "html", html: fullMatch });
      }

      lastIndex = startIdx + fullMatch.length;
    }

    if (lastIndex < content.length) {
      result.push({ type: "html", html: content.slice(lastIndex) });
    }

    return result;
  }, [content]);

  return (
    <>
      {segments.map((seg, i) => {
        if (seg.type === "shortcode") {
          const Component = seg.component;
          return <Component key={i} />;
        }
        if (seg.type === "dynamic_chart") {
          const chart = dbCharts[seg.slug];
          if (chart) {
            return <DynamicChart key={i} chartType={chart.chart_type} data={chart.data} title={chart.title} />;
          }
          return null; // Still loading or not found
        }
        return (
          <div
            key={i}
            dangerouslySetInnerHTML={{ __html: sanitizeWithNewTabLinks(seg.html) }}
          />
        );
      })}
    </>
  );
};

export default BlogShortcodeRenderer;
