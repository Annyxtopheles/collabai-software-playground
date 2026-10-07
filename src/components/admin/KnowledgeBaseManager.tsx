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

interface KnowledgeBaseArticle {
  id: string;
  title: string;
  slug: string;
  content: string;
  category: string | null;
  is_published: boolean;
  view_count: number;
}

const KnowledgeBaseManager = () => {
  const [articles, setArticles] = useState<KnowledgeBaseArticle[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    category: "",
    is_published: false,
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const { data, error } = await supabase
      .from('knowledge_base')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch articles",
        variant: "destructive",
      });
    } else {
      setArticles(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      const { error } = await supabase
        .from('knowledge_base')
        .update(formData)
        .eq('id', editingId);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to update article",
          variant: "destructive",
        });
      } else {
        toast({ title: "Success", description: "Article updated" });
      }
    } else {
      const { error } = await supabase
        .from('knowledge_base')
        .insert([formData]);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to create article",
          variant: "destructive",
        });
      } else {
        toast({ title: "Success", description: "Article created" });
      }
    }

    resetForm();
    fetchArticles();
  };

  const handleEdit = (article: KnowledgeBaseArticle) => {
    setEditingId(article.id);
    setFormData({
      title: article.title,
      slug: article.slug,
      content: article.content,
      category: article.category || "",
      is_published: article.is_published,
    });
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this article?')) return;

    const { error } = await supabase
      .from('knowledge_base')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete article",
        variant: "destructive",
      });
    } else {
      toast({ title: "Success", description: "Article deleted" });
      fetchArticles();
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      content: "",
      category: "",
      is_published: false,
    });
    setEditingId(null);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Knowledge Base</h2>
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
            <CardTitle>{editingId ? 'Edit' : 'Add'} Article</CardTitle>
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
                <div className="md:col-span-2">
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="content">Content *</Label>
                <Textarea
                  id="content"
                  rows={8}
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  required
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
        {articles.map((article) => (
          <Card key={article.id}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold">{article.title}</h3>
                    {article.is_published && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Published</span>
                    )}
                  </div>
                  {article.category && <p className="text-sm text-slate-secondary">{article.category}</p>}
                  <p className="text-sm text-slate-secondary mt-2">Views: {article.view_count}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(article)}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(article.id)}>
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

export default KnowledgeBaseManager;
