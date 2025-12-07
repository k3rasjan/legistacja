'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { Scale, Sparkles, List, Newspaper, ArrowRight, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

const CHART_COLORS = {
  primary: '#171717',
  secondary: '#525252',
  tertiary: '#a3a3a3',
  grid: '#e5e5e5',
};

const pieData = [
  { name: 'Pozytywne', value: 456 },
  { name: 'Neutralne', value: 111 },
  { name: 'Negatywne', value: 342 },
];

const lineData = [
  { date: '2024-01-01', count: 45 },
  { date: '2024-01-02', count: 78 },
  { date: '2024-01-03', count: 52 },
  { date: '2024-01-04', count: 95 },
  { date: '2024-01-05', count: 68 },
  { date: '2024-01-06', count: 82 },
  { date: '2024-01-07', count: 110 },
];
import { TrainStatusBar } from '@/components/ustawa/TrainStatusBar';
import { UstawaAvatar } from '@/components/ustawa/UstawaAvatar';
import { AIAnalysisSection } from '@/components/ustawa/AIAnalysisSection';
import { statusLabels, statusColors } from '@/types';

const teamMembers = [
  'Mateusz Borach',
  'Wojciech Choros',
  'Alexander Gese',
  'Mateusz Gliszczynski',
  'Mateusz Najsarek',
  'Dawid Szymaniak',
];


// Browser mockup component
function BrowserMockup({ children, url = 'legislacja-tracker.vercel.app', className = '' }: { children: React.ReactNode; url?: string; className?: string }) {
  return (
    <div className={`rounded-xl overflow-hidden shadow-2xl border border-border bg-card ${className}`}>
      <div className="bg-muted px-4 py-3 flex items-center gap-3 border-b border-border">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-background rounded-md px-4 py-1 text-sm text-muted-foreground border border-border max-w-md w-full text-center">
            {url}
          </div>
        </div>
        <div className="w-16" />
      </div>
      <div className="relative">
        {children}
      </div>
    </div>
  );
}

