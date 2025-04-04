
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactCTA from '../components/ContactCTA';

const caseStudies = [
  {
    title: 'BMW Mumbai',
    description: 'High-quality lead generation boosting dealership preference through strategic digital campaigns.',
    image: 'https://via.placeholder.com/800x500?text=BMW+Case+Study',
    category: 'Performance Marketing',
    results: [
      'Increased qualified leads by 45%',
      'Improved dealership preference metrics',
      'Reduced cost per acquisition by 30%'
    ],
    link: '#'
  },
  {
    title: 'Aster Pharmacy Dubai',
    description: '15% revenue growth in 4 months via Google Search Ads and strategic digital marketing.',
    image: 'https://via.placeholder.com/800x500?text=Aster+Case+Study',
    category: 'Digital Advertising',
    results: [
      '15% revenue growth in just 4 months',
      'Improved online visibility in competitive market',
      'Enhanced customer acquisition through optimized campaigns'
    ],
    link: '#'
  },
  {
    title: 'DAMAC Lagoons Dubai',
    description: 'Sold 65% of Phase 1 units in 6 months with targeted ads, influencer marketing, and AI-assisted lead nurturing.',
    image: 'https://via.placeholder.com/800x500?text=DAMAC+Case+Study',
    category: 'Integrated Marketing',
    results: [
      '65% of Phase 1 units sold within 6 months',
      'Effective influencer partnerships increasing visibility',
      'AI-driven lead nurturing improving conversion rates'
    ],
    link: '#'
  },
  {
    title: 'Urban Oasis by Missoni',
    description: '75% pre-completion sales, extensive luxury branding, and international investor outreach.',
    image: 'https://via.placeholder.com/800x500?text=Urban+Oasis+Case+Study',
    category: 'Luxury Marketing',
    results: [
      '75% pre-completion sales achieved',
      'Successful luxury branding campaign',
      'Effective international investor outreach'
    ],
    link: '#'
  },
  {
    title: 'JBL Harman Campaign',
    description: '#MuteTheWorld campaign promoting noise-cancellation headphones, enhancing brand visibility.',
    image: 'https://via.placeholder.com/800x500?text=JBL+Case+Study',
    category: 'Social Media',
    results: [
      'Significant increase in brand visibility',
      'Viral hashtag campaign performance',
      'Improved product awareness and sales'
    ],
    link: '#'
  },
  {
    title: 'Kohinoor Basmati Rice',
    description: 'Transformed brand engagement through recipe-driven social media content, significantly increasing follower numbers.',
    image: 'https://via.placeholder.com/800x500?text=Kohinoor+Case+Study',
    category: 'Content Marketing',
    results: [
      'Dramatic increase in social media followers',
      'Higher engagement rates with recipe-driven content',
      'Improved brand perception and customer loyalty'
    ],
    link: '#'
  }
];

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
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
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
                  <h2 className="text-2xl font-display font-semibold mb-3 group-hover:text-cta-accent transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {study.description}
                  </p>
                  
                  <h3 className="font-semibold text-lg mb-2">Key Results:</h3>
                  <ul className="list-disc list-inside text-gray-600 mb-4">
                    {study.results.map((result, i) => (
                      <li key={i}>{result}</li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-between items-center">
                    <Link to={study.link} className="inline-flex items-center text-cta-primary hover:text-cta-accent transition-colors font-medium">
                      Read Full Case Study
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                    <a href="#" className="text-gray-500 hover:text-cta-accent transition-colors">
                      <ExternalLink size={18} />
                    </a>
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
