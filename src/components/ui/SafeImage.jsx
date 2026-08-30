import { useState } from 'react';

const DEFAULT_FALLBACK = '/images/bai-truong.jpg';

export default function SafeImage({
  src,
  alt = '',
  fallbackSrc = DEFAULT_FALLBACK,
  className = '',
  onError,
  ...props
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = (e) => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
    if (onError) {
      onError(e);
    }
  };

  return (
    <img
      alt={alt}
      className={className}
      decoding="async"
      loading="lazy"
      src={imgSrc || fallbackSrc}
      onError={handleError}
      {...props}
    />
  );
}
