import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

// Cache to avoid refetching the same keys
const imageCache: Record<string, string> = {};

// Validate that a URL can actually be used at runtime in an <img> tag
const isValidRuntimeUrl = (url: string) =>
  url && !url.startsWith('/src/') && !url.startsWith('/assets/') && !url.startsWith('src/');

export const useSiteImage = (imageKey: string, fallback: string) => {
  const [imageUrl, setImageUrl] = useState<string>(imageCache[imageKey] || fallback);
  const [isLoading, setIsLoading] = useState(!imageCache[imageKey]);

  useEffect(() => {
    if (imageCache[imageKey]) {
      setImageUrl(imageCache[imageKey]);
      setIsLoading(false);
      return;
    }

    const fetchImage = async () => {
      try {
        const { data, error } = await supabase
          .from("site_images")
          .select("image_url")
          .eq("image_key", imageKey)
          .single();

        if (!error && data?.image_url && isValidRuntimeUrl(data.image_url)) {
          imageCache[imageKey] = data.image_url;
          setImageUrl(data.image_url);
        }
      } catch {
        // Keep fallback
      } finally {
        setIsLoading(false);
      }
    };

    fetchImage();
  }, [imageKey, fallback]);

  return { imageUrl, isLoading };
};

// Batch fetch multiple site images at once
export const useSiteImages = (keys: { key: string; fallback: string }[]) => {
  const [images, setImages] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    keys.forEach(({ key, fallback }) => {
      initial[key] = imageCache[key] || fallback;
    });
    return initial;
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const uncachedKeys = keys.filter(({ key }) => !imageCache[key]).map(({ key }) => key);

    if (uncachedKeys.length === 0) {
      setIsLoading(false);
      return;
    }

    const fetchImages = async () => {
      try {
        const { data, error } = await supabase
          .from("site_images")
          .select("image_key, image_url")
          .in("image_key", uncachedKeys);

        if (!error && data) {
          const updated: Record<string, string> = { ...images };
          data.forEach((item) => {
            if (isValidRuntimeUrl(item.image_url)) {
              imageCache[item.image_key] = item.image_url;
              updated[item.image_key] = item.image_url;
            }
          });
          setImages(updated);
        }
      } catch {
        // Keep fallbacks
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [JSON.stringify(keys.map(k => k.key))]);

  return { images, isLoading };
};
