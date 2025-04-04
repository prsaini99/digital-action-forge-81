
import { Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Pranav Singh',
    role: 'Co-Founder & Technical Director',
    bio: 'Tech entrepreneur, Director at Mondee, Founder of 11point2, and CMO at MetaSpace and Floxypay. Expert in AI, fintech, Web3, and business development.',
    image: '/images/team/pranav-singh.jpg',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Ahsan Z Jawed',
    role: 'Co-Founder & Digital Strategist',
    bio: 'Entrepreneur with 18+ years in digital marketing and business development. Experienced in scaling startups and has worked with top global brands.',
    image: '/images/team/ahsan-jawed.jpg',
    linkedin: '#',
    twitter: '#'
  }
];

const TeamSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="gradient-text">Meet Our Team</span>
          </h2>
          <p className="text-lg text-gray-600">
            Our leaders bring decades of experience across digital marketing, technology development, and business strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden group">
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-72 object-cover object-center" 
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.currentTarget.src = `https://via.placeholder.com/300x300?text=${member.name.replace(' ', '+')}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cta-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 flex space-x-3">
                    <a 
                      href={member.linkedin} 
                      className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={20} className="text-white" />
                    </a>
                    <a 
                      href={member.twitter} 
                      className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter size={20} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold">{member.name}</h3>
                <p className="text-cta-accent mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
