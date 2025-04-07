
import ImageLoader from './ImageLoader';
import { validateImageUrl, getImageFallback } from '../utils/imageValidator';

const clients = [
  { 
    name: 'BMW', 
    logo: '/lovable-uploads/96390897-d371-45a0-88bc-fb26c664d720.png' 
  },
  { 
    name: 'JBL', 
    logo: '/lovable-uploads/20b10161-96f4-4731-a957-1f26171514cf.png' 
  },
  { 
    name: 'Google', 
    logo: '/lovable-uploads/ad7e84a7-8194-4730-9076-04a6febf325d.png' 
  },
  { 
    name: 'Aster', 
    logo: '/lovable-uploads/15bdcdae-ea64-4c7a-9ff7-7b4e928c857d.png' 
  },
  { 
    name: 'DAMAC', 
    logo: '/images/logos/damac-logo.png' 
  },
  { 
    name: 'V-Mart', 
    logo: '/images/logos/vmart-logo.png' 
  },
  { 
    name: 'Kohinoor', 
    logo: '/images/logos/kohinoor-logo.png' 
  },
  { 
    name: 'Sleepwell', 
    logo: '/images/logos/sleepwell-logo.png' 
  },
];

const ClientLogos = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl font-display font-semibold text-center text-gray-700 mb-10">
          Trusted by Leading Brands
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div 
              key={client.name}
              className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            >
              <ImageLoader 
                src={validateImageUrl(client.logo, '')}
                alt={`${client.name} logo`}
                fallbackSrc={getImageFallback('logo', client.name)}
                className="h-16 w-auto max-w-[150px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
