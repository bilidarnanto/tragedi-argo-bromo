# 02 — Enam Faktor Berkontribusi (Analisis Mekanisme)

> Struktur mengikuti laporan akhir KNKT [S1 hlm. 86–89], diperkaya analisis mekanisme
> sebab-akibat dan sumber pelengkap [S8], [S11], [S12], [S14].
>
> **Peringatan KNKT (kutipan)**: "Identifikasi terhadap faktor yang berkontribusi tidak
> dimaksudkan untuk penetapan kesalahan atau tanggung jawab secara administratif, perdata,
> atau pidana… tidak menunjukkan tingkat kontribusi terhadap terjadinya kecelakaan." [S1]

## Gambaran Sistemik

```
[KONDISI LATAR]                 [PEMICU]                    [RANGKAIAN KEGAGALAN]              [AKHIR]
Deviasi GAPEKA ganda      →    KRL 5181B × taksi      →    Komunikasi darurat gagal    →
(shared track 2 kelas KA)      di JPL 86                   →  5568A "hilang" dari radar
Kepadatan pemukiman sekitar                                   →  PPKP Timur info tak akurat
sinyal (polusi cahaya)                                        →  Masinis 4B tak sadar situasi
Windshield bergores+                                                          ↓
Kurva + jarak tampak pendek                                   TABRAKAN 20:52:12
Tidak ada prosedur rem darurat tikungan
```

## Faktor 1 — Hazard Hubungan Persinyalan Bekasi–Bekasi Timur Tidak Teridentifikasi

