const pptxgen = require('pptxgenjs');
const fs = require('fs');
const path = require('path');

// Create presentation
const pres = new pptxgen();

// Set presentation properties
pres.author = 'Legistacja Team';
pres.title = 'Legistacja - Hackathon 2025';
pres.subject = 'Platforma do sledzenia procesu legislacyjnego';
pres.company = 'Hackathon 2025';

// Define colors
const PRIMARY_COLOR = '18181B';
const ACCENT_COLOR = '10B981';
const MUTED_COLOR = '71717A';
const BG_COLOR = 'FFFFFF';

// Helper function to add image if exists
function addImageIfExists(slide, imagePath, options) {
  const fullPath = path.join(__dirname, '..', 'public', imagePath);
  if (fs.existsSync(fullPath)) {
    slide.addImage({ path: fullPath, ...options });
  }
}

// Slide 1: Title
let slide = pres.addSlide();
slide.addText('Legistacja', {
  x: 0.5, y: 2.5, w: '90%', h: 1,
  fontSize: 72, fontFace: 'Arial', bold: true, color: PRIMARY_COLOR,
  align: 'center'
});
slide.addText('Sledz zmiany w prawie jak posty w social media', {
  x: 0.5, y: 3.6, w: '90%', h: 0.6,
  fontSize: 24, fontFace: 'Arial', color: MUTED_COLOR,
  align: 'center'
});
slide.addText('Hackathon 2025', {
  x: 0.5, y: 4.5, w: '90%', h: 0.4,
  fontSize: 18, fontFace: 'Arial', color: ACCENT_COLOR,
  align: 'center'
});

// Slide 2: Problem
slide = pres.addSlide();
slide.addText('Problem', {
  x: 0.5, y: 0.5, w: '90%', h: 0.8,
  fontSize: 44, fontFace: 'Arial', bold: true, color: PRIMARY_COLOR
});
slide.addText('Proces legislacyjny jest nieprzejrzysty', {
  x: 0.5, y: 1.3, w: '90%', h: 0.5,
  fontSize: 24, fontFace: 'Arial', color: MUTED_COLOR
});
slide.addText('Obywatele nie wiedza o zmianach w prawie, ktore ich dotycza. Informacje sa rozproszone po wielu stronach rzadowych, a jezyk prawniczy jest niezrozumialy.', {
  x: 0.5, y: 2.0, w: '90%', h: 0.8,
  fontSize: 16, fontFace: 'Arial', color: MUTED_COLOR
});

// Stats boxes
const stats = [
  { value: '3000+', label: 'aktow prawnych rocznie' },
  { value: '< 1%', label: 'obywateli sledzi proces' },
  { value: '72h', label: 'sredni czas na konsultacje' }
];
stats.forEach((stat, i) => {
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5 + i * 3.2, y: 3.2, w: 3, h: 1.8,
    fill: { color: 'FEE2E2' },
    line: { color: 'FECACA', width: 1 }
  });
  slide.addText(stat.value, {
    x: 0.5 + i * 3.2, y: 3.4, w: 3, h: 0.8,
    fontSize: 36, fontFace: 'Arial', bold: true, color: 'EF4444',
    align: 'center'
  });
  slide.addText(stat.label, {
    x: 0.5 + i * 3.2, y: 4.2, w: 3, h: 0.5,
    fontSize: 14, fontFace: 'Arial', color: MUTED_COLOR,
    align: 'center'
  });
});

// Slide 3: Solution
slide = pres.addSlide();
slide.addText('Rozwiazanie', {
  x: 0.5, y: 0.5, w: '45%', h: 0.8,
  fontSize: 44, fontFace: 'Arial', bold: true, color: PRIMARY_COLOR
});
slide.addText('Legistacja - Twoj osobisty asystent legislacyjny', {
  x: 0.5, y: 1.3, w: '45%', h: 0.5,
  fontSize: 20, fontFace: 'Arial', color: ACCENT_COLOR
});
slide.addText([
  { text: 'Agregujemy dane z oficjalnych zrodel\n', options: { bullet: true } },
  { text: 'Wykorzystujemy AI do generowania podsumowani\n', options: { bullet: true } },
  { text: 'Dostarczamy spersonalizowane powiadomienia', options: { bullet: true } }
], {
  x: 0.5, y: 2.0, w: '45%', h: 2,
  fontSize: 16, fontFace: 'Arial', color: MUTED_COLOR
});
addImageIfExists(slide, 'ss/1.png', { x: 5.5, y: 0.8, w: 4.3, h: 3.5 });

