'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  LegislativeUpdate,
  updateTypeLabels,
} from '@/types';
import {
  ArrowRight,
  FileText,
  MessageSquare,
  Vote,
  Edit,
  Sparkles,
  Download,
  Plus,
  Minus,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const updateTypeIcons = {
  status_change: ArrowRight,
  document_added: FileText,
  consultation_opened: MessageSquare,
  consultation_closed: MessageSquare,
  vote_result: Vote,
  amendment: Edit,
  ai_summary: Sparkles,
};

interface PostCardProps {
  update: LegislativeUpdate;
}

function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 60) return `${diffMins} min temu`;
  if (diffHours < 24) return `${diffHours} godz. temu`;
  if (diffDays < 7) return `${diffDays} dni temu`;
  return date.toLocaleDateString('pl-PL');
}

export function PostCard({ update }: PostCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = updateTypeIcons[update.type];

  // Get the current document version - either from the update or the latest from ustawa
  const currentDocument = update.documentVersion
    || (update.ustawa.documentVersions && update.ustawa.documentVersions.length > 0
        ? update.ustawa.documentVersions[update.ustawa.documentVersions.length - 1]
        : null);

  return (
    <Card>
      <CardContent className="pt-3 sm:pt-4 px-3 sm:px-6">
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
          <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          <span>{updateTypeLabels[update.type]}</span>
          <span>·</span>
          <span>{formatRelativeTime(update.createdAt)}</span>
        </div>

        <h3 className="font-semibold text-sm sm:text-base mb-1.5 sm:mb-2">{update.title}</h3>
        <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">{update.content}</p>

        {update.aiSummary && (
          <div className="bg-primary/5 rounded-lg p-3 sm:p-4 border border-primary/10 mb-3 sm:mb-4">
            <div className="flex items-center gap-1.5 sm:gap-2 text-primary mb-1.5 sm:mb-2">
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-medium">Podsumowanie AI</span>
            </div>
            <p className="text-xs sm:text-sm">{update.aiSummary}</p>
          </div>
        )}

        {/* Expanded detailed AI summary */}
        {isExpanded && update.aiDetailedSummary && (
          <div className="bg-muted/50 rounded-lg p-3 sm:p-4 border border-border mb-3 sm:mb-4">
            <div className="flex items-center gap-1.5 sm:gap-2 text-foreground mb-2 sm:mb-3">
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-medium">Szczegółowa analiza AI</span>
            </div>
            <div className="text-xs sm:text-sm space-y-2 whitespace-pre-line">
              {update.aiDetailedSummary}
            </div>
          </div>
        )}

        {/* Diff display */}
        {update.diff && (
          <div className="mb-3 sm:mb-4 rounded-lg border border-border overflow-hidden font-mono text-[10px] sm:text-xs">
            <div className="bg-muted px-2 sm:px-3 py-1.5 sm:py-2 border-b border-border flex items-center gap-1.5 sm:gap-2">
              <FileText className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span className="font-medium truncate">{update.diff.fileName}</span>
            </div>
            <div className="bg-background">
              {update.diff.deletions.map((line, i) => (
                <div key={`del-${i}`} className="flex bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-400">
                  <span className="w-6 sm:w-8 flex-shrink-0 text-center py-1 bg-red-100 dark:bg-red-900/50 select-none">
                    <Minus className="h-2.5 w-2.5 sm:h-3 sm:w-3 inline" />
                  </span>
                  <span className="px-1.5 sm:px-2 py-1 overflow-x-auto">{line}</span>
                </div>
              ))}
              {update.diff.additions.map((line, i) => (
                <div key={`add-${i}`} className="flex bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400">
                  <span className="w-6 sm:w-8 flex-shrink-0 text-center py-1 bg-green-100 dark:bg-green-900/50 select-none">
                    <Plus className="h-2.5 w-2.5 sm:h-3 sm:w-3 inline" />
                  </span>
                  <span className="px-1.5 sm:px-2 py-1 overflow-x-auto">{line}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Document attachment - always show current document version */}
        {currentDocument && (
          <a
            href={currentDocument.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 mb-3 sm:mb-4 bg-muted/50 rounded-lg border border-border hover:bg-muted transition-colors"
          >
            <div className="p-1.5 sm:p-2 bg-primary/10 rounded">
              <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium">Wersja {currentDocument.version}</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground">{currentDocument.description}</p>
            </div>
            <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
          </a>
        )}


        {/* Read more button */}
        <div className="flex justify-center pt-2 sm:pt-3 border-t border-border mt-3 sm:mt-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-muted-foreground text-xs sm:text-sm"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1" />
                Zwiń
              </>
            ) : (
              <>
                <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1" />
                Czytaj więcej
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
