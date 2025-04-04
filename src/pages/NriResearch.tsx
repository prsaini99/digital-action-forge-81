
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import NriPortalNav from '../components/NriPortalNav';
import ContactCTA from '../components/ContactCTA';

const NriResearch = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-cta-dark via-cta-primary to-cta-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
              Market Research
            </h1>
            <p className="text-xl text-white/90">
              Global NRI Demand for Kochi & Thrissur Real Estate: Market Analysis
            </p>
          </div>
        </div>
      </section>

      <NriPortalNav />

      {/* Research Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Top International Markets for Kochi & Thrissur Real Estate</h2>
            <p>
              The most promising international markets for generating leads are those with large concentrations 
              of Non-Resident Indians (NRIs) from Kerala and strong interest in investing back home. Below is a 
              ranked list of countries (and key regions within them) showing high demand for residential projects 
              in Kochi and Thrissur:
            </p>

            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold text-cta-primary mb-4">Primary Markets</h3>
              
              <h4 className="font-bold">1. United Arab Emirates (UAE – Dubai, Abu Dhabi, Sharjah)</h4>
              <p>
                The UAE hosts the largest Malayali diaspora (approx. 773,000 Keralites). An estimated 37.5% of all 
                emigrant Keralites reside in the UAE. UAE-based NRIs are the principal investors in Indian real estate, 
                drawn by proximity, emotional ties, and tax-free incomes. Kochi is especially popular among Gulf NRIs – 
                many trace their roots to central Kerala and "yearn to own a piece of home". Dubai and Abu Dhabi contribute 
                the bulk of inquiries for high-end projects, leveraging convenient flight connectivity to Kochi.
              </p>

              <h4 className="font-bold">2. Saudi Arabia (Riyadh, Jeddah, Dammam)</h4>
              <p>
                Saudi Arabia accounts for about 21.8% of Kerala's emigrants (roughly ~600,000 Malayalis). Key regions 
                include the capital Riyadh, Jeddah, and the Eastern Province (Dammam/Al Khobar) where large Malayali 
                communities work in oil, construction, and healthcare. Saudi NRIs have been steadily investing in Kerala 
                properties; like the UAE, the Gulf rupee exchange rate advantage and desire for eventual retirement homes 
                drive their interest.
              </p>

              <h4 className="font-bold">3. Kuwait (Kuwait City)</h4>
              <p>
                Kuwait surprisingly hosts over 630,000 Malayali NRIs, making it another top source of inquiries. Kuwait's 
                high NRI density translates into strong demand for Kerala real estate, especially luxury apartments and villas. 
                Kochi is a favored investment destination for Keralites in Kuwait, offering modern amenities and rental income 
                potential not available in Kuwait's restrictive property market. NRIs in Kuwait often pool family resources to 
                purchase Kerala homes as a long-term asset and for cultural connection.
              </p>

              <h4 className="font-bold">4. Qatar (Doha)</h4>
              <p>
                Qatar's Malayali population (~445,000) is very prominent relative to its size. Doha's affluent NRI professionals 
                (engineers, finance, oil & gas workers) frequently seek premium flats in Kochi's Marine Drive or villas in Thrissur 
                as investment and future residence. Gulf NRIs, including those in Qatar, were key drivers of a recent 22–25% jump in 
                NRI real estate investments in Kochi (and Coimbatore) during a festive period. This highlights the heightened interest 
                from Qatar-based Malayalees when economic conditions (like a weak rupee) are favorable.
              </p>

              <h4 className="font-bold">5. Oman (Muscat)</h4>
              <p>
                Oman is home to ~195,000 Keralites. Muscat-based NRIs (many in engineering, trade, and banking) maintain strong 
                ties to Kerala. They tend to favor Thrissur for its cultural appeal and Kochi for its urban growth. Oman NRIs actively 
                attend Kerala property roadshows and often buy apartments during home visits. The Kerala Property Expo 2023 in Muscat 
                saw significant turnout, indicating sustained interest.
              </p>

              <h4 className="font-bold">6. Bahrain (Manama)</h4>
              <p>
                With around 100,000 Malayalis, Bahrain is a smaller but high-income NRI market. Many Keralites in Bahrain hold 
                white-collar jobs in finance and IT, giving them the purchasing power for luxury homes. Kochi's upscale projects 
                garner attention from NRIs in Manama who seek investment diversification. Proximity (short flights) and community 
                word-of-mouth keep Bahrain NRIs engaged in Kerala's realty market.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold text-cta-primary mb-4">Secondary Markets</h3>
              
              <h4 className="font-bold">7. United States (USA – New York/New Jersey, Texas, California)</h4>
              <p>
                The USA has a smaller first-generation Malayali NRI base (~84,000), but they are typically high-income professionals 
                (IT engineers, doctors, etc.) with significant buying capacity. Major Malayali hubs include the New York–New Jersey area, 
                Houston/Dallas in Texas, and tech corridors of California. These NRIs often look for long-term investments or retirement 
                homes in Kerala. A growing trend is affluent Kerala-origin professionals in the US building vacation/retirement homes – 
                spending winters in Kerala to reconnect with roots and enjoy affordable healthcare. While the US NRI segment is smaller 
                than the Gulf in number, their interest is rising thanks to strong dollar earnings and India's high real estate returns 
                (53% of NRI investors believe Indian returns outshine other markets).
              </p>

              <h4 className="font-bold">8. Canada (Toronto, Vancouver, Alberta)</h4>
              <p>
                Canada's Malayali diaspora (~78,000) is concentrated in Ontario (Toronto/GTA) and Alberta (Calgary/Edmonton) with many 
                working in IT, healthcare, and skilled trades. Canadian NRIs are drawn to Kerala properties by comparatively lower prices 
                and sentimental value. Many are in the 30–45 age range, saving in strong Canadian dollars and looking to buy homes for 
                parents or as an investment. Kerala developers report active inquiries from NRIs in Toronto, especially for villas in 
                culturally familiar locales like Thrissur (to eventually retire or for periodic visits).
              </p>

              <h4 className="font-bold">9. United Kingdom & Europe (London, England; Ireland; Germany)</h4>
              <p>
                The UK Malayali community (~45,000 in UK; plus a large number of Kerala-origin nurses and professionals) has a keen 
                interest in Kerala real estate. Many are medical professionals (doctors, nurses) or IT workers who left Kerala in the 
                2000s and maintain family property back home. London and Manchester in the UK, and cities in Ireland (which hosts ~24k 
                Keralites) are notable hubs. These NRIs typically seek secure investments for retirement or rental income. Europe-based 
                NRIs (e.g. in Germany or Austria) are also increasingly buying Kerala homes to spend part of the year in milder climate. 
                For instance, Malayali retirees in Europe build houses in Kerala to escape harsh winters and enjoy shorter hospital wait 
                times back home.
              </p>

              <h4 className="font-bold">10. Australia & Southeast Asia (Sydney, Melbourne, Singapore)</h4>
              <p>
                Australia's Kerala diaspora (~53,000) and Singapore's (~26k) are smaller but high-income. Many are young IT professionals 
                or students-turned-residents. Sydney and Melbourne Malayalis often invest in Kerala real estate for emotional security and 
                as a portfolio asset. Singapore NRIs (often in finance or shipping) see Kerala property as relatively affordable and 
                high-appreciation. While not as large in absolute numbers, these regions still contribute quality leads – usually for premium 
                apartments in Kochi's metro area or gated villa communities in Thrissur, appealing to their desire for a retirement base in India.
              </p>
            </div>

            <h2>Demographic Profiles of Target NRI Audiences</h2>
            <p>
              Understanding the demographics of NRIs in each market is crucial for tailoring Sobha's outreach. Below are profiles 
              of the typical target audience segments by region, including age, profession, income, community background, and motivations 
              for investing in Kerala real estate:
            </p>

            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold text-cta-primary mb-4">NRI Audience Profiles</h3>
              
              <h4 className="font-bold">Gulf NRIs (UAE, Saudi, Qatar, etc.)</h4>
              <ul>
                <li><strong>Demographics:</strong> Predominantly male (but increasingly female professionals), 30–50 age bracket</li>
                <li><strong>Professions:</strong> Engineers, technicians, bankers, IT professionals, doctors and nurses</li>
                <li><strong>Income:</strong> Middle-class to high-income professionals and entrepreneurs</li>
                <li><strong>Motivations:</strong> Preparing for eventual return/retirement, housing family now, investment for rental income</li>
                <li><strong>Key Drivers:</strong> Strong emotional ties to Kerala, favorable exchange rates, high rental yields (4-6%)</li>
              </ul>

              <h4 className="font-bold">North America (USA and Canada) NRIs</h4>
              <ul>
                <li><strong>Demographics:</strong> Age 35–55, often moved abroad in the IT boom of 1990s/2000s</li>
                <li><strong>Professions:</strong> IT (software engineers, tech managers), healthcare, academic/research</li>
                <li><strong>Income:</strong> Generally high (household incomes frequently &gt;$100K)</li>
                <li><strong>Motivations:</strong> Vacation homes, retirement retreats, investment diversification</li>
                <li><strong>Key Drivers:</strong> Spending winters in Kerala's warm climate, being near aging parents, high returns</li>
              </ul>

              <h4 className="font-bold">UK/Europe NRIs</h4>
              <ul>
                <li><strong>Demographics:</strong> Age 35–55, many with UK citizenship or long-term residency</li>
                <li><strong>Professions:</strong> Healthcare (NHS employs thousands of Malayali nurses and doctors), IT, finance</li>
                <li><strong>Income:</strong> High (though not as high as US)</li>
                <li><strong>Motivations:</strong> Eventual return, dual-living arrangements, escaping cold winters</li>
                <li><strong>Key Drivers:</strong> Relatively low cost of Kerala real estate compared to London/Europe, healthcare access</li>
              </ul>

              <h4 className="font-bold">Asia-Pacific NRIs (Australia, Singapore, etc.)</h4>
              <ul>
                <li><strong>Demographics:</strong> Generally younger cohort 25–45, often recent emigrants</li>
                <li><strong>Professions:</strong> IT and engineering professionals, students-turned-residents</li>
                <li><strong>Income:</strong> Decent earning power, often fewer financial commitments</li>
                <li><strong>Motivations:</strong> Early investment, "just in case" assets, leverage fast growth of Indian cities</li>
                <li><strong>Key Drivers:</strong> High local realty prices (especially Singapore), creating a home base for future</li>
              </ul>
            </div>

            <h2>Signals of Demand for Kochi & Thrissur Properties</h2>
            <p>
              Multiple market indicators demonstrate strong demand for Kochi and Thrissur real estate among NRIs globally. 
              These signals help quantify and validate the interest:
            </p>

            <ul>
              <li>
                <strong>Diaspora Size & Remittances:</strong> Kerala has one of the largest diaspora networks (2.1+ million Keralites abroad). 
                The Gulf region accounts for 86% of these NRKs. Kerala's share of India's NRI remittances nearly doubled to 19.7% (~$23 billion) 
                in FY2024.
              </li>
              <li>
                <strong>Search and Inquiry Trends:</strong> NRIs formed ~9–15% of total property inquiries in India in 2023. During late-2022, 
                when the Indian rupee fell, NRI-driven purchases in Kochi spiked ~25% compared to the previous year.
              </li>
              <li>
                <strong>Property Portals & Forums:</strong> According to a NoBroker survey, NRIs comprised 15% of real estate investments in 2023, 
                projected to reach 20% by 2025. MagicBricks noted nearly 1 out of 10 searches on their platform in 2023 was by an NRI.
              </li>
              <li>
                <strong>NRI Purchase Patterns:</strong> Historically, NRIs have been dominant buyers in Kerala's upscale real estate. 
                Even back in the 2000s, Kerala developers like Skyline and Puravankara reported 60–80% of their unit sales in Kochi were to NRI clients.
              </li>
              <li>
                <strong>Investment Flow and ROI Signals:</strong> A rental yield of ~5% plus capital appreciation in a stable market like 
                Kochi is quite attractive compared to near-zero yields in developed countries.
              </li>
            </ul>

            <h2>Competitor Strategies in International NRI Marketing</h2>
            <p>
              To capture this NRI demand, many developers in Kerala and South India have been actively marketing overseas. 
              Key observations include:
            </p>

            <ul>
              <li>
                <strong>GCC Property Expos & Roadshows:</strong> CREDAI Kerala hosts annual Kerala Property Expo events in Dubai, 
                Sharjah, Muscat, Doha, and Kuwait to showcase projects. At one recent Indian Property Show in Dubai, over 200 builders 
                participated, ~80 of them from South India.
              </li>
              <li>
                <strong>Overseas Sales Offices:</strong> Many developers have established dedicated NRI sales offices abroad. 
                Dubai is a preferred hub, with companies like Skyline Builders opening sales offices there.
              </li>
              <li>
                <strong>Digital Marketing & Remote Engagement:</strong> Competitors run Facebook/Meta ads filtered by location, 
                WhatsApp marketing via NRI community groups, and host webinars and virtual site tours.
              </li>
              <li>
                <strong>NRI-Focused Promotions:</strong> Special promotions exclusively for NRI customers, festival season campaigns 
                around Onam or Diwali, and referral programs tapping into diaspora networks.
              </li>
              <li>
                <strong>Community Outreach:</strong> Sponsoring Malayalee association events abroad, diaspora cultural festivals, 
                and using Malayalam-language media in Gulf countries.
              </li>
            </ul>

            <div className="mt-10 flex justify-between">
              <Link to="/nri-portal" className="inline-flex items-center text-cta-primary hover:text-cta-accent transition-colors font-medium">
                Back to Overview
              </Link>
              <Link to="/nri-portal/strategy" className="inline-flex items-center text-cta-primary hover:text-cta-accent transition-colors font-medium">
                View Lead Generation Strategy
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

export default NriResearch;
