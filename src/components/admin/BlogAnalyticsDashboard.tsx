import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2, FileText, Eye, BarChart3, TrendingUp } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, Legend
} from "recharts";
import { format, subMonths, startOfMonth, parseISO } from "date-fns";

interface BlogPost {
  id: string;
  title: string;
  category: string | null;
  is_published: boolean | null;
  published_at: string | null;
  created_at: string;
  meta_title: string | null;
  meta_description: string | null;
  focus_keyword: string | null;
  excerpt: string | null;
  image_url: string | null;
  og_title: string | null;
  og_description: string | null;
  og_image_url: string | null;
  tags: string[] | null;
  slug: string;
}

const PIE_COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--accent))",
  "hsl(210, 70%, 55%)",
  "hsl(150, 60%, 45%)",
  "hsl(30, 80%, 55%)",
  "hsl(280, 60%, 55%)",
  "hsl(0, 65%, 55%)",
  "hsl(180, 50%, 45%)",
];


function computeSeoScore(post: BlogPost): number {
  const checks = [
    !!post.meta_title,
    !!(post.meta_description && post.meta_description.length >= 150 && post.meta_description.length <= 400),
    !!post.focus_keyword,
    !!post.excerpt,
    !!post.image_url,
    !!post.og_title,
    !!post.og_description,
    !!post.og_image_url,
    !!(post.tags && post.tags.length > 0),
    !!(post.slug && !post.slug.includes(" ")),
  ];
  return Math.round((checks.filter(Boolean).length / checks.length) * 100);
}

const BlogAnalyticsDashboard = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [wordCountMap, setWordCountMap] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      // Article bodies are never fetched here — they are multiple MB each.
      const [postsRes, wcRes] = await Promise.all([
        supabase
          .from("blog_posts")
          .select("id,title,category,is_published,published_at,created_at,meta_title,meta_description,focus_keyword,excerpt,image_url,og_title,og_description,og_image_url,tags,slug"),
        supabase.rpc("blog_post_word_counts"),
      ]);

      if (postsRes.error) {
        console.error("Failed to load blog analytics", postsRes.error);
        setError(postsRes.error.message);
      } else {
        setPosts((postsRes.data as unknown as BlogPost[]) || []);
      }

      if (wcRes.error) {
        console.error("Failed to load blog word counts", wcRes.error);
      } else {
        const map: Record<string, number> = {};
        ((wcRes.data as { id: string; word_count: number }[]) || []).forEach((r) => {
          map[r.id] = r.word_count ?? 0;
        });
        setWordCountMap(map);
      }

      setLoading(false);
    };
    load();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center text-destructive">
        Failed to load blog analytics: {error}
      </div>
    );
  }

  const getWordCount = (post: BlogPost) => wordCountMap[post.id] ?? 0;

  const published = posts.filter((p) => p.is_published);
  const drafts = posts.filter((p) => !p.is_published);
  const wordCounts = posts.map((p) => ({ post: p, wc: getWordCount(p) }));
  const avgWordCount = wordCounts.length ? Math.round(wordCounts.reduce((s, x) => s + x.wc, 0) / wordCounts.length) : 0;
  const seoScores = posts.map((p) => ({ post: p, score: computeSeoScore(p) }));
  const avgSeo = seoScores.length ? Math.round(seoScores.reduce((s, x) => s + x.score, 0) / seoScores.length) : 0;

  // Publishing frequency – last 12 months
  const now = new Date();
  const pubFreq = Array.from({ length: 12 }, (_, i) => {
    const month = subMonths(now, 11 - i);
    const key = format(startOfMonth(month), "yyyy-MM");
    const label = format(month, "MMM yy");
    const count = published.filter((p) => p.published_at && format(parseISO(p.published_at), "yyyy-MM") === key).length;
    return { label, count };
  });

  // Word count distribution
  const wcBuckets = [
    { label: "0-500", min: 0, max: 500 },
    { label: "500-1k", min: 500, max: 1000 },
    { label: "1k-2k", min: 1000, max: 2000 },
    { label: "2k+", min: 2000, max: Infinity },
  ];
  const wcDist = wcBuckets.map((b) => ({
    label: b.label,
    count: wordCounts.filter((x) => x.wc >= b.min && x.wc < b.max).length,
  }));

  // SEO score trends by month (average score of posts created that month)
  const seoTrend = Array.from({ length: 12 }, (_, i) => {
    const month = subMonths(now, 11 - i);
    const key = format(startOfMonth(month), "yyyy-MM");
    const label = format(month, "MMM yy");
    const monthPosts = seoScores.filter((x) => format(parseISO(x.post.created_at), "yyyy-MM") === key);
    const avg = monthPosts.length ? Math.round(monthPosts.reduce((s, x) => s + x.score, 0) / monthPosts.length) : null;
    return { label, score: avg };
  });

  // Category breakdown
  const catMap: Record<string, number> = {};
  posts.forEach((p) => {
    const cat = p.category || "Uncategorized";
    catMap[cat] = (catMap[cat] || 0) + 1;
  });
  const catData = Object.entries(catMap).map(([name, value]) => ({ name, value }));

  // Top posts by SEO score
  const topPosts = [...seoScores]
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
    .map((x) => ({
      title: x.post.title,
      category: x.post.category || "—",
      wordCount: getWordCount(x.post),
      publishedAt: x.post.published_at ? format(parseISO(x.post.published_at), "MMM d, yyyy") : "Draft",
      score: x.score,
    }));

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Posts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent><p className="text-2xl font-bold">{posts.length}</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Published / Draft</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent><p className="text-2xl font-bold">{published.length} / {drafts.length}</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg Word Count</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent><p className="text-2xl font-bold">{avgWordCount.toLocaleString()}</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg SEO Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent><p className="text-2xl font-bold">{avgSeo}%</p></CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle className="text-base">Publishing Frequency (Last 12 Months)</CardTitle></CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={pubFreq}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="label" fontSize={12} className="fill-muted-foreground" />
                <YAxis allowDecimals={false} fontSize={12} className="fill-muted-foreground" />
                <Tooltip />
                <Bar dataKey="count" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-base">Word Count Distribution</CardTitle></CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={wcDist}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="label" fontSize={12} className="fill-muted-foreground" />
                <YAxis allowDecimals={false} fontSize={12} className="fill-muted-foreground" />
                <Tooltip />
                <Bar dataKey="count" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle className="text-base">SEO Score Trend</CardTitle></CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={seoTrend}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="label" fontSize={12} className="fill-muted-foreground" />
                <YAxis domain={[0, 100]} fontSize={12} className="fill-muted-foreground" />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 3 }} connectNulls />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-base">Category Breakdown</CardTitle></CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={catData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`} fontSize={12}>
                  {catData.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top Posts Table */}
      <Card>
        <CardHeader><CardTitle className="text-base">Top Posts by SEO Score</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Words</TableHead>
                <TableHead>Published</TableHead>
                <TableHead className="text-right">SEO Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topPosts.map((p, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium max-w-[250px] truncate">{p.title}</TableCell>
                  <TableCell>{p.category}</TableCell>
                  <TableCell className="text-right">{p.wordCount.toLocaleString()}</TableCell>
                  <TableCell>{p.publishedAt}</TableCell>
                  <TableCell className="text-right font-semibold">{p.score}%</TableCell>
                </TableRow>
              ))}
              {topPosts.length === 0 && (
                <TableRow><TableCell colSpan={5} className="text-center text-muted-foreground py-8">No posts yet</TableCell></TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogAnalyticsDashboard;
