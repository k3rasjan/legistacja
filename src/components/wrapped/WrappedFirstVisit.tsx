'use client';

import { useEffect, useState } from 'react';
import { Sparkles, ArrowDown, Calendar } from 'lucide-react';

interface WrappedFirstVisitProps {
  onContinue: () => void;
}

export function WrappedFirstVisit({ onContinue }: WrappedFirstVisitProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible(true), 100);
    const timer2 = setTimeout(() => setShowButton(true), 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(135deg, #e4e4e7 0%, #d4d4d8 25%, #a1a1aa 50%, #d4d4d8 75%, #e4e4e7 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{
            background: 'linear-gradient(135deg, #d4d4d8, #a1a1aa)',
            top: '10%',
            left: '20%',
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{
            background: 'linear-gradient(135deg, #a1a1aa, #71717a)',
            bottom: '15%',
            right: '15%',
            animation: 'float 10s ease-in-out infinite reverse',
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{
            background: 'linear-gradient(135deg, #71717a, #d4d4d8)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'float 12s ease-in-out infinite',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">
        {/* Icon */}
        <div
          className={`mb-8 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative inline-flex items-center justify-center">
            <div className="absolute">
              <Sparkles className="h-20 w-20 text-primary opacity-20" />
            </div>
            <Calendar className="h-16 w-16 text-primary relative" />
          </div>
        </div>

        {/* Welcome text */}
        <h1
          className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 delay-200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Zmiany w pigułce
        </h1>

        {/* Period indicator */}
        <div
          className={`mb-6 transition-all duration-1000 delay-400 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-xl text-muted-foreground mb-3">
            Podsumowanie
          </p>
          <div className="relative inline-block">
            <span
              className="text-5xl md:text-6xl font-black bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #18181b 0%, #3f3f46 50%, #52525b 100%)',
              }}
            >
              ostatnich 30 dni
            </span>
          </div>
          <p className="text-xl text-muted-foreground mt-3">
            w polskiej legislacji
          </p>
        </div>

        {/* Subtitle */}
        <p
          className={`text-lg text-muted-foreground mb-12 transition-all duration-1000 delay-600 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Poznaj najważniejsze zmiany w prawie, które mogą Cię dotyczyć
        </p>

        {/* Continue button */}
        <button
          onClick={onContinue}
          className={`group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg text-white overflow-hidden transition-all duration-500 bg-neutral-900 hover:bg-neutral-800 ${
            showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              animation: 'shimmer 2s infinite',
            }}
          />
          <span className="relative">Rozpocznij</span>
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
