const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const doc = new PDFDocument({
  size: 'A4',
  layout: 'landscape',
  margins: { top: 40, bottom: 40, left: 50, right: 50 }
});

const outputPath = path.join(__dirname, '..', 'Legistacja-Prezentacja.pdf');
doc.pipe(fs.createWriteStream(outputPath));

// Colors matching the original
const BLACK = '#000000';
const BLUE = '#2563EB';
const GRAY = '#6B7280';
const LIGHT_GRAY = '#F3F4F6';
const WHITE = '#FFFFFF';
const GREEN = '#10B981';
const YELLOW = '#F59E0B';
const PURPLE = '#8B5CF6';

const W = 841.89;
const H = 595.28;

function addImage(imagePath, x, y, options = {}) {
  const fullPath = path.join(__dirname, '..', 'public', imagePath);
  if (fs.existsSync(fullPath)) {
    try {
      doc.image(fullPath, x, y, options);
      return true;
    } catch (e) {
      return false;
    }
  }
  return false;
}

function newPage() {
  doc.addPage();
}

// Helper to draw browser mockup frame
function drawBrowserFrame(x, y, w, h) {
  // Browser chrome
  doc.roundedRect(x, y, w, h + 25, 8).fill('#F9FAFB').stroke('#E5E7EB');

  // Title bar
  doc.rect(x, y, w, 25).fill('#F9FAFB');
  doc.roundedRect(x, y, w, 8, 8).fill('#F9FAFB');

  // Traffic lights
  doc.circle(x + 15, y + 12, 5).fill('#EF4444');
  doc.circle(x + 32, y + 12, 5).fill('#F59E0B');
  doc.circle(x + 49, y + 12, 5).fill('#22C55E');

  // URL bar
  doc.roundedRect(x + 70, y + 6, w - 140, 14, 4).fill('#E5E7EB');
  doc.fontSize(7).fillColor(GRAY).text('legislacja-tracker.vercel.app', x + 80, y + 9);

  // Content area border
  doc.rect(x + 1, y + 25, w - 2, h).fill(WHITE);
}

// Draw arrow with text
function drawArrow(x1, y1, x2, y2, color) {
  doc.strokeColor(color).lineWidth(2);
  doc.moveTo(x1, y1).quadraticCurveTo((x1+x2)/2, y1, x2, y2).stroke();
  // Arrowhead
  const angle = Math.atan2(y2 - y1, x2 - x1);
  doc.moveTo(x2, y2)
     .lineTo(x2 - 10 * Math.cos(angle - 0.4), y2 - 10 * Math.sin(angle - 0.4))
     .moveTo(x2, y2)
     .lineTo(x2 - 10 * Math.cos(angle + 0.4), y2 - 10 * Math.sin(angle + 0.4))
     .stroke();
}

// ============================================
// PAGE 1: Title - Moja Legistacja
// ============================================
doc.rect(0, 0, W, H).fill(WHITE);

// Main title "Moja Legistacja"
doc.fontSize(64).font('Helvetica-Bold');
doc.fillColor(BLACK).text('Moja', 50, 80);
doc.fillColor(BLUE).text('Legi', 50, 150, { continued: true });
doc.fillColor(BLACK).text('stacja');

// Subtitle
doc.fontSize(22).font('Helvetica-Oblique').fillColor(BLACK)
   .text('Nowe prawo wszystkich Polakow', 50, 240);

// Team members
doc.fontSize(16).font('Helvetica-Oblique').fillColor(BLACK);
const team = ['Mateusz Borach', 'Wojciech Choros', 'Alexander Gese', 'Mateusz Gliszczynski', 'Mateusz Najsarek', 'Dawid Szymaniak'];
team.forEach((name, i) => {
  doc.text(name, 50, 340 + i * 24);
});

// Right side - app mockup card
doc.roundedRect(480, 100, 320, 380, 12).fill(WHITE).stroke('#E5E7EB');

// Mock feed post inside
doc.circle(510, 140, 18).fill(BLUE);
doc.fontSize(10).fillColor(WHITE).text('M', 504, 134);

