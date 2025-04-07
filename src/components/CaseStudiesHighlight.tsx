
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

// Use the first 3 case studies for the highlight section
const highlightedCaseStudies = caseStudies.slice(0, 3);

const CaseStudiesHighlight = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">Featured Case Studies</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Explore how we've helped leading brands achieve exceptional results through our innovative strategies.
            </p>
          </div>
          <Link to="/case-studies" className="hidden md:flex items-center text-cta-primary hover:text-cta-accent transition-colors font-medium">
            View All Case Studies
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlightedCaseStudies.map((study) => (
            <Link to={`/case-studies/${study.id}`} key={study.id} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.src = `https://via.placeholder.com/600x400?text=${study.title.replace(' ', '+')}`;
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-cta-primary/90 text-white text-sm px-3 py-1 rounded-full">
                    {study.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-cta-accent transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {study.description}
                  </p>
                  <div className="flex items-center text-cta-primary group-hover:text-cta-accent transition-colors font-medium">
                    Read Case Study
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link to="/case-studies" className="inline-flex items-center text-cta-primary hover:text-cta-accent transition-colors font-medium">
            View All Case Studies
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesHighlight;
