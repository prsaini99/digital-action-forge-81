
import { useState } from 'react';

interface ImageLoaderProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
}

const ImageLoader = ({ src, alt, fallbackSrc, className }: ImageLoaderProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

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
