'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const scrollToRequestReview = () => {
    const section = document.getElementById('request-review');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2000&q=80"
          alt="Suburban houses aerial view"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Make the right land decision backed by real market intelligence, not guesswork.
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          We deliver deep research and prescriptive recommendations to support land selling, buying, and holding decisions across Sri Lanka.
        </p>

        {/* CTA Button */}
        <div className="flex items-center justify-center">
          <button
            onClick={scrollToRequestReview}
            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-light-green hover:text-white transition-all duration-300 flex items-center gap-2 shadow-xl"
          >
            Request a Decision Review
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}
