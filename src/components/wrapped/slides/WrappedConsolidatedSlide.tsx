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

  // Category-based accent colors (neutral grays)
  const getAccentColor = () => {
    if (card.id.includes('projekty')) return '#71717a';
    if (card.id.includes('konsultacje')) return '#a1a1aa';
    if (card.id.includes('zmiany-tresci')) return '#52525b';
    if (card.id.includes('zmiany-etapu')) return '#d4d4d8';
    return '#71717a';
  };

  const accentColor = getAccentColor();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-20 text-foreground relative overflow-hidden bg-background">
      {/* Accent gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% -20%, ${accentColor}40 0%, transparent 50%)`,
        }}
      />

      {/* Floating orb */}
      <div
        className="absolute w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full blur-[100px] sm:blur-[120px] md:blur-[150px] opacity-30"
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
        <div className="mb-4 sm:mb-6 md:mb-8">
          <span className="text-neutral-400 text-xs sm:text-sm tracking-widest uppercase font-medium">
            {index} / {total}
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground mt-1 sm:mt-2">
            {card.title}
          </h2>
        </div>

        {/* Items - big and prominent */}
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          {card.items.map((item) => (
            <div
              key={item.ustawa.id}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-foreground"
            >
              {item.ustawa.shortTitle}
            </div>
          ))}
        </div>

        {/* Subtitle - count at bottom */}
        {card.subtitle && (
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg font-medium mt-6 sm:mt-8 md:mt-10">
            {card.subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
