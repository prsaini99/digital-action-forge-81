
import ImageLoader from './ImageLoader';
import { validateImageUrl, getImageFallback } from '../utils/imageValidator';

const clients = [
  { name: 'BMW', logo: '/images/logos/bmw-logo.png' },
  { name: 'JBL', logo: '/images/logos/jbl-logo.png' },
  { name: 'Google', logo: '/images/logos/google-logo.png' },
  { name: 'Aster', logo: '/images/logos/aster-logo.png' },
  { name: 'DAMAC', logo: '/images/logos/damac-logo.png' },
  { name: 'V-Mart', logo: '/images/logos/vmart-logo.png' },
  { name: 'Kohinoor', logo: '/images/logos/kohinoor-logo.png' },
  { name: 'Sleepwell', logo: '/images/logos/sleepwell-logo.png' },
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
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
