'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function WrappedOutroSlide() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 py-20 text-white relative overflow-hidden bg-[#1a1a2e]">
      {/* Animated gradient orbs */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full opacity-30 blur-[180px]"
        style={{
          background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className={`relative z-10 text-center transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h2 className="text-7xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight">
          To tyle!
        </h2>
        <p className="text-2xl md:text-3xl text-white/50 font-medium mb-12">
          Wróć później po więcej aktualizacji
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <Link
            href="/wrapped/podsumowanie"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-neutral-900 rounded-full font-semibold text-lg hover:bg-white/90 transition-all hover:scale-105"
          >
            Zobacz podsumowanie
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all hover:scale-105"
          >
            Strona główna
          </Link>
        </div>
      </div>
    </div>
  );
}
