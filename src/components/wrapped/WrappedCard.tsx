'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { WrappedSummary, statusLabels, statusColors, categoryLabels } from '@/types';
import { Badge } from '@/components/ui/badge';
import { UstawaAvatar } from '@/components/ustawa/UstawaAvatar';

interface WrappedCardProps {
  summary: WrappedSummary;
  index: number;
}

export function WrappedCard({ summary, index }: WrappedCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:shadow-xl"
      style={{
        animationDelay: `${index * 150}ms`,
      }}
    >
      {/* Gradient background overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(236, 72, 153, 0.05) 100%)',
        }}
      />

      {/* Animated border gradient on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(168, 85, 247, 0.3) 50%, rgba(236, 72, 153, 0.3) 100%)',
          padding: '1px',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
        }}
      />

      <div className="relative p-5">
        {/* Header with avatar and title */}
        <div className="flex items-start gap-4 mb-4">
          <UstawaAvatar shortTitle={summary.ustawa.shortTitle} status={summary.ustawa.status} size="md" />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base leading-tight mb-1 line-clamp-2">
              {summary.ustawa.shortTitle}
            </h3>
            <p className="text-sm text-muted-foreground truncate">
              {summary.ustawa.ministry}
            </p>
          </div>
        </div>

        {/* Status and categories */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className={statusColors[summary.ustawa.status]}>
            {statusLabels[summary.ustawa.status]}
          </Badge>
          {summary.ustawa.categories.slice(0, 2).map((cat) => (
            <Badge key={cat} variant="outline" className="text-xs">
              {categoryLabels[cat]}
            </Badge>
          ))}
        </div>

        {/* Updates count indicator */}
        <div className="flex items-center gap-2 mb-4">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">
            {summary.updates.length} {summary.updates.length === 1 ? 'aktualizacja' :
              summary.updates.length < 5 ? 'aktualizacje' : 'aktualizacji'}
          </span>
        </div>

        {/* Basic summary - always visible */}
        <div className="mb-4">
          <p className="text-sm leading-relaxed">
            {summary.basicSummary}
          </p>
        </div>

        {/* Expandable detailed summary */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4" />
              Zwiń szczegóły
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              Pokaż szczegóły
            </>
          )}
        </button>

        {/* Animated expandable section */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-4 border-t border-border">
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <div className="whitespace-pre-wrap text-sm text-muted-foreground leading-relaxed">
                {summary.detailedSummary}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(90deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
        }}
      />
    </div>
  );
}
