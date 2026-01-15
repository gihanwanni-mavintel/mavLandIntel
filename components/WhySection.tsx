import { TrendingDown, Heart, FileX, Clock } from 'lucide-react';

export default function WhySection() {
  const reasons = [
    {
      icon: <TrendingDown className="w-8 h-8 text-primary" />,
      title: 'Owners rely on asking prices, not real transactions',
      description: 'Many sellers base their pricing on what others are asking, not what properties actually sell for.',
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: 'Brokers push deals, not outcomes',
      description: 'Real estate agents are incentivized to close deals quickly, not necessarily to get you the best outcome.',
    },
    {
      icon: <FileX className="w-8 h-8 text-primary" />,
      title: 'Traditional valuations are static and quickly outdated',
      description: 'Standard property valuations become obsolete rapidly in dynamic markets, leaving you with stale data.',
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: 'Critical decisions are made without on-ground verification',
      description: 'Major investments are often made based on desktop research without proper field verification.',
    },
  ];

  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Why land decisions go wrong
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  {reason.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
