import { useState } from "react";

import { ImageOff } from "lucide-react";

import "./SafeImage.css";

function ImageContent({
  src,
  alt,
  fallback,
  loading,
  fetchPriority,
  objectFit,
  objectPosition,
}) {
  const [status, setStatus] = useState(src ? "loading" : "empty");

  const showFallback = status === "empty" || status === "error";

  return (
    <div className={`safe-image__content safe-image__content--${status}`}>
      {showFallback ? (
        <div className="safe-image__fallback">
          {fallback ?? (
            <div
              className="safe-image__default-fallback"
              role="img"
              aria-label={alt}
            >
              <ImageOff size={40} aria-hidden="true" />

              <span>Imagem indisponível</span>
            </div>
          )}
        </div>
      ) : (
        <>
          {status === "loading" && (
            <div className="safe-image__skeleton" aria-hidden="true" />
          )}

          <img
            className="safe-image__img"
            src={src}
            alt={alt}
            loading={loading}
            fetchPriority={fetchPriority}
            decoding="async"
            onLoad={() => setStatus("loaded")}
            onError={() => setStatus("error")}
            style={{
              objectFit,
              objectPosition,
            }}
          />
        </>
      )}
    </div>
  );
}

function SafeImage({
  src,
  alt = "",
  fallback,
  className = "",
  loading = "lazy",
  fetchPriority = "auto",
  objectFit = "cover",
  objectPosition = "center",
}) {
  const imageSource = typeof src === "string" ? src.trim() : "";

  return (
    <div className={`safe-image ${className}`.trim()}>
      <ImageContent
        key={imageSource}
        src={imageSource}
        alt={alt}
        fallback={fallback}
        loading={loading}
        fetchPriority={fetchPriority}
        objectFit={objectFit}
        objectPosition={objectPosition}
      />
    </div>
  );
}

export default SafeImage;
