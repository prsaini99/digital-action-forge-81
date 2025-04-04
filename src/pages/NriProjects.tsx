
import { ArrowRight, Building2, Map, Home, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import NriPortalNav from '../components/NriPortalNav';
import ContactCTA from '../components/ContactCTA';

const projects = [
  {
    id: 1,
    name: "Sobha Marina One",
    location: "Marine Drive, Kochi",
    type: "Luxury Apartments",
    price: "₹1.5 Cr onwards",
    bedrooms: "2, 3 & 4 BHK",
    area: "1250 - 3200 sq.ft.",
    completion: "Ready to Move",
    description: "Waterfront luxury apartments with panoramic views of the Arabian Sea and backwaters. Premium amenities include infinity pool, smart home features, and 24/7 concierge services.",
    highlights: [
      "Premium waterfront location",
      "World-class amenities",
      "High rental potential",
      "RERA approved"
    ],
    image: "https://via.placeholder.com/600x400?text=Sobha+Marina+One"
  },
  {
    id: 2,
    name: "Sobha Palladian",
    location: "Edappally, Kochi",
    type: "Premium Apartments",
    price: "₹95 Lakhs onwards",
    bedrooms: "2 & 3 BHK",
    area: "1100 - 2400 sq.ft.",
    completion: "Dec 2025",
    description: "Contemporary living spaces at a prime location near Lulu Mall and Infopark. Features include multiple recreational areas, children's play zones, and sustainable design elements.",
    highlights: [
      "Strategic location near IT hub",
      "Contemporary architecture",
      "Excellent connectivity",
      "Smart home technology"
    ],
    image: "https://via.placeholder.com/600x400?text=Sobha+Palladian"
  },
  {
    id: 3,
    name: "Sobha Royal Heritage",
    location: "City Center, Thrissur",
    type: "Luxury Villas & Apartments",
    price: "₹1.8 Cr onwards",
    bedrooms: "3 & 4 BHK",
    area: "2200 - 4500 sq.ft.",
    completion: "Ready to Move",
    description: "Exclusive gated community in the cultural capital of Kerala with a blend of traditional Kerala architecture and modern amenities. Private gardens, courtyards, and cultural spaces.",
    highlights: [
      "Blend of tradition and luxury",
      "Spacious private gardens",
      "Close to Thrissur's cultural centers",
      "Family-friendly community"
    ],
    image: "https://via.placeholder.com/600x400?text=Sobha+Royal+Heritage"
  },
  {
    id: 4,
    name: "Sobha Meadows",
    location: "Puzhakkal, Thrissur",
    type: "Premium Villas",
    price: "₹1.2 Cr onwards",
    bedrooms: "3 & 4 BHK",
    area: "2000 - 3800 sq.ft.",
    completion: "June 2026",
    description: "Serene villa community surrounded by lush greenery with generous plot sizes. Features include private pools, expansive landscaped gardens, and proximity to educational institutions.",
    highlights: [
      "Tranquil surroundings",
      "Generous plot sizes",
      "Private pools available",
      "Near international schools"
    ],
    image: "https://via.placeholder.com/600x400?text=Sobha+Meadows"
  }
];

const NriProjects = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-cta-dark via-cta-primary to-cta-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
              Sobha Projects
            </h1>
            <p className="text-xl text-white/90">
              Exclusive premium residential projects in Kochi & Thrissur designed for discerning NRI investors.
            </p>
          </div>
        </div>
      </section>

      <NriPortalNav />

      {/* Projects Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-center">
              <span className="gradient-text">Premium Residential Offerings</span>
            </h2>
            <p className="text-lg text-gray-600 text-center">
              Sobha Limited brings its legacy of excellence to Kerala with these premium residential projects in Kochi and Thrissur,
              designed specifically with NRI requirements in mind.
            </p>
          </div>

          {/* Project Filter */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            <button className="bg-cta-primary text-white px-6 py-2 rounded-full text-sm font-medium">
              All Projects
            </button>
            <button className="bg-white text-gray-600 border border-gray-200 px-6 py-2 rounded-full text-sm font-medium hover:border-cta-primary hover:text-cta-primary transition-colors">
              Kochi
            </button>
            <button className="bg-white text-gray-600 border border-gray-200 px-6 py-2 rounded-full text-sm font-medium hover:border-cta-primary hover:text-cta-primary transition-colors">
              Thrissur
            </button>
            <button className="bg-white text-gray-600 border border-gray-200 px-6 py-2 rounded-full text-sm font-medium hover:border-cta-primary hover:text-cta-primary transition-colors">
              Ready to Move
            </button>
            <button className="bg-white text-gray-600 border border-gray-200 px-6 py-2 rounded-full text-sm font-medium hover:border-cta-primary hover:text-cta-primary transition-colors">
              Under Construction
            </button>
          </div>

          {/* Projects List */}
          <div className="space-y-12">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="lg:col-span-1">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="h-64 lg:h-full w-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-2 p-6 lg:p-8">
                    <h3 className="text-2xl font-display font-bold mb-2 text-gray-800">
                      {project.name}
                    </h3>
                    
                    <div className="flex items-center text-gray-600 mb-4">
                      <Map size={16} className="mr-2" />
                      <span>{project.location}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      {project.description}
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center text-cta-primary mb-1">
                          <Building2 size={16} className="mr-1" />
                          <span className="text-sm font-semibold">Type</span>
                        </div>
                        <p className="text-sm">{project.type}</p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center text-cta-primary mb-1">
                          <Landmark size={16} className="mr-1" />
                          <span className="text-sm font-semibold">Price</span>
                        </div>
                        <p className="text-sm">{project.price}</p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center text-cta-primary mb-1">
                          <Home size={16} className="mr-1" />
                          <span className="text-sm font-semibold">Config</span>
                        </div>
                        <p className="text-sm">{project.bedrooms}</p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center text-cta-primary mb-1">
                          <ArrowRight size={16} className="mr-1" />
                          <span className="text-sm font-semibold">Completion</span>
                        </div>
                        <p className="text-sm">{project.completion}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.highlights.map((highlight, index) => (
                        <span key={index} className="bg-cta-accent/10 text-cta-accent text-xs font-medium px-3 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <button className="bg-gradient-to-r from-cta-primary to-cta-accent text-white px-6 py-3 rounded-md font-medium hover:shadow-lg transition-all">
                        Schedule Virtual Tour
                      </button>
                      <button className="text-cta-primary hover:text-cta-accent transition-colors font-medium flex items-center">
                        Project Details
                        <ArrowRight size={16} className="ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NRI Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-center">
              <span className="gradient-text">NRI Exclusive Benefits</span>
            </h2>
            <p className="text-lg text-gray-600 text-center">
              Sobha offers exclusive advantages for Non-Resident Indians investing in our Kochi and Thrissur properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-cta-accent/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Building2 className="w-7 h-7 text-cta-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hassle-Free Ownership</h3>
              <p className="text-gray-600">
                Dedicated NRI desk to handle all documentation, legal formalities, and regulatory approvals without requiring your presence in India.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-cta-accent/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Landmark className="w-7 h-7 text-cta-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Property Management</h3>
              <p className="text-gray-600">
                End-to-end property management services including maintenance, rental management, and security for absentee owners.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-cta-accent/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Home className="w-7 h-7 text-cta-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">NRI Financing</h3>
              <p className="text-gray-600">
                Special NRI home loan options with preferential rates through our banking partners, including simplified application processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              <span className="gradient-text">Frequently Asked Questions</span>
            </h2>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">What documentation is required for NRIs to purchase property?</h3>
                <p className="text-gray-600">
                  NRIs need a PAN card, passport copy, visa/residence proof, photographs, and NRE/NRO account details. Our NRI desk assists with all documentation requirements.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Can NRIs get home loans for property purchase in India?</h3>
                <p className="text-gray-600">
                  Yes, several Indian banks offer NRI-specific home loans with attractive interest rates. Sobha has partnerships with major financial institutions to simplify the loan process.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">What are the tax implications for NRIs investing in Indian real estate?</h3>
                <p className="text-gray-600">
                  NRIs must pay TDS on property sale, and may be liable for income tax on rental income. Long-term capital gains enjoy favorable tax treatment. Our tax consultants can provide personalized guidance.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">How can I manage my property while living abroad?</h3>
                <p className="text-gray-600">
                  Sobha offers comprehensive property management services for NRI clients, including maintenance, rent collection, tenant management, and regular property inspections.
                </p>
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

export default NriProjects;
