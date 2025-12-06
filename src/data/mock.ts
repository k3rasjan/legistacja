import { Ustawa, LegislativeUpdate, Consultation } from '@/types';

export const mockUstawy: Ustawa[] = [
  {
    id: '1',
    title: 'Ustawa o zmianie ustawy o ochronie danych osobowych oraz niektórych innych ustaw',
    shortTitle: 'Nowelizacja RODO',
    description: 'Projekt dostosowuje polskie przepisy do nowych wymogów unijnych w zakresie ochrony danych osobowych, wprowadzając dodatkowe zabezpieczenia dla obywateli.',
    status: 'konsultacje',
    ministry: 'Ministerstwo Cyfryzacji',
    createdAt: new Date('2024-11-15'),
    updatedAt: new Date('2024-12-05'),
    drukNumber: 'UD123',
    documentVersions: [
      { id: '1-1', version: '1.0', date: new Date('2024-11-15'), url: '/documents/nowelizacja-rodo-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '1-2', version: '1.1', date: new Date('2024-11-22'), url: '/documents/nowelizacja-rodo-v1.1.pdf', description: 'Po uwagach resortowych' },
      { id: '1-3', version: '2.0', date: new Date('2024-12-01'), url: '/documents/nowelizacja-rodo-v2.pdf', description: 'Po konsultacjach publicznych' },
      { id: '1-4', version: '2.1', date: new Date('2024-12-05'), url: '/documents/nowelizacja-rodo-v2.1.pdf', description: 'Aktualna wersja' },
    ],
    categories: ['technologia', 'biznes'],
  },
  {
    id: '2',
    title: 'Ustawa o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych',
    shortTitle: 'Dostępność cyfrowa',
    description: 'Projekt ma na celu zapewnienie pełnej dostępności usług cyfrowych dla osób z niepełnosprawnościami.',
    status: 'sejm',
    ministry: 'Ministerstwo Cyfryzacji',
    createdAt: new Date('2024-09-01'),
    updatedAt: new Date('2024-12-03'),
    drukNumber: 'Druk 456',
    documentVersions: [
      { id: '2-1', version: '1.0', date: new Date('2024-09-01'), url: '/documents/dostepnosc-cyfrowa-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '2-2', version: '1.1', date: new Date('2024-09-20'), url: '/documents/dostepnosc-cyfrowa-v1.1.pdf', description: 'Po konsultacjach' },
      { id: '2-3', version: '2.0', date: new Date('2024-10-15'), url: '/documents/dostepnosc-cyfrowa-v2.pdf', description: 'Wersja rządowa' },
      { id: '2-4', version: '2.1', date: new Date('2024-11-10'), url: '/documents/dostepnosc-cyfrowa-v2.1.pdf', description: 'Po I czytaniu w Sejmie' },
      { id: '2-5', version: '2.2', date: new Date('2024-12-03'), url: '/documents/dostepnosc-cyfrowa-v2.2.pdf', description: 'Po poprawkach komisji' },
    ],
    categories: ['technologia', 'pomoc-spoleczna'],
  },
  {
    id: '3',
    title: 'Ustawa o transparentności procesów legislacyjnych',
    shortTitle: 'Transparentność legislacji',
    description: 'Projekt wprowadza obowiązek publikowania wszystkich etapów prac nad ustawami w czasie rzeczywistym.',
    status: 'prekonsultacje',
    ministry: 'Kancelaria Prezesa Rady Ministrów',
    createdAt: new Date('2024-12-01'),
    updatedAt: new Date('2024-12-06'),
    documentVersions: [
      { id: '3-1', version: '0.1', date: new Date('2024-12-01'), url: '/documents/transparentnosc-v0.1.pdf', description: 'Wersja robocza' },
    ],
    categories: ['technologia'],
  },
  {
    id: '4',
    title: 'Ustawa o cyfrowej tożsamości obywatela',
    shortTitle: 'e-Tożsamość',
    description: 'Projekt reguluje zasady funkcjonowania cyfrowej tożsamości i elektronicznego portfela obywatela.',
    status: 'prace-rzadowe',
    ministry: 'Ministerstwo Cyfryzacji',
    createdAt: new Date('2024-10-15'),
    updatedAt: new Date('2024-12-04'),
    drukNumber: 'UD789',
    documentVersions: [
      { id: '4-1', version: '1.0', date: new Date('2024-10-15'), url: '/documents/e-tozsamosc-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '4-2', version: '1.1', date: new Date('2024-11-05'), url: '/documents/e-tozsamosc-v1.1.pdf', description: 'Po uzgodnieniach' },
      { id: '4-3', version: '1.2', date: new Date('2024-12-04'), url: '/documents/e-tozsamosc-v1.2.pdf', description: 'Aktualna wersja' },
    ],
    categories: ['technologia', 'bezpieczenstwo'],
  },
  {
    id: '5',
    title: 'Ustawa o sztucznej inteligencji w administracji publicznej',
    shortTitle: 'AI w administracji',
    description: 'Projekt określa zasady wykorzystania systemów AI przez organy administracji publicznej.',
    status: 'uchwalona',
    ministry: 'Ministerstwo Cyfryzacji',
    createdAt: new Date('2024-06-01'),
    updatedAt: new Date('2024-11-20'),
    drukNumber: 'Druk 234',
    documentVersions: [
      { id: '5-1', version: '1.0', date: new Date('2024-06-01'), url: '/documents/ai-administracja-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '5-2', version: '2.0', date: new Date('2024-08-15'), url: '/documents/ai-administracja-v2.pdf', description: 'Po konsultacjach' },
      { id: '5-3', version: '3.0', date: new Date('2024-10-01'), url: '/documents/ai-administracja-v3.pdf', description: 'Wersja sejmowa' },
      { id: '5-4', version: '3.1', date: new Date('2024-11-01'), url: '/documents/ai-administracja-v3.1.pdf', description: 'Po poprawkach Senatu' },
      { id: '5-5', version: '4.0', date: new Date('2024-11-20'), url: '/documents/ai-administracja-v4.pdf', description: 'Wersja uchwalona' },
    ],
    categories: ['technologia'],
  },
  {
    id: '6',
    title: 'Ustawa o cyberbezpieczeństwie infrastruktury krytycznej',
    shortTitle: 'Cyberbezpieczeństwo',
    description: 'Projekt wzmacnia ochronę systemów informatycznych kluczowych dla funkcjonowania państwa.',
    status: 'senat',
    ministry: 'Ministerstwo Cyfryzacji',
    createdAt: new Date('2024-08-10'),
    updatedAt: new Date('2024-12-05'),
    drukNumber: 'Druk 567',
    documentVersions: [
      { id: '6-1', version: '1.0', date: new Date('2024-08-10'), url: '/documents/cyberbezpieczenstwo-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '6-2', version: '2.0', date: new Date('2024-10-20'), url: '/documents/cyberbezpieczenstwo-v2.pdf', description: 'Wersja rządowa' },
      { id: '6-3', version: '2.1', date: new Date('2024-12-05'), url: '/documents/cyberbezpieczenstwo-v2.1.pdf', description: 'Po III czytaniu w Sejmie' },
    ],
    categories: ['technologia', 'bezpieczenstwo'],
  },
  {
    id: '7',
    title: 'Ustawa o elektronicznym głosowaniu w wyborach samorządowych',
    shortTitle: 'e-Głosowanie',
    description: 'Projekt pilotażowy umożliwiający głosowanie elektroniczne w wybranych gminach.',
    status: 'prezydent',
    ministry: 'Krajowe Biuro Wyborcze',
    createdAt: new Date('2024-05-20'),
    updatedAt: new Date('2024-12-04'),
    drukNumber: 'Druk 789',
    documentVersions: [
      { id: '7-1', version: '1.0', date: new Date('2024-05-20'), url: '/documents/e-glosowanie-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '7-2', version: '2.0', date: new Date('2024-07-15'), url: '/documents/e-glosowanie-v2.pdf', description: 'Po konsultacjach' },
      { id: '7-3', version: '3.0', date: new Date('2024-09-30'), url: '/documents/e-glosowanie-v3.pdf', description: 'Wersja sejmowa' },
      { id: '7-4', version: '3.1', date: new Date('2024-11-15'), url: '/documents/e-glosowanie-v3.1.pdf', description: 'Po Senacie' },
      { id: '7-5', version: '3.2', date: new Date('2024-12-04'), url: '/documents/e-glosowanie-v3.2.pdf', description: 'Do podpisu Prezydenta' },
    ],
    categories: ['technologia'],
  },
  {
    id: '8',
    title: 'Ustawa o otwartych danych publicznych',
    shortTitle: 'Otwarte dane',
    description: 'Projekt rozszerza zakres danych publicznych udostępnianych w formacie otwartym.',
    status: 'konsultacje',
    ministry: 'Ministerstwo Cyfryzacji',
    createdAt: new Date('2024-11-01'),
    updatedAt: new Date('2024-12-06'),
    drukNumber: 'UD456',
    documentVersions: [
      { id: '8-1', version: '1.0', date: new Date('2024-11-01'), url: '/documents/otwarte-dane-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '8-2', version: '1.1', date: new Date('2024-11-15'), url: '/documents/otwarte-dane-v1.1.pdf', description: 'Po uwagach wewnętrznych' },
      { id: '8-3', version: '1.2', date: new Date('2024-11-28'), url: '/documents/otwarte-dane-v1.2.pdf', description: 'Z analizą porównawczą UE' },
      { id: '8-4', version: '2.0', date: new Date('2024-12-06'), url: '/documents/otwarte-dane-v2.pdf', description: 'Wersja do konsultacji' },
    ],
    categories: ['technologia'],
  },
  {
    id: '9',
    title: 'Ustawa o platformie e-Zamówienia 2.0',
    shortTitle: 'e-Zamówienia 2.0',
    description: 'Modernizacja systemu zamówień publicznych z wykorzystaniem AI do analizy ofert.',
    status: 'prace-rzadowe',
    ministry: 'Urząd Zamówień Publicznych',
    createdAt: new Date('2024-09-15'),
    updatedAt: new Date('2024-12-03'),
    drukNumber: 'UD234',
    documentVersions: [
      { id: '9-1', version: '1.0', date: new Date('2024-09-15'), url: '/documents/e-zamowienia-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '9-2', version: '1.1', date: new Date('2024-10-01'), url: '/documents/e-zamowienia-v1.1.pdf', description: 'Po konsultacjach z branżą IT' },
      { id: '9-3', version: '1.2', date: new Date('2024-10-20'), url: '/documents/e-zamowienia-v1.2.pdf', description: 'Dodano specyfikację API' },
      { id: '9-4', version: '2.0', date: new Date('2024-11-10'), url: '/documents/e-zamowienia-v2.pdf', description: 'Wersja po uzgodnieniach' },
      { id: '9-5', version: '2.1', date: new Date('2024-12-03'), url: '/documents/e-zamowienia-v2.1.pdf', description: 'Aktualna wersja robocza' },
    ],
    categories: ['technologia', 'biznes'],
  },
  {
    id: '10',
    title: 'Ustawa o przeciwdziałaniu dezinformacji w internecie',
    shortTitle: 'Przeciwdziałanie dezinformacji',
    description: 'Projekt wprowadza mechanizmy walki z fałszywymi informacjami w przestrzeni cyfrowej.',
    status: 'odrzucona',
    ministry: 'Ministerstwo Cyfryzacji',
    createdAt: new Date('2024-04-01'),
    updatedAt: new Date('2024-10-15'),
    drukNumber: 'Druk 123',
    documentVersions: [
      { id: '10-1', version: '1.0', date: new Date('2024-04-01'), url: '/documents/dezinformacja-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '10-2', version: '1.1', date: new Date('2024-05-15'), url: '/documents/dezinformacja-v1.1.pdf', description: 'Po konsultacjach publicznych' },
      { id: '10-3', version: '2.0', date: new Date('2024-07-01'), url: '/documents/dezinformacja-v2.pdf', description: 'Wersja rządowa' },
      { id: '10-4', version: '2.1', date: new Date('2024-09-10'), url: '/documents/dezinformacja-v2.1.pdf', description: 'Po pracach komisji' },
      { id: '10-5', version: '2.2', date: new Date('2024-10-15'), url: '/documents/dezinformacja-v2.2.pdf', description: 'Wersja odrzucona' },
    ],
    categories: ['technologia', 'bezpieczenstwo'],
  },
  {
    id: '11',
    title: 'Ustawa o cyfrowym dziedzictwie kulturowym',
    shortTitle: 'Cyfrowe dziedzictwo',
    description: 'Projekt zakłada digitalizację i udostępnienie online zbiorów muzealnych i archiwalnych.',
    status: 'prekonsultacje',
    ministry: 'Ministerstwo Kultury i Dziedzictwa Narodowego',
    createdAt: new Date('2024-12-02'),
    updatedAt: new Date('2024-12-06'),
    documentVersions: [
      { id: '11-1', version: '0.1', date: new Date('2024-12-02'), url: '/documents/dziedzictwo-v0.1.pdf', description: 'Wstępny zarys koncepcji' },
      { id: '11-2', version: '0.2', date: new Date('2024-12-06'), url: '/documents/dziedzictwo-v0.2.pdf', description: 'Rozszerzony projekt' },
    ],
    categories: ['technologia', 'kultura'],
  },
  {
    id: '12',
    title: 'Ustawa o telemedycynie i zdalnych usługach zdrowotnych',
    shortTitle: 'Telemedycyna',
    description: 'Regulacja prawna dla usług medycznych świadczonych na odległość.',
    status: 'sejm',
    ministry: 'Ministerstwo Zdrowia',
    createdAt: new Date('2024-07-01'),
    updatedAt: new Date('2024-12-05'),
    drukNumber: 'Druk 890',
    documentVersions: [
      { id: '12-1', version: '1.0', date: new Date('2024-07-01'), url: '/documents/telemedycyna-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '12-2', version: '1.1', date: new Date('2024-07-20'), url: '/documents/telemedycyna-v1.1.pdf', description: 'Po uwagach NFZ' },
      { id: '12-3', version: '2.0', date: new Date('2024-08-15'), url: '/documents/telemedycyna-v2.pdf', description: 'Po konsultacjach publicznych' },
      { id: '12-4', version: '2.1', date: new Date('2024-09-30'), url: '/documents/telemedycyna-v2.1.pdf', description: 'Z raportem z pilotażu' },
      { id: '12-5', version: '3.0', date: new Date('2024-11-10'), url: '/documents/telemedycyna-v3.pdf', description: 'Wersja rządowa' },
      { id: '12-6', version: '3.1', date: new Date('2024-12-05'), url: '/documents/telemedycyna-v3.1.pdf', description: 'Po komisji sejmowej' },
    ],
    categories: ['technologia', 'zdrowie'],
  },
  {
    id: '13',
    title: 'Ustawa o zmianie ustawy Prawo oświatowe',
    shortTitle: 'Reforma edukacji',
    description: 'Projekt wprowadza zmiany w systemie edukacji, w tym naukę programowania od pierwszej klasy szkoły podstawowej.',
    status: 'konsultacje',
    ministry: 'Ministerstwo Edukacji Narodowej',
    createdAt: new Date('2024-10-01'),
    updatedAt: new Date('2024-12-04'),
    drukNumber: 'UD567',
    documentVersions: [
      { id: '13-1', version: '1.0', date: new Date('2024-10-01'), url: '/documents/reforma-edukacji-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '13-2', version: '1.1', date: new Date('2024-10-20'), url: '/documents/reforma-edukacji-v1.1.pdf', description: 'Po uwagach ZNP' },
      { id: '13-3', version: '1.2', date: new Date('2024-11-05'), url: '/documents/reforma-edukacji-v1.2.pdf', description: 'Z podstawą programową' },
      { id: '13-4', version: '2.0', date: new Date('2024-12-04'), url: '/documents/reforma-edukacji-v2.pdf', description: 'Wersja do konsultacji' },
    ],
    categories: ['edukacja', 'technologia'],
  },
  {
    id: '14',
    title: 'Ustawa o elektromobilności i paliwach alternatywnych',
    shortTitle: 'Elektromobilność',
    description: 'Nowelizacja ustawy wspierającej rozwój infrastruktury ładowania pojazdów elektrycznych.',
    status: 'sejm',
    ministry: 'Ministerstwo Klimatu i Środowiska',
    createdAt: new Date('2024-08-15'),
    updatedAt: new Date('2024-12-03'),
    drukNumber: 'Druk 345',
    documentVersions: [
      { id: '14-1', version: '1.0', date: new Date('2024-08-15'), url: '/documents/elektromobilnosc-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '14-2', version: '1.1', date: new Date('2024-09-01'), url: '/documents/elektromobilnosc-v1.1.pdf', description: 'Po konsultacjach branżowych' },
      { id: '14-3', version: '2.0', date: new Date('2024-10-01'), url: '/documents/elektromobilnosc-v2.pdf', description: 'Wersja rządowa' },
      { id: '14-4', version: '2.1', date: new Date('2024-11-15'), url: '/documents/elektromobilnosc-v2.1.pdf', description: 'Po I czytaniu' },
      { id: '14-5', version: '2.2', date: new Date('2024-12-03'), url: '/documents/elektromobilnosc-v2.2.pdf', description: 'Z poprawkami komisji' },
    ],
    categories: ['srodowisko', 'transport'],
  },
  {
    id: '15',
    title: 'Ustawa o systemie kaucyjnym',
    shortTitle: 'System kaucyjny',
    description: 'Wprowadzenie obowiązkowego systemu kaucji na opakowania plastikowe i szklane.',
    status: 'uchwalona',
    ministry: 'Ministerstwo Klimatu i Środowiska',
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-11-15'),
    drukNumber: 'Druk 678',
    documentVersions: [
      { id: '15-1', version: '1.0', date: new Date('2024-03-01'), url: '/documents/kaucja-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '15-2', version: '1.1', date: new Date('2024-04-01'), url: '/documents/kaucja-v1.1.pdf', description: 'Po prekonsultacjach' },
      { id: '15-3', version: '2.0', date: new Date('2024-05-15'), url: '/documents/kaucja-v2.pdf', description: 'Po konsultacjach publicznych' },
      { id: '15-4', version: '3.0', date: new Date('2024-07-01'), url: '/documents/kaucja-v3.pdf', description: 'Wersja rządowa' },
      { id: '15-5', version: '3.1', date: new Date('2024-08-20'), url: '/documents/kaucja-v3.1.pdf', description: 'Po Sejmie' },
      { id: '15-6', version: '3.2', date: new Date('2024-09-30'), url: '/documents/kaucja-v3.2.pdf', description: 'Po Senacie' },
      { id: '15-7', version: '4.0', date: new Date('2024-11-15'), url: '/documents/kaucja-v4.pdf', description: 'Wersja uchwalona' },
    ],
    categories: ['srodowisko'],
  },
  {
    id: '16',
    title: 'Ustawa o wspieraniu rodzin z dziećmi',
    shortTitle: 'Rodzina 500+ Plus',
    description: 'Rozszerzenie programu wsparcia rodzin o dodatkowe świadczenia dla rodzin wielodzietnych.',
    status: 'prace-rzadowe',
    ministry: 'Ministerstwo Rodziny i Polityki Społecznej',
    createdAt: new Date('2024-11-01'),
    updatedAt: new Date('2024-12-05'),
    drukNumber: 'UD890',
    documentVersions: [
      { id: '16-1', version: '1.0', date: new Date('2024-11-01'), url: '/documents/rodzina-plus-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '16-2', version: '1.1', date: new Date('2024-11-15'), url: '/documents/rodzina-plus-v1.1.pdf', description: 'Z analizą kosztów' },
      { id: '16-3', version: '1.2', date: new Date('2024-12-01'), url: '/documents/rodzina-plus-v1.2.pdf', description: 'Po uzgodnieniach z MF' },
      { id: '16-4', version: '2.0', date: new Date('2024-12-05'), url: '/documents/rodzina-plus-v2.pdf', description: 'Aktualna wersja' },
    ],
    categories: ['rodzina', 'pomoc-spoleczna'],
  },
  {
    id: '17',
    title: 'Ustawa o minimalnym wynagrodzeniu za pracę',
    shortTitle: 'Płaca minimalna 2025',
    description: 'Ustalenie wysokości minimalnego wynagrodzenia za pracę na rok 2025.',
    status: 'uchwalona',
    ministry: 'Ministerstwo Rodziny i Polityki Społecznej',
    createdAt: new Date('2024-09-01'),
    updatedAt: new Date('2024-11-28'),
    drukNumber: 'Druk 901',
    documentVersions: [
      { id: '17-1', version: '1.0', date: new Date('2024-09-01'), url: '/documents/placa-min-v1.pdf', description: 'Propozycja rządowa' },
      { id: '17-2', version: '1.1', date: new Date('2024-09-15'), url: '/documents/placa-min-v1.1.pdf', description: 'Po dialogu ze związkami' },
      { id: '17-3', version: '2.0', date: new Date('2024-10-01'), url: '/documents/placa-min-v2.pdf', description: 'Wersja kompromisowa' },
      { id: '17-4', version: '2.1', date: new Date('2024-10-20'), url: '/documents/placa-min-v2.1.pdf', description: 'Po Sejmie' },
      { id: '17-5', version: '2.2', date: new Date('2024-11-10'), url: '/documents/placa-min-v2.2.pdf', description: 'Po Senacie' },
      { id: '17-6', version: '3.0', date: new Date('2024-11-28'), url: '/documents/placa-min-v3.pdf', description: 'Wersja uchwalona' },
    ],
    categories: ['prawo-pracy'],
  },
  {
    id: '18',
    title: 'Ustawa o ochronie zwierząt domowych',
    shortTitle: 'Ochrona zwierząt',
    description: 'Zaostrzenie kar za znęcanie się nad zwierzętami i wprowadzenie rejestru sprawców.',
    status: 'senat',
    ministry: 'Ministerstwo Rolnictwa i Rozwoju Wsi',
    createdAt: new Date('2024-07-15'),
    updatedAt: new Date('2024-12-04'),
    drukNumber: 'Druk 234',
    documentVersions: [
      { id: '18-1', version: '1.0', date: new Date('2024-07-15'), url: '/documents/ochrona-zwierzat-v1.pdf', description: 'Projekt poselski' },
      { id: '18-2', version: '1.1', date: new Date('2024-08-01'), url: '/documents/ochrona-zwierzat-v1.1.pdf', description: 'Po konsultacjach z NGO' },
      { id: '18-3', version: '2.0', date: new Date('2024-09-15'), url: '/documents/ochrona-zwierzat-v2.pdf', description: 'Po I czytaniu' },
      { id: '18-4', version: '2.1', date: new Date('2024-11-01'), url: '/documents/ochrona-zwierzat-v2.1.pdf', description: 'Po komisji' },
      { id: '18-5', version: '2.2', date: new Date('2024-12-04'), url: '/documents/ochrona-zwierzat-v2.2.pdf', description: 'Przekazana do Senatu' },
    ],
    categories: ['srodowisko'],
  },
  {
    id: '19',
    title: 'Ustawa o zrównoważonym rozwoju obszarów wiejskich',
    shortTitle: 'Rozwój wsi',
    description: 'Program wsparcia dla małych gospodarstw rolnych i rozwoju agroturystyki.',
    status: 'konsultacje',
    ministry: 'Ministerstwo Rolnictwa i Rozwoju Wsi',
    createdAt: new Date('2024-10-20'),
    updatedAt: new Date('2024-12-06'),
    drukNumber: 'UD345',
    documentVersions: [
      { id: '19-1', version: '1.0', date: new Date('2024-10-20'), url: '/documents/rozwoj-wsi-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '19-2', version: '1.1', date: new Date('2024-11-10'), url: '/documents/rozwoj-wsi-v1.1.pdf', description: 'Po uwagach KRIR' },
      { id: '19-3', version: '2.0', date: new Date('2024-12-06'), url: '/documents/rozwoj-wsi-v2.pdf', description: 'Wersja do konsultacji' },
    ],
    categories: ['rolnictwo'],
  },
  {
    id: '20',
    title: 'Ustawa o funduszach inwestycyjnych',
    shortTitle: 'Fundusze inwestycyjne',
    description: 'Nowe regulacje dotyczące funduszy inwestycyjnych i ochrony inwestorów indywidualnych.',
    status: 'prace-rzadowe',
    ministry: 'Ministerstwo Finansów',
    createdAt: new Date('2024-09-10'),
    updatedAt: new Date('2024-12-02'),
    drukNumber: 'UD678',
    documentVersions: [
      { id: '20-1', version: '1.0', date: new Date('2024-09-10'), url: '/documents/fundusze-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '20-2', version: '1.1', date: new Date('2024-10-01'), url: '/documents/fundusze-v1.1.pdf', description: 'Z raportem KNF' },
      { id: '20-3', version: '1.2', date: new Date('2024-10-25'), url: '/documents/fundusze-v1.2.pdf', description: 'Po konsultacjach z branżą' },
      { id: '20-4', version: '2.0', date: new Date('2024-11-15'), url: '/documents/fundusze-v2.pdf', description: 'Po uzgodnieniach' },
      { id: '20-5', version: '2.1', date: new Date('2024-12-02'), url: '/documents/fundusze-v2.1.pdf', description: 'Aktualna wersja' },
    ],
    categories: ['biznes', 'podatki'],
  },
  {
    id: '21',
    title: 'Ustawa o podatku od transakcji cyfrowych',
    shortTitle: 'Podatek cyfrowy',
    description: 'Wprowadzenie podatku od przychodów wielkich korporacji technologicznych działających w Polsce.',
    status: 'prekonsultacje',
    ministry: 'Ministerstwo Finansów',
    createdAt: new Date('2024-11-20'),
    updatedAt: new Date('2024-12-05'),
    documentVersions: [
      { id: '21-1', version: '0.1', date: new Date('2024-11-20'), url: '/documents/podatek-cyfrowy-v0.1.pdf', description: 'Założenia projektu' },
      { id: '21-2', version: '0.2', date: new Date('2024-12-05'), url: '/documents/podatek-cyfrowy-v0.2.pdf', description: 'Rozszerzony zarys' },
    ],
    categories: ['podatki', 'technologia'],
  },
  {
    id: '22',
    title: 'Ustawa o sporcie powszechnym',
    shortTitle: 'Sport dla wszystkich',
    description: 'Program rozwoju infrastruktury sportowej i promocji aktywności fizycznej.',
    status: 'sejm',
    ministry: 'Ministerstwo Sportu i Turystyki',
    createdAt: new Date('2024-06-15'),
    updatedAt: new Date('2024-12-03'),
    drukNumber: 'Druk 567',
    documentVersions: [
      { id: '22-1', version: '1.0', date: new Date('2024-06-15'), url: '/documents/sport-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '22-2', version: '1.1', date: new Date('2024-07-10'), url: '/documents/sport-v1.1.pdf', description: 'Po konsultacjach ze związkami' },
      { id: '22-3', version: '2.0', date: new Date('2024-08-20'), url: '/documents/sport-v2.pdf', description: 'Po konsultacjach publicznych' },
      { id: '22-4', version: '3.0', date: new Date('2024-10-01'), url: '/documents/sport-v3.pdf', description: 'Wersja rządowa' },
      { id: '22-5', version: '3.1', date: new Date('2024-11-15'), url: '/documents/sport-v3.1.pdf', description: 'Po I czytaniu' },
      { id: '22-6', version: '3.2', date: new Date('2024-12-03'), url: '/documents/sport-v3.2.pdf', description: 'Uchwalona przez Sejm' },
    ],
    categories: ['zdrowie', 'kultura'],
  },
  {
    id: '23',
    title: 'Ustawa o turystyce zrównoważonej',
    shortTitle: 'Ekoturystyka',
    description: 'Wspieranie rozwoju turystyki przyjaznej środowisku i lokalnym społecznościom.',
    status: 'konsultacje',
    ministry: 'Ministerstwo Sportu i Turystyki',
    createdAt: new Date('2024-10-25'),
    updatedAt: new Date('2024-12-04'),
    drukNumber: 'UD901',
    documentVersions: [
      { id: '23-1', version: '1.0', date: new Date('2024-10-25'), url: '/documents/ekoturystyka-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '23-2', version: '1.1', date: new Date('2024-11-15'), url: '/documents/ekoturystyka-v1.1.pdf', description: 'Po uwagach branży' },
      { id: '23-3', version: '2.0', date: new Date('2024-12-04'), url: '/documents/ekoturystyka-v2.pdf', description: 'Wersja do konsultacji' },
    ],
    categories: ['srodowisko', 'biznes'],
  },
  {
    id: '24',
    title: 'Ustawa o odnawialnych źródłach energii',
    shortTitle: 'OZE 2.0',
    description: 'Nowelizacja przepisów dotyczących prosumentów i instalacji fotowoltaicznych.',
    status: 'senat',
    ministry: 'Ministerstwo Klimatu i Środowiska',
    createdAt: new Date('2024-05-01'),
    updatedAt: new Date('2024-12-05'),
    drukNumber: 'Druk 890',
    documentVersions: [
      { id: '24-1', version: '1.0', date: new Date('2024-05-01'), url: '/documents/oze-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '24-2', version: '1.1', date: new Date('2024-06-01'), url: '/documents/oze-v1.1.pdf', description: 'Po konsultacjach z URE' },
      { id: '24-3', version: '2.0', date: new Date('2024-07-15'), url: '/documents/oze-v2.pdf', description: 'Po konsultacjach publicznych' },
      { id: '24-4', version: '3.0', date: new Date('2024-09-01'), url: '/documents/oze-v3.pdf', description: 'Wersja rządowa' },
      { id: '24-5', version: '3.1', date: new Date('2024-10-20'), url: '/documents/oze-v3.1.pdf', description: 'Po I czytaniu' },
      { id: '24-6', version: '3.2', date: new Date('2024-11-15'), url: '/documents/oze-v3.2.pdf', description: 'Po komisji' },
      { id: '24-7', version: '3.3', date: new Date('2024-12-05'), url: '/documents/oze-v3.3.pdf', description: 'Przyjęta przez Senat' },
    ],
    categories: ['srodowisko', 'mieszkalnictwo'],
  },
  {
    id: '25',
    title: 'Ustawa o jakości powietrza',
    shortTitle: 'Czyste powietrze',
    description: 'Zaostrzenie norm emisji i wsparcie wymiany starych pieców grzewczych.',
    status: 'prace-rzadowe',
    ministry: 'Ministerstwo Klimatu i Środowiska',
    createdAt: new Date('2024-08-20'),
    updatedAt: new Date('2024-12-02'),
    drukNumber: 'UD123',
    documentVersions: [
      { id: '25-1', version: '1.0', date: new Date('2024-08-20'), url: '/documents/czyste-powietrze-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '25-2', version: '1.1', date: new Date('2024-09-10'), url: '/documents/czyste-powietrze-v1.1.pdf', description: 'Z mapą stref' },
      { id: '25-3', version: '1.2', date: new Date('2024-10-01'), url: '/documents/czyste-powietrze-v1.2.pdf', description: 'Po konsultacjach z samorządami' },
      { id: '25-4', version: '2.0', date: new Date('2024-11-15'), url: '/documents/czyste-powietrze-v2.pdf', description: 'Po uzgodnieniach' },
      { id: '25-5', version: '2.1', date: new Date('2024-12-02'), url: '/documents/czyste-powietrze-v2.1.pdf', description: 'Aktualna wersja' },
    ],
    categories: ['srodowisko', 'zdrowie'],
  },
  {
    id: '26',
    title: 'Ustawa o budownictwie mieszkaniowym',
    shortTitle: 'Mieszkanie+',
    description: 'Program wsparcia budowy tanich mieszkań na wynajem dla młodych rodzin.',
    status: 'konsultacje',
    ministry: 'Ministerstwo Rozwoju i Technologii',
    createdAt: new Date('2024-11-10'),
    updatedAt: new Date('2024-12-06'),
    drukNumber: 'UD456',
    documentVersions: [
      { id: '26-1', version: '1.0', date: new Date('2024-11-10'), url: '/documents/mieszkanie-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '26-2', version: '1.1', date: new Date('2024-11-25'), url: '/documents/mieszkanie-v1.1.pdf', description: 'Z analizą lokalizacji' },
      { id: '26-3', version: '2.0', date: new Date('2024-12-06'), url: '/documents/mieszkanie-v2.pdf', description: 'Wersja do konsultacji' },
    ],
    categories: ['mieszkalnictwo', 'rodzina'],
  },
  {
    id: '27',
    title: 'Ustawa o uproszczeniu procedur budowlanych',
    shortTitle: 'Łatwiejsze budowanie',
    description: 'Cyfryzacja procesu uzyskiwania pozwoleń na budowę i skrócenie terminów.',
    status: 'sejm',
    ministry: 'Ministerstwo Rozwoju i Technologii',
    createdAt: new Date('2024-07-20'),
    updatedAt: new Date('2024-12-04'),
    drukNumber: 'Druk 123',
    documentVersions: [
      { id: '27-1', version: '1.0', date: new Date('2024-07-20'), url: '/documents/budowlanka-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '27-2', version: '1.1', date: new Date('2024-08-10'), url: '/documents/budowlanka-v1.1.pdf', description: 'Po konsultacjach z deweloperami' },
      { id: '27-3', version: '2.0', date: new Date('2024-09-15'), url: '/documents/budowlanka-v2.pdf', description: 'Po konsultacjach publicznych' },
      { id: '27-4', version: '3.0', date: new Date('2024-10-20'), url: '/documents/budowlanka-v3.pdf', description: 'Wersja rządowa' },
      { id: '27-5', version: '3.1', date: new Date('2024-11-20'), url: '/documents/budowlanka-v3.1.pdf', description: 'Po I czytaniu' },
      { id: '27-6', version: '3.2', date: new Date('2024-12-04'), url: '/documents/budowlanka-v3.2.pdf', description: 'Po komisji' },
    ],
    categories: ['mieszkalnictwo', 'biznes'],
  },
  {
    id: '28',
    title: 'Ustawa o bezpieczeństwie w transporcie publicznym',
    shortTitle: 'Bezpieczny transport',
    description: 'Wprowadzenie obowiązkowego monitoringu i standardów bezpieczeństwa w komunikacji miejskiej.',
    status: 'prezydent',
    ministry: 'Ministerstwo Infrastruktury',
    createdAt: new Date('2024-04-15'),
    updatedAt: new Date('2024-12-03'),
    drukNumber: 'Druk 456',
    documentVersions: [
      { id: '28-1', version: '1.0', date: new Date('2024-04-15'), url: '/documents/transport-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '28-2', version: '1.1', date: new Date('2024-05-10'), url: '/documents/transport-v1.1.pdf', description: 'Po konsultacjach z miastami' },
      { id: '28-3', version: '2.0', date: new Date('2024-06-20'), url: '/documents/transport-v2.pdf', description: 'Po konsultacjach publicznych' },
      { id: '28-4', version: '3.0', date: new Date('2024-08-01'), url: '/documents/transport-v3.pdf', description: 'Wersja rządowa' },
      { id: '28-5', version: '3.1', date: new Date('2024-09-15'), url: '/documents/transport-v3.1.pdf', description: 'Po Sejmie' },
      { id: '28-6', version: '3.2', date: new Date('2024-11-01'), url: '/documents/transport-v3.2.pdf', description: 'Po Senacie' },
      { id: '28-7', version: '3.3', date: new Date('2024-12-03'), url: '/documents/transport-v3.3.pdf', description: 'Do podpisu Prezydenta' },
    ],
    categories: ['transport', 'bezpieczenstwo'],
  },
  {
    id: '29',
    title: 'Ustawa o kolei dużych prędkości',
    shortTitle: 'CPK - Kolej',
    description: 'Regulacje dotyczące budowy i eksploatacji linii kolejowych dużych prędkości.',
    status: 'prace-rzadowe',
    ministry: 'Ministerstwo Infrastruktury',
    createdAt: new Date('2024-06-01'),
    updatedAt: new Date('2024-12-05'),
    drukNumber: 'UD789',
    documentVersions: [
      { id: '29-1', version: '1.0', date: new Date('2024-06-01'), url: '/documents/cpk-kolej-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '29-2', version: '1.1', date: new Date('2024-07-15'), url: '/documents/cpk-kolej-v1.1.pdf', description: 'Z harmonogramem budowy' },
      { id: '29-3', version: '1.2', date: new Date('2024-08-20'), url: '/documents/cpk-kolej-v1.2.pdf', description: 'Po konsultacjach z PKP' },
      { id: '29-4', version: '2.0', date: new Date('2024-10-01'), url: '/documents/cpk-kolej-v2.pdf', description: 'Po uzgodnieniach z UE' },
      { id: '29-5', version: '2.1', date: new Date('2024-11-15'), url: '/documents/cpk-kolej-v2.1.pdf', description: 'Z analizą finansową' },
      { id: '29-6', version: '2.2', date: new Date('2024-12-05'), url: '/documents/cpk-kolej-v2.2.pdf', description: 'Aktualna wersja' },
    ],
    categories: ['transport'],
  },
  {
    id: '30',
    title: 'Ustawa o ochronie dzieci w internecie',
    shortTitle: 'Bezpieczne dzieci online',
    description: 'Obowiązki platform internetowych w zakresie ochrony małoletnich użytkowników.',
    status: 'konsultacje',
    ministry: 'Ministerstwo Cyfryzacji',
    createdAt: new Date('2024-11-05'),
    updatedAt: new Date('2024-12-06'),
    drukNumber: 'UD234',
    documentVersions: [
      { id: '30-1', version: '1.0', date: new Date('2024-11-05'), url: '/documents/dzieci-online-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '30-2', version: '1.1', date: new Date('2024-11-20'), url: '/documents/dzieci-online-v1.1.pdf', description: 'Po uwagach RPD' },
      { id: '30-3', version: '2.0', date: new Date('2024-12-06'), url: '/documents/dzieci-online-v2.pdf', description: 'Wersja do konsultacji' },
    ],
    categories: ['technologia', 'rodzina', 'bezpieczenstwo'],
  },
  {
    id: '31',
    title: 'Ustawa o języku migowym',
    shortTitle: 'Język migowy',
    description: 'Uznanie polskiego języka migowego za język urzędowy i obowiązek tłumaczeń w urzędach.',
    status: 'sejm',
    ministry: 'Ministerstwo Rodziny i Polityki Społecznej',
    createdAt: new Date('2024-08-01'),
    updatedAt: new Date('2024-12-04'),
    drukNumber: 'Druk 789',
    documentVersions: [
      { id: '31-1', version: '1.0', date: new Date('2024-08-01'), url: '/documents/jezyk-migowy-v1.pdf', description: 'Projekt obywatelski' },
      { id: '31-2', version: '1.1', date: new Date('2024-08-20'), url: '/documents/jezyk-migowy-v1.1.pdf', description: 'Po konsultacjach ze środowiskiem' },
      { id: '31-3', version: '2.0', date: new Date('2024-09-15'), url: '/documents/jezyk-migowy-v2.pdf', description: 'Po konsultacjach publicznych' },
      { id: '31-4', version: '3.0', date: new Date('2024-10-20'), url: '/documents/jezyk-migowy-v3.pdf', description: 'Wersja rządowa' },
      { id: '31-5', version: '3.1', date: new Date('2024-11-15'), url: '/documents/jezyk-migowy-v3.1.pdf', description: 'Po I czytaniu' },
      { id: '31-6', version: '3.2', date: new Date('2024-12-04'), url: '/documents/jezyk-migowy-v3.2.pdf', description: 'Uchwalona przez Sejm' },
    ],
    categories: ['pomoc-spoleczna'],
  },
  {
    id: '32',
    title: 'Ustawa o prawach pacjenta',
    shortTitle: 'Prawa pacjenta 2.0',
    description: 'Rozszerzenie praw pacjentów o dostęp do dokumentacji online i drugą opinię lekarską.',
    status: 'senat',
    ministry: 'Ministerstwo Zdrowia',
    createdAt: new Date('2024-05-15'),
    updatedAt: new Date('2024-12-05'),
    drukNumber: 'Druk 345',
    documentVersions: [
      { id: '32-1', version: '1.0', date: new Date('2024-05-15'), url: '/documents/prawa-pacjenta-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '32-2', version: '1.1', date: new Date('2024-06-10'), url: '/documents/prawa-pacjenta-v1.1.pdf', description: 'Po uwagach NIL' },
      { id: '32-3', version: '2.0', date: new Date('2024-07-20'), url: '/documents/prawa-pacjenta-v2.pdf', description: 'Po konsultacjach publicznych' },
      { id: '32-4', version: '3.0', date: new Date('2024-09-01'), url: '/documents/prawa-pacjenta-v3.pdf', description: 'Wersja rządowa' },
      { id: '32-5', version: '3.1', date: new Date('2024-10-15'), url: '/documents/prawa-pacjenta-v3.1.pdf', description: 'Po Sejmie' },
      { id: '32-6', version: '3.2', date: new Date('2024-12-05'), url: '/documents/prawa-pacjenta-v3.2.pdf', description: 'W Senacie' },
    ],
    categories: ['zdrowie'],
  },
  {
    id: '33',
    title: 'Ustawa o refundacji leków',
    shortTitle: 'Refundacja leków',
    description: 'Rozszerzenie listy leków refundowanych o nowe terapie onkologiczne.',
    status: 'uchwalona',
    ministry: 'Ministerstwo Zdrowia',
    createdAt: new Date('2024-04-01'),
    updatedAt: new Date('2024-11-30'),
    drukNumber: 'Druk 567',
    documentVersions: [
      { id: '33-1', version: '1.0', date: new Date('2024-04-01'), url: '/documents/refundacja-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '33-2', version: '1.1', date: new Date('2024-05-01'), url: '/documents/refundacja-v1.1.pdf', description: 'Po analizie AOTMiT' },
      { id: '33-3', version: '2.0', date: new Date('2024-06-15'), url: '/documents/refundacja-v2.pdf', description: 'Po negocjacjach cenowych' },
      { id: '33-4', version: '3.0', date: new Date('2024-08-01'), url: '/documents/refundacja-v3.pdf', description: 'Wersja rządowa' },
      { id: '33-5', version: '3.1', date: new Date('2024-09-20'), url: '/documents/refundacja-v3.1.pdf', description: 'Po Sejmie' },
      { id: '33-6', version: '3.2', date: new Date('2024-10-30'), url: '/documents/refundacja-v3.2.pdf', description: 'Po Senacie' },
      { id: '33-7', version: '4.0', date: new Date('2024-11-30'), url: '/documents/refundacja-v4.pdf', description: 'Wersja uchwalona' },
    ],
    categories: ['zdrowie'],
  },
  {
    id: '34',
    title: 'Ustawa o szkolnictwie wyższym',
    shortTitle: 'Reforma uczelni',
    description: 'Zmiany w finansowaniu uczelni i wsparcie dla młodych naukowców.',
    status: 'konsultacje',
    ministry: 'Ministerstwo Nauki i Szkolnictwa Wyższego',
    createdAt: new Date('2024-10-15'),
    updatedAt: new Date('2024-12-04'),
    drukNumber: 'UD567',
    documentVersions: [
      { id: '34-1', version: '1.0', date: new Date('2024-10-15'), url: '/documents/szkolnictwo-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '34-2', version: '1.1', date: new Date('2024-11-01'), url: '/documents/szkolnictwo-v1.1.pdf', description: 'Po uwagach KRASP' },
      { id: '34-3', version: '1.2', date: new Date('2024-11-20'), url: '/documents/szkolnictwo-v1.2.pdf', description: 'Po uwagach związków' },
      { id: '34-4', version: '2.0', date: new Date('2024-12-04'), url: '/documents/szkolnictwo-v2.pdf', description: 'Wersja do konsultacji' },
    ],
    categories: ['edukacja'],
  },
  {
    id: '35',
    title: 'Ustawa o badaniach naukowych',
    shortTitle: 'Nauka dla rozwoju',
    description: 'Zwiększenie finansowania badań naukowych i współpracy z przemysłem.',
    status: 'prace-rzadowe',
    ministry: 'Ministerstwo Nauki i Szkolnictwa Wyższego',
    createdAt: new Date('2024-09-20'),
    updatedAt: new Date('2024-12-03'),
    drukNumber: 'UD890',
    documentVersions: [
      { id: '35-1', version: '1.0', date: new Date('2024-09-20'), url: '/documents/nauka-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '35-2', version: '1.1', date: new Date('2024-10-10'), url: '/documents/nauka-v1.1.pdf', description: 'Ze strategią 2030' },
      { id: '35-3', version: '1.2', date: new Date('2024-10-30'), url: '/documents/nauka-v1.2.pdf', description: 'Po konsultacjach z NCN' },
      { id: '35-4', version: '2.0', date: new Date('2024-11-20'), url: '/documents/nauka-v2.pdf', description: 'Po uzgodnieniach' },
      { id: '35-5', version: '2.1', date: new Date('2024-12-03'), url: '/documents/nauka-v2.1.pdf', description: 'Aktualna wersja' },
    ],
    categories: ['edukacja', 'technologia'],
  },
  {
    id: '36',
    title: 'Ustawa o ochronie zabytków',
    shortTitle: 'Ochrona zabytków',
    description: 'Wzmocnienie ochrony zabytków i zwiększenie kar za ich niszczenie.',
    status: 'prekonsultacje',
    ministry: 'Ministerstwo Kultury i Dziedzictwa Narodowego',
    createdAt: new Date('2024-11-25'),
    updatedAt: new Date('2024-12-05'),
    documentVersions: [
      { id: '36-1', version: '0.1', date: new Date('2024-11-25'), url: '/documents/zabytki-v0.1.pdf', description: 'Założenia projektu' },
      { id: '36-2', version: '0.2', date: new Date('2024-12-05'), url: '/documents/zabytki-v0.2.pdf', description: 'Wersja robocza' },
    ],
    categories: ['kultura'],
  },
  {
    id: '37',
    title: 'Ustawa o wsparciu artystów',
    shortTitle: 'Wsparcie dla kultury',
    description: 'System ubezpieczeń społecznych i emerytalnych dla artystów i twórców.',
    status: 'sejm',
    ministry: 'Ministerstwo Kultury i Dziedzictwa Narodowego',
    createdAt: new Date('2024-07-01'),
    updatedAt: new Date('2024-12-04'),
    drukNumber: 'Druk 678',
    documentVersions: [
      { id: '37-1', version: '1.0', date: new Date('2024-07-01'), url: '/documents/artysci-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '37-2', version: '1.1', date: new Date('2024-07-25'), url: '/documents/artysci-v1.1.pdf', description: 'Po konsultacjach ze związkami' },
      { id: '37-3', version: '2.0', date: new Date('2024-08-30'), url: '/documents/artysci-v2.pdf', description: 'Po konsultacjach publicznych' },
      { id: '37-4', version: '3.0', date: new Date('2024-10-10'), url: '/documents/artysci-v3.pdf', description: 'Wersja rządowa' },
      { id: '37-5', version: '3.1', date: new Date('2024-11-20'), url: '/documents/artysci-v3.1.pdf', description: 'Po I czytaniu' },
      { id: '37-6', version: '3.2', date: new Date('2024-12-04'), url: '/documents/artysci-v3.2.pdf', description: 'Po II czytaniu' },
    ],
    categories: ['kultura', 'prawo-pracy'],
  },
  {
    id: '38',
    title: 'Ustawa o prawach konsumenta',
    shortTitle: 'Prawa konsumenta',
    description: 'Wzmocnienie ochrony konsumentów w handlu elektronicznym i prawo do naprawy.',
    status: 'konsultacje',
    ministry: 'Urząd Ochrony Konkurencji i Konsumentów',
    createdAt: new Date('2024-10-30'),
    updatedAt: new Date('2024-12-06'),
    drukNumber: 'UD901',
    documentVersions: [
      { id: '38-1', version: '1.0', date: new Date('2024-10-30'), url: '/documents/konsument-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '38-2', version: '1.1', date: new Date('2024-11-15'), url: '/documents/konsument-v1.1.pdf', description: 'Po uwagach branży' },
      { id: '38-3', version: '2.0', date: new Date('2024-12-06'), url: '/documents/konsument-v2.pdf', description: 'Wersja do konsultacji' },
    ],
    categories: ['biznes'],
  },
  {
    id: '39',
    title: 'Ustawa o sygnalistach',
    shortTitle: 'Ochrona sygnalistów',
    description: 'Implementacja dyrektywy UE o ochronie osób zgłaszających naruszenia prawa.',
    status: 'uchwalona',
    ministry: 'Ministerstwo Rodziny i Polityki Społecznej',
    createdAt: new Date('2024-03-15'),
    updatedAt: new Date('2024-11-25'),
    drukNumber: 'Druk 890',
    documentVersions: [
      { id: '39-1', version: '1.0', date: new Date('2024-03-15'), url: '/documents/sygnalisci-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '39-2', version: '1.1', date: new Date('2024-04-20'), url: '/documents/sygnalisci-v1.1.pdf', description: 'Po transpozycji dyrektywy' },
      { id: '39-3', version: '2.0', date: new Date('2024-06-01'), url: '/documents/sygnalisci-v2.pdf', description: 'Po konsultacjach publicznych' },
      { id: '39-4', version: '3.0', date: new Date('2024-07-15'), url: '/documents/sygnalisci-v3.pdf', description: 'Wersja rządowa' },
      { id: '39-5', version: '3.1', date: new Date('2024-08-30'), url: '/documents/sygnalisci-v3.1.pdf', description: 'Po Sejmie' },
      { id: '39-6', version: '3.2', date: new Date('2024-10-15'), url: '/documents/sygnalisci-v3.2.pdf', description: 'Po Senacie' },
      { id: '39-7', version: '4.0', date: new Date('2024-11-25'), url: '/documents/sygnalisci-v4.pdf', description: 'Wersja uchwalona' },
    ],
    categories: ['prawo-pracy', 'biznes'],
  },
  {
    id: '40',
    title: 'Ustawa o pracownikach platform cyfrowych',
    shortTitle: 'Praca platformowa',
    description: 'Regulacja statusu prawnego osób pracujących przez aplikacje typu Uber, Glovo.',
    status: 'prace-rzadowe',
    ministry: 'Ministerstwo Rodziny i Polityki Społecznej',
    createdAt: new Date('2024-08-25'),
    updatedAt: new Date('2024-12-02'),
    drukNumber: 'UD345',
    documentVersions: [
      { id: '40-1', version: '1.0', date: new Date('2024-08-25'), url: '/documents/platformy-v1.pdf', description: 'Projekt wyjściowy' },
      { id: '40-2', version: '1.1', date: new Date('2024-09-15'), url: '/documents/platformy-v1.1.pdf', description: 'Z raportem o rynku' },
      { id: '40-3', version: '1.2', date: new Date('2024-10-01'), url: '/documents/platformy-v1.2.pdf', description: 'Po konsultacjach z platformami' },
      { id: '40-4', version: '2.0', date: new Date('2024-11-01'), url: '/documents/platformy-v2.pdf', description: 'Po uzgodnieniach' },
      { id: '40-5', version: '2.1', date: new Date('2024-12-02'), url: '/documents/platformy-v2.1.pdf', description: 'Aktualna wersja' },
    ],
    categories: ['prawo-pracy', 'technologia'],
  },
];

// Helper to get ustawa by id
const getUstawa = (id: string) => mockUstawy.find(u => u.id === id)!;

export const mockUpdates: LegislativeUpdate[] = [
  {
    id: '1',
    ustawaId: '1',
    ustawa: getUstawa('1'),
    type: 'consultation_opened',
    title: 'Rozpoczęto konsultacje społeczne',
    content: 'Ministerstwo Cyfryzacji ogłosiło rozpoczęcie konsultacji społecznych projektu nowelizacji ustawy o ochronie danych osobowych. Uwagi można zgłaszać do 20 grudnia 2024 r.',
    aiSummary: 'Rozpoczęły się konsultacje publiczne dot. nowelizacji RODO. Projekt wprowadza nowe uprawnienia dla obywateli w zakresie kontroli nad ich danymi, w tym prawo do "cyfrowego zapomnienia" i zwiększone kary za naruszenia. Termin zgłaszania uwag: 20.12.2024.',
    aiDetailedSummary: `Szczegółowa analiza projektu nowelizacji RODO:

GŁÓWNE ZMIANY:
• Prawo do "cyfrowego zapomnienia" - obywatele zyskają możliwość żądania trwałego usunięcia swoich danych z wszystkich systemów administratora danych
• Zwiększone kary - maksymalna kara za naruszenia wzrośnie z 20 mln EUR do 40 mln EUR lub 4% globalnego obrotu
• Nowy organ - utworzenie Rzecznika Praw Cyfrowych z kompetencjami do reprezentowania obywateli w sporach z firmami technologicznymi

WPŁYW NA OBYWATELI:
• Łatwiejsze wycofanie zgody na przetwarzanie danych
• Prawo do przenoszenia danych między usługodawcami (np. zmiana banku z pełną historią transakcji)
• Obowiązkowe powiadomienia o naruszeniach bezpieczeństwa w ciągu 24h

WPŁYW NA PRZEDSIĘBIORCÓW:
• Obowiązek wyznaczenia Inspektora Ochrony Danych dla firm zatrudniających powyżej 50 osób
• Konieczność przeprowadzania audytów bezpieczeństwa co 12 miesięcy
• Nowe wymogi dotyczące zgód marketingowych - każda zgoda musi być oddzielna i świadoma

HARMONOGRAM:
• Konsultacje: do 20.12.2024
• Planowane przyjęcie przez Radę Ministrów: Q1 2025
• Wejście w życie: 18 miesięcy od uchwalenia`,
    createdAt: new Date('2024-12-05T10:30:00'),
    sourceUrl: 'https://rcl.gov.pl/projekty/ud123',
  },
  {
    id: '2',
    ustawaId: '2',
    ustawa: getUstawa('2'),
    type: 'vote_result',
    title: 'Głosowanie w Sejmie - II czytanie',
    content: 'Sejm przyjął projekt ustawy o dostępności cyfrowej w II czytaniu. Za głosowało 412 posłów, przeciw 15, wstrzymało się 28.',
    aiSummary: 'Sejm poparł ustawę o dostępności cyfrowej (412 za, 15 przeciw). Ustawa wymusi na urzędach dostosowanie stron i aplikacji dla osób z niepełnosprawnościami do końca 2025 r. Następny krok: III czytanie i głosowanie końcowe.',
    aiDetailedSummary: `Analiza głosowania i następnych kroków:

WYNIK GŁOSOWANIA:
• Za: 412 posłów (89%)
• Przeciw: 15 posłów (3%)
• Wstrzymało się: 28 posłów (6%)
• Nieobecni: 5 posłów

GŁÓWNE WYMOGI USTAWY:
• Wszystkie strony internetowe podmiotów publicznych muszą spełniać standard WCAG 2.1 na poziomie AA
• Aplikacje mobilne urzędów muszą być dostępne dla czytników ekranu
• Dokumenty PDF muszą być otagowane dla technologii asystujących
• Formularze online muszą być w pełni obsługiwalne z klawiatury

KTO JEST OBJĘTY:
• Wszystkie urzędy administracji rządowej i samorządowej
• Uczelnie publiczne
• Szpitale i przychodnie publiczne
• Spółki Skarbu Państwa
• Organizacje pozarządowe korzystające ze środków publicznych

KARY ZA NIEPRZESTRZEGANIE:
• Pierwsze naruszenie: upomnienie i 90 dni na poprawę
• Drugie naruszenie: kara do 100 000 zł
• Systematyczne naruszenia: kara do 500 000 zł i odpowiedzialność osobista kierownika jednostki

NASTĘPNE KROKI:
• III czytanie planowane na 10.12.2024
• Przekazanie do Senatu: połowa grudnia
• Planowane wejście w życie: 1.07.2025`,
    createdAt: new Date('2024-12-04T16:45:00'),
    sourceUrl: 'https://sejm.gov.pl/druk/456',
  },
  {
    id: '3',
    ustawaId: '3',
    ustawa: getUstawa('3'),
    type: 'status_change',
    title: 'Projekt skierowany do prekonsultacji',
    content: 'Kancelaria Prezesa Rady Ministrów opublikowała wstępny projekt ustawy o transparentności procesów legislacyjnych i rozpoczęła etap prekonsultacji.',
    aiSummary: 'Nowy projekt ustawy ma zwiększyć przejrzystość procesu legislacyjnego. Zakłada obowiązek publikacji wszystkich dokumentów w czasie rzeczywistym oraz stworzenie centralnego portalu do śledzenia prac nad ustawami. Etap: prekonsultacje.',
    aiDetailedSummary: `Analiza projektu ustawy o transparentności:

GŁÓWNE ZAŁOŻENIA:
• Utworzenie Centralnego Portalu Legislacyjnego dostępnego dla wszystkich obywateli
• Publikacja dokumentów w czasie rzeczywistym - maksymalnie 24h od powstania
• Obowiązek nagrywania i publikowania wszystkich posiedzeń komisji sejmowych
• Jawność procesu tworzenia Oceny Skutków Regulacji (OSR)

NOWE OBOWIĄZKI DLA MINISTERSTW:
• Publikowanie harmonogramu prac nad każdym projektem
• Udostępnianie wszystkich opinii i stanowisk, w tym wewnętrznych
• Informowanie o spotkaniach z lobbystami i grupami interesu
• Raportowanie kosztów przygotowania każdego projektu ustawy

KORZYŚCI DLA OBYWATELI:
• Możliwość śledzenia dowolnego projektu ustawy od początku do końca
• Subskrypcja powiadomień o zmianach w interesujących projektach
• Dostęp do pełnej dokumentacji, nie tylko wersji finalnych
• Możliwość zgłaszania uwag na każdym etapie procesu

WYZWANIA WDROŻENIOWE:
• Konieczność modernizacji systemów IT w całej administracji
• Szkolenie urzędników z nowych obowiązków publikacyjnych
• Integracja z istniejącymi systemami (RCL, Sejm, Senat)
• Szacowany koszt wdrożenia: 150-200 mln zł

OCZEKIWANE EFEKTY:
• Zwiększenie zaufania obywateli do procesu legislacyjnego
• Ograniczenie lobbingu "tylnymi drzwiami"
• Lepsze prawo dzięki szerszym konsultacjom`,
    createdAt: new Date('2024-12-06T09:00:00'),
  },
  {
    id: '4',
    ustawaId: '4',
    ustawa: getUstawa('4'),
    type: 'document_added',
    title: 'Opublikowano Ocenę Skutków Regulacji',
    content: 'Do projektu ustawy o cyfrowej tożsamości obywatela dodano szczegółową Ocenę Skutków Regulacji (OSR), zawierającą analizę wpływu na obywateli i przedsiębiorców.',
    aiSummary: 'OSR projektu e-Tożsamości wskazuje na potencjalne oszczędności 2 mld zł rocznie dla administracji. Wdrożenie cyfrowego portfela obywatela ma objąć 30 mln Polaków do 2027 r. Główne ryzyka: koszty wdrożenia i cyberbezpieczeństwo.',
    aiDetailedSummary: `Szczegółowa analiza Oceny Skutków Regulacji (OSR):

OSZCZĘDNOŚCI DLA ADMINISTRACJI:
• Eliminacja papierowych dokumentów: 800 mln zł rocznie
• Automatyzacja procesów weryfikacji tożsamości: 600 mln zł rocznie
• Redukcja kosztów obsługi klienta: 400 mln zł rocznie
• Zmniejszenie liczby wizyt w urzędach: 200 mln zł rocznie

KORZYŚCI DLA OBYWATELI:
• Cyfrowy portfel z dowodem osobistym, prawem jazdy, legitymacją studencką
• Możliwość załatwiania wszystkich spraw urzędowych online
• Automatyczne przedłużanie dokumentów bez wizyty w urzędzie
• Bezpieczne udostępnianie danych firmom (np. przy wynajmie samochodu)

HARMONOGRAM WDROŻENIA:
• Q2 2025: uruchomienie aplikacji mObywatel 3.0
• Q4 2025: integracja z systemami bankowymi
• Q2 2026: pełna funkcjonalność e-dowodu
• Q4 2027: zasięg 30 mln użytkowników

ZIDENTYFIKOWANE RYZYKA:
• Koszty wdrożenia (1,2 mld zł) mogą przekroczyć zakładany budżet
• Wymogi cyberbezpieczeństwa mogą opóźnić projekt
• Wykluczenie cyfrowe osób starszych - potrzeba równoległych rozwiązań
• Zależność od dostawców technologii (ryzyko vendor lock-in)

REKOMENDACJE MINISTERSTWA:
• Etapowe wdrożenie z pilotażem w 3 województwach
• Dodatkowe środki na kampanię edukacyjną
• Utworzenie punktów pomocy cyfrowej w każdej gminie`,
    createdAt: new Date('2024-12-04T14:20:00'),
    sourceUrl: 'https://rcl.gov.pl/projekty/ud789/osr',
    documentVersion: { id: '4-2', version: '1.1', date: new Date('2024-11-05'), url: '/documents/e-tozsamosc-v1.1.pdf', description: 'Po uzgodnieniach' },
  },
  {
    id: '5',
    ustawaId: '1',
    ustawa: getUstawa('1'),
    type: 'amendment',
    title: 'Nowa wersja projektu po uwagach resortowych',
    content: 'Opublikowano zaktualizowaną wersję projektu ustawy uwzględniającą uwagi zgłoszone przez Ministerstwo Sprawiedliwości i UODO.',
    aiSummary: 'Zaktualizowany projekt RODO uwzględnia 47 uwag resortowych. Kluczowe zmiany: doprecyzowano definicję "danych wrażliwych", wydłużono okres przejściowy z 12 do 18 miesięcy, dodano wyjątki dla małych przedsiębiorstw.',
    aiDetailedSummary: `Szczegółowa analiza zmian w projekcie:

UWAGI RESORTOWE - PODSUMOWANIE:
• Ministerstwo Sprawiedliwości: 23 uwagi (18 uwzględnionych)
• UODO: 15 uwag (12 uwzględnionych)
• Ministerstwo Rozwoju: 9 uwag (7 uwzględnionych)
• Inne resorty: 10 uwag (10 uwzględnionych)

KLUCZOWE ZMIANY W DEFINICJACH:
• "Dane wrażliwe" - rozszerzono o dane biometryczne i genetyczne
• "Administrator danych" - doprecyzowano odpowiedzialność przy współadministrowaniu
• "Profilowanie" - dodano nową definicję zgodną z AI Act

ZMIANY DLA PRZEDSIĘBIORCÓW:
• Okres przejściowy wydłużony z 12 do 18 miesięcy
• Firmy do 10 pracowników zwolnione z obowiązku prowadzenia rejestru czynności przetwarzania
• Uproszczona procedura zgłaszania naruszeń dla mikroprzedsiębiorstw
• Niższe kary dla podmiotów o obrotach poniżej 2 mln zł rocznie

WZMOCNIONA OCHRONA DZIECI:
• Zgoda na przetwarzanie danych od 16 lat (wcześniej 13 lat)
• Obowiązkowa weryfikacja wieku przy usługach online
• Zakaz profilowania osób poniżej 18 roku życia

NOWE UPRAWNIENIA UODO:
• Możliwość kontroli bez zapowiedzi w przypadku podejrzenia poważnych naruszeń
• Prawo do nakładania kar w trybie natychmiastowym
• Współpraca transgraniczna z organami ochrony danych innych państw UE

CO DALEJ:
• Projekt trafi na Komitet Stały Rady Ministrów
• Planowane przyjęcie przez rząd: styczeń 2025`,
    createdAt: new Date('2024-12-03T11:15:00'),
    documentVersion: { id: '1-2', version: '1.1', date: new Date('2024-11-22'), url: '/documents/nowelizacja-rodo-v1.1.pdf', description: 'Po uwagach resortowych' },
    diff: {
      fileName: 'Art. 5 - Definicje',
      additions: [
        '2a. "Dane wrażliwe" oznaczają dane osobowe ujawniające pochodzenie rasowe lub etniczne, poglądy polityczne, przekonania religijne...',
        '2b. Okres przejściowy dla podmiotów przetwarzających dane wynosi 18 miesięcy od dnia wejścia w życie ustawy.',
      ],
      deletions: [
        '2a. Okres przejściowy wynosi 12 miesięcy od dnia wejścia w życie ustawy.',
      ],
    },
  },
  {
    id: '6',
    ustawaId: '5',
    ustawa: getUstawa('5'),
    type: 'status_change',
    title: 'Ustawa podpisana przez Prezydenta',
    content: 'Prezydent RP podpisał ustawę o sztucznej inteligencji w administracji publicznej. Ustawa wejdzie w życie 1 stycznia 2025 r.',
    aiSummary: 'Ustawa o AI w administracji wchodzi w życie 1.01.2025. Urzędy będą mogły wykorzystywać AI do obsługi petentów, ale z obowiązkiem informowania o tym obywateli. Zakaz podejmowania automatycznych decyzji bez udziału człowieka w sprawach istotnych.',
    aiDetailedSummary: `Pełna analiza uchwalonej ustawy o AI w administracji:

GŁÓWNE ZAŁOŻENIA USTAWY:
• Administracja publiczna może wykorzystywać AI do automatyzacji rutynowych zadań
• Obywatel musi być informowany, gdy kontaktuje się z systemem AI
• Decyzje w sprawach istotnych (świadczenia, zezwolenia, kary) wymagają udziału człowieka
• Każda decyzja wydana z pomocą AI musi być weryfikowalna przez urzędnika

DOZWOLONE ZASTOSOWANIA AI:
• Chatboty informacyjne na stronach urzędów
• Automatyczne sortowanie i kierowanie wniosków
• Analiza dokumentów pod kątem kompletności
• Tłumaczenie dokumentów na języki mniejszości
• Transkrypcja rozmów telefonicznych

ZAKAZANE ZASTOSOWANIA:
• Automatyczne odmowy świadczeń bez kontroli człowieka
• Profilowanie obywateli w celu oceny ryzyka (social scoring)
• Rozpoznawanie twarzy w przestrzeni publicznej
• Podejmowanie decyzji kadrowych wobec urzędników

WYMOGI TECHNICZNE:
• Systemy AI muszą być certyfikowane przez NASK
• Obowiązkowe logowanie wszystkich decyzji AI
• Audyt algorytmów co 12 miesięcy
• Możliwość wyjaśnienia działania systemu na żądanie obywatela

ODPOWIEDZIALNOŚĆ:
• Za błędy AI odpowiada organ administracji, nie dostawca technologii
• Obywatel może żądać ponownego rozpatrzenia sprawy przez człowieka
• Organ ma 14 dni na odpowiedź na skargę dotyczącą decyzji AI

WEJŚCIE W ŻYCIE:
• 1 stycznia 2025 - przepisy ogólne
• 1 lipca 2025 - obowiązek certyfikacji systemów
• 1 stycznia 2026 - pełna implementacja`,
    createdAt: new Date('2024-11-20T12:00:00'),
  },
  {
    id: '7',
    ustawaId: '6',
    ustawa: getUstawa('6'),
    type: 'status_change',
    title: 'Projekt przekazany do Senatu',
    content: 'Po uchwaleniu przez Sejm, projekt ustawy o cyberbezpieczeństwie infrastruktury krytycznej został przekazany do Senatu.',
    aiSummary: 'Ustawa o cyberbezpieczeństwie trafiła do Senatu. Nakłada na operatorów infrastruktury krytycznej obowiązek wdrożenia systemów wykrywania zagrożeń i raportowania incydentów w ciągu 24h. Przewiduje kary do 10 mln zł za naruszenia.',
    createdAt: new Date('2024-12-05T18:00:00'),
    sourceUrl: 'https://senat.gov.pl/druk/567',
  },
  {
    id: '8',
    ustawaId: '6',
    ustawa: getUstawa('6'),
    type: 'vote_result',
    title: 'Sejm uchwalił ustawę',
    content: 'Sejm przyjął ustawę o cyberbezpieczeństwie infrastruktury krytycznej. Głosowanie: 389 za, 42 przeciw, 18 wstrzymujących się.',
    aiSummary: 'Ustawa przeszła przez Sejm z dużym poparciem. Kluczowe przepisy: obowiązkowe audyty bezpieczeństwa co 2 lata, utworzenie Centrum Reagowania na Incydenty Cybernetyczne, wymóg zatrudnienia specjalistów ds. cyberbezpieczeństwa.',
    createdAt: new Date('2024-12-02T17:30:00'),
  },
  {
    id: '9',
    ustawaId: '7',
    ustawa: getUstawa('7'),
    type: 'status_change',
    title: 'Ustawa oczekuje na podpis Prezydenta',
    content: 'Senat nie wniósł poprawek do ustawy o elektronicznym głosowaniu. Ustawa została przekazana Prezydentowi do podpisu.',
    aiSummary: 'e-Głosowanie czeka na podpis Prezydenta. Pilotaż obejmie 50 gmin w wyborach 2026. System będzie wykorzystywał blockchain do weryfikacji głosów. Obywatele zachowają możliwość głosowania tradycyjnego.',
    createdAt: new Date('2024-12-04T14:00:00'),
  },
  {
    id: '10',
    ustawaId: '8',
    ustawa: getUstawa('8'),
    type: 'consultation_opened',
    title: 'Ruszyły konsultacje społeczne',
    content: 'Ministerstwo Cyfryzacji rozpoczęło konsultacje społeczne projektu ustawy o otwartych danych publicznych. Konsultacje potrwają do 15 stycznia 2025 r.',
    aiSummary: 'Konsultacje ustawy o otwartych danych. Projekt rozszerza katalog danych do udostępnienia o: dane meteorologiczne, statystyki kryminalne, wyniki badań naukowych finansowanych publicznie. Firmy będą mogły je wykorzystywać komercyjnie.',
    createdAt: new Date('2024-12-06T08:00:00'),
    sourceUrl: 'https://rcl.gov.pl/projekty/ud456',
  },
  {
    id: '11',
    ustawaId: '8',
    ustawa: getUstawa('8'),
    type: 'document_added',
    title: 'Dodano analizę porównawczą z krajami UE',
    content: 'Do projektu dołączono szczegółową analizę rozwiązań stosowanych w innych krajach Unii Europejskiej.',
    aiSummary: 'Analiza pokazuje, że Polska jest w tyle za liderami (Estonia, Holandia) w dostępności danych publicznych. Nowa ustawa ma nas przybliżyć do standardów UE. Przewidywane korzyści ekonomiczne: 500 mln zł rocznie dla sektora prywatnego.',
    createdAt: new Date('2024-12-01T10:00:00'),
  },
  {
    id: '12',
    ustawaId: '9',
    ustawa: getUstawa('9'),
    type: 'amendment',
    title: 'Uwzględniono uwagi branży IT',
    content: 'Po spotkaniach z przedstawicielami branży IT, do projektu wprowadzono zmiany dotyczące integracji z istniejącymi systemami.',
    aiSummary: 'Zmiany w e-Zamówienia 2.0 po konsultacjach z branżą: wydłużenie okresu przejściowego do 24 miesięcy, API zgodne ze standardami OpenAPI 3.0, możliwość integracji z popularnymi systemami ERP. Szacowany koszt wdrożenia dla firm: 50-200 tys. zł.',
    createdAt: new Date('2024-12-03T15:45:00'),
    diff: {
      fileName: 'Art. 12 - Integracja systemów',
      additions: [
        '3. Interfejs API platformy musi być zgodny ze standardem OpenAPI 3.0 lub nowszym.',
        '4. Platforma zapewnia możliwość integracji z systemami ERP poprzez dedykowane moduły.',
        '5. Okres przejściowy dla podmiotów zobowiązanych wynosi 24 miesiące od dnia wejścia w życie ustawy.',
      ],
      deletions: [
        '3. Okres przejściowy dla podmiotów zobowiązanych wynosi 12 miesięcy od dnia wejścia w życie ustawy.',
      ],
    },
  },
  {
    id: '13',
    ustawaId: '10',
    ustawa: getUstawa('10'),
    type: 'status_change',
    title: 'Sejm odrzucił projekt w I czytaniu',
    content: 'Sejm odrzucił projekt ustawy o przeciwdziałaniu dezinformacji. Za odrzuceniem głosowało 245 posłów, przeciw 198, wstrzymało się 12.',
    aiSummary: 'Ustawa o dezinformacji odrzucona. Główne zarzuty: zbyt szeroka definicja dezinformacji, ryzyko cenzury, brak precyzyjnych mechanizmów odwoławczych. Część posłów zapowiedziała prace nad nowym, poprawionym projektem.',
    createdAt: new Date('2024-10-15T19:30:00'),
    sourceUrl: 'https://sejm.gov.pl/druk/123',
  },
  {
    id: '14',
    ustawaId: '11',
    ustawa: getUstawa('11'),
    type: 'status_change',
    title: 'Rozpoczęto prace nad projektem',
    content: 'Ministerstwo Kultury i Dziedzictwa Narodowego ogłosiło rozpoczęcie prac nad projektem ustawy o cyfrowym dziedzictwie kulturowym.',
    aiSummary: 'Nowy projekt ma zapewnić digitalizację 10 mln obiektów muzealnych i archiwalnych do 2030 r. Planowany budżet: 2 mld zł. Współpraca z Google Arts & Culture i Europeana. Darmowy dostęp dla obywateli.',
    createdAt: new Date('2024-12-02T11:00:00'),
  },
  {
    id: '15',
    ustawaId: '12',
    ustawa: getUstawa('12'),
    type: 'vote_result',
    title: 'Komisja Zdrowia rekomenduje przyjęcie',
    content: 'Sejmowa Komisja Zdrowia pozytywnie zaopiniowała projekt ustawy o telemedycynie i zdalnych usługach zdrowotnych.',
    aiSummary: 'Komisja poparła ustawę o telemedycynie. Kluczowe zapisy: teleporady refundowane przez NFZ, e-recepty na leki przewlekłe bez wizyty, monitoring pacjentów przez urządzenia IoT. Przewidywane oszczędności: 1,5 mld zł rocznie.',
    createdAt: new Date('2024-12-05T13:20:00'),
  },
  {
    id: '16',
    ustawaId: '12',
    ustawa: getUstawa('12'),
    type: 'document_added',
    title: 'Opublikowano raport z pilotażu',
    content: 'Ministerstwo Zdrowia opublikowało raport z pilotażowego programu telemedycyny przeprowadzonego w 5 województwach.',
    aiSummary: 'Pilotaż telemedycyny: 85% pacjentów zadowolonych, średni czas oczekiwania na teleporadę 2 dni (vs 14 dni na wizytę stacjonarną). Wykryto 12% więcej chorób przewlekłych dzięki regularnemu monitoringowi. Rekomendacja: wdrożenie ogólnopolskie.',
    createdAt: new Date('2024-11-28T09:00:00'),
    sourceUrl: 'https://gov.pl/zdrowie/raport-telemedycyna',
  },
  {
    id: '17',
    ustawaId: '2',
    ustawa: getUstawa('2'),
    type: 'amendment',
    title: 'Poprawki zgłoszone przez opozycję',
    content: 'Podczas II czytania zgłoszono 15 poprawek dotyczących terminów wdrożenia i zakresu podmiotów objętych ustawą.',
    aiSummary: 'Poprawki opozycji: wydłużenie terminu wdrożenia dla małych gmin do 2027 r., wyłączenie spod ustawy stron o ruchu poniżej 1000 wizyt miesięcznie, dodatkowe środki na szkolenia urzędników. 7 poprawek przyjęto.',
    createdAt: new Date('2024-12-04T14:00:00'),
    diff: {
      fileName: 'Art. 8 - Terminy wdrożenia',
      additions: [
        '2a. Gminy o liczbie mieszkańców poniżej 20 000 są zobowiązane do wdrożenia przepisów do dnia 31 grudnia 2027 r.',
        '2b. Strony internetowe o średnim miesięcznym ruchu poniżej 1000 unikalnych użytkowników są wyłączone z obowiązku określonego w ust. 1.',
        '4. Na szkolenia urzędników w zakresie dostępności cyfrowej przeznacza się środki w wysokości 50 mln zł rocznie.',
      ],
      deletions: [
        '2. Wszystkie podmioty publiczne są zobowiązane do wdrożenia przepisów do dnia 31 grudnia 2025 r.',
      ],
    },
  },
  {
    id: '18',
    ustawaId: '4',
    ustawa: getUstawa('4'),
    type: 'consultation_closed',
    title: 'Zakończono konsultacje międzyresortowe',
    content: 'Ministerstwo Cyfryzacji zakończyło konsultacje międzyresortowe projektu e-Tożsamości. Wpłynęło 156 uwag od 12 resortów.',
    aiSummary: 'Konsultacje e-Tożsamości: 156 uwag, 89 uwzględnionych. MSWiA żąda silniejszych zabezpieczeń biometrycznych, MF chce integracji z systemem podatkowym, MS postuluje wykorzystanie do podpisów elektronicznych w sądach.',
    createdAt: new Date('2024-12-02T16:00:00'),
  },
  {
    id: '19',
    ustawaId: '3',
    ustawa: getUstawa('3'),
    type: 'document_added',
    title: 'Dodano koncepcję portalu legislacyjnego',
    content: 'Do materiałów prekonsultacyjnych dodano wstępną koncepcję centralnego portalu do śledzenia procesu legislacyjnego.',
    aiSummary: 'Koncepcja portalu: śledzenie ustaw w czasie rzeczywistym, powiadomienia push o zmianach, wizualizacja procesu legislacyjnego w stylu "train schedule", możliwość zgłaszania uwag online, integracja z ePUAP.',
    createdAt: new Date('2024-12-05T10:00:00'),
  },
  {
    id: '20',
    ustawaId: '5',
    ustawa: getUstawa('5'),
    type: 'document_added',
    title: 'Opublikowano wytyczne dla urzędów',
    content: 'Ministerstwo Cyfryzacji wydało szczegółowe wytyczne dotyczące wdrażania AI w urzędach administracji publicznej.',
    aiSummary: 'Wytyczne AI w urzędach: obowiązkowy audyt algorytmów co rok, zakaz profilowania obywateli bez ich zgody, prawo do wyjaśnienia decyzji podjętej z udziałem AI, szkolenia dla 50 tys. urzędników do końca 2025 r.',
    createdAt: new Date('2024-12-01T08:00:00'),
    sourceUrl: 'https://gov.pl/cyfryzacja/ai-wytyczne',
  },
  {
    id: '21',
    ustawaId: '13',
    ustawa: getUstawa('13'),
    type: 'consultation_opened',
    title: 'Rozpoczęto konsultacje reformy edukacji',
    content: 'MEN rozpoczęło konsultacje społeczne dotyczące zmian w podstawie programowej i wprowadzenia nauki programowania.',
    aiSummary: 'Reforma edukacji: programowanie od 1 klasy, nowa podstawa programowa z naciskiem na kompetencje cyfrowe, szkolenia dla 100 tys. nauczycieli. Budżet: 500 mln zł. Konsultacje do końca grudnia.',
    createdAt: new Date('2024-12-04T09:00:00'),
    sourceUrl: 'https://men.gov.pl/konsultacje',
  },
  {
    id: '22',
    ustawaId: '14',
    ustawa: getUstawa('14'),
    type: 'vote_result',
    title: 'Komisja infrastruktury przyjęła projekt',
    content: 'Sejmowa Komisja Infrastruktury przyjęła projekt ustawy o elektromobilności z poprawkami.',
    aiSummary: 'Elektromobilność: obowiązek instalacji ładowarek przy nowych budynkach, ulgi podatkowe dla firm kupujących auta elektryczne, cel: 1 mln pojazdów EV do 2030 r. Poprawka: wydłużenie ulg o 2 lata.',
    createdAt: new Date('2024-12-03T15:00:00'),
  },
  {
    id: '23',
    ustawaId: '15',
    ustawa: getUstawa('15'),
    type: 'status_change',
    title: 'System kaucyjny wchodzi w życie',
    content: 'Ustawa o systemie kaucyjnym została opublikowana w Dzienniku Ustaw. System startuje 1 stycznia 2025 r.',
    aiSummary: 'System kaucyjny: 50 gr za butelki plastikowe i puszki, 1 zł za butelki szklane wielorazowe. Zwrot w sklepach powyżej 200 m². Cel: 90% recyklingu opakowań do 2029 r.',
    createdAt: new Date('2024-11-15T12:00:00'),
    sourceUrl: 'https://dziennikustaw.gov.pl/2024/1234',
  },
  {
    id: '24',
    ustawaId: '16',
    ustawa: getUstawa('16'),
    type: 'document_added',
    title: 'Analiza kosztów programu Rodzina 500+ Plus',
    content: 'MRiPS opublikowało analizę kosztów rozszerzenia programu wsparcia rodzin.',
    aiSummary: 'Nowe świadczenia: 800 zł na trzecie i kolejne dziecko, bon wakacyjny 1000 zł/rok na rodzinę. Koszt roczny: 8 mld zł. Objętych: 1,2 mln rodzin wielodzietnych.',
    createdAt: new Date('2024-12-05T11:00:00'),
  },
  {
    id: '25',
    ustawaId: '17',
    ustawa: getUstawa('17'),
    type: 'status_change',
    title: 'Prezydent podpisał ustawę o płacy minimalnej',
    content: 'Prezydent podpisał ustawę ustalającą płacę minimalną na 2025 rok.',
    aiSummary: 'Płaca minimalna 2025: 4666 zł brutto (wzrost 7,5%). Stawka godzinowa: 30,50 zł. Wejście w życie: 1 stycznia 2025. Objętych: ok. 3 mln pracowników.',
    createdAt: new Date('2024-11-28T14:00:00'),
    sourceUrl: 'https://prezydent.pl/aktualnosci/ustawy/placa-minimalna-2025',
  },
  {
    id: '26',
    ustawaId: '18',
    ustawa: getUstawa('18'),
    type: 'vote_result',
    title: 'Senat debatuje nad ochroną zwierząt',
    content: 'Senat rozpoczął debatę nad ustawą o ochronie zwierząt domowych. Zgłoszono 8 poprawek.',
    aiSummary: 'Poprawki Senatu: podwyższenie kar do 8 lat (z 5), rejestr sprawców online, obowiązkowe czipowanie psów, zakaz trzymania na łańcuchu powyżej 12h. Głosowanie w czwartek.',
    createdAt: new Date('2024-12-04T10:00:00'),
  },
  {
    id: '27',
    ustawaId: '19',
    ustawa: getUstawa('19'),
    type: 'consultation_opened',
    title: 'Konsultacje programu rozwoju wsi',
    content: 'MRiRW rozpoczęło konsultacje programu wsparcia dla małych gospodarstw.',
    aiSummary: 'Program Rozwój Wsi: dopłaty do 50 tys. zł dla gospodarstw do 10 ha, wsparcie agroturystyki, premie dla młodych rolników. Budżet: 3 mld zł z funduszy UE.',
    createdAt: new Date('2024-12-06T08:00:00'),
  },
  {
    id: '28',
    ustawaId: '20',
    ustawa: getUstawa('20'),
    type: 'document_added',
    title: 'Raport o rynku funduszy inwestycyjnych',
    content: 'KNF opublikowała raport o stanie rynku funduszy inwestycyjnych w Polsce.',
    aiSummary: 'Rynek funduszy: aktywa 350 mld zł, 4 mln inwestorów. Nowe regulacje: limit kosztów 1,5%, obowiązkowa dywersyfikacja, uproszczony prospekt dla klientów detalicznych.',
    createdAt: new Date('2024-12-02T14:00:00'),
    sourceUrl: 'https://knf.gov.pl/raporty/fundusze-2024',
  },
  {
    id: '29',
    ustawaId: '21',
    ustawa: getUstawa('21'),
    type: 'status_change',
    title: 'Rozpoczęto prace nad podatkiem cyfrowym',
    content: 'Ministerstwo Finansów przedstawiło założenia podatku od gigantów technologicznych.',
    aiSummary: 'Podatek cyfrowy: 3% od przychodów firm tech powyżej 750 mln EUR obrotu globalnego. Objęte: reklamy online, pośrednictwo, sprzedaż danych. Szacowane wpływy: 2 mld zł rocznie.',
    createdAt: new Date('2024-12-05T09:00:00'),
  },
  {
    id: '30',
    ustawaId: '22',
    ustawa: getUstawa('22'),
    type: 'vote_result',
    title: 'Sejm przyjął ustawę o sporcie powszechnym',
    content: 'Sejm uchwalił ustawę Sport dla Wszystkich. Za: 398, przeciw: 12, wstrzymało się: 35.',
    aiSummary: 'Sport dla Wszystkich: budowa 500 orlików rocznie, darmowy dostęp do basenów dla dzieci, vouchery sportowe 500 zł/rok dla seniorów. Budżet: 2 mld zł.',
    createdAt: new Date('2024-12-03T17:00:00'),
  },
  {
    id: '31',
    ustawaId: '23',
    ustawa: getUstawa('23'),
    type: 'consultation_opened',
    title: 'Konsultacje ustawy o ekoturystyce',
    content: 'MSiT rozpoczęło konsultacje projektu wspierającego zrównoważoną turystykę.',
    aiSummary: 'Ekoturystyka: certyfikat Zielony Szlak dla obiektów eko, ulgi podatkowe dla agroturystyki, ochrona szlaków turystycznych, limit turystów w parkach narodowych.',
    createdAt: new Date('2024-12-04T10:00:00'),
  },
  {
    id: '32',
    ustawaId: '24',
    ustawa: getUstawa('24'),
    type: 'status_change',
    title: 'Senat przyjął ustawę OZE bez poprawek',
    content: 'Senat nie wniósł poprawek do nowelizacji ustawy o odnawialnych źródłach energii.',
    aiSummary: 'OZE 2.0: net-billing zastąpi net-metering, nowe taryfy dla prosumentów, wsparcie dla magazynów energii, uproszczenia dla instalacji do 50 kW. Wejście w życie: 1.04.2025.',
    createdAt: new Date('2024-12-05T16:00:00'),
  },
  {
    id: '33',
    ustawaId: '25',
    ustawa: getUstawa('25'),
    type: 'document_added',
    title: 'Mapa stref czystego powietrza',
    content: 'MKiŚ opublikowało mapę planowanych stref czystego transportu.',
    aiSummary: 'Strefy czyste: 15 miast do 2026 r., zakaz wjazdu diesli starszych niż Euro 5, dopłaty do wymiany aut 15-30 tys. zł, rozwój komunikacji zeroemisyjnej.',
    createdAt: new Date('2024-12-02T12:00:00'),
    sourceUrl: 'https://gov.pl/klimat/strefy-czyste',
  },
  {
    id: '34',
    ustawaId: '26',
    ustawa: getUstawa('26'),
    type: 'consultation_opened',
    title: 'Konsultacje programu Mieszkanie+',
    content: 'MRiT rozpoczęło konsultacje nowego programu wsparcia budownictwa mieszkaniowego.',
    aiSummary: 'Mieszkanie+: budowa 100 tys. mieszkań na wynajem rocznie, czynsz max 20 zł/m², pierwszeństwo dla młodych rodzin, możliwość wykupu po 10 latach.',
    createdAt: new Date('2024-12-06T10:00:00'),
  },
  {
    id: '35',
    ustawaId: '27',
    ustawa: getUstawa('27'),
    type: 'vote_result',
    title: 'Komisja przyjęła projekt uproszczenia budowlanki',
    content: 'Komisja Infrastruktury pozytywnie zaopiniowała projekt cyfryzacji procesu budowlanego.',
    aiSummary: 'Łatwiejsze budowanie: e-pozwolenia w 30 dni (z 65), jeden wniosek do wszystkich urzędów, automatyczna weryfikacja zgodności z planem, aplikacja mobilna do zgłoszeń.',
    createdAt: new Date('2024-12-04T14:00:00'),
  },
  {
    id: '36',
    ustawaId: '28',
    ustawa: getUstawa('28'),
    type: 'status_change',
    title: 'Ustawa o bezpiecznym transporcie u Prezydenta',
    content: 'Prezydent ma 21 dni na podpisanie ustawy o bezpieczeństwie w transporcie publicznym.',
    aiSummary: 'Bezpieczny transport: kamery we wszystkich pojazdach, przycisk alarmowy, szkolenia dla kierowców, standardy oświetlenia przystanków. Wdrożenie: 24 miesiące.',
    createdAt: new Date('2024-12-03T11:00:00'),
  },
  {
    id: '37',
    ustawaId: '29',
    ustawa: getUstawa('29'),
    type: 'document_added',
    title: 'Harmonogram budowy kolei CPK',
    content: 'Spółka CPK przedstawiła szczegółowy harmonogram budowy linii kolejowych.',
    aiSummary: 'Kolej CPK: 12 tras, 1800 km nowych torów, prędkość do 350 km/h, Warszawa-Łódź w 45 min, Warszawa-Wrocław w 2h. Budowa: 2025-2034, koszt: 120 mld zł.',
    createdAt: new Date('2024-12-05T13:00:00'),
    sourceUrl: 'https://cpk.pl/harmonogram-kolej',
  },
  {
    id: '38',
    ustawaId: '30',
    ustawa: getUstawa('30'),
    type: 'consultation_opened',
    title: 'Konsultacje ochrony dzieci online',
    content: 'MC rozpoczęło konsultacje projektu o ochronie małoletnich w internecie.',
    aiSummary: 'Bezpieczne dzieci online: weryfikacja wieku na platformach 18+, zakaz reklam dla dzieci, obowiązkowa kontrola rodzicielska, kary do 4% obrotu za naruszenia.',
    createdAt: new Date('2024-12-06T09:00:00'),
  },
  {
    id: '39',
    ustawaId: '31',
    ustawa: getUstawa('31'),
    type: 'vote_result',
    title: 'Sejm uchwalił ustawę o języku migowym',
    content: 'Sejm przyjął ustawę uznającą polski język migowy za język urzędowy.',
    aiSummary: 'Język migowy: status języka urzędowego, tłumacze w urzędach powyżej 50 tys. mieszkańców, napisy na żywo w TV publicznej, nauka PJM w szkołach.',
    createdAt: new Date('2024-12-04T18:00:00'),
  },
  {
    id: '40',
    ustawaId: '32',
    ustawa: getUstawa('32'),
    type: 'status_change',
    title: 'Senat debatuje o prawach pacjenta',
    content: 'Senat rozpoczął prace nad nowelizacją ustawy o prawach pacjenta.',
    aiSummary: 'Prawa pacjenta 2.0: dostęp do dokumentacji online w 24h, prawo do drugiej opinii refundowanej, rzecznik praw pacjenta w każdym szpitalu, teleporady w POZ.',
    createdAt: new Date('2024-12-05T10:00:00'),
  },
  {
    id: '41',
    ustawaId: '33',
    ustawa: getUstawa('33'),
    type: 'status_change',
    title: 'Nowe leki na liście refundacyjnej',
    content: 'Minister Zdrowia podpisał rozporządzenie rozszerzające listę leków refundowanych.',
    aiSummary: 'Refundacja: 45 nowych leków, w tym 12 onkologicznych, 8 kardiologicznych, leki na SMA i mukowiscydozę. Koszt dla NFZ: 800 mln zł rocznie.',
    createdAt: new Date('2024-11-30T14:00:00'),
    sourceUrl: 'https://mz.gov.pl/refundacja/lista-grudzien-2024',
  },
  {
    id: '42',
    ustawaId: '34',
    ustawa: getUstawa('34'),
    type: 'consultation_opened',
    title: 'Konsultacje reformy szkolnictwa wyższego',
    content: 'MNiSW rozpoczęło konsultacje zmian w finansowaniu uczelni.',
    aiSummary: 'Reforma uczelni: algorytm finansowania oparty na jakości, granty dla młodych naukowców do 100 tys. zł, mobilność międzyuczelniana, cyfryzacja dziekanatów.',
    createdAt: new Date('2024-12-04T11:00:00'),
  },
  {
    id: '43',
    ustawaId: '35',
    ustawa: getUstawa('35'),
    type: 'document_added',
    title: 'Strategia rozwoju nauki 2030',
    content: 'MNiSW opublikowało długoterminową strategię wspierania badań naukowych.',
    aiSummary: 'Nauka 2030: wydatki na R&D do 2% PKB, 50 nowych centrów badawczych, współpraca uczelnie-przemysł, priorytet: AI, biotech, energia. Budżet: 100 mld zł do 2030.',
    createdAt: new Date('2024-12-03T09:00:00'),
  },
  {
    id: '44',
    ustawaId: '36',
    ustawa: getUstawa('36'),
    type: 'status_change',
    title: 'Prekonsultacje ustawy o zabytkach',
    content: 'MKiDN rozpoczęło prekonsultacje zmian w ochronie zabytków.',
    aiSummary: 'Ochrona zabytków: kary do 2 mln zł za zniszczenie, rejestr zabytków online, dotacje na remonty do 80% kosztów, szybsza procedura wpisu do rejestru.',
    createdAt: new Date('2024-12-05T08:00:00'),
  },
  {
    id: '45',
    ustawaId: '37',
    ustawa: getUstawa('37'),
    type: 'vote_result',
    title: 'Sejm debatuje o wsparciu dla artystów',
    content: 'Trwa II czytanie projektu ustawy o systemie ubezpieczeń dla artystów.',
    aiSummary: 'Wsparcie artystów: składki ZUS proporcjonalne do dochodu, fundusz emerytalny dla twórców, ubezpieczenie zdrowotne dla freelancerów, bon kulturalny 300 zł/rok.',
    createdAt: new Date('2024-12-04T16:00:00'),
  },
  {
    id: '46',
    ustawaId: '38',
    ustawa: getUstawa('38'),
    type: 'consultation_opened',
    title: 'Konsultacje praw konsumenta',
    content: 'UOKiK rozpoczął konsultacje nowelizacji ustawy o prawach konsumenta.',
    aiSummary: 'Prawa konsumenta: prawo do naprawy (Right to Repair), wydłużona gwarancja do 3 lat, zakaz planowanego postarzania produktów, łatwiejszy zwrot online.',
    createdAt: new Date('2024-12-06T10:00:00'),
  },
  {
    id: '47',
    ustawaId: '39',
    ustawa: getUstawa('39'),
    type: 'status_change',
    title: 'Ustawa o sygnalistach weszła w życie',
    content: 'Od 1 grudnia obowiązuje ustawa o ochronie osób zgłaszających naruszenia.',
    aiSummary: 'Sygnaliści: ochrona przed zwolnieniem, anonimowe kanały zgłoszeń w firmach 50+, nagrody do 10% odzyskanych środków, zakaz działań odwetowych.',
    createdAt: new Date('2024-11-25T00:00:00'),
    sourceUrl: 'https://dziennikustaw.gov.pl/2024/sygnalisci',
  },
  {
    id: '48',
    ustawaId: '40',
    ustawa: getUstawa('40'),
    type: 'document_added',
    title: 'Raport o pracy platformowej w Polsce',
    content: 'MRiPS opublikowało raport o warunkach pracy przez aplikacje.',
    aiSummary: 'Praca platformowa: 500 tys. pracowników, średnie zarobki 3800 zł/mies., brak urlopów i ubezpieczeń. Propozycja: domniemanie stosunku pracy, minimalna stawka godzinowa.',
    createdAt: new Date('2024-12-02T10:00:00'),
    sourceUrl: 'https://mrips.gov.pl/raporty/praca-platformowa',
  },
  {
    id: '49',
    ustawaId: '13',
    ustawa: getUstawa('13'),
    type: 'document_added',
    title: 'Podstawa programowa z programowania',
    content: 'MEN opublikowało projekt nowej podstawy programowej informatyki.',
    aiSummary: 'Programowanie w szkole: Scratch od klasy 1, Python od klasy 5, algorytmika i AI w liceum, 2h informatyki tygodniowo, laptopy dla uczniów klas 4.',
    createdAt: new Date('2024-12-03T12:00:00'),
  },
  {
    id: '50',
    ustawaId: '14',
    ustawa: getUstawa('14'),
    type: 'amendment',
    title: 'Poprawki do ustawy o elektromobilności',
    content: 'Komisja przyjęła poprawki zwiększające wsparcie dla infrastruktury ładowania.',
    aiSummary: 'Nowe poprawki: 100 tys. punktów ładowania do 2030 (z 50 tys.), dopłaty do wallboxów 5 tys. zł, strefy czyste w miastach 100 tys.+, ulga na zakup EV do 30 tys. zł.',
    createdAt: new Date('2024-12-05T14:00:00'),
    diff: {
      fileName: 'Art. 15 - Infrastruktura ładowania',
      additions: [
        '1. Do 2030 r. na terytorium RP ma funkcjonować co najmniej 100 000 ogólnodostępnych punktów ładowania.',
        '2a. Właściciele budynków mieszkalnych wielorodzinnych mogą ubiegać się o dopłatę do wallboxa w wysokości do 5 000 zł.',
        '3. Strefy czystego transportu wprowadza się obowiązkowo w miastach powyżej 100 000 mieszkańców.',
      ],
      deletions: [
        '1. Do 2030 r. na terytorium RP ma funkcjonować co najmniej 50 000 ogólnodostępnych punktów ładowania.',
        '3. Strefy czystego transportu mogą być wprowadzone w miastach powyżej 250 000 mieszkańców.',
      ],
    },
  },
  {
    id: '51',
    ustawaId: '1',
    ustawa: getUstawa('1'),
    type: 'amendment',
    title: 'Zmiana definicji administratora danych',
    content: 'Doprecyzowano definicję administratora danych osobowych w kontekście przetwarzania w chmurze.',
    aiSummary: 'Nowa definicja uwzględnia scenariusze cloud computing: jasne rozgraniczenie odpowiedzialności między dostawcą usług chmurowych a klientem, obowiązek lokalizacji danych na terenie EOG.',
    createdAt: new Date('2024-12-02T09:30:00'),
    diff: {
      fileName: 'Art. 4 - Definicje',
      additions: [
        '7a. "Administrator danych w chmurze" oznacza podmiot, który określa cele i sposoby przetwarzania danych osobowych w infrastrukturze chmurowej.',
        '7b. Dostawca usług chmurowych jest współadministratorem w zakresie bezpieczeństwa infrastruktury.',
        '7c. Dane osobowe obywateli RP muszą być przechowywane na serwerach zlokalizowanych na terytorium Europejskiego Obszaru Gospodarczego.',
      ],
      deletions: [
        '7. "Administrator" oznacza osobę fizyczną lub prawną, która samodzielnie lub wspólnie z innymi ustala cele i sposoby przetwarzania danych osobowych.',
      ],
    },
  },
  {
    id: '52',
    ustawaId: '3',
    ustawa: getUstawa('3'),
    type: 'amendment',
    title: 'Dodano wymóg publikacji w czasie rzeczywistym',
    content: 'Wprowadzono obowiązek publikacji dokumentów legislacyjnych w ciągu 24 godzin od ich powstania.',
    aiSummary: 'Nowy wymóg transparentności: wszystkie dokumenty muszą być publikowane w ciągu 24h, dotyczy to również protokołów z posiedzeń komisji i opinii prawnych.',
    createdAt: new Date('2024-12-04T11:00:00'),
    diff: {
      fileName: 'Art. 6 - Obowiązki publikacyjne',
      additions: [
        '1. Organy uczestniczące w procesie legislacyjnym są zobowiązane do publikacji dokumentów w Centralnym Portalu Legislacyjnym w terminie 24 godzin od ich powstania.',
        '2. Obowiązek, o którym mowa w ust. 1, dotyczy w szczególności: a) projektów ustaw i ich uzasadnień, b) protokołów z posiedzeń komisji, c) opinii prawnych, d) stanowisk resortów.',
        '3. Naruszenie obowiązku publikacji skutkuje karą administracyjną w wysokości do 50 000 zł.',
      ],
      deletions: [
        '1. Dokumenty legislacyjne podlegają publikacji w terminie określonym w regulaminie danego organu.',
      ],
    },
  },
  {
    id: '53',
    ustawaId: '4',
    ustawa: getUstawa('4'),
    type: 'amendment',
    title: 'Wzmocniono zabezpieczenia biometryczne',
    content: 'Na wniosek MSWiA dodano wymóg weryfikacji biometrycznej przy korzystaniu z cyfrowej tożsamości.',
    aiSummary: 'Bezpieczeństwo e-Tożsamości: obowiązkowa weryfikacja biometryczna (odcisk palca lub rozpoznawanie twarzy), limit 3 prób uwierzytelnienia, automatyczna blokada po przekroczeniu.',
    createdAt: new Date('2024-12-01T15:00:00'),
    diff: {
      fileName: 'Art. 18 - Uwierzytelnianie',
      additions: [
        '2a. Korzystanie z cyfrowej tożsamości wymaga weryfikacji biometrycznej użytkownika.',
        '2b. Weryfikacja biometryczna obejmuje: a) rozpoznawanie odcisku palca, lub b) rozpoznawanie twarzy.',
        '2c. Po trzech nieudanych próbach uwierzytelnienia następuje automatyczna blokada dostępu na okres 30 minut.',
        '2d. Dane biometryczne są przechowywane wyłącznie na urządzeniu użytkownika i nie są przekazywane do systemów centralnych.',
      ],
      deletions: [
        '2. Korzystanie z cyfrowej tożsamości wymaga podania numeru PIN.',
      ],
    },
  },
  {
    id: '54',
    ustawaId: '6',
    ustawa: getUstawa('6'),
    type: 'amendment',
    title: 'Skrócono czas raportowania incydentów',
    content: 'Zmniejszono czas na zgłoszenie incydentu cyberbezpieczeństwa z 72 do 24 godzin.',
    aiSummary: 'Szybsza reakcja na cyberataki: obowiązek zgłoszenia incydentu w ciągu 24h (zamiast 72h), kary do 2% obrotu za opóźnienia, utworzenie całodobowej linii alarmowej.',
    createdAt: new Date('2024-12-01T10:00:00'),
    diff: {
      fileName: 'Art. 24 - Zgłaszanie incydentów',
      additions: [
        '1. Operator infrastruktury krytycznej zgłasza incydent cyberbezpieczeństwa do właściwego CSIRT w terminie 24 godzin od jego wykrycia.',
        '3a. Za niedotrzymanie terminu, o którym mowa w ust. 1, organ nakłada karę pieniężną w wysokości do 2% rocznego obrotu podmiotu.',
        '4. CSIRT prowadzi całodobową linię alarmową do przyjmowania zgłoszeń o incydentach.',
      ],
      deletions: [
        '1. Operator infrastruktury krytycznej zgłasza incydent cyberbezpieczeństwa do właściwego CSIRT w terminie 72 godzin od jego wykrycia.',
        '3. Za niedotrzymanie terminu organ może nałożyć karę upomnienia.',
      ],
    },
  },
  {
    id: '55',
    ustawaId: '8',
    ustawa: getUstawa('8'),
    type: 'amendment',
    title: 'Rozszerzono katalog otwartych danych',
    content: 'Dodano dane o jakości powietrza i statystyki edukacyjne do katalogu danych obowiązkowo udostępnianych.',
    aiSummary: 'Więcej otwartych danych: dane o jakości powietrza w czasie rzeczywistym, wyniki egzaminów (zanonimizowane), dane o dostępności lekarzy specjalistów.',
    createdAt: new Date('2024-11-30T14:00:00'),
    diff: {
      fileName: 'Art. 7 - Katalog danych',
      additions: [
        '1. pkt 12) dane o jakości powietrza z wszystkich stacji pomiarowych, aktualizowane co godzinę;',
        '1. pkt 13) zanonimizowane wyniki egzaminów państwowych w podziale na regiony;',
        '1. pkt 14) dane o czasie oczekiwania na wizytę u lekarza specjalisty w podziale na powiaty;',
        '1. pkt 15) rejestry umów zawieranych przez podmioty publiczne o wartości powyżej 5 000 zł.',
      ],
      deletions: [],
    },
  },
  {
    id: '56',
    ustawaId: '12',
    ustawa: getUstawa('12'),
    type: 'amendment',
    title: 'Dodano zasady refundacji teleporad',
    content: 'NFZ będzie refundował teleporady na takich samych zasadach jak wizyty stacjonarne.',
    aiSummary: 'Teleporady refundowane: pełna refundacja jak wizyta stacjonarna, limit 30% teleporad w POZ, obowiązek oferowania alternatywy stacjonarnej.',
    createdAt: new Date('2024-11-25T09:00:00'),
    diff: {
      fileName: 'Art. 34 - Finansowanie',
      additions: [
        '2. Teleporada udzielona przez lekarza POZ jest refundowana przez NFZ w wysokości równej stawce za wizytę stacjonarną.',
        '2a. Udział teleporad w ogólnej liczbie świadczeń POZ nie może przekroczyć 30% w skali roku.',
        '2b. Świadczeniodawca jest zobowiązany do zapewnienia pacjentowi możliwości wyboru formy wizyty - stacjonarnej lub zdalnej.',
        '3. E-recepta wystawiona podczas teleporady ma taką samą moc prawną jak recepta wystawiona podczas wizyty stacjonarnej.',
      ],
      deletions: [
        '2. Teleporady są finansowane ze środków własnych świadczeniodawcy do czasu wydania odrębnych przepisów.',
      ],
    },
  },
  {
    id: '57',
    ustawaId: '15',
    ustawa: getUstawa('15'),
    type: 'amendment',
    title: 'Ustalono wysokość kaucji',
    content: 'Określono ostateczne kwoty kaucji dla różnych rodzajów opakowań.',
    aiSummary: 'Stawki kaucji: 50 gr za butelki PET i puszki aluminiowe, 1 zł za butelki szklane wielorazowe, zwrot w każdym sklepie powyżej 200 m².',
    createdAt: new Date('2024-10-01T12:00:00'),
    diff: {
      fileName: 'Art. 12 - Wysokość kaucji',
      additions: [
        '1. Kaucja za opakowania jednorazowe wynosi 50 groszy i dotyczy: a) butelek z tworzyw sztucznych o pojemności do 3 litrów, b) puszek aluminiowych o pojemności do 1 litra.',
        '2. Kaucja za opakowania wielokrotnego użytku wynosi 1 złoty i dotyczy butelek szklanych o pojemności do 1,5 litra.',
        '3. Sklepy o powierzchni sprzedaży powyżej 200 m² są zobowiązane do przyjmowania zwrotów opakowań objętych systemem kaucyjnym.',
      ],
      deletions: [
        '1. Wysokość kaucji określi minister właściwy do spraw klimatu w drodze rozporządzenia.',
        '2. Sklepy mogą dobrowolnie przystąpić do systemu zwrotu opakowań.',
      ],
    },
  },
  {
    id: '58',
    ustawaId: '18',
    ustawa: getUstawa('18'),
    type: 'amendment',
    title: 'Podwyższono kary za znęcanie się nad zwierzętami',
    content: 'Senat zaproponował zwiększenie maksymalnej kary pozbawienia wolności z 5 do 8 lat.',
    aiSummary: 'Surowsze kary: do 8 lat więzienia za znęcanie ze szczególnym okrucieństwem, publiczny rejestr sprawców, zakaz posiadania zwierząt do 15 lat.',
    createdAt: new Date('2024-12-03T16:00:00'),
    diff: {
      fileName: 'Art. 35 - Kary',
      additions: [
        '1a. Kto znęca się nad zwierzęciem ze szczególnym okrucieństwem, podlega karze pozbawienia wolności od roku do lat 8.',
        '2a. Sąd orzeka zakaz posiadania wszelkich zwierząt na okres od 5 do 15 lat.',
        '3. Tworzy się publiczny Rejestr Sprawców Przestępstw wobec Zwierząt, prowadzony przez Ministra Sprawiedliwości.',
        '3a. Wpis do Rejestru następuje z mocy prawa po uprawomocnieniu się wyroku skazującego.',
      ],
      deletions: [
        '1. Kto znęca się nad zwierzęciem, podlega karze pozbawienia wolności do lat 5.',
        '2. Sąd może orzec zakaz posiadania zwierząt na okres do 10 lat.',
      ],
    },
  },
  {
    id: '59',
    ustawaId: '24',
    ustawa: getUstawa('24'),
    type: 'amendment',
    title: 'Wprowadzono net-billing zamiast net-meteringu',
    content: 'Zmieniono system rozliczeń dla prosumentów - przejście z net-meteringu na net-billing.',
    aiSummary: 'Nowy system dla prosumentów: rozliczenie wg cen rynkowych zamiast 1:1, magazyny energii zwolnione z akcyzy, uproszczona procedura dla instalacji do 50 kW.',
    createdAt: new Date('2024-11-20T11:00:00'),
    diff: {
      fileName: 'Art. 4 - Rozliczenia prosumenckie',
      additions: [
        '1. Prosument rozlicza energię elektryczną wprowadzoną do sieci i pobraną z sieci według cen obowiązujących na rynku energii w danej godzinie (net-billing).',
        '1a. Wartość energii wprowadzonej do sieci jest pomniejszana o opłaty dystrybucyjne w wysokości 15% wartości energii.',
        '2. Magazyny energii elektrycznej o pojemności do 50 kWh, współpracujące z instalacją prosumencką, są zwolnione z podatku akcyzowego.',
        '3. Instalacje OZE o mocy do 50 kW podlegają uproszczonej procedurze zgłoszeniowej.',
      ],
      deletions: [
        '1. Prosument rozlicza energię elektryczną w systemie opustów, w stosunku ilościowym 1:0,8 dla instalacji do 10 kW oraz 1:0,7 dla instalacji powyżej 10 kW (net-metering).',
        '2. System opustów obowiązuje przez 15 lat od daty przyłączenia instalacji.',
      ],
    },
  },
  {
    id: '60',
    ustawaId: '27',
    ustawa: getUstawa('27'),
    type: 'amendment',
    title: 'Skrócono termin wydania pozwolenia na budowę',
    content: 'Maksymalny termin na wydanie decyzji o pozwoleniu na budowę skrócono z 65 do 30 dni.',
    aiSummary: 'Szybsze pozwolenia: decyzja w 30 dni, milcząca zgoda po przekroczeniu terminu, jeden wniosek do wszystkich organów, automatyczna weryfikacja zgodności z planem.',
    createdAt: new Date('2024-11-28T10:00:00'),
    diff: {
      fileName: 'Art. 35 - Terminy',
      additions: [
        '1. Organ administracji architektoniczno-budowlanej wydaje decyzję o pozwoleniu na budowę w terminie 30 dni od dnia złożenia kompletnego wniosku.',
        '1a. Niezajęcie stanowiska w terminie, o którym mowa w ust. 1, jest równoznaczne z wydaniem decyzji pozytywnej (milcząca zgoda).',
        '2. Wniosek o pozwolenie na budowę składa się za pośrednictwem systemu teleinformatycznego, który automatycznie przekazuje go do wszystkich właściwych organów.',
        '2a. System automatycznie weryfikuje zgodność projektu z miejscowym planem zagospodarowania przestrzennego.',
      ],
      deletions: [
        '1. Organ administracji architektoniczno-budowlanej wydaje decyzję o pozwoleniu na budowę w terminie 65 dni od dnia złożenia wniosku.',
        '2. Do terminu nie wlicza się czasu oczekiwania na uzgodnienia z innymi organami.',
      ],
    },
  },
  {
    id: '61',
    ustawaId: '31',
    ustawa: getUstawa('31'),
    type: 'amendment',
    title: 'Polski język migowy językiem urzędowym',
    content: 'Uznano PJM za język urzędowy RP z prawem do korzystania z niego w kontaktach z administracją.',
    aiSummary: 'PJM oficjalnym językiem: prawo do tłumacza w urzędach, napisy na żywo w TV publicznej, nauka PJM jako przedmiot do wyboru w szkołach.',
    createdAt: new Date('2024-11-30T14:00:00'),
    diff: {
      fileName: 'Art. 2 - Status prawny',
      additions: [
        '1. Polski język migowy (PJM) jest uznanym językiem naturalnym społeczności Głuchych w Rzeczypospolitej Polskiej.',
        '2. Osoby posługujące się PJM mają prawo do: a) korzystania z usług tłumacza PJM w kontaktach z organami administracji publicznej, b) otrzymywania informacji publicznej w PJM.',
        '3. Urzędy administracji publicznej w miastach powyżej 50 000 mieszkańców zapewniają dostęp do tłumacza PJM.',
        '4. Telewizja publiczna zapewnia tłumaczenie na PJM lub napisy na żywo we wszystkich programach informacyjnych.',
      ],
      deletions: [
        '1. Osoby niesłyszące mogą korzystać z pomocy tłumacza języka migowego w kontaktach z administracją, o ile organ dysponuje taką możliwością.',
      ],
    },
  },
  {
    id: '62',
    ustawaId: '33',
    ustawa: getUstawa('33'),
    type: 'amendment',
    title: 'Rozszerzono listę leków onkologicznych',
    content: 'Na listę refundacyjną dodano 12 nowych leków stosowanych w terapii nowotworów.',
    aiSummary: 'Nowe leki refundowane: pembrolizumab, nivolumab i 10 innych preparatów onkologicznych, refundacja do 100% dla pacjentów z potwierdzoną diagnozą.',
    createdAt: new Date('2024-11-01T09:00:00'),
    diff: {
      fileName: 'Załącznik 1 - Lista leków refundowanych',
      additions: [
        'Poz. 2341. Pembrolizumab - leczenie czerniaka, raka płuca - refundacja 100%',
        'Poz. 2342. Nivolumab - leczenie raka nerki, czerniaka - refundacja 100%',
        'Poz. 2343. Atezolizumab - leczenie raka płuca, pęcherza - refundacja 100%',
        'Poz. 2344. Olaparib - leczenie raka jajnika, piersi - refundacja 100%',
        'Poz. 2345. Palbociclib - leczenie raka piersi HR+ - refundacja 70%',
      ],
      deletions: [],
    },
  },
  {
    id: '63',
    ustawaId: '39',
    ustawa: getUstawa('39'),
    type: 'amendment',
    title: 'Wzmocniono ochronę sygnalistów',
    content: 'Dodano zakaz działań odwetowych wobec sygnalistów i ich rodzin.',
    aiSummary: 'Silniejsza ochrona: zakaz zwolnienia i degradacji, ochrona rozszerzona na rodzinę sygnalisty, możliwość zgłoszeń anonimowych, nagroda do 10% odzyskanych środków.',
    createdAt: new Date('2024-09-15T11:00:00'),
    diff: {
      fileName: 'Art. 15 - Ochrona przed działaniami odwetowymi',
      additions: [
        '1. Zakazuje się wszelkich działań odwetowych wobec sygnalisty, w tym: a) rozwiązania stosunku pracy, b) degradacji lub wstrzymania awansu, c) obniżenia wynagrodzenia, d) mobbingu i dyskryminacji.',
        '2. Ochrona, o której mowa w ust. 1, rozciąga się na małżonka, dzieci i rodziców sygnalisty.',
        '3. Sygnalista może dokonać zgłoszenia anonimowo. Anonimowość jest chroniona przez cały czas trwania postępowania.',
        '4. Sygnaliście, którego zgłoszenie doprowadziło do odzyskania środków publicznych, przysługuje nagroda w wysokości do 10% odzyskanej kwoty, nie więcej niż 100 000 zł.',
      ],
      deletions: [
        '1. Pracodawca nie może rozwiązać stosunku pracy z sygnalistą z powodu dokonania zgłoszenia.',
        '2. Ochrona przysługuje przez okres 2 lat od dnia dokonania zgłoszenia.',
      ],
    },
  },
  // Additional diffs for ustawa 1 (RODO)
  {
    id: '64',
    ustawaId: '1',
    ustawa: getUstawa('1'),
    type: 'amendment',
    title: 'Zwiększono kary za naruszenie RODO',
    content: 'Podniesiono maksymalną karę finansową za naruszenie przepisów o ochronie danych.',
    aiSummary: 'Kary wzrosły: maksymalna kara do 50 mln EUR lub 6% obrotu, kary dla osób fizycznych do 500 tys. zł, obowiązkowe zawiadomienie poszkodowanych w 48h.',
    createdAt: new Date('2024-11-28T14:00:00'),
    diff: {
      fileName: 'Art. 83 - Kary administracyjne',
      additions: [
        '1. Za naruszenie przepisów nakłada się karę pieniężną w wysokości do 50 000 000 EUR lub 6% całkowitego rocznego obrotu.',
        '2a. Osoby fizyczne odpowiedzialne za naruszenie podlegają karze grzywny do 500 000 zł.',
        '3. Administrator danych jest zobowiązany do zawiadomienia osób poszkodowanych w terminie 48 godzin od wykrycia naruszenia.',
      ],
      deletions: [
        '1. Za naruszenie przepisów nakłada się karę pieniężną w wysokości do 20 000 000 EUR lub 4% całkowitego rocznego obrotu.',
        '3. Administrator danych zawiadamia osoby poszkodowane bez zbędnej zwłoki.',
      ],
    },
  },
  {
    id: '65',
    ustawaId: '1',
    ustawa: getUstawa('1'),
    type: 'amendment',
    title: 'Prawo do cyfrowego zapomnienia',
    content: 'Wprowadzono szczegółowe przepisy dotyczące prawa do usunięcia danych osobowych.',
    aiSummary: 'Prawo do zapomnienia: usunięcie danych w 30 dni, obowiązek usunięcia z kopii zapasowych, wyjątki dla celów archiwizacyjnych i prawnych.',
    createdAt: new Date('2024-11-20T10:00:00'),
    diff: {
      fileName: 'Art. 17 - Prawo do usunięcia danych',
      additions: [
        '1a. Administrator usuwa dane osobowe w terminie 30 dni od otrzymania żądania osoby, której dane dotyczą.',
        '1b. Usunięcie obejmuje również kopie zapasowe, o ile jest to technicznie możliwe.',
        '2. Wyjątki od prawa do usunięcia: a) dane niezbędne do celów archiwalnych w interesie publicznym, b) dane wymagane przepisami prawa, c) dane niezbędne do ustalenia roszczeń.',
      ],
      deletions: [
        '1. Administrator usuwa dane osobowe bez zbędnej zwłoki.',
      ],
    },
  },
  // Diffs for ustawa 2 (Dostępność cyfrowa)
  {
    id: '66',
    ustawaId: '2',
    ustawa: getUstawa('2'),
    type: 'amendment',
    title: 'Standard WCAG 2.2 obowiązkowy',
    content: 'Wprowadzono wymóg zgodności ze standardem WCAG 2.2 na poziomie AA.',
    aiSummary: 'Nowy standard: WCAG 2.2 poziom AA obowiązkowy, audyt dostępności co 2 lata, deklaracja dostępności na każdej stronie.',
    createdAt: new Date('2024-11-15T09:00:00'),
    diff: {
      fileName: 'Art. 5 - Wymagania techniczne',
      additions: [
        '1. Strony internetowe podmiotów publicznych muszą spełniać wymagania WCAG 2.2 na poziomie AA.',
        '2. Podmioty przeprowadzają audyt dostępności co najmniej raz na 2 lata.',
        '3. Na każdej stronie internetowej umieszcza się deklarację dostępności w widocznym miejscu.',
        '4. Formularze kontaktowe muszą być w pełni obsługiwalne za pomocą klawiatury.',
      ],
      deletions: [
        '1. Strony internetowe podmiotów publicznych powinny być zgodne z WCAG 2.1 na poziomie A.',
      ],
    },
  },
  {
    id: '67',
    ustawaId: '2',
    ustawa: getUstawa('2'),
    type: 'amendment',
    title: 'Aplikacje mobilne objęte ustawą',
    content: 'Rozszerzono zakres ustawy o aplikacje mobilne podmiotów publicznych.',
    aiSummary: 'Aplikacje mobilne: obowiązek dostępności dla iOS i Android, wsparcie czytników ekranu, alternatywne metody uwierzytelniania.',
    createdAt: new Date('2024-10-20T11:00:00'),
    diff: {
      fileName: 'Art. 3 - Zakres stosowania',
      additions: [
        '1. pkt 3) aplikacje mobilne udostępniane przez podmioty publiczne na platformach iOS i Android.',
        '2a. Aplikacje mobilne zapewniają pełną kompatybilność z czytnikami ekranu VoiceOver i TalkBack.',
        '2b. Uwierzytelnianie w aplikacjach musi oferować alternatywne metody dla osób z niepełnosprawnościami.',
      ],
      deletions: [],
    },
  },
  // Diffs for ustawa 5 (AI w administracji)
  {
    id: '68',
    ustawaId: '5',
    ustawa: getUstawa('5'),
    type: 'amendment',
    title: 'Zakaz automatycznych decyzji w sprawach istotnych',
    content: 'Wprowadzono zakaz podejmowania w pełni automatycznych decyzji bez udziału człowieka.',
    aiSummary: 'Ochrona przed AI: zakaz automatycznych decyzji w sprawach finansowych i prawnych, obowiązek wyjaśnienia decyzji AI, prawo do odwołania do człowieka.',
    createdAt: new Date('2024-11-10T13:00:00'),
    diff: {
      fileName: 'Art. 22 - Ograniczenia stosowania AI',
      additions: [
        '1. Zakazuje się podejmowania w pełni automatycznych decyzji wywierających skutki prawne wobec obywatela bez udziału człowieka.',
        '2. Obywatel ma prawo żądać wyjaśnienia sposobu, w jaki algorytm AI wpłynął na decyzję dotyczącą jego sprawy.',
        '3. W każdej sprawie rozpatrywanej z udziałem AI obywatel ma prawo do odwołania się do decyzji podjętej przez człowieka.',
        '4. Decyzje w sprawach: a) świadczeń socjalnych, b) podatków, c) kar administracyjnych - wymagają zatwierdzenia przez urzędnika.',
      ],
      deletions: [
        '1. Systemy AI mogą wspierać podejmowanie decyzji administracyjnych.',
      ],
    },
  },
  {
    id: '69',
    ustawaId: '5',
    ustawa: getUstawa('5'),
    type: 'amendment',
    title: 'Rejestr algorytmów publicznych',
    content: 'Utworzono publiczny rejestr algorytmów AI używanych przez administrację.',
    aiSummary: 'Transparentność AI: publiczny rejestr algorytmów, opis działania każdego systemu AI, informacja o danych treningowych.',
    createdAt: new Date('2024-10-25T15:00:00'),
    diff: {
      fileName: 'Art. 28 - Rejestr algorytmów',
      additions: [
        '1. Tworzy się Publiczny Rejestr Algorytmów Administracji Publicznej, prowadzony przez ministra właściwego ds. cyfryzacji.',
        '2. W Rejestrze publikuje się: a) nazwę i cel systemu AI, b) opis sposobu działania algorytmu, c) informację o danych wykorzystanych do treningu, d) wyniki audytów pod kątem stronniczości.',
        '3. Każdy obywatel ma prawo dostępu do Rejestru bez ograniczeń.',
      ],
      deletions: [],
    },
  },
  // Diffs for ustawa 7 (e-Głosowanie)
  {
    id: '70',
    ustawaId: '7',
    ustawa: getUstawa('7'),
    type: 'amendment',
    title: 'Weryfikacja głosu przez blockchain',
    content: 'Wprowadzono technologię blockchain do weryfikacji oddanych głosów.',
    aiSummary: 'Blockchain w wyborach: niezmienialny zapis głosów, możliwość weryfikacji przez wyborcę, pełna anonimowość przy zachowaniu transparentności.',
    createdAt: new Date('2024-11-25T10:00:00'),
    diff: {
      fileName: 'Art. 15 - Weryfikacja głosów',
      additions: [
        '1. Głosy oddane elektronicznie są zapisywane w rozproszonej bazie danych wykorzystującej technologię blockchain.',
        '2. Każdy wyborca otrzymuje unikalny kod weryfikacyjny umożliwiający sprawdzenie, czy jego głos został prawidłowo zarejestrowany.',
        '3. Kod weryfikacyjny nie pozwala na identyfikację wyborcy ani sposobu głosowania.',
        '4. Wyniki głosowania są publikowane w formie umożliwiającej niezależną weryfikację przez obserwatorów.',
      ],
      deletions: [
        '1. Głosy elektroniczne są przechowywane w centralnej bazie danych PKW.',
      ],
    },
  },
  {
    id: '71',
    ustawaId: '7',
    ustawa: getUstawa('7'),
    type: 'amendment',
    title: 'Pilotaż w 50 gminach',
    content: 'Określono szczegółowy zakres pilotażu e-głosowania.',
    aiSummary: 'Pilotaż 2026: 50 gmin, wybory samorządowe, zachowana opcja tradycyjna, monitoring międzynarodowy.',
    createdAt: new Date('2024-11-01T14:00:00'),
    diff: {
      fileName: 'Art. 3 - Zakres pilotażu',
      additions: [
        '1. Pilotaż głosowania elektronicznego obejmuje 50 gmin wybranych przez PKW.',
        '2. Pilotaż przeprowadza się podczas wyborów samorządowych w 2026 roku.',
        '3. Wyborca w gminie objętej pilotażem może wybrać formę głosowania: elektroniczną lub tradycyjną.',
        '4. PKW zaprasza obserwatorów międzynarodowych do monitorowania pilotażu.',
      ],
      deletions: [
        '1. Minister właściwy ds. cyfryzacji określi zakres pilotażu w drodze rozporządzenia.',
      ],
    },
  },
  // Diffs for ustawa 9 (e-Zamówienia)
  {
    id: '72',
    ustawaId: '9',
    ustawa: getUstawa('9'),
    type: 'amendment',
    title: 'AI do analizy ofert',
    content: 'Wprowadzono możliwość wykorzystania AI do wstępnej analizy ofert przetargowych.',
    aiSummary: 'AI w przetargach: automatyczna weryfikacja dokumentów, wykrywanie anomalii cenowych, flagowanie potencjalnych zmów przetargowych.',
    createdAt: new Date('2024-11-20T09:00:00'),
    diff: {
      fileName: 'Art. 18 - Analiza ofert',
      additions: [
        '1. Platforma e-Zamówienia wykorzystuje algorytmy AI do wstępnej analizy ofert.',
        '2. System automatycznie weryfikuje: a) kompletność dokumentacji, b) zgodność z wymogami formalnymi, c) anomalie cenowe.',
        '3. System flaguje oferty wymagające szczególnej uwagi ze względu na: a) znaczące odchylenie od ceny rynkowej, b) wzorce sugerujące zmowę przetargową.',
        '4. Ostateczna decyzja o wyborze oferty należy zawsze do komisji przetargowej.',
      ],
      deletions: [],
    },
  },
  // Diffs for ustawa 10 (Dezinformacja - odrzucona)
  {
    id: '73',
    ustawaId: '10',
    ustawa: getUstawa('10'),
    type: 'amendment',
    title: 'Kontrowersyjna definicja dezinformacji',
    content: 'Projekt zawierał szeroką definicję dezinformacji, która wzbudziła obawy o cenzurę.',
    aiSummary: 'Odrzucona definicja: zbyt szeroka, mogła objąć satyrę i opinie, brak jasnych kryteriów weryfikacji prawdziwości.',
    createdAt: new Date('2024-09-01T10:00:00'),
    diff: {
      fileName: 'Art. 2 - Definicje (ODRZUCONY)',
      additions: [
        '1. "Dezinformacja" oznacza fałszywe lub wprowadzające w błąd informacje rozpowszechniane z zamiarem wywołania szkody publicznej.',
        '2. "Szkoda publiczna" obejmuje: a) zagrożenie dla zdrowia publicznego, b) zakłócenie procesów demokratycznych, c) podważanie zaufania do instytucji państwowych.',
      ],
      deletions: [],
    },
  },
  // Diffs for ustawa 11 (Cyfrowe dziedzictwo)
  {
    id: '74',
    ustawaId: '11',
    ustawa: getUstawa('11'),
    type: 'amendment',
    title: 'Portal Cyfrowe Zbiory',
    content: 'Określono zasady funkcjonowania centralnego portalu dostępu do zdigitalizowanych zbiorów.',
    aiSummary: 'Portal kultury: darmowy dostęp dla wszystkich, wyszukiwanie AI, wirtualne wystawy, API dla badaczy.',
    createdAt: new Date('2024-12-04T11:00:00'),
    diff: {
      fileName: 'Art. 8 - Portal Cyfrowe Zbiory',
      additions: [
        '1. Tworzy się portal "Cyfrowe Zbiory" zapewniający dostęp do zdigitalizowanego dziedzictwa kulturowego.',
        '2. Dostęp do portalu jest bezpłatny dla wszystkich użytkowników.',
        '3. Portal oferuje: a) wyszukiwanie wspierane przez AI, b) wirtualne wystawy tematyczne, c) API dla badaczy i edukatorów.',
        '4. Instytucje kultury są zobowiązane do udostępniania zdigitalizowanych zbiorów w portalu w terminie 6 miesięcy od digitalizacji.',
      ],
      deletions: [],
    },
  },
  // Diffs for ustawa 13 (Reforma edukacji)
  {
    id: '75',
    ustawaId: '13',
    ustawa: getUstawa('13'),
    type: 'amendment',
    title: 'Programowanie od pierwszej klasy',
    content: 'Wprowadzono naukę podstaw programowania od pierwszej klasy szkoły podstawowej.',
    aiSummary: 'Kodowanie w szkole: Scratch od klasy 1, myślenie algorytmiczne, nauka przez zabawę, 1h tygodniowo.',
    createdAt: new Date('2024-11-25T10:00:00'),
    diff: {
      fileName: 'Załącznik - Podstawa programowa informatyki',
      additions: [
        'Klasy 1-3: Wprowadzenie do myślenia algorytmicznego poprzez programowanie wizualne (Scratch Jr).',
        'Klasy 4-6: Programowanie w Scratch, podstawy algorytmiki, proste projekty.',
        'Klasy 7-8: Wprowadzenie do Pythona, algorytmy sortowania i wyszukiwania, podstawy baz danych.',
        'Wymiar godzin: klasy 1-3: 1h tygodniowo, klasy 4-8: 2h tygodniowo.',
      ],
      deletions: [
        'Klasy 4-6: Podstawy obsługi komputera i pakietu biurowego.',
        'Klasy 7-8: Zaawansowana obsługa arkusza kalkulacyjnego.',
      ],
    },
  },
  {
    id: '76',
    ustawaId: '13',
    ustawa: getUstawa('13'),
    type: 'amendment',
    title: 'Laptopy dla uczniów klas 4',
    content: 'Program wyposażenia uczniów klas czwartych w laptopy do nauki.',
    aiSummary: 'Laptop dla ucznia: każdy uczeń klasy 4 otrzyma laptop, oprogramowanie edukacyjne, serwis gwarancyjny.',
    createdAt: new Date('2024-11-18T14:00:00'),
    diff: {
      fileName: 'Art. 45 - Program Laptop dla Ucznia',
      additions: [
        '1. Każdy uczeń rozpoczynający naukę w klasie czwartej szkoły podstawowej otrzymuje laptop do celów edukacyjnych.',
        '2. Laptop jest własnością ucznia i pozostaje w jego dyspozycji do ukończenia szkoły podstawowej.',
        '3. Laptopy są wyposażone w: a) system operacyjny, b) pakiet oprogramowania edukacyjnego, c) oprogramowanie do programowania.',
        '4. Na program przeznacza się środki w wysokości 1,5 mld zł rocznie.',
      ],
      deletions: [],
    },
  },
  // Diffs for ustawa 16 (Rodzina 500+ Plus)
  {
    id: '77',
    ustawaId: '16',
    ustawa: getUstawa('16'),
    type: 'amendment',
    title: 'Wyższe świadczenie na trzecie dziecko',
    content: 'Wprowadzono podwyższone świadczenie dla rodzin z trojgiem i więcej dzieci.',
    aiSummary: '800 zł na trzecie dziecko: wyższe świadczenie dla rodzin wielodzietnych, automatyczna waloryzacja, wypłata do 18 roku życia.',
    createdAt: new Date('2024-11-28T09:00:00'),
    diff: {
      fileName: 'Art. 5 - Wysokość świadczenia',
      additions: [
        '1a. Świadczenie na trzecie i każde kolejne dziecko wynosi 800 zł miesięcznie.',
        '2. Świadczenie podlega corocznej waloryzacji o wskaźnik inflacji.',
        '3. Świadczenie przysługuje do ukończenia przez dziecko 18 roku życia, a w przypadku kontynuowania nauki - do 24 roku życia.',
      ],
      deletions: [
        '1. Świadczenie wychowawcze wynosi 500 zł miesięcznie na każde dziecko.',
      ],
    },
  },
  // Diffs for ustawa 19 (Rozwój wsi)
  {
    id: '78',
    ustawaId: '19',
    ustawa: getUstawa('19'),
    type: 'amendment',
    title: 'Dopłaty dla małych gospodarstw',
    content: 'Wprowadzono system dopłat dla gospodarstw rolnych do 10 ha.',
    aiSummary: 'Wsparcie dla małych farm: dopłaty do 50 tys. zł, preferencyjne kredyty, pomoc w certyfikacji bio.',
    createdAt: new Date('2024-12-01T10:00:00'),
    diff: {
      fileName: 'Art. 12 - Dopłaty dla małych gospodarstw',
      additions: [
        '1. Gospodarstwa rolne o powierzchni do 10 ha mogą ubiegać się o dopłatę w wysokości do 50 000 zł rocznie.',
        '2. Dopłata jest przeznaczona na: a) modernizację gospodarstwa, b) zakup sprzętu, c) certyfikację ekologiczną.',
        '3. Gospodarstwa ekologiczne otrzymują dodatkowo 20% dopłaty.',
        '4. Wnioski składa się elektronicznie przez platformę eRolnik.',
      ],
      deletions: [],
    },
  },
  // Diffs for ustawa 20 (Fundusze inwestycyjne)
  {
    id: '79',
    ustawaId: '20',
    ustawa: getUstawa('20'),
    type: 'amendment',
    title: 'Limit kosztów zarządzania',
    content: 'Wprowadzono maksymalny limit opłat za zarządzanie funduszami.',
    aiSummary: 'Tańsze fundusze: max 1,5% opłaty za zarządzanie, przejrzyste informacje o kosztach, porównywarka funduszy.',
    createdAt: new Date('2024-11-15T11:00:00'),
    diff: {
      fileName: 'Art. 34 - Opłaty i koszty',
      additions: [
        '1. Maksymalna opłata za zarządzanie funduszem inwestycyjnym wynosi 1,5% wartości aktywów rocznie.',
        '2. Fundusz jest zobowiązany do publikacji wszystkich kosztów w formie uproszczonego zestawienia (KID).',
        '3. KNF prowadzi publiczną porównywarkę funduszy inwestycyjnych uwzględniającą opłaty i wyniki.',
      ],
      deletions: [
        '1. Wysokość opłat za zarządzanie określa statut funduszu.',
      ],
    },
  },
  // Diffs for ustawa 21 (Podatek cyfrowy)
  {
    id: '80',
    ustawaId: '21',
    ustawa: getUstawa('21'),
    type: 'amendment',
    title: 'Stawka 3% od przychodów',
    content: 'Określono stawkę podatku od gigantów technologicznych.',
    aiSummary: 'Podatek GAFA: 3% od przychodów z reklam i danych, próg 750 mln EUR obrotu globalnego, szacowane wpływy 2 mld zł.',
    createdAt: new Date('2024-12-03T10:00:00'),
    diff: {
      fileName: 'Art. 5 - Stawka podatku',
      additions: [
        '1. Stawka podatku od usług cyfrowych wynosi 3% przychodu.',
        '2. Podatkiem objęte są przychody z: a) reklamy targetowanej, b) pośrednictwa cyfrowego, c) sprzedaży danych użytkowników.',
        '3. Podatek dotyczy podmiotów o globalnym obrocie przekraczającym 750 mln EUR i przychodach w Polsce powyżej 25 mln EUR.',
      ],
      deletions: [],
    },
  },
  // Diffs for ustawa 22 (Sport)
  {
    id: '81',
    ustawaId: '22',
    ustawa: getUstawa('22'),
    type: 'amendment',
    title: 'Darmowe baseny dla dzieci',
    content: 'Wprowadzono bezpłatny dostęp do basenów publicznych dla dzieci do lat 15.',
    aiSummary: 'Pływanie dla każdego: darmowe baseny dla dzieci, vouchery sportowe dla seniorów, 500 nowych orlików.',
    createdAt: new Date('2024-11-20T13:00:00'),
    diff: {
      fileName: 'Art. 18 - Dostęp do infrastruktury sportowej',
      additions: [
        '1. Dzieci do lat 15 mają prawo do bezpłatnego korzystania z basenów publicznych.',
        '2. Seniorzy powyżej 65 roku życia otrzymują voucher sportowy o wartości 500 zł rocznie.',
        '3. W latach 2025-2030 wybudowanych zostanie 500 nowych wielofunkcyjnych boisk (Orliki 2.0).',
        '4. Każda gmina powyżej 10 000 mieszkańców musi posiadać co najmniej jeden ogólnodostępny obiekt sportowy.',
      ],
      deletions: [],
    },
  },
  // Diffs for ustawa 23 (Ekoturystyka)
  {
    id: '82',
    ustawaId: '23',
    ustawa: getUstawa('23'),
    type: 'amendment',
    title: 'Certyfikat Zielony Szlak',
    content: 'Utworzono system certyfikacji obiektów ekoturystycznych.',
    aiSummary: 'Certyfikat eko: Zielony Szlak dla hoteli i pensjonatów, wymogi środowiskowe, ulgi podatkowe dla certyfikowanych.',
    createdAt: new Date('2024-11-22T10:00:00'),
    diff: {
      fileName: 'Art. 8 - Certyfikacja ekoturystyczna',
      additions: [
        '1. Tworzy się certyfikat "Zielony Szlak" dla obiektów turystycznych spełniających standardy zrównoważonego rozwoju.',
        '2. Wymagania certyfikatu: a) odnawialne źródła energii min. 50%, b) segregacja odpadów, c) ograniczenie plastiku jednorazowego, d) lokalne produkty w gastronomii.',
        '3. Obiekty certyfikowane korzystają z ulgi w podatku od nieruchomości w wysokości 25%.',
      ],
      deletions: [],
    },
  },
  // Diffs for ustawa 25 (Czyste powietrze)
  {
    id: '83',
    ustawaId: '25',
    ustawa: getUstawa('25'),
    type: 'amendment',
    title: 'Dopłaty do wymiany pieców',
    content: 'Zwiększono dopłaty do wymiany starych pieców węglowych.',
    aiSummary: 'Koniec kopciuchów: dopłata do 80% kosztów wymiany, zakaz użytkowania pieców poniżej klasy 5 od 2027, strefy czyste w miastach.',
    createdAt: new Date('2024-11-18T09:00:00'),
    diff: {
      fileName: 'Art. 15 - Program wymiany pieców',
      additions: [
        '1. Właściciele budynków jednorodzinnych mogą otrzymać dopłatę do 80% kosztów wymiany pieca, nie więcej niż 30 000 zł.',
        '2. Od 1 stycznia 2027 r. zakazuje się użytkowania pieców na paliwa stałe niespełniających normy klasy 5.',
        '3. W miastach powyżej 100 000 mieszkańców wprowadza się strefy ograniczonej emisji do końca 2026 r.',
        '4. Gminy otrzymują dotację na monitoring jakości powietrza w wysokości 100 000 zł rocznie.',
      ],
      deletions: [
        '1. Dopłata do wymiany pieca wynosi do 50% kosztów.',
      ],
    },
  },
  // Diffs for ustawa 26 (Mieszkanie+)
  {
    id: '84',
    ustawaId: '26',
    ustawa: getUstawa('26'),
    type: 'amendment',
    title: 'Czynsz maksymalnie 20 zł/m²',
    content: 'Ustalono maksymalną stawkę czynszu w programie Mieszkanie+.',
    aiSummary: 'Tanie mieszkania: max 20 zł/m², pierwszeństwo dla młodych rodzin, możliwość wykupu po 10 latach.',
    createdAt: new Date('2024-12-02T14:00:00'),
    diff: {
      fileName: 'Art. 12 - Zasady najmu',
      additions: [
        '1. Czynsz za mieszkanie w programie Mieszkanie+ nie może przekroczyć 20 zł za metr kwadratowy miesięcznie.',
        '2. Pierwszeństwo w przydziale mieszkań mają: a) rodziny z dziećmi, b) osoby do 35 roku życia, c) osoby niepełnosprawne.',
        '3. Po 10 latach najmu najemca ma prawo wykupu mieszkania za 70% wartości rynkowej.',
        '4. Czynsz pokrywa koszty utrzymania nieruchomości i jest corocznie waloryzowany.',
      ],
      deletions: [],
    },
  },
  // Diffs for ustawa 28 (Bezpieczny transport)
  {
    id: '85',
    ustawaId: '28',
    ustawa: getUstawa('28'),
    type: 'amendment',
    title: 'Kamery we wszystkich pojazdach',
    content: 'Wprowadzono obowiązek monitoringu we wszystkich pojazdach transportu publicznego.',
    aiSummary: 'Monitoring w autobusach: kamery obowiązkowe, przycisk alarmowy, łączność z centrum dowodzenia.',
    createdAt: new Date('2024-11-10T10:00:00'),
    diff: {
      fileName: 'Art. 8 - Wymagania bezpieczeństwa',
      additions: [
        '1. Wszystkie pojazdy transportu publicznego muszą być wyposażone w system monitoringu wizyjnego.',
        '2. W każdym pojeździe instaluje się przycisk alarmowy połączony z centrum zarządzania kryzysowego.',
        '3. Pojazdy wyposażane są w system łączności umożliwiający natychmiastowy kontakt z służbami ratunkowymi.',
        '4. Nagrania z monitoringu przechowuje się przez 30 dni.',
      ],
      deletions: [
        '1. Operator transportu może zainstalować monitoring w pojazdach.',
      ],
    },
  },
  // Diffs for ustawa 29 (CPK Kolej)
  {
    id: '86',
    ustawaId: '29',
    ustawa: getUstawa('29'),
    type: 'amendment',
    title: 'Prędkość do 350 km/h',
    content: 'Określono parametry techniczne kolei dużych prędkości.',
    aiSummary: 'Szybka kolej: prędkość do 350 km/h, Warszawa-Łódź w 45 min, 12 nowych tras, budowa 2025-2034.',
    createdAt: new Date('2024-11-28T11:00:00'),
    diff: {
      fileName: 'Art. 5 - Parametry techniczne',
      additions: [
        '1. Linie kolei dużych prędkości projektuje się dla prędkości maksymalnej 350 km/h.',
        '2. Czas przejazdu na trasie Warszawa-Łódź nie może przekroczyć 45 minut.',
        '3. Czas przejazdu na trasie Warszawa-Wrocław nie może przekroczyć 2 godzin.',
        '4. Sieć obejmuje 12 tras o łącznej długości 1800 km.',
        '5. Budowa realizowana w latach 2025-2034, szacowany koszt: 120 mld zł.',
      ],
      deletions: [],
    },
  },
  // Diffs for ustawa 30 (Bezpieczne dzieci online)
  {
    id: '87',
    ustawaId: '30',
    ustawa: getUstawa('30'),
    type: 'amendment',
    title: 'Weryfikacja wieku na platformach',
    content: 'Wprowadzono obowiązek weryfikacji wieku użytkowników na platformach z treściami dla dorosłych.',
    aiSummary: 'Ochrona dzieci: weryfikacja wieku obowiązkowa, zakaz reklam kierowanych do dzieci, kontrola rodzicielska w social media.',
    createdAt: new Date ('2024-12-01T09:00:00'),
    diff: {
      fileName: 'Art. 12 - Weryfikacja wieku',
      additions: [
        '1. Platformy udostępniające treści przeznaczone dla osób pełnoletnich są zobowiązane do weryfikacji wieku użytkowników.',
        '2. Zakazuje się kierowania reklam do użytkowników poniżej 16 roku życia.',
        '3. Platformy społecznościowe udostępniają narzędzia kontroli rodzicielskiej umożliwiające: a) ograniczenie czasu korzystania, b) filtrowanie treści, c) monitoring aktywności.',
        '4. Za naruszenie przepisów grozi kara do 4% rocznego obrotu platformy.',
      ],
      deletions: [],
    },
  },
  // Diffs for ustawa 32 (Prawa pacjenta)
  {
    id: '88',
    ustawaId: '32',
    ustawa: getUstawa('32'),
    type: 'amendment',
    title: 'Dokumentacja medyczna online',
    content: 'Wprowadzono prawo do dostępu do pełnej dokumentacji medycznej online.',
    aiSummary: 'Cyfrowy pacjent: dokumentacja online w 24h, prawo do drugiej opinii refundowanej, rzecznik pacjenta w każdym szpitalu.',
    createdAt: new Date('2024-11-20T10:00:00'),
    diff: {
      fileName: 'Art. 23 - Dostęp do dokumentacji',
      additions: [
        '1. Pacjent ma prawo dostępu do pełnej dokumentacji medycznej w formie elektronicznej w terminie 24 godzin od jej wytworzenia.',
        '2. Dokumentacja udostępniana jest przez Internetowe Konto Pacjenta (IKP).',
        '3. Pacjent ma prawo do drugiej opinii lekarskiej refundowanej przez NFZ w przypadku: a) choroby nowotworowej, b) planowanej operacji, c) choroby rzadkiej.',
        '4. Każdy szpital powołuje rzecznika praw pacjenta.',
      ],
      deletions: [
        '1. Pacjent może żądać udostępnienia dokumentacji w terminie 30 dni.',
      ],
    },
  },
  // Diffs for ustawa 34 (Reforma uczelni)
  {
    id: '89',
    ustawaId: '34',
    ustawa: getUstawa('34'),
    type: 'amendment',
    title: 'Granty dla młodych naukowców',
    content: 'Utworzono program grantów startowych dla naukowców do 35 roku życia.',
    aiSummary: 'Młoda nauka: granty do 100 tys. zł, uproszczona procedura, mobilność międzyuczelniana.',
    createdAt: new Date('2024-11-25T14:00:00'),
    diff: {
      fileName: 'Art. 45 - Program Młody Naukowiec',
      additions: [
        '1. Tworzy się Program Młody Naukowiec dla badaczy do 35 roku życia.',
        '2. W ramach programu przyznawane są granty startowe w wysokości do 100 000 zł na okres 2 lat.',
        '3. Procedura aplikacyjna jest uproszczona - decyzja w terminie 60 dni.',
        '4. Program wspiera mobilność międzyuczelnianą - grant może być realizowany na innej uczelni niż macierzysta.',
      ],
      deletions: [],
    },
  },
  // Diffs for ustawa 35 (Nauka)
  {
    id: '90',
    ustawaId: '35',
    ustawa: getUstawa('35'),
    type: 'amendment',
    title: 'Wydatki na R&D do 2% PKB',
    content: 'Określono cel wydatków na badania i rozwój do 2030 roku.',
    aiSummary: 'Więcej na naukę: 2% PKB na R&D do 2030, 50 nowych centrów badawczych, priorytet: AI, biotech, energia.',
    createdAt: new Date('2024-11-22T09:00:00'),
    diff: {
      fileName: 'Art. 3 - Cele strategiczne',
      additions: [
        '1. Do roku 2030 wydatki na badania i rozwój osiągną poziom 2% PKB.',
        '2. Utworzonych zostanie 50 nowych centrów badawczych w obszarach priorytetowych.',
        '3. Obszary priorytetowe: a) sztuczna inteligencja, b) biotechnologia, c) energia odnawialna, d) technologie kosmiczne.',
        '4. Łączny budżet programu: 100 mld zł do 2030 roku.',
      ],
      deletions: [
        '1. Wydatki na badania i rozwój powinny systematycznie rosnąć.',
      ],
    },
  },
  // Diffs for ustawa 36 (Ochrona zabytków)
  {
    id: '91',
    ustawaId: '36',
    ustawa: getUstawa('36'),
    type: 'amendment',
    title: 'Wyższe kary za niszczenie zabytków',
    content: 'Zaostrzono kary za niszczenie lub uszkadzanie zabytków.',
    aiSummary: 'Ochrona dziedzictwa: kary do 2 mln zł, rejestr zabytków online, dotacje na remonty do 80%.',
    createdAt: new Date('2024-12-03T10:00:00'),
    diff: {
      fileName: 'Art. 108 - Przepisy karne',
      additions: [
        '1. Kto niszczy lub uszkadza zabytek, podlega karze grzywny do 2 000 000 zł.',
        '2. W przypadku zabytku o szczególnej wartości historycznej, sprawca podlega karze pozbawienia wolności do lat 5.',
        '3. Sąd orzeka obowiązek przywrócenia zabytku do stanu poprzedniego na koszt sprawcy.',
        '4. Tworzy się publiczny rejestr zabytków dostępny online.',
      ],
      deletions: [
        '1. Kto niszczy zabytek, podlega karze grzywny do 500 000 zł.',
      ],
    },
  },
  // Diffs for ustawa 37 (Wsparcie artystów)
  {
    id: '92',
    ustawaId: '37',
    ustawa: getUstawa('37'),
    type: 'amendment',
    title: 'Składki ZUS proporcjonalne do dochodu',
    content: 'Wprowadzono elastyczny system składek dla artystów i twórców.',
    aiSummary: 'Ubezpieczenie dla artystów: składki od dochodu, fundusz emerytalny, ubezpieczenie zdrowotne dla freelancerów.',
    createdAt: new Date('2024-11-28T15:00:00'),
    diff: {
      fileName: 'Art. 15 - Ubezpieczenia społeczne',
      additions: [
        '1. Artyści i twórcy opłacają składki na ubezpieczenia społeczne proporcjonalnie do osiąganego dochodu.',
        '2. Minimalna podstawa wymiaru składek wynosi 60% minimalnego wynagrodzenia.',
        '3. Tworzy się Fundusz Emerytalny Twórców finansowany z budżetu państwa.',
        '4. Artyści pracujący na umowach o dzieło mają prawo do dobrowolnego ubezpieczenia zdrowotnego na preferencyjnych warunkach.',
      ],
      deletions: [
        '1. Artyści prowadzący działalność gospodarczą opłacają składki na zasadach ogólnych.',
      ],
    },
  },
  // Diffs for ustawa 38 (Prawa konsumenta)
  {
    id: '93',
    ustawaId: '38',
    ustawa: getUstawa('38'),
    type: 'amendment',
    title: 'Prawo do naprawy (Right to Repair)',
    content: 'Wprowadzono prawo konsumenta do naprawy zakupionego produktu.',
    aiSummary: 'Prawo do naprawy: części zamienne dostępne 7 lat, zakaz blokad software, wydłużona gwarancja do 3 lat.',
    createdAt: new Date('2024-11-30T11:00:00'),
    diff: {
      fileName: 'Art. 43a - Prawo do naprawy',
      additions: [
        '1. Producent jest zobowiązany do udostępniania części zamiennych przez okres 7 lat od zakończenia produkcji.',
        '2. Zakazuje się stosowania blokad programowych uniemożliwiających naprawę przez niezależne serwisy.',
        '3. Konsument ma prawo do informacji o przewidywanej trwałości produktu.',
        '4. Gwarancja na produkty elektroniczne wynosi co najmniej 3 lata.',
        '5. Producent publikuje instrukcje naprawy dostępne bezpłatnie online.',
      ],
      deletions: [],
    },
  },
  // Diffs for ustawa 40 (Praca platformowa)
  {
    id: '94',
    ustawaId: '40',
    ustawa: getUstawa('40'),
    type: 'amendment',
    title: 'Domniemanie stosunku pracy',
    content: 'Wprowadzono domniemanie istnienia stosunku pracy dla pracowników platform cyfrowych.',
    aiSummary: 'Ochrona gig workers: domniemanie umowy o pracę, minimalna stawka godzinowa, ubezpieczenie wypadkowe.',
    createdAt: new Date('2024-11-25T10:00:00'),
    diff: {
      fileName: 'Art. 5 - Status prawny',
      additions: [
        '1. Domniemywa się, że osoba wykonująca pracę za pośrednictwem platformy cyfrowej jest zatrudniona na podstawie umowy o pracę.',
        '2. Platforma może obalić domniemanie wykazując, że osoba: a) samodzielnie ustala czas pracy, b) może odmówić wykonania zlecenia, c) korzysta z własnych narzędzi.',
        '3. Minimalna stawka godzinowa dla pracowników platform wynosi 150% minimalnej stawki godzinowej.',
        '4. Platforma jest zobowiązana do opłacania składek na ubezpieczenie wypadkowe.',
      ],
      deletions: [
        '1. Status prawny osób współpracujących z platformą określa umowa.',
      ],
    },
  },
];

export const mockConsultations: Consultation[] = [
  {
    id: '1',
    ustawaId: '1',
    ustawa: getUstawa('1'),
    title: 'Konsultacje społeczne - Nowelizacja RODO',
    description: 'Zapraszamy do udziału w konsultacjach społecznych dotyczących projektu nowelizacji ustawy o ochronie danych osobowych.',
    startDate: new Date('2024-12-05'),
    endDate: new Date('2024-12-20'),
    isActive: true,
    totalResponses: 342,
    aiOverview: `## O czym jest ta ustawa?

Projekt nowelizacji ustawy o ochronie danych osobowych (RODO) ma na celu wzmocnienie praw obywateli w zakresie kontroli nad ich danymi osobowymi w erze cyfrowej.

## Główne zmiany

### 1. Prawo do "cyfrowego zapomnienia"
Każdy obywatel będzie mógł zażądać usunięcia swoich danych z systemów firm i instytucji w ciągu 30 dni.

### 2. Rozszerzona definicja danych wrażliwych
Do kategorii danych wrażliwych zostaną dodane dane biometryczne, historia lokalizacji i dane o aktywności online.

### 3. Wyższe kary za naruszenia
Maksymalna kara wzrośnie z 20 mln EUR do 50 mln EUR lub 6% rocznego obrotu firmy.

## Dlaczego Twój głos jest ważny?

Ta ustawa wpłynie na codzienne życie każdego Polaka korzystającego z internetu.`,
    questions: [
      {
        id: '1-1',
        type: 'closed',
        question: 'Czy popierasz wprowadzenie prawa do "cyfrowego zapomnienia"?',
        options: ['Zdecydowanie tak', 'Raczej tak', 'Raczej nie', 'Zdecydowanie nie', 'Nie mam zdania'],
        responses: [156, 89, 42, 28, 27],
      },
      {
        id: '1-2',
        type: 'closed',
        question: 'Czy 18-miesięczny okres przejściowy jest wystarczający dla firm?',
        options: ['Tak, wystarczający', 'Nie, powinien być dłuższy', 'Nie, powinien być krótszy'],
        responses: [124, 189, 29],
      },
      {
        id: '1-3',
        type: 'open',
        question: 'Jakie dodatkowe zabezpieczenia danych osobowych powinny zostać wprowadzone?',
      },
    ],
  },
  {
    id: '2',
    ustawaId: '8',
    ustawa: getUstawa('8'),
    title: 'Konsultacje społeczne - Otwarte dane publiczne',
    description: 'Prosimy o opinię w sprawie rozszerzenia katalogu danych publicznych udostępnianych w formacie otwartym.',
    startDate: new Date('2024-12-06'),
    endDate: new Date('2025-01-15'),
    isActive: true,
    totalResponses: 128,
    aiOverview: `## O czym jest ta ustawa?

Projekt ustawy o otwartych danych publicznych ma na celu zwiększenie dostępności informacji publicznych dla obywateli i przedsiębiorców.

## Jakie dane będą udostępnione?

- Dane meteorologiczne
- Statystyki kryminalne
- Wyniki badań naukowych
- Dane o ruchu drogowym
- Dane o jakości powietrza

## Potencjalne korzyści

Szacuje się, że otwarcie danych publicznych może przynieść polskiej gospodarce **500 mln zł rocznie**.`,
    questions: [
      {
        id: '2-1',
        type: 'closed',
        question: 'Które dane publiczne są dla Ciebie najważniejsze?',
        options: ['Dane meteorologiczne', 'Statystyki kryminalne', 'Wyniki badań naukowych', 'Dane o ruchu drogowym'],
        responses: [23, 31, 42, 18],
      },
      {
        id: '2-2',
        type: 'open',
        question: 'Jakie inne dane publiczne powinny zostać udostępnione?',
      },
    ],
  },
  {
    id: '3',
    ustawaId: '3',
    ustawa: getUstawa('3'),
    title: 'Prekonsultacje - Transparentność legislacji',
    description: 'Wstępne konsultacje dotyczące koncepcji ustawy o transparentności procesów legislacyjnych.',
    startDate: new Date('2024-12-01'),
    endDate: new Date('2024-12-15'),
    isActive: true,
    totalResponses: 89,
    aiOverview: `## O czym jest ta ustawa?

Projekt ma na celu zwiększenie przejrzystości tworzenia prawa w Polsce.

## Proponowane rozwiązania

- Centralny portal legislacyjny
- Obowiązek publikacji w czasie rzeczywistym
- Ułatwiony udział w konsultacjach

## Inspiracja

Projekt wzorowany jest na "Legislative Train Schedule" Parlamentu Europejskiego.`,
    questions: [
      {
        id: '3-1',
        type: 'closed',
        question: 'Czy uważasz, że obecny proces legislacyjny jest wystarczająco przejrzysty?',
        options: ['Tak', 'Częściowo', 'Nie', 'Nie wiem'],
        responses: [8, 23, 51, 7],
      },
      {
        id: '3-2',
        type: 'open',
        question: 'Jakie funkcje powinien mieć portal do śledzenia procesu legislacyjnego?',
      },
    ],
  },
  {
    id: '4',
    ustawaId: '11',
    ustawa: getUstawa('11'),
    title: 'Prekonsultacje - Cyfrowe dziedzictwo kulturowe',
    description: 'Zbieramy opinie na temat digitalizacji zbiorów muzealnych i archiwalnych.',
    startDate: new Date('2024-12-02'),
    endDate: new Date('2024-12-18'),
    isActive: true,
    totalResponses: 56,
    aiOverview: `## Cele projektu

Digitalizacja 10 milionów obiektów do 2030 roku i stworzenie centralnego portalu dostępu.

## Budżet

Planowany budżet: **2 mld zł** do 2030 roku.`,
    questions: [
      {
        id: '4-1',
        type: 'closed',
        question: 'Które zbiory powinny być zdigitalizowane w pierwszej kolejności?',
        options: ['Zbiory muzealne', 'Archiwa państwowe', 'Biblioteki', 'Zabytki architektury'],
        responses: [18, 15, 12, 11],
      },
    ],
  },
  {
    id: '5',
    ustawaId: '13',
    ustawa: getUstawa('13'),
    title: 'Konsultacje - Reforma edukacji',
    description: 'Konsultacje dotyczące wprowadzenia nauki programowania do szkół.',
    startDate: new Date('2024-12-04'),
    endDate: new Date('2024-12-24'),
    isActive: true,
    totalResponses: 234,
    aiOverview: `## Główne założenia

Programowanie od pierwszej klasy szkoły podstawowej, z naciskiem na myślenie algorytmiczne.

## Plan wdrożenia

- Scratch w klasach 1-4
- Python w klasach 5-8
- AI i algorytmika w liceum`,
    questions: [
      {
        id: '5-1',
        type: 'closed',
        question: 'Od której klasy powinno się uczyć programowania?',
        options: ['Od 1 klasy', 'Od 4 klasy', 'Od 5 klasy', 'Od liceum'],
        responses: [89, 67, 45, 33],
      },
      {
        id: '5-2',
        type: 'open',
        question: 'Jakie języki programowania powinny być nauczane w szkole?',
      },
    ],
  },
  {
    id: '6',
    ustawaId: '19',
    ustawa: getUstawa('19'),
    title: 'Konsultacje - Rozwój obszarów wiejskich',
    description: 'Konsultacje programu wsparcia dla małych gospodarstw rolnych.',
    startDate: new Date('2024-12-06'),
    endDate: new Date('2025-01-06'),
    isActive: true,
    totalResponses: 78,
    aiOverview: `## Program wsparcia

Dopłaty do 50 tys. zł dla gospodarstw do 10 ha, wsparcie agroturystyki i premie dla młodych rolników.`,
    questions: [
      {
        id: '6-1',
        type: 'closed',
        question: 'Jaka forma wsparcia jest dla Ciebie najważniejsza?',
        options: ['Dopłaty bezpośrednie', 'Kredyty preferencyjne', 'Szkolenia', 'Wsparcie marketingowe'],
        responses: [34, 21, 12, 11],
      },
    ],
  },
  {
    id: '7',
    ustawaId: '23',
    ustawa: getUstawa('23'),
    title: 'Konsultacje - Ekoturystyka',
    description: 'Konsultacje projektu wspierającego zrównoważoną turystykę.',
    startDate: new Date('2024-12-04'),
    endDate: new Date('2024-12-22'),
    isActive: true,
    totalResponses: 67,
    aiOverview: `## Założenia

Certyfikat "Zielony Szlak", ulgi dla agroturystyki, ochrona szlaków turystycznych.`,
    questions: [
      {
        id: '7-1',
        type: 'closed',
        question: 'Czy korzystasz z ofert ekoturystycznych?',
        options: ['Tak, regularnie', 'Czasami', 'Rzadko', 'Nie'],
        responses: [12, 23, 18, 14],
      },
    ],
  },
  {
    id: '8',
    ustawaId: '26',
    ustawa: getUstawa('26'),
    title: 'Konsultacje - Mieszkanie+',
    description: 'Konsultacje nowego programu wsparcia budownictwa mieszkaniowego.',
    startDate: new Date('2024-12-06'),
    endDate: new Date('2025-01-10'),
    isActive: true,
    totalResponses: 189,
    aiOverview: `## Program

Budowa 100 tys. mieszkań na wynajem rocznie, czynsz max 20 zł/m², pierwszeństwo dla młodych rodzin.`,
    questions: [
      {
        id: '8-1',
        type: 'closed',
        question: 'Jaki czynsz za m² byłby dla Ciebie akceptowalny?',
        options: ['Do 15 zł', '15-20 zł', '20-25 zł', 'Powyżej 25 zł'],
        responses: [78, 67, 34, 10],
      },
      {
        id: '8-2',
        type: 'open',
        question: 'Jakie lokalizacje powinny być priorytetowe?',
      },
    ],
  },
  {
    id: '9',
    ustawaId: '30',
    ustawa: getUstawa('30'),
    title: 'Konsultacje - Bezpieczne dzieci online',
    description: 'Konsultacje projektu o ochronie małoletnich w internecie.',
    startDate: new Date('2024-12-06'),
    endDate: new Date('2024-12-28'),
    isActive: true,
    totalResponses: 145,
    aiOverview: `## Założenia

Weryfikacja wieku na platformach 18+, zakaz reklam dla dzieci, obowiązkowa kontrola rodzicielska.`,
    questions: [
      {
        id: '9-1',
        type: 'closed',
        question: 'Czy uważasz, że dzieci powinny mieć ograniczony dostęp do internetu?',
        options: ['Tak, znacząco', 'Tak, częściowo', 'Nie', 'To zależy od wieku'],
        responses: [34, 56, 12, 43],
      },
    ],
  },
  {
    id: '10',
    ustawaId: '34',
    ustawa: getUstawa('34'),
    title: 'Konsultacje - Reforma szkolnictwa wyższego',
    description: 'Konsultacje zmian w finansowaniu uczelni.',
    startDate: new Date('2024-12-04'),
    endDate: new Date('2024-12-24'),
    isActive: true,
    totalResponses: 123,
    aiOverview: `## Propozycje

Algorytm finansowania oparty na jakości, granty dla młodych naukowców, mobilność międzyuczelniana.`,
    questions: [
      {
        id: '10-1',
        type: 'closed',
        question: 'Co powinno być głównym kryterium finansowania uczelni?',
        options: ['Jakość badań', 'Liczba studentów', 'Współpraca z biznesem', 'Zatrudnialność absolwentów'],
        responses: [45, 23, 34, 21],
      },
    ],
  },
  {
    id: '11',
    ustawaId: '38',
    ustawa: getUstawa('38'),
    title: 'Konsultacje - Prawa konsumenta',
    description: 'Konsultacje nowelizacji ustawy o prawach konsumenta.',
    startDate: new Date('2024-12-06'),
    endDate: new Date('2025-01-05'),
    isActive: true,
    totalResponses: 98,
    aiOverview: `## Nowe prawa

Prawo do naprawy, wydłużona gwarancja do 3 lat, zakaz planowanego postarzania produktów.`,
    questions: [
      {
        id: '11-1',
        type: 'closed',
        question: 'Czy zdarzyło Ci się, że produkt zepsuł się tuż po gwarancji?',
        options: ['Tak, wielokrotnie', 'Tak, kilka razy', 'Raz', 'Nie'],
        responses: [34, 45, 12, 7],
      },
    ],
  },
  {
    id: '12',
    ustawaId: '4',
    ustawa: getUstawa('4'),
    title: 'Konsultacje zakończone - e-Tożsamość',
    description: 'Konsultacje dotyczące projektu ustawy o cyfrowej tożsamości obywatela.',
    startDate: new Date('2024-10-01'),
    endDate: new Date('2024-11-30'),
    isActive: false,
    totalResponses: 1247,
    questions: [
      {
        id: '12-1',
        type: 'closed',
        question: 'Czy chciałbyś korzystać z cyfrowego portfela obywatela?',
        options: ['Tak', 'Nie', 'Nie wiem'],
        responses: [876, 234, 137],
      },
    ],
  },
  {
    id: '13',
    ustawaId: '2',
    ustawa: getUstawa('2'),
    title: 'Konsultacje zakończone - Dostępność cyfrowa',
    description: 'Konsultacje dotyczące projektu ustawy o dostępności cyfrowej.',
    startDate: new Date('2024-08-01'),
    endDate: new Date('2024-09-15'),
    isActive: false,
    totalResponses: 567,
    questions: [
      {
        id: '13-1',
        type: 'closed',
        question: 'Czy korzystasz z technologii wspomagających?',
        options: ['Tak, regularnie', 'Tak, czasami', 'Nie'],
        responses: [123, 87, 357],
      },
    ],
  },
  {
    id: '14',
    ustawaId: '15',
    ustawa: getUstawa('15'),
    title: 'Konsultacje zakończone - System kaucyjny',
    description: 'Konsultacje dotyczące wprowadzenia systemu kaucji na opakowania.',
    startDate: new Date('2024-06-01'),
    endDate: new Date('2024-07-31'),
    isActive: false,
    totalResponses: 2341,
    questions: [
      {
        id: '14-1',
        type: 'closed',
        question: 'Czy popierasz wprowadzenie systemu kaucyjnego?',
        options: ['Zdecydowanie tak', 'Raczej tak', 'Raczej nie', 'Zdecydowanie nie'],
        responses: [1234, 678, 289, 140],
      },
    ],
  },
  {
    id: '15',
    ustawaId: '17',
    ustawa: getUstawa('17'),
    title: 'Konsultacje zakończone - Płaca minimalna 2025',
    description: 'Konsultacje dotyczące wysokości płacy minimalnej na rok 2025.',
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-08-31'),
    isActive: false,
    totalResponses: 3456,
    questions: [
      {
        id: '15-1',
        type: 'closed',
        question: 'Jaka powinna być płaca minimalna w 2025 r.?',
        options: ['4500 zł', '4666 zł', '5000 zł', 'Powyżej 5000 zł'],
        responses: [456, 1234, 1123, 643],
      },
    ],
  },
];
