'use client';

import { useState, useRef, useEffect } from 'react';
import { Accessibility, Eye, Type, Zap, Link2, X, Shield } from 'lucide-react';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import Link from 'next/link';

interface ToggleItemProps {
  enabled: boolean;
  onChange: (value: boolean) => void;
  label: string;
  icon: React.ReactNode;
}

function ToggleItem({ enabled, onChange, label, icon }: ToggleItemProps) {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className={`
        flex items-center gap-3 w-full p-3 rounded-lg transition-colors text-left
        ${enabled ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}
      `}
      role="switch"
      aria-checked={enabled}
    >
      <div className={`p-1.5 rounded-md ${enabled ? 'bg-primary/20' : 'bg-muted'}`}>
        {icon}
      </div>
      <span className="text-sm font-medium flex-1">{label}</span>
      <div
        className={`
          relative w-9 h-5 rounded-full transition-colors
          ${enabled ? 'bg-primary' : 'bg-muted-foreground/30'}
        `}
      >
        <div
          className={`
            absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform
            ${enabled ? 'translate-x-4' : 'translate-x-0.5'}
          `}
        />
      </div>
    </button>
  );
}

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { settings, updateSetting } = useAccessibility();
  const widgetRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  const activeCount = Object.values(settings).filter(Boolean).length;

  return (
    <div ref={widgetRef} className="fixed bottom-4 right-4 z-50">
      {/* Panel */}
      {isOpen && (
        <div className="absolute bottom-14 right-0 w-72 bg-background border border-border rounded-xl shadow-xl overflow-hidden animate-in slide-in-from-bottom-2 fade-in-0 duration-200">
          <div className="flex items-center justify-between p-3 border-b border-border bg-muted/30">
            <div className="flex items-center gap-2">
              <Accessibility className="h-4 w-4 text-primary" />
              <span className="font-semibold text-sm">Dostepnosc</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-muted rounded-md transition-colors"
              aria-label="Zamknij"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="p-2 space-y-1">
            <ToggleItem
              enabled={settings.highContrast}
              onChange={(value) => updateSetting('highContrast', value)}
              label="Wysoki kontrast"
              icon={<Eye className="h-4 w-4" />}
            />

            <ToggleItem
              enabled={settings.largeText}
              onChange={(value) => updateSetting('largeText', value)}
              label="Powiekszony tekst"
              icon={<Type className="h-4 w-4" />}
            />

            <ToggleItem
              enabled={settings.reduceMotion}
              onChange={(value) => updateSetting('reduceMotion', value)}
              label="Ogranicz animacje"
              icon={<Zap className="h-4 w-4" />}
            />

            <ToggleItem
              enabled={settings.underlineLinks}
              onChange={(value) => updateSetting('underlineLinks', value)}
              label="Podkresl linki"
              icon={<Link2 className="h-4 w-4" />}
            />
          </div>

          <div className="p-2 pt-0 border-t border-border mt-1">
            <Link
              href="/dsa"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-1.5 p-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              <Shield className="h-3.5 w-3.5" />
              Zgodnosc z DSA & WCAG 2.2
            </Link>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          relative flex items-center justify-center w-12 h-12 rounded-full shadow-lg
          transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
          ${isOpen ? 'bg-primary text-primary-foreground' : 'bg-background border border-border hover:bg-muted'}
        `}
        aria-label="Ustawienia dostepnosci"
        aria-expanded={isOpen}
      >
        <Accessibility className="h-5 w-5" />
        {activeCount > 0 && !isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
            {activeCount}
          </span>
        )}
      </button>
    </div>
  );
}
