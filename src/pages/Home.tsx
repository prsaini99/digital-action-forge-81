
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import ServiceHighlights from '../components/ServiceHighlights';
import CaseStudiesHighlight from '../components/CaseStudiesHighlight';
import TechnicalAchievements from '../components/TechnicalAchievements';
import TeamSection from '../components/TeamSection';
import ContactCTA from '../components/ContactCTA';
import { ArrowRight, Building, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <Hero />
      <ClientLogos />
      
      {/* NRI Portal Highlight */}
      <section className="section-padding bg-gradient-to-br from-cta-primary/5 to-cta-accent/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img 
                  src="https://via.placeholder.com/600x400?text=Sobha+Properties" 
                  alt="Sobha Properties for NRIs" 
                  className="rounded-xl shadow-lg w-full object-cover aspect-video"
                />
                <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-white p-4 lg:p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-cta-accent/10 p-2 rounded-lg">
                      <MapPin className="w-6 h-6 text-cta-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Featured Locations</p>
                      <p className="font-semibold">Kochi & Thrissur</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">
                <span className="gradient-text">International NRI Opportunities</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Exclusive premium residential investment opportunities in Kochi & Thrissur for Non-Resident Indians. Our comprehensive 
                research and targeted marketing strategy delivers high-quality leads to premium real estate developers.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-cta-accent/10 p-2 rounded-lg mr-3">
                    <Building className="w-5 h-5 text-cta-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Premium Projects</h3>
                    <p className="text-gray-600 text-sm">Luxury apartments and villas in strategic locations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cta-accent/10 p-2 rounded-lg mr-3">
                    <Users className="w-5 h-5 text-cta-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Target Markets</h3>
                    <p className="text-gray-600 text-sm">Gulf, North America, Europe, and Asia-Pacific</p>
                  </div>
                </div>
              </div>
              
              <Link to="/nri-portal" className="inline-flex items-center bg-gradient-to-r from-cta-primary to-cta-accent text-white px-6 py-3 rounded-md font-medium hover:shadow-lg transition-all">
                View NRI Portal
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <ServiceHighlights />
      <CaseStudiesHighlight />
      <TechnicalAchievements />
      <TeamSection />
      <ContactCTA />
    </main>
  );
};

export default Home;
