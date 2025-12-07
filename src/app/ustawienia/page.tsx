'use client';

import { HamburgerMenu } from '@/components/layout/HamburgerMenu';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import { Settings, Eye, Type, Zap, Link2 } from 'lucide-react';

interface ToggleSwitchProps {
  enabled: boolean;
  onChange: (value: boolean) => void;
  label: string;
  description: string;
  icon: React.ReactNode;
}

function ToggleSwitch({ enabled, onChange, label, description, icon }: ToggleSwitchProps) {
  return (
    <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 border border-border rounded-lg sm:rounded-xl">
      <div className="p-1.5 sm:p-2 bg-muted rounded-lg flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-sm sm:text-base">{label}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">{description}</p>
      </div>
      <button
        role="switch"
        aria-checked={enabled}
        onClick={() => onChange(!enabled)}
        className={`
          relative inline-flex h-6 w-10 sm:h-7 sm:w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent
          transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
          ${enabled ? 'bg-primary' : 'bg-muted'}
        `}
      >
        <span
          className={`
            pointer-events-none inline-block h-5 w-5 sm:h-6 sm:w-6 transform rounded-full bg-background shadow-lg ring-0
            transition-transform ${enabled ? 'translate-x-4 sm:translate-x-5' : 'translate-x-0'}
          `}
        />
      </button>
    </div>
  );
}

export default function UstawieniaPage() {
  const { settings, updateSetting } = useAccessibility();

  return (
    <div className="min-h-screen">
      <HamburgerMenu />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-14 sm:pt-16 pb-6">
        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <Settings className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">Ustawienia</h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Dostosuj aplikację do swoich potrzeb
            </p>
          </div>
        </div>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Dostępność (WCAG)</h2>
          <div className="space-y-3 sm:space-y-4">
            <ToggleSwitch
              enabled={settings.highContrast}
              onChange={(value) => updateSetting('highContrast', value)}
              label="Wysoki kontrast"
              description="Zwiększa kontrast kolorów dla lepszej widoczności tekstu i elementów interfejsu."
              icon={<Eye className="h-4 w-4 sm:h-5 sm:w-5" />}
            />

            <ToggleSwitch
              enabled={settings.largeText}
              onChange={(value) => updateSetting('largeText', value)}
              label="Powiększony tekst"
              description="Zwiększa rozmiar czcionki w całej aplikacji dla łatwiejszego czytania."
              icon={<Type className="h-4 w-4 sm:h-5 sm:w-5" />}
            />

            <ToggleSwitch
              enabled={settings.reduceMotion}
              onChange={(value) => updateSetting('reduceMotion', value)}
              label="Ogranicz animacje"
              description="Wyłącza animacje i przejścia, co może pomóc osobom z zaburzeniami przedsionkowymi."
              icon={<Zap className="h-4 w-4 sm:h-5 sm:w-5" />}
            />

            <ToggleSwitch
              enabled={settings.underlineLinks}
              onChange={(value) => updateSetting('underlineLinks', value)}
              label="Podkreśl linki"
              description="Podkreśla wszystkie linki, ułatwiając identyfikację elementów klikalnych."
              icon={<Link2 className="h-4 w-4 sm:h-5 sm:w-5" />}
            />
          </div>
        </section>

        <div className="p-3 sm:p-4 bg-muted/50 rounded-lg sm:rounded-xl">
          <p className="text-xs sm:text-sm text-muted-foreground">
            Ustawienia są zapisywane automatycznie w przeglądarce.
          </p>
        </div>
      </div>
    </div>
  );
}
