
/**
 * Utility to validate image URLs and provide fallbacks
 */

export const validateImageUrl = (url: string, fallback: string): string => {
  if (!url || url.startsWith('https://via.placeholder.com')) {
    return fallback;
  }
  
  // Check if the URL starts with http(s) or /
  if (!url.startsWith('http') && !url.startsWith('/')) {
    return `/${url}`;
  }
  
  return url;
};

export const getImageFallback = (category: string, name: string): string => {
  const formattedName = name.replace(/\s+/g, '+');
  
  switch(category) {
    case 'logo':
      return `https://via.placeholder.com/150x80?text=${formattedName}`;
    case 'team':
      return `https://via.placeholder.com/300x300?text=${formattedName}`;
    case 'case-study':
      return `https://via.placeholder.com/800x500?text=${formattedName}`;
    case 'about':
      return `https://via.placeholder.com/600x400?text=${formattedName}`;
    default:
      return `https://via.placeholder.com/400x300?text=${formattedName}`;
  }
};
