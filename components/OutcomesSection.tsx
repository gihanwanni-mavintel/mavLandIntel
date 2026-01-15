'use client';

import { FileText } from 'lucide-react';
import Image from 'next/image';

export default function OutcomesSection() {
  const scrollToRequestReview = () => {
    const section = document.getElementById('request-review');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const caseStudies = [
    {
      title: 'Colombo 7 Residential Land Sale',
      before: {
        title: 'Before',
        description: 'Owner considering selling at asking price of LKR 95M based on broker recommendation',
      },
      after: {
        title: 'After',
        description: 'Sold at LKR 107M after identifying undervalued comparable transactions and optimal timing',
      },
      thinking: 'Market intelligence revealed recent corridor transactions at higher bands. Recommended delayed sale by 2 months to capture rising demand.',
    },
    {
      title: 'Galle Road Commercial Property Hold Decision',
      before: {
        title: 'Before',
        description: 'Developer unsure whether to sell immediately or wait for better market conditions',
      },
      after: {
        title: 'After',
        description: 'Retained asset for 8 months, sold at 18% premium based on projected market trajectory',
      },
      thinking: 'Field research indicated upcoming infrastructure improvements. Market behavior analysis predicted price appreciation in 6-9 month window.',
    },
  ];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-4">
          How our intelligence changes outcomes
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Real decisions, backed by real data — not guesswork
        </p>

        {/* Map Image */}
        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-12 bg-gray-200">
          <Image
            src="https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&w=2000&q=80"
            alt="Property map visualization"
            fill
            className="object-cover"
          />
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-text-primary">
                  {study.title}
                </h3>
              </div>

              {/* Before */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                  {study.before.title}
                </h4>
                <p className="text-gray-700">
                  {study.before.description}
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-4"></div>

              {/* After */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                  {study.after.title}
                </h4>
                <p className="text-primary font-semibold">
                  {study.after.description}
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-4"></div>

              {/* Our Thinking */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                  Our Thinking
                </h4>
                <p className="text-gray-600 text-sm">
                  {study.thinking}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Privacy Notice */}
        <p className="text-center text-gray-500 text-sm mb-8">
          All case studies anonymized to protect client confidentiality
        </p>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={scrollToRequestReview}
            className="bg-primary hover:bg-light-green text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
          >
            Request your own decision review
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
