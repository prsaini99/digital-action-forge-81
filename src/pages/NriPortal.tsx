
import { ArrowRight, Globe, TrendingUp, Building, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import NriPortalNav from '../components/NriPortalNav';
import ContactCTA from '../components/ContactCTA';

const NriPortal = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-cta-dark via-cta-primary to-cta-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
              Sobha NRI Property Portal
            </h1>
            <p className="text-xl text-white/90">
              Exclusive investment opportunities in premium Kochi & Thrissur properties for Non-Resident Indians worldwide.
            </p>
          </div>
        </div>
      </section>

      <NriPortalNav />

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">Invest in Your Kerala Roots</span>
            </h2>
            <p className="text-lg text-gray-600">
              Sobha Ltd. presents exclusive premium residential projects in Kochi and Thrissur, 
              designed specifically with NRI investors in mind. Combining world-class quality with 
              strong cultural connections to Kerala.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="mb-4 p-3 bg-cta-accent/10 rounded-lg inline-block">
                <Globe className="w-8 h-8 text-cta-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                Global NRI Focus
              </h3>
              <p className="text-gray-600">
                Specialized offerings for the Malayali diaspora across UAE, Saudi Arabia, Kuwait, Qatar, USA, UK, and beyond.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="mb-4 p-3 bg-cta-accent/10 rounded-lg inline-block">
                <TrendingUp className="w-8 h-8 text-cta-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                Investment Potential
              </h3>
              <p className="text-gray-600">
                High rental yields, strong appreciation, and the security of owning property in your homeland.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="mb-4 p-3 bg-cta-accent/10 rounded-lg inline-block">
                <Building className="w-8 h-8 text-cta-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                Premium Locations
              </h3>
              <p className="text-gray-600">
                Strategic properties in Kochi's urban center and Thrissur's cultural hub with modern amenities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="mb-4 p-3 bg-cta-accent/10 rounded-lg inline-block">
                <Users className="w-8 h-8 text-cta-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                Hassle-Free Ownership
              </h3>
              <p className="text-gray-600">
                End-to-end support for NRIs including property management, rental assistance, and legal guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Markets */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">Key NRI Markets</span>
            </h2>
            <p className="text-lg text-gray-600">
              Our research identifies strong demand from NRIs across these global markets.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {["UAE", "Saudi Arabia", "Kuwait", "Qatar", "Oman", "Bahrain", "USA", "Canada", "UK", "Australia & Singapore"].map((market, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-cta-accent/5 transition-colors">
                <h3 className="font-semibold">{market}</h3>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/nri-portal/research" className="inline-flex items-center text-cta-primary hover:text-cta-accent transition-colors font-medium">
              View Detailed Market Research
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick CTA for Strategy */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-cta-primary/10 to-cta-accent/10 p-8 md:p-12 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Our Lead Generation Strategy
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Learn about our comprehensive approach to reach and engage NRI audiences across global markets through Meta Ads and Programmatic Advertising.
                </p>
                <Link to="/nri-portal/strategy" className="inline-flex items-center bg-cta-primary text-white px-6 py-3 rounded-md font-medium hover:bg-cta-accent transition-colors">
                  View Strategy
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://via.placeholder.com/500x300?text=Lead+Generation+Strategy" 
                  alt="Lead Generation Strategy" 
                  className="rounded-xl shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  );
};

export default NriPortal;
