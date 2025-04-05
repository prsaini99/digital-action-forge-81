
import { useState, useEffect } from 'react';

interface ImageLoaderProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
}

const ImageLoader = ({ src, alt, fallbackSrc, className }: ImageLoaderProps) => {
  const [imgSrc, setImgSrc] = useState<string>('');
  const [error, setError] = useState(false);

  useEffect(() => {
    // Normalize the source path
    if (src) {
      // Remove any leading 'public/' from the path if present
      const normalizedSrc = src.startsWith('public/') ? src.substring(7) : src;
      setImgSrc(normalizedSrc);
    }
  }, [src]);

  const handleError = () => {
    if (!error && fallbackSrc) {
      setImgSrc(fallbackSrc);
      setError(true);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  );
};

export default ImageLoader;
