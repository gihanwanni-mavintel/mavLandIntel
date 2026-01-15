import { User, Building2, Hammer, Landmark } from 'lucide-react';

export default function WhoWeWorkWith() {
  const clientTypes = [
    {
      icon: <User className="w-8 h-8 text-white" />,
      title: 'Individual Sellers',
      problem: 'Unsure about the right price and timing to sell your land',
      howWeHelp: 'We provide data-backed price ranges and strategic timing recommendations',
      outcome: 'Sell faster, at the right price, with confidence',
    },
    {
      icon: <Building2 className="w-8 h-8 text-white" />,
      title: 'Companies',
      problem: 'Holding land assets without clear strategic direction',
      howWeHelp: 'Comprehensive market intelligence to inform hold, sell, or develop decisions',
      outcome: 'Optimized asset portfolio decisions backed by market data',
    },
    {
      icon: <Hammer className="w-8 h-8 text-white" />,
      title: 'Investors & Developers',
      problem: 'Need reliable market intelligence before major land acquisitions',
      howWeHelp: 'In-depth analysis of market trends, comparable transactions, and risk factors',
      outcome: 'Investment decisions grounded in verified market intelligence',
    },
    {
      icon: <Landmark className="w-8 h-8 text-white" />,
      title: 'Banks & Institutions',
      problem: 'Require objective market insights for lending decisions',
      howWeHelp: 'Independent decision support (not statutory valuation) for informed lending',
      outcome: 'Enhanced due diligence with current market intelligence',
    },
  ];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-16">
          Who we work with
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientTypes.map((client, index) => (
            <div
              key={index}
              className="bg-primary rounded-2xl p-8 text-white hover:bg-secondary transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon and Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                  {client.icon}
                </div>
                <h3 className="text-2xl font-bold">{client.title}</h3>
              </div>

              {/* Common Problem */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white/80 uppercase mb-2">
                  Common Problem
                </h4>
                <p className="text-white/90">{client.problem}</p>
              </div>

              {/* How We Help */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white/80 uppercase mb-2">
                  How We Help
                </h4>
                <p className="text-white/90">{client.howWeHelp}</p>
              </div>

              {/* Typical Outcome */}
              <div>
                <h4 className="text-sm font-semibold text-white/80 uppercase mb-2">
                  Typical Outcome
                </h4>
                <p className="text-light-green font-semibold">{client.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
