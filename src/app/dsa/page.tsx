'use client';

import { HamburgerMenu } from '@/components/layout/HamburgerMenu';
import { Shield, Eye, FileText, Users, Scale, ExternalLink, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function DSAPage() {
  return (
    <div className="min-h-screen bg-background">
      <HamburgerMenu />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-blue-100 rounded-xl">
            <Shield className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Zgodnosc z DSA</h1>
            <p className="text-muted-foreground">Digital Services Act - Akt o uslugach cyfrowych</p>
          </div>
        </div>

        {/* Intro */}
        <div className="prose prose-neutral max-w-none mb-8">
          <p className="text-lg text-muted-foreground">
            Legistacja zostala zaprojektowana z pelna zgodnościa z rozporzadzeniem UE 2022/2065
            (Digital Services Act), ktore ma na celu stworzenie bezpieczniejszego i bardziej
            przejrzystego srodowiska internetowego.
          </p>
        </div>

        {/* DSA Compliance Sections */}
        <div className="space-y-6">
          {/* Transparency */}
          <section className="p-6 bg-muted/30 rounded-xl border border-border">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <Eye className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Przejrzystosc zrodel danych</h2>
                <p className="text-muted-foreground mb-3">
                  Wszystkie dane legislacyjne pochodza bezposrednio z oficjalnego API Sejmu RP.
                  Kazdy dokument zawiera link do zrodla, umozliwiajac weryfikacje informacji.
                </p>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="h-4 w-4" />
                  <span>Art. 14 DSA - Przejrzystosc</span>
                </div>
              </div>
            </div>
          </section>

          {/* AI Transparency */}
          <section className="p-6 bg-muted/30 rounded-xl border border-border">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-amber-100 rounded-lg">
                <FileText className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Oznaczanie tresci AI</h2>
                <p className="text-muted-foreground mb-3">
                  Wszystkie podsumowania generowane przez sztuczna inteligencje sa wyraznie
                  oznaczone etykieta "Podsumowanie AI". Uzytkownicy zawsze wiedza, ktore
                  tresci zostaly wygenerowane automatycznie.
                </p>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="h-4 w-4" />
                  <span>Art. 26 DSA - Przejrzystosc systemow rekomendacji</span>
                </div>
              </div>
            </div>
          </section>

          {/* No Dark Patterns */}
          <section className="p-6 bg-muted/30 rounded-xl border border-border">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Brak ciemnych wzorow (Dark Patterns)</h2>
                <p className="text-muted-foreground mb-3">
                  Interfejs uzytkownika zostal zaprojektowany zgodnie z zasadami UX,
                  bez manipulacyjnych elementow. Nie stosujemy technik wprowadzajacych
                  w blad ani wymuszajacych niepozadane dzialania.
                </p>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="h-4 w-4" />
                  <span>Art. 25 DSA - Zakaz ciemnych wzorow</span>
                </div>
              </div>
            </div>
          </section>

          {/* Accessibility */}
          <section className="p-6 bg-muted/30 rounded-xl border border-border">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Scale className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Dostepnosc (WCAG 2.2)</h2>
                <p className="text-muted-foreground mb-3">
                  Aplikacja spelnia wymogi dostepnosci WCAG 2.2, zapewniajac rowny dostep
                  dla wszystkich uzytkownikow, w tym osob z niepelnosprawnosciami.
                  Dostepne sa opcje: wysoki kontrast, powiekszony tekst, ograniczenie animacji.
                </p>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="h-4 w-4" />
                  <span>Art. 14(4) DSA - Dostepnosc dla osob z niepelnosprawnosciami</span>
                </div>
              </div>
            </div>
          </section>

          {/* User Rights */}
          <section className="p-6 bg-muted/30 rounded-xl border border-border">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-red-100 rounded-lg">
                <Shield className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Prawa uzytkownikow</h2>
                <p className="text-muted-foreground mb-3">
                  Uzytkownicy maja pelna kontrole nad swoimi danymi i preferencjami.
                  Nie zbieramy niepotrzebnych danych osobowych. Wszystkie ustawienia
                  sa przechowywane lokalnie w przegladarce.
                </p>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="h-4 w-4" />
                  <span>Art. 14 & 17 DSA - Prawa i srodki odwolawcze</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-10 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-2">Wiecej informacji o DSA</h3>
          <p className="text-sm text-blue-700 mb-4">
            Digital Services Act (DSA) to rozporzadzenie UE majace na celu stworzenie
            bezpieczniejszego internetu z ochrona praw podstawowych uzytkownikow.
          </p>
          <a
            href="https://digital-strategy.ec.europa.eu/en/policies/digital-services-act-package"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            Oficjalna strona Komisji Europejskiej
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
