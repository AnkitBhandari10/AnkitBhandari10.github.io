import { useState } from "react";

// Shows an image from /public/images. Until the file exists, shows a soft
// placeholder so the layout stays the same.
export const ImageSlot = ({ src, alt, hint, className = "" }) => {
  const [missing, setMissing] = useState(false);

  if (missing) {
    return (
      <div
        className={`grid place-items-center bg-[var(--bubble)]/60 border border-dashed border-[var(--navy)]/30 text-[var(--muted)] text-xs text-center p-3 ${className}`}
        role="img"
        aria-label={alt}
      >
        {hint}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setMissing(true)}
      className={`object-cover ${className}`}
    />
  );
};
