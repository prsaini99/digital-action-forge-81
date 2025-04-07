
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-cta-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Logo variant="light" className="mb-6" />
            <p className="text-gray-300 mb-4">
              Delivering impactful results through innovative, data-driven, and creative strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-cta-highlight transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-cta-highlight transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-cta-highlight transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-cta-highlight transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-cta-highlight transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-cta-highlight transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-cta-highlight transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-cta-highlight transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-cta-highlight transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-cta-highlight transition-colors">Performance Marketing</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-cta-highlight transition-colors">AI Development</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-cta-highlight transition-colors">Blockchain Solutions</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-cta-highlight transition-colors">Social Media Management</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-cta-highlight transition-colors">E-commerce Solutions</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-cta-highlight" />
                <div className="flex flex-col">
                  <span className="text-gray-300">B-2105, Park Regis, Business Bay, Dubai, UAE.</span>
                  <span className="text-gray-300 mt-2">1002, Tower-3, Spring Grove Tower, Lokhandwala Township, Kandivali (E), Mumbai-400101.</span>
                </div>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-cta-highlight" />
                <span className="text-gray-300">+91 8744092526</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-cta-highlight" />
                <span className="text-gray-300">info@calltoaction.co.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Call To Action. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
