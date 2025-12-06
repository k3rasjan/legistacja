'use client';

import { Check } from 'lucide-react';

interface OnboardingOptionProps {
  label: string;
  selected: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}

export function OnboardingOption({ label, selected, onClick, icon }: OnboardingOptionProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full p-4 rounded-xl border-2 text-left transition-all
        flex items-center gap-3
        ${selected
          ? 'border-primary bg-primary/5'
          : 'border-border hover:border-primary/50 hover:bg-muted/50'
        }
      `}
    >
      {icon && (
        <div className={`p-2 rounded-lg ${selected ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
          {icon}
        </div>
      )}
      <span className="flex-1 font-medium">{label}</span>
      {selected && (
        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
          <Check className="h-4 w-4" />
        </div>
      )}
    </button>
  );
}
