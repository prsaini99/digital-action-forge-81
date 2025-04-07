
import ImageLoader from './ImageLoader';
import { validateImageUrl, getImageFallback } from '../utils/imageValidator';

const clients = [
  { 
    name: 'BMW', 
    logo: '/lovable-uploads/9e50f3fa-9f7d-4d01-b9d3-95c5acb5aaae.png' 
  },
  { 
    name: 'JBL', 
    logo: '/lovable-uploads/cf09747e-5dce-4232-b8d3-bc834dbe9a00.png' 
  },
  { 
    name: 'Google', 
    logo: '/lovable-uploads/99e2f15a-0c74-43a4-a1cf-53cec4f8ebb4.png' 
  },
  { 
    name: 'Aster', 
    logo: '/lovable-uploads/9e34cea2-8e60-4c00-9c25-6dfcfee0cc2d.png' 
  },
  { 
    name: 'DAMAC', 
    logo: '/lovable-uploads/1b80f8d1-ccf1-4639-9cad-a92d67731bae.png' 
  },
  { 
    name: 'V-Mart', 
    logo: '/lovable-uploads/0ee59b15-7a24-455a-9e98-5d865e9ecc68.png' 
  },
  { 
    name: 'Kohinoor', 
    logo: '/lovable-uploads/c3e8a686-f01c-48cb-8d63-d16c0e09cf1a.png' 
  },
  { 
    name: 'Sleepwell', 
    logo: '/lovable-uploads/dc3ecfda-6d40-4ce5-8c49-ea5e4ea25cef.png' 
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
