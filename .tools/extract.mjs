import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import fs from 'fs';

const PDF = '../docs/KNKT/KNKT.26.04.03.02-Final-Report.pdf';
const OUT = '../docs/KNKT/final-report-extracted.txt';

const data = new Uint8Array(fs.readFileSync(PDF));
const doc = await pdfjsLib.getDocument({ data, useSystemFonts: true }).promise;

const parts = [];
for (let i = 1; i <= doc.numPages; i++) {
  const page = await doc.getPage(i);
  const tc = await page.getTextContent();
  const text = tc.items.map((it) => it.str).join(' ').replace(/\s+/g, ' ').trim();
  parts.push(`\n===== HALAMAN ${i} =====\n${text}`);
}
fs.writeFileSync(OUT, parts.join('\n'));
console.log('pages:', doc.numPages, '| chars:', parts.join('\n').length);
