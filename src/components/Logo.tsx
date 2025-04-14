
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo = ({ className = '', variant = 'dark' }: LogoProps) => {
  // Use a reliable placeholder from Unsplash
  const logoSrc = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=150&fit=crop&auto=format';

  return (
    <Link to="/" className={`block ${className}`}>
      <div className="flex items-center">
        <img 
          src={logoSrc}
          alt="Call to Action Logo" 
          className={`h-12 ${variant === 'light' ? 'brightness-100' : 'brightness-100'}`} 
        />
        <span className="ml-2 font-display font-bold text-xl">Call to Action</span>
      </div>
    </Link>
  );
};

export default Logo;
