'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { LegislativeStatus } from '@/types';

const statusBgColors: Record<LegislativeStatus, string> = {
  'prekonsultacje': 'bg-purple-500',
  'konsultacje': 'bg-blue-500',
  'prace-rzadowe': 'bg-yellow-500',
  'sejm': 'bg-orange-500',
  'senat': 'bg-pink-500',
  'prezydent': 'bg-indigo-500',
  'uchwalona': 'bg-green-500',
  'odrzucona': 'bg-red-500',
};

interface UstawaAvatarProps {
  shortTitle: string;
  status: LegislativeStatus;
  size?: 'sm' | 'md' | 'lg';
}

export function UstawaAvatar({ shortTitle, status, size = 'md' }: UstawaAvatarProps) {
  const initials = shortTitle
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  const sizeClasses = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-14 w-14 text-lg',
  };

  return (
    <Avatar className={sizeClasses[size]}>
      <AvatarFallback className={`${statusBgColors[status]} text-white font-semibold`}>
        {initials}
      </AvatarFallback>
    </Avatar>
  );
}
