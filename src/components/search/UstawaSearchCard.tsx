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
  lastVisit?: Date | null;
  isFollowed?: boolean;
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

export function UstawaSearchCard({ ustawa, searchQuery = '', lastVisit, isFollowed = false }: UstawaSearchCardProps) {
  const isNew = lastVisit && ustawa.updatedAt > lastVisit;

  return (
    <Card className="hover:bg-accent/50 transition-colors">
      <CardContent className="px-3 sm:px-5 py-2.5 sm:py-3">
        <div className="flex gap-2.5 sm:gap-4">
          <Link href={`/ustawa/${ustawa.id}`} className="flex-shrink-0">
            <UstawaAvatar
              shortTitle={ustawa.shortTitle}
              status={ustawa.status}
              size="lg"
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
          </Link>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 sm:gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  <Link
                    href={`/ustawa/${ustawa.id}`}
                    className="font-semibold text-base sm:text-lg hover:underline"
                  >
                    {highlightText(ustawa.shortTitle, searchQuery)}
                  </Link>
                  {isNew && (
                    <span className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-blue-500 text-white shrink-0">
                      Nowe
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-1">
                  {highlightText(ustawa.title, searchQuery)}
                </p>
              </div>
              <Badge className={`${statusColors[ustawa.status]} text-[10px] sm:text-xs px-1.5 sm:px-2`} variant="secondary">
                {statusLabels[ustawa.status]}
              </Badge>
            </div>

            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2">
              {highlightText(ustawa.description, searchQuery)}
            </p>

            <div className="mt-2 sm:mt-3 flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-muted-foreground">
                <div className="flex items-center gap-1 hidden sm:flex">
                  <Building2 className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  <span className="truncate max-w-[120px]">{ustawa.ministry}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  <span>{formatDate(ustawa.updatedAt)}</span>
                </div>
                {ustawa.drukNumber && (
                  <span className="text-primary hidden sm:inline">{ustawa.drukNumber}</span>
                )}
              </div>
              <FollowButton size="sm" initialFollowed={isFollowed} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
