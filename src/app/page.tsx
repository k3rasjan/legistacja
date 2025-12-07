'use client';

import Link from 'next/link';
import { Scale, List, Sparkles, Newspaper } from 'lucide-react';
import { useLastVisit } from '@/hooks/useLastVisit';
import { useWrappedUpdates } from '@/hooks/useWrappedUpdates';

export default function Home() {
  // Track last visit in localStorage
  useLastVisit();

  const { hasUpdates } = useWrappedUpdates();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="pt-8 md:pt-12 pb-6 md:pb-8 px-4 md:px-6 text-center">
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
          <Scale className="h-8 w-8 md:h-10 md:w-10 text-primary" />
          <h1 className="text-2xl md:text-3xl font-bold">Legislacja</h1>
        </div>
        <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto">
          Śledź zmiany w prawie, które dotyczą Ciebie
        </p>
      </header>

      {/* Main buttons */}
      <main className="flex-1 px-4 md:px-6 pb-8 md:pb-12 flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl w-full">
          <Link href="/szukaj" className="block">
            <div className="h-full min-h-[200px] md:min-h-[280px] bg-card border border-border rounded-2xl p-5 md:p-6 hover:border-primary/50 hover:shadow-lg transition-all flex flex-col group">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/10 transition-colors">
                <List className="h-6 w-6 md:h-8 md:w-8 text-neutral-600 dark:text-neutral-300 group-hover:text-primary transition-colors" />
              </div>
              <div className="flex-1 flex flex-col">
                <h2 className="text-lg md:text-xl font-bold mb-2">Lista ustaw</h2>
                <p className="text-muted-foreground text-sm flex-1">
                  Przeglądaj i wyszukuj wszystkie projekty ustaw
                </p>
              </div>
            </div>
          </Link>

          {hasUpdates ? (
            <Link href="/wrapped" className="block">
              <div className="h-full min-h-[200px] md:min-h-[280px] rounded-2xl p-5 md:p-6 hover:shadow-xl transition-all flex flex-col group relative overflow-hidden border-0"
                style={{
                  background: 'linear-gradient(135deg, #a5b4fc 0%, #d8b4fe 50%, #f9a8d4 100%)',
                }}
              >
                {/* Animated shine effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(255,255,255,0.15) 100%)',
                  }}
                />
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-white/25 backdrop-blur-sm flex items-center justify-center mb-4 md:mb-6 group-hover:bg-white/35 group-hover:scale-110 transition-all">
                    <Sparkles className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h2 className="text-lg md:text-xl font-bold mb-2 text-white">Twoje Wrapped</h2>
                    <p className="text-white/90 text-sm flex-1">
                      Spersonalizowane podsumowanie zmian w prawie
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            <div className="block cursor-not-allowed">
              <div className="h-full min-h-[200px] md:min-h-[280px] rounded-2xl p-5 md:p-6 flex flex-col relative overflow-hidden border border-border bg-neutral-100 dark:bg-neutral-900 opacity-60">
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center mb-4 md:mb-6">
                    <Sparkles className="h-6 w-6 md:h-8 md:w-8 text-neutral-400 dark:text-neutral-600" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h2 className="text-lg md:text-xl font-bold mb-2 text-neutral-500 dark:text-neutral-500">Twoje Wrapped</h2>
                    <p className="text-neutral-400 dark:text-neutral-600 text-sm flex-1">
                      Brak nowych zmian do pokazania
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <Link href="/feed" className="block sm:col-span-2 lg:col-span-1">
            <div className="h-full min-h-[200px] md:min-h-[280px] bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 border border-emerald-200 dark:border-emerald-800/50 rounded-2xl p-5 md:p-6 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-lg transition-all flex flex-col group">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/50 transition-colors">
                <Newspaper className="h-6 w-6 md:h-8 md:w-8 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors" />
              </div>
              <div className="flex-1 flex flex-col">
                <h2 className="text-lg md:text-xl font-bold mb-2 text-emerald-900 dark:text-emerald-100">Feed aktualności</h2>
                <p className="text-emerald-700/70 dark:text-emerald-300/70 text-sm flex-1">
                  Najnowsze zmiany w ustawach w stylu social media
                </p>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
