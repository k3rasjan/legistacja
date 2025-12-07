'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Bookmark, BookmarkCheck, Bell, BellRing } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FollowButtonProps {
  variant?: 'bookmark' | 'bell';
  size?: 'sm' | 'lg' | 'default';
  className?: string;
  fullWidth?: boolean;
  initialFollowed?: boolean;
}

export function FollowButton({
  variant = 'bookmark',
  size = 'sm',
  className,
  fullWidth = false,
  initialFollowed = false,
}: FollowButtonProps) {
  const [isFollowing, setIsFollowing] = useState(initialFollowed);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setIsFollowing(!isFollowing);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const Icon = variant === 'bell'
    ? (isFollowing ? BellRing : Bell)
    : (isFollowing ? BookmarkCheck : Bookmark);

  const iconSize = size === 'lg' ? 'h-5 w-5' : 'h-4 w-4';
  const iconMargin = size === 'lg' ? 'mr-2' : 'mr-1';

  return (
    <Button
      variant={isFollowing ? 'default' : 'outline'}
      size={size}
      onClick={handleClick}
      className={cn(
        'transition-all duration-200 border-2',
        isAnimating && 'scale-110',
        !isFollowing && 'border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary',
        isFollowing && 'bg-primary text-primary-foreground border-primary',
        fullWidth && 'w-full',
        className
      )}
    >
      <Icon className={cn(iconSize, iconMargin, isAnimating && 'animate-pulse')} />
      {isFollowing ? 'Śledzisz' : 'Śledź'}
    </Button>
  );
}