**Fakta KNKT**: KA 4B dilayani J12 hijau (berjalan langsung) tetapi B104 merah (track 104BT
terduduki 5568A) — **tanpa aspek kuning di antaranya**. Blok 104 dibagi dua track (104AT/104BT)
untuk peringatan JPL 85 semi-otomatis; status okupasi 104AT menentukan perilaku J12, tetapi
**104BT tidak berpengaruh terhadap aspek J12** [S1 temuan #26–30]. Review desain 2022
menggambarkan aspek "signal to signal tanpa status okupasi track" sehingga perilaku ini tidak
pernah tergambarkan — lolos dari review desain, testing, hingga operasional [S1 faktor #1].

**Mekanisme**: sistem proteksi lapis pertama (peringatan kuning) tidak pernah ada pada
konfigurasi ini → masinis kehilangan 30–60 detik antisipasi yang seharusnya tersedia
sejak J12.

**Tipe kegagalan**: *design latent condition* — bahaya tertanam dalam desain, tidak
diciptakan saat kejadian, tidak ditemukan selama ±5 tahun operasi (layout berubah 2021).

## Faktor 2 — Permasalahan Komunikasi Saat Kondisi Darurat

**Fakta KNKT**: penyampaian informasi kecelakaan JPL 86 dari masinis KA 5181B ke PPKP
Selatan memakan **3 menit 20 detik** [S1 temuan #9]. Penyebab berlapis:
1. Panggilan via PTT individual, **bukan tombol emergency** [S1 temuan #15]
2. Mic tersangkut di dudukan → jarak bicara >5 cm (standar Tait TM9000: ≤5 cm) [S1 temuan #11–14]
3. Audio: reverb, warbling, volume kecil [S1 temuan #10]
4. **Tidak ada standar fraseologi/struktur** penyampaian informasi darurat masinis→PPKP [S1 temuan #24]

**Mekanisme**: durasi + ambiguitas menurunkan penilaian urgensi PPKP Selatan → tidak ada
tindakan pengendalian preventif (mis. stop-and-protect jalur hulu) selama 3+ menit kritis.

## Faktor 3 — Kegagalan Komunikasi KA 5568A

**Fakta KNKT**: masinis 5568A melaporkan tertahannya kereta (kerumunan warga di jalur hulu)
via **panggilan individual** — tidak ada notifikasi emergency di konsol Sepura S.27 — tepat
saat PPKP Selatan disibukkan oleh komunikasi 5181B [S1 faktor #3, lamp. 4].

**Mekanisme**: informasi kunci "jalur I Bekasi Timur terduduki" — satu-satunya fakta yang
membuat B104 merah berbahaya — tidak pernah sampai ke pos pengendali mana pun. Ini faktor
yang menjadikan Faktor 1 berbahaya: hazard persinyalan hanya terbuka ketika 104BT terduduki.

## Faktor 4 — Tidak Ada Mekanisme Informasi PPKP Selatan ↔ PPKP Timur

**Fakta KNKT**: tidak ada prosedur pertukaran informasi antar-pos pengendali. PPKP Timur
hanya "mendengar" komunikasi Selatan–5181B tanpa detail situasi. Pembagian saluran menempatkan
radio KRL di PPKP Selatan tetapi kendali perjalanan KRL wilayah timur di PPKP Timur — yang
**tidak dapat berkomunikasi langsung dengan KRL** [S1 temuan #21–23].

**Mekanisme**: PPKP Timur memberikan informasi/perintah kepada KA 4B yang tidak akurat
(tidak menyebut ada kereta berhenti di depan) → masinis 4B tidak punya informasi cukup untuk
tindakan yang sesuai [S1 faktor #4]. Komunikasi "direm-rem dikit" menurut sumber analisis
tidak menyampaikan urgensi maupun target kecepatan [S6].

## Faktor 5 — Kegagalan Identifikasi Aspek Sinyal Pembantu UB104

**Fakta KNKT**: UB104 (Km 28+030) dipasang justru untuk menambah jarak pandang B104 yang
hanya 410 m (di bawah syarat 600 m PM 44/2018) [S11]. Malam itu UB104 menampilkan putih
**horisontal** (= sinyal utama tak aman) [S1 temuan #34] tetapi:
1. Lampu LED putih menyerupai warna/intensitas lampu rumah warga & pju di sekitarnya [S1 temuan #33]
2. Windshield polycarbonate (semua lokomotif KAI sejak Nota Dinas 001/KR.203/R/XII/2015) penuh goresan wiper & swirl mark → light scattering signifikan; perbandingan visual CC206 vs KRL TM6000 di Km 28+440 menunjukkan perbedaan jelas [S1 temuan #37–39, S11]
3. Pemahaman ASP "hijau berikutnya hijau/kuning terburuk; merah selalu didahului kuning" membuat perhatian tidak diarahkan ke UB104; tidak ada jadwal berhenti sampai Cirebon [S1 faktor #5, temuan #53]

**Mekanisme**: satu-satunya peringatan sebelum B104 gagal berfungsi sebagai peringatan →
B104 menjadi informasi pertama (dan terakhir) bahwa blok tak aman. KNKT: *"Apabila aspek
sinyal pembantu UB104 dapat teridentifikasi dengan baik, maka masinis KA 4B dapat melakukan
upaya pengereman lebih awal dan dampak dari kecelakaan dapat berkurang."* [S11]

## Faktor 6 — Tidak Ada Prosedur Pengereman Darurat di Kecepatan Tinggi pada Lengkung

**Fakta KNKT**: masinis memahami pasal 40 PD 16A — rem darurat harus mempertimbangkan
keselamatan penumpang & rangkaian. Ketakutannya: **jackknifing/derailment** saat emergency
brake pada 100+ km/jam di lengkung radius 946 m [S1 hlm. 79]. Karena **tidak ada prosedur
taktik pengereman darurat** untuk skenario ini dan **masinis belum pernah dilatih** skenario
tersebut [S1 temuan #51–52], keputusan "full service dulu, emergency setelah keluar lengkung"
adalah **penilaian subjektif** [S1 faktor #6].

**Mekanisme waktu**: emergency ditarik di Km 28+588 (275 m sebelum tabrakan) setelah keluar
lengkung. Dengan dekelerasi emergency −0,66 m/s² dari 78 km/jam, kereta masih menempuh 275 m
hingga menabrak dengan 40 km/jam. Pertanyaan counterfactual: apakah emergency sejak 20:51:34
(863 m) mengubah akibat? → dibahas di [03-rantai-kejadian.md](03-rantai-kejadian.md).

## Matriks Interaksi (Mengapa Enam Faktor Saling Memperkuat)

| | F1 sinyal | F2 kom 5181B | F3 kom 5568A | F4 antar-PPKP | F5 UB104 | F6 rem darurat |
|---|---|---|---|---|---|---|
| **F1** | — | — | *prasyarat* | — | — | — |
| **F2** | — | — | — | *penyibuk* | — | — |
| **F3** | membuka hazard | — | — | info tak sampai | — | — |
| **F4** | — | — | — | — | — | info masinis timpang |
| **F5** | — | — | — | — | — | mempercepat keputusan |
| **F6** | — | — | — | — | — | — |

- F1 membuat sistem **bergantung penuh** pada F5 (sinyal pembantu) — saat keduanya gagal,
  tidak ada lapisan peringatan tersisa.
- F2+F3+F4 adalah satu **sistem komunikasi yang gagal tiga lapis**; tanpa salah satunya,
  PPKP Timur kemungkinan memerintahkan KA 4B berhenti sebelum Bekasi Timur.
- F6 menentukan **pola pengereman** — dan karenanya kecepatan benturan (40 km/jam vs
  potensial lebih rendah).

## Kesimpulan Sementara

Tidak ada satu faktor tunggal yang cukup menyebabkan tabrakan: F1+F5 membuka jendela bahaya,
F2+F3+F4 mematikan lapisan mitigasi manusia (pengendali), F6 memengaruhi besaran akibat.
Kesaksian ASP tentang "sinyal hijau lalu merah" [S14] konsisten dengan temuan F1; keputusan
polisi memfokuskan tersangka pada masinis [S2] menyentuh hanya F6 dari enam faktor.