// Slide 4: Feed
slide = pres.addSlide();
slide.addText('Feed legislacyjny', {
  x: 0.5, y: 0.5, w: '45%', h: 0.8,
  fontSize: 44, fontFace: 'Arial', bold: true, color: PRIMARY_COLOR
});
slide.addText('Sledz ustawy jak posty w mediach spolecznosciowych', {
  x: 0.5, y: 1.3, w: '45%', h: 0.5,
  fontSize: 18, fontFace: 'Arial', color: MUTED_COLOR
});
slide.addText([
  { text: 'Chronologiczna os czasu\n', options: { bullet: true } },
  { text: 'AI-generowane podsumowania\n', options: { bullet: true } },
  { text: 'Filtrowanie po kategoriach', options: { bullet: true } }
], {
  x: 0.5, y: 2.0, w: '45%', h: 1.5,
  fontSize: 16, fontFace: 'Arial', color: MUTED_COLOR
});
addImageIfExists(slide, 'ss/image copy 5.png', { x: 5.2, y: 0.5, w: 4.5, h: 4.2 });

// Slide 5: Search
slide = pres.addSlide();
slide.addText('Inteligentne wyszukiwanie', {
  x: 0.5, y: 0.3, w: '90%', h: 0.8,
  fontSize: 40, fontFace: 'Arial', bold: true, color: PRIMARY_COLOR,
  align: 'center'
});
slide.addText('Znajdz ustawy, ktore Cie dotycza', {
  x: 0.5, y: 1.0, w: '90%', h: 0.4,
  fontSize: 18, fontFace: 'Arial', color: MUTED_COLOR,
  align: 'center'
});
addImageIfExists(slide, 'ss/image copy 4.png', { x: 1, y: 1.5, w: 8, h: 3.5 });

// Slide 6: Details
slide = pres.addSlide();
slide.addText('Szczegoly ustawy', {
  x: 5.2, y: 0.5, w: '45%', h: 0.8,
  fontSize: 40, fontFace: 'Arial', bold: true, color: PRIMARY_COLOR
});
slide.addText('Wszystko w jednym miejscu', {
  x: 5.2, y: 1.2, w: '45%', h: 0.4,
  fontSize: 18, fontFace: 'Arial', color: MUTED_COLOR
});
slide.addText([
  { text: 'Status procesu legislacyjnego\n', options: { bullet: true } },
  { text: 'Analiza AI wplywu na obywateli\n', options: { bullet: true } },
  { text: 'Historia dokumentow', options: { bullet: true } }
], {
  x: 5.2, y: 1.8, w: '45%', h: 1.5,
  fontSize: 14, fontFace: 'Arial', color: MUTED_COLOR
});
addImageIfExists(slide, 'ss/image copy 6.png', { x: 0.3, y: 0.5, w: 4.8, h: 4.3 });

// Slide 7: Wrapped
slide = pres.addSlide();
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: '100%', h: '100%',
  fill: { color: 'F5F3FF' }
});
slide.addText('Zmiany w pigulce', {
  x: 0.5, y: 0.5, w: '45%', h: 0.8,
  fontSize: 40, fontFace: 'Arial', bold: true, color: PRIMARY_COLOR
});
slide.addText('Twoj osobisty raport legislacyjny', {
  x: 0.5, y: 1.2, w: '45%', h: 0.4,
  fontSize: 18, fontFace: 'Arial', color: '7C3AED'
});
slide.addText('Inspirowane Spotify Wrapped - spersonalizowane podsumowanie najwazniejszych zmian w prawie od Twojej ostatniej wizyty.', {
  x: 0.5, y: 1.8, w: '45%', h: 1,
  fontSize: 14, fontFace: 'Arial', color: MUTED_COLOR
});
addImageIfExists(slide, 'ss/image.png', { x: 5.2, y: 0.5, w: 4.5, h: 4.2 });

