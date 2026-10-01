# 03 — Peta Rantai Kejadian & Analisis Counterfactual

> Metode: **causal chain** ala investigasi keselamatan (multiplex analysis), dibangun dari
> temuan dan faktor KNKT [S1]. Setiap simpul bisa diputus oleh lapisan pertahanan (defense
> layer) yang teridentifikasi. Analisis counterfactual bersifat **eksploratif berbasis fisika**,
> bukan penilaian hukum.

## 1. Rantai Kejadian Lengkap (12 Simpul)

```
C1  Shared track KA jarak jauh + KRL dengan perbedaan kecepatan & prioritas
      │ (kondisi struktural sejak lama; deviasi GAPEKA ganda [S1 temuan #5])
      ▼
C2  KRL 5181B menabrak taksi listrik di JPL 86 (20:48:24)
      │ [PERISTIWA PEMICU — kejadian terpisah dari tabrakan utama, KNKT & polisi sepakat S13]
      ▼
C3  Kerumunan warga di jalur hulu Bekasi Timur
      │
      ▼
C4  KA 5568A tertahan di Jalur I Bekasi Timur → track 104BT terduduki
      │ [informasi ini TIDAK sampai ke PPKP: F2+F3+F4]
      ▼
C5  KA 4B berjalan langsung: J12 HIJAU tanpa kuning (20:50:43)
      │ [F1: hazard hubungan sinyal tak teridentifikasi]
      ▼
C6  Masinis 4B tidak menerima info situasi yang akurat dari PPKP Timur
      │ [F4: "direm-rem dikit" tanpa urgensi/kecepatan target S6]
      ▼
C7  UB104 (putih horisontal = berhenti) TIDAK teridentifikasi masinis
      │ [F5: polusi cahaya + light scattering + pemahaman aspek]
      ▼
C8  B104 merah = satu-satunya peringatan (20:51:33, ±863 m dari tabrakan)
      │
      ▼
C9  Pengereman bertahap: minimum reduction → full service
      │ [F6: masinis menahan emergency di lengkung; tidak ada prosedur taktik]
      ▼
C10 Emergency brake ditarik di Km 28+588 (20:51:56, 275 m, 78 km/jam)
      │
      ▼
C11 TABRAKAN di Km 28+915 (20:52:12) @40 km/jam
      │
      ▼
C12 KA 4B berhenti Km 28+941; 16 meninggal, 107 luka
```

## 2. Lapisan Pertahanan yang Teridentifikasi (Swiss Cheese Model)

| Lapisan | Seharusnya | Yang terjadi | Status |
|---|---|---|---|
| L1 Desain persinyalan | J12 kuning saat 104BT terduduki | Tidak pernah dirancang/terdeteksi (F1) | **LOLOS gap** |
| L2 Pengujian & commissioning (2021–2022) | Review desain menggambarkan okupasi track | Digambar signal-to-signal saja (F1) | **LOLOS gap** |
| L3 Komunikasi darurat masinis→PPKP | Panggilan emergency + fraseologi standar | PTT individual, mic tersangkut, audio buruk (F2) | **GAGAL** |
| L4 Pelaporan 5568A | Info "jalur terduduki" sampai ke pengendali | Panggilan individual saat pengendali sibuk (F3) | **GAGAL** |
| L5 Koordinasi antar-PPKP | Mekanisme pertukaran informasi | Tidak ada prosedurnya (F4) | **TIDAK ADA** |
| L6 Sinyal pembantu UB104 | Memperpanjang jarak pandang | Tak teridentifikasi (cahaya lingkungan + kaca) (F5) | **GAGAL** |
| L7 Situational awareness awak | Perhatian pada perubahan aspek | Ekspektasi "hijau→hijau/kuning" (F5) | **GAGAL** |
| L8 Prosedur rem darurat | Panduan taktik kecepatan tinggi + lengkung | Tidak ada; masinis tidak pernah dilatih (F6) | **TIDAK ADA** |
| L9 Rem itu sendiri | Menghentikan kereta | Bekerja sesuai desain; melambatkan 108→40 km/jam | **BEKERJA (tak cukup)** |

Enam dari delapan lapisan organisasi (L1–L8) tidak berfungsi atau tidak pernah ada.
Lapisan terakhir yang tersisa adalah **manusia di ujung sistem dengan informasi timpang**.

## 3. Analisis Counterfactual Berbasis Fisika

Parameter dari data logger [S1 hlm. 70–72]:
- Full service: a = −0,35 m/s² · Emergency: a = −0,66 m/s² · ISO 2631 comfort: a = −0,315 m/s²
- Kecepatan awal peristiwa: 108 km/jam (30 m/s); saat full service 105 km/jam

