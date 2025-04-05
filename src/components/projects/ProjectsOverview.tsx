
import { Project } from '../../data/nriProjects';
import ProjectCard from './ProjectCard';

interface ProjectsOverviewProps {
  projects: Project[];
}

const ProjectsOverview = ({ projects }: ProjectsOverviewProps) => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-display font-bold mb-6 text-center">
            <span className="gradient-text">Premium Residential Offerings</span>
          </h2>
          <p className="text-lg text-gray-600 text-center">
            Sobha Limited brings its legacy of excellence to Kerala with these premium residential projects in Kochi and Thrissur,
            designed specifically with NRI requirements in mind.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsOverview;
