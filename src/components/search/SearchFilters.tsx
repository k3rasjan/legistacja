'use client';

import { LegislativeStatus, statusLabels } from '@/types';
import { X, Check } from 'lucide-react';

interface SearchFiltersProps {
  selectedStatuses: LegislativeStatus[];
  selectedMinistries: string[];
  availableMinistries: string[];
  onStatusToggle: (status: LegislativeStatus) => void;
  onMinistryToggle: (ministry: string) => void;
  onClearAll: () => void;
}

const allStatuses: LegislativeStatus[] = [
  'prekonsultacje',
  'konsultacje',
  'prace-rzadowe',
  'sejm',
  'senat',
  'prezydent',
  'uchwalona',
  'odrzucona',
];

const statusColorMap: Record<LegislativeStatus, string> = {
  'prekonsultacje': 'bg-purple-500',
  'konsultacje': 'bg-blue-500',
  'prace-rzadowe': 'bg-yellow-500',
  'sejm': 'bg-orange-500',
  'senat': 'bg-pink-500',
  'prezydent': 'bg-indigo-500',
  'uchwalona': 'bg-green-500',
  'odrzucona': 'bg-red-500',
};

export function SearchFilters({
  selectedStatuses,
  selectedMinistries,
  availableMinistries,
  onStatusToggle,
  onMinistryToggle,
  onClearAll,
}: SearchFiltersProps) {
  const hasFilters = selectedStatuses.length > 0 || selectedMinistries.length > 0;

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">Filtry</span>
        {hasFilters && (
          <button
            onClick={onClearAll}
            className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
          >
            <X className="h-3 w-3" />
            Wyczyść wszystko
          </button>
        )}
      </div>

      <div>
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          Status
        </span>
        <div className="mt-2 flex flex-wrap gap-2">
          {allStatuses.map((status) => {
            const isSelected = selectedStatuses.includes(status);
            return (
              <button
                key={status}
                onClick={() => onStatusToggle(status)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  isSelected
                    ? 'bg-foreground text-background'
                    : 'bg-muted hover:bg-muted/80 text-foreground'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${statusColorMap[status]}`} />
                {statusLabels[status]}
                {isSelected && <Check className="h-3 w-3 ml-0.5" />}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          Ministerstwo
        </span>
        <div className="mt-2 flex flex-wrap gap-2">
          {availableMinistries.map((ministry) => {
            const isSelected = selectedMinistries.includes(ministry);
            const shortName = ministry
              .replace('Ministerstwo ', '')
              .replace('Kancelaria ', '')
              .replace('Krajowe Biuro ', '')
              .replace('Urząd ', '');
            return (
              <button
                key={ministry}
                onClick={() => onMinistryToggle(ministry)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  isSelected
                    ? 'bg-foreground text-background'
                    : 'bg-muted hover:bg-muted/80 text-foreground'
                }`}
              >
                {shortName}
                {isSelected && <Check className="h-3 w-3 ml-0.5" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
