'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Menu, X, Home, Search, Bell, Bookmark, Settings, Scale, MessageSquare, List, Newspaper, Sparkles, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWrappedUpdates } from '@/hooks/useWrappedUpdates';
import { getUnreadNotificationCount } from '@/data/mock';

interface NavItem {
  icon: LucideIcon;
  label: string;
  href: string;
  requiresUpdates?: boolean;
}

const navItems: NavItem[] = [
  { icon: Home, label: 'Strona główna', href: '/' },
  { icon: List, label: 'Lista ustaw', href: '/szukaj' },
  { icon: Newspaper, label: 'Dla ciebie', href: '/feed' },
  { icon: Sparkles, label: 'Zmiany w pigułce', href: '/wrapped', requiresUpdates: true },
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
  const unreadNotifications = getUnreadNotificationCount();

  const filteredNavItems = useMemo(() => {
    return navItems.filter(item => !item.requiresUpdates || hasUpdates);
  }, [hasUpdates]);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className={`fixed top-3 sm:top-4 z-50 bg-background rounded-lg h-9 w-9 sm:h-10 sm:w-10 ${offsetLeft ? 'left-12 sm:left-14' : 'left-3 sm:left-4'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
        {unreadNotifications > 0 && !isOpen && (
          <span className="absolute bottom-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-background" />
        )}
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 sm:w-72 bg-background border-r border-border z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="px-4 sm:px-6 pt-12 sm:pt-14">
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8"
            onClick={() => setIsOpen(false)}
          >
            <Scale className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <span className="text-lg sm:text-xl font-bold">Legislacja</span>
          </Link>

          <nav className="space-y-0.5 sm:space-y-1">
            {filteredNavItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start gap-2 sm:gap-3 text-sm sm:text-base h-10 sm:h-12 px-3 sm:px-4">
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  {item.label}
                  {item.href === '/powiadomienia' && unreadNotifications > 0 && (
                    <span className="ml-auto bg-red-500 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full font-medium">
                      {unreadNotifications}
                    </span>
                  )}
                </Button>
              </Link>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-[10px] sm:text-xs text-muted-foreground">
          <p>Legislacja Tracker v0.1</p>
        </div>
      </aside>
    </>
  );
}
