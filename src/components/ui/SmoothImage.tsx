import { useState, type ImgHTMLAttributes, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface SmoothImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "loading"> {
  /** Load immediately (use for above-the-fold hero images). */
  priority?: boolean;
  /** CSS aspect-ratio (e.g. "16 / 9") used to reserve layout space. */
  aspectRatio?: string;
  /** Classes for the wrapper element. */
  wrapperClassName?: string;
}

/**
 * Image with reserved space, a neutral placeholder and a gentle fade-in,
 * so pictures never "pop" into the layout when they finish loading.
 */
const SmoothImage = ({
  priority = false,
  aspectRatio,
  wrapperClassName,
  className,
  onLoad,
  onError,
  style,
  ...imgProps
}: SmoothImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const wrapperStyle: CSSProperties | undefined = aspectRatio
    ? { aspectRatio }
    : undefined;

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        !loaded && "animate-pulse bg-muted",
        failed && "bg-muted",
        wrapperClassName,
      )}
      style={wrapperStyle}
    >
      {!failed && (
        <img
          {...imgProps}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          // @ts-expect-error - fetchpriority is valid HTML, typings lag behind
          fetchpriority={priority ? "high" : undefined}
          onLoad={(e) => {
            setLoaded(true);
            onLoad?.(e);
          }}
          onError={(e) => {
            setFailed(true);
            setLoaded(true);
            onError?.(e);
          }}
          style={style}
          className={cn(
            "transition-opacity duration-500 ease-out motion-reduce:transition-none",
            loaded ? "opacity-100" : "opacity-0",
            className,
          )}
        />
      )}
    </div>
  );
};

export default SmoothImage;