doc.fontSize(14).font('Helvetica-Bold').fillColor(BLACK).text('Hacknation', 540, 130);
doc.fontSize(10).font('Helvetica').fillColor(GRAY).text('Ministerstwo Cyfryzacji', 540, 148);

doc.roundedRect(540, 170, 100, 22, 4).fill('#DBEAFE');
doc.fontSize(9).fillColor(BLUE).text('Wdrozenie', 560, 175);

// Tags
doc.roundedRect(500, 200, 100, 20, 4).stroke('#E5E7EB');
doc.fontSize(8).fillColor(GRAY).text('AI w sluzbie informacji', 510, 205);
doc.roundedRect(610, 200, 70, 20, 4).stroke('#E5E7EB');
doc.fontSize(8).fillColor(GRAY).text('dane.gov.pl', 620, 205);

doc.fontSize(12).font('Helvetica-Bold').fillColor(BLACK).text('Moja Legistacja', 500, 240);
doc.fontSize(10).font('Helvetica').fillColor(GRAY)
   .text('Innowacyjny projekt informujacy polki i polakow o najnowszych zmianach legislacyjnych', 500, 260, { width: 280 });

// AI Summary box
doc.roundedRect(500, 310, 280, 100, 8).fill(LIGHT_GRAY);
doc.fontSize(10).font('Helvetica-Bold').fillColor(BLACK).text('Podsumowanie AI', 520, 325);
doc.fontSize(9).font('Helvetica').fillColor(GRAY)
   .text('Ta polska platforma do monitorowania legislacji, zbudowana, aby w jak najprzystepniejszej, dla kazdego formie, pomaga obywatelom Polski rozumiec, sledzic i angazowac sie w proces ustawodawczy.', 520, 345, { width: 250 });

// Follow button
doc.roundedRect(500, 430, 80, 30, 6).fill(BLACK);
doc.fontSize(10).fillColor(WHITE).text('Sledzisz', 520, 439);

// ============================================
// PAGE 2: Informacje w pigulce
// ============================================
newPage();
doc.rect(0, 0, W, H).fill(WHITE);

doc.fontSize(48).font('Helvetica-Bold').fillColor(BLACK)
   .text('Informacje w pigulce', 50, 50);

// Description on right
doc.fontSize(18).font('Helvetica').fillColor(BLACK)
   .text('Uzytkownik, po wejsciu na strone w ciagu kilku sekund dowiaduje sie o tym, co ostatnio dzialo sie w procesie legislacyjnym.', 500, 80, { width: 300, align: 'right' });

doc.text('Dzieje sie to dzieki wpadajacym w oko haslom, generowanym przez modele AI. Ich pelne wersje moze nastepnie przegladac', 500, 180, { width: 300, align: 'right' });

// Screenshots with browser frames
drawBrowserFrame(40, 180, 380, 280);
addImage('ss/image copy.png', 41, 206, { width: 378 });

drawBrowserFrame(280, 300, 380, 220);
addImage('ss/image.png', 281, 326, { width: 378 });

// ============================================
// PAGE 3: Dla kazdego, w najprzystepniejszej formie
// ============================================
newPage();
doc.rect(0, 0, W, H).fill(WHITE);

doc.fontSize(42).font('Helvetica-Bold').fillColor(BLACK)
   .text('Dla kazdego, w najprzystepniejszej formie', 50, 40, { width: 700 });

// Main screenshot with browser frame
drawBrowserFrame(50, 120, 550, 380);
addImage('ss/1.png', 51, 146, { width: 548 });

// Annotations
doc.fontSize(18).font('Helvetica-Bold').fillColor(BLACK)
   .text('Dla tradycjonalistow,', 620, 200)
   .text('tradycyjnie', 620, 225);
drawArrow(615, 220, 520, 250, BLACK);

doc.fillColor(GREEN)
   .text('Dla ciekawskich,', 620, 320)
   .text('zajmujaco', 620, 345);
drawArrow(615, 340, 520, 380, GREEN);

doc.fillColor(BLUE)
   .text('Dla leniwych,', 620, 450)
   .text('w pigulce', 620, 475);
drawArrow(615, 470, 400, 420, BLUE);

// ============================================
// PAGE 4: Gdy ustawa zaciekawi
// ============================================
newPage();
doc.rect(0, 0, W, H).fill(WHITE);

