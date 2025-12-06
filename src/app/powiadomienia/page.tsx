'use client';

import { useState } from 'react';
import { HamburgerMenu } from '@/components/layout/HamburgerMenu';
import { UstawaAvatar } from '@/components/ustawa/UstawaAvatar';
import { Button } from '@/components/ui/button';
import { mockUstawy } from '@/data/mock';
import {
  Bell,
  Vote,
  MessageSquare,
  FileText,
  Clock,
  CheckCheck,
  ArrowRight,
  Calendar,
} from 'lucide-react';
import Link from 'next/link';

type NotificationType = 'vote' | 'consultation' | 'document' | 'deadline' | 'status_change';

interface Notification {
  id: string;
  type: NotificationType;
  ustawaId: string;
  title: string;
  description: string;
  createdAt: Date;
  isRead: boolean;
}

const notificationIcons: Record<NotificationType, typeof Vote> = {
  vote: Vote,
  consultation: MessageSquare,
  document: FileText,
  deadline: Clock,
  status_change: ArrowRight,
};

const notificationColors: Record<NotificationType, string> = {
  vote: 'bg-orange-100 text-orange-600',
  consultation: 'bg-blue-100 text-blue-600',
  document: 'bg-purple-100 text-purple-600',
  deadline: 'bg-red-100 text-red-600',
  status_change: 'bg-green-100 text-green-600',
};

// Mock notifications
const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'deadline',
    ustawaId: '1',
    title: 'Konsultacje kończą się za 3 dni',
    description: 'Konsultacje społeczne dla Nowelizacja RODO kończą się 20 grudnia.',
    createdAt: new Date('2024-12-06T10:00:00'),
    isRead: false,
  },
  {
    id: '2',
    type: 'vote',
    ustawaId: '6',
    title: 'Głosowanie w Senacie',
    description: 'Senat głosuje nad ustawą Cyberbezpieczeństwo w czwartek.',
    createdAt: new Date('2024-12-06T09:30:00'),
    isRead: false,
  },
  {
    id: '3',
    type: 'consultation',
    ustawaId: '8',
    title: 'Nowe konsultacje społeczne',
    description: 'Rozpoczęły się konsultacje dla ustawy Otwarte dane. Weź udział!',
    createdAt: new Date('2024-12-06T08:00:00'),
    isRead: false,
  },
  {
    id: '4',
    type: 'document',
    ustawaId: '3',
    title: 'Nowy dokument',
    description: 'Dodano koncepcję portalu legislacyjnego do projektu Transparentność legislacji.',
    createdAt: new Date('2024-12-05T14:00:00'),
    isRead: false,
  },
  {
    id: '5',
    type: 'status_change',
    ustawaId: '22',
    title: 'Zmiana statusu',
    description: 'Ustawa Sport dla wszystkich została uchwalona przez Sejm.',
    createdAt: new Date('2024-12-05T12:00:00'),
    isRead: true,
  },
  {
    id: '6',
    type: 'deadline',
    ustawaId: '3',
    title: 'Konsultacje kończą się za tydzień',
    description: 'Prekonsultacje Transparentność legislacji kończą się 15 grudnia.',
    createdAt: new Date('2024-12-05T10:00:00'),
    isRead: true,
  },
  {
    id: '7',
    type: 'vote',
    ustawaId: '2',
    title: 'Wynik głosowania',
    description: 'Sejm przyjął Dostępność cyfrowa w II czytaniu (412 za, 15 przeciw).',
    createdAt: new Date('2024-12-04T17:00:00'),
    isRead: true,
  },
  {
    id: '8',
    type: 'status_change',
    ustawaId: '24',
    title: 'Zmiana statusu',
    description: 'Ustawa OZE 2.0 została przekazana do Senatu.',
    createdAt: new Date('2024-12-04T15:00:00'),
    isRead: true,
  },
  {
    id: '9',
    type: 'document',
    ustawaId: '12',
    title: 'Nowy raport',
    description: 'Opublikowano raport z pilotażu programu Telemedycyna.',
    createdAt: new Date('2024-12-04T10:00:00'),
    isRead: true,
  },
  {
    id: '10',
    type: 'consultation',
    ustawaId: '26',
    title: 'Nowe konsultacje',
    description: 'Weź udział w konsultacjach programu Mieszkanie+.',
    createdAt: new Date('2024-12-03T09:00:00'),
    isRead: true,
  },
  {
    id: '11',
    type: 'deadline',
    ustawaId: '11',
    title: 'Przypomnienie o konsultacjach',
    description: 'Zostało 12 dni na zgłoszenie uwag do Cyfrowe dziedzictwo.',
    createdAt: new Date('2024-12-03T08:00:00'),
    isRead: true,
  },
  {
    id: '12',
    type: 'vote',
    ustawaId: '18',
    title: 'Debata w Senacie',
    description: 'Senat rozpoczął debatę nad ustawą Ochrona zwierząt.',
    createdAt: new Date('2024-12-02T16:00:00'),
    isRead: true,
  },
];

