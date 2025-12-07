# Legistacja

**Sledz zmiany w prawie jak posty w social media**

Legistacja to platforma demokratyzujaca dostep do informacji o procesie legislacyjnym w Polsce. Agregujemy dane z oficjalnego API Sejmu RP i wykorzystujemy sztuczna inteligencje do generowania przystepnych podsumowań.

## Problem

- **3000+** aktow prawnych powstaje rocznie w Polsce
- **< 1%** obywateli aktywnie sledzi proces legislacyjny
- **72h** to sredni czas na konsultacje spoleczne

Informacje o nowych ustawach sa rozproszone po wielu stronach rzadowych, jezyk prawniczy jest niezrozumialy, a czas na reakcje - zbyt krotki.

## Rozwiazanie

Legistacja umozliwia:
- Sledzenie ustaw jak postow w mediach spolecznosciowych
- Czytanie AI-generowanych podsumowań bez prawniczego zargonu
- Otrzymywanie spersonalizowanych powiadomień
- Udzial w konsultacjach spolecznych

## Funkcje

### Feed legislacyjny
Chronologiczna os czasu z aktualizacjami o projektach ustaw. Kazda zmiana zawiera automatycznie wygenerowane podsumowanie AI.

### Inteligentne wyszukiwanie
Znajdz ustawy, ktore Cie dotycza - nawet bez znajomosci terminologii prawniczej.

### Szczegoly ustawy
- Status procesu legislacyjnego w czasie rzeczywistym
- Sekcja "Co sie zmieni?" z analiza wplywu na obywateli
- Szczegolowa analiza AI
- Dostep do dokumentow zrodlowych

### Zmiany w pigulce
Inspirowane Spotify Wrapped - spersonalizowane podsumowanie najwazniejszych zmian w prawie od ostatniej wizyty.

### Konsultacje spoleczne
Przegladaj aktywne konsultacje i wez udzial w ksztaltowaniu prawa.

### Powiadomienia
Otrzymuj powiadomienia o zmianach w sledzonych ustawach, nowych konsultacjach i waznych glosowaniach.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI, Lucide Icons
- **Charts**: Recharts
- **Database**: Prisma (ready)
- **Data Source**: Sejm API

## Uruchomienie

```bash
# Instalacja zaleznosci
npm install

# Uruchomienie serwera deweloperskiego
npm run dev

# Build produkcyjny
npm run build
npm start
```

Aplikacja bedzie dostepna pod adresem [http://localhost:3000](http://localhost:3000).

## Struktura projektu

```
src/
├── app/
│   ├── page.tsx              # Strona glowna
│   ├── feed/                 # Feed legislacyjny
│   ├── szukaj/               # Wyszukiwarka ustaw
│   ├── ustawa/[id]/          # Szczegoly ustawy
│   ├── obserwowane/          # Obserwowane ustawy
│   ├── konsultacje/          # Konsultacje spoleczne
│   ├── powiadomienia/        # Powiadomienia
│   ├── wrapped/              # Zmiany w pigulce
│   ├── prezentacja/          # Prezentacja projektu
│   └── dsa/                  # Zgodnosc z DSA
├── components/
│   ├── ui/                   # Komponenty UI
│   └── layout/               # Komponenty layoutu
├── contexts/                 # React Contexts
├── lib/                      # Utilities
└── data/                     # Mock data
```

## Zgodnosc z DSA

Aplikacja jest w pelni zgodna z rozporzadzeniem UE 2022/2065 (Digital Services Act):

| Wymog | Artykul | Implementacja |
|-------|---------|---------------|
| Przejrzystosc zrodel | Art. 14 | Dane z oficjalnego API Sejmu RP |
| Oznaczanie AI | Art. 26 | Wyrazne etykiety dla tresci AI |
| Brak dark patterns | Art. 25 | Uczciwy interfejs uzytkownika |
| Dostepnosc | Art. 14(4) | Pelna zgodnosc z WCAG 2.2 |

## Dostepnosc (WCAG 2.2)

Aplikacja oferuje opcje dostepnosci:
- Wysoki kontrast
- Powiekszony tekst
- Ograniczenie animacji
- Podkreslenie linkow

## Materialy

- `Legistacja-Prezentacja.pdf` - Prezentacja projektu (10 stron)
- `Legistacja-Prezentacja.pptx` - Prezentacja PowerPoint
- `PITCH_SCRIPT.md` - Skrypt do pitchu

## Licencja

Projekt stworzony na Hackathon 2025.

---

**Legistacja** - Bo prawo dotyczy kazdego z nas.