doc.fontSize(48).font('Helvetica-Bold').fillColor(BLACK)
   .text('Gdy ustawa zaciekawi', 50, 40);

// Left side - status process
doc.fontSize(12).font('Helvetica').fillColor(GRAY).text('Status procesu', 50, 180);

const stages = [
  { name: 'Prekonsultacje', done: true },
  { name: 'Konsultacje', done: true },
  { name: 'Prace rzadowe', done: true },
  { name: 'Sejm', done: true },
  { name: 'Senat', done: false },
  { name: 'Prezydent', done: false },
  { name: 'Uchwalona', done: false }
];

stages.forEach((stage, i) => {
  const y = 220 + i * 45;
  // Vertical line
  if (i < stages.length - 1) {
    doc.moveTo(68, y + 15).lineTo(68, y + 45).strokeColor(stage.done ? GREEN : '#E5E7EB').lineWidth(2).stroke();
  }
  // Circle
  doc.circle(68, y, 12).fill(stage.done ? GREEN : WHITE).stroke(stage.done ? GREEN : '#E5E7EB');
  if (stage.done) {
    doc.fontSize(10).fillColor(WHITE).text('✓', 63, y - 5);
  }
  doc.fontSize(14).fillColor(stage.done ? GREEN : GRAY).text(stage.name, 90, y - 7);
});

// Center text
doc.fontSize(20).font('Helvetica').fillColor(BLACK)
   .text('Ustawy nigdy nie byly tak przystepne dla obywateli!', 220, 150, { width: 350, align: 'center' });

doc.fontSize(16).fillColor(GRAY)
   .text('Podsumowania ustaw pisane codziennym jezykiem pozwalaja kazdemu w kilka sekund pojac proponowane zmiany, a czytelny design, pozwala zorientowac sie na jakim etapie jest projekt.', 220, 250, { width: 350, align: 'center' });

doc.text('Uzytkownik moze obserwowac projekt i otrzymywac powiadomienia o zmianach', 220, 380, { width: 350, align: 'center' });

// Right side - AI analysis box
doc.roundedRect(600, 100, 220, 400, 8).fill(LIGHT_GRAY);
doc.fontSize(11).font('Helvetica-Bold').fillColor(BLACK).text('Szczegolowa analiza AI', 620, 120);
doc.fontSize(9).font('Helvetica').fillColor(GRAY)
   .text('Szczegolowa analiza projektu podatku cyfrowego:', 620, 145, { width: 190 });

doc.fontSize(8).font('Helvetica-Bold').fillColor(BLACK).text('**STAWKA I PROG:**', 620, 175);
doc.fontSize(8).font('Helvetica').fillColor(GRAY)
   .text('• Stawka: 3% od przychodow krajowych\n• Prog: obrot globalny 750 mln EUR\n• Prog krajowy: 5 mln EUR przychodow', 620, 190, { width: 190 });

doc.fontSize(8).font('Helvetica-Bold').fillColor(BLACK).text('**OBJETE DZIALALNOSCI:**', 620, 250);
doc.fontSize(8).font('Helvetica').fillColor(GRAY)
   .text('1. Reklamy online\n2. Posrednictwo cyfrowe\n3. Sprzedaz danych', 620, 265, { width: 190 });

doc.fontSize(8).font('Helvetica-Bold').fillColor(BLACK).text('**SZACOWANE WPLYWY: 2 MLD ZL**', 620, 330);

// ============================================
// PAGE 5: Konsultacje spoleczne
// ============================================
newPage();
doc.rect(0, 0, W, H).fill(WHITE);

doc.fontSize(42).font('Helvetica-Bold').fillColor(BLACK)
   .text('Konsultacje spoleczne -', 50, 40)
   .text('w koncu w jednym miejscu!', 50, 90);

// Screenshots
drawBrowserFrame(50, 200, 380, 300);
addImage('ss/image copy 8.png', 51, 226, { width: 378 });

