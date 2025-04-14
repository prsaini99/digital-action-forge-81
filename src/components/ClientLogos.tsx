
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import AutoPlay from 'embla-carousel-autoplay';
import { ImageLoader } from '../components/ImageLoader';
import { sanitizeImagePath } from '../utils/imageValidator';

// Fallback images from Unsplash for when logos don't load
const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=150&h=80&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=150&h=80&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=150&h=80&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=150&h=80&fit=crop&auto=format'
];

// Updated client logos list with all logos
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
    logo: '/lovable-uploads/24fc63da-8404-4c1a-ad8a-c44e18b9ab8b.png' 
  },
  { 
    name: 'V-Mart', 
    logo: '/lovable-uploads/73ad4742-ead0-45e5-a553-3259fe7cb28a.png' 
  },
  { 
    name: 'TCI', 
    logo: '/lovable-uploads/880bdbee-7c03-477b-aea6-3c783913675d.png' 
  },
  { 
    name: 'Stanza Living', 
    logo: '/lovable-uploads/5c060582-7547-45a7-a4a5-ab4a885df5a9.png' 
  },
  { 
    name: 'PropTiger', 
    logo: '/lovable-uploads/41bb9e20-f40e-46df-979f-39614c21a427.png' 
  },
  { 
    name: 'HSBC', 
    logo: '/lovable-uploads/c73cfddf-639d-424f-80e3-1a9b67311d9c.png' 
  },
  { 
    name: 'C&B Financial', 
    logo: '/lovable-uploads/d7547488-777b-4710-b058-f775f262d2c4.png' 
  },
  { 
    name: 'Volvo', 
    logo: '/lovable-uploads/00cf4596-d717-4269-ba1b-a65ae2c34538.png' 
  },
  { 
    name: 'Sleepwell', 
    logo: '/lovable-uploads/48f7e9c4-20a6-441c-8e69-9b170c6a36d5.png' 
  },
  { 
    name: 'Alexa', 
    logo: '/lovable-uploads/68b38d33-6dbe-4d90-b981-2a8391fce79c.png' 
  },
  { 
    name: 'Fortis', 
    logo: '/lovable-uploads/ea192dc6-422f-4fb7-aeff-04458c522fb4.png' 
  },
  // Adding the new batch of logos
  { 
    name: 'Web Chutney', 
    logo: '/lovable-uploads/e19f9151-fb47-4990-9f24-e5df9b9e4fd2.png' 
  },
  { 
    name: 'Airtel', 
    logo: '/lovable-uploads/b1cde88d-51d3-4c75-9554-67cb1c13b361.png' 
  },
  { 
    name: 'Seagate', 
    logo: '/lovable-uploads/343bf112-7505-4f7f-86f5-bc546a7f0e43.png' 
  },
  { 
    name: 'Paytm', 
    logo: '/lovable-uploads/7a16d9e5-204e-4c48-9c28-b87155d4107c.png' 
  },
  { 
    name: 'Future Generali', 
    logo: '/lovable-uploads/d55141f5-2c95-483a-b7cd-dc829194fc6e.png' 
  },
  { 
    name: 'Organic Harvest', 
    logo: '/lovable-uploads/498ba6e0-c34b-4986-98f0-6907ba85758e.png' 
  },
  { 
    name: 'Kent RO', 
    logo: '/lovable-uploads/3405138e-f5a5-47f3-b625-5cb82b0e2c56.png' 
  },
  { 
    name: 'Logo 1', 
    logo: '/lovable-uploads/67a2ffcc-debc-4938-a8e6-7536d592bcde.png' 
  },
  { 
    name: 'Logo 2', 
    logo: '/lovable-uploads/a8972fda-4b90-417e-aa3c-931102032641.png' 
  },
  { 
    name: 'Logo 3', 
    logo: '/lovable-uploads/0575232f-2bab-4056-898b-a8a85782c5ce.png' 
  },
];

const ClientLogos = () => {
  // Get a random fallback image from the fallback array
  const getRandomFallback = () => {
    const index = Math.floor(Math.random() * FALLBACK_IMAGES.length);
    return FALLBACK_IMAGES[index];
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl font-display font-semibold text-center text-gray-700 mb-10">
          Trusted by Leading Brands
        </h2>
        
        {/* First row of logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
          {clients.slice(0, 10).map((client, index) => (
            <div 
              key={`grid-${client.name}-${index}`}
              className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 flex items-center justify-center h-24 bg-white p-4 rounded-md shadow-sm"
            >
              <img 
                src={getRandomFallback()}
                alt={`${client.name} logo`}
                className="max-h-16 w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
        
        {/* Second row of logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.slice(10, 20).map((client, index) => (
            <div 
              key={`grid2-${client.name}-${index}`}
              className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 flex items-center justify-center h-24 bg-white p-4 rounded-md shadow-sm"
            >
              <img 
                src={getRandomFallback()}
                alt={`${client.name} logo`}
                className="max-h-16 w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
