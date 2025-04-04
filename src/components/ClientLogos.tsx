
import { motion } from 'framer-motion';

const clients = [
  { name: 'BMW', logo: 'https://via.placeholder.com/150x80?text=BMW' },
  { name: 'JBL', logo: 'https://via.placeholder.com/150x80?text=JBL' },
  { name: 'Google', logo: 'https://via.placeholder.com/150x80?text=Google' },
  { name: 'Aster', logo: 'https://via.placeholder.com/150x80?text=Aster' },
  { name: 'DAMAC', logo: 'https://via.placeholder.com/150x80?text=DAMAC' },
  { name: 'V-Mart', logo: 'https://via.placeholder.com/150x80?text=V-Mart' },
  { name: 'Kohinoor', logo: 'https://via.placeholder.com/150x80?text=Kohinoor' },
  { name: 'Sleepwell', logo: 'https://via.placeholder.com/150x80?text=Sleepwell' },
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
              <img src={client.logo} alt={client.name} className="max-h-12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
