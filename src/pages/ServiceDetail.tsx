
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BrainCircuit, Code, Boxes, LineChart, Megaphone, Users, ShieldCheck, ShoppingBag, GanttChart } from 'lucide-react';
import ContactCTA from '../components/ContactCTA';
import ImageLoader from '../components/ImageLoader';
import { Button } from '@/components/ui/button';

// Define all service details in a single place for easy maintenance
const serviceDetails = {
  'performance-marketing': {
    title: 'Performance Marketing',
    icon: <LineChart className="h-12 w-12 text-cta-accent" />,
    description: 'Data-driven campaigns that deliver measurable ROI across search, social, and display advertising.',
    longDescription: `
      Our performance marketing services focus on maximizing your ROI through data-driven strategies 
      across multiple channels. We combine advanced analytics, audience targeting, and continuous 
      optimization to ensure your marketing budget generates real business results.
    `,
    features: [
      'Search Engine Marketing (SEM) & PPC',
      'Programmatic Display Advertising',
      'Social Media Advertising',
      'Performance Analytics & Attribution',
      'Conversion Rate Optimization',
      'Email Marketing Automation'
    ],
    benefits: [
      'Measurable ROI tracking for every campaign',
      'Granular audience targeting based on behavior and intent',
      'Cross-channel optimization for integrated performance',
      'Continuous A/B testing to improve conversion rates',
      'Real-time campaign adjustments based on performance data'
    ],
    image: '/images/services/performance-marketing.jpg',
    fallbackImage: 'https://via.placeholder.com/800x500?text=Performance+Marketing'
  },
  'social-media-management': {
    title: 'Social Media Management',
    icon: <Megaphone className="h-12 w-12 text-cta-accent" />,
    description: 'Strategic content creation, community engagement, and social media advertising.',
    longDescription: `
      Our social media management services help brands build meaningful connections with their audience 
      through strategic content, consistent engagement, and data-driven campaigns that align with your 
      broader business objectives.
    `,
    features: [
      'Social Media Strategy Development',
      'Content Creation & Calendar Management',
      'Community Management & Engagement',
      'Social Listening & Reputation Management',
      'Influencer Partnership Coordination',
      'Performance Tracking & Reporting'
    ],
    benefits: [
      'Consistent brand voice across all platforms',
      'Increased audience engagement and community building',
      'Real-time reputation management and crisis prevention',
      'Integration with broader marketing initiatives',
      'Data-driven content optimization based on audience response'
    ],
    image: '/images/services/social-media.jpg',
    fallbackImage: 'https://via.placeholder.com/800x500?text=Social+Media+Management'
  },
  'influencer-marketing': {
    title: 'Influencer Marketing',
    icon: <Users className="h-12 w-12 text-cta-accent" />,
    description: 'Connecting brands with the right influencers to reach and engage target audiences authentically.',
    longDescription: `
      Our influencer marketing services connect your brand with authentic voices that resonate with your 
      target audience. We identify, vet, and collaborate with influencers who align with your brand values 
      to create genuine connections and drive measurable results.
    `,
    features: [
      'Influencer Identification & Vetting',
      'Campaign Strategy & Creative Direction',
      'Contract Negotiation & Management',
      'Content Approval & Quality Control',
      'Performance Tracking & ROI Measurement',
      'Cross-platform Campaign Coordination'
    ],
    benefits: [
      'Access to pre-vetted influencer network across niches',
      'Authentic brand integration that resonates with audiences',
      'Expanded reach to highly engaged communities',
      'Detailed performance analytics beyond basic metrics',
      'Multi-format content creation for cross-channel use'
    ],
    image: '/images/services/influencer-marketing.jpg',
    fallbackImage: 'https://via.placeholder.com/800x500?text=Influencer+Marketing'
  },
  'ai-development': {
    title: 'AI Development',
    icon: <BrainCircuit className="h-12 w-12 text-cta-accent" />,
    description: 'Custom AI solutions that transform business operations and create new opportunities.',
    longDescription: `
      Our AI development services help businesses leverage the power of artificial intelligence to 
      automate processes, gain valuable insights, and create innovative solutions that drive competitive 
      advantage in an increasingly complex digital landscape.
    `,
    features: [
      'Custom Machine Learning Solutions',
      'Natural Language Processing (NLP)',
      'Computer Vision Applications',
      'Predictive Analytics Systems',
      'AI-powered Chatbots & Virtual Assistants',
      'Intelligent Process Automation'
    ],
    benefits: [
      'Accelerated business processes through automation',
      'Enhanced decision-making with predictive insights',
      'Improved customer experiences through personalization',
      'Reduced operational costs through efficiency gains',
      'Innovative capabilities that differentiate your business'
    ],
    image: '/images/services/ai-development.jpg',
    fallbackImage: 'https://via.placeholder.com/800x500?text=AI+Development'
  },
  'software-development': {
    title: 'Software Development',
    icon: <Code className="h-12 w-12 text-cta-accent" />,
    description: 'Custom web and mobile applications tailored to your specific business needs.',
    longDescription: `
      Our software development services deliver custom applications that address your unique business 
      challenges. We combine technical expertise with strategic thinking to create scalable, secure, 
      and user-friendly solutions that drive efficiency and growth.
    `,
    features: [
      'Custom Web Application Development',
      'Mobile App Development (iOS & Android)',
      'UI/UX Design & Prototyping',
      'Progressive Web Applications (PWAs)',
      'Enterprise Software Integration',
      'QA Testing & Deployment'
    ],
    benefits: [
      'Tailored solutions aligned with your business processes',
      'Scalable architecture that grows with your business',
      'User-centered design that enhances adoption rates',
      'Secure, reliable applications built to industry standards',
      'Ongoing support and evolution of your digital assets'
    ],
    image: '/images/services/software-development.jpg',
    fallbackImage: 'https://via.placeholder.com/800x500?text=Software+Development'
  },
  'blockchain-solutions': {
    title: 'Blockchain Solutions',
    icon: <Boxes className="h-12 w-12 text-cta-accent" />,
    description: 'Innovative blockchain applications for security, transparency, and efficiency.',
    longDescription: `
      Our blockchain development services help businesses implement decentralized solutions that 
      enhance security, transparency, and efficiency. We design and deploy custom blockchain 
      applications that solve real business problems and create new opportunities.
    `,
    features: [
      'Smart Contract Development',
      'Decentralized Application (DApp) Creation',
      'Tokenization Solutions',
      'Private Blockchain Implementation',
      'Blockchain Integration with Existing Systems',
      'Consensus Mechanism Design'
    ],
    benefits: [
      'Enhanced security through decentralized architecture',
      'Improved transparency and auditability of transactions',
      'Reduced intermediaries and operational costs',
      'Tamper-proof record-keeping for sensitive data',
      'New business models enabled by blockchain technology'
    ],
    image: '/images/services/blockchain-solutions.jpg',
    fallbackImage: 'https://via.placeholder.com/800x500?text=Blockchain+Solutions'
  },
  'cybersecurity': {
    title: 'Cybersecurity',
    icon: <ShieldCheck className="h-12 w-12 text-cta-accent" />,
    description: 'Comprehensive protection against cyber threats with security assessments and data protection.',
    longDescription: `
      Our cybersecurity services provide robust protection for your digital assets and sensitive data. 
      We implement comprehensive security measures that safeguard your business from evolving threats 
      while enabling secure digital transformation and growth.
    `,
    features: [
      'Security Assessment & Vulnerability Testing',
      'Data Protection Strategy Implementation',
      'Security Architecture Design',
      'Incident Response Planning',
      'Security Awareness Training',
      'Compliance & Regulatory Advisory'
    ],
    benefits: [
      'Proactive threat detection and prevention',
      'Reduced risk of data breaches and financial loss',
      'Enhanced compliance with industry regulations',
      'Improved resilience against emerging threats',
      'Secure foundation for digital innovation'
    ],
    image: '/images/services/cybersecurity.jpg',
    fallbackImage: 'https://via.placeholder.com/800x500?text=Cybersecurity'
  },
  'ecommerce-solutions': {
    title: 'E-commerce Solutions',
    icon: <ShoppingBag className="h-12 w-12 text-cta-accent" />,
    description: 'End-to-end e-commerce platforms with seamless user experiences and AI-driven recommendations.',
    longDescription: `
      Our e-commerce solutions help businesses create powerful online selling experiences that drive 
      conversion and customer loyalty. We design and implement comprehensive e-commerce ecosystems 
      that integrate seamlessly with your business operations.
    `,
    features: [
      'Custom E-commerce Platform Development',
      'Marketplace Creation & Integration',
      'Payment Gateway Implementation',
      'Inventory & Order Management Systems',
      'AI-Powered Product Recommendations',
      'Mobile Commerce Optimization'
    ],
    benefits: [
      'Seamless shopping experiences that increase conversion',
      'Personalized customer journeys that drive loyalty',
      'Streamlined operations through automation',
      'Valuable customer insights through advanced analytics',
      'Scalable solutions that grow with your business'
    ],
    image: '/images/services/ecommerce-solutions.jpg',
    fallbackImage: 'https://via.placeholder.com/800x500?text=Ecommerce+Solutions'
  },
  'project-management': {
    title: 'Project Management',
    icon: <GanttChart className="h-12 w-12 text-cta-accent" />,
    description: 'Efficient project delivery with agile methodologies and clear communication.',
    longDescription: `
      Our project management services ensure the successful delivery of complex digital initiatives. 
      We apply proven methodologies and tools to keep your projects on track, within budget, and 
      aligned with your business objectives.
    `,
    features: [
      'Agile & Waterfall Project Management',
      'Resource Allocation & Scheduling',
      'Risk Management & Mitigation',
      'Stakeholder Communication',
      'Progress Tracking & Reporting',
      'Quality Assurance & Testing Coordination'
    ],
    benefits: [
      'On-time, on-budget project delivery',
      'Transparent communication throughout the process',
      'Efficient resource utilization and cost control',
      'Early identification and mitigation of risks',
      'Continuous alignment with business objectives'
    ],
    image: '/images/services/project-management.jpg',
    fallbackImage: 'https://via.placeholder.com/800x500?text=Project+Management'
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId as keyof typeof serviceDetails];

  if (!service) {
    return (
      <div className="pt-32 pb-16 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-display font-bold mb-4">Service Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">The service you're looking for doesn't exist or has been moved.</p>
        <Button asChild>
          <Link to="/services" className="inline-flex items-center">
            <ArrowLeft className="mr-2" size={16} />
            Back to Services
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-cta-dark via-cta-primary to-cta-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Link to="/services" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Back to Services
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/10 rounded-lg">
                {service.icon}
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                {service.title}
              </h1>
            </div>
            <p className="text-xl text-white/90">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageLoader 
                src={service.image}
                alt={service.title}
                fallbackSrc={service.fallbackImage}
                className="rounded-xl shadow-lg w-full object-cover aspect-video"
              />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">
                <span className="gradient-text">Overview</span>
              </h2>
              <p className="text-lg text-gray-600 whitespace-pre-line">
                {service.longDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">
                <span className="gradient-text">Key Features</span>
              </h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-cta-accent/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-3 h-3 bg-cta-accent rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">
                <span className="gradient-text">Benefits</span>
              </h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-cta-secondary/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-3 h-3 bg-cta-secondary rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-cta-primary/10 to-cta-accent/10 p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Ready to transform your business with {service.title}?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our {service.title.toLowerCase()} services can address your specific challenges and help you achieve your business goals.
            </p>
            <Button asChild className="bg-gradient-to-r from-cta-secondary to-cta-accent text-white border-none hover:scale-105 transition-transform">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  );
};

export default ServiceDetail;
