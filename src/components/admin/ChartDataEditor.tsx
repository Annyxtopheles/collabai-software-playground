import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2, Save, X, BarChart3, Eye } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

interface ChartDataPoint {
  label: string;
  value: number;
  group?: string;
}

interface BlogChart {
  id: string;
  slug: string;
  title: string;
  chart_type: string;
  data: unknown[];
  config: unknown;
  created_at: string;
}

interface DataRow {
  label: string;
  value: string;
  group: string;
}

const CHART_TYPES = [
  { value: "bar", label: "Bar Chart" },
  { value: "horizontal_bar", label: "Horizontal Bar Chart" },
  { value: "line", label: "Line Chart" },
  { value: "pie", label: "Pie Chart" },
];

const PIE_COLORS = [
  "hsl(var(--primary))",
  "hsl(142, 70%, 45%)",
  "hsl(0, 70%, 55%)",
  "hsl(45, 90%, 50%)",
  "hsl(200, 70%, 50%)",
  "hsl(280, 60%, 55%)",
];

const generateSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

const ChartPreview = ({ chartType, data }: { chartType: string; data: ChartDataPoint[] }) => {
  if (!data || data.length === 0) {
    return <div className="text-center text-muted-foreground py-8">Add data rows to see preview</div>;
  }

  // Detect grouped data
  const groups = [...new Set(data.map((d) => d.group).filter(Boolean))];
  const hasGroups = groups.length > 1;

  if (chartType === "pie") {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="label" cx="50%" cy="50%" outerRadius={100} label>
            {data.map((_, i) => (
              <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  if (chartType === "line") {
    if (hasGroups) {
      const pivoted = pivotData(data, groups);
      return (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={pivoted}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="label" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            {groups.map((g, i) => (
              <Line key={g} type="monotone" dataKey={g} stroke={PIE_COLORS[i % PIE_COLORS.length]} strokeWidth={2} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      );
    }
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="label" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  // Bar / horizontal_bar
  const isHorizontal = chartType === "horizontal_bar";

  if (hasGroups) {
    const pivoted = pivotData(data, groups);
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={pivoted} layout={isHorizontal ? "vertical" : "horizontal"}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          {isHorizontal ? (
            <>
              <XAxis type="number" tick={{ fontSize: 12 }} />
              <YAxis dataKey="label" type="category" tick={{ fontSize: 12 }} width={100} />
            </>
          ) : (
            <>
              <XAxis dataKey="label" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
            </>
          )}
          <Tooltip />
          <Legend />
          {groups.map((g, i) => (
            <Bar key={g} dataKey={g} fill={PIE_COLORS[i % PIE_COLORS.length]} radius={[4, 4, 0, 0]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} layout={isHorizontal ? "vertical" : "horizontal"}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        {isHorizontal ? (
          <>
            <XAxis type="number" tick={{ fontSize: 12 }} />
            <YAxis dataKey="label" type="category" tick={{ fontSize: 12 }} width={100} />
          </>
        ) : (
          <>
            <XAxis dataKey="label" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
          </>
        )}
        <Tooltip />
        <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

function pivotData(data: ChartDataPoint[], groups: string[]) {
  const labelMap: Record<string, Record<string, string | number>> = {};
  for (const row of data) {
    if (!labelMap[row.label]) labelMap[row.label] = { label: row.label };
    labelMap[row.label][row.group || "value"] = row.value;
  }
  return Object.values(labelMap);
}

const ChartDataEditor = () => {
  const [charts, setCharts] = useState<BlogChart[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [slug, setSlug] = useState("");
  const [title, setTitle] = useState("");
  const [chartType, setChartType] = useState("bar");
  const [rows, setRows] = useState<DataRow[]>([{ label: "", value: "", group: "" }]);
  const [slugManual, setSlugManual] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchCharts();
  }, []);

  const fetchCharts = async () => {
    const { data, error } = await supabase
      .from("blog_charts")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) setCharts((data as unknown as BlogChart[]) || []);
  };

  const resetForm = () => {
    setSlug("");
    setTitle("");
    setChartType("bar");
    setRows([{ label: "", value: "", group: "" }]);
    setSlugManual(false);
    setEditingId(null);
    setIsEditing(false);
    setShowPreview(false);
  };

  const startEdit = (chart: BlogChart) => {
    setEditingId(chart.id);
    setTitle(chart.title);
    setSlug(chart.slug);
    setChartType(chart.chart_type);
    setSlugManual(true);
    const dataRows: DataRow[] = (chart.data || []).map((d: ChartDataPoint) => ({
      label: String(d.label || ""),
      value: String(d.value || ""),
      group: String(d.group || ""),
    }));
    setRows(dataRows.length > 0 ? dataRows : [{ label: "", value: "", group: "" }]);
    setIsEditing(true);
  };

  const addRow = () => setRows([...rows, { label: "", value: "", group: "" }]);

  const removeRow = (index: number) => {
    if (rows.length <= 1) return;
    setRows(rows.filter((_, i) => i !== index));
  };

  const updateRow = (index: number, field: keyof DataRow, val: string) => {
    const updated = [...rows];
    updated[index] = { ...updated[index], [field]: val };
    setRows(updated);
  };

  const getChartData = () =>
    rows
      .filter((r) => r.label.trim() && r.value.trim())
      .map((r) => ({
        label: r.label.trim(),
        value: parseFloat(r.value) || 0,
        ...(r.group.trim() ? { group: r.group.trim() } : {}),
      }));

  const handleSave = async () => {
    if (!title.trim() || !slug.trim()) {
      toast({ title: "Error", description: "Title and slug are required", variant: "destructive" });
      return;
    }
    const chartData = getChartData();
    if (chartData.length === 0) {
      toast({ title: "Error", description: "Add at least one data row", variant: "destructive" });
      return;
    }

    const payload = {
      slug: slug.trim(),
      title: title.trim(),
      chart_type: chartType,
      data: chartData,
      config: {},
    };

    if (editingId) {
      const { error } = await supabase.from("blog_charts").update(payload).eq("id", editingId);
      if (error) {
        toast({ title: "Error", description: error.message, variant: "destructive" });
        return;
      }
      toast({ title: "Chart updated" });
    } else {
      const { error } = await supabase.from("blog_charts").insert(payload);
      if (error) {
        toast({ title: "Error", description: error.message, variant: "destructive" });
        return;
      }
      toast({ title: "Chart created" });
    }

    resetForm();
    fetchCharts();
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    const { error } = await supabase.from("blog_charts").delete().eq("id", deleteId);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Chart deleted" });
      fetchCharts();
    }
    setDeleteId(null);
  };

  return (
    <div className="space-y-6">
      {/* Chart list */}
      {!isEditing && (
        <>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Dynamic Charts</h3>
            <Button onClick={() => setIsEditing(true)} className="gap-2">
              <Plus className="w-4 h-4" /> New Chart
            </Button>
          </div>

          {charts.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center text-muted-foreground">
                <BarChart3 className="w-10 h-10 mx-auto mb-3 opacity-40" />
                <p>No charts yet. Create one and use <code className="text-xs bg-muted px-1 py-0.5 rounded">[chart:your-slug]</code> in any blog post.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-3">
              {charts.map((chart) => (
                <Card key={chart.id}>
                  <CardContent className="flex items-center justify-between py-4">
                    <div>
                      <div className="font-medium">{chart.title}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-2">
                        <code className="text-xs bg-muted px-1.5 py-0.5 rounded">[chart:{chart.slug}]</code>
                        <Badge variant="outline" className="text-xs">
                          {CHART_TYPES.find((t) => t.value === chart.chart_type)?.label || chart.chart_type}
                        </Badge>
                        <span>{chart.data?.length || 0} data points</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" onClick={() => startEdit(chart)}>
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => setDeleteId(chart.id)} className="text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </>
      )}

      {/* Edit / Create form */}
      {isEditing && (
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>{editingId ? "Edit Chart" : "Create Chart"}</span>
              <Button variant="ghost" size="sm" onClick={resetForm}>
                <X className="w-4 h-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Title *</Label>
                <Input
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    if (!slugManual) setSlug(generateSlug(e.target.value));
                  }}
                  placeholder="Q4 Performance Metrics"
                />
              </div>
              <div className="space-y-2">
                <Label>Slug * <span className="text-xs text-muted-foreground">(used in shortcode)</span></Label>
                <Input
                  value={slug}
                  onChange={(e) => {
                    setSlug(e.target.value);
                    setSlugManual(true);
                  }}
                  placeholder="q4-performance-metrics"
                />
                {slug && (
                  <p className="text-xs text-muted-foreground">
                    Shortcode: <code className="bg-muted px-1 py-0.5 rounded">[chart:{slug}]</code>
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Chart Type</Label>
              <Select value={chartType} onValueChange={setChartType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CHART_TYPES.map((t) => (
                    <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label>Data Points</Label>
                <Button type="button" variant="outline" size="sm" onClick={addRow} className="gap-1">
                  <Plus className="w-3 h-3" /> Add Row
                </Button>
              </div>
              <div className="border rounded-md overflow-hidden">
                <div className="grid grid-cols-[1fr_100px_120px_40px] gap-0 bg-muted/50 px-3 py-2 text-xs font-medium text-muted-foreground border-b">
                  <span>Label</span>
                  <span>Value</span>
                  <span>Group <span className="text-[10px]">(optional)</span></span>
                  <span></span>
                </div>
                {rows.map((row, i) => (
                  <div key={i} className="grid grid-cols-[1fr_100px_120px_40px] gap-2 px-3 py-2 border-b last:border-b-0 items-center">
                    <Input
                      value={row.label}
                      onChange={(e) => updateRow(i, "label", e.target.value)}
                      placeholder="Response Time"
                      className="h-8 text-sm"
                    />
                    <Input
                      value={row.value}
                      onChange={(e) => updateRow(i, "value", e.target.value)}
                      placeholder="450"
                      type="number"
                      className="h-8 text-sm"
                    />
                    <Input
                      value={row.group}
                      onChange={(e) => updateRow(i, "group", e.target.value)}
                      placeholder="Before"
                      className="h-8 text-sm"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeRow(i)}
                      disabled={rows.length <= 1}
                      className="h-8 w-8 p-0 text-destructive"
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                Use the <strong>Group</strong> column for grouped charts (e.g., "Before" / "After"). Leave empty for single-series charts.
              </p>
            </div>

            {/* Preview */}
            <div className="space-y-2">
              <Button type="button" variant="outline" size="sm" onClick={() => setShowPreview(!showPreview)} className="gap-2">
                <Eye className="w-3.5 h-3.5" /> {showPreview ? "Hide Preview" : "Show Preview"}
              </Button>
              {showPreview && (
                <div className="bg-muted/30 rounded-xl p-4 border border-border">
                  <ChartPreview chartType={chartType} data={getChartData()} />
                </div>
              )}
            </div>

            <div className="flex gap-2 pt-2">
              <Button onClick={handleSave} className="gap-2">
                <Save className="w-4 h-4" /> {editingId ? "Update Chart" : "Save Chart"}
              </Button>
              <Button variant="outline" onClick={resetForm}>Cancel</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Delete confirmation */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete chart?</AlertDialogTitle>
            <AlertDialogDescription>
              Any blog posts using this chart's shortcode will show the raw shortcode text instead.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ChartDataEditor;
