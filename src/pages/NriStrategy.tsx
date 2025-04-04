
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import NriPortalNav from '../components/NriPortalNav';
import ContactCTA from '../components/ContactCTA';

const NriStrategy = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-cta-dark via-cta-primary to-cta-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
              Lead Generation Strategy
            </h1>
            <p className="text-xl text-white/90">
              Comprehensive strategy for generating high-quality leads from NRI markets for Sobha's Kochi & Thrissur projects.
            </p>
          </div>
        </div>
      </section>

      <NriPortalNav />

      {/* Strategy Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Lead Generation Strategy for Sobha Projects (Kochi & Thrissur)</h2>
            
            <div className="bg-cta-primary/10 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold text-cta-primary">Objective</h3>
              <p>
                Generate high-quality leads for Sobha's Kochi and Thrissur residential projects from key NRI markets 
                identified through comprehensive research.
              </p>
            </div>

            <h3>Target Markets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 not-prose">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2">Primary Markets</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-cta-accent/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-cta-accent rounded-full"></div>
                    </div>
                    <span>UAE (Dubai, Abu Dhabi, Sharjah)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cta-accent/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-cta-accent rounded-full"></div>
                    </div>
                    <span>Saudi Arabia (Riyadh, Jeddah, Dammam)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cta-accent/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-cta-accent rounded-full"></div>
                    </div>
                    <span>Kuwait (Kuwait City)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cta-accent/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-cta-accent rounded-full"></div>
                    </div>
                    <span>Qatar (Doha)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cta-accent/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-cta-accent rounded-full"></div>
                    </div>
                    <span>Oman (Muscat)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cta-accent/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-cta-accent rounded-full"></div>
                    </div>
                    <span>Bahrain (Manama)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2">Secondary Markets</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-cta-accent/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-cta-accent rounded-full"></div>
                    </div>
                    <span>USA (NY/NJ, Texas, California)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cta-accent/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-cta-accent rounded-full"></div>
                    </div>
                    <span>Canada (Toronto, Vancouver)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cta-accent/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-cta-accent rounded-full"></div>
                    </div>
                    <span>UK (London, Manchester)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cta-accent/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-cta-accent rounded-full"></div>
                    </div>
                    <span>Ireland</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cta-accent/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-cta-accent rounded-full"></div>
                    </div>
                    <span>Australia (Sydney, Melbourne)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cta-accent/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-cta-accent rounded-full"></div>
                    </div>
                    <span>Singapore</span>
                  </li>
                </ul>
              </div>
            </div>

            <h3>Audience Segmentation</h3>
            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold">Gulf NRIs</h4>
                <p>
                  Professionals (30-50 yrs), mid-senior management, high disposable income, emotional ties to Kerala, 
                  motivated by family housing, retirement, investment returns.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold">North America & Europe NRIs</h4>
                <p>
                  Professionals (35-55 yrs), high-income IT, healthcare, finance sectors, interested in long-term investment, 
                  retirement/vacation homes.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold">Asia-Pacific NRIs</h4>
                <p>
                  Younger professionals (25-45 yrs), IT and finance sectors, investment-focused, digitally savvy, 
                  interested in affordable luxury properties.
                </p>
              </div>
            </div>

            <h2>Channels</h2>
            
            <h3>Meta Ads Strategy</h3>
            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h4 className="font-bold">Targeting</h4>
              <p>
                Precise geo-targeting of the identified cities, leveraging proprietary data to target NRIs with Kerala origin/interests.
              </p>
              
              <h4 className="font-bold mt-4">Formats</h4>
              <ul>
                <li>Dynamic Carousel Ads showcasing multiple properties (interiors, exteriors, amenities)</li>
                <li>Video Ads highlighting lifestyle, testimonials, project walkthroughs</li>
                <li>Lead Generation Ads with Instant Forms directly capturing interest</li>
              </ul>
              
              <h4 className="font-bold mt-4">Messaging</h4>
              <ul>
                <li>Highlight emotional ties ("Own a piece of home in Kerala")</li>
                <li>Financial incentives ("High appreciation potential & rental income")</li>
                <li>NRI-specific features ("Hassle-free investment, RERA-compliant, managed services")</li>
              </ul>
            </div>

            <h3>Programmatic Ads Strategy</h3>
            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h4 className="font-bold">DSP Integration</h4>
              <p>
                Leverage proprietary DSP data for retargeting and look-alike audiences based on historical engagement.
              </p>
              
              <h4 className="font-bold mt-4">Inventory Targeting</h4>
              <p>
                Premium inventory placements on property portals, expat forums, and trusted local and global media frequented by NRIs.
              </p>
              
              <h4 className="font-bold mt-4">Formats</h4>
              <ul>
                <li>Native ads for organic integration</li>
                <li>Rich-media banner ads with interactive property walkthroughs</li>
                <li>Contextual video ads placed around relevant real estate and finance content</li>
              </ul>
              
              <h4 className="font-bold mt-4">Messaging</h4>
              <ul>
                <li>Localized to resonate culturally (e.g., Malayalam/English mix for Gulf regions)</li>
                <li>Trust-building content (customer testimonials, brand legacy)</li>
                <li>Time-sensitive promotions (festivals, currency fluctuations)</li>
              </ul>
            </div>

            <h3>Competitive Differentiation</h3>
            <ul>
              <li>Highlight Sobha's brand reliability, timely project delivery, quality, and post-sales property management services.</li>
              <li>Emphasize unique selling points: strategic locations, superior amenities, and Sobha's global reputation.</li>
            </ul>

            <h3>Tactical Recommendations</h3>
            <ul>
              <li>Schedule Meta campaigns around major festivals (Onam, Eid, Christmas), school holidays, and favorable currency exchange periods.</li>
              <li>Run Programmatic campaigns continuously, scaling budget around periods of historically higher NRI real estate interest.</li>
              <li>Conduct monthly webinars for NRIs with virtual tours and interactive Q&A sessions.</li>
            </ul>

            <h3>Measurement & Optimization</h3>
            <ul>
              <li><strong>KPIs:</strong> Lead volume, lead quality (validated leads), cost-per-lead (CPL), conversion rate</li>
              <li>Regular A/B testing of creative, audience segments, and messages</li>
              <li>Real-time campaign optimization based on performance analytics</li>
            </ul>

            <h3>Budget Allocation</h3>
            <ul>
              <li>Allocate higher budgets for primary Gulf markets (~60%), secondary Western markets (~30%), and emerging Asia-Pacific markets (~10%).</li>
              <li>Budget flexibility to scale during peak engagement periods.</li>
            </ul>

            <div className="mt-10 flex justify-between">
              <Link to="/nri-portal/research" className="inline-flex items-center text-cta-primary hover:text-cta-accent transition-colors font-medium">
                Back to Research
              </Link>
              <Link to="/nri-portal/proposal" className="inline-flex items-center text-cta-primary hover:text-cta-accent transition-colors font-medium">
                View Proposal
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  );
};

export default NriStrategy;
