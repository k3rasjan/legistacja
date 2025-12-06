'use client';

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
  ExternalLink,
  Bookmark,
  Share2,
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
  const Icon = updateTypeIcons[update.type];

  return (
    <Card>
      <CardContent className="pt-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Icon className="h-4 w-4" />
          <span>{updateTypeLabels[update.type]}</span>
          <span>·</span>
          <span>{formatRelativeTime(update.createdAt)}</span>
        </div>

        <h3 className="font-semibold mb-2">{update.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{update.content}</p>

        {update.aiSummary && (
          <div className="bg-primary/5 rounded-lg p-4 border border-primary/10 mb-4">
            <div className="flex items-center gap-2 text-primary mb-2">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Podsumowanie AI</span>
            </div>
            <p className="text-sm">{update.aiSummary}</p>
          </div>
        )}

        <div className="flex items-center gap-1 pt-3 border-t border-border">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Bookmark className="h-4 w-4 mr-1" />
            Obserwuj
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Share2 className="h-4 w-4 mr-1" />
            Udostępnij
          </Button>
          {update.sourceUrl && (
            <Button variant="ghost" size="sm" className="text-muted-foreground ml-auto" asChild>
              <a href={update.sourceUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" />
                Źródło
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
