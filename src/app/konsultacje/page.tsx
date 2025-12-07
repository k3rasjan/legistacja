'use client';

import { useRef, useState, useEffect, useMemo } from 'react';
import { HamburgerMenu } from '@/components/layout/HamburgerMenu';
import { ConsultationCard } from '@/components/consultation/ConsultationCard';
import { SearchFilters } from '@/components/search/SearchFilters';
import { mockConsultations, mockFollowedIds } from '@/data/mock';
import { LegislativeStatus } from '@/types';
import { MessageSquare, Search, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  { id: 'following', label: 'Obserwowane', color: 'bg-primary' },
  { id: 'other', label: 'Pozostałe', color: 'bg-green-500' },
  { id: 'finished', label: 'Zakończone', color: 'bg-gray-400' },
];

export default function KonsultacjePage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [query, setQuery] = useState('');
  const [selectedStatuses, setSelectedStatuses] = useState<LegislativeStatus[]>([]);
  const [selectedMinistries, setSelectedMinistries] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const availableMinistries = useMemo(() => {
    const ministries = new Set(
      mockConsultations
        .filter((c) => c.ustawa)
        .map((c) => c.ustawa!.ministry)
    );
    return Array.from(ministries).sort();
  }, []);

  const filteredConsultations = useMemo(() => {
    let results = [...mockConsultations];

    // Text search
    if (query.trim()) {
      const searchTerms = query.toLowerCase().split(/\s+/);
      results = results.filter((consultation) => {
        const searchableText = `${consultation.title} ${consultation.description} ${consultation.ustawa?.shortTitle || ''} ${consultation.ustawa?.ministry || ''}`.toLowerCase();
        return searchTerms.every((term) => searchableText.includes(term));
      });
    }

    // Status filter (of the related ustawa)
    if (selectedStatuses.length > 0) {
      results = results.filter(
        (c) => c.ustawa && selectedStatuses.includes(c.ustawa.status)
      );
    }

    // Ministry filter
    if (selectedMinistries.length > 0) {
      results = results.filter(
        (c) => c.ustawa && selectedMinistries.includes(c.ustawa.ministry)
      );
    }

    return results;
  }, [query, selectedStatuses, selectedMinistries]);

  const activeConsultations = filteredConsultations.filter((c) => c.isActive);
  const followingConsultations = activeConsultations.filter((c) => mockFollowedIds.includes(c.id));
  const otherConsultations = activeConsultations.filter((c) => !mockFollowedIds.includes(c.id));
  const closedConsultations = filteredConsultations.filter((c) => !c.isActive);

  const handleStatusToggle = (status: LegislativeStatus) => {
    setSelectedStatuses((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    );
  };

  const handleMinistryToggle = (ministry: string) => {
    setSelectedMinistries((prev) =>
      prev.includes(ministry) ? prev.filter((m) => m !== ministry) : [...prev, ministry]
    );
  };

  const handleClearAll = () => {
    setSelectedStatuses([]);
    setSelectedMinistries([]);
  };

  const activeFiltersCount = selectedStatuses.length + selectedMinistries.length;
  const hasFiltersOrSearch = query.trim() || activeFiltersCount > 0;

  // Track scroll position to update active dot
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sectionRefs.current.length - 1; i >= 0; i--) {
        const section = sectionRefs.current[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          if (scrollPosition >= sectionTop) {
            setActiveCategory(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const section = sectionRefs.current[index];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen">
      <HamburgerMenu />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-14 sm:pt-16 lg:pl-44 relative pb-6">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">Konsultacje społeczne</h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Weź udział w tworzeniu prawa
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="sticky top-0 bg-background z-10 pt-3 sm:pt-4 pb-3 sm:pb-4 -mx-4 sm:-mx-6 px-4 sm:px-6">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Szukaj konsultacji..."
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

        {/* Results count when filtering */}
        {hasFiltersOrSearch && (
          <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
            Znaleziono {filteredConsultations.length} z {mockConsultations.length} konsultacji
          </p>
        )}

        {/* Dot Navigation - hidden on mobile */}
        <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col z-20">
          {categories.map((category, index) => (
            <div key={category.id} className="flex flex-col">
              <button
                onClick={() => scrollToSection(index)}
                className="flex items-center gap-3 group"
              >
                <div
                  className={`
                    w-3 h-3 rounded-full bg-black transition-all cursor-pointer
                    ${activeCategory === index ? 'scale-150' : 'opacity-30 group-hover:opacity-60'}
                  `}
                />
                <span
                  className={`
                    text-sm transition-all
                    ${activeCategory === index ? 'font-semibold text-foreground' : 'text-muted-foreground group-hover:text-foreground'}
                  `}
                >
                  {category.label}
                </span>
              </button>
              {index < categories.length - 1 && (
                <div className="w-0.5 h-24 bg-black/20 ml-[5px] my-2" />
              )}
            </div>
          ))}
        </div>

        {/* Following */}
        <section
          ref={(el) => { sectionRefs.current[0] = el; }}
          className="mb-8 sm:mb-10 scroll-mt-16 sm:scroll-mt-20"
        >
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Obserwowane ({followingConsultations.length})
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {followingConsultations.map((consultation) => (
              <ConsultationCard key={consultation.id} consultation={consultation} searchQuery={query} />
            ))}
            {followingConsultations.length === 0 && (
              <p className="text-center text-muted-foreground text-sm py-6 sm:py-8">
                {hasFiltersOrSearch
                  ? 'Brak obserwowanych konsultacji spełniających kryteria.'
                  : 'Nie obserwujesz żadnych konsultacji.'}
              </p>
            )}
          </div>
        </section>

        {/* Other Active */}
        <section
          ref={(el) => { sectionRefs.current[1] = el; }}
          className="mb-8 sm:mb-10 scroll-mt-16 sm:scroll-mt-20"
        >
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Pozostałe aktywne ({otherConsultations.length})
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {otherConsultations.map((consultation) => (
              <ConsultationCard key={consultation.id} consultation={consultation} searchQuery={query} />
            ))}
            {otherConsultations.length === 0 && (
              <p className="text-center text-muted-foreground text-sm py-6 sm:py-8">
                {hasFiltersOrSearch
                  ? 'Brak innych aktywnych konsultacji spełniających kryteria.'
                  : 'Brak innych aktywnych konsultacji.'}
              </p>
            )}
          </div>
        </section>

        {/* Finished */}
        <section
          ref={(el) => { sectionRefs.current[2] = el; }}
          className="scroll-mt-16 sm:scroll-mt-20 mb-16 sm:mb-20"
        >
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            Zakończone ({closedConsultations.length})
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {closedConsultations.map((consultation) => (
              <ConsultationCard key={consultation.id} consultation={consultation} searchQuery={query} />
            ))}
            {closedConsultations.length === 0 && (
              <p className="text-center text-muted-foreground text-sm py-6 sm:py-8">
                {hasFiltersOrSearch
                  ? 'Brak zakończonych konsultacji spełniających kryteria.'
                  : 'Brak zakończonych konsultacji.'}
              </p>
            )}
          </div>
        </section>

        {/* No results at all */}
        {filteredConsultations.length === 0 && hasFiltersOrSearch && (
          <div className="text-center py-8 sm:py-12">
            <Search className="h-10 w-10 sm:h-12 sm:w-12 text-muted-foreground mx-auto mb-3 sm:mb-4" />
            <p className="text-base sm:text-lg font-medium">Nie znaleziono konsultacji</p>
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
  );
}
