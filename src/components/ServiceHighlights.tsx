
import {
  LineChart, Code, BrainCircuit, Megaphone,
  GanttChart, ShieldCheck, ShoppingBag, Boxes
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Performance Marketing',
    description: 'Data-driven PPC, SEO, and email marketing campaigns that deliver measurable ROI.',
    icon: <LineChart className="w-10 h-10 text-cta-accent" />,
    link: '/services'
  },
  {
    title: 'AI Development',
    description: 'Custom AI solutions that transform business operations and create new opportunities.',
    icon: <BrainCircuit className="w-10 h-10 text-cta-accent" />,
    link: '/services'
  },
  {
    title: 'Blockchain Solutions',
    description: 'Innovative blockchain applications for security, transparency, and efficiency.',
    icon: <Boxes className="w-10 h-10 text-cta-accent" />,
    link: '/services'
  },
  {
    title: 'Social Media Management',
    description: 'Strategic content creation and community engagement that builds brand loyalty.',
    icon: <Megaphone className="w-10 h-10 text-cta-accent" />,
    link: '/services'
  },
  {
    title: 'Software Development',
    description: 'Custom web and mobile applications tailored to your business needs.',
    icon: <Code className="w-10 h-10 text-cta-accent" />,
    link: '/services'
  },
  {
    title: 'Cloud & Cybersecurity',
    description: 'Secure cloud infrastructure with robust protection against cyber threats.',
    icon: <ShieldCheck className="w-10 h-10 text-cta-accent" />,
    link: '/services'
  },
  {
    title: 'E-commerce Solutions',
    description: 'End-to-end e-commerce platforms with seamless user experiences.',
    icon: <ShoppingBag className="w-10 h-10 text-cta-accent" />,
    link: '/services'
  },
  {
    title: 'Project Management',
    description: 'Efficient project delivery with agile methodologies and clear communication.',
    icon: <GanttChart className="w-10 h-10 text-cta-accent" />,
    link: '/services'
  }
];

const ServiceHighlights = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-lg text-gray-600">
            From digital marketing to cutting-edge technology solutions, we offer comprehensive services to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link to={service.link} key={index}>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full border border-gray-100 hover:border-cta-accent/30 group">
                <div className="mb-4 p-3 bg-gray-50 rounded-lg inline-block group-hover:bg-cta-accent/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-cta-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
