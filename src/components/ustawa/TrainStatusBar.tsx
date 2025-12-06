'use client';

import { LegislativeStatus } from '@/types';
import { Check, Circle, Train } from 'lucide-react';

const stages: { key: LegislativeStatus; label: string }[] = [
  { key: 'prekonsultacje', label: 'Prekonsultacje' },
  { key: 'konsultacje', label: 'Konsultacje' },
  { key: 'prace-rzadowe', label: 'Prace rządowe' },
  { key: 'sejm', label: 'Sejm' },
  { key: 'senat', label: 'Senat' },
  { key: 'prezydent', label: 'Prezydent' },
  { key: 'uchwalona', label: 'Uchwalona' },
];

interface TrainStatusBarProps {
  currentStatus: LegislativeStatus;
}

export function TrainStatusBar({ currentStatus }: TrainStatusBarProps) {
  const currentIndex = stages.findIndex((s) => s.key === currentStatus);
  const isRejected = currentStatus === 'odrzucona';

  return (
    <div className="flex flex-col items-center py-8">
      {stages.map((stage, index) => {
        const isPast = index < currentIndex;
        const isCurrent = index === currentIndex;
        const isFuture = index > currentIndex;

        return (
          <div key={stage.key} className="flex flex-col items-center">
            <div className="flex items-center gap-3">
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all
                  ${isPast ? 'bg-green-500 border-green-500 text-white' : ''}
                  ${isCurrent && !isRejected ? 'bg-primary border-primary text-white' : ''}
                  ${isCurrent && isRejected ? 'bg-red-500 border-red-500 text-white' : ''}
                  ${isFuture ? 'bg-muted border-muted-foreground/30 text-muted-foreground' : ''}
                `}
              >
                {isPast && <Check className="h-5 w-5" />}
                {isCurrent && <Train className="h-5 w-5" />}
                {isFuture && <Circle className="h-4 w-4" />}
              </div>
              <span
                className={`
                  text-sm font-medium w-28
                  ${isPast ? 'text-green-600' : ''}
                  ${isCurrent ? 'text-foreground font-bold' : ''}
                  ${isFuture ? 'text-muted-foreground' : ''}
                `}
              >
                {stage.label}
              </span>
            </div>

            {index < stages.length - 1 && (
              <div
                className={`
                  w-0.5 h-12 ml-[-3.5rem]
                  ${index < currentIndex ? 'bg-green-500' : 'bg-muted-foreground/30'}
                `}
              />
            )}
          </div>
        );
      })}

      {isRejected && (
        <div className="mt-4 px-4 py-2 bg-red-100 text-red-800 rounded-lg text-sm font-medium">
          Projekt odrzucony
        </div>
      )}
    </div>
  );
}
