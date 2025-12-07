'use client';

import { useMemo } from 'react';
import { useWrappedVisit } from './useWrappedVisit';
import { mockUpdates } from '@/data/mock';

export function useWrappedUpdates() {
  const { lastVisit, isFirstVisit } = useWrappedVisit();

  const hasUpdates = useMemo(() => {
    const endDate = new Date();
    let startDate: Date;

    if (isFirstVisit) {
      startDate = new Date();
      startDate.setDate(startDate.getDate() - 30);
    } else if (lastVisit) {
      startDate = lastVisit;
    } else {
      startDate = new Date();
      startDate.setDate(startDate.getDate() - 30);
    }

    const filteredUpdates = mockUpdates.filter(update => {
      const updateDate = new Date(update.createdAt);
      return updateDate >= startDate && updateDate <= endDate;
    });

    return filteredUpdates.length > 0;
  }, [lastVisit, isFirstVisit]);

  return { hasUpdates };
}
