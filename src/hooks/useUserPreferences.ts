'use client';

import { useState, useEffect, useCallback } from 'react';
import { UserPreferences, defaultUserPreferences } from '@/types';

const STORAGE_KEY = 'legislacja-user-preferences';

export function useUserPreferences() {
  const [preferences, setPreferences] = useState<UserPreferences>(defaultUserPreferences);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setPreferences(JSON.parse(stored));
      } catch {
        setPreferences(defaultUserPreferences);
      }
    }
    setIsLoading(false);
  }, []);

  const updatePreferences = useCallback((updates: Partial<UserPreferences>) => {
    setPreferences((prev) => {
      const newPreferences = { ...prev, ...updates };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newPreferences));
      return newPreferences;
    });
  }, []);

  const resetPreferences = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setPreferences(defaultUserPreferences);
  }, []);

  const completeOnboarding = useCallback(() => {
    updatePreferences({ onboardingCompleted: true });
  }, [updatePreferences]);

  return {
    preferences,
    updatePreferences,
    resetPreferences,
    completeOnboarding,
    isLoading,
    needsOnboarding: !isLoading && !preferences.onboardingCompleted,
  };
}
