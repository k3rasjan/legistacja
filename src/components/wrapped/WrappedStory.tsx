'use client';

import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { ConsolidatedCard } from '@/app/wrapped/page';
import { WrappedIntroSlide } from './slides/WrappedIntroSlide';
import { WrappedTextSlide } from './slides/WrappedTextSlide';
import { WrappedConsolidatedSlide } from './slides/WrappedConsolidatedSlide';
import { WrappedOutroSlide } from './slides/WrappedOutroSlide';

interface WrappedStoryProps {
  cards: ConsolidatedCard[];
  totalUpdates: number;
  totalUstawy: number;
  daysCovered: number;
  isFirstVisit: boolean;
  onComplete?: () => void;
}

interface Slide {
  type: 'intro' | 'text' | 'card' | 'outro';
  data?: ConsolidatedCard;
  textLines?: string[];
  accentColor?: string;
}

export function WrappedStory({ cards, totalUpdates, totalUstawy, daysCovered, isFirstVisit, onComplete }: WrappedStoryProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);

  // Build slide sequence with text slides interspersed
  const slides: Slide[] = [];

  // Intro
  slides.push({ type: 'intro' });

  // "Thanks for coming back" or welcome text
  if (isFirstVisit) {
    slides.push({
      type: 'text',
      textLines: ['Dużo się działo', 'w polskiej polityce.'],
      accentColor: 'rgba(168, 85, 247, 0.4)',
    });
  } else {
    slides.push({
      type: 'text',
      textLines: ['Fajnie, że wróciłeś.', 'Sprawdźmy co przegapiłeś.'],
      accentColor: 'rgba(99, 102, 241, 0.4)',
    });
  }

  // Stats slide
  slides.push({
    type: 'text',
    textLines: [
      `${totalUstawy} ustaw`,
      `${totalUpdates} zmian`,
      'czeka na Ciebie.',
    ],
    accentColor: 'rgba(236, 72, 153, 0.4)',
  });

  // Add cards with occasional text breaks
  cards.forEach((card, i) => {
    // Add a motivational text before first card
    if (i === 0) {
      slides.push({
        type: 'text',
        textLines: ['Oto najważniejsze', 'zmiany w prawie.'],
        accentColor: 'rgba(34, 197, 94, 0.4)',
      });
    }

    slides.push({ type: 'card', data: card });

    // Add text breaks between some cards
    if (i === 1 && cards.length > 3) {
      slides.push({
        type: 'text',
        textLines: ['Jest tego więcej...'],
        accentColor: 'rgba(249, 115, 22, 0.4)',
      });
    }
  });

  // Outro
  slides.push({ type: 'outro' });

  const totalSlides = slides.length;

  // Mark as complete when user reaches the outro slide
  useEffect(() => {
    if (currentSlide === totalSlides - 1 && !hasCompleted) {
      setHasCompleted(true);
      onComplete?.();
    }
  }, [currentSlide, totalSlides, hasCompleted, onComplete]);

  const goToNextSlide = () => {
    if (isTransitioning || currentSlide >= totalSlides - 1) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(prev => prev + 1);
      setIsTransitioning(false);
    }, 400);
  };

  const goToPrevSlide = () => {
    if (isTransitioning || currentSlide <= 0) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(prev => prev - 1);
      setIsTransitioning(false);
    }, 400);
  };

  // Count card slides for numbering
  const getCardIndex = (slideIndex: number): { index: number; total: number } => {
    const cardSlides = slides.filter(s => s.type === 'card');
    const currentCardIndex = slides.slice(0, slideIndex + 1).filter(s => s.type === 'card').length;
    return { index: currentCardIndex, total: cardSlides.length };
  };

  const renderSlide = () => {
    const slide = slides[currentSlide];

    switch (slide.type) {
      case 'intro':
        return (
          <WrappedIntroSlide
            daysCovered={daysCovered}
            totalUstawy={totalUstawy}
            totalUpdates={totalUpdates}
            isFirstVisit={isFirstVisit}
          />
        );
      case 'text':
        return (
          <WrappedTextSlide
            lines={slide.textLines || []}
            accentColor={slide.accentColor}
          />
        );
      case 'card':
        const { index, total } = getCardIndex(currentSlide);
        return (
          <WrappedConsolidatedSlide
            card={slide.data!}
            index={index}
            total={total}
          />
        );
      case 'outro':
        return <WrappedOutroSlide />;
      default:
        return null;
    }
  };

  return (
    <div
      className="fixed inset-0 bg-[#1a1a2e] overflow-hidden select-none"
      style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 z-50 flex gap-0.5 sm:gap-1 p-2 sm:p-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning && index !== currentSlide) {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentSlide(index);
                  setIsTransitioning(false);
                }, 400);
              }
            }}
            className="flex-1 h-1 sm:h-1.5 rounded-full overflow-hidden bg-white/20 hover:bg-white/30 transition-colors"
          >
            <div
              className="h-full rounded-full transition-all duration-500 bg-white"
              style={{
                width: index < currentSlide ? '100%' : index === currentSlide ? '100%' : '0%',
                opacity: index <= currentSlide ? 1 : 0,
              }}
            />
          </button>
        ))}
      </div>

      {/* Slide content */}
      <div
        className={`absolute inset-0 transition-all duration-500 ease-out ${
          isTransitioning
            ? 'opacity-0 scale-95'
            : 'opacity-100 scale-100'
        }`}
      >
        {renderSlide()}
      </div>

      {/* Left navigation area */}
      {currentSlide > 0 && (
        <button
          onClick={goToPrevSlide}
          className="absolute left-0 top-0 bottom-0 w-1/4 z-40 cursor-pointer group"
        >
          <div className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center rotate-180">
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white/70" />
            </div>
          </div>
        </button>
      )}

      {/* Right navigation area */}
      {currentSlide < totalSlides - 1 && (
        <button
          onClick={goToNextSlide}
          className="absolute right-0 top-0 bottom-0 w-3/4 z-40 cursor-pointer"
        />
      )}

      {/* Next button */}
      {currentSlide < totalSlides - 1 && (
        <button
          onClick={goToNextSlide}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 group"
        >
          <div className="flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-base sm:text-lg transition-all hover:bg-white/20 hover:scale-105 active:scale-95">
            <span>Dalej</span>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      )}

      {/* Slide counter */}
      <div className="absolute bottom-6 sm:bottom-8 right-3 sm:right-6 z-50 text-white/40 text-xs sm:text-sm font-medium tabular-nums">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  );
}
