'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Scale, ArrowDown, ArrowRight, ExternalLink, Rss, Search, FileText, Gift, Sparkles, MessageSquare, Bell, FileCheck, Code, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const sections = [
  {
    id: 'hero',
    title: 'Legistacja',
    subtitle: 'Śledź zmiany w prawie jak posty w social media',
    description: 'Platforma, która demokratyzuje dostęp do informacji o procesie legislacyjnym w Polsce.',
    screenshot: null,
    link: '/',
    icon: Scale,
  },
  {
    id: 'problem',
    title: 'Problem',
    subtitle: 'Proces legislacyjny jest nieprzejrzysty',
    description: 'Obywatele nie wiedzą o zmianach w prawie, które ich dotyczą. Informacje są rozproszone po wielu stronach rządowych, a język prawniczy jest niezrozumiały dla przeciętnego użytkownika.',
    screenshot: null,
    stats: [
      { value: '3000+', label: 'aktów prawnych rocznie' },
      { value: '< 1%', label: 'obywateli śledzi proces legislacyjny' },
      { value: '72h', label: 'średni czas na konsultacje' },
    ],
  },
  {
    id: 'solution',
    title: 'Rozwiązanie',
    subtitle: 'Legistacja - Twój osobisty asystent legislacyjny',
    description: 'Agregujemy dane z oficjalnych źródeł, wykorzystujemy AI do generowania przystępnych podsumowań i dostarczamy spersonalizowane powiadomienia.',
    screenshot: '/ss/1.png',
    link: '/',
    icon: Sparkles,
  },
  {
    id: 'feed',
    title: 'Feed legislacyjny',
    subtitle: 'Śledź ustawy jak posty w mediach społecznościowych',
    description: 'Przejrzysta oś czasu z aktualizacjami o projektach ustaw. AI generuje krótkie, zrozumiałe podsumowania każdej zmiany.',
    screenshot: '/ss/image copy 5.png',
    link: '/feed',
    icon: Rss,
    features: ['Chronologiczna oś czasu', 'AI-generowane podsumowania', 'Filtrowanie po kategoriach'],
  },
  {
    id: 'search',
    title: 'Inteligentne wyszukiwanie',
    subtitle: 'Znajdź ustawy, które Cię dotyczą',
    description: 'Wyszukiwanie semantyczne pozwala znaleźć projekty ustaw nawet bez znajomości dokładnej terminologii prawniczej.',
    screenshot: '/ss/image copy 4.png',
    link: '/szukaj',
    icon: Search,
    features: ['Wyszukiwanie semantyczne', 'Filtry po statusie i kategorii', 'Sortowanie po aktualności'],
  },
  {
    id: 'details',
    title: 'Szczegóły ustawy',
    subtitle: 'Wszystko w jednym miejscu',
    description: 'Pełna historia projektu, analiza AI, dokumenty źródłowe i możliwość śledzenia zmian - wszystko dostępne na jednej stronie.',
    screenshot: '/ss/image copy 6.png',
    link: '/ustawa/3',
    icon: FileText,
    features: ['Status procesu legislacyjnego', 'Analiza AI wpływu na obywateli', 'Historia dokumentów'],
  },
  {
    id: 'wrapped',
    title: 'Zmiany w pigułce',
    subtitle: 'Twój osobisty raport legislacyjny',
    description: 'Inspirowane Spotify Wrapped - spersonalizowane podsumowanie najważniejszych zmian w prawie od Twojej ostatniej wizyty.',
    screenshot: '/ss/image.png',
    link: '/wrapped',
    icon: Gift,
    features: ['Nowe projekty ustaw', 'Zmiany w śledzonych ustawach', 'AI-generowane podsumowania'],
  },
  {
    id: 'summary',
    title: 'Podsumowanie AI',
    subtitle: 'Kompleksowy przegląd zmian',
    description: 'AI analizuje wszystkie zmiany i generuje przystępne podsumowanie, które pozwala szybko zorientować się w najważniejszych wydarzeniach.',
    screenshot: '/ss/image copy 3.png',
    link: '/wrapped/podsumowanie',
    icon: Sparkles,
  },
  {
    id: 'consultations',
    title: 'Konsultacje publiczne',
    subtitle: 'Twój głos ma znaczenie',
    description: 'Przeglądaj aktywne konsultacje społeczne i weź udział w kształtowaniu prawa. Platforma ułatwia zgłaszanie opinii.',
    screenshot: '/ss/image copy 7.png',
    link: '/konsultacje',
    icon: MessageSquare,
    features: ['Lista aktywnych konsultacji', 'Terminy i statystyki', 'Prosty formularz zgłaszania uwag'],
  },
  {
    id: 'notifications',
    title: 'Powiadomienia',
    subtitle: 'Bądź na bieżąco',
    description: 'Otrzymuj powiadomienia o zmianach w śledzonych ustawach, nowych konsultacjach i ważnych głosowaniach.',
    screenshot: '/ss/image copy 8.png',
    link: '/powiadomienia',
    icon: Bell,
  },
  {
    id: 'followed',
    title: 'Obserwowane ustawy',
    subtitle: 'Twoja spersonalizowana lista',
    description: 'Śledź wybrane projekty ustaw i otrzymuj powiadomienia o każdej zmianie. Wszystkie ważne dla Ciebie regulacje w jednym miejscu.',
    screenshot: '/ss/image copy 9.png',
    link: '/obserwowane',
    icon: FileCheck,
    features: ['Personalizowana lista ustaw', 'Powiadomienia o zmianach', 'Szybki dostęp do szczegółów'],
  },
  {
    id: 'tech',
    title: 'Technologia',
    subtitle: 'Nowoczesny stack',
    description: 'Zbudowane z wykorzystaniem najnowszych technologii dla najlepszej wydajności i doświadczenia użytkownika.',
    screenshot: null,
    icon: Code,
    tech: [
      { name: 'Next.js 15', desc: 'React framework' },
      { name: 'TypeScript', desc: 'Type safety' },
      { name: 'Tailwind CSS', desc: 'Styling' },
      { name: 'Sejm API', desc: 'Dane legislacyjne' },
      { name: 'AI/LLM', desc: 'Podsumowania' },
      { name: 'Prisma', desc: 'ORM (ready)' },
    ],
  },
  {
    id: 'team',
    title: 'Zespół',
    subtitle: 'Hackathon 2025',
    description: 'Projekt stworzony z pasją do transparentności i demokratyzacji dostępu do informacji publicznej.',
    screenshot: null,
    link: '/',
    icon: Users,
  },
];

