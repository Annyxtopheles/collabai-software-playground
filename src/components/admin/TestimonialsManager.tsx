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

interface Testimonial {
  id: string;
  name: string;
  role: string | null;
  company: string | null;
  content: string;
  avatar_url: string | null;
  rating: number | null;
  is_published: boolean;
  created_at: string;
}

const TestimonialsManager = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    content: "",
    avatar_url: "",
    rating: 5,
    is_published: false,
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch testimonials",
        variant: "destructive",
      });
    } else {
      setTestimonials(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      const { error } = await supabase
        .from('testimonials')
        .update(formData)
        .eq('id', editingId);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to update testimonial",
          variant: "destructive",
        });
      } else {
        toast({ title: "Success", description: "Testimonial updated" });
      }
    } else {
      const { error } = await supabase
        .from('testimonials')
        .insert([formData]);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to create testimonial",
          variant: "destructive",
        });
      } else {
        toast({ title: "Success", description: "Testimonial created" });
      }
    }

    resetForm();
    fetchTestimonials();
  };

  const handleEdit = (testimonial: Testimonial) => {
    setEditingId(testimonial.id);
    setFormData({
      name: testimonial.name,
      role: testimonial.role || "",
      company: testimonial.company || "",
      content: testimonial.content,
      avatar_url: testimonial.avatar_url || "",
      rating: testimonial.rating || 5,
      is_published: testimonial.is_published,
    });
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;

    const { error } = await supabase
      .from('testimonials')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete testimonial",
        variant: "destructive",
      });
    } else {
      toast({ title: "Success", description: "Testimonial deleted" });
      fetchTestimonials();
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      role: "",
      company: "",
      content: "",
      avatar_url: "",
      rating: 5,
      is_published: false,
    });
    setEditingId(null);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Testimonials</h2>
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
            <CardTitle>{editingId ? 'Edit' : 'Add'} Testimonial</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="role">Role</Label>
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="rating">Rating (1-5)</Label>
                  <Input
                    id="rating"
                    type="number"
                    min="1"
                    max="5"
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="content">Content *</Label>
                <Textarea
                  id="content"
                  rows={4}
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="avatar_url">Avatar URL</Label>
                <Input
                  id="avatar_url"
                  type="url"
                  value={formData.avatar_url}
                  onChange={(e) => setFormData({ ...formData, avatar_url: e.target.value })}
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
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    {testimonial.is_published && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Published</span>
                    )}
                  </div>
                  {testimonial.role && <p className="text-sm text-slate-secondary">{testimonial.role}</p>}
                  {testimonial.company && <p className="text-sm text-slate-secondary">{testimonial.company}</p>}
                  <p className="mt-2">{testimonial.content}</p>
                  {testimonial.rating && (
                    <p className="mt-2 text-sm">Rating: {'⭐'.repeat(testimonial.rating)}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(testimonial)}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(testimonial.id)}>
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

export default TestimonialsManager;
