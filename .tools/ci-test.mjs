// Wrapper CI: menjalankan test-simulation.mjs dan menggagalkan build
// jika ada pemeriksaan ✗ (harness asli hanya mencetak, tidak exit non-zero).
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const dir = path.dirname(fileURLToPath(import.meta.url));
const res = spawnSync(process.execPath, [path.join(dir, 'test-simulation.mjs')], {
  stdio: ['inherit', 'pipe', 'inherit'],
  encoding: 'utf8',
});

if (res.error) {
  console.error('Gagal menjalankan test:', res.error);
  process.exit(1);
}
process.stdout.write(res.stdout);

if (res.status !== 0) {
  console.error(`\n✗ test-simulation.mjs keluar dengan kode ${res.status}`);
  process.exit(res.status || 1);
}

const fails = (res.stdout.match(/✗/g) || []).length;
if (fails > 0) {
  console.error(`\n✗ ${fails} pemeriksaan gagal`);
  process.exit(1);
}
console.log('\nSemua pemeriksaan lulus. ✓');