export default function PrezentacjaPage() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(index);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const renderSection = (section: typeof sections[0], index: number) => {
    const Icon = section.icon;

    switch (section.id) {
      case 'hero':
        return (
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="p-4 bg-primary/10 rounded-2xl">
                <Scale className="h-16 w-16 text-primary" />
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight text-foreground mb-4">{section.title}</h1>
            <p className="text-2xl md:text-4xl text-muted-foreground mb-6 font-medium">{section.subtitle}</p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">{section.description}</p>
            {section.link && (
              <Link href={section.link}>
                <Button size="lg" className="mb-12">
                  Otwórz aplikację
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}
            <div className="animate-bounce">
              <ArrowDown className="h-8 w-8 mx-auto text-muted-foreground" />
            </div>
          </div>
        );

      case 'problem':
        return (
          <div className="text-center">
            <div className="inline-block px-3 py-1.5 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">
              Wyzwanie
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-3 text-foreground">{section.title}</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">{section.subtitle}</p>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8">{section.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {section.stats?.map((stat, i) => (
                <div
                  key={stat.label}
                  className="relative overflow-hidden bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="text-4xl md:text-5xl font-black text-red-500 mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'solution':
        return (
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-2xl" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  <Sparkles className="h-4 w-4" />
                  Nasza odpowiedź
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-3 text-foreground">{section.title}</h2>
                <p className="text-lg text-muted-foreground mb-3">{section.subtitle}</p>
                <p className="text-base text-muted-foreground mb-4">{section.description}</p>
                {section.link && (
                  <Link href={section.link}>
                    <Button>
                      Wypróbuj teraz
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                )}
              </div>
              {section.screenshot && (
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl" />
                  <div className="relative rounded-xl overflow-hidden shadow-xl border border-border">
                    <Image
                      src={section.screenshot}
                      alt={section.title}
                      width={600}
                      height={450}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 'feed':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-3">
                {Icon && <Icon className="h-6 w-6 text-primary" />}
                <span className="text-xs font-medium text-primary uppercase tracking-wide">Funkcja</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black mb-2 text-foreground">{section.title}</h2>
              <p className="text-base text-muted-foreground mb-2">{section.subtitle}</p>
              <p className="text-sm text-muted-foreground mb-4">{section.description}</p>
              {section.features && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {section.features.map((feature) => (
                    <span key={feature} className="px-2 py-1 bg-muted rounded-full text-xs font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              )}
              {section.link && (
                <Link href={section.link}>
                  <Button variant="outline" size="sm">
                    Zobacz feed
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              {section.screenshot && (
                <div className="relative -rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl -z-10" />
                  <div className="rounded-xl overflow-hidden shadow-xl border border-border">
                    <Image
                      src={section.screenshot}
                      alt={section.title}
                      width={600}
                      height={450}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 'search':
        return (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
              <Search className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground">{section.title}</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{section.subtitle}</p>
            {section.screenshot && (
              <div className="relative max-w-4xl mx-auto mb-8">
                <div className="absolute inset-x-0 -bottom-10 h-40 bg-gradient-to-t from-background to-transparent z-10" />
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
                  <Image
                    src={section.screenshot}
                    alt={section.title}
                    width={1000}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            )}
            <p className="text-lg text-muted-foreground mb-6">{section.description}</p>
            {section.link && (
              <Link href={section.link}>
                <Button>
                  Szukaj ustaw
                  <Search className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        );

      case 'details':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              {section.screenshot && (
                <div className="relative rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
                    <Image
                      src={section.screenshot}
                      alt={section.title}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted rounded-full text-sm font-medium mb-4">
                <FileText className="h-4 w-4" />
                Strona ustawy
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-4 text-foreground">{section.title}</h2>
              <p className="text-xl text-muted-foreground mb-4">{section.subtitle}</p>
              <p className="text-lg text-muted-foreground mb-6">{section.description}</p>
              {section.features && (
                <ul className="space-y-3 mb-6">
                  {section.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-foreground">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              {section.link && (
                <Link href={section.link}>
                  <Button variant="outline">
                    Zobacz przykład
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        );

      case 'wrapped':
        return (
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-8 md:p-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-200/50 to-fuchsia-200/50 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-200/50 to-violet-200/50 rounded-full blur-3xl" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full text-sm font-medium mb-6 text-purple-700">
                  <Gift className="h-4 w-4" />
                  Inspirowane Spotify Wrapped
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-4 text-foreground">{section.title}</h2>
                <p className="text-xl text-purple-700 mb-4">{section.subtitle}</p>
                <p className="text-lg text-muted-foreground mb-6">{section.description}</p>
                {section.link && (
                  <Link href={section.link}>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      Zobacz swój raport
                      <Gift className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                )}
              </div>
              {section.screenshot && (
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <Image
                      src={section.screenshot}
                      alt={section.title}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 'summary':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl mb-6">
                <Sparkles className="h-10 w-10 text-amber-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground">{section.title}</h2>
              <p className="text-xl text-muted-foreground">{section.subtitle}</p>
            </div>
            {section.screenshot && (
              <div className="relative mb-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-100 to-orange-100 rounded-3xl -z-10" />
                <div className="rounded-2xl overflow-hidden shadow-xl border border-amber-200">
                  <Image
                    src={section.screenshot}
                    alt={section.title}
                    width={1000}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            )}
            <p className="text-center text-lg text-muted-foreground mb-6">{section.description}</p>
            {section.link && (
              <div className="text-center">
                <Link href={section.link}>
                  <Button variant="outline">
                    Zobacz podsumowanie
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )}
          </div>
        );

      case 'consultations':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              {section.screenshot && (
                <div className="relative -rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute -inset-2 bg-green-100 rounded-3xl -z-10" />
                  <div className="rounded-2xl overflow-hidden shadow-2xl border border-green-200">
                    <Image
                      src={section.screenshot}
                      alt={section.title}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                <MessageSquare className="h-4 w-4" />
                Partycypacja
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">{section.title}</h2>
              <p className="text-xl text-green-700 mb-4">{section.subtitle}</p>
              <p className="text-lg text-muted-foreground mb-6">{section.description}</p>
              {section.features && (
                <div className="space-y-2 mb-6">
                  {section.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              )}
              {section.link && (
                <Link href={section.link}>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Weź udział
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                <Bell className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground">{section.title}</h2>
              <p className="text-xl text-blue-600 mb-4">{section.subtitle}</p>
              <p className="text-lg text-muted-foreground mb-6">{section.description}</p>
              {section.link && (
                <Link href={section.link}>
                  <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                    Skonfiguruj powiadomienia
                    <Bell className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
            {section.screenshot && (
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-blue-100 rounded-[3rem] -rotate-6 -z-10" />
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-blue-200 rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src={section.screenshot}
                    alt={section.title}
                    width={500}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            )}
          </div>
        );

      case 'followed':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                <FileCheck className="h-4 w-4" />
                Personalizacja
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-3 text-foreground">{section.title}</h2>
              <p className="text-lg text-muted-foreground mb-3">{section.subtitle}</p>
              <p className="text-base text-muted-foreground mb-4">{section.description}</p>
              {section.features && (
                <ul className="space-y-2 mb-4">
                  {section.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-foreground text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              {section.link && (
                <Link href={section.link}>
                  <Button variant="outline" size="sm">
                    Zobacz obserwowane
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
            {section.screenshot && (
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
                  <Image
                    src={section.screenshot}
                    alt={section.title}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            )}
          </div>
        );

      case 'tech':
        return (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-900 rounded-xl mb-4">
              <Code className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-3 text-foreground">{section.title}</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">{section.subtitle}</p>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8">{section.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
              {section.tech?.map((t) => (
                <div
                  key={t.name}
                  className="group relative bg-white rounded-xl p-4 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="text-lg font-bold text-foreground mb-0.5">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'team':
        return (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-3 text-foreground">{section.title}</h2>
            <p className="text-lg md:text-xl text-primary mb-4 font-medium">{section.subtitle}</p>
            <p className="text-base text-muted-foreground max-w-xl mx-auto mb-6">{section.description}</p>
            <div className="flex items-center justify-center gap-3 p-4 bg-muted/50 rounded-xl inline-flex mb-6">
              <Scale className="h-10 w-10 text-primary" />
              <span className="text-2xl font-black text-foreground">Legistacja</span>
            </div>
            {section.link && (
              <div className="mb-6">
                <Link href={section.link}>
                  <Button>
                    Wypróbuj aplikację
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )}
            <p className="text-xl font-medium text-muted-foreground">Dziękujemy za uwagę!</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory bg-background"
    >
      {/* Progress indicator */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' })}
            className={`w-2 h-2 rounded-full transition-all ${
              activeSection === index ? 'bg-foreground scale-150' : 'bg-foreground/30 hover:bg-foreground/50'
            }`}
            title={section.title}
          />
        ))}
      </div>

      {/* Sections */}
      {sections.map((section, index) => (
        <section
          key={section.id}
          ref={(el) => { sectionRefs.current[index] = el; }}
          className="h-screen flex items-center justify-center px-4 md:px-6 py-10 md:py-16 snap-start snap-always overflow-hidden"
        >
          <div className="max-w-5xl w-full max-h-[85vh]">
            {renderSection(section, index)}
          </div>
        </section>
      ))}
    </div>
  );
}
