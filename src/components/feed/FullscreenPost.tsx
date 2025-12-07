'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { UstawaAvatar } from '@/components/ustawa/UstawaAvatar';
import {
  LegislativeUpdate,
  statusLabels,
  statusColors,
  updateTypeLabels,
  categoryLabels,
} from '@/types';
import {
  ArrowRight,
  FileText,
  MessageSquare,
  Vote,
  Edit,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { FollowButton } from '@/components/ui/FollowButton';
import Link from 'next/link';

const updateTypeIcons = {
  status_change: ArrowRight,
  document_added: FileText,
  consultation_opened: MessageSquare,
  consultation_closed: MessageSquare,
  vote_result: Vote,
  amendment: Edit,
  ai_summary: Sparkles,
};

interface FullscreenPostProps {
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

export function FullscreenPost({ update }: FullscreenPostProps) {
  const Icon = updateTypeIcons[update.type];

  return (
    <div id={`post-${update.id}`} className="h-screen w-full snap-start flex flex-col justify-center px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-2xl mx-auto w-full">
        <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
          <Link href={`/ustawa/${update.ustawaId}?from=feed&postId=${update.id}`} className="flex-shrink-0">
            <UstawaAvatar
              shortTitle={update.ustawa.shortTitle}
              status={update.ustawa.status}
              size="lg"
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
          </Link>
          <div className="flex-1 min-w-0">
            <Link
              href={`/ustawa/${update.ustawaId}?from=feed&postId=${update.id}`}
              className="font-semibold text-base sm:text-lg hover:underline block truncate"
            >
              {update.ustawa.shortTitle}
            </Link>
            <p className="text-muted-foreground text-xs sm:text-sm truncate">
              {update.ustawa.ministry}
            </p>
          </div>
          <Badge className={`${statusColors[update.ustawa.status]} text-[10px] sm:text-xs flex-shrink-0`} variant="secondary">
            {statusLabels[update.ustawa.status]}
          </Badge>
        </div>

        {update.ustawa.categories && update.ustawa.categories.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            {update.ustawa.categories.map((category) => (
              <Badge key={category} variant="outline" className="text-[10px] sm:text-xs">
                {categoryLabels[category]}
              </Badge>
            ))}
          </div>
        )}

        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
          <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          <span>{updateTypeLabels[update.type]}</span>
          <span>·</span>
          <span>{formatRelativeTime(update.createdAt)}</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{update.title}</h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">{update.content}</p>

        {update.aiSummary && (
          <div className="bg-primary/5 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-primary/10 mb-4 sm:mb-6">
            <div className="flex items-center gap-1.5 sm:gap-2 text-primary mb-2 sm:mb-3">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="font-medium text-sm sm:text-base">Podsumowanie AI</span>
            </div>
            <p className="text-sm sm:text-base leading-relaxed">{update.aiSummary}</p>
          </div>
        )}

        <div className="flex items-center gap-2 pt-3 sm:pt-4 border-t border-border">
          <FollowButton size="lg" />
          {update.sourceUrl && (
            <Button variant="ghost" size="lg" className="text-muted-foreground ml-auto text-sm sm:text-base" asChild>
              <a href={update.sourceUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2" />
                Źródło
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
