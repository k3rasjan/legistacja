'use client';

import { useEffect, useState } from 'react';

interface WrappedIntroSlideProps {
  daysCovered: number;
  totalUstawy: number;
  totalUpdates: number;
  isFirstVisit: boolean;
}

export function WrappedIntroSlide({ daysCovered, isFirstVisit }: WrappedIntroSlideProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 300),
      setTimeout(() => setStep(2), 800),
      setTimeout(() => setStep(3), 1500),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 text-white text-center relative overflow-hidden bg-[#1a1a2e]">
      {/* Animated gradient orbs */}
      <div
        className="absolute w-[1000px] h-[1000px] rounded-full opacity-40 blur-[200px]"
        style={{
          background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          animation: 'pulse 4s ease-in-out infinite',
        }}
      />

      {/* Secondary orb */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: 'linear-gradient(45deg, #06b6d4 0%, #3b82f6 100%)',
          top: '30%',
          left: '60%',
          transform: 'translate(-50%, -50%)',
          animation: 'pulse 3s ease-in-out infinite reverse',
        }}
      />

      <div className="relative z-10 max-w-5xl">
        {/* Welcome text */}
        <p
          className={`text-2xl md:text-3xl text-white/60 mb-6 font-medium tracking-wide transition-all duration-1000 ${
            step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {isFirstVisit ? 'Twoje pierwsze' : 'Witaj ponownie'}
        </p>

        {/* Main title - HUGE */}
        <h1
          className={`text-8xl md:text-9xl lg:text-[12rem] font-black mb-8 tracking-tighter transition-all duration-1000 ${
            step >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{
            background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.8) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Wrapped
        </h1>

        {/* Days counter */}
        <div
          className={`transition-all duration-1000 ${
            step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="inline-flex items-baseline gap-4">
            <span className="text-white/50 text-2xl font-medium">
              {isFirstVisit ? 'Ostatnie' : 'Minęło'}
            </span>
            <span
              className="text-7xl md:text-8xl font-black"
              style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {isFirstVisit ? '30' : daysCovered}
            </span>
            <span className="text-white/50 text-2xl font-medium">
              dni
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
