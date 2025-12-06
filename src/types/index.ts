export type LegislativeStatus =
  | 'prekonsultacje'
  | 'konsultacje'
  | 'prace-rzadowe'
  | 'sejm'
  | 'senat'
  | 'prezydent'
  | 'uchwalona'
  | 'odrzucona';

export interface Ustawa {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  status: LegislativeStatus;
  ministry: string;
  createdAt: Date;
  updatedAt: Date;
  drukNumber?: string;
}

export type UpdateType =
  | 'status_change'
  | 'document_added'
  | 'consultation_opened'
  | 'consultation_closed'
  | 'vote_result'
  | 'amendment'
  | 'ai_summary';

export interface LegislativeUpdate {
  id: string;
  ustawaId: string;
  ustawa: Ustawa;
  type: UpdateType;
  title: string;
  content: string;
  aiSummary?: string;
  createdAt: Date;
  sourceUrl?: string;
}

export const statusLabels: Record<LegislativeStatus, string> = {
  'prekonsultacje': 'Prekonsultacje',
  'konsultacje': 'Konsultacje społeczne',
  'prace-rzadowe': 'Prace rządowe',
  'sejm': 'Sejm',
  'senat': 'Senat',
  'prezydent': 'Prezydent',
  'uchwalona': 'Uchwalona',
  'odrzucona': 'Odrzucona',
};

export const statusColors: Record<LegislativeStatus, string> = {
  'prekonsultacje': 'bg-purple-100 text-purple-800',
  'konsultacje': 'bg-blue-100 text-blue-800',
  'prace-rzadowe': 'bg-yellow-100 text-yellow-800',
  'sejm': 'bg-orange-100 text-orange-800',
  'senat': 'bg-pink-100 text-pink-800',
  'prezydent': 'bg-indigo-100 text-indigo-800',
  'uchwalona': 'bg-green-100 text-green-800',
  'odrzucona': 'bg-red-100 text-red-800',
};

export const updateTypeLabels: Record<UpdateType, string> = {
  'status_change': 'Zmiana statusu',
  'document_added': 'Nowy dokument',
  'consultation_opened': 'Konsultacje otwarte',
  'consultation_closed': 'Konsultacje zamknięte',
  'vote_result': 'Wynik głosowania',
  'amendment': 'Poprawka',
  'ai_summary': 'Podsumowanie AI',
};

export const updateTypeIcons: Record<UpdateType, string> = {
  'status_change': 'ArrowRight',
  'document_added': 'FileText',
  'consultation_opened': 'MessageSquare',
  'consultation_closed': 'MessageSquareOff',
  'vote_result': 'Vote',
  'amendment': 'Edit',
  'ai_summary': 'Sparkles',
};

export type QuestionType = 'open' | 'closed';

export interface ConsultationQuestion {
  id: string;
  type: QuestionType;
  question: string;
  options?: string[];
  responses?: number[];
}

export interface Consultation {
  id: string;
  ustawaId: string;
  ustawa?: Ustawa;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  isActive: boolean;
  questions: ConsultationQuestion[];
  totalResponses: number;
}
