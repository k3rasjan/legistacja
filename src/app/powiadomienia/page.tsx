'use client';

import { useState } from 'react';
import { HamburgerMenu } from '@/components/layout/HamburgerMenu';
import { UstawaAvatar } from '@/components/ustawa/UstawaAvatar';
import { Button } from '@/components/ui/button';
import { mockUstawy, mockNotifications, NotificationType } from '@/data/mock';
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-14 sm:pt-16 pb-6">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <Bell className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">Powiadomienia</h1>
              <p className="text-muted-foreground text-sm sm:text-base">
                {unreadCount > 0
                  ? `${unreadCount} nieprzeczytanych`
                  : 'Wszystko przeczytane'}
              </p>
            </div>
          </div>
          {unreadCount > 0 && (
            <Button variant="outline" size="sm" onClick={markAllAsRead} className="text-xs sm:text-sm">
              <CheckCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
              <span className="hidden sm:inline">Oznacz wszystkie</span>
              <span className="sm:hidden">Oznacz</span>
            </Button>
          )}
        </div>

        <div className="flex gap-2 mb-4 sm:mb-6">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('all')}
            className="text-xs sm:text-sm"
          >
            Wszystkie
          </Button>
          <Button
            variant={filter === 'unread' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('unread')}
            className="text-xs sm:text-sm"
          >
            Nieprzeczytane
            {unreadCount > 0 && (
              <span className="ml-1.5 sm:ml-2 bg-red-500 text-white text-[10px] sm:text-xs px-1 sm:px-1.5 py-0.5 rounded-full">
                {unreadCount}
              </span>
            )}
          </Button>
        </div>

        <div className="space-y-3 sm:space-y-4">
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
                  className={`flex gap-2.5 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl border transition-colors hover:bg-accent/50 ${
                    notification.isRead
                      ? 'bg-background border-border'
                      : 'bg-primary/5 border-primary/20'
                  }`}
                >
                  <div className="flex-shrink-0">
                    <UstawaAvatar
                      shortTitle={ustawa.shortTitle}
                      status={ustawa.status}
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                        <span
                          className={`p-0.5 sm:p-1 rounded ${notificationColors[notification.type]}`}
                        >
                          <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        </span>
                        <span className="font-medium text-sm sm:text-base">{notification.title}</span>
                        {!notification.isRead && (
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full" />
                        )}
                      </div>
                      <span className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">
                        {formatRelativeTime(notification.createdAt)}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">
                      {notification.description}
                    </p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground mt-1.5 sm:mt-2">
                      {ustawa.shortTitle}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}

          {filteredNotifications.length === 0 && (
            <div className="text-center py-8 sm:py-12">
              <Bell className="h-10 w-10 sm:h-12 sm:w-12 text-muted-foreground mx-auto mb-3 sm:mb-4" />
              <p className="text-base sm:text-lg font-medium">Brak powiadomień</p>
              <p className="text-muted-foreground text-sm mt-1">
                {filter === 'unread'
                  ? 'Wszystkie powiadomienia zostały przeczytane'
                  : 'Obserwuj ustawy, aby otrzymywać powiadomienia'}
              </p>
            </div>
          )}
        </div>

        {filteredNotifications.length > 0 && (
          <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-muted/50 rounded-lg sm:rounded-xl">
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
              <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>Powiadomienia z ostatnich 7 dni</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