// Slide 8: AI Summary
slide = pres.addSlide();
slide.addText('Podsumowanie AI', {
  x: 0.5, y: 0.3, w: '90%', h: 0.8,
  fontSize: 40, fontFace: 'Arial', bold: true, color: PRIMARY_COLOR,
  align: 'center'
});
slide.addText('AI analizuje wszystkie zmiany i generuje przystepne podsumowanie', {
  x: 0.5, y: 1.0, w: '90%', h: 0.4,
  fontSize: 16, fontFace: 'Arial', color: MUTED_COLOR,
  align: 'center'
});
addImageIfExists(slide, 'ss/image copy 3.png', { x: 1, y: 1.5, w: 8, h: 3.5 });

// Slide 9: Consultations
slide = pres.addSlide();
slide.addText('Konsultacje publiczne', {
  x: 5.2, y: 0.5, w: '45%', h: 0.8,
  fontSize: 40, fontFace: 'Arial', bold: true, color: PRIMARY_COLOR
});
slide.addText('Twoj glos ma znaczenie', {
  x: 5.2, y: 1.2, w: '45%', h: 0.4,
  fontSize: 18, fontFace: 'Arial', color: ACCENT_COLOR
});
slide.addText([
  { text: 'Lista aktywnych konsultacji\n', options: { bullet: true } },
  { text: 'Terminy i statystyki\n', options: { bullet: true } },
  { text: 'Formularz zglaszania uwag', options: { bullet: true } }
], {
  x: 5.2, y: 1.8, w: '45%', h: 1.5,
  fontSize: 14, fontFace: 'Arial', color: MUTED_COLOR
});
addImageIfExists(slide, 'ss/image copy 8.png', { x: 0.3, y: 0.5, w: 4.8, h: 4.3 });

// Slide 10: Notifications
slide = pres.addSlide();
slide.addText('Powiadomienia', {
  x: 0.5, y: 0.5, w: '45%', h: 0.8,
  fontSize: 44, fontFace: 'Arial', bold: true, color: PRIMARY_COLOR
});
slide.addText('Badz na biezaco', {
  x: 0.5, y: 1.2, w: '45%', h: 0.4,
  fontSize: 18, fontFace: 'Arial', color: '3B82F6'
});
slide.addText('Otrzymuj powiadomienia o zmianach w sledzonych ustawach, nowych konsultacjach i waznych glosowaniach.', {
  x: 0.5, y: 1.8, w: '45%', h: 1,
  fontSize: 14, fontFace: 'Arial', color: MUTED_COLOR
});
addImageIfExists(slide, 'ss/image copy 7.png', { x: 5.2, y: 0.5, w: 4.5, h: 4.2 });

// Slide 11: DSA Compliance
slide = pres.addSlide();
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: '100%', h: '100%',
  fill: { color: 'EEF2FF' }
});
slide.addText('Zgodnosc z DSA', {
  x: 0.5, y: 0.5, w: '90%', h: 0.8,
  fontSize: 44, fontFace: 'Arial', bold: true, color: PRIMARY_COLOR,
  align: 'center'
});
slide.addText('Digital Services Act - Akt o uslugach cyfrowych', {
  x: 0.5, y: 1.2, w: '90%', h: 0.4,
  fontSize: 18, fontFace: 'Arial', color: '4F46E5',
  align: 'center'
});
slide.addText('Aplikacja w pelni zgodna z rozporzadzeniem UE 2022/2065', {
  x: 0.5, y: 1.7, w: '90%', h: 0.4,
  fontSize: 14, fontFace: 'Arial', color: MUTED_COLOR,
  align: 'center'
});

