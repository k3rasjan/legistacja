'use client';

import { useEffect, useState } from 'react';
import { FileText, RefreshCw, Calendar } from 'lucide-react';

interface WrappedStatsSlideProps {
  totalLaws: number;
  totalUpdates: number;
  daysCovered: number;
}

function AnimatedNumber({ value, delay }: { value: number; delay: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const visibilityTimer = setTimeout(() => setIsVisible(true), delay);

    const duration = 1000;
    const steps = 20;
    const stepValue = value / steps;
    let currentStep = 0;

    const countTimer = setTimeout(() => {
      const interval = setInterval(() => {
        currentStep++;
        setDisplayValue(Math.min(Math.round(stepValue * currentStep), value));
        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, duration / steps);
    }, delay);

    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(countTimer);
    };
  }, [value, delay]);

  return (
    <span
      className={`inline-block transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {displayValue}
    </span>
  );
}

export function WrappedStatsSlide({ totalLaws, totalUpdates, daysCovered }: WrappedStatsSlideProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 100),
      setTimeout(() => setStep(2), 400),
      setTimeout(() => setStep(3), 700),
      setTimeout(() => setStep(4), 1000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const stats = [
    {
      icon: FileText,
      value: totalLaws,
      label: 'ustaw z aktualizacjami',
      delay: 400,
    },
    {
      icon: RefreshCw,
      value: totalUpdates,
      label: 'zmian w prawie',
      delay: 600,
    },
    {
      icon: Calendar,
      value: daysCovered,
      label: 'dni podsumowania',
      delay: 800,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 text-white relative overflow-hidden bg-[#0a0a0f]">
      {/* Subtle gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 w-full max-w-2xl">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">W liczbach</h2>
        </div>

        {/* Stats */}
        <div className="space-y-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex items-center gap-8 transition-all duration-700 ${
                step >= index + 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <stat.icon className="w-6 h-6 text-white/60" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="text-5xl md:text-6xl font-bold tracking-tight">
                  <AnimatedNumber value={stat.value} delay={stat.delay} />
                </div>
                <div className="text-white/40 text-base mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
