
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-cta-dark via-cta-primary to-cta-secondary min-h-screen flex items-center">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 top-1/3 w-64 h-64 bg-cta-highlight/10 rounded-full blur-3xl"></div>
        <div className="absolute left-1/4 bottom-1/4 w-96 h-96 bg-cta-accent/10 rounded-full blur-3xl"></div>
        
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: 'url(/images/pattern-grid.svg)',
               backgroundSize: '30px 30px'
             }}>
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
            Impactful Digital Marketing, <br />
            <span className="text-cta-highlight">Powerful Tech Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Call to Action delivers creative, data-driven strategies powered by cutting-edge technology. 
            From AI development to blockchain solutions, we help brands make meaningful connections.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="cta-button flex items-center">
              Get Started
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link to="/case-studies" className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-md font-medium transition-all duration-300 hover:bg-white/20">
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
