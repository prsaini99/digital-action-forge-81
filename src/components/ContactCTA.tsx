
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="bg-gradient-to-br from-cta-primary to-cta-accent rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Partner with Call to Action to create innovative, data-driven solutions that drive real business results.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-white text-cta-primary hover:bg-cta-highlight hover:text-cta-dark px-8 py-4 rounded-md font-medium transition-all duration-300 hover:shadow-lg"
          >
            Get in Touch
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
