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

interface Whitepaper {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  file_url: string | null;
  cover_image_url: string | null;
  category: string | null;
  is_published: boolean;
  download_count: number;
}

const WhitepapersManager = () => {
  const [whitepapers, setWhitepapers] = useState<Whitepaper[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    file_url: "",
    cover_image_url: "",
    category: "",
    is_published: false,
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchWhitepapers();
  }, []);

  const fetchWhitepapers = async () => {
    const { data, error } = await supabase
      .from('whitepapers')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch whitepapers",
        variant: "destructive",
      });
    } else {
      setWhitepapers(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      const { error } = await supabase
        .from('whitepapers')
        .update(formData)
        .eq('id', editingId);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to update whitepaper",
          variant: "destructive",
        });
      } else {
        toast({ title: "Success", description: "Whitepaper updated" });
      }
    } else {
      const { error } = await supabase
        .from('whitepapers')
        .insert([formData]);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to create whitepaper",
          variant: "destructive",
        });
      } else {
        toast({ title: "Success", description: "Whitepaper created" });
      }
    }

    resetForm();
    fetchWhitepapers();
  };

  const handleEdit = (whitepaper: Whitepaper) => {
    setEditingId(whitepaper.id);
    setFormData({
      title: whitepaper.title,
      slug: whitepaper.slug,
      description: whitepaper.description || "",
      file_url: whitepaper.file_url || "",
      cover_image_url: whitepaper.cover_image_url || "",
      category: whitepaper.category || "",
      is_published: whitepaper.is_published,
    });
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this whitepaper?')) return;

    const { error } = await supabase
      .from('whitepapers')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete whitepaper",
        variant: "destructive",
      });
    } else {
      toast({ title: "Success", description: "Whitepaper deleted" });
      fetchWhitepapers();
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      description: "",
      file_url: "",
      cover_image_url: "",
      category: "",
      is_published: false,
    });
    setEditingId(null);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Whitepapers</h2>
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
            <CardTitle>{editingId ? 'Edit' : 'Add'} Whitepaper</CardTitle>
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
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="file_url">File URL</Label>
                  <Input
                    id="file_url"
                    type="url"
                    value={formData.file_url}
                    onChange={(e) => setFormData({ ...formData, file_url: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="cover_image_url">Cover Image URL</Label>
                <Input
                  id="cover_image_url"
                  type="url"
                  value={formData.cover_image_url}
                  onChange={(e) => setFormData({ ...formData, cover_image_url: e.target.value })}
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
        {whitepapers.map((whitepaper) => (
          <Card key={whitepaper.id}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold">{whitepaper.title}</h3>
                    {whitepaper.is_published && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Published</span>
                    )}
                  </div>
                  {whitepaper.category && <p className="text-sm text-slate-secondary">{whitepaper.category}</p>}
                  {whitepaper.description && <p className="mt-2 text-sm">{whitepaper.description}</p>}
                  <p className="text-sm text-slate-secondary mt-2">Downloads: {whitepaper.download_count}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(whitepaper)}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(whitepaper.id)}>
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

export default WhitepapersManager;