### Skenario A — Kejadian aktual
| Fase | Mulai | Jarak awal | Kecepatan | Hasil |
|---|---|---|---|---|
| Min. reduction | 20:51:16 | 1.315 m | 108 | memperlambat ringan |
| Full service | 20:51:34 | 863 m | 105 | −0,35 m/s² |
| Emergency | 20:51:56 | 275 m | 78 | −0,66 m/s² |
| **Benturan** | **20:52:12** | 0 m | **40 km/jam** | 16 meninggal, 107 luka |

### Skenario B — Emergency sejak melihat B104 merah (20:51:34, 863 m)
Jarak henti dari 105 km/jam dengan a gabungan −0,505 m/s²: **±845 m** [S1 hlm. 70]
→ berhenti ±18 m *sebelum* titik tabrakan. KNKT sendiri: dari 105 km/jam, kereta butuh
845 m; tersedia 863 m. **Margin 18 m — tipis.** Dari 108 km/jam full service saja:
1.286 m → tidak cukup (kurang 423 m) [S1 hlm. 70]. Kesimpulan: skenario B hampir
menghindarkan tabrakan tetapi bergantung pada reaksi instan; margin kecil.

### Skenario C — Peringatan kuning tersedia (prinsip 3 aspek normal)
Jika J12 menunjukkan kuning saat 104BT terduduki, masinis mulai mengendalikan kecepatan
sejak Km 26+659. Dengan perlambatan nyaman ISO 2631 (−0,315 m/s²) dari 108 km/jam,
butuh **1.429 m**; jarak J12→B104 = **1.781 m** [S1 hlm. 72]. → Berhenti ±352 m sebelum
B104, **dengan kenyamanan penumpang terjaga**. Ini skenario yang oleh KNKT disebut sebagai
ruang keselamatan yang hilang: *"proses antisipasi… tidak dapat dimulai sejak melewati
Sinyal Keluar J12"*. **Margin besar, tanpa rem darurat.**

### Skenario D — UB104 teridentifikasi (±1.030 m sebelum tabrakan)
Dengan pengereman penuh sejak melihat UB104: masih di atas jarak 845 m → berhenti sebelum
benturan; setidaknya kecepatan benturan jauh lebih rendah. KNKT: *"dampak dari kecelakaan
dapat berkurang"* [S11].

### Skenario E — Klaim penyidik "rem 600 m" (teori Minden)
Polisi: ahli menyatakan kereta mampu berhenti 600 m dari kecepatan di logger, dan KRL
terlihat dari 1 km [S2]. Angka ini tidak muncul dalam laporan KNKT; perhitungan KNKT
menghasilkan 845 m (gabungan) / 1.286 m (full service saja) / 1.429 m (ISO comfort).
Selisih 600 vs 845 m **belum direkonsiliasi publik** — catatan kritis proyek ini:
sumber, asumsi, dan kondisi uji "teori Minden" yang dipakai penyidik perlu dipublikasikan.

### Sintesis

| Skenario | Kecepatan benturan | Kesimpulan |
|---|---|---|
| A (aktual) | 40 km/jam | 16 meninggal |
| B emergency @863 m | ±0 km/jam (margin 18 m) | nyaris tanpa tabrakan, tipis |
| C kuning tersedia | 0 (berhenti ±352 m sebelum B104) | menghindar dengan kenyamanan |
| D UB104 terbaca | jauh lebih rendah / 0 | dampak berkurang signifikan |
| E klaim polisi 600 m | tergantung titik awal | belum terverifikasi terbuka |

Bacaan fisika: tabrakan itu **hasil tumpukan kegagalan**, bukan tunggalnya keputusan masinis —
tetapi jendela terakhir memang sempit (18 m dalam skenario B), sehingga perdebatan hukum
tentang lapisan terakhir tidak akan selesai hanya dengan data logger. Lapisan yang lebih
efektif & murah ada di hulu (L1, L3–L5): itulah inti rekomendasi KNKT.

## 4. Pertanyaan Terbuka untuk Penyelidikan Lanjutan

1. Rekonkiliasi angka penyidik (600 m / 263 m) vs KNKT (845 m / 275 m) — asumsi apa yang
   membedakan?
2. Mengapa review desain 2022 lolos tanpa memodelkan okupasi 104AT/104BT — siapa pemeriksa
   independennya? (KNKT merekomendasikan ISA independen [S1 hlm. 96])
3. Kapan terakhir windshield CC206 KA 4B diinspeksi/diganti sesuai Nota Dinas 2015?
4. Apakah ada desain alternatif UB104 (bentuk lampu, modulasi, backplate) yang tahan polusi cahaya?
5. Berapa beban kerja aktual PPKP Selatan malam itu (jumlah saluran yang dioperasikan bersamaan)?
