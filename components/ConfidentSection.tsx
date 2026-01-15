import { FileText, BarChart2, Target, RefreshCw } from 'lucide-react';
import Image from 'next/image';

export default function ConfidentSection() {
  const benefits = [
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: 'Expected market transaction bands',
      description: 'Know the realistic price range based on actual comparable sales',
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-primary" />,
      title: 'Area & corridor comparisons',
      description: 'Understand how your property compares to nearby developments',
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: 'Negotiation and execution guidance',
      description: 'Strategic advice on timing, pricing, and negotiation tactics',
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-primary" />,
      title: 'Ongoing intelligence (for subscribers)',
      description: 'Continuous market updates and alerts for changing conditions',
    },
  ];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-4">
          Clear direction. Confident decisions.
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Get market-backed intelligence that turns uncertainty into clear action
        </p>

        {/* Main Image */}
        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-12">
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2000&q=80"
            alt="Workspace with planning materials"
            fill
            className="object-cover"
          />
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-primary text-white rounded-xl p-6 hover:bg-secondary transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {benefit.title}
              </h3>
              <p className="text-white/80 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Two Service Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* One-Time Service */}
          <div className="bg-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Land Decision Intelligence Report</h3>
            <p className="text-white/80 mb-6">One-Time Service</p>
            <ul className="space-y-3">
              {[
                'Complete behavior snapshot',
                'Vicinity & corridor comparison',
                'Data-driven transaction bands',
                'Clear action & negotiation plan',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-light-green text-xl">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscription Service */}
          <div className="bg-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Land Intelligence Subscription</h3>
            <p className="text-white/80 mb-6">Ongoing Service</p>
            <ul className="space-y-3">
              {[
                'Monthly market updates',
                'Updated transaction bands',
                'Ongoing action guidance',
                'Ideal for serious sellers & investors',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-light-green text-xl">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Add-on Service */}
        <div className="mt-8 bg-white border-2 border-primary rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-text-primary mb-2">
                Transaction & Legal Support (Add-On)
              </h4>
              <p className="text-gray-600">
                Legal coordination via experienced attorneys • Execution support after decisions are made
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