function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 60) return `${diffMins} min temu`;
  if (diffHours < 24) return `${diffHours} godz. temu`;
  if (diffDays < 7) return `${diffDays} dni temu`;
  return date.toLocaleDateString('pl-PL');
}

export default function PowiadomieniaPage() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const unreadCount = notifications.filter((n) => !n.isRead).length;
  const filteredNotifications = filter === 'unread'
    ? notifications.filter((n) => !n.isRead)
    : notifications;

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  const getUstawa = (id: string) => mockUstawy.find((u) => u.id === id);

  return (
    <div className="min-h-screen">
      <HamburgerMenu />

      <div className="max-w-4xl mx-auto p-6 pt-16">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Bell className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold">Powiadomienia</h1>
              <p className="text-muted-foreground">
                {unreadCount > 0
                  ? `${unreadCount} nieprzeczytanych`
                  : 'Wszystko przeczytane'}
              </p>
            </div>
          </div>
          {unreadCount > 0 && (
            <Button variant="outline" size="sm" onClick={markAllAsRead}>
              <CheckCheck className="h-4 w-4 mr-2" />
              Oznacz wszystkie
            </Button>
          )}
        </div>

        <div className="flex gap-2 mb-6">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('all')}
          >
            Wszystkie
          </Button>
          <Button
            variant={filter === 'unread' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('unread')}
          >
            Nieprzeczytane
            {unreadCount > 0 && (
              <span className="ml-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {unreadCount}
              </span>
            )}
          </Button>
        </div>

        <div className="space-y-4">
          {filteredNotifications.map((notification) => {
            const ustawa = getUstawa(notification.ustawaId);
            const Icon = notificationIcons[notification.type];

            if (!ustawa) return null;

            return (
              <Link
                key={notification.id}
                href={`/ustawa/${notification.ustawaId}`}
                onClick={() => markAsRead(notification.id)}
                className="block"
              >
                <div
                  className={`flex gap-4 p-4 rounded-xl border transition-colors hover:bg-accent/50 ${
                    notification.isRead
                      ? 'bg-background border-border'
                      : 'bg-primary/5 border-primary/20'
                  }`}
                >
                  <div className="flex-shrink-0">
                    <UstawaAvatar
                      shortTitle={ustawa.shortTitle}
                      status={ustawa.status}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`p-1 rounded ${notificationColors[notification.type]}`}
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <span className="font-medium">{notification.title}</span>
                        {!notification.isRead && (
                          <span className="w-2 h-2 bg-primary rounded-full" />
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {formatRelativeTime(notification.createdAt)}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {notification.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {ustawa.shortTitle}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}

          {filteredNotifications.length === 0 && (
            <div className="text-center py-12">
              <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg font-medium">Brak powiadomień</p>
              <p className="text-muted-foreground mt-1">
                {filter === 'unread'
                  ? 'Wszystkie powiadomienia zostały przeczytane'
                  : 'Obserwuj ustawy, aby otrzymywać powiadomienia'}
              </p>
            </div>
          )}
        </div>

        {filteredNotifications.length > 0 && (
          <div className="mt-8 p-4 bg-muted/50 rounded-xl">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Powiadomienia z ostatnich 7 dni</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
