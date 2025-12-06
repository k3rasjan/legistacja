// Categories for ustawy
export type UstawaCategory =
  | 'podatki'
  | 'edukacja'
  | 'zdrowie'
  | 'srodowisko'
  | 'prawo-pracy'
  | 'mieszkalnictwo'
  | 'transport'
  | 'technologia'
  | 'rolnictwo'
  | 'bezpieczenstwo'
  | 'pomoc-spoleczna'
  | 'biznes'
  | 'kultura'
  | 'rodzina';

export const categoryLabels: Record<UstawaCategory, string> = {
  'podatki': 'Podatki',
  'edukacja': 'Edukacja',
  'zdrowie': 'Zdrowie',
  'srodowisko': 'Środowisko',
  'prawo-pracy': 'Prawo pracy',
  'mieszkalnictwo': 'Mieszkalnictwo',
  'transport': 'Transport',
  'technologia': 'Technologia',
  'rolnictwo': 'Rolnictwo',
  'bezpieczenstwo': 'Bezpieczeństwo',
  'pomoc-spoleczna': 'Pomoc społeczna',
  'biznes': 'Biznes i handel',
  'kultura': 'Kultura',
  'rodzina': 'Rodzina',
};

export const categoryIcons: Record<UstawaCategory, string> = {
  'podatki': 'Receipt',
  'edukacja': 'GraduationCap',
  'zdrowie': 'Heart',
  'srodowisko': 'Leaf',
  'prawo-pracy': 'Briefcase',
  'mieszkalnictwo': 'Home',
  'transport': 'Car',
  'technologia': 'Laptop',
  'rolnictwo': 'Wheat',
  'bezpieczenstwo': 'Shield',
  'pomoc-spoleczna': 'HandHeart',
  'biznes': 'Building',
  'kultura': 'Palette',
  'rodzina': 'Users',
};

// Onboarding types
export type SocialStatus =
  | 'student'
  | 'employed-private'
  | 'employed-public'
  | 'self-employed'
  | 'unemployed'
  | 'retired'
  | 'homemaker';

export const socialStatusLabels: Record<SocialStatus, string> = {
  'student': 'Student',
  'employed-private': 'Zatrudniony (sektor prywatny)',
  'employed-public': 'Zatrudniony (sektor publiczny)',
  'self-employed': 'Samozatrudniony / Właściciel firmy',
  'unemployed': 'Bezrobotny',
  'retired': 'Emeryt / Rencista',
  'homemaker': 'Prowadzący gospodarstwo domowe',
};

export type MaritalStatus =
  | 'single'
  | 'married'
  | 'divorced'
  | 'widowed';

export const maritalStatusLabels: Record<MaritalStatus, string> = {
  'single': 'Singiel / Panna / Kawaler',
  'married': 'W związku małżeńskim / partnerskim',
  'divorced': 'Rozwiedziony/a',
  'widowed': 'Wdowiec / Wdowa',
};

export type HousingStatus =
  | 'renter'
  | 'owner'
  | 'looking'
  | 'living-with-family';

export const housingStatusLabels: Record<HousingStatus, string> = {
  'renter': 'Wynajmuję',
  'owner': 'Właściciel',
  'looking': 'Szukam mieszkania',
  'living-with-family': 'Mieszkam z rodziną',
};

export type AgeRange =
  | '18-25'
  | '26-35'
  | '36-50'
  | '51-65'
  | '65+';

export const ageRangeLabels: Record<AgeRange, string> = {
  '18-25': '18-25 lat',
  '26-35': '26-35 lat',
  '36-50': '36-50 lat',
  '51-65': '51-65 lat',
  '65+': '65+ lat',
};

export interface UserPreferences {
  socialStatuses: SocialStatus[];
  maritalStatus: MaritalStatus | null;
  housingStatus: HousingStatus | null;
  ageRange: AgeRange | null;
  hasChildren: boolean | null;
  isEmployer: boolean | null;
  categories: UstawaCategory[];
  onboardingCompleted: boolean;
}

export const defaultUserPreferences: UserPreferences = {
  socialStatuses: [],
  maritalStatus: null,
  housingStatus: null,
  ageRange: null,
  hasChildren: null,
  isEmployer: null,
  categories: [],
  onboardingCompleted: false,
};

export type LegislativeStatus =
  | 'prekonsultacje'
  | 'konsultacje'
  | 'prace-rzadowe'
  | 'sejm'
  | 'senat'
  | 'prezydent'
  | 'uchwalona'
  | 'odrzucona';

export interface DocumentVersion {
  id: string;
  version: string;
  date: Date;
  url: string;
  description: string;
}

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
  documentVersions?: DocumentVersion[];
  categories: UstawaCategory[];
  userBenefits?: string;
}

export type UpdateType =
  | 'status_change'
  | 'document_added'
  | 'consultation_opened'
  | 'consultation_closed'
  | 'vote_result'
  | 'amendment'
  | 'ai_summary';

export interface CodeDiff {
  fileName: string;
  additions: string[];
  deletions: string[];
}

export interface LegislativeUpdate {
  id: string;
  ustawaId: string;
  ustawa: Ustawa;
  type: UpdateType;
  title: string;
  content: string;
  aiSummary?: string;
  aiDetailedSummary?: string;
  createdAt: Date;
  sourceUrl?: string;
  documentVersion?: DocumentVersion;
  diff?: CodeDiff;
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
  aiOverview?: string;
}

export interface ConsultationComment {
  id: string;
  consultationId: string;
  author: string;
  content: string;
  createdAt: Date;
  sentiment: 'positive' | 'neutral' | 'negative';
}

export interface AICommentSummary {
  id: string;
  consultationId: string;
  title: string;
  summary: string;
  keyPoints: string[];
  sentiment: 'positive' | 'neutral' | 'negative' | 'mixed';
  commentCount: number;
  createdAt: Date;
}

export interface ConsultationStats {
  totalComments: number;
  positiveComments: number;
  neutralComments: number;
  negativeComments: number;
  responsesByDay: { date: string; count: number }[];
  topConcerns: { topic: string; count: number }[];
}
