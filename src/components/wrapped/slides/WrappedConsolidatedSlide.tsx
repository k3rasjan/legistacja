'use client';

import { useEffect, useState } from 'react';
import { ConsolidatedCard } from '@/app/wrapped/page';

interface WrappedConsolidatedSlideProps {
  card: ConsolidatedCard;
  index: number;
  total: number;
}

export function WrappedConsolidatedSlide({ card, index, total }: WrappedConsolidatedSlideProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [card.id]);

  // Category-based accent colors
  const getAccentColor = () => {
    if (card.id.includes('projekty')) return '#a855f7';
    if (card.id.includes('konsultacje')) return '#3b82f6';
    if (card.id.includes('zmiany-tresci')) return '#f97316';
    if (card.id.includes('zmiany-etapu')) return '#22c55e';
    return '#ec4899';
  };

  const accentColor = getAccentColor();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 py-20 text-white relative overflow-hidden bg-[#1a1a2e]">
      {/* Accent gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% -20%, ${accentColor}40 0%, transparent 50%)`,
        }}
      />

      {/* Floating orb */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[150px] opacity-30"
        style={{
          background: accentColor,
          top: '20%',
          right: '-10%',
        }}
      />

      <div className={`relative z-10 max-w-4xl w-full text-center transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Card number & Title - secondary */}
        <div className="mb-8">
          <span className="text-white/40 text-sm tracking-widest uppercase font-medium">
            {index} / {total}
          </span>
          <h2 className="text-2xl md:text-3xl font-medium text-white/60 mt-2">
            {card.title}
          </h2>
        </div>

        {/* Items - big and prominent */}
        <div className="space-y-6">
          {card.items.map((item) => (
            <div
              key={item.ustawa.id}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
              style={{
                color: 'white',
                textShadow: '0 0 60px rgba(255,255,255,0.3)',
              }}
            >
              {item.ustawa.shortTitle}
            </div>
          ))}
        </div>

        {/* Subtitle - count at bottom */}
        {card.subtitle && (
          <p className="text-white/40 text-lg font-medium mt-10">
            {card.subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
