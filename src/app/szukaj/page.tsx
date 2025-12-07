'use client';

import { useState, useMemo } from 'react';
import { HamburgerMenu } from '@/components/layout/HamburgerMenu';
import { UstawaSearchCard } from '@/components/search/UstawaSearchCard';
import { SearchFilters } from '@/components/search/SearchFilters';
import { mockUstawy, mockFollowedIds } from '@/data/mock';
import { LegislativeStatus } from '@/types';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLastVisit } from '@/hooks/useLastVisit';

export default function SzukajPage() {
  const { lastVisit } = useLastVisit();
  const [query, setQuery] = useState('');
  const [selectedStatuses, setSelectedStatuses] = useState<LegislativeStatus[]>([]);
  const [selectedMinistries, setSelectedMinistries] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const availableMinistries = useMemo(() => {
    const ministries = new Set(mockUstawy.map((u) => u.ministry));
    return Array.from(ministries).sort();
  }, []);

  const filteredUstawy = useMemo(() => {
    let results = [...mockUstawy];

    // Text search (semantic-like: searches title, shortTitle, description)
    if (query.trim()) {
      const searchTerms = query.toLowerCase().split(/\s+/);
      results = results.filter((ustawa) => {
        const searchableText = `${ustawa.title} ${ustawa.shortTitle} ${ustawa.description} ${ustawa.ministry}`.toLowerCase();
        return searchTerms.every((term) => searchableText.includes(term));
      });
    }

    // Status filter
    if (selectedStatuses.length > 0) {
      results = results.filter((u) => selectedStatuses.includes(u.status));
    }

    // Ministry filter
    if (selectedMinistries.length > 0) {
      results = results.filter((u) => selectedMinistries.includes(u.ministry));
    }

    // Sort by most recently updated
    results.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());

    return results;
  }, [query, selectedStatuses, selectedMinistries]);

  const handleStatusToggle = (status: LegislativeStatus) => {
    setSelectedStatuses((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  };

  const handleMinistryToggle = (ministry: string) => {
    setSelectedMinistries((prev) =>
      prev.includes(ministry)
        ? prev.filter((m) => m !== ministry)
        : [...prev, ministry]
    );
  };

  const handleClearAll = () => {
    setSelectedStatuses([]);
    setSelectedMinistries([]);
  };

  const activeFiltersCount = selectedStatuses.length + selectedMinistries.length;

  return (
    <div className="min-h-screen">
      <HamburgerMenu />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-14 sm:pt-16 pb-6">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <Search className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">Szukaj ustaw</h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Przeszukaj wszystkie projekty ustaw
            </p>
          </div>
        </div>

        <div className="sticky top-0 bg-background z-10 pb-3 sm:pb-4">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Szukaj po nazwie, opisie..."
                className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`relative px-3 sm:px-4 border rounded-lg transition-colors ${
                showFilters
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border hover:bg-accent'
              }`}
            >
              <SlidersHorizontal className="h-4 w-4 sm:h-5 sm:w-5" />
              {activeFiltersCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 h-4 w-4 sm:h-5 sm:w-5 bg-red-500 text-white text-[10px] sm:text-xs rounded-full flex items-center justify-center font-medium">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

          {showFilters && (
            <div className="mt-2 sm:mt-3 p-3 sm:p-5 border border-border rounded-lg sm:rounded-xl bg-card">
              <SearchFilters
                selectedStatuses={selectedStatuses}
                selectedMinistries={selectedMinistries}
                availableMinistries={availableMinistries}
                onStatusToggle={handleStatusToggle}
                onMinistryToggle={handleMinistryToggle}
                onClearAll={handleClearAll}
              />
            </div>
          )}
        </div>

        <div className="mt-3 sm:mt-4">
          <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
            {filteredUstawy.length === mockUstawy.length
              ? `Wszystkie ustawy (${mockUstawy.length})`
              : `Znaleziono ${filteredUstawy.length} z ${mockUstawy.length} ustaw`}
          </p>

          <div className="space-y-2 sm:space-y-3">
            {filteredUstawy.map((ustawa) => (
              <UstawaSearchCard
                key={ustawa.id}
                ustawa={ustawa}
                searchQuery={query}
                lastVisit={lastVisit}
                isFollowed={mockFollowedIds.includes(ustawa.id)}
              />
            ))}

            {filteredUstawy.length === 0 && (
              <div className="text-center py-8 sm:py-12">
                <Search className="h-10 w-10 sm:h-12 sm:w-12 text-muted-foreground mx-auto mb-3 sm:mb-4" />
                <p className="text-base sm:text-lg font-medium">Nie znaleziono wyników</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Spróbuj zmienić kryteria wyszukiwania
                </p>
                <Button
                  variant="outline"
                  className="mt-3 sm:mt-4"
                  onClick={() => {
                    setQuery('');
                    handleClearAll();
                  }}
                >
                  Wyczyść filtry
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
