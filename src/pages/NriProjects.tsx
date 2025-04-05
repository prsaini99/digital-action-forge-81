
import NriPortalNav from '../components/NriPortalNav';
import ProjectsOverview from '../components/projects/ProjectsOverview';
import NriBenefits from '../components/projects/NriBenefits';
import { projects } from '../data/nriProjects';

const NriProjects = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-cta-dark via-cta-primary to-cta-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
              Sobha Projects
            </h1>
            <p className="text-xl text-white/90">
              Exclusive premium residential projects in Kochi & Thrissur designed for discerning NRI investors.
            </p>
          </div>
        </div>
      </section>

      <NriPortalNav />

      {/* Projects Overview */}
      <ProjectsOverview projects={projects} />

      {/* NRI Benefits */}
      <NriBenefits />
    </main>
  );
};

export default NriProjects;