const dsaFeatures = [
  { title: 'Przejrzystosc zrodel', desc: 'Art. 14 - Dane z oficjalnego API Sejmu' },
  { title: 'Oznaczanie AI', desc: 'Art. 26 - Wyrazne etykiety dla tresci AI' },
  { title: 'Brak dark patterns', desc: 'Art. 25 - Uczciwy interfejs uzytkownika' },
  { title: 'WCAG 2.2', desc: 'Art. 14(4) - Pelna dostepnosc' }
];
dsaFeatures.forEach((feature, i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 1 + col * 4.2, y: 2.4 + row * 1.4, w: 3.8, h: 1.2,
    fill: { color: 'FFFFFF' },
    line: { color: 'C7D2FE', width: 1 }
  });
  slide.addText(feature.title, {
    x: 1 + col * 4.2, y: 2.5 + row * 1.4, w: 3.8, h: 0.5,
    fontSize: 16, fontFace: 'Arial', bold: true, color: PRIMARY_COLOR,
    align: 'center'
  });
  slide.addText(feature.desc, {
    x: 1 + col * 4.2, y: 3.0 + row * 1.4, w: 3.8, h: 0.4,
    fontSize: 11, fontFace: 'Arial', color: MUTED_COLOR,
    align: 'center'
  });
});

// Slide 12: Technology
slide = pres.addSlide();
slide.addText('Technologia', {
  x: 0.5, y: 0.5, w: '90%', h: 0.8,
  fontSize: 44, fontFace: 'Arial', bold: true, color: PRIMARY_COLOR,
  align: 'center'
});
slide.addText('Nowoczesny stack', {
  x: 0.5, y: 1.2, w: '90%', h: 0.4,
  fontSize: 20, fontFace: 'Arial', color: MUTED_COLOR,
  align: 'center'
});

const techs = [
  { name: 'Next.js 15', desc: 'React framework' },
  { name: 'TypeScript', desc: 'Type safety' },
  { name: 'Tailwind CSS', desc: 'Styling' },
  { name: 'Sejm API', desc: 'Dane legislacyjne' },
  { name: 'AI/LLM', desc: 'Podsumowania' },
  { name: 'Prisma', desc: 'ORM (ready)' }
];
techs.forEach((tech, i) => {
  const row = Math.floor(i / 3);
  const col = i % 3;
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.8 + col * 3.2, y: 2 + row * 1.5, w: 2.8, h: 1.2,
    fill: { color: 'F4F4F5' },
    line: { color: 'E4E4E7', width: 1 }
  });
  slide.addText(tech.name, {
    x: 0.8 + col * 3.2, y: 2.1 + row * 1.5, w: 2.8, h: 0.5,
    fontSize: 16, fontFace: 'Arial', bold: true, color: PRIMARY_COLOR,
    align: 'center'
  });
  slide.addText(tech.desc, {
    x: 0.8 + col * 3.2, y: 2.6 + row * 1.5, w: 2.8, h: 0.4,
    fontSize: 12, fontFace: 'Arial', color: MUTED_COLOR,
    align: 'center'
  });
});

// Slide 13: Thank you
slide = pres.addSlide();
slide.addText('Dziekujemy!', {
  x: 0.5, y: 2, w: '90%', h: 1,
  fontSize: 60, fontFace: 'Arial', bold: true, color: PRIMARY_COLOR,
  align: 'center'
});
slide.addText('Legistacja - Hackathon 2025', {
  x: 0.5, y: 3.2, w: '90%', h: 0.6,
  fontSize: 24, fontFace: 'Arial', color: ACCENT_COLOR,
  align: 'center'
});
slide.addText('Projekt stworzony z pasja do transparentnosci i demokratyzacji dostepu do informacji publicznej.', {
  x: 1, y: 4, w: '80%', h: 0.6,
  fontSize: 16, fontFace: 'Arial', color: MUTED_COLOR,
  align: 'center'
});

// Save presentation
const outputPath = path.join(__dirname, '..', 'Legistacja-Prezentacja.pptx');
pres.writeFile({ fileName: outputPath })
  .then(() => {
    console.log('Presentation created successfully at:', outputPath);
  })
  .catch(err => {
    console.error('Error creating presentation:', err);
  });
