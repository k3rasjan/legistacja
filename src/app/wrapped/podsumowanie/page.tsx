'use client';

import { useMemo, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { mockUstawy, mockUpdates } from '@/data/mock';
import { LegislativeUpdate, Ustawa, statusLabels } from '@/types';
import { useWrappedUpdates } from '@/hooks/useWrappedUpdates';

interface ConsolidatedCard {
  id: string;
  title: string;
  subtitle?: string;
  items: {
    ustawa: Ustawa;
    summary: string;
    updateCount: number;
  }[];
}

function createConsolidatedCards(
  ustawy: Ustawa[],
  updatesByUstawa: Map<string, LegislativeUpdate[]>,
  allUpdates: LegislativeUpdate[]
): ConsolidatedCard[] {
  const cards: ConsolidatedCard[] = [];

  const categories: { id: string; title: string; filter: (u: LegislativeUpdate) => boolean }[] = [
    {
      id: 'projekty',
      title: 'Projekty ustaw',
      filter: (u) => ['prekonsultacje', 'prace-rzadowe'].includes(u.ustawa.status) && u.type !== 'status_change',
    },
    {
      id: 'konsultacje',
      title: 'Konsultacje społeczne',
      filter: (u) => ['consultation_opened', 'consultation_closed'].includes(u.type) || u.ustawa.status === 'konsultacje',
    },
    {
      id: 'zmiany-tresci',
      title: 'Zmiany treści',
      filter: (u) => ['document_added', 'amendment'].includes(u.type),
    },
    {
      id: 'zmiany-etapu',
      title: 'Zmiany etapu',
      filter: (u) => ['status_change', 'vote_result'].includes(u.type),
    },
  ];

  categories.forEach(category => {
    const matchingUpdates = allUpdates.filter(category.filter);
    const uniqueUstawyIds = [...new Set(matchingUpdates.map(u => u.ustawaId))];
    const matchingUstawy = ustawy.filter(u => uniqueUstawyIds.includes(u.id));

    if (matchingUstawy.length > 0) {
      cards.push({
        id: `category-${category.id}`,
        title: category.title,
        subtitle: `${matchingUstawy.length} ${matchingUstawy.length === 1 ? 'ustawa' : matchingUstawy.length < 5 ? 'ustawy' : 'ustaw'}`,
        items: matchingUstawy.map(ustawa => {
          const updates = updatesByUstawa.get(ustawa.id) || [];
          return {
            ustawa,
            summary: ustawa.userBenefits || ustawa.description.slice(0, 150) + '...',
            updateCount: updates.filter(category.filter).length,
          };
        }),
      });
    }
  });

  return cards;
}

const getAccentColor = (id: string) => {
  if (id.includes('projekty')) return '#a855f7';
  if (id.includes('konsultacje')) return '#3b82f6';
  if (id.includes('zmiany-tresci')) return '#f97316';
  if (id.includes('zmiany-etapu')) return '#22c55e';
  return '#ec4899';
};

export default function WrappedSummaryPage() {
  const router = useRouter();
  const { hasUpdates } = useWrappedUpdates();
  const [sessionData, setSessionData] = useState<{
    startDate: string;
    endDate: string;
    daysCovered: number;
  } | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('wrapped_session');
    if (stored) {
      setSessionData(JSON.parse(stored));
    }
  }, []);

  // Redirect if no updates available
  useEffect(() => {
    if (!hasUpdates) {
      router.replace('/');
    }
  }, [hasUpdates, router]);

  const dateRange = useMemo(() => {
    if (sessionData) {
      return {
        start: new Date(sessionData.startDate),
        end: new Date(sessionData.endDate),
      };
    }
    // Fallback to last 30 days
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 30);
    return { start: startDate, end: endDate };
  }, [sessionData]);

  const filteredUpdates = useMemo(() => {
    return mockUpdates.filter(update => {
      const updateDate = new Date(update.createdAt);
      return updateDate >= dateRange.start && updateDate <= dateRange.end;
    }).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }, [dateRange]);

  const updatesByUstawa = useMemo(() => {
    const grouped = new Map<string, LegislativeUpdate[]>();
    filteredUpdates.forEach(update => {
      const existing = grouped.get(update.ustawaId) || [];
      existing.push(update);
      grouped.set(update.ustawaId, existing);
    });
    return grouped;
  }, [filteredUpdates]);

  const activeUstawy = useMemo(() => {
    const ustawaIds = new Set(filteredUpdates.map(u => u.ustawaId));
    return mockUstawy.filter(u => ustawaIds.has(u.id));
  }, [filteredUpdates]);

  const cards = useMemo(() => {
    return createConsolidatedCards(activeUstawy, updatesByUstawa, filteredUpdates);
  }, [activeUstawy, updatesByUstawa, filteredUpdates]);

  const daysCovered = sessionData?.daysCovered ?? 30;

  // Don't render while redirecting
  if (!hasUpdates) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-sm z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <Link
            href="/wrapped"
            className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Wróć do Wrapped</span>
            <span className="sm:hidden">Wróć</span>
          </Link>
          <div className="text-xs sm:text-sm text-muted-foreground">
            Ostatnie {daysCovered} dni
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Podsumowanie</h1>
        <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">
          {activeUstawy.length} ustaw z {filteredUpdates.length} zmianami
        </p>

        <div className="space-y-6 sm:space-y-8">
          {cards.map((card) => {
            const accentColor = getAccentColor(card.id);
            return (
              <section key={card.id}>
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: accentColor }}
                  />
                  <h2 className="text-lg sm:text-xl font-bold">{card.title}</h2>
                  <span className="text-muted-foreground text-xs sm:text-sm">
                    {card.subtitle}
                  </span>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  {card.items.map((item) => (
                    <Link
                      key={item.ustawa.id}
                      href={`/ustawa/${item.ustawa.id}`}
                      className="block bg-card border border-border rounded-lg sm:rounded-xl p-3 sm:p-4 hover:border-primary/50 hover:shadow-sm transition-all"
                    >
                      <div className="flex items-start justify-between gap-3 sm:gap-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm sm:text-base mb-0.5 sm:mb-1">
                            {item.ustawa.shortTitle}
                          </h3>
                          <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2">
                            {item.summary}
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                          {item.updateCount > 0 && (
                            <span
                              className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium whitespace-nowrap"
                              style={{
                                background: `${accentColor}20`,
                                color: accentColor,
                              }}
                            >
                              {item.updateCount} {item.updateCount === 1 ? 'zmiana' : item.updateCount < 5 ? 'zmiany' : 'zmian'}
                            </span>
                          )}
                          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border text-center">
          <Link
            href="/szukaj"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-full text-sm sm:text-base font-medium hover:opacity-90 transition-opacity"
          >
            Przeglądaj wszystkie ustawy
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
