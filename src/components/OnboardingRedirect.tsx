'use client';

import { useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useUserPreferences } from '@/hooks/useUserPreferences';

interface OnboardingRedirectProps {
  children: React.ReactNode;
}

export function OnboardingRedirect({ children }: OnboardingRedirectProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { needsOnboarding, isLoading } = useUserPreferences();
  const hasRedirected = useRef(false);

  useEffect(() => {
    // Skip if on onboarding page
    if (pathname === '/onboarding') {
      hasRedirected.current = false;
      return;
    }

    // Redirect only once
    if (!isLoading && needsOnboarding && !hasRedirected.current) {
      hasRedirected.current = true;
      router.replace('/onboarding');
    }
  }, [isLoading, needsOnboarding, pathname, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Ładowanie...</div>
      </div>
    );
  }

  // Don't block onboarding page
  if (pathname === '/onboarding') {
    return <>{children}</>;
  }

  if (needsOnboarding) {
    return null;
  }

  return <>{children}</>;
}
