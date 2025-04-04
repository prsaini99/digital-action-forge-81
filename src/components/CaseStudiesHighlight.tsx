
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'BMW Mumbai',
    description: 'High-quality lead generation boosting dealership preference through targeted campaigns.',
    image: 'https://via.placeholder.com/600x400?text=BMW+Case+Study',
    category: 'Performance Marketing',
    link: '/case-studies'
  },
  {
    title: 'Aster Pharmacy Dubai',
    description: '15% revenue growth in 4 months via Google Search Ads and strategic digital marketing.',
    image: 'https://via.placeholder.com/600x400?text=Aster+Case+Study',
    category: 'Digital Advertising',
    link: '/case-studies'
  },
  {
    title: 'JBL Harman Campaign',
    description: '#MuteTheWorld campaign promoting noise-cancellation headphones, enhancing brand visibility.',
    image: 'https://via.placeholder.com/600x400?text=JBL+Case+Study',
    category: 'Social Media',
    link: '/case-studies'
  }
];

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
          {caseStudies.map((study, index) => (
            <Link to={study.link} key={index} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
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
