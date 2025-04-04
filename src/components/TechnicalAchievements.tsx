
import { Sparkles, Activity, Layers, Cpu, ShieldCheck, Blocks } from 'lucide-react';

const achievements = [
  {
    title: 'AI-Driven E-commerce',
    description: 'Developed an AI-powered e-commerce platform that increased conversions by 35%.',
    icon: <Sparkles className="w-10 h-10 text-white" />,
    stat: '35%',
    result: 'Increased Conversions'
  },
  {
    title: 'DeFi Platform',
    description: 'Built a decentralized finance staking platform achieving $50M+ TVL within 6 months.',
    icon: <Layers className="w-10 h-10 text-white" />,
    stat: '$50M+',
    result: 'Total Value Locked'
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Designed cloud solutions for Fortune 500 clients, reducing operational costs significantly.',
    icon: <Cpu className="w-10 h-10 text-white" />,
    stat: '40%',
    result: 'Cost Reduction'
  },
  {
    title: 'AI Trading Bots',
    description: 'Created AI-powered crypto trading bots enhancing portfolio returns for clients.',
    icon: <Activity className="w-10 h-10 text-white" />,
    stat: '20%',
    result: 'Portfolio Returns'
  },
  {
    title: 'Blockchain Supply Chain',
    description: 'Developed blockchain supply-chain solutions that dramatically reduced fraud.',
    icon: <ShieldCheck className="w-10 h-10 text-white" />,
    stat: '50%',
    result: 'Fraud Reduction'
  },
  {
    title: 'Metaverse Development',
    description: 'Created virtual event spaces in the metaverse connecting global participants.',
    icon: <Blocks className="w-10 h-10 text-white" />,
    stat: '10K+',
    result: 'Global Participants'
  }
];

const TechnicalAchievements = () => {
  return (
    <section className="section-padding gradient-bg text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Technical Achievements
          </h2>
          <p className="text-xl text-white/80">
            Our team has delivered groundbreaking technical solutions across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="mb-4 p-3 bg-cta-accent/30 rounded-lg inline-block">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">
                {achievement.title}
              </h3>
              <p className="text-white/80 mb-4">
                {achievement.description}
              </p>
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-display font-bold text-cta-highlight">
                  {achievement.stat}
                </span>
                <span className="text-white/80">
                  {achievement.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalAchievements;
