import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, Search, Grid, List, Trash2, Copy, FileEdit, CheckSquare, Wand2, ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  DialogDescription,
  DialogHeader,
  DialogTitle,
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
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { compressImage, generateVariants, formatFileSize, slugifyFileName } from "@/lib/imageUtils";

const MEDIA_GROUPS = [
  { value: "uncategorized", label: "Uncategorized" },
  { value: "blog-images", label: "Blog Images" },
  { value: "blog-banners", label: "Blog Banners" },
  { value: "case-study-images", label: "Case Study Images" },
  { value: "whitepaper-covers", label: "Whitepaper Covers" },
  { value: "client-logos", label: "Client Logos" },
  { value: "integration-logos", label: "Integration Logos" },
  { value: "landing-page", label: "Landing Page" },
  { value: "industry-banking", label: "Banking" },
  { value: "industry-healthcare", label: "Healthcare" },
  { value: "industry-accounting", label: "Accounting" },
  { value: "industry-legal", label: "Legal" },
  { value: "industry-agency", label: "Agency" },
  { value: "industry-nonprofit", label: "NonProfit" },
  { value: "security", label: "Security" },
  { value: "icons", label: "Icons" },
];

type MediaFile = {
  id: string;
  name: string;
  url: string;
  contentType: string;
  uploadedAt: string;
  group: string;
  alt_text: string;
  title_text: string;
  file_size: number | null;
};

