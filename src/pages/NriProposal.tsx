
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import NriPortalNav from '../components/NriPortalNav';
import ContactCTA from '../components/ContactCTA';

const NriProposal = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-cta-dark via-cta-primary to-cta-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
              International Lead Generation Proposal
            </h1>
            <p className="text-xl text-white/90">
              A comprehensive proposal for generating high-quality NRI leads for Sobha's Kochi & Thrissur projects.
            </p>
          </div>
        </div>
      </section>

      <NriPortalNav />

      {/* Proposal Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="text-center mb-8">
              <h2 className="font-bold text-2xl md:text-3xl">Proposal for International Lead Generation</h2>
              <p className="text-xl">Sobha Ltd. | Kochi & Thrissur Projects</p>
              <div className="mt-4">
                <p><strong>Prepared By:</strong> Call To Action (CTA)</p>
                <p><strong>Prepared For:</strong> Sobha Ltd.</p>
                <p><strong>Date:</strong> April 4, 2025</p>
              </div>
            </div>

            <h3>1. Executive Summary</h3>
            <p>
              We at Call To Action (CTA) are pleased to propose a comprehensive international lead generation strategy 
              utilizing Meta Ads and Programmatic Advertising. Our proven data-driven approach targets affluent Non-Resident 
              Indian (NRI) audiences across prioritized global markets, significantly boosting engagement and conversions 
              for Sobha's premium residential offerings in Kochi and Thrissur.
            </p>

            <h3>2. Campaign Objective</h3>
            <p>
              The primary goal is to generate high-quality international leads, maximizing return on ad spend, and driving 
              conversions for Sobha's Kochi and Thrissur residential projects.
            </p>

            <p><strong>Key Performance Indicators (KPIs):</strong></p>
            <ul>
              <li>Qualified Lead Volume</li>
              <li>Cost Per Lead Efficiency</li>
              <li>Conversion Rate (Virtual/site visits)</li>
              <li>ROI & Cost-effectiveness</li>
            </ul>

            <h3>3. Recommended International Markets & Audience Profile</h3>
            <p>
              Based on detailed research, CTA recommends targeting high-interest regions and NRI profiles as follows:
            </p>

            <div className="overflow-x-auto bg-gray-50 p-4 rounded-xl mb-8">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-2">Priority Rank</th>
                    <th className="text-left p-2">Market</th>
                    <th className="text-left p-2">Key Cities</th>
                    <th className="text-left p-2">Audience Profile</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">1</td>
                    <td className="p-2">UAE</td>
                    <td className="p-2">Dubai, Abu Dhabi, Sharjah</td>
                    <td className="p-2">Professionals aged 30-50, High-income</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-2">2</td>
                    <td className="p-2">Saudi Arabia</td>
                    <td className="p-2">Riyadh, Jeddah, Dammam</td>
                    <td className="p-2">Senior Executives, Entrepreneurs</td>
                  </tr>
                  <tr>
                    <td className="p-2">3</td>
                    <td className="p-2">Kuwait</td>
                    <td className="p-2">Kuwait City</td>
                    <td className="p-2">Affluent Professionals, Culturally connected NRIs</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-2">4</td>
                    <td className="p-2">Qatar</td>
                    <td className="p-2">Doha</td>
                    <td className="p-2">Oil, Finance, IT professionals, High-income</td>
                  </tr>
                  <tr>
                    <td className="p-2">5</td>
                    <td className="p-2">Oman</td>
                    <td className="p-2">Muscat</td>
                    <td className="p-2">Mid-High Income Professionals, Entrepreneurs</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-2">6</td>
                    <td className="p-2">Bahrain</td>
                    <td className="p-2">Manama</td>
                    <td className="p-2">Managers, Finance Executives</td>
                  </tr>
                  <tr>
                    <td className="p-2">7</td>
                    <td className="p-2">United States</td>
                    <td className="p-2">New York, Texas, California</td>
                    <td className="p-2">IT, Healthcare Professionals, age 35-55</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-2">8</td>
                    <td className="p-2">Canada</td>
                    <td className="p-2">Toronto, Alberta, Vancouver</td>
                    <td className="p-2">Healthcare, Tech Professionals</td>
                  </tr>
                  <tr>
                    <td className="p-2">9</td>
                    <td className="p-2">United Kingdom</td>
                    <td className="p-2">London, Manchester</td>
                    <td className="p-2">Medical professionals, IT executives</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-2">10</td>
                    <td className="p-2">Australia & SE Asia</td>
                    <td className="p-2">Sydney, Melbourne, Singapore</td>
                    <td className="p-2">Young affluent professionals, age 25-45</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>4. Strategic Approach</h3>
            <p>Our integrated strategy encompasses two key digital channels:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 not-prose">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2">A. Meta Ads Strategy</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-cta-accent/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-cta-accent rounded-full"></div>
                    </div>
                    <span>Proprietary data-driven custom audience targeting</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cta-accent/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-cta-accent rounded-full"></div>
                    </div>
                    <span>Retargeting and lookalike audience expansion</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cta-accent/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-cta-accent rounded-full"></div>
                    </div>
                    <span>Lead-gen forms, carousel/video ads emphasizing Sobha's brand strength, luxury, and investment appeal</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2">B. Programmatic Ads Strategy</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-cta-accent/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-cta-accent rounded-full"></div>
                    </div>
                    <span>Utilizing CTA's proprietary DSP for precise targeting</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cta-accent/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-cta-accent rounded-full"></div>
                    </div>
                    <span>Contextual and retargeting ad placements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cta-accent/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-cta-accent rounded-full"></div>
                    </div>
                    <span>Rich-media interactive ads on premium NRI-focused digital platforms</span>
                  </li>
                </ul>
              </div>
            </div>

            <h3>5. Commercial Terms and Pricing</h3>
            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h4 className="font-bold">Monthly Retainer</h4>
              <p>₹2,00,000/month (fixed retainer fee)</p>
              
              <h4 className="font-bold mt-4">Inclusions within the Monthly Retainer:</h4>
              <ul>
                <li>Ad spend coverage up to ₹20,00,000 per month</li>
                <li>Creative Development (Ads and Video Content)</li>
                <li>Comprehensive Market Research</li>
                <li>Strategic Planning & Recommendations</li>
                <li>Weekly and Monthly Reporting & Analysis</li>
              </ul>
              
              <h4 className="font-bold mt-4">Variable Commission Structure (beyond ₹20 lakh monthly spend)</h4>
              <table className="min-w-full text-sm mt-2">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-2">Monthly Ad Spend</th>
                    <th className="text-left p-2">Commission Charged</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">₹0 – ₹20 lakh</td>
                    <td className="p-2">Included within ₹2 lakh Retainer</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-2">₹20 lakh – ₹50 lakh</td>
                    <td className="p-2">10% of incremental spend</td>
                  </tr>
                  <tr>
                    <td className="p-2">Beyond ₹50 lakh</td>
                    <td className="p-2">6% of incremental spend</td>
                  </tr>
                </tbody>
              </table>
              
              <h4 className="font-bold mt-4">Example Monthly Scenario:</h4>
              <table className="min-w-full text-sm mt-2">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-2">Ad Spend</th>
                    <th className="text-left p-2">Calculation</th>
                    <th className="text-left p-2">Commission</th>
                    <th className="text-left p-2">Total Monthly Charge</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">₹20 lakh</td>
                    <td className="p-2">Covered in Retainer</td>
                    <td className="p-2">₹0</td>
                    <td className="p-2">₹2,00,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-2">₹40 lakh</td>
                    <td className="p-2">₹20 lakh extra ×10%</td>
                    <td className="p-2">₹2,00,000</td>
                    <td className="p-2">₹4,00,000</td>
                  </tr>
                  <tr>
                    <td className="p-2">₹60 lakh</td>
                    <td className="p-2">₹30 lakh extra<br />(₹20-₹50L @10% + ₹10L @6%)</td>
                    <td className="p-2">₹2,60,000</td>
                    <td className="p-2">₹4,60,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>6. Scope of Services</h3>
            <ul>
              <li><strong>Creative Development:</strong> Visual/Video Ad creation</li>
              <li><strong>Strategy & Research:</strong> Audience insights, market analysis, competitor benchmarks</li>
              <li><strong>Programmatic & Meta Ad Campaign Management:</strong> Setup, management, optimization, targeting</li>
              <li><strong>Reporting & Insights:</strong> Weekly/monthly performance reports and insights</li>
              <li><strong>Ongoing Optimization:</strong> Regular campaign adjustments for maximum ROI</li>
            </ul>

            <h3>7. Billing and Payment Terms</h3>
            <ul>
              <li>Monthly retainer of ₹2,00,000 invoiced at the start of each month.</li>
              <li>Commission charges invoiced at the end of each month based on actual ad spend.</li>
              <li>Payment due within 30 days from invoice receipt.</li>
            </ul>

            <h3>8. Reporting & Optimization Schedule</h3>
            <ul>
              <li><strong>Weekly:</strong> Quick performance snapshot, spend updates, optimization insights</li>
              <li><strong>Monthly:</strong> Comprehensive report on campaign performance, spend efficiency, lead quality, ROI analysis</li>
            </ul>

            <h3>9. Next Steps</h3>
            <ol>
              <li>Proposal approval from Sobha Ltd.</li>
              <li>Formal agreement sign-off and onboarding</li>
              <li>Detailed strategy, content plan, and timeline delivery</li>
              <li>Campaign activation within 7-14 days post-approval</li>
            </ol>

            <h3>10. About Call To Action (CTA)</h3>
            <p>
              Call To Action (CTA) is an innovative, data-driven marketing agency specializing in digital advertising and 
              lead generation solutions for premium real estate and luxury market segments. Leveraging our proprietary DSP 
              and extensive audience data, we deliver high-quality leads, cost efficiency, and measurable ROI.
            </p>

            <div className="mt-10 flex justify-between">
              <Link to="/nri-portal/strategy" className="inline-flex items-center text-cta-primary hover:text-cta-accent transition-colors font-medium">
                Back to Strategy
              </Link>
              <Link to="/nri-portal/projects" className="inline-flex items-center text-cta-primary hover:text-cta-accent transition-colors font-medium">
                View Sobha Projects
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

export default NriProposal;
