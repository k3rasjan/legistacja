'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
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
  Bookmark,
  Share2,
} from 'lucide-react';
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

interface UpdateCardProps {
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

export function UpdateCard({ update }: UpdateCardProps) {
  const Icon = updateTypeIcons[update.type];

  return (
    <Card className="hover:bg-accent/50 transition-colors">
      <CardContent className="pt-4">
        <div className="flex gap-3">
          <Link href={`/ustawa/${update.ustawaId}`}>
            <UstawaAvatar
              shortTitle={update.ustawa.shortTitle}
              status={update.ustawa.status}
            />
          </Link>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <Link
                  href={`/ustawa/${update.ustawaId}`}
                  className="font-semibold hover:underline"
                >
                  {update.ustawa.shortTitle}
                </Link>
                <span className="text-muted-foreground text-sm ml-2">
                  @{update.ustawa.ministry.replace(/\s+/g, '').toLowerCase()}
                </span>
                <span className="text-muted-foreground text-sm ml-2">·</span>
                <span className="text-muted-foreground text-sm ml-2">
                  {formatRelativeTime(update.createdAt)}
                </span>
              </div>
              <Badge className={statusColors[update.ustawa.status]} variant="secondary">
                {statusLabels[update.ustawa.status]}
              </Badge>
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <Icon className="h-4 w-4" />
              <span>{updateTypeLabels[update.type]}</span>
            </div>

            <h3 className="mt-2 font-medium">{update.title}</h3>
            <p className="mt-1 text-muted-foreground text-sm">{update.content}</p>

            {update.aiSummary && (
              <>
                <Separator className="my-3" />
                <div className="bg-primary/5 rounded-lg p-3 border border-primary/10">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-sm font-medium">Podsumowanie AI</span>
                  </div>
                  <p className="text-sm">{update.aiSummary}</p>
                </div>
              </>
            )}

            <div className="mt-3 flex items-center gap-1">
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
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
