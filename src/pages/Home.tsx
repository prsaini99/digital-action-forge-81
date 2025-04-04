
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import ServiceHighlights from '../components/ServiceHighlights';
import CaseStudiesHighlight from '../components/CaseStudiesHighlight';
import TechnicalAchievements from '../components/TechnicalAchievements';
import TeamSection from '../components/TeamSection';
import ContactCTA from '../components/ContactCTA';

const Home = () => {
  return (
    <main>
      <Hero />
      <ClientLogos />
      <ServiceHighlights />
      <CaseStudiesHighlight />
      <TechnicalAchievements />
      <TeamSection />
      <ContactCTA />
    </main>
  );
};

export default Home;