// Mock UpdateCard matching app style
function MockUpdateCard() {
  return (
    <Card className="hover:bg-accent/50 transition-colors max-w-md">
      <CardContent className="pt-4">
        <div className="flex gap-3">
          <UstawaAvatar shortTitle="Moja Legistacja" status="sejm" />
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="font-semibold">Moja Legistacja</span>
                <span className="text-muted-foreground text-sm ml-2">@ministerstwocyfryzacji</span>
                <span className="text-muted-foreground text-sm ml-2">·</span>
                <span className="text-muted-foreground text-sm ml-2">2 min temu</span>
              </div>
            </div>
            <Badge className={statusColors['sejm']} variant="secondary">
              {statusLabels['sejm']}
            </Badge>

            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4" />
              <span>Podsumowanie AI</span>
            </div>

            <h3 className="mt-2 font-medium">Innowacyjny projekt dla obywateli</h3>
            <p className="mt-1 text-muted-foreground text-sm">Platforma monitorowania legislacji pomaga obywatelom Polski rozumieć i śledzić proces ustawodawczy.</p>

            <Separator className="my-3" />
            <div className="bg-primary/5 rounded-lg p-3 border border-primary/10">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">Podsumowanie AI</span>
              </div>
              <p className="text-sm">Aplikacja demokratyzuje dostęp do informacji o procesie legislacyjnym w Polsce.</p>
            </div>

          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function PrezentacjaPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalSlides = 10;

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index < 0 || index >= totalSlides) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, totalSlides]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        goToSlide(currentSlide + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        goToSlide(currentSlide - 1);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) > 30) {
        if (e.deltaY > 0) {
          goToSlide(currentSlide + 1);
        } else {
          goToSlide(currentSlide - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentSlide, goToSlide]);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden bg-background">

      {/* Slides container */}
      <div
        className="transition-transform duration-500 ease-out"
        style={{ transform: `translateY(-${currentSlide * 100}vh)` }}
      >
        {/* Slide 1: Title with MockUpdateCard */}
        <section className="h-[100vh] min-h-[100vh] max-h-[100vh] flex items-center px-8 lg:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="h-12 w-12 text-primary" />
                </div>
                <h1 className="text-6xl lg:text-7xl font-black tracking-tight">
                  <span className="text-foreground">Moja</span>
                  <br />
                  <span className="text-primary">Legi</span>
                  <span className="text-foreground">stacja</span>
                </h1>
                <p className="text-xl text-muted-foreground mt-4 italic">Nowe prawo wszystkich Polaków</p>
              </div>

              <div className="space-y-1">
                {teamMembers.map((name) => (
                  <p key={name} className="text-base text-muted-foreground italic">{name}</p>
                ))}
              </div>
            </div>

            <div className="relative">
              <MockUpdateCard />
            </div>
          </div>
        </section>

        {/* Slide 2: Informacje w pigułce */}
        <section className="h-[100vh] min-h-[100vh] max-h-[100vh] flex items-center px-8 lg:px-16 bg-muted/30 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-8">
              Informacje w pigułce
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              {/* Stacked screenshots */}
              <div className="relative h-[55vh]">
                <BrowserMockup className="absolute top-0 left-0 w-[85%] transform -rotate-2 hover:rotate-0 transition-transform duration-500 z-10">
                  <Image
                    src="/ss/wrapped-projects.png"
                    alt="Lista projektów"
                    width={500}
                    height={350}
                    className="w-full h-auto max-h-[38vh] object-cover object-top"
                  />
                </BrowserMockup>

                <BrowserMockup className="absolute bottom-0 right-0 w-[85%] transform rotate-2 hover:rotate-0 transition-transform duration-500 z-20 shadow-2xl">
                  <Image
                    src="/ss/wrapped-intro.png"
                    alt="Zmiany w pigułce"
                    width={500}
                    height={350}
                    className="w-full h-auto max-h-[38vh] object-cover object-top"
                  />
                </BrowserMockup>
              </div>

              <div className="space-y-4">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Użytkownik, po wejściu na stronę w ciągu kilku sekund dowiaduje się o tym,
                  <span className="font-bold text-foreground"> co ostatnio działo się w procesie legislacyjnym.</span>
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Dzieje się to dzięki wpadającym w oko hasłom,
                  <span className="font-bold text-primary"> generowanym przez modele AI</span>.
                  Ich pełne wersje może następnie przeglądać.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 3: Dla każdego - mimicking homepage bento grid */}
        <section className="h-[100vh] min-h-[100vh] max-h-[100vh] flex items-center px-8 lg:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-10">
              Dla każdego, w najprzystępniejszej formie
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Zmiany w pigułce card with annotation */}
              <div className="lg:col-span-4 flex flex-col gap-3">
                <div
                  className="rounded-2xl p-6 flex flex-col relative overflow-hidden min-h-[280px]"
                  style={{
                    background: 'linear-gradient(135deg, #18181b 0%, #27272a 50%, #3f3f46 100%)',
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/25 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-lg font-bold text-white mb-1">Zmiany w pigułce</h3>
                    <p className="text-white/80 text-sm">AI przeanalizowało zmiany w prawie i przygotowało dla Ciebie spersonalizowane podsumowanie.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-foreground rotate-[-90deg]" />
                  <div>
                    <p className="font-bold text-foreground">Dla leniwych,</p>
                    <p className="text-muted-foreground text-sm">w pigułce</p>
                  </div>
                </div>
              </div>

              {/* Lista ustaw card with annotation */}
              <div className="lg:col-span-4 flex flex-col gap-3">
                <Card className="min-h-[280px] flex flex-col">
                  <CardContent className="p-5 flex flex-col flex-1">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center mb-4">
                      <List className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="mt-auto">
                      <h3 className="text-base font-bold mb-1">Lista ustaw</h3>
                      <p className="text-muted-foreground text-xs">Przeszukuj projekty ustaw z pomocą AI.</p>
                    </div>
                  </CardContent>
                </Card>
                <div className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-foreground rotate-[-90deg]" />
                  <div>
                    <p className="font-bold text-foreground">Dla tradycjonalistów,</p>
                    <p className="text-muted-foreground text-sm">tradycyjnie</p>
                  </div>
                </div>
              </div>

              {/* Dla ciebie card with annotation */}
              <div className="lg:col-span-4 flex flex-col gap-3">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 border border-emerald-200 dark:border-emerald-800/50 rounded-2xl p-5 min-h-[280px] flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mb-4">
                    <Newspaper className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-base font-bold text-emerald-900 dark:text-emerald-100 mb-1">Dla ciebie</h3>
                    <p className="text-emerald-700/70 dark:text-emerald-300/70 text-xs">Śledź postępy ustaw jak posty w social media.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-emerald-600 rotate-[-90deg]" />
                  <div>
                    <p className="font-bold text-emerald-600">Dla ciekawskich,</p>
                    <p className="text-muted-foreground text-sm">zajmująco</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 4: Gdy ustawa zaciekawi */}
        <section className="h-[100vh] min-h-[100vh] max-h-[100vh] flex items-center px-8 lg:px-16 bg-muted/30 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-8">
              Gdy ustawa zaciekawi
            </h2>

            {/* Recreate ustawa page layout */}
            <div className="bg-background rounded-2xl border border-border shadow-xl overflow-hidden">
              <div className="flex">
                {/* Sidebar */}
                <aside className="w-56 border-r border-border bg-background p-4 flex-shrink-0">
                  <div className="flex items-center gap-2.5 mb-3">
                    <UstawaAvatar shortTitle="Podatek cyfrowy" status="sejm" size="lg" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm truncate">Podatek cyfrowy</h3>
                      <p className="text-xs text-muted-foreground truncate">Ministerstwo Finansów</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    <Badge variant="outline" className="text-[10px]">Finanse</Badge>
                    <Badge variant="outline" className="text-[10px]">Technologia</Badge>
                    <Badge variant="outline" className="text-[10px]">Biznes</Badge>
                  </div>

                  <button className="w-full mb-4 px-3 py-1.5 bg-primary text-primary-foreground rounded-md text-xs font-medium">
                    Obserwuj
                  </button>

                  <div className="border-t border-border pt-3">
                    <p className="text-[10px] font-semibold text-muted-foreground mb-2">Status procesu</p>
                    <TrainStatusBar
                      currentStatus="sejm"
                      statusLabels={statusLabels}
                      statusColors={statusColors}
                    />
                  </div>
                </aside>

                {/* Main content */}
                <main className="flex-1 p-4">
                  <div className="mb-4">
                    <h3 className="text-base font-bold mb-1">Projekt ustawy o podatku od usług cyfrowych</h3>
                    <p className="text-xs text-muted-foreground">
                      Wprowadzenie podatku od przychodów z usług cyfrowych dla dużych firm technologicznych.
                    </p>
                  </div>

                  {/* Co się zmieni? */}
                  <div className="mb-4 p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                      <span className="font-semibold text-xs text-amber-800 dark:text-amber-200">
                        Co się zmieni?
                      </span>
                    </div>
                    <p className="text-xs text-amber-900 dark:text-amber-100">
                      Duże firmy technologiczne zapłacą 3% podatek od przychodów generowanych w Polsce z reklam online i pośrednictwa cyfrowego.
                    </p>
                  </div>

                  {/* AI Analysis */}
                  <AIAnalysisSection
                    analysis={`**Główne założenia:**
• Stawka 3% od przychodów powyżej 750 mln EUR
• Objęte: reklamy online, pośrednictwo cyfrowe
• Szacowane wpływy: 2 mld zł rocznie

**Kogo dotyczy:** Google, Meta, Amazon i inne big-tech`}
                  />

                  <h4 className="font-semibold text-xs mt-4 mb-2">Aktualizacje (3)</h4>
                  <div className="space-y-2">
                    <div className="p-2 bg-muted/50 rounded-lg">
                      <p className="text-[10px] text-muted-foreground">2 dni temu</p>
                      <p className="text-xs">Projekt przekazany do Komisji Finansów Publicznych</p>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 5: Konsultacje społeczne */}
        <section className="h-[100vh] min-h-[100vh] max-h-[100vh] flex items-center px-8 lg:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-1">
              Konsultacje społeczne –
            </h2>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-8">
              w końcu w jednym miejscu!
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
              {/* Two screenshots overlapping */}
              <div className="relative h-[55vh]">
                <BrowserMockup className="absolute top-0 left-0 w-[85%] transform -rotate-2 hover:rotate-0 transition-transform duration-500 z-10">
                  <Image
                    src="/ss/consultations.png"
                    alt="Lista konsultacji"
                    width={500}
                    height={350}
                    className="w-full h-auto max-h-[40vh] object-cover object-top"
                  />
                </BrowserMockup>
                <BrowserMockup className="absolute bottom-0 right-0 w-[85%] transform rotate-2 hover:rotate-0 transition-transform duration-500 z-20 shadow-2xl">
                  <Image
                    src="/ss/consultation-page.png"
                    alt="Strona konsultacji"
                    width={500}
                    height={350}
                    className="w-full h-auto max-h-[40vh] object-cover object-top"
                  />
                </BrowserMockup>
              </div>

              <div className="space-y-4">
                {/* AI Summary card matching app style */}
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Sparkles className="h-5 w-5" />
                    <span className="font-semibold">Podsumowanie AI</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">Przeczytaj podsumowanie przed udziałem w konsultacjach</p>

                  <div className="space-y-3">
                    <div>
                      <p className="font-bold text-foreground text-sm">O czym jest ta ustawa?</p>
                      <p className="text-muted-foreground text-xs">Projekt ma na celu zwiększenie przejrzystości tworzenia prawa w Polsce.</p>
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm">Proponowane rozwiązania</p>
                      <ul className="text-muted-foreground text-xs space-y-1">
                        <li>• Centralny portal legislacyjny</li>
                        <li>• Obowiązek publikacji w czasie rzeczywistym</li>
                        <li>• Ułatwiony udział w konsultacjach</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground italic">
                  Dzięki zapoznaniu użytkownika z treścią ustawy przed konsultacją, sprawiamy, że jego odpowiedzi są świadome, a udzielenie ich – prostsze
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 6: Prosty feedback dla urzędników */}
        <section className="h-[100vh] min-h-[100vh] max-h-[100vh] flex items-center px-8 lg:px-16 bg-muted/30 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-2">
              Prosty feedback dla urzędników
            </h2>
            <p className="text-base text-muted-foreground mb-8">
              AI podsumowuje i grupuje odpowiedzi na pytania otwarte z konsultacji społecznych
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Admin screenshot */}
              <BrowserMockup className="transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/ss/admin-new.png"
                  alt="Panel administracyjny"
                  width={600}
                  height={400}
                  className="w-full h-auto max-h-[50vh] object-cover object-top"
                />
              </BrowserMockup>

              {/* Charts and stats */}
              <div className="space-y-3">
                {/* Stats grid - matching admin page style */}
                <div className="grid grid-cols-4 gap-2">
                  <div className="text-center p-2 rounded-xl bg-neutral-50 dark:bg-neutral-900">
                    <span className="text-xl font-bold tracking-tight">909</span>
                    <p className="text-[10px] text-muted-foreground">Wszystkich</p>
                  </div>
                  <div className="text-center p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800">
                    <span className="text-xl font-bold tracking-tight">456</span>
                    <p className="text-[10px] text-muted-foreground">Pozytywnych</p>
                  </div>
                  <div className="text-center p-2 rounded-xl bg-neutral-200 dark:bg-neutral-700">
                    <span className="text-xl font-bold tracking-tight">111</span>
                    <p className="text-[10px] text-muted-foreground">Neutralnych</p>
                  </div>
                  <div className="text-center p-2 rounded-xl bg-neutral-300 dark:bg-neutral-600">
                    <span className="text-xl font-bold tracking-tight">342</span>
                    <p className="text-[10px] text-muted-foreground">Negatywnych</p>
                  </div>
                </div>

                {/* Charts - using Recharts like admin page */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl p-3 bg-neutral-50 dark:bg-neutral-900">
                    <h3 className="font-medium text-[10px] uppercase tracking-wide text-muted-foreground mb-2">
                      Rozkład sentymentu
                    </h3>
                    <div className="h-24">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            innerRadius={28}
                            outerRadius={42}
                            paddingAngle={3}
                            dataKey="value"
                            strokeWidth={0}
                          >
                            <Cell fill={CHART_COLORS.primary} />
                            <Cell fill={CHART_COLORS.tertiary} />
                            <Cell fill={CHART_COLORS.secondary} />
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div className="rounded-2xl p-3 bg-neutral-50 dark:bg-neutral-900">
                    <h3 className="font-medium text-[10px] uppercase tracking-wide text-muted-foreground mb-2">
                      Odpowiedzi w czasie
                    </h3>
                    <div className="h-24">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={lineData}>
                          <CartesianGrid strokeDasharray="0" stroke={CHART_COLORS.grid} vertical={false} />
                          <XAxis dataKey="date" hide />
                          <YAxis hide />
                          <Line
                            type="monotone"
                            dataKey="count"
                            stroke={CHART_COLORS.primary}
                            strokeWidth={2}
                            dot={{ fill: CHART_COLORS.primary, strokeWidth: 0, r: 2 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground italic">
                  Zorientowanie się w trendach społecznych zajmuje tylko kilka sekund
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 7: Dla bardziej zainteresowanych */}
        <section className="h-[100vh] min-h-[100vh] max-h-[100vh] flex items-center px-8 lg:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-2">
              Dla bardziej zainteresowanych
            </h2>

            <p className="text-lg text-muted-foreground max-w-3xl mb-10 italic">
              Odkryj prace Sejmu na nowo w zakładce Dla Ciebie. To Twoje nowoczesne centrum informacji:
              przeglądaj aktualności, zgłębiaj poselskie inicjatywy i miej realny wpływ na prawo.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Scale className="h-10 w-10 text-primary" />
                  <span className="text-2xl font-bold">Legistacja</span>
                </div>
                <div>
                  <h3 className="text-5xl font-black">
                    <span className="text-foreground">Moja</span>
                    <br />
                    <span className="text-primary">Legi</span>
                    <span className="text-foreground">stacja</span>
                  </h3>
                  <p className="text-xl text-muted-foreground italic mt-4">Dla Ciebie</p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-muted/50 rounded-3xl p-4 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <BrowserMockup>
                    <Image
                      src="/ss/feed.png"
                      alt="Feed legislacyjny"
                      width={600}
                      height={450}
                      className="w-full h-auto"
                    />
                  </BrowserMockup>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 8: mObywatel */}
        <section className="h-[100vh] min-h-[100vh] max-h-[100vh] flex items-center px-8 lg:px-16 bg-gradient-to-br from-red-50 to-white dark:from-red-950/20 dark:to-background overflow-hidden">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-black text-foreground">
                  Logowanie przez
                  <span className="text-[#DC143C]"> mObywatel</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Bezpieczna autoryzacja z wykorzystaniem aplikacji mObywatel - cyfrowej tożsamości każdego Polaka.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#DC143C]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#DC143C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Bezpieczna weryfikacja</p>
                      <p className="text-muted-foreground text-sm">Potwierdzenie tożsamości na poziomie e-dowodu</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#DC143C]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#DC143C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Szybkie logowanie</p>
                      <p className="text-muted-foreground text-sm">Jeden klik w aplikacji mObywatel</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#DC143C]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#DC143C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Zaufany profil</p>
                      <p className="text-muted-foreground text-sm">Integracja z systemami rządowymi</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* mObywatel screenshot */}
              <div className="flex justify-center">
                <BrowserMockup className="transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/ss/mobywatel.png"
                    alt="Logowanie przez mObywatel"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </BrowserMockup>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 9: Dalsze wdrożenia */}
        <section className="h-[100vh] min-h-[100vh] max-h-[100vh] flex items-center px-8 lg:px-16 bg-muted/30 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-2">
              Dalsze wdrożenia
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Projekt powstał z myślą o realnym wdrożeniu.<br />
              Proces ten jest przemyślany dzięki:
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {/* Prisma Diagram */}
              <div className="rounded-xl overflow-hidden border border-border shadow-lg">
                <Image
                  src="/ss/prisma-diagram.png"
                  alt="Prisma Database Schema"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              {/* Implementation points */}
              <div className="space-y-3">
                {[
                  'Kompleksowy projekt bazy danych przystosowanej pod integrację z sejm.gov i RCL.',
                  'Miejsce na integrację z profilem zaufanym.',
                  'Przygotowanie pod hostowane lokalnie modele AI typu open-source.',
                  'Zgodność z WCAG 2.2 i Aktami o usługach cyfrowych',
                  'Pełna modułowość projektu umożliwiająca dalsze tworzenie feature\'ów.',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Slide 10: Thank you */}
        <section className="h-[100vh] min-h-[100vh] max-h-[100vh] flex items-center justify-center px-8 lg:px-16 overflow-hidden">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Scale className="h-16 w-16 text-primary" />
            </div>
            <div>
              <h2 className="text-6xl lg:text-8xl font-black">
                <span className="text-foreground">Moja</span>
                <br />
                <span className="text-primary">Legi</span>
                <span className="text-foreground">stacja</span>
              </h2>
              <p className="text-xl text-muted-foreground mt-6 italic">Nowe prawo wszystkich Polaków</p>
            </div>

            <p className="text-2xl font-bold text-foreground">Dziękujemy za uwagę!</p>

            <p className="text-base text-muted-foreground">
              Ministerstwo Cyfryzacji • Hackathon 2025
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
