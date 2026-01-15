import { FileText, Search, Lightbulb, Target, Handshake } from 'lucide-react';
import Image from 'next/image';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: <FileText className="w-6 h-6" />,
      title: 'Information Intake',
      description: 'Client submits documents, location, and context',
    },
    {
      number: '02',
      icon: <Search className="w-6 h-6" />,
      title: 'Market & Field Research',
      description: 'Desktop analysis + on-ground price verification',
    },
    {
      number: '03',
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Intelligence Synthesis',
      description: 'Market signals turned into clear decision paths',
    },
    {
      number: '04',
      icon: <Target className="w-6 h-6" />,
      title: 'Prescriptive Recommendation',
      description: 'One primary action + clear alternatives',
    },
    {
      number: '05',
      icon: <Handshake className="w-6 h-6" />,
      title: 'Execution Support',
      description: 'Negotiation & legal coordination (Optional)',
    },
  ];

  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          How it works
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80"
              alt="Professional consultation meeting"
              fill
              className="object-cover"
            />
          </div>

          {/* Steps Side */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-light-green rounded-lg flex items-center justify-center text-white font-bold mb-2">
                      {step.icon}
                    </div>
                    <div className="text-white/60 text-sm font-semibold text-center">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/80">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
