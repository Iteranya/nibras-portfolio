# Portofolio — Nibras Khancenkjungga

Situs portofolio statis (HTML/CSS/JS murni, tanpa build step) untuk di-host gratis
di **GitHub Pages**.

## Struktur

```
.
├── index.html                 halaman utama (satu halaman)
├── assets/
│   ├── css/style.css          seluruh gaya
│   ├── js/main.js             data + filter daftar prestasi
│   └── img/                   26 foto (sudah diberi nama deskriptif)
├── Achievement.jpg            sumber data: lembar prestasi
├── Achievement.md             hasil OCR lembar prestasi (markdown)
└── IDEA.md                    catatan awal
```

## Cetak biru desain

- **Monokrom grafit.** Hanya hitam, abu, dan putih. Tidak ada warna aksen —
  satu-satunya "aksen" adalah putih penuh (`--hot`). Semua foto di galeri
  dipaksa `grayscale` supaya tetap menyatu.
- **Motif stratigrafi.** Latar bagian pembuka memakai garis-garis mendatar
  berulang yang makin lama makin merenggang — miring ke lapisan tanah, sekaligus
  paling dekat dengan jurusan **Teknik Pertambangan** dan latar Gunungkidul.
- **Tipografi.** `Archivo` (judul, sangat tebal, rapat) · `IBM Plex Sans` (teks)
  · `IBM Plex Mono` (label, angka, tombol). Tiga peran, bukan tiga dekorasi.
- **Daftar prestasi berbentuk ledger**, bukan kartu-kartu. Nomor di kolom kiri,
  bidak di kolom kanan, garis pemisah setipis mungkin. Dua lapis filter
  (tingkat + bidang) dan satu kotak pencarian.

## Menjalankan secara lokal

Cukup buka `index.html` di peramban. Tidak ada dependensi.

Untuk server lokal:

```bash
python -m http.server 8000
# lalu buka http://localhost:8000
```

## Terbit ke GitHub Pages

```bash
git init
git add .
git commit -m "Portofolio Nibras Khancenkjungga"
git branch -M main
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```

Lalu di repositori GitHub: **Settings → Pages → Source: `Deploy from a branch`
→ Branch: `main` / `root** → Save. Situs terbit di
`https://<user>.github.io/<repo>/`.

Berkas `.nojekyll` sudah disertakan supaya GitHub tidak memproses folder
`assets/` lewat Jekyll.

## Catatan keakuratan data

Kutipan prestasi di `index.html` / `assets/js/main.js` **disalin apa adanya**
dari `Achievement.jpg`. Ketidaksesuaian di dokumen sumber sengaja **tidak**
diperbaiki tanpa konfirmasi:

1. **Nomor 3** — "Kejurkab IPSI Pelajar Gunungkidul Kelas E" diberi label
   *Tingkat Nasional* oleh dokumen sumber, padahal "Kejurkab" berarti
   kejuaraan kabupaten, dan prestasi nomor 25 adalah lomba yang sama dengan
   label *Kabupaten*.
2. **TOEFL** — dokumen sumber mencantumkan **dua** baris nilai: 533 dan 450.
   Situs menampilkan 533; keduanya perlu dikonfirmasi mana yang berlaku.
3. **Organisasi** — kosong di dokumen sumber.
4. **Ejaan** — "Olympiad" / "Olympicad" / "Olimpiade" muncul bergantian;
   "Quran Hadist" dan "Sejarah Kebudayaan Islam" dipertahankan apa adanya.

## Rekapitulasi

| | |
|---|---|
| Total prestasi | 33 |
| Tingkat nasional | 20 |
| Tingkat provinsi | 3 |
| Tingkat kabupaten | 10 |
| Medali emas | 8 |
| Medali perak | 4 |
| Medali perunggu | 7 |
| Juara 1 (tanpa kata "medali") | 5 → total gelar juara 1: **13** |
| Juara 2 | 5 |
| Juara 3 | 2 |
| Juara 4 | 2 |

## Foto

26 foto di `assets/img/`, semua sudah diberi nama deskriptif
(`nibras-NN-deskripsi.jpg`, `NN` = urutan tampil).

Dari jumlah itu, **24 masuk galeri**. Yang dikeluarkan:

- `nibras-08-beach-silat-workout-screenshot.jpg` — masih berupa tangkapan layar
  ponsel (ada bilah status), tidak layak untuk galeri.
- `nibras-22-lawu-open-2025-puslatkab-pose.jpg` — kembar dengan
  `nibras-26-lawu-open-2025-puslatkab.jpg`; yang dipakai adalah versi resolusi
  lebih tinggi (26).

Sisanya masih ada di folder, tinggal ditambahkan bila diinginkan.

## Kontak

Bagian kontak di footer masih **placeholder** — belum ada email atau akun media
sosial di dokumen sumber. Isi di `index.html` pada bagian `.foot__cta`.
