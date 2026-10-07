/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2, Check, X, ExternalLink, Share2, Upload, Eye, User, Calendar, Save, FileText, Settings, Search, Grid3X3, Image, Globe, Link2, AlertTriangle, List, BookOpen, Shield, Clock, BarChart3, ImageIcon, History, Copy, Download, Monitor, Smartphone, CheckSquare, RefreshCw } from "lucide-react";
import { compressImage, formatFileSize } from "@/lib/imageUtils";
import ImageAltTextManager from "@/components/admin/ImageAltTextManager";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import TableEditorDialog from "@/components/admin/TableEditorDialog";
import ChartDataEditor from "@/components/admin/ChartDataEditor";

// Register custom TableBlot for pasting tables from Google Docs/Sheets
const BlockEmbed = Quill.import('blots/block/embed') as any;
class TableBlot extends BlockEmbed {
  static blotName = 'tableBlock';
  static tagName = 'div';
  static className = 'ql-table-block';

  static create(value: string) {
    const node = super.create() as HTMLElement;
    node.innerHTML = value;
    node.setAttribute('contenteditable', 'false');
    return node;
  }

  static value(node: HTMLElement) {
    return node.innerHTML;
  }
}
Quill.register(TableBlot, true);

const Delta = Quill.import('delta') as any;

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content?: string;
  author: string;
  image_url: string | null;
  category: string | null;
  tags: string[] | null;
  is_published: boolean;
  published_at: string | null;
  meta_title?: string | null;
  meta_description?: string | null;
  og_title?: string | null;
  og_description?: string | null;
  og_image_url?: string | null;
  twitter_card_type?: string | null;
  schema_type?: string | null;
  author_name?: string | null;
  author_url?: string | null;
  focus_keyword?: string | null;
  toc_enabled?: boolean | null;
  related_post_ids?: string[] | null;
  canonical_url?: string | null;
  noindex?: boolean | null;
  nofollow?: boolean | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  scheduled_timezone?: string | null;
  last_auto_saved_at?: string | null;
  created_at?: string;
  updated_at?: string;
}

interface BlogRevision {
  id: string;
  post_id: string;
  content: string;
  title: string;
  meta_data: any;
  revision_number: number;
  created_at: string;
  created_by: string | null;
}

interface TocHeading {
  level: number;
  text: string;
  id: string;
}

type PostStatus = "draft" | "published" | "scheduled";

const COMMON_TIMEZONES = [
  "UTC", "America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles",
  "America/Toronto", "America/Sao_Paulo", "Europe/London", "Europe/Paris", "Europe/Berlin",
  "Europe/Moscow", "Asia/Dubai", "Asia/Kolkata", "Asia/Shanghai", "Asia/Tokyo",
  "Asia/Singapore", "Australia/Sydney", "Pacific/Auckland",
];

const generateSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

const getWordCount = (html: string) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  const text = div.textContent || div.innerText || "";
  return text.trim() ? text.trim().split(/\s+/).length : 0;
};

const getCharCountColor = (count: number, min: number, max: number) => {
  if (count === 0) return "text-muted-foreground";
  if (count >= min && count <= max) return "text-green-600";
  if (count > max) return "text-destructive";
  return "text-yellow-600";
};

const getDotColor = (count: number, min: number, max: number, redMax: number) => {
  if (count === 0) return "bg-muted-foreground";
  if (count >= min && count <= max) return "bg-green-500";
  if (count > redMax) return "bg-red-500";
  return "bg-yellow-500";
};

const getKeywordDensity = (html: string, keyword: string): number => {
  if (!keyword.trim()) return 0;
  const div = document.createElement("div");
  div.innerHTML = html;
  const text = (div.textContent || div.innerText || "").toLowerCase();
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return 0;
  const kw = keyword.toLowerCase().trim();
  const occurrences = text.split(kw).length - 1;
  return (occurrences / words.length) * 100;
};

const countImagesWithoutAlt = (html: string): number => {
  const matches = html.match(/<img[^>]*>/gi) || [];
  return matches.filter((tag) => {
    const altMatch = tag.match(/alt\s*=\s*["']([^"']*)["']/i);
    return !altMatch || altMatch[1].trim() === "";
  }).length;
};

const countInternalLinks = (html: string): number => {
  const matches = html.match(/<a[^>]+href\s*=\s*["']([^"']*)["'][^>]*>/gi) || [];
  return matches.filter((tag) => {
    const hrefMatch = tag.match(/href\s*=\s*["']([^"']*)["']/i);
    if (!hrefMatch) return false;
    const href = hrefMatch[1];
    return href.startsWith("/") || href.startsWith("#") || href.includes(window.location.origin);
  }).length;
};

const extractHeadings = (html: string): TocHeading[] => {
  const headings: TocHeading[] = [];
  const regex = /<h([2-3])[^>]*>(.*?)<\/h[2-3]>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const div = document.createElement("div");
    div.innerHTML = match[2];
    const text = div.textContent || "";
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    headings.push({ level: parseInt(match[1]), text, id });
  }
  return headings;
};

const validateHeadingHierarchy = (headings: TocHeading[]): string[] => {
  const warnings: string[] = [];
  for (let i = 0; i < headings.length; i++) {
    if (i === 0 && headings[i].level === 3) {
      warnings.push(`"${headings[i].text}" is H3 but appears before any H2`);
    }
    if (i > 0 && headings[i].level === 3) {
      const prevH2 = headings.slice(0, i).some(h => h.level === 2);
      if (!prevH2) {
        warnings.push(`"${headings[i].text}" is H3 but no H2 precedes it`);
      }
    }
  }
  return warnings;
};

const getFleschReadingEase = (html: string): number => {
  const div = document.createElement("div");
  div.innerHTML = html;
  const text = div.textContent || div.innerText || "";
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0 || sentences.length === 0) return 0;
  // Simple syllable count approximation
  const syllableCount = words.reduce((total, word) => {
    word = word.toLowerCase().replace(/[^a-z]/g, "");
    if (word.length <= 3) return total + 1;
    const vowels = word.match(/[aeiouy]+/g);
    let count = vowels ? vowels.length : 1;
    if (word.endsWith("e")) count = Math.max(1, count - 1);
    return total + count;
  }, 0);
  return Math.round(206.835 - 1.015 * (words.length / sentences.length) - 84.6 * (syllableCount / words.length));
};

const getReadingLevel = (score: number): { label: string; color: string } => {
  if (score >= 80) return { label: "Very Easy", color: "bg-green-500" };
  if (score >= 60) return { label: "Standard", color: "bg-green-500" };
  if (score >= 40) return { label: "Fairly Difficult", color: "bg-yellow-500" };
  if (score >= 20) return { label: "Difficult", color: "bg-red-500" };
  return { label: "Very Difficult", color: "bg-red-500" };
};

const getReadingTime = (wordCount: number): number => Math.max(1, Math.ceil(wordCount / 238));

// Simple HTML to Markdown converter
const htmlToMarkdown = (html: string): string => {
  let md = html;
  md = md.replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n\n');
  md = md.replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n\n');
  md = md.replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n\n');
  md = md.replace(/<h4[^>]*>(.*?)<\/h4>/gi, '#### $1\n\n');
  md = md.replace(/<strong>(.*?)<\/strong>/gi, '**$1**');
  md = md.replace(/<b>(.*?)<\/b>/gi, '**$1**');
  md = md.replace(/<em>(.*?)<\/em>/gi, '*$1*');
  md = md.replace(/<i>(.*?)<\/i>/gi, '*$1*');
  md = md.replace(/<a[^>]+href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)');
  md = md.replace(/<img[^>]+src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/gi, '![$2]($1)');
  md = md.replace(/<img[^>]+src="([^"]*)"[^>]*\/?>/gi, '![]($1)');
  md = md.replace(/<li>(.*?)<\/li>/gi, '- $1\n');
  md = md.replace(/<blockquote>(.*?)<\/blockquote>/gi, '> $1\n\n');
  md = md.replace(/<p>(.*?)<\/p>/gi, '$1\n\n');
  md = md.replace(/<br\s*\/?>/gi, '\n');
  md = md.replace(/<[^>]+>/g, '');
  md = md.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
  md = md.replace(/\n{3,}/g, '\n\n');
  return md.trim();
};

const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ align: [] }],
    ["link", "image", "video"],
    ["blockquote", "code-block"],
    [{ color: [] }, { background: [] }],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
    matchers: [
      [
        Node.ELEMENT_NODE,
        (node: HTMLElement, delta: any) => {
          if (node.tagName === "TABLE" || node.tagName === "GOOGLE-SHEETS-HTML-ORIGIN") {
            let tableEl: HTMLElement | null = node;
            if (node.tagName === "GOOGLE-SHEETS-HTML-ORIGIN") {
              tableEl = node.querySelector("table");
            }
            if (!tableEl || tableEl.tagName !== "TABLE") return delta;

            const cleanTable = tableEl.cloneNode(true) as HTMLElement;
            cleanTable.querySelectorAll("[style]").forEach((el) => {
              const htmlEl = el as HTMLElement;
              const keepStyles: string[] = [];
              if (htmlEl.style.fontWeight === "bold" || htmlEl.style.fontWeight === "700") {
                keepStyles.push("font-weight:600");
              }
              if (htmlEl.style.textAlign) {
                keepStyles.push(`text-align:${htmlEl.style.textAlign}`);
              }
              htmlEl.removeAttribute("style");
              if (keepStyles.length > 0) {
                htmlEl.setAttribute("style", keepStyles.join(";"));
              }
            });
            cleanTable.querySelectorAll("colgroup").forEach((el) => el.remove());
            cleanTable.querySelectorAll("[class]").forEach((el) => el.removeAttribute("class"));

            return new Delta().insert({ tableBlock: cleanTable.outerHTML });
          }

          if (node.tagName === "B" && node.style.fontWeight === "normal") {
            return delta;
          }

          return delta;
        },
      ],
    ],
  },
};

const quillFormats = [
  "header", "bold", "italic", "underline", "strike",
  "list", "bullet", "indent", "link", "image", "video",
  "blockquote", "code-block", "align", "color", "background",
  "table", "thead", "tbody", "tr", "th", "td",
  "tableBlock",
];

