'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { UstawaAvatar } from '@/components/ustawa/UstawaAvatar';
import {
  LegislativeUpdate,
  statusLabels,
  statusColors,
  updateTypeLabels,
} from '@/types';
import {
  ArrowRight,
  FileText,
  MessageSquare,
  Vote,
  Edit,
  Sparkles,
  ExternalLink,
  Share2,
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
    <div className="h-screen w-full snap-start flex flex-col justify-center px-6 py-16">
      <div className="max-w-2xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-6">
          <Link href={`/ustawa/${update.ustawaId}`}>
            <UstawaAvatar
              shortTitle={update.ustawa.shortTitle}
              status={update.ustawa.status}
              size="lg"
            />
          </Link>
          <div className="flex-1">
            <Link
              href={`/ustawa/${update.ustawaId}`}
              className="font-semibold text-lg hover:underline"
            >
              {update.ustawa.shortTitle}
            </Link>
            <p className="text-muted-foreground text-sm">
              {update.ustawa.ministry}
            </p>
          </div>
          <Badge className={statusColors[update.ustawa.status]} variant="secondary">
            {statusLabels[update.ustawa.status]}
          </Badge>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Icon className="h-4 w-4" />
          <span>{updateTypeLabels[update.type]}</span>
          <span>·</span>
          <span>{formatRelativeTime(update.createdAt)}</span>
        </div>

        <h2 className="text-2xl font-bold mb-4">{update.title}</h2>
        <p className="text-lg text-muted-foreground mb-6">{update.content}</p>

        {update.aiSummary && (
          <div className="bg-primary/5 rounded-xl p-6 border border-primary/10 mb-6">
            <div className="flex items-center gap-2 text-primary mb-3">
              <Sparkles className="h-5 w-5" />
              <span className="font-medium">Podsumowanie AI</span>
            </div>
            <p className="text-base leading-relaxed">{update.aiSummary}</p>
          </div>
        )}

        <div className="flex items-center gap-2 pt-4 border-t border-border">
          <FollowButton size="lg" />
          <Button variant="ghost" size="lg" className="text-muted-foreground">
            <Share2 className="h-5 w-5 mr-2" />
            Udostępnij
          </Button>
          {update.sourceUrl && (
            <Button variant="ghost" size="lg" className="text-muted-foreground ml-auto" asChild>
              <a href={update.sourceUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5 mr-2" />
                Źródło
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