// Right side explanation
doc.roundedRect(480, 150, 320, 200, 8).fill(LIGHT_GRAY);
doc.fontSize(10).font('Helvetica-Bold').fillColor(BLACK).text('Podsumowanie AI', 500, 170);
doc.fontSize(9).font('Helvetica').fillColor(GRAY)
   .text('Przeczytaj podsumowanie przed udzialem w konsultacjach', 500, 185, { width: 280 });

doc.fontSize(10).font('Helvetica-Bold').fillColor(BLACK).text('O czym jest ta ustawa?', 500, 215);
doc.fontSize(9).font('Helvetica').fillColor(GRAY)
   .text('Projekt ma na celu zwiekszenie przejrzystosci tworzenia prawa w Polsce.', 500, 230, { width: 280 });

doc.fontSize(10).font('Helvetica-Bold').fillColor(BLACK).text('Proponowane rozwiazania', 500, 265);
doc.fontSize(9).font('Helvetica').fillColor(GRAY)
   .text('• Centralny portal legislacyjny\n• Obowiazek publikacji w czasie rzeczywistym\n• Ulatwiony udzial w konsultacjach', 500, 280, { width: 280 });

// Bottom text
doc.fontSize(16).font('Helvetica').fillColor(BLACK)
   .text('Dzieki zapoznaniu uzytkownika z trescia ustawy przed konsultacja, sprawiamy, ze jego odpowiedzi sa swiadome, a udzielenie ich - prostsze', 480, 420, { width: 320, align: 'right' });

// ============================================
// PAGE 6: Prosty feedback dla urzednikow
// ============================================
newPage();
doc.rect(0, 0, W, H).fill(WHITE);

doc.fontSize(48).font('Helvetica-Bold').fillColor(BLACK)
   .text('Prosty feedback dla urzednikow', 0, 40, { align: 'center', width: W });

// Left description
doc.fontSize(20).font('Helvetica').fillColor(BLACK)
   .text('AI podsumowuje i grupuje odpowiedzi na pytania otwarte z konsultacji spolecznych', 50, 120, { width: 300, align: 'center' });

// Stats boxes representation
doc.roundedRect(500, 120, 300, 120, 8).fill(LIGHT_GRAY);
doc.fontSize(28).font('Helvetica-Bold').fillColor(BLACK).text('909', 520, 145);
doc.fontSize(10).fillColor(GRAY).text('Wszystkich', 520, 178);

doc.fontSize(28).font('Helvetica-Bold').fillColor(BLACK).text('456', 590, 145);
doc.fontSize(10).fillColor(GRAY).text('Pozytywnych', 590, 178);

doc.fontSize(28).font('Helvetica-Bold').fillColor(BLACK).text('111', 670, 145);
doc.fontSize(10).fillColor(GRAY).text('Neutralnych', 670, 178);

doc.fontSize(28).font('Helvetica-Bold').fillColor(BLACK).text('342', 740, 145);
doc.fontSize(10).fillColor(GRAY).text('Negatywnych', 740, 178);

// Chart area representation
doc.roundedRect(500, 260, 140, 140, 8).fill(LIGHT_GRAY);
doc.fontSize(10).fillColor(GRAY).text('ROZKLAD SENTYMENTU', 510, 275);
doc.circle(570, 340, 50).stroke('#E5E7EB');

doc.roundedRect(660, 260, 140, 140, 8).fill(LIGHT_GRAY);
doc.fontSize(10).fillColor(GRAY).text('ODPOWIEDZI W CZASIE', 670, 275);

// Bottom text
doc.fontSize(16).font('Helvetica').fillColor(BLACK)
   .text('Dzieki temu, zorientowanie sie w trendach spolecznych zajmuje tylko kilka sekund i nie wymaga mozolnego czytania wszystkich wnioskow', 500, 450, { width: 300, align: 'right' });

// ============================================
// PAGE 7: Dla bardziej zainteresowanych
// ============================================
newPage();
doc.rect(0, 0, W, H).fill(WHITE);

doc.fontSize(48).font('Helvetica-Bold').fillColor(BLACK)
   .text('Dla bardziej zainteresowanych', 50, 40);

doc.fontSize(16).font('Helvetica-Oblique').fillColor(BLACK)
   .text('Odkryj prace Sejmu na nowo w zakladce Dla Ciebie. To Twoje nowoczesne centrum informacji: przegladaj aktualnosci, zglebiaj poselskie inicjatywy i miej realny wplyw na prawo, biorac udzial w konsultacjach spolecznych.', 50, 110, { width: 700 });

