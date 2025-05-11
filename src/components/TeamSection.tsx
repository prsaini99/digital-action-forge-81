
import { Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import ImageLoader from './ImageLoader';
import { createPlaceholderImage } from '../utils/imageValidator';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
    name: 'Miten Mehta',
    role: 'C-Suite Leader & AI Architect',
    bio: 'CMO and Chief of AI Solutions at Mondee (Nasdaq – MOND). Over 25 years experience driving growth in TravelTech, FinTech, EdTech, RetailTech, and Digital Native sectors. Expert in AI integration, GTM strategy, and building high-performance teams.',
    image: '/images/team/miten-mehta.jpg',
    linkedin: 'https://linkedin.com/in/mitenmehta',
    email: 'mitennmehta@gmail.com',
    phone: '+1 510 717 5712',
    location: 'San Diego, CA'
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
            <Card key={index} className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <ImageLoader 
                  src={member.image} 
                  alt={member.name} 
                  fallbackSrc={createPlaceholderImage(300, 300, member.name)}
                  className="w-full h-72 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cta-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 flex space-x-3">
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={20} className="text-white" />
                      </a>
                    )}
                    {member.twitter && (
                      <a 
                        href={member.twitter} 
                        className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
                        aria-label={`${member.name}'s Twitter`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter size={20} className="text-white" />
                      </a>
                    )}
                    {member.email && (
                      <a 
                        href={`mailto:${member.email}`} 
                        className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail size={20} className="text-white" />
                      </a>
                    )}
                    {member.phone && (
                      <a 
                        href={`tel:${member.phone}`} 
                        className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
                        aria-label={`Call ${member.name}`}
                      >
                        <Phone size={20} className="text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-semibold">{member.name}</h3>
                <p className="text-cta-accent mb-3">{member.role}</p>
                <p className="text-gray-600 mb-3">{member.bio}</p>
                {member.location && <p className="text-sm text-gray-500">{member.location}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
