
import { Building2, Landmark, Home } from 'lucide-react';

const NriBenefits = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-display font-bold mb-6 text-center">
            <span className="gradient-text">NRI Exclusive Benefits</span>
          </h2>
          <p className="text-lg text-gray-600 text-center">
            Sobha offers exclusive advantages for Non-Resident Indians investing in our Kochi and Thrissur properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-cta-accent/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Building2 className="w-7 h-7 text-cta-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Hassle-Free Ownership</h3>
            <p className="text-gray-600">
              Dedicated NRI desk to handle all documentation, legal formalities, and regulatory approvals without requiring your presence in India.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-cta-accent/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Landmark className="w-7 h-7 text-cta-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Property Management</h3>
            <p className="text-gray-600">
              End-to-end property management services including maintenance, rental management, and security for absentee owners.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-cta-accent/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Home className="w-7 h-7 text-cta-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">NRI Financing</h3>
            <p className="text-gray-600">
              Special NRI home loan options with preferential rates through our banking partners, including simplified application processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NriBenefits;
