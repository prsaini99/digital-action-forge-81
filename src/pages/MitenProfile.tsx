import React from 'react';
import { 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Award,
  TrendingUp,
  Brain,
  BarChart4,
  Users
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const MitenProfile = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen pt-24 pb-16">
      <div className="container-custom max-w-6xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-cta-primary shadow-lg">
            <img 
              src="/lovable-uploads/becd3c8d-7ba4-4daa-acd1-4e026e7821c5.png" 
              alt="Miten Mehta" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-3 text-cta-primary">Miten Mehta</h1>
            <h2 className="text-xl md:text-2xl mb-6 text-cta-secondary">CMO and Chief of AI Solutions at Mondee (Nasdaq – MOND)</h2>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin size={18} />
                <span>11921, Carmel Creek Road, San Diego, CA</span>
              </div>
              
              <a 
                href="mailto:mitennmehta@gmail.com" 
                className="flex items-center gap-2 text-gray-700 hover:text-cta-accent transition-colors"
              >
                <Mail size={18} />
                <span>mitennmehta@gmail.com</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/mitenmehta" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-700 hover:text-cta-accent transition-colors"
              >
                <Linkedin size={18} />
                <span>in/mitenmehta</span>
              </a>
              
              <a 
                href="tel:+15107175712" 
                className="flex items-center gap-2 text-gray-700 hover:text-cta-accent transition-colors"
              >
                <Phone size={18} />
                <span>+1 510 717 5712</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Profile Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white shadow hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <Award className="text-cta-primary shrink-0" size={24} />
              <div>
                <h3 className="font-display font-semibold text-lg mb-2">C-Suite Leader</h3>
                <p className="text-gray-600">Customer-centric, revenue-focused, and results-driven business leader with a profound bias for action and a commitment to achieving outcomes.</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <TrendingUp className="text-cta-primary shrink-0" size={24} />
              <div>
                <h3 className="font-display font-semibold text-lg mb-2">P&L Champion</h3>
                <p className="text-gray-600">With over 25 years of experience in steering repeatable, scalable, profitable, and non-linear growth across TravelTech, FinTech, EdTech, RetailTech, and Digital Native sectors.</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <Brain className="text-cta-primary shrink-0" size={24} />
              <div>
                <h3 className="font-display font-semibold text-lg mb-2">AI Architect</h3>
                <p className="text-gray-600">Leverages cutting-edge solutions like Open AI/GPT-4 and Google Gemini/Vertex, integrating intelligence into digital user, supplier, and customer journeys.</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <BarChart4 className="text-cta-primary shrink-0" size={24} />
              <div>
                <h3 className="font-display font-semibold text-lg mb-2">Revenue Catalyst</h3>
                <p className="text-gray-600">Propels Cloud/SaaS/PaaS adoption, driving user acquisition, retention, and growth with ROI-led business cases and strategic partner ecosystems.</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <Users className="text-cta-primary shrink-0" size={24} />
              <div>
                <h3 className="font-display font-semibold text-lg mb-2">Team Alchemist</h3>
                <p className="text-gray-600">Talent magnet specializing in assembling high-performing, cross-functional dream teams, fostering innovation and retaining top-tier performers.</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Professional History */}
        <div className="bg-white rounded-lg p-8 shadow-md mb-12">
          <h2 className="text-3xl font-display font-bold mb-6 text-cta-primary">Professional History</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Mondee (Nasdaq – MOND)</h3>
              <p className="text-gray-500 italic mb-3">CMO and Chief of AI Solutions</p>
              <p className="text-gray-700">
                Leads the transformation of Mondee's user digital journeys through strategic GTM programs, including APN (AbhI Partner Network) and MAPS (Mondee AI Platform Services), to drive company growth.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Fractal</h3>
              <p className="text-gray-500 italic mb-3">Global Alliance Officer</p>
              <p className="text-gray-700">
                Steered hyperscaler and AI strategy and cloud partnerships, building an ecosystem for joint GTM, solutions, and new customer and revenue pipelines. Expertise extended to expanding and growing AI partner solutions and stacks to customize ML models for solving customer challenges.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Digital-Tech & SaaS Expert</h3>
              <p className="text-gray-700">
                Proficiency in building and scaling digital-tech and SaaS businesses globally, leveraging partner ecosystems and distribution networks. Focuses on reducing CAC and churn, expanding margins, and increasing ARR/ACV. His 3P flywheel growth model – People, Products, and Partnerships – centered around customers, has been widely recognized by industry analysts for accelerating SaaS revenues.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Google Cloud</h3>
              <p className="text-gray-700">
                Led strategic customer and partner accounts, establishing the Customer Adoption Platform (CAP). This initiative rewarded and recognized real-time contributions from ecosystem communities, driving user engagement and product adoption.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">CleverTap</h3>
              <p className="text-gray-500 italic mb-3">Chief Alliance Officer</p>
              <p className="text-gray-700">
                Rolled out CAN (CleverTap Alliance Network) globally, significantly accelerating revenue growth non-linearly through Solution Partners and contributing compounding strategic value through deep integrations with Technology partners.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">KloudData</h3>
              <p className="text-gray-500 italic mb-3">Global Head of Strategic Alliance</p>
              <p className="text-gray-700">
                Created and launched the CARE (Customer Acquisition Retention & Engagement) framework. This involved a 'Co-Innovate, Co-Market & Co-Sell' field interlock GTM model to penetrate underserved market segments, verticals, and regions.
              </p>
            </div>
          </div>
        </div>
        
        {/* Entrepreneurial Journey */}
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-3xl font-display font-bold mb-6 text-cta-primary">Entrepreneurial Journey</h2>
          
          <p className="text-gray-700 mb-6">
            Miten co-founded Spinta Global Accelerator, eComLive (acquired by InfoSpace), and MoConDi (acquired by MobileMedia). He has also served on the boards of MCX, IEX, and 63 moons, leading the acqui-hire of PurpleData (AI), Move10X (Logistics), Jaypar (SAP), and Lambent (Mobile).
          </p>
          
          <p className="text-gray-700">
            Miten has been an advisor and investor to several successful ventures, including FloxyPay, Koinbasket, Copperwire, Intelligent Payment, NuPay, among others. Committed to 'paying it forward,' he actively contributes as a volunteer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MitenProfile;
