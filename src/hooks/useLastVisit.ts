'use client';

import { useEffect, useState } from 'react';

const LAST_VISIT_KEY = 'last_visit_timestamp';

export function useLastVisit() {
  const [lastVisit, setLastVisit] = useState<Date | null>(null);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    // Get the previous visit time
    const storedTimestamp = localStorage.getItem(LAST_VISIT_KEY);

    if (storedTimestamp) {
      setLastVisit(new Date(parseInt(storedTimestamp, 10)));
      setIsFirstVisit(false);
    } else {
      setIsFirstVisit(true);
    }

    // Store the current visit time
    localStorage.setItem(LAST_VISIT_KEY, Date.now().toString());
  }, []);

  return { lastVisit, isFirstVisit };
}
