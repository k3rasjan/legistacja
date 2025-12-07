'use client';

import Link from 'next/link';
import { Scale, List, Sparkles, Newspaper, ArrowRight } from 'lucide-react';
import { useLastVisit } from '@/hooks/useLastVisit';
import { useWrappedUpdates } from '@/hooks/useWrappedUpdates';

export default function Home() {
  useLastVisit();
  const { hasUpdates } = useWrappedUpdates();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Logo in top left */}
      <div className="fixed top-3 left-3 sm:top-4 sm:left-4 z-50 flex items-center gap-2">
        <Scale className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
        <span className="text-lg sm:text-xl font-bold">Legislacja</span>
      </div>

      {/* Centered Bento Grid */}
      <main className="flex-1 px-4 md:px-8 lg:px-12 py-8 flex items-center justify-center">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

          {/* Wrapped - Large card on the left */}
          {hasUpdates ? (
            <Link href="/wrapped" className="block md:row-span-2">
              <div className="h-full min-h-[180px] md:min-h-[400px] rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all flex flex-col group relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #a5b4fc 0%, #d8b4fe 50%, #f9a8d4 100%)',
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(255,255,255,0.15) 100%)',
                  }}
                />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4 md:mb-auto">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/25 backdrop-blur-sm flex items-center justify-center group-hover:scale-105 transition-all">
                      <Sparkles className="h-6 w-6 md:h-7 md:w-7 text-white" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="mt-auto">
                    <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">Twoje Wrapped</h2>
                    <p className="text-white/80 text-sm md:text-base">
                      AI przeanalizowało zmiany w prawie i przygotowało dla Ciebie spersonalizowane podsumowanie. Zobacz, które ustawy wpłyną na Twoje życie.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            <div className="block cursor-not-allowed md:row-span-2">
              <div className="h-full min-h-[180px] md:min-h-[400px] rounded-2xl p-6 md:p-8 flex flex-col relative overflow-hidden border border-border bg-neutral-100 dark:bg-neutral-900 opacity-60">
                <div className="flex items-center justify-between mb-4 md:mb-auto">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 md:h-7 md:w-7 text-neutral-400 dark:text-neutral-600" />
                  </div>
                </div>
                <div className="mt-auto">
                  <h2 className="text-xl md:text-2xl font-bold mb-2 text-neutral-500">Twoje Wrapped</h2>
                  <p className="text-neutral-400 dark:text-neutral-600 text-sm md:text-base">
                    AI nie znalazło nowych zmian w obserwowanych ustawach. Wróć później po aktualizacje.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Lista ustaw - Top right */}
          <Link href="/szukaj" className="block">
            <div className="h-full min-h-[180px] md:min-h-[190px] bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 hover:shadow-lg transition-all flex flex-col group">
              <div className="flex items-center justify-between mb-4 md:mb-auto">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <List className="h-6 w-6 md:h-7 md:w-7 text-neutral-600 dark:text-neutral-300 group-hover:text-primary transition-colors" />
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
              <div className="mt-auto">
                <h2 className="text-xl md:text-2xl font-bold mb-1">Lista ustaw</h2>
                <p className="text-muted-foreground text-sm md:text-base">
                  Przeszukuj projekty ustaw z pomocą AI. Inteligentne filtry i wyszukiwanie semantyczne pomogą Ci szybko znaleźć interesujące Cię regulacje.
                </p>
              </div>
            </div>
          </Link>

          {/* Feed - Bottom right */}
          <Link href="/feed" className="block">
            <div className="h-full min-h-[180px] md:min-h-[190px] bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 border border-emerald-200 dark:border-emerald-800/50 rounded-2xl p-6 md:p-8 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-lg transition-all flex flex-col group">
              <div className="flex items-center justify-between mb-4 md:mb-auto">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/50 transition-colors">
                  <Newspaper className="h-6 w-6 md:h-7 md:w-7 text-emerald-600 dark:text-emerald-400" />
                </div>
                <ArrowRight className="h-5 w-5 text-emerald-600/50 dark:text-emerald-400/50 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
              </div>
              <div className="mt-auto">
                <h2 className="text-xl md:text-2xl font-bold mb-1 text-emerald-900 dark:text-emerald-100">Feed</h2>
                <p className="text-emerald-700/70 dark:text-emerald-300/70 text-sm md:text-base">
                  AI generuje przystępne podsumowania zmian legislacyjnych. Śledź postępy ustaw jak posty w mediach społecznościowych.
                </p>
              </div>
            </div>
          </Link>

        </div>
      </main>
    </div>
  );
}
