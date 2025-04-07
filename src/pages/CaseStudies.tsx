
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactCTA from '../components/ContactCTA';
import { caseStudies } from '../data/caseStudies';

const CaseStudies = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-cta-dark via-cta-primary to-cta-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
              Our Case Studies
            </h1>
            <p className="text-xl text-white/90">
              Explore our portfolio of successful client projects and the measurable results we've achieved through innovative digital strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.src = `https://via.placeholder.com/800x500?text=${study.title.replace(' ', '+')}`;
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-cta-primary/90 text-white text-sm px-3 py-1 rounded-full">
                    {study.category}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-display font-semibold mb-3 group-hover:text-cta-accent transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {study.description}
                  </p>
                  
                  <h3 className="font-semibold text-lg mb-2">Key Results:</h3>
                  <ul className="list-disc list-inside text-gray-600 mb-4">
                    {study.results.slice(0, 3).map((result, i) => (
                      <li key={i}>{result}</li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-between items-center">
                    <Link to={`/case-studies/${study.id}`} className="inline-flex items-center text-cta-primary hover:text-cta-accent transition-colors font-medium">
                      Read Full Case Study
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                    <Link to={`/case-studies/${study.id}`} className="text-gray-500 hover:text-cta-accent transition-colors">
                      <ExternalLink size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  );
};

export default CaseStudies;
