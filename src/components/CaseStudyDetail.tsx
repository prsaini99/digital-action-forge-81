
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactCTA from './ContactCTA';
import ImageLoader from './ImageLoader';
import { createPlaceholderImage } from '../utils/imageValidator';

export interface CaseStudyData {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  category: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  gallery?: string[];
  stats?: {
    label: string;
    value: string;
    prefix?: string;
    suffix?: string;
  }[];
}

interface CaseStudyDetailProps {
  caseStudy: CaseStudyData;
}

const CaseStudyDetail = ({ caseStudy }: CaseStudyDetailProps) => {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-cta-dark via-cta-primary to-cta-secondary text-white">
        <div className="container-custom">
          <Link to="/case-studies" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Case Studies
          </Link>
          
          <div className="max-w-3xl">
            <div className="mb-4 inline-block bg-white/20 text-white text-sm px-3 py-1 rounded-full">
              {caseStudy.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-white/90">
              {caseStudy.description}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <ImageLoader 
              src={caseStudy.image} 
              alt={caseStudy.title} 
              fallbackSrc={createPlaceholderImage(1200, 600, caseStudy.title)}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      {caseStudy.stats && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudy.stats.map((stat, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center">
                  <p className="text-gray-500 mb-2">{stat.label}</p>
                  <p className="text-4xl font-display font-bold text-cta-primary">
                    {stat.prefix && <span>{stat.prefix}</span>}
                    {stat.value}
                    {stat.suffix && <span>{stat.suffix}</span>}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Challenge & Solution */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">The Challenge</h2>
              <div className="prose prose-lg max-w-none">
                <p>{caseStudy.challenge}</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">Our Solution</h2>
              <div className="prose prose-lg max-w-none">
                <p>{caseStudy.solution}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold mb-10 text-center">The Results</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start">
                  <div className="bg-cta-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-lg">{result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section className="py-16 bg-cta-primary text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <svg className="w-12 h-12 mx-auto mb-6 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179z" />
              </svg>
              <blockquote className="text-2xl font-display italic mb-8">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold">{caseStudy.testimonial.author}</p>
                <p className="text-white/80">{caseStudy.testimonial.position}</p>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Contact CTA */}
      <ContactCTA />
    </main>
  );
};

export default CaseStudyDetail;
