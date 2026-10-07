export interface CompressOptions {
  maxWidth?: number;
  quality?: number;
  format?: "jpeg" | "webp" | "png";
}

export interface CompressResult {
  blob: Blob;
  originalSize: number;
  compressedSize: number;
}

export const compressImage = (
  file: File,
  opts: CompressOptions = {}
): Promise<CompressResult> => {
  const { maxWidth = 2000, quality = 0.8, format = "jpeg" } = opts;
  const mimeType = `image/${format}`;

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, maxWidth / img.width);
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      const ctx = canvas.getContext("2d");
      if (!ctx) return reject(new Error("Canvas context unavailable"));
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(
        (blob) => {
          if (!blob) return reject(new Error("Compression failed"));
          resolve({
            blob,
            originalSize: file.size,
            compressedSize: blob.size,
          });
        },
        mimeType,
        quality
      );
    };
    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = URL.createObjectURL(file);
  });
};

export interface ImageVariants {
  original: Blob;
  medium: Blob;
  thumbnail: Blob;
}

export const generateVariants = async (
  file: File,
  quality = 0.8,
  format: "jpeg" | "webp" | "png" = "jpeg"
): Promise<ImageVariants> => {
  const original = (await compressImage(file, { maxWidth: 2000, quality, format })).blob;
  const medium = (await compressImage(file, { maxWidth: 800, quality, format })).blob;
  const thumbnail = (await compressImage(file, { maxWidth: 300, quality, format })).blob;
  return { original, medium, thumbnail };
};

export const convertToWebP = async (
  file: File,
  quality = 0.8
): Promise<CompressResult> => {
  return compressImage(file, { quality, format: "webp" });
};

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
};

export const slugifyFileName = (altText: string, extension: string): string => {
  const slug = altText
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  return `${slug || "image"}.${extension}`;
};
