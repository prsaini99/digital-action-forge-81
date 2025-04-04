
import { Zap, Target, Lightbulb, Users } from 'lucide-react';
import ContactCTA from '../components/ContactCTA';
import TeamSection from '../components/TeamSection';

const About = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly seek new and better ways to solve problems, embracing emerging technologies and creative approaches.',
      icon: <Lightbulb className="h-8 w-8 text-cta-accent" />
    },
    {
      title: 'Results-Driven',
      description: "We focus on delivering measurable outcomes that directly impact our clients' business goals and objectives.",
      icon: <Target className="h-8 w-8 text-cta-accent" />
    },
    {
      title: 'Client-Centric',
      description: "We prioritize understanding our clients' unique needs and challenges to deliver tailored solutions that exceed expectations.",
      icon: <Users className="h-8 w-8 text-cta-accent" />
    },
    {
      title: 'Adaptability',
      description: 'We embrace change and quickly adjust to evolving market conditions, technological advancements, and client requirements.',
      icon: <Zap className="h-8 w-8 text-cta-accent" />
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-cta-dark via-cta-primary to-cta-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
              About Call To Action
            </h1>
            <p className="text-xl text-white/90 mb-6">
              We're a digital marketing and technology venture focused on delivering impactful results through innovative, data-driven, and creative strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-display font-bold mb-4">
                <span className="gradient-text">Our Mission</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To create innovative, disruptive digital experiences that meaningfully engage consumers and deliver exceptional business results for our clients.
              </p>
              <p className="text-lg text-gray-600">
                We combine cutting-edge technology with creative excellence to transform how brands connect with their audiences in the digital landscape.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold mb-4">
                <span className="gradient-text">Our Vision</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To be the leading digital agency that harnesses the power of technology, data, and creativity to build transformative digital solutions that set new industry standards.
              </p>
              <p className="text-lg text-gray-600">
                We envision a world where brands leverage technology not just for presence, but for meaningful connections that drive real business impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">Our Core Values</span>
            </h2>
            <p className="text-lg text-gray-600">
              These principles guide everything we do and reflect our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="mb-4 p-3 bg-gray-50 rounded-lg inline-block">
                  {value.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/about/our-story.jpg" 
                alt="Our story" 
                className="rounded-xl shadow-lg w-full object-cover h-full max-h-[400px]" 
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  e.currentTarget.src = "https://via.placeholder.com/600x400?text=Our+Story";
                }}
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                <span className="gradient-text">Our Story</span>
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Call to Action was founded by digital experts who saw a gap in the market for an agency that could seamlessly blend creative marketing with advanced technological solutions.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Despite our humble beginnings as "arguably the smallest digital agency in the world," we've grown to work with major international brands while maintaining our agility and personalized approach.
              </p>
              <p className="text-lg text-gray-600">
                Today, we stand at the intersection of marketing creativity and technological innovation, helping businesses of all sizes achieve remarkable results in an increasingly complex digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  );
};

export default About;
