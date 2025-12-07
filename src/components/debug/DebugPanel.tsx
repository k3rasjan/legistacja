'use client';

import { useState, useEffect } from 'react';

const LAST_VISIT_KEY = 'last_visit_timestamp';
const WRAPPED_VISIT_KEY = 'wrapped_last_visit_timestamp';

export function DebugPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [lastVisit, setLastVisit] = useState<Date | null>(null);
  const [wrappedVisit, setWrappedVisit] = useState<Date | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(LAST_VISIT_KEY);
    if (stored) {
      setLastVisit(new Date(parseInt(stored, 10)));
    }

    const wrappedStored = localStorage.getItem(WRAPPED_VISIT_KEY);
    if (wrappedStored) {
      setWrappedVisit(new Date(parseInt(wrappedStored, 10)));
    }
  }, []);

  const setDate = (date: Date | null) => {
    if (date) {
      localStorage.setItem(LAST_VISIT_KEY, date.getTime().toString());
    } else {
      localStorage.setItem(LAST_VISIT_KEY, Date.now().toString());
    }
    window.location.reload();
  };

  const setWrappedDate = (date: Date | null) => {
    if (date) {
      localStorage.setItem(WRAPPED_VISIT_KEY, date.getTime().toString());
    } else {
      localStorage.removeItem(WRAPPED_VISIT_KEY);
    }
    window.location.reload();
  };

  return (
    <div className="fixed bottom-20 right-4 z-[9999]">
      {isOpen ? (
        <div className="bg-yellow-100 dark:bg-yellow-900/90 border border-yellow-400 rounded-lg shadow-lg p-3 text-xs min-w-[200px]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-yellow-800 dark:text-yellow-200 font-medium">Debug Panel</span>
            <button onClick={() => setIsOpen(false)} className="text-yellow-600 hover:text-yellow-800">✕</button>
          </div>

          {/* Main app visit */}
          <div className="mb-3">
            <div className="text-yellow-700 dark:text-yellow-300 mb-1 font-medium">Last Visit (App)</div>
            <div className="text-yellow-600 dark:text-yellow-400 mb-1 text-[10px]">
              {lastVisit?.toLocaleDateString('pl-PL') || 'First visit'}
            </div>
            <div className="flex gap-1 flex-wrap">
              <button onClick={() => setDate(new Date('2025-12-01'))} className="px-1.5 py-0.5 bg-yellow-200 dark:bg-yellow-800 rounded text-[10px]">Dec</button>
              <button onClick={() => setDate(new Date('2025-11-01'))} className="px-1.5 py-0.5 bg-yellow-200 dark:bg-yellow-800 rounded text-[10px]">Nov</button>
              <button onClick={() => setDate(new Date('2025-06-01'))} className="px-1.5 py-0.5 bg-yellow-200 dark:bg-yellow-800 rounded text-[10px]">Jun</button>
              <button onClick={() => setDate(null)} className="px-1.5 py-0.5 bg-red-200 dark:bg-red-800 rounded text-[10px]">Reset</button>
            </div>
          </div>

          {/* Wrapped visit */}
          <div className="pt-2 border-t border-yellow-300 dark:border-yellow-700">
            <div className="text-yellow-700 dark:text-yellow-300 mb-1 font-medium">Last Visit (Wrapped)</div>
            <div className="text-yellow-600 dark:text-yellow-400 mb-1 text-[10px]">
              {wrappedVisit?.toLocaleDateString('pl-PL') || 'Never (first visit)'}
            </div>
            <div className="flex gap-1 flex-wrap">
              <button onClick={() => setWrappedDate(new Date('2025-12-01'))} className="px-1.5 py-0.5 bg-yellow-200 dark:bg-yellow-800 rounded text-[10px]">Dec</button>
              <button onClick={() => setWrappedDate(new Date('2025-11-01'))} className="px-1.5 py-0.5 bg-yellow-200 dark:bg-yellow-800 rounded text-[10px]">Nov</button>
              <button onClick={() => setWrappedDate(new Date('2025-06-01'))} className="px-1.5 py-0.5 bg-yellow-200 dark:bg-yellow-800 rounded text-[10px]">Jun</button>
              <button onClick={() => setWrappedDate(null)} className="px-1.5 py-0.5 bg-red-200 dark:bg-red-800 rounded text-[10px]">Clear</button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-8 h-8 rounded-full bg-yellow-400 dark:bg-yellow-600 text-sm flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          🐛
        </button>
      )}
    </div>
  );
}
