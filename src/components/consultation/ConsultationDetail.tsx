'use client';

import { useState } from 'react';
import { UstawaAvatar } from '@/components/ustawa/UstawaAvatar';
import { ClosedQuestion } from '@/components/consultation/ClosedQuestion';
import { OpenQuestion } from '@/components/consultation/OpenQuestion';
import { AIOverview } from '@/components/consultation/AIOverview';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Consultation } from '@/types';
import { ArrowLeft, Calendar, Users, Clock } from 'lucide-react';
import Link from 'next/link';

interface ConsultationDetailProps {
  consultation: Consultation;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function getDaysRemaining(endDate: Date): number {
  const now = new Date();
  const diff = endDate.getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function ConsultationDetail({ consultation }: ConsultationDetailProps) {
  const [showOverview, setShowOverview] = useState(
    consultation.isActive && !!consultation.aiOverview
  );

  const daysRemaining = getDaysRemaining(consultation.endDate);
  const closedQuestions = consultation.questions.filter((q) => q.type === 'closed');
  const openQuestions = consultation.questions.filter((q) => q.type === 'open');

  if (showOverview && consultation.aiOverview) {
    return (
      <AIOverview
        content={consultation.aiOverview}
        onContinue={() => setShowOverview(false)}
      />
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 pt-16">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/konsultacje">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold">Konsultacje</h1>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 mb-8">
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
                <h2 className="text-xl font-bold">{consultation.title}</h2>
                {consultation.ustawa && (
                  <Link
                    href={`/ustawa/${consultation.ustawaId}`}
                    className="text-sm text-muted-foreground hover:underline"
                  >
                    {consultation.ustawa.shortTitle} • {consultation.ustawa.ministry}
                  </Link>
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

            <p className="mt-4 text-muted-foreground">{consultation.description}</p>

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
          </div>
        </div>
      </div>

      {closedQuestions.length > 0 && (
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-4">
            Pytania zamknięte ({closedQuestions.length})
          </h3>
          <div className="space-y-4">
            {closedQuestions.map((question) => (
              <ClosedQuestion
                key={question.id}
                question={question}
                isActive={consultation.isActive}
                showResults={!consultation.isActive}
              />
            ))}
          </div>
        </section>
      )}

      {openQuestions.length > 0 && (
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-4">
            Pytania otwarte ({openQuestions.length})
          </h3>
          <div className="space-y-4">
            {openQuestions.map((question) => (
              <OpenQuestion
                key={question.id}
                question={question}
                isActive={consultation.isActive}
              />
            ))}
          </div>
        </section>
      )}

      <div className="border-t border-border pt-6 mt-8">
        <Link href="/konsultacje">
          <Button variant="outline" size="lg">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Wróć do konsultacji
          </Button>
        </Link>
      </div>
    </div>
  );
}
