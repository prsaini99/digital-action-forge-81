
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo = ({ className = '', variant = 'dark' }: LogoProps) => {
  return (
    <Link to="/" className={`block ${className}`}>
      <img 
        src="/lovable-uploads/ccf98407-84db-4be9-9a46-d989de048de5.png" 
        alt="Call to Action Logo" 
        className={`h-16 ${variant === 'light' ? 'brightness-100' : 'brightness-100'}`} 
      />
    </Link>
  );
};

export default Logo;