const BlogManager = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [blogCategories, setBlogCategories] = useState<string[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    author: "",
    category: [] as string[],
    banner_url: "",
    banner_alt: "",
    excerpt: "",
    tags: "",
    published_at: "",
    meta_title: "",
    meta_description: "",
    og_title: "",
    og_description: "",
    og_image_url: "",
    twitter_card_type: "summary_large_image",
    schema_type: "BlogPosting",
    author_name: "",
    author_url: "",
    focus_keyword: "",
    toc_enabled: false,
    related_post_ids: [] as string[],
    canonical_url: "",
    noindex: false,
    nofollow: false,
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    scheduled_timezone: "UTC",
  });
  const [relatedSearchTerm, setRelatedSearchTerm] = useState("");
  const [postStatus, setPostStatus] = useState<PostStatus>("draft");
  const [content, setContent] = useState("");
  const [loadingContentId, setLoadingContentId] = useState<string | null>(null);
  const [uploadingBanner, setUploadingBanner] = useState(false);
  const [bannerCompressInfo, setBannerCompressInfo] = useState<{ original: number; compressed: number } | null>(null);
  const [showCategoryDialog, setShowCategoryDialog] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [previewSlug, setPreviewSlug] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "mobile">("desktop");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);
  const [showTableDialog, setShowTableDialog] = useState(false);
  const [showImageAltDialog, setShowImageAltDialog] = useState(false);
  const [autoSaveStatus, setAutoSaveStatus] = useState<"saved" | "saving" | "unsaved" | "idle">("idle");
  const [lastAutoSavedAt, setLastAutoSavedAt] = useState<Date | null>(null);
  const [showChartsPanel, setShowChartsPanel] = useState(false);
  const [dbChartSlugs, setDbChartSlugs] = useState<{ slug: string; title: string }[]>([]);

  // Revision history state
  const [showRevisionDialog, setShowRevisionDialog] = useState(false);
  const [revisions, setRevisions] = useState<BlogRevision[]>([]);
  const [loadingRevisions, setLoadingRevisions] = useState(false);

  // SEO checklist dialog
  const [showSeoChecklist, setShowSeoChecklist] = useState(false);
  const [pendingSubmitEvent, setPendingSubmitEvent] = useState<React.FormEvent | null>(null);

  // Bulk operations state
  const [bulkMode, setBulkMode] = useState(false);
  const [selectedPostIds, setSelectedPostIds] = useState<string[]>([]);
  const [showBulkCategoryDialog, setShowBulkCategoryDialog] = useState(false);
  const [showBulkMetaDialog, setShowBulkMetaDialog] = useState(false);
  const [bulkCategory, setBulkCategory] = useState<string[]>([]);
  const [bulkTags, setBulkTags] = useState("");
  const [bulkMetaDescription, setBulkMetaDescription] = useState("");

  // Admin search/filter/sort state
  const [adminSearchQuery, setAdminSearchQuery] = useState("");
  const [adminStatusFilter, setAdminStatusFilter] = useState<"all" | "published" | "draft" | "scheduled">("all");
  const [adminCategoryFilter, setAdminCategoryFilter] = useState("all");
  const [adminSortBy, setAdminSortBy] = useState<"date-desc" | "date-asc" | "title-asc" | "title-desc">("date-desc");

  const bannerInputRef = useRef<HTMLInputElement>(null);
  const ogImageInputRef = useRef<HTMLInputElement>(null);
  const quillRef = useRef<ReactQuill | null>(null);
  const autoSaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchPosts();
    fetchCategories();
    fetchDbChartSlugs();
  }, []);

  // Auto-slug generation
  useEffect(() => {
    if (!slugManuallyEdited && formData.title) {
      setFormData((prev) => ({ ...prev, slug: generateSlug(prev.title) }));
    }
  }, [formData.title, slugManuallyEdited]);

  // Auto-save debounce (30s)
  useEffect(() => {
    if (!isEditing || !editingId) return;
    setAutoSaveStatus("unsaved");

    if (autoSaveTimer.current) clearTimeout(autoSaveTimer.current);
    autoSaveTimer.current = setTimeout(() => {
      handleAutoSave();
    }, 30000);

    return () => {
      if (autoSaveTimer.current) clearTimeout(autoSaveTimer.current);
    };
  }, [formData, content, postStatus]);

  const handleAutoSave = useCallback(async () => {
    if (!editingId) return;
    setAutoSaveStatus("saving");

    const now = new Date();
    const dataToSubmit = buildSubmitData();
    (dataToSubmit as any).last_auto_saved_at = now.toISOString();

    const { error } = await supabase
      .from("blog_posts")
      .update(dataToSubmit)
      .eq("id", editingId);

    if (!error) {
      setLastAutoSavedAt(now);
    }
    setAutoSaveStatus(error ? "unsaved" : "saved");
  }, [editingId, formData, content, postStatus]);

  const fetchCategories = async () => {
    const { data, error } = await supabase
      .from("blog_categories")
      .select("name")
      .order("name", { ascending: true });

    if (!error) setBlogCategories(data?.map((c) => c.name) || []);
  };

  const fetchDbChartSlugs = async () => {
    const { data } = await supabase
      .from("blog_charts")
      .select("slug, title")
      .order("created_at", { ascending: false });
    if (data) setDbChartSlugs(data as { slug: string; title: string }[]);
  };

  // Article bodies are excluded here on purpose — some posts are multiple MB,
  // and selecting them for every row times the database query out.
  const POST_LIST_COLUMNS =
    "id,title,slug,excerpt,author,image_url,category,tags,is_published,published_at,meta_title,meta_description,og_title,og_description,og_image_url,twitter_card_type,schema_type,author_name,author_url,focus_keyword,toc_enabled,related_post_ids,canonical_url,noindex,nofollow,utm_source,utm_medium,utm_campaign,scheduled_timezone,last_auto_saved_at,banner_alt,created_at,updated_at";

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select(POST_LIST_COLUMNS)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Failed to fetch blog posts", error);
      toast({
        title: "Error",
        description: `Failed to fetch blog posts: ${error.message}`,
        variant: "destructive",
      });
    } else {
      setPosts((data as unknown as BlogPost[]) || []);
    }
  };

  // Loads the full article body for a single post, on demand.
  const loadPostContent = async (post: BlogPost): Promise<BlogPost | null> => {
    if (typeof post.content === "string") return post;
    setLoadingContentId(post.id);
    const { data, error } = await supabase
      .from("blog_posts")
      .select("content")
      .eq("id", post.id)
      .maybeSingle();
    setLoadingContentId(null);
    if (error || !data) {
      console.error("Failed to load post content", error);
      toast({
        title: "Error",
        description: `Failed to load post content${error ? `: ${error.message}` : ""}`,
        variant: "destructive",
      });
      return null;
    }
    const full = { ...post, content: data.content ?? "" };
    setPosts((prev) => prev.map((p) => (p.id === post.id ? full : p)));
    return full;
  };

  const uploadImage = async (file: File): Promise<string | null> => {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from("media-files")
      .upload(fileName, file);

    if (uploadError) {
      toast({ title: "Error", description: "Failed to upload image", variant: "destructive" });
      return null;
    }

    const { data } = supabase.storage.from("media-files").getPublicUrl(fileName);
    const publicUrl = data.publicUrl;

    await supabase.from("media_files").insert({
      name: file.name,
      file_path: fileName,
      file_url: publicUrl,
      content_type: "blog",
      mime_type: file.type,
      file_size: file.size,
    });

    return publicUrl;
  };

  const handleBannerUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    setUploadingBanner(true);
    setBannerCompressInfo(null);
    const file = e.target.files[0];
    
    try {
      if (file.type.startsWith("image/")) {
        const result = await compressImage(file, { maxWidth: 2000, quality: 0.8 });
        const compressedFile = new File([result.blob], file.name, { type: file.type });
        setBannerCompressInfo({ original: result.originalSize, compressed: result.compressedSize });
        const url = await uploadImage(compressedFile);
        if (url) setFormData((p) => ({ ...p, banner_url: url }));
      } else {
        const url = await uploadImage(file);
        if (url) setFormData((p) => ({ ...p, banner_url: url }));
      }
    } catch {
      const url = await uploadImage(file);
      if (url) setFormData((p) => ({ ...p, banner_url: url }));
    }
    setUploadingBanner(false);
  };

  const handleTableInsert = (html: string) => {
    const quill = quillRef.current?.getEditor();
    if (quill) {
      const range = quill.getSelection();
      quill.clipboard.dangerouslyPasteHTML(range ? range.index : quill.getLength(), html);
    }
  };

  const handleCategoryToggle = (category: string) => {
    const current = formData.category || [];
    const updated = current.includes(category)
      ? current.filter((c) => c !== category)
      : [...current, category];
    setFormData({ ...formData, category: updated });
  };

  const handleAddCategory = async () => {
    if (!newCategory.trim()) return;
    if (blogCategories.includes(newCategory.trim())) {
      toast({ title: "Error", description: "Category already exists", variant: "destructive" });
      return;
    }

    const { error } = await supabase.from("blog_categories").insert([{ name: newCategory.trim() }]);
    if (error) {
      toast({ title: "Error", description: "Failed to add category", variant: "destructive" });
    } else {
      await fetchCategories();
      setFormData((p) => ({ ...p, category: [...(p.category || []), newCategory.trim()] }));
      setNewCategory("");
      setShowCategoryDialog(false);
    }
  };

  // ─── REVISION HISTORY ──────────────────────────────────
  const saveRevision = async (postId: string) => {
    // Get current revision count
    const { data: existing } = await supabase
      .from("blog_post_revisions")
      .select("id, revision_number")
      .eq("post_id", postId)
      .order("created_at", { ascending: false });

    const nextRevNum = (existing && existing.length > 0) ? existing[0].revision_number + 1 : 1;

    // Insert new revision
    await supabase.from("blog_post_revisions").insert({
      post_id: postId,
      content,
      title: formData.title,
      meta_data: {
        meta_title: formData.meta_title,
        meta_description: formData.meta_description,
        excerpt: formData.excerpt,
        tags: formData.tags,
        category: formData.category,
      },
      revision_number: nextRevNum,
    });

    // Keep only last 10 revisions
    if (existing && existing.length >= 10) {
      const toDelete = existing.slice(9).map(r => r.id);
      if (toDelete.length > 0) {
        await supabase.from("blog_post_revisions").delete().in("id", toDelete);
      }
    }
  };

  const fetchRevisions = async (postId: string) => {
    setLoadingRevisions(true);
    const { data, error } = await supabase
      .from("blog_post_revisions")
      .select("*")
      .eq("post_id", postId)
      .order("created_at", { ascending: false })
      .limit(10);

    if (!error && data) {
      setRevisions(data as unknown as BlogRevision[]);
    }
    setLoadingRevisions(false);
  };

  const handleShowRevisions = async () => {
    if (!editingId) return;
    await fetchRevisions(editingId);
    setShowRevisionDialog(true);
  };

  const handleRestoreRevision = (revision: BlogRevision) => {
    setContent(revision.content);
    setFormData(prev => ({
      ...prev,
      title: revision.title,
      ...(revision.meta_data?.meta_title !== undefined && { meta_title: revision.meta_data.meta_title || "" }),
      ...(revision.meta_data?.meta_description !== undefined && { meta_description: revision.meta_data.meta_description || "" }),
      ...(revision.meta_data?.excerpt !== undefined && { excerpt: revision.meta_data.excerpt || "" }),
      ...(revision.meta_data?.tags !== undefined && { tags: revision.meta_data.tags || "" }),
      ...(revision.meta_data?.category !== undefined && { category: revision.meta_data.category || [] }),
    }));
    setShowRevisionDialog(false);
    toast({ title: "Restored", description: `Revision #${revision.revision_number} restored. Save to persist.` });
  };

  // ─── EXPORT ────────────────────────────────────────────
  const downloadFile = (filename: string, content: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleExportHtml = async (post: BlogPost) => {
    const full = await loadPostContent(post);
    if (!full) return;
    const fullHtml = `<!DOCTYPE html>\n<html><head><title>${full.title}</title></head><body>\n<h1>${full.title}</h1>\n${full.content ?? ""}\n</body></html>`;
    downloadFile(`${full.slug}.html`, fullHtml, "text/html");
  };

  const handleExportMarkdown = async (post: BlogPost) => {
    const full = await loadPostContent(post);
    if (!full) return;
    const md = `# ${full.title}\n\n${htmlToMarkdown(full.content ?? "")}`;
    downloadFile(`${full.slug}.md`, md, "text/markdown");
  };

  // ─── DUPLICATE ─────────────────────────────────────────
  const handleDuplicate = async (original: BlogPost) => {
    const post = await loadPostContent(original);
    if (!post) return;
    const newSlug = `${post.slug}-copy`;
    const { error } = await supabase.from("blog_posts").insert({
      title: `Copy of ${post.title}`,
      slug: newSlug,
      author: post.author,
      content: post.content ?? "",
      category: post.category,
      excerpt: post.excerpt,
      tags: post.tags,
      image_url: post.image_url,
      is_published: false,
      published_at: null,
      meta_title: post.meta_title,
      meta_description: post.meta_description,
      og_title: post.og_title,
      og_description: post.og_description,
      og_image_url: post.og_image_url,
      twitter_card_type: post.twitter_card_type,
      schema_type: post.schema_type,
      author_name: post.author_name,
      author_url: post.author_url,
      focus_keyword: post.focus_keyword,
      toc_enabled: post.toc_enabled,
    });
    if (error) {
      toast({ title: "Error", description: "Failed to duplicate post", variant: "destructive" });
    } else {
      toast({ title: "Duplicated", description: `"Copy of ${post.title}" created as draft` });
      fetchPosts();
    }
  };

  // ─── BULK OPERATIONS ───────────────────────────────────
  const handleBulkToggle = (postId: string) => {
    setSelectedPostIds(prev =>
      prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
    );
  };

  const handleBulkSelectAll = () => {
    if (selectedPostIds.length === posts.length) {
      setSelectedPostIds([]);
    } else {
      setSelectedPostIds(posts.map(p => p.id));
    }
  };

  const handleBulkUpdateCategory = async () => {
    const categoryStr = bulkCategory.join(", ");
    const tagsArr = bulkTags.split(",").map(t => t.trim()).filter(Boolean);

    for (const id of selectedPostIds) {
      const updateData: any = {};
      if (bulkCategory.length > 0) updateData.category = categoryStr;
      if (tagsArr.length > 0) updateData.tags = tagsArr;
      if (Object.keys(updateData).length > 0) {
        await supabase.from("blog_posts").update(updateData).eq("id", id);
      }
    }
    toast({ title: "Updated", description: `${selectedPostIds.length} posts updated` });
    setShowBulkCategoryDialog(false);
    setBulkCategory([]);
    setBulkTags("");
    fetchPosts();
  };

  const handleBulkRegenerateSlugs = async () => {
    for (const id of selectedPostIds) {
      const post = posts.find(p => p.id === id);
      if (post) {
        const newSlug = generateSlug(post.title);
        await supabase.from("blog_posts").update({ slug: newSlug }).eq("id", id);
      }
    }
    toast({ title: "Slugs regenerated", description: `${selectedPostIds.length} slugs updated` });
    fetchPosts();
  };

  const handleBulkUpdateMeta = async () => {
    for (const id of selectedPostIds) {
      await supabase.from("blog_posts").update({ meta_description: bulkMetaDescription }).eq("id", id);
    }
    toast({ title: "Updated", description: `Meta descriptions updated for ${selectedPostIds.length} posts` });
    setShowBulkMetaDialog(false);
    setBulkMetaDescription("");
    fetchPosts();
  };

  const buildSubmitData = () => {
    const excerptText =
      formData.excerpt.trim() ||
      (() => {
        const div = document.createElement("div");
        div.innerHTML = content;
        return (div.textContent || div.innerText || "").substring(0, 200);
      })();

    const isPublished = postStatus === "published";
    let publishedAt: string | null = null;
    if (postStatus === "published") {
      publishedAt = formData.published_at || new Date().toISOString();
    } else if (postStatus === "scheduled" && formData.published_at) {
      publishedAt = formData.published_at;
    }

    const tagsArray = formData.tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    return {
      title: formData.title,
      slug: formData.slug,
      author: formData.author,
      category: Array.isArray(formData.category) ? formData.category.join(", ") : formData.category,
      content,
      image_url: formData.banner_url || null,
      banner_alt: formData.banner_alt || null,
      excerpt: excerptText,
      tags: tagsArray.length > 0 ? tagsArray : null,
      is_published: isPublished,
      published_at: publishedAt,
      meta_title: formData.meta_title || null,
      meta_description: formData.meta_description || null,
      og_title: formData.og_title || null,
      og_description: formData.og_description || null,
      og_image_url: formData.og_image_url || null,
      twitter_card_type: formData.twitter_card_type || 'summary_large_image',
      schema_type: formData.schema_type || 'BlogPosting',
      author_name: formData.author_name || null,
      author_url: formData.author_url || null,
      focus_keyword: formData.focus_keyword || null,
      toc_enabled: formData.toc_enabled || false,
      related_post_ids: formData.related_post_ids.length > 0 ? formData.related_post_ids : null,
      canonical_url: formData.canonical_url || null,
      noindex: formData.noindex,
      nofollow: formData.nofollow,
      utm_source: formData.utm_source || null,
      utm_medium: formData.utm_medium || null,
      utm_campaign: formData.utm_campaign || null,
      scheduled_timezone: formData.scheduled_timezone || 'UTC',
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // SEO checklist gate when publishing with low score
    if (postStatus === "published" && readinessScore < 80 && !pendingSubmitEvent) {
      setPendingSubmitEvent(e);
      setShowSeoChecklist(true);
      return;
    }
    setPendingSubmitEvent(null);

    const dataToSubmit = buildSubmitData();

    if (editingId) {
      // Save revision before updating
      await saveRevision(editingId);

      const { error } = await supabase.from("blog_posts").update(dataToSubmit).eq("id", editingId);
      if (error) {
        toast({ title: "Error", description: "Failed to update blog post", variant: "destructive" });
      } else {
        toast({ title: "Success", description: "Blog post updated" });
      }
    } else {
      const { error } = await supabase.from("blog_posts").insert([dataToSubmit]);
      if (error) {
        toast({ title: "Error", description: "Failed to create blog post", variant: "destructive" });
      } else {
        toast({ title: "Success", description: "Blog post created" });
      }
    }

    resetForm();
    fetchPosts();
  };

  const handleForcePublish = async () => {
    setShowSeoChecklist(false);
    if (pendingSubmitEvent) {
      const dataToSubmit = buildSubmitData();
      if (editingId) {
        await saveRevision(editingId);
        const { error } = await supabase.from("blog_posts").update(dataToSubmit).eq("id", editingId);
        if (error) {
          toast({ title: "Error", description: "Failed to update blog post", variant: "destructive" });
        } else {
          toast({ title: "Success", description: "Blog post published" });
        }
      } else {
        const { error } = await supabase.from("blog_posts").insert([dataToSubmit]);
        if (error) {
          toast({ title: "Error", description: "Failed to create blog post", variant: "destructive" });
        } else {
          toast({ title: "Success", description: "Blog post published" });
        }
      }
      setPendingSubmitEvent(null);
      resetForm();
      fetchPosts();
    }
  };

  const handleEdit = async (listPost: BlogPost) => {
    const post = await loadPostContent(listPost);
    if (!post) return;
    const rawContent = post.content ?? "";
    setEditingId(post.id);
    setSlugManuallyEdited(true);

    let editContent = rawContent;
    let bannerUrl = post.image_url || "";

    try {
      const parsed = JSON.parse(rawContent);
      let merged = "";
      if (parsed.sections && Array.isArray(parsed.sections)) {
        parsed.sections.forEach((section: any) => {
          if (section.items && Array.isArray(section.items)) {
            section.items.forEach((item: any) => {
              if (item.type === "title" && item.title) {
                const tag = item.headingSize || "h2";
                merged += `<${tag}>${item.title}</${tag}>`;
              } else if (item.type === "image" && item.image_url) {
                merged += `<img src="${item.image_url}" alt="" style="max-width:100%;height:auto;margin:1rem 0" />`;
              } else if (item.type === "content" && item.content) {
                merged += item.content;
              }
            });
          } else {
            if (section.title) merged += `<${section.headingSize || "h2"}>${section.title}</${section.headingSize || "h2"}>`;
            if (section.image_url) merged += `<img src="${section.image_url}" alt="" />`;
            if (section.content) merged += section.content;
          }
        });
      }
      editContent = merged;
      bannerUrl = parsed.banner_url || post.image_url || "";
    } catch {
      // Content is plain HTML
    }

    // Determine status
    let status: PostStatus = "draft";
    if (post.is_published) {
      status = "published";
    } else if (post.published_at && new Date(post.published_at) > new Date()) {
      status = "scheduled";
    }

    setFormData({
      title: post.title,
      slug: post.slug,
      author: post.author,
      category: post.category ? post.category.split(", ").filter(Boolean) : [],
      banner_url: bannerUrl,
      banner_alt: (post as any).banner_alt || "",
      excerpt: post.excerpt || "",
      tags: post.tags ? post.tags.join(", ") : "",
      published_at: post.published_at || "",
      meta_title: post.meta_title || "",
      meta_description: post.meta_description || "",
      og_title: post.og_title || "",
      og_description: post.og_description || "",
      og_image_url: post.og_image_url || "",
      twitter_card_type: post.twitter_card_type || "summary_large_image",
      schema_type: post.schema_type || "BlogPosting",
      author_name: post.author_name || "",
      author_url: post.author_url || "",
      focus_keyword: post.focus_keyword || "",
      toc_enabled: post.toc_enabled || false,
      related_post_ids: post.related_post_ids || [],
      canonical_url: post.canonical_url || "",
      noindex: post.noindex || false,
      nofollow: post.nofollow || false,
      utm_source: post.utm_source || "",
      utm_medium: post.utm_medium || "",
      utm_campaign: post.utm_campaign || "",
      scheduled_timezone: post.scheduled_timezone || "UTC",
    });
    setPostStatus(status);
    setContent(editContent);
    setIsEditing(true);
    setAutoSaveStatus("idle");
    setLastAutoSavedAt(post.last_auto_saved_at ? new Date(post.last_auto_saved_at) : null);
  };

  const handleDeleteClick = (id: string) => {
    setPostToDelete(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!postToDelete) return;
    const { error } = await supabase.from("blog_posts").delete().eq("id", postToDelete);
    if (error) {
      toast({ title: "Error", description: "Failed to delete blog post", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Blog post deleted" });
      fetchPosts();
    }
    setDeleteDialogOpen(false);
    setPostToDelete(null);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      author: "",
      category: [],
      banner_url: "",
      banner_alt: "",
      excerpt: "",
      tags: "",
      published_at: "",
      meta_title: "",
      meta_description: "",
      og_title: "",
      og_description: "",
      og_image_url: "",
      twitter_card_type: "summary_large_image",
      schema_type: "BlogPosting",
      author_name: "",
      author_url: "",
      focus_keyword: "",
      toc_enabled: false,
      related_post_ids: [],
      canonical_url: "",
      noindex: false,
      nofollow: false,
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      scheduled_timezone: "UTC",
    });
    setContent("");
    setPostStatus("draft");
    setEditingId(null);
    setIsEditing(false);
    setSlugManuallyEdited(false);
    setAutoSaveStatus("idle");
    setLastAutoSavedAt(null);
  };

  const handleViewBlog = (slug: string) => window.open(`/blog/${slug}`, "_blank");
  const handlePreviewBlog = (slug: string) => {
    setPreviewSlug(slug);
    setPreviewDevice("desktop");
    setShowPreview(true);
  };

  const handleShare = (slug: string) => {
    navigator.clipboard.writeText(`${window.location.origin}/blog/${slug}`);
    toast({ title: "Link copied!", description: "Blog post link copied to clipboard" });
  };

  const handleSocialShare = (platform: string, slug: string, title: string) => {
    const url = encodeURIComponent(`${window.location.origin}/blog/${slug}`);
    const text = encodeURIComponent(title);
    let shareUrl = "";
    if (platform === "twitter") shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    else if (platform === "facebook") shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    else if (platform === "linkedin") shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    if (shareUrl) window.open(shareUrl, "_blank", "width=600,height=400");
  };

  const wordCount = getWordCount(content);
  const readingTime = getReadingTime(wordCount);
  const headings = extractHeadings(content);
  const headingWarnings = validateHeadingHierarchy(headings);
  const fleschScore = getFleschReadingEase(content);
  const fleschLevel = getReadingLevel(fleschScore);
  const missingAltCount = countImagesWithoutAlt(content);
  const totalImages = (content.match(/<img[^>]*>/gi) || []).length;
  const internalLinkCount = countInternalLinks(content);

  // Readiness Score calculation
  const readinessChecks = [
    { label: "Title set", pass: formData.title.length > 0 },
    { label: "Meta title (50-100 chars)", pass: formData.meta_title.length >= 50 && formData.meta_title.length <= 100 },
    { label: "Meta description (150-400 chars)", pass: formData.meta_description.length >= 150 && formData.meta_description.length <= 400 },
    { label: "Focus keyword set", pass: formData.focus_keyword.length > 0 },
    { label: "Featured image set", pass: formData.banner_url.length > 0 },
    { label: "Featured image alt text", pass: !formData.banner_url || formData.banner_alt.length > 0 },
    { label: "All images have alt text", pass: totalImages === 0 || missingAltCount === 0 },
    { label: "Has H2 headings", pass: headings.some(h => h.level === 2) },
    { label: "No heading hierarchy issues", pass: headingWarnings.length === 0 },
    { label: "Has internal links", pass: internalLinkCount > 0 },
    { label: "Excerpt provided", pass: formData.excerpt.length > 0 },
  ];
  const readinessScore = Math.round((readinessChecks.filter(c => c.pass).length / readinessChecks.length) * 100);
  const readinessColor = readinessScore >= 80 ? "text-green-600" : readinessScore >= 50 ? "text-yellow-600" : "text-destructive";

  // Related posts suggestions
  const suggestedRelatedPosts = posts.filter(p => {
    if (editingId && p.id === editingId) return false;
    if (formData.related_post_ids.includes(p.id)) return false;
    const currentCats = formData.category || [];
    const currentTags = formData.tags.split(",").map(t => t.trim()).filter(Boolean);
    const postCats = p.category ? p.category.split(", ") : [];
    const postTags = p.tags || [];
    return postCats.some(c => currentCats.includes(c)) || postTags.some(t => currentTags.includes(t));
  }).slice(0, 5);

  const filteredRelatedPosts = relatedSearchTerm
    ? posts.filter(p => p.id !== editingId && !formData.related_post_ids.includes(p.id) && p.title.toLowerCase().includes(relatedSearchTerm.toLowerCase()))
    : [];

  // UTM preview URL
  const utmPreviewUrl = (() => {
    const base = `${window.location.origin}/blog/${formData.slug || "your-slug"}`;
    const params = new URLSearchParams();
    if (formData.utm_source) params.set("utm_source", formData.utm_source);
    if (formData.utm_medium) params.set("utm_medium", formData.utm_medium);
    if (formData.utm_campaign) params.set("utm_campaign", formData.utm_campaign);
    const qs = params.toString();
    return qs ? `${base}?${qs}` : base;
  })();

  // ─── FILTERED ADMIN POSTS ──────────────────────────────
  const filteredAdminPosts = (() => {
    let result = [...posts];

    // Search
    if (adminSearchQuery.trim()) {
      const q = adminSearchQuery.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q) ||
        (p.excerpt && p.excerpt.toLowerCase().includes(q)) ||
        (p.category && p.category.toLowerCase().includes(q))
      );
    }

    // Status filter
    if (adminStatusFilter === "published") {
      result = result.filter(p => p.is_published);
    } else if (adminStatusFilter === "draft") {
      result = result.filter(p => !p.is_published && !(p.published_at && new Date(p.published_at) > new Date()));
    } else if (adminStatusFilter === "scheduled") {
      result = result.filter(p => !p.is_published && p.published_at && new Date(p.published_at) > new Date());
    }

    // Category filter
    if (adminCategoryFilter !== "all") {
      result = result.filter(p => p.category?.split(",").map(c => c.trim()).includes(adminCategoryFilter));
    }

    // Sort
    result.sort((a, b) => {
      switch (adminSortBy) {
        case "date-asc":
          return new Date(a.published_at || a.created_at || 0).getTime() - new Date(b.published_at || b.created_at || 0).getTime();
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        default: // date-desc
          return new Date(b.published_at || b.created_at || 0).getTime() - new Date(a.published_at || a.created_at || 0).getTime();
      }
    });

    return result;
  })();

  // ─── RENDER ───────────────────────────────────────────────

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Blog Posts</h2>
        <div className="flex items-center gap-2">
          {!isEditing && (
            <>
              <Button
                variant={showChartsPanel ? "default" : "outline"}
                onClick={() => setShowChartsPanel(!showChartsPanel)}
                className="gap-2"
                size="sm"
              >
                <BarChart3 className="w-4 h-4" />
                {showChartsPanel ? "Back to Posts" : "Charts"}
              </Button>
              <Button
                variant={bulkMode ? "default" : "outline"}
                onClick={() => { setBulkMode(!bulkMode); setSelectedPostIds([]); }}
                className="gap-2"
                size="sm"
              >
                <CheckSquare className="w-4 h-4" />
                {bulkMode ? "Exit Bulk" : "Bulk Ops"}
              </Button>
              <Button onClick={() => { setShowChartsPanel(false); setIsEditing(true); }} className="gap-2">
                <Plus className="w-4 h-4" />
                Add New
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Charts Panel */}
      {showChartsPanel && !isEditing && <ChartDataEditor />}

      {!showChartsPanel && <>
      {/* Bulk Operations Toolbar */}
      {bulkMode && selectedPostIds.length > 0 && (
        <Card>
          <CardContent className="pt-4 pb-4">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-sm font-medium">{selectedPostIds.length} selected</span>
              <Button size="sm" variant="outline" onClick={() => setShowBulkCategoryDialog(true)} className="gap-1">
                Update Category/Tags
              </Button>
              <Button size="sm" variant="outline" onClick={handleBulkRegenerateSlugs} className="gap-1">
                <RefreshCw className="w-3.5 h-3.5" /> Regenerate Slugs
              </Button>
              <Button size="sm" variant="outline" onClick={() => setShowBulkMetaDialog(true)} className="gap-1">
                Update Meta Descriptions
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Add Category Dialog */}
      <Dialog open={showCategoryDialog} onOpenChange={setShowCategoryDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Category</DialogTitle>
            <DialogDescription>Enter a name for the new blog category</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div>
              <Label htmlFor="new-category">Category Name</Label>
              <Input
                id="new-category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Enter category name"
                onKeyDown={(e) => e.key === "Enter" && handleAddCategory()}
              />
            </div>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => { setShowCategoryDialog(false); setNewCategory(""); }}>Cancel</Button>
              <Button onClick={handleAddCategory}>Add Category</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* ─── EDITOR ─────────────────────────────────────── */}
      {isEditing && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{editingId ? "Edit" : "Add"} Blog Post</CardTitle>
              <div className="flex items-center gap-3">
                {editingId && (
                  <Button type="button" variant="outline" size="sm" onClick={handleShowRevisions} className="gap-1">
                    <History className="w-3.5 h-3.5" /> History
                  </Button>
                )}
                {editingId && autoSaveStatus !== "idle" && (
                  <span className={`text-xs flex items-center gap-1 ${
                    autoSaveStatus === "saved" ? "text-green-600" :
                    autoSaveStatus === "saving" ? "text-yellow-600" :
                    "text-muted-foreground"
                  }`}>
                    <Save className="w-3 h-3" />
                    {autoSaveStatus === "saved" && "Saved"}
                    {autoSaveStatus === "saving" && "Saving..."}
                    {autoSaveStatus === "unsaved" && "Unsaved changes"}
                    {lastAutoSavedAt && autoSaveStatus === "saved" && (
                      <span className="ml-1 text-muted-foreground">
                        at {lastAutoSavedAt.toLocaleTimeString()}
                      </span>
                    )}
                  </span>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Tabs defaultValue="content" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="content" className="gap-1">
                    <FileText className="w-3.5 h-3.5" /> Content
                  </TabsTrigger>
                  <TabsTrigger value="settings" className="gap-1">
                    <Settings className="w-3.5 h-3.5" /> Settings
                  </TabsTrigger>
                  <TabsTrigger value="structure" className="gap-1">
                    <List className="w-3.5 h-3.5" /> Structure
                  </TabsTrigger>
                  <TabsTrigger value="seo" className="gap-1">
                    <Search className="w-3.5 h-3.5" /> SEO
                  </TabsTrigger>
                </TabsList>

                {/* ── TAB 1: CONTENT ────────────────────── */}
                <TabsContent value="content" className="space-y-4 mt-4">
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
                      <Label htmlFor="author">Author *</Label>
                      <Input
                        id="author"
                        value={formData.author}
                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label className="text-base">Content *</Label>
                      <div className="flex gap-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button type="button" variant="outline" size="sm" className="gap-2">
                              <BarChart3 className="w-3.5 h-3.5" />
                              Insert Shortcode
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-72 max-h-80 overflow-y-auto">
                            {[
                              { code: "[chart:performance]", label: "Performance Chart", desc: "Before vs After bar chart" },
                              { code: "[chart:consolidation]", label: "Consolidation Chart", desc: "Service reduction chart" },
                              { code: "[table:validation]", label: "Validation Table", desc: "Migration record counts" },
                              { code: "[table:mapping]", label: "Data Mapping Table", desc: "MongoDB → Supabase mapping" },
                              { code: "[table:services]", label: "Services Table", desc: "Capability comparison" },
                              { code: "[figure:dashboard]", label: "Dashboard Preview", desc: "Dashboard screenshot" },
                            ].map((sc) => (
                              <DropdownMenuItem
                                key={sc.code}
                                onClick={() => {
                                  const quill = quillRef.current?.getEditor();
                                  if (quill) {
                                    const range = quill.getSelection();
                                    const idx = range ? range.index : quill.getLength();
                                    quill.insertText(idx, sc.code);
                                    quill.setSelection(idx + sc.code.length, 0);
                                  } else {
                                    setContent((prev) => prev + sc.code);
                                  }
                                }}
                              >
                                <div>
                                  <div className="font-medium">{sc.label}</div>
                                  <div className="text-xs text-muted-foreground">{sc.desc} — <code className="text-xs">{sc.code}</code></div>
                                </div>
                              </DropdownMenuItem>
                            ))}
                            {dbChartSlugs.length > 0 && (
                              <>
                                <DropdownMenuSeparator />
                                <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">Dynamic Charts</div>
                                {dbChartSlugs.map((ch) => {
                                  const code = `[chart:${ch.slug}]`;
                                  return (
                                    <DropdownMenuItem
                                      key={code}
                                      onClick={() => {
                                        const quill = quillRef.current?.getEditor();
                                        if (quill) {
                                          const range = quill.getSelection();
                                          const idx = range ? range.index : quill.getLength();
                                          quill.insertText(idx, code);
                                          quill.setSelection(idx + code.length, 0);
                                        } else {
                                          setContent((prev) => prev + code);
                                        }
                                      }}
                                    >
                                      <div>
                                        <div className="font-medium">{ch.title}</div>
                                        <div className="text-xs text-muted-foreground"><code className="text-xs">{code}</code></div>
                                      </div>
                                    </DropdownMenuItem>
                                  );
                                })}
                              </>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <Button type="button" variant="outline" size="sm" onClick={() => setShowTableDialog(true)} className="gap-2">
                          <Grid3X3 className="w-3.5 h-3.5" />
                          Insert Table
                        </Button>
                        <Button type="button" variant="outline" size="sm" onClick={() => setShowImageAltDialog(true)} className="gap-2">
                          <ImageIcon className="w-3.5 h-3.5" />
                          Image Alt Text
                        </Button>
                      </div>
                    </div>
                    <ReactQuill
                      ref={quillRef}
                      theme="snow"
                      value={content}
                      onChange={setContent}
                      modules={quillModules}
                      formats={quillFormats}
                      className="bg-background [&_.ql-editor]:max-h-[450px] [&_.ql-editor]:overflow-y-auto"
                      style={{ minHeight: "300px" }}
                    />
                    <div className="flex justify-between items-center text-sm text-muted-foreground mt-1">
                      <span>Paste tables from Excel, Google Sheets, or HTML directly into the editor</span>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {readingTime} min read</span>
                        <span className="font-medium">{wordCount} words</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* ── TAB 2: SETTINGS ───────────────────── */}
                <TabsContent value="settings" className="space-y-5 mt-4">
                  {/* Slug */}
                  <div>
                    <Label htmlFor="slug">URL Slug *</Label>
                    <Input
                      id="slug"
                      value={formData.slug}
                      onChange={(e) => {
                        setSlugManuallyEdited(true);
                        setFormData({ ...formData, slug: e.target.value });
                      }}
                      required
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Auto-generated from title. Edit to customize.
                    </p>
                  </div>

                  {/* Categories */}
                  <div>
                    <Label>Categories</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-between mt-1">
                          <span>{formData.category.length > 0 ? `${formData.category.length} selected` : "Select categories"}</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-4 bg-popover" align="start">
                        <div className="space-y-3">
                          <div className="space-y-2 max-h-60 overflow-y-auto">
                            {blogCategories.map((cat) => (
                              <div key={cat} className="flex items-center gap-2">
                                <Checkbox
                                  id={`cat-${cat}`}
                                  checked={formData.category.includes(cat)}
                                  onCheckedChange={() => handleCategoryToggle(cat)}
                                />
                                <Label htmlFor={`cat-${cat}`} className="cursor-pointer text-sm">{cat}</Label>
                              </div>
                            ))}
                          </div>
                          <Button type="button" variant="outline" size="sm" onClick={() => setShowCategoryDialog(true)} className="w-full gap-1">
                            <Plus className="w-3 h-3" /> Add Category
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                    {formData.category.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {formData.category.map((cat) => (
                          <Badge key={cat} variant="secondary" className="gap-1">
                            {cat}
                            <button type="button" onClick={() => handleCategoryToggle(cat)}><X className="w-3 h-3" /></button>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div>
                    <Label htmlFor="tags">Tags</Label>
                    <Input
                      id="tags"
                      value={formData.tags}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                      placeholder="tag1, tag2, tag3"
                    />
                  </div>

                  {/* Excerpt */}
                  <div>
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      placeholder="Short summary (auto-generated if empty)"
                      rows={3}
                    />
                  </div>

                  <hr className="border-border" />

                  {/* Featured Image */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <ImageIcon className="w-4 h-4" /> Featured Image
                    </h3>
                    <input type="file" ref={bannerInputRef} onChange={handleBannerUpload} accept="image/*" className="hidden" />
                    <div className="space-y-3">
                      {formData.banner_url && (
                        <div className="relative">
                          <img src={formData.banner_url} alt={formData.banner_alt || ""} className="w-full max-h-48 object-cover rounded-lg border border-border" />
                          <Button type="button" variant="destructive" size="sm" className="absolute top-2 right-2"
                            onClick={() => setFormData({ ...formData, banner_url: "" })}>
                            <X className="w-4 h-4" />
                          </Button>
                          {bannerCompressInfo && (
                            <p className="text-xs text-muted-foreground mt-1">
                              Compressed: {formatFileSize(bannerCompressInfo.original)} → {formatFileSize(bannerCompressInfo.compressed)}
                            </p>
                          )}
                        </div>
                      )}
                      {!formData.banner_url && (
                        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                          <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                          <Button type="button" variant="outline" onClick={() => bannerInputRef.current?.click()} disabled={uploadingBanner} className="gap-2">
                            <Upload className="w-4 h-4" />
                            {uploadingBanner ? "Compressing..." : "Upload Image"}
                          </Button>
                        </div>
                      )}
                      <Input
                        placeholder="Or paste image URL"
                        value={formData.banner_url}
                        onChange={(e) => setFormData({ ...formData, banner_url: e.target.value })}
                      />
                      <div>
                        <Label htmlFor="banner_alt" className="flex items-center gap-1">
                          Image Alt Text <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="banner_alt"
                          value={formData.banner_alt}
                          onChange={(e) => setFormData({ ...formData, banner_alt: e.target.value })}
                          placeholder="Describe the image for SEO and accessibility"
                          className={formData.banner_url && !formData.banner_alt ? "border-destructive" : ""}
                        />
                        {formData.banner_url && !formData.banner_alt && (
                          <p className="text-xs text-destructive mt-1">Alt text is required for published posts</p>
                        )}
                      </div>

                      {/* Social Share Preview */}
                      {formData.banner_url && (
                        <div className="space-y-2">
                          <Label className="text-xs text-muted-foreground uppercase tracking-wider">Social Share Preview</Label>
                          <div className="border border-border rounded-lg overflow-hidden max-w-md">
                            <div className="aspect-[1200/630] bg-muted overflow-hidden">
                              <img src={formData.og_image_url || formData.banner_url} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-3 space-y-1 bg-muted/30">
                              <p className="text-xs text-muted-foreground uppercase">{window.location.host}</p>
                              <p className="text-sm font-semibold line-clamp-1">{formData.og_title || formData.meta_title || formData.title || "Post Title"}</p>
                              <p className="text-xs text-muted-foreground line-clamp-2">{formData.og_description || formData.meta_description || formData.excerpt || "Description"}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <hr className="border-border" />

                  {/* Post Status */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label>Post Status</Label>
                      <Select value={postStatus} onValueChange={(v) => setPostStatus(v as PostStatus)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="published">Published</SelectItem>
                          <SelectItem value="scheduled">Scheduled</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="published_at">
                        {postStatus === "scheduled" ? "Scheduled Date *" : "Publish Date"}
                      </Label>
                      <div className="flex items-center gap-2 mt-1">
                        <Input
                          id="published_at"
                          type="datetime-local"
                          value={formData.published_at ? new Date(formData.published_at).toISOString().slice(0, 16) : ""}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              published_at: e.target.value ? new Date(e.target.value).toISOString() : "",
                            })
                          }
                          required={postStatus === "scheduled"}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              published_at: new Date().toISOString(),
                            })
                          }
                        >
                          Now
                        </Button>
                      </div>
                    </div>
                    <div>
                      <Label>Timezone</Label>
                      <Select value={formData.scheduled_timezone} onValueChange={(v) => setFormData({ ...formData, scheduled_timezone: v })}>
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {COMMON_TIMEZONES.map(tz => (
                            <SelectItem key={tz} value={tz}>{tz.replace(/_/g, " ")}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  {postStatus === "scheduled" && (
                    <p className="text-xs text-muted-foreground">
                      Post will need to be manually published at the scheduled time. Timezone: {formData.scheduled_timezone}
                    </p>
                  )}
                </TabsContent>

                {/* ── TAB 3: STRUCTURE ──────────────────── */}
                <TabsContent value="structure" className="space-y-6 mt-4">
                  {/* ── Table of Contents ── */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <List className="w-4 h-4" /> Table of Contents
                    </h3>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="toc_toggle">Enable Table of Contents</Label>
                      <Switch
                        id="toc_toggle"
                        checked={formData.toc_enabled}
                        onCheckedChange={(checked) => setFormData({ ...formData, toc_enabled: checked })}
                      />
                    </div>
                    {formData.toc_enabled && headings.length > 0 && (
                      <div className="border border-border rounded-lg p-4 bg-muted/30 space-y-1">
                        <p className="text-xs font-medium text-muted-foreground mb-2">Preview ({headings.length} headings)</p>
                        {headings.map((h, i) => (
                          <div key={i} className={`text-sm ${h.level === 3 ? "ml-4" : ""}`}>
                            <span className="text-muted-foreground mr-1">#{h.id}</span>
                            {h.text}
                          </div>
                        ))}
                      </div>
                    )}
                    {formData.toc_enabled && headings.length === 0 && (
                      <p className="text-sm text-muted-foreground">No H2/H3 headings found in content.</p>
                    )}
                  </div>

                  <hr className="border-border" />

                  {/* ── Related Posts ── */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <BookOpen className="w-4 h-4" /> Related Posts
                    </h3>
                    {formData.related_post_ids.length > 0 && (
                      <div className="space-y-2">
                        <Label className="text-xs text-muted-foreground">Selected ({formData.related_post_ids.length})</Label>
                        {formData.related_post_ids.map(id => {
                          const rp = posts.find(p => p.id === id);
                          return rp ? (
                            <div key={id} className="flex items-center justify-between p-2 rounded border border-border">
                              <span className="text-sm truncate">{rp.title}</span>
                              <Button type="button" variant="ghost" size="sm" onClick={() =>
                                setFormData(prev => ({ ...prev, related_post_ids: prev.related_post_ids.filter(rid => rid !== id) }))
                              }>
                                <X className="w-3 h-3" />
                              </Button>
                            </div>
                          ) : null;
                        })}
                      </div>
                    )}
                    <div>
                      <Input
                        placeholder="Search posts to add..."
                        value={relatedSearchTerm}
                        onChange={(e) => setRelatedSearchTerm(e.target.value)}
                      />
                      {filteredRelatedPosts.length > 0 && (
                        <div className="mt-2 border border-border rounded-lg max-h-40 overflow-y-auto">
                          {filteredRelatedPosts.slice(0, 5).map(p => (
                            <button key={p.id} type="button" className="w-full text-left px-3 py-2 hover:bg-muted text-sm border-b border-border last:border-0"
                              onClick={() => {
                                setFormData(prev => ({ ...prev, related_post_ids: [...prev.related_post_ids, p.id] }));
                                setRelatedSearchTerm("");
                              }}>
                              {p.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    {suggestedRelatedPosts.length > 0 && (
                      <div className="space-y-2">
                        <Label className="text-xs text-muted-foreground">Suggested (by category/tags)</Label>
                        {suggestedRelatedPosts.map(p => (
                          <div key={p.id} className="flex items-center justify-between p-2 rounded border border-border bg-muted/20">
                            <span className="text-sm truncate">{p.title}</span>
                            <Button type="button" variant="outline" size="sm" onClick={() =>
                              setFormData(prev => ({ ...prev, related_post_ids: [...prev.related_post_ids, p.id] }))
                            }>
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <hr className="border-border" />

                  {/* ── Accessibility Checks ── */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <Shield className="w-4 h-4" /> Accessibility Checks
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-start gap-2 p-3 rounded-lg border border-border">
                        <div className={`w-2.5 h-2.5 rounded-full shrink-0 mt-1 ${headingWarnings.length === 0 ? (headings.length > 0 ? "bg-green-500" : "bg-muted-foreground") : "bg-red-500"}`} />
                        <div className="text-sm">
                          <span className="font-medium">Heading Hierarchy:</span>{" "}
                          {headings.length === 0 ? "No headings" : headingWarnings.length === 0 ? "Valid structure" : (
                            <div className="space-y-1 mt-1">
                              {headingWarnings.map((w, i) => (
                                <p key={i} className="text-destructive text-xs flex items-center gap-1">
                                  <AlertTriangle className="w-3 h-3" /> {w}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-3 rounded-lg border border-border">
                        <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${totalImages === 0 ? "bg-muted-foreground" : missingAltCount === 0 ? "bg-green-500" : "bg-red-500"}`} />
                        <div className="text-sm">
                          <span className="font-medium">Alt Text:</span>{" "}
                          {totalImages === 0 ? "No images" : missingAltCount === 0 ? `All ${totalImages} images have alt text` : (
                            <span className="text-destructive">{missingAltCount} of {totalImages} missing alt text</span>
                          )}
                        </div>
                        {missingAltCount > 0 && <AlertTriangle className="w-4 h-4 text-destructive shrink-0" />}
                      </div>
                      <div className="flex items-center gap-2 p-3 rounded-lg border border-border">
                        <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${wordCount === 0 ? "bg-muted-foreground" : fleschLevel.color}`} />
                        <div className="text-sm">
                          <span className="font-medium">Reading Ease:</span>{" "}
                          {wordCount === 0 ? "No content" : `${fleschScore} — ${fleschLevel.label}`}
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="border-border" />

                  {/* ── Reading Experience ── */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Reading Experience
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg border border-border text-center">
                        <p className="text-2xl font-bold">{wordCount.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">Words</p>
                      </div>
                      <div className="p-4 rounded-lg border border-border text-center">
                        <p className="text-2xl font-bold">{readingTime}</p>
                        <p className="text-xs text-muted-foreground">Min Read</p>
                      </div>
                    </div>
                  </div>

                  <hr className="border-border" />

                  {/* ── Readiness Score ── */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" /> Readiness Score
                    </h3>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <Progress value={readinessScore} className="h-3" />
                      </div>
                      <span className={`text-lg font-bold ${readinessColor}`}>{readinessScore}%</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {readinessChecks.map((check, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <div className={`w-2 h-2 rounded-full ${check.pass ? "bg-green-500" : "bg-red-500"}`} />
                          <span className={check.pass ? "text-muted-foreground" : ""}>{check.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* ── TAB 4: SEO ────────────────────────── */}
                <TabsContent value="seo" className="space-y-6 mt-4">
                  {/* ── Section 1: Meta Tags ── */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Meta Tags</h3>
                    <div>
                      <div className="flex justify-between items-center">
                        <Label htmlFor="meta_title">Meta Title</Label>
                        <div className="flex items-center gap-2">
                          <div className={`w-2.5 h-2.5 rounded-full ${getDotColor(formData.meta_title.length, 50, 100, 120)}`} />
                          <span className={`text-xs ${getCharCountColor(formData.meta_title.length, 50, 100)}`}>
                            {formData.meta_title.length}/100
                          </span>
                        </div>
                      </div>
                      <Input
                        id="meta_title"
                        value={formData.meta_title}
                        onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
                        placeholder="SEO title (defaults to post title if empty)"
                        maxLength={150}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between items-center">
                        <Label htmlFor="meta_description">Meta Description</Label>
                        <div className="flex items-center gap-2">
                          <div className={`w-2.5 h-2.5 rounded-full ${getDotColor(formData.meta_description.length, 150, 400, 410)}`} />
                          <span className={`text-xs ${getCharCountColor(formData.meta_description.length, 150, 400)}`}>
                            {formData.meta_description.length}/400
                          </span>
                        </div>
                      </div>
                      <Textarea
                        id="meta_description"
                        value={formData.meta_description}
                        onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                        placeholder="Brief description for search engines"
                        maxLength={400}
                        rows={3}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <hr className="border-border" />

                  {/* ── Canonical & Indexing ── */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <Link2 className="w-4 h-4" /> Canonical & Indexing
                    </h3>
                    <div>
                      <Label htmlFor="canonical_url">Canonical URL</Label>
                      <Input
                        id="canonical_url"
                        value={formData.canonical_url}
                        onChange={(e) => setFormData({ ...formData, canonical_url: e.target.value })}
                        placeholder="https://... (leave empty to use default post URL)"
                        className="mt-1"
                      />
                      <p className="text-xs text-muted-foreground mt-1">Set if this content is republished from another source</p>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg border border-border">
                      <div>
                        <Label>Noindex</Label>
                        <p className="text-xs text-muted-foreground">Prevent search engines from indexing this page</p>
                      </div>
                      <Switch
                        checked={formData.noindex}
                        onCheckedChange={(checked) => setFormData({ ...formData, noindex: checked })}
                      />
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg border border-border">
                      <div>
                        <Label>Nofollow</Label>
                        <p className="text-xs text-muted-foreground">Prevent search engines from following links on this page</p>
                      </div>
                      <Switch
                        checked={formData.nofollow}
                        onCheckedChange={(checked) => setFormData({ ...formData, nofollow: checked })}
                      />
                    </div>
                  </div>

                  <hr className="border-border" />

                  {/* ── UTM Parameters ── */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" /> UTM Parameters
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="utm_source">Source</Label>
                        <Input
                          id="utm_source"
                          value={formData.utm_source}
                          onChange={(e) => setFormData({ ...formData, utm_source: e.target.value })}
                          placeholder="e.g. newsletter"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="utm_medium">Medium</Label>
                        <Input
                          id="utm_medium"
                          value={formData.utm_medium}
                          onChange={(e) => setFormData({ ...formData, utm_medium: e.target.value })}
                          placeholder="e.g. email"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="utm_campaign">Campaign</Label>
                        <Input
                          id="utm_campaign"
                          value={formData.utm_campaign}
                          onChange={(e) => setFormData({ ...formData, utm_campaign: e.target.value })}
                          placeholder="e.g. spring-launch"
                          className="mt-1"
                        />
                      </div>
                    </div>
                    {(formData.utm_source || formData.utm_medium || formData.utm_campaign) && (
                      <div className="p-3 bg-muted/30 rounded-lg border border-border">
                        <Label className="text-xs text-muted-foreground">Tracking URL Preview</Label>
                        <p className="text-xs font-mono break-all mt-1">{utmPreviewUrl}</p>
                      </div>
                    )}
                  </div>

                  <hr className="border-border" />

                  {/* ── Section 2: Open Graph ── */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <Globe className="w-4 h-4" /> Open Graph
                    </h3>
                    <div>
                      <Label htmlFor="og_title">OG Title</Label>
                      <Input
                        id="og_title"
                        value={formData.og_title}
                        onChange={(e) => setFormData({ ...formData, og_title: e.target.value })}
                        placeholder="Defaults to meta title"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="og_description">OG Description</Label>
                      <Textarea
                        id="og_description"
                        value={formData.og_description}
                        onChange={(e) => setFormData({ ...formData, og_description: e.target.value })}
                        placeholder="Defaults to meta description"
                        rows={2}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label>OG Image</Label>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center gap-3">
                          <input type="file" ref={ogImageInputRef} onChange={async (e) => {
                            if (!e.target.files || !e.target.files[0]) return;
                            const url = await uploadImage(e.target.files[0]);
                            if (url) setFormData((p) => ({ ...p, og_image_url: url }));
                          }} accept="image/*" className="hidden" />
                          <Button type="button" variant="outline" size="sm" onClick={() => ogImageInputRef.current?.click()} className="gap-2">
                            <Image className="w-4 h-4" /> Upload OG Image
                          </Button>
                          <Badge variant="outline" className="text-xs">1200×630px recommended</Badge>
                        </div>
                        <Input
                          placeholder="Or paste OG image URL"
                          value={formData.og_image_url}
                          onChange={(e) => setFormData({ ...formData, og_image_url: e.target.value })}
                        />
                        {formData.og_image_url && (
                          <div className="flex items-center gap-2">
                            <img src={formData.og_image_url} alt="OG Preview" className="h-16 w-28 object-cover rounded border border-border" />
                            <Button type="button" variant="ghost" size="sm" onClick={() => setFormData({ ...formData, og_image_url: "" })}>
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <Label>Twitter Card Type</Label>
                      <Select value={formData.twitter_card_type} onValueChange={(v) => setFormData({ ...formData, twitter_card_type: v })}>
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="summary">Summary</SelectItem>
                          <SelectItem value="summary_large_image">Summary Large Image</SelectItem>
                          <SelectItem value="player">Player</SelectItem>
                          <SelectItem value="app">App</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <hr className="border-border" />

                  {/* ── Section 3: Schema Markup ── */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <FileText className="w-4 h-4" /> Schema Markup
                    </h3>
                    <div>
                      <Label>Article Type</Label>
                      <Select value={formData.schema_type} onValueChange={(v) => setFormData({ ...formData, schema_type: v })}>
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="BlogPosting">BlogPosting</SelectItem>
                          <SelectItem value="NewsArticle">NewsArticle</SelectItem>
                          <SelectItem value="TechArticle">TechArticle</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="author_name">Author Name</Label>
                        <Input
                          id="author_name"
                          value={formData.author_name}
                          onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
                          placeholder="Author full name for schema"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="author_url">Author Profile URL</Label>
                        <Input
                          id="author_url"
                          value={formData.author_url}
                          onChange={(e) => setFormData({ ...formData, author_url: e.target.value })}
                          placeholder="https://..."
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-xs text-muted-foreground">Published Date</Label>
                        <p className="text-sm mt-1">{formData.published_at ? new Date(formData.published_at).toLocaleDateString() : "Not set"}</p>
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">Publisher</Label>
                        <p className="text-sm mt-1">CollabAI</p>
                      </div>
                    </div>
                  </div>

                  <hr className="border-border" />

                  {/* ── Section 4: SEO Health ── */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <Search className="w-4 h-4" /> SEO Health
                    </h3>
                    <div>
                      <Label htmlFor="focus_keyword">Focus Keyword</Label>
                      <Input
                        id="focus_keyword"
                        value={formData.focus_keyword}
                        onChange={(e) => setFormData({ ...formData, focus_keyword: e.target.value })}
                        placeholder="Primary keyword for this post"
                        className="mt-1"
                      />
                    </div>

                    {/* Health indicators */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {/* Keyword Density */}
                      {(() => {
                        const density = getKeywordDensity(content, formData.focus_keyword);
                        const color = !formData.focus_keyword ? "bg-muted-foreground" :
                          density >= 1 && density <= 3 ? "bg-green-500" :
                          density > 5 ? "bg-red-500" : "bg-yellow-500";
                        return (
                          <div className="flex items-center gap-2 p-3 rounded-lg border border-border">
                            <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${color}`} />
                            <div className="text-sm">
                              <span className="font-medium">Keyword Density:</span>{" "}
                              {formData.focus_keyword ? `${density.toFixed(1)}%` : "No keyword set"}
                              <span className="text-xs text-muted-foreground ml-1">(target: 1-3%)</span>
                            </div>
                          </div>
                        );
                      })()}

                      {/* Meta Title Length */}
                      <div className="flex items-center gap-2 p-3 rounded-lg border border-border">
                        <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${getDotColor(formData.meta_title.length, 50, 100, 120)}`} />
                        <div className="text-sm">
                          <span className="font-medium">Meta Title:</span>{" "}
                          {formData.meta_title.length} chars
                          <span className="text-xs text-muted-foreground ml-1">(target: 50-100)</span>
                        </div>
                      </div>

                      {/* Meta Description Length */}
                      <div className="flex items-center gap-2 p-3 rounded-lg border border-border">
                        <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${getDotColor(formData.meta_description.length, 150, 400, 410)}`} />
                        <div className="text-sm">
                          <span className="font-medium">Meta Description:</span>{" "}
                          {formData.meta_description.length} chars
                          <span className="text-xs text-muted-foreground ml-1">(target: 150-400)</span>
                        </div>
                      </div>

                      {/* Alt Text Validation */}
                      {(() => {
                        const missing = countImagesWithoutAlt(content);
                        const total = (content.match(/<img[^>]*>/gi) || []).length;
                        const color = total === 0 ? "bg-muted-foreground" : missing === 0 ? "bg-green-500" : "bg-red-500";
                        return (
                          <div className="flex items-center gap-2 p-3 rounded-lg border border-border">
                            <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${color}`} />
                            <div className="text-sm">
                              <span className="font-medium">Alt Text:</span>{" "}
                              {total === 0 ? "No images" : missing === 0 ? `All ${total} images have alt text` : (
                                <span className="text-destructive">{missing} of {total} images missing alt text</span>
                              )}
                            </div>
                            {missing > 0 && <AlertTriangle className="w-4 h-4 text-destructive shrink-0" />}
                          </div>
                        );
                      })()}

                      {/* Internal Links */}
                      {(() => {
                        const count = countInternalLinks(content);
                        const color = count === 0 ? "bg-yellow-500" : "bg-green-500";
                        return (
                          <div className="flex items-center gap-2 p-3 rounded-lg border border-border">
                            <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${color}`} />
                            <div className="text-sm">
                              <Link2 className="w-3.5 h-3.5 inline mr-1" />
                              <span className="font-medium">Internal Links:</span>{" "}
                              {count} {count === 1 ? "link" : "links"} found
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  </div>

                  <hr className="border-border" />

                  {/* ── Section 5: SERP Preview ── */}
                  <div>
                    <Label className="text-base mb-2 block">Search Preview</Label>
                    <div className="border border-border rounded-lg p-4 bg-background space-y-1">
                      <p className="text-[#1a0dab] text-lg font-medium leading-snug truncate">
                        {formData.meta_title || formData.title || "Page Title"}
                      </p>
                      <p className="text-[#006621] text-sm truncate">
                        {formData.canonical_url || `${window.location.origin}/blog/${formData.slug || "your-post-slug"}`}
                      </p>
                      <p className="text-sm text-[#545454] line-clamp-2">
                        {formData.meta_description || formData.excerpt || "Your meta description will appear here..."}
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Submit buttons */}
              <div className="flex gap-2 pt-4 border-t border-border">
                <Button type="submit" className="gap-2">
                  <Check className="w-4 h-4" />
                  {editingId ? "Update" : "Create"}
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

      {/* ─── SEARCH / FILTER / SORT BAR ─────────────────── */}
      {!isEditing && (
        <Card>
          <CardContent className="pt-4 pb-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search posts..."
                  value={adminSearchQuery}
                  onChange={(e) => setAdminSearchQuery(e.target.value)}
                  className="pl-9 h-9"
                />
              </div>
              <Select value={adminStatusFilter} onValueChange={(v: any) => setAdminStatusFilter(v)}>
                <SelectTrigger className="w-[130px] h-9">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                </SelectContent>
              </Select>
              <Select value={adminCategoryFilter} onValueChange={setAdminCategoryFilter}>
                <SelectTrigger className="w-[150px] h-9">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {blogCategories.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={adminSortBy} onValueChange={(v: any) => setAdminSortBy(v)}>
                <SelectTrigger className="w-[150px] h-9">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date-desc">Newest first</SelectItem>
                  <SelectItem value="date-asc">Oldest first</SelectItem>
                  <SelectItem value="title-asc">Title A-Z</SelectItem>
                  <SelectItem value="title-desc">Title Z-A</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      )}

      {/* ─── POST LIST ──────────────────────────────────── */}
      {bulkMode && (
        <div className="flex items-center gap-2">
          <Checkbox
            checked={selectedPostIds.length === filteredAdminPosts.length && filteredAdminPosts.length > 0}
            onCheckedChange={handleBulkSelectAll}
          />
          <Label className="text-sm cursor-pointer" onClick={handleBulkSelectAll}>Select All</Label>
        </div>
      )}
      <div className="grid gap-4">
        {filteredAdminPosts.map((post) => (
          <Card key={post.id}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-3 flex-1">
                  {bulkMode && (
                    <Checkbox
                      checked={selectedPostIds.includes(post.id)}
                      onCheckedChange={() => handleBulkToggle(post.id)}
                      className="mt-1"
                    />
                  )}
                  <div className="flex-1">
                    {post.category && (
                      <div className="flex flex-wrap gap-1 mb-2">
                        {post.category.split(",").map((cat, idx) => (
                          <span key={idx} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                            {cat.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold">{post.title}</h3>
                      {post.is_published ? (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Published</span>
                      ) : post.published_at && new Date(post.published_at) > new Date() ? (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                          Scheduled{(post as any).scheduled_timezone && (post as any).scheduled_timezone !== "UTC" ? ` (${(post as any).scheduled_timezone})` : ""}
                        </span>
                      ) : (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">Draft</span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      {post.published_at && (
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.published_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                        </div>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt || ""}
                    </p>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button size="sm" variant="outline" onClick={() => handlePreviewBlog(post.slug)} title="Preview">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleViewBlog(post.slug)} title="View">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="sm" variant="outline" title="More">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleShare(post.slug)}>Copy Link</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleSocialShare("twitter", post.slug, post.title)}>Share on Twitter</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleSocialShare("facebook", post.slug, post.title)}>Share on Facebook</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleSocialShare("linkedin", post.slug, post.title)}>Share on LinkedIn</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => handleExportHtml(post)}>
                        <Download className="w-4 h-4 mr-2" /> Export HTML
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleExportMarkdown(post)}>
                        <Download className="w-4 h-4 mr-2" /> Export Markdown
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => handleDuplicate(post)}>
                        <Copy className="w-4 h-4 mr-2" /> Duplicate
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(post)}
                    disabled={loadingContentId === post.id}
                  >
                    {loadingContentId === post.id ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <Pencil className="w-4 h-4" />
                    )}
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDeleteClick(post.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Preview Dialog with Device Toggle */}
      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent className="max-w-6xl h-[90vh] flex flex-col p-0">
          <DialogHeader className="px-6 pt-6 pb-4 border-b">
            <div className="flex items-center justify-between">
              <DialogTitle>Blog Preview</DialogTitle>
              <div className="flex items-center gap-1 border border-border rounded-lg p-1">
                <Button
                  type="button"
                  variant={previewDevice === "desktop" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setPreviewDevice("desktop")}
                  className="gap-1"
                >
                  <Monitor className="w-4 h-4" /> Desktop
                </Button>
                <Button
                  type="button"
                  variant={previewDevice === "mobile" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setPreviewDevice("mobile")}
                  className="gap-1"
                >
                  <Smartphone className="w-4 h-4" /> Mobile
                </Button>
              </div>
            </div>
          </DialogHeader>
          <div className="flex-1 overflow-hidden p-4 flex justify-center">
            {previewSlug && (
              <iframe
                src={`/blog/${previewSlug}`}
                className="h-full border-0 rounded transition-all duration-300"
                style={{ width: previewDevice === "desktop" ? "100%" : "375px" }}
                title="Blog Preview"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>This action cannot be undone. This will permanently delete the blog post.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Revision History Dialog */}
      <Dialog open={showRevisionDialog} onOpenChange={setShowRevisionDialog}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <History className="w-5 h-5" /> Revision History
            </DialogTitle>
            <DialogDescription>Restore a previous version of this post</DialogDescription>
          </DialogHeader>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {loadingRevisions && <p className="text-sm text-muted-foreground">Loading...</p>}
            {!loadingRevisions && revisions.length === 0 && (
              <p className="text-sm text-muted-foreground">No revisions saved yet. Revisions are created each time you save.</p>
            )}
            {revisions.map((rev) => (
              <div key={rev.id} className="flex items-center justify-between p-3 rounded-lg border border-border">
                <div>
                  <p className="text-sm font-medium">Revision #{rev.revision_number}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(rev.created_at).toLocaleString()} — "{rev.title}"
                  </p>
                </div>
                <Button size="sm" variant="outline" onClick={() => handleRestoreRevision(rev)} className="gap-1">
                  <RefreshCw className="w-3.5 h-3.5" /> Restore
                </Button>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* SEO Checklist Before Publish */}
      <Dialog open={showSeoChecklist} onOpenChange={(open) => { if (!open) { setShowSeoChecklist(false); setPendingSubmitEvent(null); } }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-yellow-600">
              <AlertTriangle className="w-5 h-5" /> SEO Checklist
            </DialogTitle>
            <DialogDescription>
              Your readiness score is {readinessScore}% (below 80%). Review the items below before publishing.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {readinessChecks.map((check, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <div className={`w-2.5 h-2.5 rounded-full ${check.pass ? "bg-green-500" : "bg-red-500"}`} />
                <span className={check.pass ? "text-muted-foreground" : "font-medium"}>{check.label}</span>
              </div>
            ))}
          </div>
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => { setShowSeoChecklist(false); setPendingSubmitEvent(null); }}>
              Go Back to Fix
            </Button>
            <Button onClick={handleForcePublish}>
              Publish Anyway
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Bulk Category/Tags Dialog */}
      <Dialog open={showBulkCategoryDialog} onOpenChange={setShowBulkCategoryDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Category & Tags</DialogTitle>
            <DialogDescription>Apply to {selectedPostIds.length} selected posts</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Categories</Label>
              <div className="space-y-2 max-h-40 overflow-y-auto mt-2">
                {blogCategories.map((cat) => (
                  <div key={cat} className="flex items-center gap-2">
                    <Checkbox
                      checked={bulkCategory.includes(cat)}
                      onCheckedChange={() => {
                        setBulkCategory(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
                      }}
                    />
                    <Label className="text-sm">{cat}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Label>Tags (comma-separated)</Label>
              <Input value={bulkTags} onChange={(e) => setBulkTags(e.target.value)} placeholder="tag1, tag2" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowBulkCategoryDialog(false)}>Cancel</Button>
            <Button onClick={handleBulkUpdateCategory}>Apply</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Bulk Meta Description Dialog */}
      <Dialog open={showBulkMetaDialog} onOpenChange={setShowBulkMetaDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Meta Descriptions</DialogTitle>
            <DialogDescription>Set the same meta description for {selectedPostIds.length} selected posts</DialogDescription>
          </DialogHeader>
          <Textarea
            value={bulkMetaDescription}
            onChange={(e) => setBulkMetaDescription(e.target.value)}
            placeholder="Enter meta description..."
            rows={4}
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowBulkMetaDialog(false)}>Cancel</Button>
            <Button onClick={handleBulkUpdateMeta}>Apply</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Table Editor Dialog */}
      <TableEditorDialog
        open={showTableDialog}
        onOpenChange={setShowTableDialog}
        onInsert={handleTableInsert}
      />

      {/* Inline Image Alt Text Manager Dialog */}
      <Dialog open={showImageAltDialog} onOpenChange={setShowImageAltDialog}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Manage Image Alt Text</DialogTitle>
            <DialogDescription>Edit alt text for all images embedded in the post content. Images without alt text are flagged.</DialogDescription>
          </DialogHeader>
          <ImageAltTextManager content={content} onUpdate={(updated) => { setContent(updated); setShowImageAltDialog(false); }} />
        </DialogContent>
      </Dialog>
      </>}
    </div>
  );
};

export default BlogManager;
