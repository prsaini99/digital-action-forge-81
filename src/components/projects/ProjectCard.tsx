
import { ArrowRight, Building2, Map, Home, Landmark } from 'lucide-react';
import ImageLoader from '../ImageLoader';
import { Project } from '../../data/nriProjects';
import { createPlaceholderImage } from '../../utils/imageValidator';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  // Generate a fallback image if not provided
  const fallbackImage = project.fallbackImage || createPlaceholderImage(800, 600, project.name);
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <ImageLoader 
            src={project.image} 
            alt={project.name} 
            fallbackSrc={fallbackImage}
            className="h-64 lg:h-full w-full object-cover"
          />
        </div>
        
        <div className="lg:col-span-2 p-6 lg:p-8">
          <h3 className="text-2xl font-display font-bold mb-2 text-gray-800">
            {project.name}
          </h3>
          
          <div className="flex items-center text-gray-600 mb-4">
            <Map size={16} className="mr-2" />
            <span>{project.location}</span>
          </div>
          
          <p className="text-gray-600 mb-6">
            {project.description}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center text-cta-primary mb-1">
                <Building2 size={16} className="mr-1" />
                <span className="text-sm font-semibold">Type</span>
              </div>
              <p className="text-sm">{project.type}</p>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center text-cta-primary mb-1">
                <Landmark size={16} className="mr-1" />
                <span className="text-sm font-semibold">Price</span>
              </div>
              <p className="text-sm">{project.price}</p>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center text-cta-primary mb-1">
                <Home size={16} className="mr-1" />
                <span className="text-sm font-semibold">Config</span>
              </div>
              <p className="text-sm">{project.bedrooms}</p>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center text-cta-primary mb-1">
                <ArrowRight size={16} className="mr-1" />
                <span className="text-sm font-semibold">Completion</span>
              </div>
              <p className="text-sm">{project.completion}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.highlights.map((highlight, index) => (
              <span key={index} className="bg-cta-accent/10 text-cta-accent text-xs font-medium px-3 py-1 rounded-full">
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
