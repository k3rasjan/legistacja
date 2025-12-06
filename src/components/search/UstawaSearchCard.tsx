'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { UstawaAvatar } from '@/components/ustawa/UstawaAvatar';
import { FollowButton } from '@/components/ui/FollowButton';
import { Ustawa, statusLabels, statusColors } from '@/types';
import { Calendar, Building2 } from 'lucide-react';

interface UstawaSearchCardProps {
  ustawa: Ustawa;
  searchQuery?: string;
}

function highlightText(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;

  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-yellow-200 dark:bg-yellow-800 rounded px-0.5">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function UstawaSearchCard({ ustawa, searchQuery = '' }: UstawaSearchCardProps) {
  return (
    <Card className="hover:bg-accent/50 transition-colors">
      <CardContent className="px-5 py-3">
        <div className="flex gap-4">
          <Link href={`/ustawa/${ustawa.id}`}>
            <UstawaAvatar
              shortTitle={ustawa.shortTitle}
              status={ustawa.status}
              size="lg"
            />
          </Link>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <Link
                  href={`/ustawa/${ustawa.id}`}
                  className="font-semibold text-lg hover:underline block"
                >
                  {highlightText(ustawa.shortTitle, searchQuery)}
                </Link>
                <p className="text-sm text-muted-foreground line-clamp-1">
                  {highlightText(ustawa.title, searchQuery)}
                </p>
              </div>
              <Badge className={statusColors[ustawa.status]} variant="secondary">
                {statusLabels[ustawa.status]}
              </Badge>
            </div>

            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
              {highlightText(ustawa.description, searchQuery)}
            </p>

            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Building2 className="h-3.5 w-3.5" />
                  <span>{ustawa.ministry}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{formatDate(ustawa.updatedAt)}</span>
                </div>
                {ustawa.drukNumber && (
                  <span className="text-primary">{ustawa.drukNumber}</span>
                )}
              </div>
              <FollowButton size="sm" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
