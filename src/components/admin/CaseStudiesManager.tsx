import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2, Check, X } from "lucide-react";
import { Switch } from "@/components/ui/switch";

interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  company: string;
  industry: string | null;
  challenge: string | null;
  solution: string | null;
  results: string | null;
  image_url: string | null;
  is_published: boolean;
}

const CaseStudiesManager = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    company: "",
    industry: "",
    challenge: "",
    solution: "",
    results: "",
    image_url: "",
    is_published: false,
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch case studies",
        variant: "destructive",
      });
    } else {
      setCaseStudies(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      const { error } = await supabase
        .from('case_studies')
        .update(formData)
        .eq('id', editingId);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to update case study",
          variant: "destructive",
        });
      } else {
        toast({ title: "Success", description: "Case study updated" });
      }
    } else {
      const { error } = await supabase
        .from('case_studies')
        .insert([formData]);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to create case study",
          variant: "destructive",
        });
      } else {
        toast({ title: "Success", description: "Case study created" });
      }
    }

    resetForm();
    fetchCaseStudies();
  };

  const handleEdit = (caseStudy: CaseStudy) => {
    setEditingId(caseStudy.id);
    setFormData({
      title: caseStudy.title,
      slug: caseStudy.slug,
      company: caseStudy.company,
      industry: caseStudy.industry || "",
      challenge: caseStudy.challenge || "",
      solution: caseStudy.solution || "",
      results: caseStudy.results || "",
      image_url: caseStudy.image_url || "",
      is_published: caseStudy.is_published,
    });
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this case study?')) return;

    const { error } = await supabase
      .from('case_studies')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete case study",
        variant: "destructive",
      });
    } else {
      toast({ title: "Success", description: "Case study deleted" });
      fetchCaseStudies();
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      company: "",
      industry: "",
      challenge: "",
      solution: "",
      results: "",
      image_url: "",
      is_published: false,
    });
    setEditingId(null);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Case Studies</h2>
        {!isEditing && (
          <Button onClick={() => setIsEditing(true)} className="gap-2">
            <Plus className="w-4 h-4" />
            Add New
          </Button>
        )}
      </div>

      {isEditing && (
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? 'Edit' : 'Add'} Case Study</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="slug">Slug *</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company *</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="industry">Industry</Label>
                  <Input
                    id="industry"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="challenge">Challenge</Label>
                <Textarea
                  id="challenge"
                  rows={3}
                  value={formData.challenge}
                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="solution">Solution</Label>
                <Textarea
                  id="solution"
                  rows={3}
                  value={formData.solution}
                  onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="results">Results</Label>
                <Textarea
                  id="results"
                  rows={3}
                  value={formData.results}
                  onChange={(e) => setFormData({ ...formData, results: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="image_url">Image URL</Label>
                <Input
                  id="image_url"
                  type="url"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="is_published"
                  checked={formData.is_published}
                  onCheckedChange={(checked) => setFormData({ ...formData, is_published: checked })}
                />
                <Label htmlFor="is_published">Published</Label>
              </div>
              <div className="flex gap-2">
                <Button type="submit" className="gap-2">
                  <Check className="w-4 h-4" />
                  {editingId ? 'Update' : 'Create'}
                </Button>
                <Button type="button" variant="outline" onClick={resetForm} className="gap-2">
                  <X className="w-4 h-4" />
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {caseStudies.map((caseStudy) => (
          <Card key={caseStudy.id}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold">{caseStudy.title}</h3>
                    {caseStudy.is_published && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Published</span>
                    )}
                  </div>
                  <p className="text-sm text-slate-secondary">{caseStudy.company}</p>
                  {caseStudy.industry && <p className="text-sm text-slate-secondary">{caseStudy.industry}</p>}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(caseStudy)}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(caseStudy.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesManager;
