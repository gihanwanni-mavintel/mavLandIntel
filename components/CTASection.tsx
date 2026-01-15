'use client';

import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('request-review');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Stop guessing. Decide with confidence.
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Get market-backed intelligence that turns uncertainty into clear action
        </p>

        <button
          onClick={scrollToContact}
          className="bg-white text-primary px-10 py-4 rounded-lg font-semibold hover:bg-light-green hover:text-white transition-all duration-300 inline-flex items-center gap-2 shadow-xl text-lg"
        >
          Request a Decision Review
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
