/**
 * Sejm API Client
 * API documentation: https://api.sejm.gov.pl/eli/openapi/ui/
 */

const SEJM_API_BASE = 'https://api.sejm.gov.pl/eli';

export interface SejmAct {
  ELI: string;
  address: string;
  announcementDate: string;
  changeDate: string;
  displayAddress: string;
  pos: number;
  promulgation: string;
  publisher: string;
  status: string;
  textHTML: boolean;
  textPDF: boolean;
  title: string;
  type: string;
  volume: number;
  year: number;
  entryIntoForce?: string;
  inForce?: string;
  keywords?: string[];
  keywordsNames?: string[];
  texts?: Array<{
    fileName: string;
    type: string;
  }>;
}

export interface SejmSearchResult {
  count: number;
  items: SejmAct[];
  offset: number;
  totalCount: number;
}

export interface SearchParams {
  title?: string;
  year?: number;
  publisher?: 'DU' | 'MP';
  type?: string;
  keyword?: string;
  inForce?: boolean;
  limit?: number;
  offset?: number;
  dateFrom?: string;
  dateTo?: string;
}

/**
 * Search for acts in the Sejm database
 */
export async function searchActs(params: SearchParams): Promise<SejmSearchResult> {
  const searchParams = new URLSearchParams();

  if (params.title) searchParams.set('title', params.title);
  if (params.year) searchParams.set('year', params.year.toString());
  if (params.publisher) searchParams.set('publisher', params.publisher);
  if (params.type) searchParams.set('type', params.type);
  if (params.keyword) searchParams.set('keyword', params.keyword);
  if (params.inForce) searchParams.set('inForce', '1');
  if (params.limit) searchParams.set('limit', params.limit.toString());
  if (params.offset) searchParams.set('offset', params.offset.toString());
  if (params.dateFrom) searchParams.set('dateFrom', params.dateFrom);
  if (params.dateTo) searchParams.set('dateTo', params.dateTo);

  const response = await fetch(`${SEJM_API_BASE}/acts/search?${searchParams}`);

  if (!response.ok) {
    throw new Error(`Sejm API error: ${response.status}`);
  }

  return response.json();
}

/**
 * Get details of a specific act
 */
export async function getAct(publisher: string, year: number, position: number): Promise<SejmAct> {
  const response = await fetch(`${SEJM_API_BASE}/acts/${publisher}/${year}/${position}`);

  if (!response.ok) {
    throw new Error(`Sejm API error: ${response.status}`);
  }

  return response.json();
}

/**
 * Get the PDF URL for an act
 */
export function getActPdfUrl(publisher: string, year: number, position: number): string {
  return `${SEJM_API_BASE}/acts/${publisher}/${year}/${position}/text.pdf`;
}

/**
 * Get the PDF URL from an ELI identifier (e.g., "DU/2024/1984")
 */
export function getPdfUrlFromEli(eli: string): string {
  const parts = eli.split('/');
  if (parts.length !== 3) {
    throw new Error(`Invalid ELI format: ${eli}`);
  }
  const [publisher, year, position] = parts;
  return getActPdfUrl(publisher, parseInt(year), parseInt(position));
}

/**
 * Get recent acts from a specific year
 */
export async function getRecentActs(year: number = new Date().getFullYear(), limit: number = 20): Promise<SejmAct[]> {
  const result = await searchActs({ year, limit, publisher: 'DU' });
  return result.items;
}

/**
 * Search for acts by keyword
 */
export async function searchActsByKeyword(keyword: string, limit: number = 20): Promise<SejmAct[]> {
  const result = await searchActs({ keyword, limit, inForce: true });
  return result.items;
}
