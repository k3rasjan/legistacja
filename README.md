# Legistacja

### Czym jest projekt

**Legistacja** to polska platforma do monitorowania legislacji, zbudowana, aby w jak najprzystępniejszej dla każdego formie pomagać obywatelom Polski rozumieć, śledzić i angażować się w proces ustawodawczy w dostępny i nowoczesny sposób.

---

### Główny Cel

Platforma upraszcza obywatelom dostęp do procesu ustawodawczego w Polsce, w bezstronnej i prostej do zrozumienia formie.

- Informuje użytkownika o nowych inicjatywach legislacyjnych w Sejmie w najbardziej wygodny dla niego sposób.
- **Dla zainteresowanych i zaawansowanych:** przewijana strona "Dla ciebie" z najnowszymi, personalizowanymi zmianami w interesujących go projektach oraz głosowaniem w konsultacjach społecznych.
- **Dla preferujących informacje w pigułce:** Podsumowanie okresu od ostatniej wizyty w formie animowanych, przystępnych i przyjemnych dla oka zajawek, z możliwością dowiedzenia się więcej (bez potrzeby posiadania konta!).
- **Dla trzymających się tradycji:** Lista nowości od ostatniej wizyty z podsumowaniami.

---

### Legislacyjna sekcja 'Dla Ciebie'

Chronologiczna oś czasu z aktualizacjami o projektach ustaw. Każda zmiana zawiera automatycznie wygenerowane podsumowanie AI.

### Inteligentne wyszukiwanie

Znajdź ustawy, które Cię dotyczą – nawet bez znajomości terminologii prawniczej.

### Szczegóły ustawy

- Status procesu legislacyjnego w czasie rzeczywistym.
- Sekcja "Co się zmieni?" z analizą wpływu na obywateli.
- Szczegółowa analiza AI.
- Dostęp do dokumentów źródłowych.

### Zmiany w pigułce

Inspirowane Spotify Wrapped – spersonalizowane podsumowanie najważniejszych zmian w prawie od ostatniej wizyty.

### Konsultacje społeczne

Przeglądaj aktywne konsultacje i weź udział w kształtowaniu prawa. Logowanie Profilem Zaufanym.

### Powiadomienia

Otrzymuj powiadomienia o zmianach w śledzonych ustawach, nowych konsultacjach i ważnych głosowaniach.

### Śledzenie zmian w projekcie

Kompleksowa strona projektu zawiera wszystkie akty i zmiany go dotyczące. Użytkownik w prosty sposób może dowiedzieć się o aktualnym stanie projektu.

### Analiza AI nastrojów społecznych

W widoku urzędnika dostępny jest przegląd nastrojów konsultacji społecznych przygotowany przez AI. Innowacyjny algorytm będzie sprawdzać utworzone uwagi, dopasowywać je do stanowisk, a następnie przedstawiać w przyjaznej graficznie formie, co pozwoli zaoszczędzić dużo czasu na czytaniu opinii po konsultacjach.

### System Personalizacji

Sekcja 'Dla Ciebie' jest przygotowana pod personalizację – użytkownik będzie otrzymywać aktualizacje prawne dopasowane do jego zainteresowań i trendów. Trochę jak na Instagramie.

---

### Funkcje Dostępności

Funkcje zgodne z wytycznymi dostępności cyfrowej oraz ustawą o zapewnianiu dostępności osobom ze szczególnymi potrzebami:

- Tryb wysokiego kontrastu.
- Przełącznik powiększenia tekstu.
- Redukcja ruchu (dla osób z zaburzeniami błędnika).
- Opcja podkreślania linków.
- Design zgodny ze standardami WCAG.

---

### Model Danych (dostępny szczegółowo w pliku schema.prisma)

| Podmiot               | Opis                                                                  |
| :-------------------- | :-------------------------------------------------------------------- |
| **Ustawa**            | Ustawa/projekt ze statusem, ministerstwem, dokumentami i kategoriami. |
| **Konsultacja**       | Konsultacje publiczne z pytaniami i odpowiedziami.                    |
| **LegislativeUpdate** | Zmiany/aktualizacje ustaw z podsumowaniami AI.                        |
| **UserPreferences**   | Ustawienia personalizacji.                                            |
| **Notification**      | Alerty użytkownika o zmianach w prawie.                               |

**Statusy Legislacyjne:**

1.  Prekonsultacje
2.  Konsultacje
3.  Prace rządowe
4.  Sejm
5.  Senat
6.  Prezydent
7.  Uchwalona
8.  Odrzucona

---

### Stos Technologiczny (Tech Stack)

- **Framework:** Next.js 16 z App Router.
- **UI:** React 19, Tailwind CSS 4, Radix UI.
- **Wykresy:** Recharts.
- **Ikony:** Lucide React.
- **Przechowywanie:** localStorage dla preferencji użytkownika.
- **Markdown:** React Markdown do treści.

---

### Kluczowe Innowacje

Platforma łączy w sobie:

- **Transparentność:** pełny wgląd w proces legislacyjny.
- **Personalizację:** treści dopasowane do sytuacji życiowej użytkownika.
- **Zaangażowanie:** aktywny udział poprzez konsultacje.
- **Ujednolicenie źródeł informacji:** wszystkie dane zunifikowane w jednym, przystępnym miejscu.
- **Wsparcie AI:** Tłumaczenia z języka urzędowego na polski.
- **Dostępność:** najwyższej klasy wsparcie dla wszystkich grup użytkowników.
