'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { UstawaAvatar } from '@/components/ustawa/UstawaAvatar';
import { Consultation } from '@/types';
import { Calendar, Users, MessageSquare, CheckCircle, Clock } from 'lucide-react';
import Link from 'next/link';

interface ConsultationCardProps {
  consultation: Consultation;
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

function getDaysRemaining(endDate: Date): number {
  const now = new Date();
  const diff = endDate.getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function ConsultationCard({ consultation, searchQuery = '' }: ConsultationCardProps) {
  const daysRemaining = getDaysRemaining(consultation.endDate);
  const openQuestions = consultation.questions.filter((q) => q.type === 'open').length;
  const closedQuestions = consultation.questions.filter((q) => q.type === 'closed').length;

  return (
    <Card className={`${!consultation.isActive ? 'opacity-70' : ''}`}>
      <CardContent className="px-6 py-2.5">
        <div className="flex items-start gap-4">
          {consultation.ustawa && (
            <Link href={`/ustawa/${consultation.ustawaId}`}>
              <UstawaAvatar
                shortTitle={consultation.ustawa.shortTitle}
                status={consultation.ustawa.status}
                size="lg"
              />
            </Link>
          )}

          <div className="flex-1">
            <div className="flex items-start justify-between gap-4">
              <div>
                <Link
                  href={`/konsultacje/${consultation.id}`}
                  className="font-semibold text-lg hover:underline"
                >
                  {highlightText(consultation.title, searchQuery)}
                </Link>
                {consultation.ustawa && (
                  <p className="text-sm text-muted-foreground">
                    {consultation.ustawa.ministry}
                  </p>
                )}
              </div>
              <Badge
                variant="secondary"
                className={
                  consultation.isActive
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }
              >
                {consultation.isActive ? 'Aktywna' : 'Zakończona'}
              </Badge>
            </div>

            <p className="mt-2 text-muted-foreground text-sm">
              {highlightText(consultation.description, searchQuery)}
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-1 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>
                  {formatDate(consultation.startDate)} - {formatDate(consultation.endDate)}
                </span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{consultation.totalResponses} odpowiedzi</span>
              </div>
              {consultation.isActive && daysRemaining > 0 && (
                <div className="flex items-center gap-1 text-orange-600">
                  <Clock className="h-4 w-4" />
                  <span>Pozostało {daysRemaining} dni</span>
                </div>
              )}
            </div>

            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-blue-500" />
                <span>{closedQuestions} pytań zamkniętych</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MessageSquare className="h-4 w-4 text-purple-500" />
                <span>{openQuestions} pytań otwartych</span>
              </div>
            </div>

            <div className="mt-4">
              <Link href={`/konsultacje/${consultation.id}`}>
                <Button variant={consultation.isActive ? 'default' : 'outline'}>
                  {consultation.isActive ? 'Weź udział' : 'Zobacz wyniki'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
