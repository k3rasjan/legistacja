'use client';

import { useState } from 'react';
import { Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AIAnalysisSectionProps {
  analysis: string;
}

export function AIAnalysisSection({ analysis }: AIAnalysisSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="p-3 sm:p-4 bg-primary/5 border border-primary/10 rounded-lg sm:rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
          <span className="font-semibold text-sm sm:text-base text-primary">
            Szczegółowa analiza AI
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary hover:text-primary/80 hover:bg-primary/10 text-xs sm:text-sm"
        >
          {isExpanded ? (
            <>
              Zwiń
              <ChevronUp className="h-3.5 w-3.5 sm:h-4 sm:w-4 ml-1" />
            </>
          ) : (
            <>
              Rozwiń
              <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4 ml-1" />
            </>
          )}
        </Button>
      </div>

      {isExpanded && (
        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-primary/10">
          <p className="text-sm sm:text-base leading-relaxed whitespace-pre-line">
            {analysis}
          </p>
        </div>
      )}
    </div>
  );
}
