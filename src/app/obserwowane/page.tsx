'use client';

import { HamburgerMenu } from '@/components/layout/HamburgerMenu';
import { UstawaSearchCard } from '@/components/search/UstawaSearchCard';
import { mockUstawy } from '@/data/mock';
import { Bookmark } from 'lucide-react';

// Mock followed ustawy (in a real app this would come from user state/backend)
const followedIds = ['1', '3', '6', '8', '12', '14', '18', '22', '26', '30', '34', '38'];

export default function ObserwowanePage() {
  const followedUstawy = mockUstawy.filter((u) => followedIds.includes(u.id));

  return (
    <div className="min-h-screen">
      <HamburgerMenu />

      <div className="max-w-4xl mx-auto p-6 pt-16">
        <div className="flex items-center gap-3 mb-6">
          <Bookmark className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-2xl font-bold">Obserwowane</h1>
            <p className="text-muted-foreground">
              Ustawy, które obserwujesz
            </p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          {followedUstawy.length} obserwowanych ustaw
        </p>

        <div className="space-y-3">
          {followedUstawy.map((ustawa) => (
            <UstawaSearchCard key={ustawa.id} ustawa={ustawa} />
          ))}

          {followedUstawy.length === 0 && (
            <div className="text-center py-12">
              <Bookmark className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg font-medium">Nie obserwujesz jeszcze żadnych ustaw</p>
              <p className="text-muted-foreground mt-1">
                Kliknij "Obserwuj" przy ustawie, aby dodać ją do tej listy
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
