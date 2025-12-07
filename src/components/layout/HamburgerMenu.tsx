'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Menu, X, Home, Search, Bell, Bookmark, Settings, Scale, MessageSquare, List, Newspaper, Sparkles, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWrappedUpdates } from '@/hooks/useWrappedUpdates';

interface NavItem {
  icon: LucideIcon;
  label: string;
  href: string;
  requiresUpdates?: boolean;
}

const navItems: NavItem[] = [
  { icon: Home, label: 'Strona główna', href: '/' },
  { icon: List, label: 'Lista ustaw', href: '/szukaj' },
  { icon: Newspaper, label: 'Feed', href: '/feed' },
  { icon: Sparkles, label: 'Wrapped', href: '/wrapped', requiresUpdates: true },
  { icon: MessageSquare, label: 'Konsultacje', href: '/konsultacje' },
  { icon: Bell, label: 'Powiadomienia', href: '/powiadomienia' },
  { icon: Bookmark, label: 'Obserwowane', href: '/obserwowane' },
  { icon: Settings, label: 'Ustawienia', href: '/ustawienia' },
];

interface HamburgerMenuProps {
  offsetLeft?: boolean;
}

export function HamburgerMenu({ offsetLeft = false }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { hasUpdates } = useWrappedUpdates();

  const filteredNavItems = useMemo(() => {
    return navItems.filter(item => !item.requiresUpdates || hasUpdates);
  }, [hasUpdates]);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className={`fixed top-4 z-50 bg-background rounded-lg ${offsetLeft ? 'left-14' : 'left-4'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-background border-r border-border z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="px-6 pt-14">
          <Link
            href="/"
            className="flex items-center gap-3 mb-8"
            onClick={() => setIsOpen(false)}
          >
            <Scale className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Legislacja</span>
          </Link>

          <nav className="space-y-1">
            {filteredNavItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start gap-3 text-base h-12 px-4">
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-6 left-6 text-xs text-muted-foreground">
          <p>Legislacja Tracker v0.1</p>
        </div>
      </aside>
    </>
  );
}
