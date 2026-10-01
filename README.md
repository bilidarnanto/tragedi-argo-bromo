# Tragedi KA Argo Bromo Anggrek — Stasiun Bekasi Timur, 27 April 2026

Proyek penelitian & pemodelan kecelakaan perkeretaapian: **tabrakan antara KA 4B Argo Bromo Anggrek
(relasi Gambir–Surabaya Pasarturi) dengan KA 5568A Commuter Line (relasi Kampungbandan–Cikarang)
di Jalur I Stasiun Bekasi Timur, Daop 1 Jakarta, 27 April 2026, pukul 20.52 WIB**.

- Korban: **16 meninggal dunia, 107 luka-luka** (total 123).
- Laporan investigasi resmi: **KNKT.26.04.03.02-Final-Report** (rilis 28–29 September 2026).
- Kontroversi: **masinis ditetapkan sebagai tersangka** (Polda Metro Jaya, 29 September 2026)
  hanya sehari setelah laporan KNKT yang menemukan **enam faktor sistemik** yang berkontribusi.

## Tujuan Proyek

1. Menghimpun dan mengarsipkan sebanyak mungkin sumber primer & sekunder.
2. Memodelkan kronologi kejadian secara detail dan dapat diverifikasi (setiap klaim berisi referensi).
3. Menganalisis kesenjangan antara temuan investigasi keselamatan (KNKT) dan proses hukum pidana.

## Struktur Proyek

```
tragedi-argo-bromo/
├── README.md              ← Anda di sini
├── sources.md             ← Katalog lengkap semua sumber (primer & sekunder) + arsip tautan
├── article/
│   ├── tragedi-bekasi-timur.md  ← Artikel long-form naratif untuk publik
│   └── index.html               ← Versi web magazine artikel (buka di browser)
├── docs/
│   ├── KNKT/
│   │   ├── KNKT.26.04.03.02-Final-Report.pdf     ← Laporan akhir resmi (arsip, 141 hlm)
│   │   ├── final-report-extracted.txt            ← Teks mentah hasil ekstraksi PDF
│   │   └── final-report-formatted.txt            ← Teks berformat per halaman (untuk telusuri)
│   └── media/             ← Arsip artikel media (deskripsi di sources.md)
├── model/
│   ├── 01-kronologi.md    ← Timeline rekonstruksi menit-per-menit
│   ├── 02-faktor-berkontribusi.md ← 6 faktor KNKT dianalisis dengan mekanisme sebab-akibat
│   ├── 03-rantai-kejadian.md      ← Peta causal chain 12 simpul + Swiss Cheese + counterfactual
│   └── 04-sidang-masinis.md       ← Analisis dual-track: KNKT vs penyidikan pidana
└── simulation/
    └── index.html         ← UI simulasi interaktif + peta rantai kejadian (buka di browser)
```

## Metodologi

- **Sumber primer**: laporan akhir KNKT (arsip PDF di dalam proyek), keterangan resmi Polda Metro Jaya,
  pernyataan KAI/Kemenhub/DPR.
- **Sumber sekunder**: pemberitaan media arus utama (detikcom, Kompas, ANTARA, Sindonews, Kompas TV,
  Media Indonesia) yang dikutip silang dengan laporan primer.
- **Aturan sitasi**: setiap klaim faktual dalam model ditandai `[S#]` mengacu pada `sources.md`;
  kutipan langsung ditandai blok kutip.
- **Batasan**: KNKT secara eksplisit menyatakan identifikasi faktor berkontribusi *bukan* penetapan
  kesalahan/tanggung jawab administratif, perdata, atau pidana. Model ini memisahkan fakta investigasi
  keselamatan dari proses hukum pidana yang masih berjalan.

## Simulasi Interaktif

Buka `simulation/index.html` langsung di browser (tanpa server, tanpa dependensi).

- **Canvas lintasan**: J12 → lengkung IP.MC22D → UB104 → B104 → titik tabrakan, dengan KA 5568A terduduki di Jalur I.
- **Fisika logger KNKT**: dekelerasi full service −0,35 m/s², emergency −0,66 m/s², kenyamanan ISO 2631 −0,315 m/s², rata-rata kejadian −0,505 m/s².
- **4 skenario**: (A) kejadian aktual kalibrasi logger; (B) rem darurat sejak B104 merah; (C) peringatan kuning tersedia di J12; (E) kustom — pilih titik mulai rem & pola rem.
- **HUD**: waktu master, kecepatan, jarak, posisi km, status rem, aspek sinyal hidup (J12/UB104/B104).
- **Log kejadian** master time + **verdict** akhir (kecepatan benturan / margin berhenti, % energi benturan vs aktual).
- **Peta rantai kejadian interaktif**: 12 simpul (C1–C12) klik-ke-faktor; chip F1–F6 menampilkan penjelasan mekanisme, lapisan pertahanan (Swiss Cheese), dan rujukan KNKT.
- **Garis waktu**: slider seek + pintasan keyboard (Spasi, ←/→, R) untuk melompat ke detik mana pun.
- **Analisis sensitivitas**: "jika hanya SATU faktor dipulihkan" — 7 konfigurasi dihitung kinematika; sebagian bisa dimuat langsung ke simulasi.

Batasan model: perlambatan rata-rata per fase (data logger KNKT tidak seragam), deviasi kecepatan benturan ±8 km/jam vs logger — dicatat transparan di panel data.

## Status

- [x] Pengumpulan sumber (23+ sumber katalogisasi)
- [x] Arsip laporan akhir KNKT (PDF + ekstraksi teks)
- [x] Model kronologi menit-per-menit
- [x] Model faktor berkontribusi (6 faktor + mekanisme)
- [x] Model rantai kejadian & counterfactual
- [x] Analisis kasus masinis (KNKT vs penyidikan)
- [x] UI simulasi interaktif (fisika berbasis logger, 4 skenario)
- [x] Uji headless semua skenario (test harness: `.tools/test-simulation.mjs`) — fisika tervalidasi vs angka KNKT
- [x] Peta rantai kejadian interaktif (klik-ke-faktor) di dalam simulasi
- [x] Artikel long-form publik (`article/tragedi-bekasi-timur.md` + versi web magazine)
- [x] Garis waktu seek + pintasan keyboard
- [x] Analisis sensitivitas satu-faktor (7 konfigurasi)
- [ ] (opsional) rekonkiliasi angka penyidik vs KNKT saat dokumen penyidikan terbuka

## Repositori Git

Repo ini di-hosting di GitHub:

```bash
git clone https://github.com/bestprofitsurabaya/tragedi-argo-bromo.git
```

Branch utama: `main`.

Catatan: toolchain git lokal ada di `.tools/gitenv/` (diabaikan git); kredensial
(GitHub token, SSH NAS) JANGAN pernah di-commit.

## Kredensial Sumber Utama

| Dokumen | Nomor | Status |
|---|---|---|
| Laporan akhir KNKT | KNKT.26.04.03.02 | Final, dirilis 28–29 Sep 2026 |
| Penetapan tersangka | Polda Metro Jaya, 29 Sep 2026 | AN (37), masinis KA 4B |
| Tersangka kasus JPL 86 | Polres Metro Bekasi Kota, 21 Mei 2026 | RRP, sopir taksi Green SM |