const MediaManager = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<string>("all");
  const [filterGroup, setFilterGroup] = useState<string>("all");
  const [uploadGroup, setUploadGroup] = useState<string>("uncategorized");
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [renameDialogOpen, setRenameDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [previewDialogOpen, setPreviewDialogOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<MediaFile | null>(null);
  const [newFileName, setNewFileName] = useState("");
  const [fileAltText, setFileAltText] = useState("");
  const [fileTitleText, setFileTitleText] = useState("");
  const [enableWebP, setEnableWebP] = useState(false);
  const [uploadStats, setUploadStats] = useState<{ original: number; compressed: number } | null>(null);
  const [bulkMode, setBulkMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [bulkEditDialogOpen, setBulkEditDialogOpen] = useState(false);
  const [bulkAltTexts, setBulkAltTexts] = useState<Record<string, string>>({});
  const [postUsage, setPostUsage] = useState<{ id: string; title: string; slug: string }[]>([]);
  const [loadingUsage, setLoadingUsage] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMediaFiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMediaFiles = async () => {
    try {
      const { data, error } = await supabase
        .from("media_files")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      const files: MediaFile[] = data.map((file: Record<string, unknown>) => ({
        id: String(file.id),
        name: String(file.name),
        url: String(file.file_url),
        contentType: String(file.content_type),
        uploadedAt: String(file.created_at),
        group: String(file.group || "uncategorized"),
        alt_text: String(file.alt_text || ""),
        title_text: String(file.title_text || ""),
        file_size: Number(file.file_size),
      }));

      setMediaFiles(files);
    } catch (error) {
      console.error("Error fetching media files:", error);
      toast({
        title: "Error",
        description: "Failed to load media files",
        variant: "destructive",
      });
    }
  };

  const uploadFiles = async (files: FileList) => {
    setUploading(true);
    let totalOriginal = 0;
    let totalCompressed = 0;
    
    try {
      for (const file of Array.from(files)) {
        const isImage = file.type.startsWith("image/");
        let uploadBlob: Blob = file;
        const fileExt = enableWebP && isImage ? "webp" : file.name.split('.').pop() || "bin";
        const baseName = `${Math.random().toString(36).substring(2)}-${Date.now()}`;
        const uploadName = `${baseName}.${fileExt}`;
        const filePath = `media/${uploadName}`;

        if (isImage) {
          try {
            const format = enableWebP ? "webp" : (fileExt === "png" ? "png" : "jpeg") as "jpeg" | "webp" | "png";
            const variants = await generateVariants(file, 0.8, format);
            uploadBlob = variants.original;
            totalOriginal += file.size;
            totalCompressed += variants.original.size;

            // Upload thumbnail variant
            const thumbPath = `media/${baseName}-thumb.${fileExt}`;
            await supabase.storage.from("media-files").upload(thumbPath, variants.thumbnail);

            // Upload medium variant
            const medPath = `media/${baseName}-medium.${fileExt}`;
            await supabase.storage.from("media-files").upload(medPath, variants.medium);
          } catch (compressError) {
            console.warn("Compression failed, uploading original:", compressError);
            uploadBlob = file;
            totalOriginal += file.size;
            totalCompressed += file.size;
          }
        }

        // Upload original/compressed
        const { error: uploadError } = await supabase.storage
          .from("media-files")
          .upload(filePath, uploadBlob);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from("media-files")
          .getPublicUrl(filePath);

        const { error: dbError } = await supabase
          .from("media_files")
          .insert({
            name: file.name,
            file_path: filePath,
            file_url: publicUrl,
            content_type: "media",
            mime_type: enableWebP && isImage ? "image/webp" : file.type,
            file_size: uploadBlob.size,
            group: uploadGroup,
            alt_text: "",
            title_text: "",
          });

        if (dbError) throw dbError;
      }

      if (totalOriginal > 0 && totalOriginal !== totalCompressed) {
        setUploadStats({ original: totalOriginal, compressed: totalCompressed });
        toast({
          title: "Upload Complete",
          description: `${files.length} file(s) uploaded. ${formatFileSize(totalOriginal)} → ${formatFileSize(totalCompressed)} (${Math.round((1 - totalCompressed / totalOriginal) * 100)}% saved)`,
        });
      } else {
        toast({
          title: "Upload Complete",
          description: `Successfully uploaded ${files.length} file(s)`,
        });
      }

      fetchMediaFiles();
    } catch (error) {
      console.error("Upload error:", error);
      toast({
        title: "Upload Failed",
        description: "Failed to upload files. Please try again.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    await uploadFiles(files);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      await uploadFiles(files);
    }
  };

  const handleRenameFile = async () => {
    if (!selectedFile || !newFileName.trim()) return;

    try {
      const { error } = await supabase
        .from("media_files")
        .update({ name: newFileName.trim() })
        .eq("id", selectedFile.id);

      if (error) throw error;

      toast({
        title: "File Renamed",
        description: "Media file has been renamed successfully",
      });

      setRenameDialogOpen(false);
      setSelectedFile(null);
      setNewFileName("");
      fetchMediaFiles();
    } catch (error) {
      console.error("Rename error:", error);
      toast({
        title: "Rename Failed",
        description: "Failed to rename file",
        variant: "destructive",
      });
    }
  };

  const openRenameDialog = (file: MediaFile) => {
    setSelectedFile(file);
    setNewFileName(file.name);
    setRenameDialogOpen(true);
  };

  const openDeleteDialog = (file: MediaFile) => {
    setSelectedFile(file);
    setDeleteDialogOpen(true);
  };

  const fetchPostUsage = async (fileUrl: string) => {
    setLoadingUsage(true);
    try {
      const { data } = await supabase
        .from("blog_posts")
        .select("id, title, slug")
        .or(`image_url.eq.${fileUrl},content.ilike.%${fileUrl}%`);
      setPostUsage(data || []);
    } catch {
      setPostUsage([]);
    }
    setLoadingUsage(false);
  };

  const openPreviewDialog = (file: MediaFile) => {
    setSelectedFile(file);
    setFileAltText(file.alt_text || "");
    setFileTitleText(file.title_text || "");
    setPostUsage([]);
    setPreviewDialogOpen(true);
    fetchPostUsage(file.url);
  };

  const handleSavePreviewFields = async () => {
    if (!selectedFile) return;
    try {
      const { error } = await supabase
        .from("media_files")
        .update({ alt_text: fileAltText, title_text: fileTitleText })
        .eq("id", selectedFile.id);
      if (error) throw error;
      toast({ title: "Saved", description: "Image SEO fields updated" });
      fetchMediaFiles();
    } catch {
      toast({ title: "Error", description: "Failed to save", variant: "destructive" });
    }
  };

  const handleSuggestFileName = () => {
    if (!selectedFile || !fileAltText.trim()) return;
    const ext = selectedFile.url.split('.').pop() || "png";
    const suggested = slugifyFileName(fileAltText, ext);
    setNewFileName(suggested);
    setRenameDialogOpen(true);
  };

  const handleDownload = () => {
    if (!selectedFile) return;
    window.open(selectedFile.url, '_blank');
  };

  const handleViewFile = () => {
    if (!selectedFile) return;
    window.open(selectedFile.url, '_blank');
  };

  const handleDeleteFile = async () => {
    if (!selectedFile) return;
    try {
      const { error: storageError } = await supabase.storage
        .from("media-files")
        .remove([selectedFile.url.split('/').slice(-2).join('/')]);

      if (storageError) throw storageError;

      const { error: dbError } = await supabase
        .from("media_files")
        .delete()
        .eq("id", selectedFile.id);

      if (dbError) throw dbError;

      toast({
        title: "File Deleted",
        description: "Media file has been removed",
      });

      setDeleteDialogOpen(false);
      setSelectedFile(null);
      fetchMediaFiles();
    } catch (error) {
      console.error("Delete error:", error);
      toast({
        title: "Delete Failed",
        description: "Failed to delete file",
        variant: "destructive",
      });
    }
  };

  const handleCopyUrl = (file: MediaFile) => {
    navigator.clipboard.writeText(file.url);
    toast({
      title: "Link Copied",
      description: "Media link copied to clipboard",
    });
  };

  const fileTypes = Array.from(new Set(mediaFiles.map(file => {
    return file.url.split('.').pop()?.toUpperCase() || 'Unknown';
  }))).sort();

  const handleChangeGroup = async (file: MediaFile, newGroup: string) => {
    try {
      const { error } = await supabase
        .from("media_files")
        .update({ group: newGroup })
        .eq("id", file.id);

      if (error) throw error;

      toast({ title: "Group Updated", description: `Moved to ${MEDIA_GROUPS.find(g => g.value === newGroup)?.label}` });
      fetchMediaFiles();
    } catch {
      toast({ title: "Error", description: "Failed to update group", variant: "destructive" });
    }
  };

  // Bulk edit handlers
  const toggleSelectFile = (id: string) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const openBulkEditDialog = () => {
    const texts: Record<string, string> = {};
    selectedIds.forEach(id => {
      const file = mediaFiles.find(f => f.id === id);
      if (file) texts[id] = file.alt_text || "";
    });
    setBulkAltTexts(texts);
    setBulkEditDialogOpen(true);
  };

  const handleBulkSave = async () => {
    try {
      for (const [id, altText] of Object.entries(bulkAltTexts)) {
        await supabase.from("media_files").update({ alt_text: altText }).eq("id", id);
      }
      toast({ title: "Saved", description: `Updated alt text for ${Object.keys(bulkAltTexts).length} images` });
      setBulkEditDialogOpen(false);
      setSelectedIds(new Set());
      setBulkMode(false);
      fetchMediaFiles();
    } catch {
      toast({ title: "Error", description: "Failed to save bulk edits", variant: "destructive" });
    }
  };

  const filteredFiles = mediaFiles.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (file.alt_text || "").toLowerCase().includes(searchQuery.toLowerCase());
    const fileExtension = file.url.split('.').pop()?.toUpperCase() || 'Unknown';
    const matchesType = filterType === "all" || fileExtension === filterType;
    const matchesGroup = filterGroup === "all" || file.group === filterGroup;
    return matchesSearch && matchesType && matchesGroup;
  });

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Media Library</CardTitle>
          <CardDescription>Upload and manage your media files</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Upload Section */}
            <div 
              className={`border-2 border-dashed rounded-lg p-8 text-center space-y-4 transition-colors ${
                isDragging ? 'border-primary bg-primary/5' : 'border-muted-foreground/25'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <Upload className="w-12 h-12 mx-auto text-muted-foreground" />
              <p className="text-sm text-muted-foreground pb-2">
                Drag and drop files here, or click to browse
              </p>
              <div className="flex items-center justify-center gap-3 pb-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <Label className="text-sm text-muted-foreground">Upload to group:</Label>
                  <Select value={uploadGroup} onValueChange={setUploadGroup}>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {MEDIA_GROUPS.map((g) => (
                        <SelectItem key={g.value} value={g.value}>{g.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <Switch checked={enableWebP} onCheckedChange={setEnableWebP} id="webp-toggle" />
                  <Label htmlFor="webp-toggle" className="text-sm text-muted-foreground cursor-pointer">WebP conversion</Label>
                </div>
              </div>
              {uploadStats && (
                <p className="text-xs text-muted-foreground">
                  Last upload: {formatFileSize(uploadStats.original)} → {formatFileSize(uploadStats.compressed)} ({Math.round((1 - uploadStats.compressed / uploadStats.original) * 100)}% saved)
                </p>
              )}
              <Input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
                disabled={uploading}
              />
              <label htmlFor="file-upload">
                <Button variant="outline" asChild disabled={uploading}>
                  <span>{uploading ? "Compressing & Uploading..." : "Choose Files"}</span>
                </Button>
              </label>
            </div>

            {/* Search and View Controls */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search by name or alt text..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterGroup} onValueChange={setFilterGroup}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Groups</SelectItem>
                  {MEDIA_GROUPS.map((g) => (
                    <SelectItem key={g.value} value={g.value}>{g.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Filter by format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Formats</SelectItem>
                  {fileTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex gap-2">
                <Button
                  variant={bulkMode ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setBulkMode(!bulkMode);
                    setSelectedIds(new Set());
                  }}
                  className="gap-1"
                >
                  <CheckSquare className="w-4 h-4" />
                  Bulk Edit
                </Button>
                {bulkMode && selectedIds.size > 0 && (
                  <Button variant="secondary" size="sm" onClick={openBulkEditDialog}>
                    Edit {selectedIds.size} Selected
                  </Button>
                )}
              </div>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Media Grid/List */}
            <div className="min-h-[400px] border rounded-lg p-4">
              {filteredFiles.length === 0 ? (
                <div className="text-center text-muted-foreground py-12">
                  <p>No media files yet. Upload your first file to get started.</p>
                </div>
              ) : viewMode === "grid" ? (
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {filteredFiles.map((file) => (
                    <Card key={file.id} className={`overflow-hidden ${bulkMode && selectedIds.has(file.id) ? "ring-2 ring-primary" : ""}`}>
                      <div 
                        className="aspect-[5/4] bg-muted flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity relative"
                        onClick={() => bulkMode ? toggleSelectFile(file.id) : openPreviewDialog(file)}
                      >
                        {bulkMode && (
                          <div className="absolute top-2 left-2 z-10">
                            <Checkbox checked={selectedIds.has(file.id)} />
                          </div>
                        )}
                        <img
                          src={file.url}
                          alt={file.alt_text || `Preview of ${file.name}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            const img = e.currentTarget as HTMLImageElement;
                            img.onerror = null;
                            img.src = '/placeholder.svg';
                          }}
                        />
                        {!file.alt_text && (
                          <div className="absolute bottom-1 right-1">
                            <Badge variant="destructive" className="text-[10px] px-1 py-0">No alt</Badge>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-3">
                        <p className="text-sm font-medium truncate mb-1">{file.name}</p>
                        <p className="text-xs text-muted-foreground mb-2 truncate">
                          {MEDIA_GROUPS.find(g => g.value === file.group)?.label || file.group}
                          {file.file_size ? ` · ${formatFileSize(file.file_size)}` : ""}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground uppercase">
                            {file.url.split('.').pop() || 'Unknown'}
                          </span>
                          <div className="flex gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleCopyUrl(file)}
                              title="Copy media link"
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => openRenameDialog(file)}
                              title="Rename file"
                            >
                              <FileEdit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-destructive hover:text-destructive"
                              onClick={() => openDeleteDialog(file)}
                              title="Delete file"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {filteredFiles.map((file) => (
                    <Card key={file.id} className={`p-4 ${bulkMode && selectedIds.has(file.id) ? "ring-2 ring-primary" : ""}`}>
                      <div className="flex items-center gap-4">
                        {bulkMode && (
                          <Checkbox checked={selectedIds.has(file.id)} onCheckedChange={() => toggleSelectFile(file.id)} />
                        )}
                        <div 
                          className="w-16 h-16 bg-muted rounded flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => openPreviewDialog(file)}
                        >
                          <img
                            src={file.url}
                            alt={file.alt_text || `Preview of ${file.name}`}
                            className="w-full h-full object-cover rounded"
                            loading="lazy"
                            onError={(e) => {
                              const img = e.currentTarget as HTMLImageElement;
                              img.onerror = null;
                              img.src = '/placeholder.svg';
                            }}
                          />
                        </div>
                        <div 
                          className="flex-1 min-w-0 cursor-pointer"
                          onClick={() => openPreviewDialog(file)}
                        >
                          <p className="font-medium truncate">{file.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {file.url.split('.').pop()?.toUpperCase() || 'Unknown'}
                            {file.file_size ? ` · ${formatFileSize(file.file_size)}` : ""}
                          </p>
                          {!file.alt_text && <Badge variant="destructive" className="text-[10px] mt-1">Missing alt text</Badge>}
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" onClick={() => handleCopyUrl(file)}>
                            <Copy className="h-4 w-4 mr-2" /> Copy URL
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => openRenameDialog(file)}>
                            <FileEdit className="h-4 w-4 mr-2" /> Rename
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => openDeleteDialog(file)} className="text-destructive hover:text-destructive">
                            <Trash2 className="h-4 w-4 mr-2" /> Delete
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Rename Dialog */}
      <Dialog open={renameDialogOpen} onOpenChange={setRenameDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rename File</DialogTitle>
            <DialogDescription>Enter a new name for the media file</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="filename">File Name</Label>
              <Input
                id="filename"
                value={newFileName}
                onChange={(e) => setNewFileName(e.target.value)}
                placeholder="Enter new file name"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setRenameDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleRenameFile}>Rename</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Preview Dialog */}
      <Dialog open={previewDialogOpen} onOpenChange={(open) => { setPreviewDialogOpen(open); if (!open) setPostUsage([]); }}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Media Preview</DialogTitle>
          </DialogHeader>
          <div className="grid md:grid-cols-2 gap-6 py-4">
            {/* Left: Media Preview */}
            <div className="space-y-4">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={selectedFile?.url}
                  alt={fileAltText || selectedFile?.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.onerror = null;
                    img.src = '/placeholder.svg';
                  }}
                />
              </div>
            </div>

            {/* Right: Details */}
            <div className="space-y-6">
              {/* File Info */}
              <div className="space-y-3 pb-4 border-b">
                <div>
                  <Label className="text-xs text-muted-foreground">Uploaded on:</Label>
                  <p className="text-sm">{new Date(selectedFile?.uploadedAt || '').toLocaleDateString()}</p>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">File name:</Label>
                  <p className="text-sm break-all">{selectedFile?.name}</p>
                </div>
                <div className="flex gap-4">
                  <div>
                    <Label className="text-xs text-muted-foreground">File type:</Label>
                    <p className="text-sm uppercase">{selectedFile?.url.split('.').pop() || 'Unknown'}</p>
                  </div>
                  {selectedFile?.file_size && (
                    <div>
                      <Label className="text-xs text-muted-foreground">File size:</Label>
                      <p className="text-sm">{formatFileSize(selectedFile.file_size)}</p>
                    </div>
                  )}
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">Group:</Label>
                  <Select
                    value={selectedFile?.group || "uncategorized"}
                    onValueChange={(val) => {
                      if (selectedFile) handleChangeGroup(selectedFile, val);
                    }}
                  >
                    <SelectTrigger className="w-full mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {MEDIA_GROUPS.map((g) => (
                        <SelectItem key={g.value} value={g.value}>{g.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Image SEO Fields */}
              <div className="space-y-4 pb-4 border-b">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                  <ImageIcon className="w-4 h-4" /> Image SEO
                </h4>
                <div className="space-y-2">
                  <Label htmlFor="alt_text">
                    Alt Text <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="alt_text"
                    value={fileAltText}
                    onChange={(e) => setFileAltText(e.target.value)}
                    placeholder="Describe the image for accessibility and SEO"
                    rows={2}
                    className={!fileAltText ? "border-destructive" : ""}
                  />
                  {!fileAltText && <p className="text-xs text-destructive">Alt text is required for accessibility</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title_text">Title Attribute</Label>
                  <Input
                    id="title_text"
                    value={fileTitleText}
                    onChange={(e) => setFileTitleText(e.target.value)}
                    placeholder="Tooltip text shown on hover"
                  />
                </div>
                <div className="flex gap-2">
                  <Button type="button" variant="outline" size="sm" onClick={handleSuggestFileName} disabled={!fileAltText.trim()} className="gap-1">
                    <Wand2 className="w-3 h-3" /> Suggest File Name
                  </Button>
                  <Button type="button" size="sm" onClick={handleSavePreviewFields}>
                    Save SEO Fields
                  </Button>
                </div>
              </div>

              {/* File URL */}
              <div className="space-y-2 pb-4 border-b">
                <Label>File URL</Label>
                <div className="flex gap-2">
                  <Input value={selectedFile?.url || ''} readOnly className="flex-1" />
                  <Button variant="outline" size="icon" onClick={() => selectedFile && handleCopyUrl(selectedFile)}>
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Post Usage */}
              <div className="space-y-2 pb-4 border-b">
                <Label className="text-xs text-muted-foreground">Used in Blog Posts</Label>
                {loadingUsage ? (
                  <p className="text-sm text-muted-foreground">Loading...</p>
                ) : postUsage.length === 0 ? (
                  <p className="text-sm text-muted-foreground">Not used in any posts</p>
                ) : (
                  <div className="space-y-1">
                    {postUsage.map(p => (
                      <a key={p.id} href={`/blog/${p.slug}`} target="_blank" rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline block truncate">
                        {p.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <Button variant="outline" className="w-full" onClick={handleViewFile}>View media file</Button>
                <Button variant="outline" className="w-full" onClick={handleDownload}>Download file</Button>
                <Button variant="destructive" className="w-full" onClick={() => {
                  setPreviewDialogOpen(false);
                  if (selectedFile) openDeleteDialog(selectedFile);
                }}>Delete</Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Bulk Edit Dialog */}
      <Dialog open={bulkEditDialogOpen} onOpenChange={setBulkEditDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Bulk Edit Alt Text</DialogTitle>
            <DialogDescription>Edit alt text for {Object.keys(bulkAltTexts).length} selected images</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {Object.entries(bulkAltTexts).map(([id, altText]) => {
              const file = mediaFiles.find(f => f.id === id);
              if (!file) return null;
              return (
                <div key={id} className="flex items-start gap-3">
                  <img src={file.url} alt={file.name} className="w-16 h-16 object-cover rounded flex-shrink-0" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium truncate">{file.name}</p>
                    <Input
                      value={altText}
                      onChange={(e) => setBulkAltTexts(prev => ({ ...prev, [id]: e.target.value }))}
                      placeholder="Enter alt text"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setBulkEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleBulkSave}>Save All</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete "{selectedFile?.name}". This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteFile} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default MediaManager;
