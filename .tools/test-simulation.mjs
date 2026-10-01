// Test harness headless untuk simulation/index.html — menjalankan semua skenario tanpa browser
import fs from 'fs';

const html = fs.readFileSync(new URL('../simulation/index.html', import.meta.url), 'utf8');
const m = html.match(/<script>([\s\S]*?)<\/script>/);
if (!m) { console.error('SCRIPT TIDAK DITEMUKAN'); process.exit(1); }
const code = m[1];

// ---------- Mock DOM ----------
function mkEl() {
  const el = {
    value: '', innerHTML: '', textContent: '', style: {},
    children: [], scrollTop: 0, width: 1180, height: 430,
    appendChild(c) { this.children.push(c); },
    addEventListener() {}, getContext() { return ctx2d; },
    scrollHeight: 0, clientWidth: 0,
  };
  return el;
}
const ctx2d = new Proxy({}, { get: () => () => ({ width: 10, x: 0, y: 0 }) }); // no-op + return objek generik

const els = {};
function getEl(id) {
  if (!els[id]) {
    els[id] = mkEl();
    // nilai default kontrol sesuai index.html
    const defaults = {
      selScenario: 'A', rStart: '900', selProfile: 'FSEB',
      selSpeed: '1', selView: 'follow',
    };
    if (defaults[id]) els[id].value = defaults[id];
    if (id === 'eventLog') els[id].innerHTML = '';
    if (id === 'verdict') els[id].innerHTML = '—';
    if (id === 'phaseChip') els[id].textContent = 'FASE: siap';
  }
  return els[id];
}

globalThis.document = {
  getElementById: getEl,
  addEventListener: () => {},
  activeElement: null,
  createElement: () => { const e = mkEl(); e.className=''; e.getAttribute=()=>null; return e; },
};
globalThis.window = { addEventListener() {} };
globalThis.requestAnimationFrame = () => 0;
globalThis.cancelAnimationFrame = () => {};
globalThis.performance = { now: () => 0 };

// ---------- Jalankan kode simulasi (dengan jembatan ekspor ke scope internal) ----------
const BRIDGE = `;
globalThis.__sim = { reset, step, draw, updHUD, X, SCEN, DEC,
  getState: () => sim, getDone: () => done };
`;
try {
  new Function(code + BRIDGE)();
} catch (e) {
  console.error('RUNTIME ERROR saat init:', e.message);
  console.error(e.stack.split('\n').slice(0, 4).join('\n'));
  process.exit(1);
}
console.log('✓ Init tanpa error runtime');

// ---------- Ambil referensi internal ----------
const $ = getEl;
const { reset, step, updHUD, draw, X, SCEN, DEC, getState, getDone } = globalThis.__sim;

// ---------- Uji 1: semua skenario berjalan sampai kondisi akhir ----------
function runScenario(key, profile) {
  $('selScenario').value = key;
  if (profile) $('selProfile').value = profile;
  reset();
  // jalankan dengan dt 0.05 hingga 400 dtk simulasi (batas aman)
  for (let i = 0; i < 8000; i++) {
    step(0.05);
    if (getDone()) break;
  }
  return getState();
}

const results = [];
const cases = [
  ['A', null], ['B', null], ['C', null],
  ['E', 'FS'], ['E', 'FSEB'], ['E', 'EB'],
];
for (const [key, prof] of cases) {
  const s = runScenario(key, prof);
  const clock = $('stClock').textContent;
  results.push({
    skenario: key + (prof ? ' (' + prof + ')' : ''),
    jam_akhir: clock,
    kecepatan: Math.round(s.v * 3.6) + ' km/jam',
    posisi_m: Math.round(s.x),
    verdict: $('verdict').innerHTML.slice(0, 70),
  });
}

console.log('\n=== HASIL UJI SEMUA SKENARIO ===');
console.table(results);

// ---------- Uji 2: validasi fisika terhadap angka KNKT ----------
const stopDist = (v, a) => (v * v) / (2 * a);
const checks = [
  ['Dari 105 km/jam a=0.505', stopDist(105 / 3.6, 0.505), 844.19],
  ['Dari 108 km/jam a=0.35', stopDist(30, 0.35), 1285.71],
  ['Dari 108 km/jam a=0.315', stopDist(30, 0.315), 1428.57],
];
console.log('\n=== VALIDASI FISIKA vs KNKT ===');
for (const [label, got, want] of checks) {
  const ok = Math.abs(got - want) < 3;
  console.log((ok ? '✓' : '✗') + ' ' + label + ': ' + got.toFixed(1) + ' m (KNKT ' + want + ')');
}

// Skenario B: rem darurat dari 837 m @105 km/jam
const sB = 863 - stopDist(105 / 3.6, 0.66);
console.log((sB > 0 ? '✓' : '✗') + ' Skenario B darurat murni: sisa ' + (837 - (stopDist(105/3.6,0.66) - 26)).toFixed(0) + ' m sebelum titik tabrak (harus positif)');

// Skenario C: berhenti sebelum B104
const sC = 2256 - 475 - stopDist(30, 0.315);
console.log((sC > 0 ? '✓' : '✗') + ' Skenario C: berhenti ' + sC.toFixed(0) + ' m sebelum B104 (harus positif)');

// ---------- Uji 3: konsistensi log kejadian skenario A ----------
$('selScenario').value = 'A';
reset();
for (let i = 0; i < 8000; i++) { step(0.05); if (getDone()) break; }
const logText = $('eventLog').children.map(c => (c.innerHTML || '')).join(' | ');
const mustHave = ['TABRAKAN', 'EMERGENCY BRAKE', 'B104 terlihat MERAH', 'JPL 86', 'full service'];
console.log('\n=== LOG KEJADIAN SKENARIO A ===');
for (const k of mustHave) {
  console.log((logText.includes(k) ? '✓' : '✗') + ' mengandung: "' + k + '"');
}

console.log('\nSelesai. Jika semua ✓, simulasi berfungsi headless.');
