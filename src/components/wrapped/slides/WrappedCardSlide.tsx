'use client';

import { useEffect, useState } from 'react';
import { WrappedSummary, statusLabels, categoryLabels } from '@/types';

interface WrappedCardSlideProps {
  summary: WrappedSummary;
  index: number;
  total: number;
}

export function WrappedCardSlide({ summary, index, total }: WrappedCardSlideProps) {
  const [step, setStep] = useState(0);
  const [textRevealed, setTextRevealed] = useState(0);

  useEffect(() => {
    setStep(0);
    setTextRevealed(0);

    const timers = [
      setTimeout(() => setStep(1), 100),
      setTimeout(() => setStep(2), 300),
      setTimeout(() => setStep(3), 500),
      setTimeout(() => setStep(4), 800),
    ];

    // Reveal summary text word by word
    const words = summary.basicSummary.split(' ');
    const wordTimers = words.map((_, i) =>
      setTimeout(() => setTextRevealed(i + 1), 1000 + i * 40)
    );

    return () => {
      timers.forEach(clearTimeout);
      wordTimers.forEach(clearTimeout);
    };
  }, [summary.id, summary.basicSummary]);

  const words = summary.basicSummary.split(' ');

  // Subtle accent color based on status
  const accentColors: Record<string, string> = {
    'prekonsultacje': 'rgba(168, 85, 247, 0.15)',
    'konsultacje': 'rgba(59, 130, 246, 0.15)',
    'prace-rzadowe': 'rgba(245, 158, 11, 0.15)',
    'sejm': 'rgba(249, 115, 22, 0.15)',
    'senat': 'rgba(236, 72, 153, 0.15)',
    'prezydent': 'rgba(99, 102, 241, 0.15)',
    'uchwalona': 'rgba(34, 197, 94, 0.15)',
    'odrzucona': 'rgba(239, 68, 68, 0.15)',
  };

  const accent = accentColors[summary.ustawa.status] || accentColors['konsultacje'];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 py-20 text-white relative overflow-hidden bg-[#0a0a0f]">
      {/* Subtle accent gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 30%, ${accent} 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10 max-w-2xl w-full">
        {/* Card number */}
        <div
          className={`mb-8 transition-all duration-500 ${
            step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-white/30 text-sm tracking-widest uppercase">
            {index} / {total}
          </span>
        </div>

        {/* Status */}
        <div
          className={`mb-4 transition-all duration-500 ${
            step >= 1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/10 rounded-full text-sm text-white/70">
            {statusLabels[summary.ustawa.status]}
          </span>
        </div>

        {/* Title */}
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight tracking-tight transition-all duration-700 ${
            step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {summary.ustawa.shortTitle}
        </h2>

        {/* Ministry */}
        <p
          className={`text-white/40 text-lg mb-8 transition-all duration-700 ${
            step >= 2 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {summary.ustawa.ministry}
        </p>

        {/* Categories */}
        <div
          className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 ${
            step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {summary.ustawa.categories.map((cat) => (
            <span
              key={cat}
              className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/50"
            >
              {categoryLabels[cat]}
            </span>
          ))}
        </div>

        {/* Summary with word reveal */}
        <div
          className={`bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-700 ${
            step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-lg leading-relaxed text-white/80">
            {words.map((word, i) => (
              <span
                key={i}
                className={`inline-block mr-1.5 transition-all duration-150 ${
                  i < textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                }`}
              >
                {word}
              </span>
            ))}
          </p>
        </div>

        {/* Updates count */}
        <div
          className={`mt-6 transition-all duration-700 ${
            step >= 4 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-white/30 text-sm">
            {summary.updates.length} {summary.updates.length === 1 ? 'aktualizacja' :
              summary.updates.length < 5 ? 'aktualizacje' : 'aktualizacji'}
          </span>
        </div>
      </div>
    </div>
  );
}
