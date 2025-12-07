'use client';

import { useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useWrappedVisit } from '@/hooks/useWrappedVisit';
import { mockUstawy, mockUpdates } from '@/data/mock';
import { LegislativeUpdate, Ustawa, statusLabels } from '@/types';
import { WrappedStory } from '@/components/wrapped/WrappedStory';

export interface ConsolidatedCard {
  id: string;
  title: string;
  subtitle?: string;
  items: {
    ustawa: Ustawa;
    summary: string;
    updateCount: number;
  }[];
}

// Group updates by type for consolidated cards
function createConsolidatedCards(
  ustawy: Ustawa[],
  updatesByUstawa: Map<string, LegislativeUpdate[]>,
  allUpdates: LegislativeUpdate[]
): ConsolidatedCard[] {
  const cards: ConsolidatedCard[] = [];

  // Category definitions based on update types
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
        items: matchingUstawy.slice(0, 4).map(ustawa => {
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

export default function WrappedPage() {
  const router = useRouter();
  const { lastVisit, isFirstVisit, daysSinceLastVisit, updateVisit } = useWrappedVisit();

  // Calculate the date range for filtering
  const dateRange = useMemo(() => {
    const endDate = new Date();
    const startDate = new Date();

    if (isFirstVisit) {
      startDate.setDate(startDate.getDate() - 30);
    } else if (lastVisit) {
      return { start: lastVisit, end: endDate };
    } else {
      startDate.setDate(startDate.getDate() - 30);
    }

    return { start: startDate, end: endDate };
  }, [isFirstVisit, lastVisit]);

  // Filter updates within the date range
  const filteredUpdates = useMemo(() => {
    return mockUpdates.filter(update => {
      const updateDate = new Date(update.createdAt);
      return updateDate >= dateRange.start && updateDate <= dateRange.end;
    }).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }, [dateRange]);

  // Group updates by ustawa
  const updatesByUstawa = useMemo(() => {
    const grouped = new Map<string, LegislativeUpdate[]>();
    filteredUpdates.forEach(update => {
      const existing = grouped.get(update.ustawaId) || [];
      existing.push(update);
      grouped.set(update.ustawaId, existing);
    });
    return grouped;
  }, [filteredUpdates]);

  // Get unique ustawy that had updates
  const activeUstawy = useMemo(() => {
    const ustawaIds = new Set(filteredUpdates.map(u => u.ustawaId));
    return mockUstawy.filter(u => ustawaIds.has(u.id));
  }, [filteredUpdates]);

  // Redirect if no updates
  useEffect(() => {
    if (filteredUpdates.length === 0) {
      router.replace('/');
    }
  }, [filteredUpdates.length, router]);

  // Don't render if no updates (while redirecting)
  if (filteredUpdates.length === 0) {
    return null;
  }

  // Create consolidated cards
  const consolidatedCards = useMemo(() => {
    return createConsolidatedCards(activeUstawy, updatesByUstawa, filteredUpdates);
  }, [activeUstawy, updatesByUstawa, filteredUpdates]);

  const daysCovered = isFirstVisit ? 30 : daysSinceLastVisit;

  // Store session data for summary page
  useEffect(() => {
    sessionStorage.setItem('wrapped_session', JSON.stringify({
      startDate: dateRange.start.toISOString(),
      endDate: dateRange.end.toISOString(),
      daysCovered,
    }));
  }, [dateRange, daysCovered]);

  return (
    <WrappedStory
      cards={consolidatedCards}
      totalUpdates={filteredUpdates.length}
      totalUstawy={activeUstawy.length}
      daysCovered={daysCovered}
      isFirstVisit={isFirstVisit}
      onComplete={updateVisit}
    />
  );
}
