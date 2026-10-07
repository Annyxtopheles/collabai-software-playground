import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Check } from "lucide-react";
import { toast } from "sonner";

interface ImageEntry {
  src: string;
  alt: string;
}

interface Props {
  content: string;
  onUpdate: (updatedContent: string) => void;
}

function extractImages(html: string): ImageEntry[] {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const imgElements = doc.querySelectorAll("img");
  const images: ImageEntry[] = [];
  imgElements.forEach((img) => {
    images.push({ src: img.getAttribute("src") || "", alt: img.getAttribute("alt") || "" });
  });
  return images;
}

function applyAltTexts(html: string, images: ImageEntry[]): string {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const imgElements = doc.querySelectorAll("img");
  imgElements.forEach((img) => {
    const src = img.getAttribute("src") || "";
    const match = images.find((i) => i.src === src);
    if (match) {
      img.setAttribute("alt", match.alt);
    }
  });
  return doc.body.innerHTML;
}

const ImageAltTextManager = ({ content, onUpdate }: Props) => {
  const extracted = useMemo(() => extractImages(content), [content]);
  const [images, setImages] = useState<ImageEntry[]>(extracted);

  if (images.length === 0) {
    return <p className="text-sm text-muted-foreground py-4">No images found in the post content.</p>;
  }

  const handleChange = (index: number, alt: string) => {
    setImages((prev) => prev.map((img, i) => (i === index ? { ...img, alt } : img)));
  };

  const handleApply = () => {
    const updated = applyAltTexts(content, images);
    onUpdate(updated);
    toast.success("Alt text changes applied successfully");
  };

  const missingCount = images.filter((i) => !i.alt.trim()).length;

  return (
    <div className="space-y-4">
      {missingCount > 0 && (
        <div className="flex items-center gap-2 text-sm text-amber-600 bg-amber-50 dark:bg-amber-950/30 dark:text-amber-400 rounded-md p-2">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          {missingCount} image{missingCount > 1 ? "s" : ""} missing alt text
        </div>
      )}
      {images.map((img, idx) => (
        <div key={idx} className="flex items-start gap-3 p-3 border rounded-lg bg-muted/30">
          <img
            src={img.src}
            alt=""
            className="w-20 h-20 object-cover rounded border shrink-0"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="flex-1 space-y-1">
            <p className="text-xs text-muted-foreground truncate max-w-md" title={img.src}>
              {img.src.split("/").pop()}
            </p>
            <div className="flex items-center gap-2">
              <Input
                value={img.alt}
                onChange={(e) => handleChange(idx, e.target.value)}
                placeholder="Enter descriptive alt text…"
                className="text-sm"
              />
              {img.alt.trim() ? (
                <Check className="w-4 h-4 text-green-500 shrink-0" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
              )}
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-end">
        <Button type="button" onClick={handleApply}>
          Apply Alt Text Changes
        </Button>
      </div>
    </div>
  );
};

export default ImageAltTextManager;
