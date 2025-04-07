
/**
 * Utility to validate image URLs and provide fallbacks
 */

export const validateImageUrl = (url: string, fallback: string): string => {
  if (!url || url.trim() === '') {
    return fallback;
  }
  
  // If it's already a complete URL (for placeholder images), return as is
  if (url.startsWith('http')) {
    return url;
  }
  
  // Handle lovable-uploads paths specially to ensure they work
  if (url.includes('lovable-uploads')) {
    if (!url.startsWith('/')) {
      return `/${url}`;
    }
    return url;
  }
  
  // Check if the URL starts with http(s) or /
  if (!url.startsWith('http') && !url.startsWith('/')) {
    return `/${url}`;
  }
  
  return url;
};

export const getImageFallback = (category: string, name: string): string => {
  const formattedName = encodeURIComponent(name.replace(/\s+/g, '+'));
  
  switch(category) {
    case 'logo':
      return `https://via.placeholder.com/150x80?text=${formattedName}`;
    case 'team':
      return `https://via.placeholder.com/300x300?text=${formattedName}`;
    case 'case-study':
      return `https://via.placeholder.com/800x500?text=${formattedName}`;
    case 'about':
      return `https://via.placeholder.com/600x400?text=${formattedName}`;
    case 'project':
      return `https://via.placeholder.com/500x300?text=${formattedName}`;
    default:
      return `https://via.placeholder.com/400x300?text=${formattedName}`;
  }
};

/**
 * Create a consistent placeholder image when local images fail to load
 * @param width Image width
 * @param height Image height
 * @param text Placeholder text
 * @returns Placeholder URL
 */
export const createPlaceholderImage = (width: number, height: number, text: string): string => {
  return `https://via.placeholder.com/${width}x${height}?text=${encodeURIComponent(text)}`;
};

/**
 * Sanitize image path for consistent usage
 * @param path Image path
 * @returns Sanitized image path
 */
export const sanitizeImagePath = (path: string): string => {
  if (!path) return '';
  
  // If it's already a complete URL, return as is
  if (path.startsWith('http')) {
    return path;
  }
  
  // Special handling for lovable-uploads to ensure they work correctly
  if (path.includes('lovable-uploads')) {
    if (path.startsWith('public/')) {
      return path.substring(7);
    }
    return path;
  }
  
  // Remove 'public/' prefix if present
  if (path.startsWith('public/')) {
    return path.substring(7);
  }
  
  return path;
};
