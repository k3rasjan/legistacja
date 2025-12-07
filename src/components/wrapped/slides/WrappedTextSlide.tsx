'use client';

import { useEffect, useState } from 'react';

interface WrappedTextSlideProps {
  lines: string[];
  accentColor?: string;
}

export function WrappedTextSlide({ lines, accentColor = 'rgba(99, 102, 241, 0.3)' }: WrappedTextSlideProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [lines]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 sm:px-8 text-white text-center relative overflow-hidden bg-[#1a1a2e]">
      {/* Animated gradient orb */}
      <div
        className="absolute w-[500px] sm:w-[700px] md:w-[900px] h-[500px] sm:h-[700px] md:h-[900px] rounded-full blur-[100px] sm:blur-[140px] md:blur-[180px]"
        style={{
          background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className={`relative z-10 max-w-5xl px-2 space-y-1 sm:space-y-2 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {lines.map((line, i) => (
          <p
            key={i}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tight leading-tight"
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
