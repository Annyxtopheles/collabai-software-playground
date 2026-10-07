import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Upload, Save, Search, Image as ImageIcon } from "lucide-react";
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
} from "@/components/ui/dialog";

type SiteImage = {
  id: string;
  image_key: string;
  label: string;
  image_url: string;
  group: string;
  page: string | null;
};

const PAGE_OPTIONS = [
  { value: "all", label: "All Pages" },
  { value: "homepage", label: "Homepage" },
  { value: "banking", label: "Banking" },
  { value: "healthcare", label: "Healthcare" },
  { value: "legal", label: "Legal" },
  { value: "agency", label: "Agency" },
  { value: "nonprofit", label: "NonProfit" },
  { value: "accounting", label: "Accounting" },
];

const SiteImagesManager = () => {
  const [siteImages, setSiteImages] = useState<SiteImage[]>([]);
  const [filterPage, setFilterPage] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [editingImage, setEditingImage] = useState<SiteImage | null>(null);
  const [newUrl, setNewUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchSiteImages();
  }, []);

  const fetchSiteImages = async () => {
    const { data, error } = await supabase
      .from("site_images")
      .select("*")
      .order("page", { ascending: true });

    if (error) {
      toast({ title: "Error", description: "Failed to load site images", variant: "destructive" });
      return;
    }

    setSiteImages(
      (data || []).map((d: Record<string, unknown>) => ({
        id: String(d.id),
        image_key: String(d.image_key),
        label: String(d.label),
        image_url: String(d.image_url),
        group: String(d.group || "landing-page"),
        page: String(d.page),
      }))
    );
  };

  const handleUpdateImage = async () => {
    if (!editingImage || !newUrl.trim()) return;

    const { error } = await supabase
      .from("site_images")
      .update({ image_url: newUrl.trim() })
      .eq("id", editingImage.id);

    if (error) {
      toast({ title: "Error", description: "Failed to update image", variant: "destructive" });
      return;
    }

    toast({ title: "Updated", description: `${editingImage.label} has been updated` });
    setEditingImage(null);
    setNewUrl("");
    fetchSiteImages();
  };

  const handleUploadAndReplace = async (file: File) => {
    if (!editingImage) return;
    setUploading(true);

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `site-images/${editingImage.image_key}-${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("media-files")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const {
        data: { publicUrl },
      } = supabase.storage.from("media-files").getPublicUrl(fileName);

      const { error: dbError } = await supabase
        .from("site_images")
        .update({ image_url: publicUrl })
        .eq("id", editingImage.id);

      if (dbError) throw dbError;

      toast({ title: "Uploaded", description: `${editingImage.label} has been replaced` });
      setEditingImage(null);
      fetchSiteImages();
    } catch (error) {
      toast({ title: "Error", description: "Upload failed", variant: "destructive" });
    } finally {
      setUploading(false);
    }
  };

  const filtered = siteImages.filter((img) => {
    const matchesPage = filterPage === "all" || img.page === filterPage;
    const matchesSearch =
      !searchQuery ||
      img.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.image_key.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPage && matchesSearch;
  });

  // Group by page
  const grouped = filtered.reduce<Record<string, SiteImage[]>>((acc, img) => {
    const page = img.page || "other";
    if (!acc[page]) acc[page] = [];
    acc[page].push(img);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Site Images</CardTitle>
          <CardDescription>
            Manage images used across your website pages. Upload replacements or change URLs.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search images..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterPage} onValueChange={setFilterPage}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by page" />
              </SelectTrigger>
              <SelectContent>
                {PAGE_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {Object.entries(grouped).map(([page, images]) => (
            <div key={page} className="mb-8">
              <h3 className="text-lg font-semibold capitalize mb-4 text-brand-primary">
                {page} Page
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((img) => (
                  <Card
                    key={img.id}
                    className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => {
                      setEditingImage(img);
                      setNewUrl(img.image_url);
                    }}
                  >
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      {img.image_url.startsWith('/src/') || img.image_url.startsWith('src/') || img.image_url.startsWith('/assets/') ? (
                        <div className="flex flex-col items-center justify-center text-muted-foreground p-4 text-center">
                          <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
                          <p className="text-xs font-medium">Local asset</p>
                          <p className="text-[10px] mt-1 opacity-70 truncate max-w-full">{img.image_url}</p>
                        </div>
                      ) : (
                        <img
                          src={img.image_url}
                          alt={img.label}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                          }}
                        />
                      )}
                    </div>
                    <CardContent className="p-3">
                      <p className="text-sm font-medium truncate">{img.label}</p>
                      <p className="text-xs text-muted-foreground truncate">{img.image_key}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <ImageIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No site images found.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      <Dialog open={!!editingImage} onOpenChange={(open) => !open && setEditingImage(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Site Image: {editingImage?.label}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {/* Current preview */}
            <div className="aspect-video bg-muted rounded-lg overflow-hidden flex items-center justify-center">
              {editingImage?.image_url && (editingImage.image_url.startsWith('/src/') || editingImage.image_url.startsWith('src/') || editingImage.image_url.startsWith('/assets/')) ? (
                <div className="flex flex-col items-center justify-center text-muted-foreground p-4 text-center">
                  <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
                  <p className="text-sm font-medium">Local asset — upload a replacement</p>
                  <p className="text-xs mt-1 opacity-70 break-all">{editingImage.image_url}</p>
                </div>
              ) : (
                <img
                  src={editingImage?.image_url}
                  alt={editingImage?.label}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                  }}
                />
              )}
            </div>

            {/* URL input */}
            <div className="space-y-2">
              <Label>Image URL</Label>
              <Input
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
                placeholder="Enter new image URL"
              />
            </div>

            {/* Upload replacement */}
            <div className="space-y-2">
              <Label>Or upload a replacement</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleUploadAndReplace(file);
                }}
                disabled={uploading}
              />
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setEditingImage(null)}>
                Cancel
              </Button>
              <Button onClick={handleUpdateImage} disabled={uploading}>
                <Save className="w-4 h-4 mr-2" />
                Save URL
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SiteImagesManager;