// Logo in center
doc.fontSize(48).font('Helvetica-Bold');
doc.fillColor(BLACK).text('Moja', 300, 280);
doc.fillColor(BLUE).text('Legi', 300, 340, { continued: true });
doc.fillColor(BLACK).text('stacja');
doc.fontSize(20).font('Helvetica-Oblique').fillColor(GRAY).text('Dla Ciebie', 300, 410);

// Phone mockup on right
doc.roundedRect(620, 180, 180, 350, 20).fill(LIGHT_GRAY).stroke('#E5E7EB');
addImage('ss/image copy 5.png', 630, 200, { width: 160 });

// ============================================
// PAGE 8: Dalsze wdrozenia
// ============================================
newPage();
doc.rect(0, 0, W, H).fill(WHITE);

doc.fontSize(48).font('Helvetica-Bold').fillColor(BLACK)
   .text('Dalsze wdrozenia', 50, 40);

doc.fontSize(16).font('Helvetica').fillColor(BLACK)
   .text('Projekt powstal z mysla o realnym wdrozeniu.', 50, 110)
   .text('Proces ten jest przemyslany dzieki:', 50, 135);

// Database schema placeholder
doc.roundedRect(50, 180, 350, 300, 8).fill('#1F2937');
doc.fontSize(10).fillColor(WHITE).text('Database Schema', 70, 200);
// Simple schema representation
doc.fontSize(8).fillColor('#9CA3AF');
const tables = ['StageChange', 'Project', 'ActType', 'User', 'Vote', 'LegislativeAct', 'Question', 'AnswerOption'];
tables.forEach((t, i) => {
  const x = 70 + (i % 3) * 110;
  const y = 240 + Math.floor(i / 3) * 80;
  doc.roundedRect(x, y, 100, 60, 4).fill('#374151');
  doc.fontSize(8).fillColor(WHITE).text(t, x + 10, y + 25);
});

// Right side - bullet points
doc.fontSize(13).font('Helvetica').fillColor(BLACK);
const points = [
  'W sklad projektu wchodzi kompleksowy projekt bazy danych, ktora jest przystosowana pod integracje danych z sejm.gov i RCL.',
  'W kodzie zrodlowym istnieje miejsce na integracje z profilem zaufanym.',
  'Aplikacja jest przygotowana pod korzystanie z hostowanych lokalnie modeli AI typu open-source jak GPT-OSS.',
  'Zgodnosc z WCAG 2.2 i Aktami o uslugach cyfrowych',
  'Pelna modulowosc projektu, co umozliwia dalsze tworzenie feature\'ow: tlumaczenia, personalizacja, odpowiedzi ekspertow.'
];

points.forEach((point, i) => {
  doc.circle(440, 195 + i * 70, 4).fill(BLACK);
  doc.fontSize(12).font('Helvetica').fillColor(BLACK)
     .text(point, 455, 185 + i * 70, { width: 340 });
});

// ============================================
// PAGE 9: Thank you / Contact
// ============================================
newPage();
doc.rect(0, 0, W, H).fill(WHITE);

doc.fontSize(64).font('Helvetica-Bold');
doc.fillColor(BLACK).text('Moja', 0, 180, { align: 'center', width: W });
doc.fillColor(BLUE).text('Legi', 0, 250, { align: 'center', width: W, continued: true });
doc.fillColor(BLACK).text('stacja', { continued: false });

doc.fontSize(24).font('Helvetica-Oblique').fillColor(GRAY)
   .text('Nowe prawo wszystkich Polakow', 0, 340, { align: 'center', width: W });

doc.fontSize(16).font('Helvetica').fillColor(BLACK)
   .text('Dziekujemy za uwage!', 0, 420, { align: 'center', width: W });

doc.fontSize(12).fillColor(GRAY)
   .text('Ministerstwo Cyfryzacji • Hackathon 2025', 0, 480, { align: 'center', width: W });

// Finalize
doc.end();
console.log('PDF presentation created:', outputPath);
