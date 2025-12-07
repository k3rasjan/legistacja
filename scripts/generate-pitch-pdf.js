const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const doc = new PDFDocument({ size: 'A4', margin: 50 });
const outputPath = path.join(__dirname, '..', 'PITCH_SCRIPT.pdf');
doc.pipe(fs.createWriteStream(outputPath));

const content = fs.readFileSync(path.join(__dirname, '..', 'PITCH_SCRIPT.md'), 'utf8');
const lines = content.split('\n');

lines.forEach(line => {
  if (line.startsWith('# ')) {
    doc.fontSize(24).font('Helvetica-Bold').fillColor('#18181B')
       .text(line.substring(2), { lineGap: 10 });
  } else if (line.startsWith('## ')) {
    doc.moveDown(0.5);
    doc.fontSize(18).font('Helvetica-Bold').fillColor('#10B981')
       .text(line.substring(3), { lineGap: 8 });
  } else if (line.startsWith('**') && line.endsWith('**')) {
    doc.fontSize(14).font('Helvetica-Bold').fillColor('#18181B')
       .text(line.replace(/\*\*/g, ''), { lineGap: 4 });
  } else if (line.trim()) {
    doc.fontSize(12).font('Helvetica').fillColor('#71717A')
       .text(line.replace(/\*\*/g, ''), { lineGap: 4 });
  } else {
    doc.moveDown(0.3);
  }
});

doc.end();
console.log('Created:', outputPath);
