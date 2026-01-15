import { BarChart3, MapPin, Target } from 'lucide-react';
import Image from 'next/image';

export default function IntelligenceSection() {
  const features = [
    {
      icon: <BarChart3 className="w-10 h-10 text-white" />,
      title: 'Market behavior analysis',
      description: 'We analyze actual transaction data, not asking prices or outdated reports.',
    },
    {
      icon: <MapPin className="w-10 h-10 text-white" />,
      title: 'Field-verified price signals',
      description: 'On-ground research and verification to understand real market conditions.',
    },
    {
      icon: <Target className="w-10 h-10 text-white" />,
      title: 'Prescriptive action strategies',
      description: 'Clear recommendations on what to do, when to act, and how to execute.',
    },
  ];

  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Decision intelligence, not opinions
        </h2>
        <p className="text-white/80 text-center mb-12 max-w-2xl mx-auto">
          Real decisions, backed by real data — not guesswork
        </p>

        {/* Main Image */}
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12">
          <Image
            src="https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&w=2000&q=80"
            alt="Aerial view of properties"
            fill
            className="object-cover"
          />
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
