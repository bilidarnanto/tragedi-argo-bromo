# 01 — Kronologi Rekonstruksi (Menit per Menit)

> Sumber utama: [S1] laporan akhir KNKT (waktu "master time" hasil sinkronisasi CCTV KA 5568A,
> OBU taksi, voice logger, dan data logger lokomotif); dilengkapi [S4], [S5], [S13].
> Selisih jam antar-perangkat di Daop 1 tidak seragam [S1 temuan #6]; semua waktu di sini
> sudah merujuk master time KNKT.

## 0. Latar — Malam 27 April 2026

| Waktu (WIB) | Peristiwa | Ref |
|---|---|---|
| (rencana GAPEKA) | KA 5568A seharusnya berangkat dari St. Bekasi; realisasi **terlambat 8 mnt 32 dtk** | [S1 temuan #5] |
| (rencana GAPEKA) | KA 4B Argo Bromo Anggrek seharusnya berangkat lebih akhir; realisasi **lebih awal 3 mnt 17 dtk** | [S1 temuan #5] |
| ±20:48 | KA 4B berjalan langsung dari Jalur III St. Bekasi (dilayani sinyal keluar J12 hijau) | [S4], [S8] |

Deviasi ganda ini mempersempit jarak waktu antara kedua kereta hingga akhirnya ±2 menit —
kondisi yang oleh KNKT disimulasikan tetap "dapat dilanjutkan dengan headway 2 mnt 48 dtk"
*seandainya tidak ada kejadian pengganggu* [S1 temuan #7].

## 1. Peristiwa Pertama — KRL 5181B vs Taksi Listrik di JPL 86

| Waktu (WIB) | Peristiwa | Ref |
|---|---|---|
| **20:48:24** | KA 5181B Commuter Line (arah Tambun → Bekasi Timur, jalur **hilir**) menabrak taksi listrik berbasis baterai di JPL 86 Jalan Ampera. OBU taksi mencatat tanda benturan & baterai tegangan tinggi mati, hazard aktif | [S1 hlm. 79 & lamp. 1] |
| 20:48:31 | Masinis KA 5181B berhenti pasca tabrakan; berusaha melepas microphone radio Tait yang **tersangkut di dudukannya** | [S1 lamp. 4] |
| 20:48:51 | Masinis mulai menelepon PPKP Selatan — **berdiri, mic masih terpasang (>5 cm)**; audio menghasilkan reverb, warbling, volume kecil | [S1 temuan #10–13] |
| 20:49:06 | PPKP Selatan: "Repeat kembali, terima PK modulasi kurang sempurna" — proses klarifikasi berulang | [S1 lamp. 4] |
| 20:49:44 | Masinis 5181B: "Mobilnya nyangkut Pak di depan"; memakai radio HT sebagai saluran alternatif | [S1 lamp. 4] |
| 20:50:02 | Informasi lokasi baru dipahami: "di Km 29 piket 4 ke 3, antara Tambun ke Bekasi" | [S1 lamp. 4] |
| **±20:51:44** | Proses klarifikasi selesai — total **3 menit 20 detik** untuk satu informasi darurat | [S1 temuan #9] |

Catatan: panggilan dilakukan via **tombol PTT individual, bukan tombol emergency** [S1 temuan #15].
PPKP Selatan saat itu mengoperasikan 4 layar monitoring + 5 layar/mic komunikasi + 2 telepon,
dengan speaker eksternal yang saling terdengar (polusi suara) [S1 temuan #18–19].

## 2. KRL 5568A Tertahan di Jalur I Stasiun Bekasi Timur

| Waktu (WIB) | Peristiwa | Ref |
|---|---|---|
| **20:48:55** | KA 5568A (KRL, jalur **hulu**) berhenti di Jalur I St. Bekasi Timur untuk naik-turun penumpang | [S4] |
| 20:49:37 | Masinis 5568A panggil PPKP Selatan: "Halo Pak PPKP, 5568 mohon info Bekasi Timur?" — panggilan **individual**, bukan emergency (tidak ada notifikasi di konsol Sepura S.27) | [S1 temuan #17, lamp. 4] |
| 20:49:19 | KA 5568A bergerak ±1,69 m ke arah Tambun | [S4] |
| 20:49:24 | Berhenti lagi — masinis melihat **kerumunan masyarakat** di jalur hulu arah Tambun (efek kejadian JPL 86) | [S4] |
| 20:50:23 | PPKP Selatan (sibuk urusan 5181B): "075 Tambun pertahanan dulu" | [S1 lamp. 4] |
| 20:50:28 | Masinis 5568A: "5568 masih pertahanan Bekasi Timur Pak" — **informasi tertahannya 5568A tidak sampai ke pengendalian** | [S1 faktor #3] |

Akibatnya: PPKP Selatan **dan** PPKP Timur tidak memegang informasi lengkap bahwa Jalur I
Bekasi Timur terduduki [S1 faktor #3–4]. Tak ada prosedur yang mengatur pertukaran informasi
antara kedua pos pengendali [S1 temuan #23].

## 3. KA 4B Melaju Menuju Bekasi Timur — Geometri & Persinyalan

| Parameter | Nilai | Ref |
|---|---|---|
| Sinyal keluar J12 St. Bekasi | **Hijau**, Km 26+659 | [S1 hlm. 72] |
| Lengkung IP.MC22D | ML Km 27+398 → AL Km 27+685, radius 946 m | [S1 hlm. 72] |
| Sinyal Pembantu UB104 | Km 28+030 (menampilkan putih **horisontal** = sinyal utama tak aman) | [S1 temuan #31, 34] |
| Sinyal Blok B104 | Km 28+440 — **merah** (track 104BT terduduki oleh 5568A) | [S1 temuan #25] |
| Jarak tampak B104 | baru terlihat ±410 m (standar PM 44/2018: 600 m) → dipasang UB104 | [S11] |
| Titik tabrakan | Km 28+915 (Jalur I) | [S1 temuan #40] |

Urutan aspek yang dialami masinis: **hijau (J12) → [UB104 tak teridentifikasi] → merah (B104)** —
tanpa kuning sebagai peringatan, karena perilaku J12 terhadap okupasi track 104AT/104BT
tidak pernah teridentifikasi sejak review desain 2021–2022 [S1 faktor #1, temuan #26–36].

Faktor penglihatan malam: UB104 (LED putih) sulit dibedakan dari lampu rumah warga & pju;
windshield polycarbonate penuh goresan wiper & swirl mark menyebabkan light scattering [S1 temuan #33, 38–39].

## 4. Fase Pengereman KA 4B — Data Logger Lokomotif

| Waktu (WIB) | Jarak ke titik tabrakan | Kecepatan | Aksi | Ref |
|---|---|---|---|---|
| 20:51:06–20:51:18 | — | 108 km/jam | Asisten Masinis menerima info kecelakaan hilir dari PPKP Timur | [S1 hlm. 74] |
| **20:51:16** | 1.315 m (Km 28+600) | 108 km/jam | Service brake **minimum reduction** (BP 71→65 psi), bail-off, throttle T7 | [S1 temuan #42, 45] |
| 20:51:33 | ±863 m | 105 km/jam | Asisten Masinis laporkan ke PPKP Timur: "B104 merah" | [S1 hlm. 75] |
| **20:51:34** | 863 m → 611 m | 105→95 km/jam | Tuas rem ke **full service** (BP 62→49 psi); masinis melakukan bail-off BC lokomotif 8→0 psi (hindari hentakan antarrangkaian) | [S1 hlm. 75–76] |
| 20:51:43–20:51:55 | 611 m → 322 m | 95→79 km/jam | Full service dipertahankan 13 dtk; throttle T5→T4 di Km 28+545 | [S1 hlm. 76] |
| **20:51:56** | **275 m** (Km 28+588) | **78 km/jam** | **Emergency brake** ditarik — setelah keluar lengkung; BP 43→0 psi, BC 0→70 psi dalam 4 dtk; PCS open, traksi cut-off | [S1 temuan #46–48] |
| 20:52:03 | 163 m | 65 km/jam | Rem independen diaktifkan (tidak menambah gaya — BC sudah maksimal 70 psi) | [S1 hlm. 67] |
| **20:52:12** | 0 m (Km 28+915) | **40 km/jam** | **TABRAKAN** dengan KA 5568A; akselerometer overflow ("---") | [S1 temuan #40, hlm. 68] |
| 20:52:19 | — | 0 | KA 4B berhenti di Km 28+941 — terseret 26 m setelah benturan | [S1 temuan #49] |

Perlambatan rata-rata hasil logger: full service **−0,35 m/s²**; emergency **−0,66 m/s²**;
rata-rata gabungan −0,505 m/s² [S1 hlm. 70].

## 5. Dampak & Penanganan

| Waktu | Peristiwa | Ref |
|---|---|---|
| 20:52:12–20:52:19 | Lokomotif menyeret rangkaian KRL; gerbong KRL ringsek | [S1], [S13] |
| malam 27/4–28/4 | Evakuasi gabungan (SAR, Pemprov, KAI, KCI); 240 penumpang KAJJ selamat | [S5] |
| 29/4/2026 | Korban: **16 meninggal** (seluruhnya penumpang KRL) dan 88–107 luka; dirawat di 8+ RS Bekasi | [S5], [S14] |
| 21/5/2026 | RDP KNKT: dua peristiwa dinyatakan **terpisah**; sopir taksi RRP jadi tersangka perkara JPL 86 (Pasal 310 ayat 1 UU 22/2009) | [S13], [S21] |
| 1/5/2026 | KAI keluarkan Nota Dinas internal: pembatasan kecepatan & aturan jangan berangkat sebelum jalur depan pasti kosong | [S1 hlm. 85] |
| 28–29/9/2026 | Rilis laporan akhir KNKT | [S1], [S3] |
| 29/9/2026 | Polda Metro Jaya tetapkan masinis AN (37) tersangka | [S2] |
| ±1/10/2026 | KAI ganti nama layanan "Argo Bromo Anggrek" → "KA Anggrek" | [S13], [S18] |

## 6. Kerangka Waktu Kritis (Diagram)

```
20:48:24 ── JPL 86: KRL 5181B × taksi listrik           (peristiwa pemicu)
   │ 3 mnt 20 dtk penyampaian informasi (gagal efektif)
20:48:55 ── 5568A berhenti Jalur I Bekasi Timur          (posisi terduduki)
   │ informasi tertahannya tidak sampai ke PPKP
20:50:43 ── KA 4B jalan langsung Jalur III, J12 hijau    (masuk blok tanpa peringatan kuning)
   │ ±30 dtk tanpa indikasi bahaya
20:51:16 ── KA 4B mulai minimum reduction (info dari PPKP Timur)
20:51:34 ── full service (melihat B104 merah)
20:51:56 ── emergency brake @275 m / 78 km/jam
20:52:12 ── ★ TABRAKAN @40 km/jam — Km 28+915
20:52:19 ── KA 4B berhenti (Km 28+941)
```

Interval dari peristiwa pemicu (JPL 86) sampai tabrakan: **3 menit 48 detik**.
Interval dari informasi darurat pertama yang benar-benar dipahami PPKP (±20:51:44)
hingga tabrakan: **±28 detik**.
