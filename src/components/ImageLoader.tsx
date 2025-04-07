
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reset states when src changes
    setLoading(true);
    setError(false);
    
    // Normalize the source path
    if (src) {
      // Check if it's a remote URL (for placeholder images)
      if (src.startsWith('http')) {
        setImgSrc(src);
      }
      // Special handling for lovable-uploads paths
      else if (src.includes('lovable-uploads')) {
        setImgSrc(src);
      } else {
        // Remove any leading 'public/' from the path if present
        const normalizedSrc = src.startsWith('public/') ? src.substring(7) : src;
        setImgSrc(normalizedSrc);
      }
    }
  }, [src]);

  const handleError = () => {
    setLoading(false);
    if (!error && fallbackSrc) {
      console.log(`Image failed to load: ${imgSrc}, using fallback`);
      setImgSrc(fallbackSrc);
      setError(true);
    } else if (!fallbackSrc) {
      // If no fallback is provided, create a simple text-based placeholder
      console.log(`Image failed to load: ${imgSrc}, no fallback provided`);
      setError(true);
    }
  };

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && (
        <div className={`bg-gray-200 animate-pulse ${className}`} style={{ minHeight: '80px' }}>
          <div className="w-full h-full flex items-center justify-center text-gray-500">Loading...</div>
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={`${className} ${loading ? 'hidden' : ''}`}
        onError={handleError}
        onLoad={handleLoad}
        loading="lazy"
      />
      {error && !fallbackSrc && (
        <div className={`bg-gray-200 flex items-center justify-center ${className}`} style={{ minHeight: '80px' }}>
          <span className="text-gray-500 text-sm">{alt || 'Image unavailable'}</span>
        </div>
      )}
    </>
  );
};

export default ImageLoader;
