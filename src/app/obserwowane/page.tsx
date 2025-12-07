'use client';

import { HamburgerMenu } from '@/components/layout/HamburgerMenu';
import { UstawaSearchCard } from '@/components/search/UstawaSearchCard';
import { mockUstawy, mockFollowedIds } from '@/data/mock';
import { Bookmark } from 'lucide-react';

export default function ObserwowanePage() {
  const followedUstawy = mockUstawy.filter((u) => mockFollowedIds.includes(u.id));

  return (
    <div className="min-h-screen">
      <HamburgerMenu />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-14 sm:pt-16 pb-6">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <Bookmark className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">Obserwowane</h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Ustawy, które obserwujesz
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
          {followedUstawy.length} obserwowanych ustaw
        </p>

        <div className="space-y-2 sm:space-y-3">
          {followedUstawy.map((ustawa) => (
            <UstawaSearchCard key={ustawa.id} ustawa={ustawa} isFollowed={true} />
          ))}

          {followedUstawy.length === 0 && (
            <div className="text-center py-8 sm:py-12">
              <Bookmark className="h-10 w-10 sm:h-12 sm:w-12 text-muted-foreground mx-auto mb-3 sm:mb-4" />
              <p className="text-base sm:text-lg font-medium">Nie obserwujesz jeszcze żadnych ustaw</p>
              <p className="text-muted-foreground text-sm mt-1">
                Kliknij "Obserwuj" przy ustawie, aby dodać ją do tej listy
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
