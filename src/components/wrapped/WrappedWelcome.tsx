'use client';

import { useEffect, useState } from 'react';
import { Sparkles, ArrowDown } from 'lucide-react';

interface WrappedWelcomeProps {
  daysSinceLastVisit: number;
  onContinue: () => void;
}

export function WrappedWelcome({ daysSinceLastVisit, onContinue }: WrappedWelcomeProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const timer1 = setTimeout(() => setIsVisible(true), 100);
    const timer2 = setTimeout(() => setShowButton(true), 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const getDaysText = (days: number): string => {
    if (days === 1) return '1 dzień';
    if (days >= 2 && days <= 4) return `${days} dni`;
    return `${days} dni`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 25%, #ec4899 50%, #f43f5e 75%, #6366f1 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            top: '10%',
            left: '20%',
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{
            background: 'linear-gradient(135deg, #ec4899, #f43f5e)',
            bottom: '15%',
            right: '15%',
            animation: 'float 10s ease-in-out infinite reverse',
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full blur-3xl opacity-15"
          style={{
            background: 'linear-gradient(135deg, #a855f7, #6366f1)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'float 12s ease-in-out infinite',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">
        {/* Sparkle icon */}
        <div
          className={`mb-8 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative inline-block">
            <Sparkles className="h-16 w-16 text-primary" />
            <div
              className="absolute inset-0 animate-ping"
              style={{ animationDuration: '2s' }}
            >
              <Sparkles className="h-16 w-16 text-primary opacity-30" />
            </div>
          </div>
        </div>

        {/* Welcome text */}
        <h1
          className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 delay-200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Witaj ponownie!
        </h1>

        {/* Days count */}
        <div
          className={`mb-6 transition-all duration-1000 delay-400 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-xl text-muted-foreground mb-2">
            Minęło już
          </p>
          <div className="relative inline-block">
            <span
              className="text-6xl md:text-7xl font-black bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
              }}
            >
              {getDaysText(daysSinceLastVisit)}
            </span>
          </div>
          <p className="text-xl text-muted-foreground mt-2">
            od Twojej ostatniej wizyty
          </p>
        </div>

        {/* Subtitle */}
        <p
          className={`text-lg text-muted-foreground mb-12 transition-all duration-1000 delay-600 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Oto co wydarzyło się w tym czasie w polskiej legislacji
        </p>

        {/* Continue button */}
        <button
          onClick={onContinue}
          className={`group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg text-white overflow-hidden transition-all duration-500 ${
            showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
          }}
        >
          {/* Button shine effect */}
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              animation: 'shimmer 2s infinite',
            }}
          />
          <span className="relative">Zobacz zmiany</span>
          <ArrowDown className="relative h-5 w-5 animate-bounce" />
        </button>
      </div>

      {/* Custom keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
