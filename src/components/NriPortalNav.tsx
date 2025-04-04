
import { Link, useLocation } from 'react-router-dom';

const NriPortalNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="bg-white border-b shadow-sm">
      <div className="container-custom overflow-x-auto">
        <div className="flex space-x-6 py-4">
          <Link 
            to="/nri-portal" 
            className={`whitespace-nowrap font-medium ${isActive('/nri-portal') 
              ? 'text-cta-accent border-b-2 border-cta-accent' 
              : 'text-gray-600 hover:text-cta-primary'}`}
          >
            Overview
          </Link>
          <Link 
            to="/nri-portal/projects" 
            className={`whitespace-nowrap font-medium ${isActive('/nri-portal/projects') 
              ? 'text-cta-accent border-b-2 border-cta-accent' 
              : 'text-gray-600 hover:text-cta-primary'}`}
          >
            Sobha Projects
          </Link>
          <Link 
            to="/nri-portal/research" 
            className={`whitespace-nowrap font-medium ${isActive('/nri-portal/research') 
              ? 'text-cta-accent border-b-2 border-cta-accent' 
              : 'text-gray-600 hover:text-cta-primary'}`}
          >
            Market Research
          </Link>
          <Link 
            to="/nri-portal/strategy" 
            className={`whitespace-nowrap font-medium ${isActive('/nri-portal/strategy') 
              ? 'text-cta-accent border-b-2 border-cta-accent' 
              : 'text-gray-600 hover:text-cta-primary'}`}
          >
            Lead Generation Strategy
          </Link>
          <Link 
            to="/nri-portal/proposal" 
            className={`whitespace-nowrap font-medium ${isActive('/nri-portal/proposal') 
              ? 'text-cta-accent border-b-2 border-cta-accent' 
              : 'text-gray-600 hover:text-cta-primary'}`}
          >
            Proposal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NriPortalNav;
