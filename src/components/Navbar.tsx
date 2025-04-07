
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo container with fixed height but allowing larger logo */}
        <div className="h-16 flex items-center overflow-hidden">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-800 hover:text-cta-accent transition-colors">Home</Link>
          <Link to="/about" className="text-gray-800 hover:text-cta-accent transition-colors">About Us</Link>
          <Link to="/services" className="text-gray-800 hover:text-cta-accent transition-colors">Services</Link>
          <Link to="/case-studies" className="text-gray-800 hover:text-cta-accent transition-colors">Case Studies</Link>
          <Link to="/contact" className="text-white px-5 py-2 rounded-md bg-cta-primary hover:bg-cta-secondary transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4 p-6">
            <Link to="/" className="text-gray-800 hover:text-cta-accent transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-cta-accent transition-colors" onClick={toggleMenu}>About Us</Link>
            <Link to="/services" className="text-gray-800 hover:text-cta-accent transition-colors" onClick={toggleMenu}>Services</Link>
            <Link to="/case-studies" className="text-gray-800 hover:text-cta-accent transition-colors" onClick={toggleMenu}>Case Studies</Link>
            <Link to="/contact" className="bg-cta-primary text-white px-4 py-2 rounded-md text-center hover:bg-cta-secondary transition-colors" onClick={toggleMenu}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
