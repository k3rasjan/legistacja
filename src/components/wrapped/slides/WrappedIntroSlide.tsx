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
    <div className="w-full h-full flex flex-col items-center justify-center px-8 text-foreground text-center relative overflow-hidden bg-background">
      {/* Animated gradient orbs */}
      <div
        className="absolute w-[1000px] h-[1000px] rounded-full opacity-20 blur-[200px]"
        style={{
          background: 'linear-gradient(135deg, #d4d4d8 0%, #a1a1aa 50%, #71717a 100%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          animation: 'pulse 4s ease-in-out infinite',
        }}
      />

      {/* Secondary orb */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-15 blur-[120px]"
        style={{
          background: 'linear-gradient(45deg, #a1a1aa 0%, #71717a 100%)',
          top: '30%',
          left: '60%',
          transform: 'translate(-50%, -50%)',
          animation: 'pulse 3s ease-in-out infinite reverse',
        }}
      />

      <div className="relative z-10 max-w-5xl px-4">
        {/* Welcome text */}
        <p
          className={`text-lg sm:text-2xl md:text-3xl text-muted-foreground mb-4 md:mb-6 font-medium tracking-wide transition-all duration-1000 ${
            step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {isFirstVisit ? 'Twoje pierwsze' : 'Witaj ponownie'}
        </p>

        {/* Main title */}
        <h1
          className={`text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-4 md:mb-6 tracking-tighter transition-all duration-1000 ${
            step >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{
            background: 'linear-gradient(135deg, #18181b 0%, #3f3f46 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Zmiany w pigułce
        </h1>

        {/* Days counter */}
        <div
          className={`transition-all duration-1000 ${
            step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="inline-flex items-baseline gap-2 sm:gap-3 flex-wrap justify-center">
            <span className="text-muted-foreground text-lg sm:text-xl font-medium">
              {isFirstVisit ? 'Ostatnie' : 'Minęło'}
            </span>
            <span
              className="text-4xl sm:text-6xl md:text-7xl font-black"
              style={{
                background: 'linear-gradient(135deg, #18181b 0%, #52525b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {isFirstVisit ? '30' : daysCovered}
            </span>
            <span className="text-muted-foreground text-base sm:text-xl font-medium">
              dni
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
