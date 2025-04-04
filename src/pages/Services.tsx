
import { ArrowRight, BrainCircuit, Code, Boxes, LineChart, Megaphone, Users, ShieldCheck, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactCTA from '../components/ContactCTA';

const marketingServices = [
  {
    title: 'Performance Marketing',
    description: 'Data-driven campaigns that deliver measurable ROI across search, social, and display advertising.',
    icon: <LineChart className="h-8 w-8 text-cta-accent" />,
    link: '#'
  },
  {
    title: 'Social Media Management',
    description: 'Strategic content creation, community engagement, and social media advertising.',
    icon: <Megaphone className="h-8 w-8 text-cta-accent" />,
    link: '#'
  },
  {
    title: 'Influencer Marketing',
    description: 'Connecting brands with the right influencers to reach and engage target audiences authentically.',
    icon: <Users className="h-8 w-8 text-cta-accent" />,
    link: '#'
  }
];

const techServices = [
  {
    title: 'AI Development',
    description: 'Custom AI solutions that transform business operations and create new opportunities.',
    icon: <BrainCircuit className="h-8 w-8 text-cta-accent" />,
    link: '#'
  },
  {
    title: 'Software Development',
    description: 'Custom web and mobile applications tailored to your specific business needs.',
    icon: <Code className="h-8 w-8 text-cta-accent" />,
    link: '#'
  },
  {
    title: 'Blockchain Solutions',
    description: 'Innovative blockchain applications for security, transparency, and efficiency.',
    icon: <Boxes className="h-8 w-8 text-cta-accent" />,
    link: '#'
  },
  {
    title: 'Cybersecurity',
    description: 'Comprehensive protection against cyber threats with security assessments and data protection.',
    icon: <ShieldCheck className="h-8 w-8 text-cta-accent" />,
    link: '#'
  },
  {
    title: 'E-commerce Solutions',
    description: 'End-to-end e-commerce platforms with seamless user experiences and AI-driven recommendations.',
    icon: <ShoppingBag className="h-8 w-8 text-cta-accent" />,
    link: '#'
  }
];

const Services = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-cta-dark via-cta-primary to-cta-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/90">
              Comprehensive digital solutions that combine marketing expertise with cutting-edge technology to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">What We Do</span>
            </h2>
            <p className="text-lg text-gray-600">
              Our comprehensive suite of services spans digital marketing, advanced technology development, and creative production. We blend these disciplines to create integrated solutions that drive meaningful business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://via.placeholder.com/600x400?text=Our+Services" 
                alt="Our services" 
                className="rounded-xl shadow-lg w-full" 
              />
            </div>
            <div>
              <h3 className="text-2xl font-display font-semibold mb-4">
                Integrated Solutions for the Digital Age
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                At Call to Action, we don't believe in siloed approaches. We integrate marketing creativity with technological innovation to create cohesive digital strategies that address the entire customer journey.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're looking to increase brand awareness, generate high-quality leads, develop custom software, or implement cutting-edge AI solutions, our team has the expertise to help you achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">
              <span className="gradient-text">Digital Marketing Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Strategic and data-driven marketing services that help brands connect with their target audience and drive meaningful engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {marketingServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="mb-4 p-3 bg-gray-50 rounded-lg inline-block">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link to={service.link} className="inline-flex items-center text-cta-primary hover:text-cta-accent transition-colors font-medium">
                  Learn More
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">
              <span className="gradient-text">Technology Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Cutting-edge technological solutions that drive innovation and create competitive advantages for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="mb-4 p-3 bg-gray-50 rounded-lg inline-block">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link to={service.link} className="inline-flex items-center text-cta-primary hover:text-cta-accent transition-colors font-medium">
                  Learn More
                  <ArrowRight size={16} className="ml-2" />
                </Link>
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

export default Services;
