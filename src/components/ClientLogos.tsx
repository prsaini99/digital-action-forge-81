
import { useState } from 'react';
import ImageLoader from './ImageLoader';
import { validateImageUrl, getImageFallback } from '../utils/imageValidator';

const clients = [
  { 
    name: 'BMW', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/BMW_logo_%28gray%29.svg' 
  },
  { 
    name: 'JBL', 
    logo: 'https://1000logos.net/wp-content/uploads/2020/04/JBL-Logo.png' 
  },
  { 
    name: 'Google', 
    logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' 
  },
  { 
    name: 'Aster', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Aster_Logo.png' 
  },
  { 
    name: 'DAMAC', 
    logo: 'https://www.damacproperties.com/images/logo.svg' 
  },
  { 
    name: 'V-Mart', 
    logo: 'https://vmart.co.in/assets/images/v-mart-logo.png' 
  },
  { 
    name: 'Kohinoor', 
    logo: 'https://www.kohinoorfoods.in/images/assets/logo-kohinoor.png' 
  },
  { 
    name: 'Sleepwell', 
    logo: 'https://www.sleepwellproducts.com/assets/images/sleepwell-logo.png' 
  },
];

const ClientLogos = () => {
  const [imageStatuses, setImageStatuses] = useState<Record<string, boolean>>({});

  const handleImageLoad = (name: string) => {
    setImageStatuses(prev => ({ ...prev, [name]: true }));
  };

  const handleImageError = (name: string) => {
    setImageStatuses(prev => ({ ...prev, [name]: false }));
    console.log(`Logo failed to load: ${name}`);
  };

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
              className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 flex items-center justify-center h-20"
            >
              <img 
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-h-12 w-auto object-contain"
                onLoad={() => handleImageLoad(client.name)}
                onError={() => handleImageError(client.name)}
              />
              {imageStatuses[client.name] === false && (
                <div className="text-sm text-gray-400">{client.name}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
