'use client';

import { useEffect, useState } from 'react';

const WRAPPED_VISIT_KEY = 'wrapped_last_visit_timestamp';

interface WrappedVisitData {
  lastVisit: Date | null;
  isFirstVisit: boolean;
  daysSinceLastVisit: number;
}

export function useWrappedVisit(): WrappedVisitData & { updateVisit: () => void } {
  const [data, setData] = useState<WrappedVisitData>({
    lastVisit: null,
    isFirstVisit: true,
    daysSinceLastVisit: 30,
  });

  useEffect(() => {
    const storedTimestamp = localStorage.getItem(WRAPPED_VISIT_KEY);

    if (storedTimestamp) {
      const lastVisitDate = new Date(parseInt(storedTimestamp, 10));
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - lastVisitDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      setData({
        lastVisit: lastVisitDate,
        isFirstVisit: false,
        daysSinceLastVisit: diffDays,
      });
    } else {
      setData({
        lastVisit: null,
        isFirstVisit: true,
        daysSinceLastVisit: 30,
      });
    }
  }, []);

  const updateVisit = () => {
    localStorage.setItem(WRAPPED_VISIT_KEY, Date.now().toString());
  };

  return { ...data, updateVisit };
}
