# Task lanjutan untuk Kanban seluruh proyek

[Kembali ke rencana dan indeks seluruh proyek](README.md). Status di bawah merupakan rencana awal; tautan GitHub ditampilkan bila mapping aktual tersedia. Riwayat 86 kartu MVP tersedia pada manifest dan tasks/todo.md.

**Status publikasi: sebagian terverifikasi.** 34 dari 154 kartu memiliki mapping item dan body terverifikasi (34 mapping item tercatat). Konektor GitHub tetap memakai DinarPutra1408 dengan akses baca; browser telah diautentikasi sebagai silkiy dan digunakan untuk mengedit Project. Catatan hambatan terakhir: GitHub gagal diakses dengan ERR_NAME_NOT_RESOLVED di browser dan pemeriksaan DNS Windows. Pengisian dihentikan atas permintaan pemilik; tidak ada percobaan penulisan lanjutan.

## UI-001

**Audit UI dan inventaris seluruh rute**

[Buka kartu GitHub](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305844586)

**Task ID:** UI-001
**Workstream:** Redesign UI
**Fase:** G — Arah desain
**Status awal:** Ready
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** §6–7; §10; AC-19
**Dependensi:** T063

Petakan tampilan yang ada dan kebutuhan penggantian UI pada seluruh modul publik.

### Kriteria selesai

- [ ] Daftar seluruh rute memuat kondisi berisi data, kosong, error dan media tidak tersedia.
- [ ] Cakupan redesign publik, komponen bersama, serta kontrak CMS yang digunakan kembali tercatat.

### Verifikasi

Tinjau matriks terhadap 18 keluarga URL PRD dan kode saat ini.

### File/area terkait

- `src/app/(public)`
- `src/components/public`
- `docs/design.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-002

**Eksplorasi arah visual website**

[Buka kartu GitHub](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305844691)

**Task ID:** UI-002
**Workstream:** Redesign UI
**Fase:** G — Arah desain
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** §10; §18.2
**Dependensi:** UI-001

Susun pilihan arah visual untuk situs organisasi dan publikasi investasi.

### Kriteria selesai

- [ ] Referensi layout, warna, tipografi dan gaya foto memiliki alasan yang sesuai kebutuhan pembaca.
- [ ] Pilihan desain mencakup keterbacaan publikasi dan penggunaan pada ponsel.

### Verifikasi

Tinjau referensi dan rekomendasi arah visual bersama pemilik.

### File/area terkait

- `docs/design.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-003

**Inventaris identitas dan aset desain**

[Buka kartu GitHub](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305844797)

**Task ID:** UI-003
**Workstream:** Redesign UI
**Fase:** G — Arah desain
**Status awal:** Ready
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** §10; §17; §18.2
**Dependensi:** Tidak ada

Catat logo, font, foto dan hak penggunaan yang tersedia untuk desain baru.

### Kriteria selesai

- [ ] Setiap aset memiliki sumber, status resmi/contoh, pemilik validasi dan status izin.
- [ ] Aset yang belum tersedia mempunyai fallback berlabel contoh yang jelas.

### Verifikasi

Periksa daftar aset terhadap berkas yang benar-benar tersedia dan bukti izin.

### File/area terkait

- `docs/design.md`
- `public`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-004

**Buat mockup beranda mobile dan desktop**

[Buka kartu GitHub](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305844876)

**Task ID:** UI-004
**Workstream:** Redesign UI
**Fase:** G — Arah desain
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** FR-01; §10
**Dependensi:** UI-002, UI-003

Wujudkan arah visual ke desain beranda yang dapat ditinjau sebelum implementasi.

### Kriteria selesai

- [ ] Mockup mobile dan desktop memperlihatkan hierarki navigasi, hero, profil, publikasi, agenda dan footer.
- [ ] Keadaan tanpa data serta label contoh diperlihatkan tanpa membuat klaim organisasi baru.

### Verifikasi

Tinjau mockup menggunakan konten representatif dan kebutuhan FR-01.

### File/area terkait

- `docs/design.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-005

**Catat persetujuan arah desain**

[Buka kartu GitHub](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305846035)

**Task ID:** UI-005
**Workstream:** Redesign UI
**Fase:** G — Arah desain
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** §10; §18
**Dependensi:** UI-004

Pastikan arah desain dipilih sebelum penerapan menyeluruh ke halaman.

### Kriteria selesai

- [ ] Pemilik meninjau desain konkret dan keputusan aktual tercatat.
- [ ] Revisi yang wajib diselesaikan dan batas scope publik/CMS dicatat.

### Verifikasi

Cocokkan catatan keputusan dengan tanggapan pemilik; permintaan Kanban bukan persetujuan desain.

### File/area terkait

- `docs/decisions.md`
- `docs/design.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-006

**Terapkan token dan komponen dasar**

**Task ID:** UI-006
**Workstream:** Redesign UI
**Fase:** H — Fondasi UI
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** §10; AC-19
**Dependensi:** UI-005, GATE-01

Bangun fondasi warna, tipografi, jarak, container, tombol, label dan field.

### Kriteria selesai

- [ ] Token dan komponen mengikuti desain yang disetujui serta memiliki focus state yang terlihat.
- [ ] CSS publik tetap terisolasi dari Payload dan memperhatikan reduced motion.

### Verifikasi

Jalankan lint/typecheck/build serta inspeksi komponen pada mobile dan desktop.

### File/area terkait

- `src/app/(public)/globals.css`
- `src/app/(public)/layout.tsx`
- `src/components/public`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-007

**Ganti header dan navigasi desktop**

**Task ID:** UI-007
**Workstream:** Redesign UI
**Fase:** H — Fondasi UI
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** FR-10; §8.7; AC-21
**Dependensi:** UI-006

Terapkan identitas dan navigasi desktop menggunakan konfigurasi situs.

### Kriteria selesai

- [ ] Seluruh tautan dan target navigasi valid, dengan label yang sesuai halaman tujuan.
- [ ] Identitas dan navigasi tetap menggunakan Site Settings yang berwenang.

### Verifikasi

Periksa semua tautan, keyboard, focus dan suite public-shell.

### File/area terkait

- `src/components/public/SiteHeader.tsx`
- `tests/e2e/public-shell.spec.ts`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-008

**Ganti navigasi mobile**

**Task ID:** UI-008
**Workstream:** Redesign UI
**Fase:** H — Fondasi UI
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** §10; AC-19
**Dependensi:** UI-007

Terapkan menu mobile yang nyaman digunakan dan dapat diakses dengan keyboard.

### Kriteria selesai

- [ ] Buka/tutup menu, Escape, fokus kembali dan urutan Tab bekerja konsisten.
- [ ] Menu tetap dapat digunakan pada 320 px dan zoom 200% tanpa scroll horizontal halaman.

### Verifikasi

Periksa interaksi sentuh/keyboard pada 320/375/768 px dan reduced motion.

### File/area terkait

- `src/components/public/SiteHeader.tsx`
- `tests/e2e/public-shell.spec.ts`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-009

**Ganti footer dan kontak bersama**

**Task ID:** UI-009
**Workstream:** Redesign UI
**Fase:** H — Fondasi UI
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** FR-10; AC-21
**Dependensi:** UI-006

Terapkan footer yang konsisten dengan identitas dan sumber kontak tunggal.

### Kriteria selesai

- [ ] Footer menggunakan Site Settings dan hanya menampilkan kontak terkonfirmasi.
- [ ] Tautan, label contoh dan tata letak berfungsi saat sebagian kontak kosong.

### Verifikasi

Bandingkan footer/header/halaman kontak dan jalankan suite settings terkait.

### File/area terkait

- `src/components/public/SiteFooter.tsx`
- `src/components/public/ContactLinks.tsx`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-010

**Ganti hero dan pengantar beranda**

**Task ID:** UI-010
**Workstream:** Redesign UI
**Fase:** I — UI seluruh modul
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** FR-01; §8.7
**Dependensi:** UI-006, UI-008, UI-009, GATE-02

Terapkan pembuka, profil dan program unggulan sesuai desain terpilih.

### Kriteria selesai

- [ ] Isi editorial tetap berasal dari snapshot yang disetujui dan dapat dikelola CMS.
- [ ] Hero/program mengikuti mockup dan tetap jelas pada layar kecil serta tanpa data.

### Verifikasi

Inspeksi beranda mobile/desktop dan jalankan zz-p0-home.

### File/area terkait

- `src/app/(public)/page.tsx`
- `src/components/public/PageSections.tsx`
- `tests/e2e/zz-p0-home.spec.ts`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-011

**Ganti agregasi konten beranda**

**Task ID:** UI-011
**Workstream:** Redesign UI
**Fase:** I — UI seluruh modul
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** FR-01; FR-05–09; FR-11
**Dependensi:** UI-010

Terapkan bagian publikasi, agenda, rekrutmen, prestasi dan mitra pada beranda.

### Kriteria selesai

- [ ] Hanya konten terbit tampil dengan urutan publikasi dan waktu agenda yang benar.
- [ ] CTA rekrutmen, izin logo mitra dan label contoh tetap mengikuti aturan domain.

### Verifikasi

Jalankan zz-p0-home/p1-seo dan periksa kondisi terisi serta kosong.

### File/area terkait

- `src/app/(public)/page.tsx`
- `src/components/public/P1Content.tsx`
- `tests/e2e/zz-p0-home.spec.ts`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-012

**Ganti halaman Tentang**

**Task ID:** UI-012
**Workstream:** Redesign UI
**Fase:** I — UI seluruh modul
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** FR-02; AC-08; AC-21
**Dependensi:** UI-006, UI-009, GATE-02

Terapkan profil, sejarah, visi dan misi dalam layout baru.

### Kriteria selesai

- [ ] Isi dan metadata tetap berasal dari versi terbit yang disetujui.
- [ ] Profil panjang, gambar opsional dan kondisi kosong tetap terbaca pada mobile.

### Verifikasi

Jalankan about-settings dan inspeksi mobile/desktop.

### File/area terkait

- `src/app/(public)/tentang/page.tsx`
- `src/components/public/PageSections.tsx`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-013

**Ganti daftar dan detail divisi**

**Task ID:** UI-013
**Workstream:** Redesign UI
**Fase:** I — UI seluruh modul
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** FR-03; AC-16
**Dependensi:** UI-006, UI-009, GATE-02

Terapkan katalog delapan divisi serta halaman profil/program kerjanya.

### Kriteria selesai

- [ ] Daftar dan detail menampilkan delapan divisi serta program/pengurus yang tepat.
- [ ] Snapshot terbit, periode dan fallback gambar tetap benar tanpa menampilkan data privat.

### Verifikasi

Jalankan divisions dan inspeksi daftar/detail dengan konten panjang.

### File/area terkait

- `src/app/(public)/tentang/divisi/page.tsx`
- `src/app/(public)/tentang/divisi/[slug]/page.tsx`
- `tests/e2e/divisions.spec.ts`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-014

**Ganti struktur organisasi dan arsip**

**Task ID:** UI-014
**Workstream:** Redesign UI
**Fase:** I — UI seluruh modul
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** FR-03; AC-16; AC-28
**Dependensi:** UI-013

Terapkan struktur pengurus dengan pilihan periode dan akses riwayat.

### Kriteria selesai

- [ ] Pemilih periode menampilkan pengurus, jabatan lintas divisi dan arsip yang benar.
- [ ] Nama panjang, foto tidak tersedia dan periode tanpa pengurus memiliki tampilan jelas.

### Verifikasi

Jalankan structure dan cek periode aktif/past serta keyboard selector.

### File/area terkait

- `src/app/(public)/tentang/struktur/page.tsx`
- `tests/e2e/structure.spec.ts`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-015

**Ganti portal Publikasi**

**Task ID:** UI-015
**Workstream:** Redesign UI
**Fase:** I — UI seluruh modul
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** FR-04–05; §6.1
**Dependensi:** UI-006, UI-009, GATE-02

Terapkan pintu masuk artikel dan riset yang mudah dipahami.

### Kriteria selesai

- [ ] Jalur menuju artikel dan riset jelas dan semua tautan valid.
- [ ] Ringkasan yang ditampilkan hanya mengambil konten terbit dan menangani kondisi kosong.

### Verifikasi

Periksa navigasi portal ke daftar artikel/riset pada mobile/desktop.

### File/area terkait

- `src/app/(public)/publikasi/page.tsx`
- `src/components/public/PublicationLinks.tsx`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-016

**Ganti daftar artikel**

**Task ID:** UI-016
**Workstream:** Redesign UI
**Fase:** I — UI seluruh modul
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** FR-04; AC-18
**Dependensi:** UI-015

Terapkan katalog artikel dengan pencarian, kategori dan pagination.

### Kriteria selesai

- [ ] Search/filter/pagination tetap menggunakan URL yang dapat dibagikan dan mempertahankan parameter.
- [ ] Hasil kosong, parameter tidak valid dan halaman di luar rentang ditangani konsisten.

### Verifikasi

Jalankan article-list/article-search dan periksa keyboard form serta pagination.

### File/area terkait

- `src/app/(public)/publikasi/artikel/page.tsx`
- `tests/e2e/article-list.spec.ts`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-017

**Ganti detail artikel**

**Task ID:** UI-017
**Workstream:** Redesign UI
**Fase:** I — UI seluruh modul
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** FR-04; AC-07–08; AC-23
**Dependensi:** UI-016

Terapkan tipografi dan layout detail tanpa melemahkan renderer aman.

### Kriteria selesai

- [ ] Judul, penulis publik, tanggal, isi, sumber, caption dan label contoh tetap terbaca.
- [ ] Renderer tetap memakai sanitasi/allowlist dan media hanya melalui gateway yang sah.

### Verifikasi

Jalankan article-detail dan uji rich text, link, gambar serta revisi publik.

### File/area terkait

- `src/app/(public)/publikasi/artikel/[slug]/page.tsx`
- `src/components/public/RichText.tsx`
- `tests/e2e/article-detail.spec.ts`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-018

**Ganti daftar riset**

**Task ID:** UI-018
**Workstream:** Redesign UI
**Fase:** I — UI seluruh modul
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** FR-05; AC-18
**Dependensi:** UI-016

Terapkan katalog riset yang konsisten dengan pengalaman publikasi.

### Kriteria selesai

- [ ] Pencarian, kategori dan pagination bekerja bersama tanpa menampilkan draft.
- [ ] Tanggal dan ringkasan riset serta empty state jelas pada mobile.

### Verifikasi

Jalankan research dan cek kombinasi filter/search/pagination.

### File/area terkait

- `src/app/(public)/publikasi/riset/page.tsx`
- `tests/e2e/research.spec.ts`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-019

**Ganti detail riset**

**Task ID:** UI-019
**Workstream:** Redesign UI
**Fase:** I — UI seluruh modul
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** FR-05; AC-07; AC-20
**Dependensi:** UI-017, UI-018

Terapkan layout detail riset dengan informasi analisis yang lengkap.

### Kriteria selesai

- [ ] Tanggal analisis dan tanggal publikasi dibedakan; sumber dan disclaimer dasar selalu tampil.
- [ ] PDF hanya dari versi disetujui; fallback file dicabut tidak memunculkan URL privat.

### Verifikasi

Jalankan research, publications dan cek disclaimer/PDF pada mobile/desktop.

### File/area terkait

- `src/app/(public)/publikasi/riset/[slug]/page.tsx`
- `tests/e2e/research.spec.ts`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-020

**Ganti daftar kegiatan**

**Task ID:** UI-020
**Workstream:** Redesign UI
**Fase:** I — UI seluruh modul
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** FR-06; AC-15
**Dependensi:** UI-006, UI-009, GATE-02

Terapkan daftar agenda dan arsip dengan status waktu yang jelas.

### Kriteria selesai

- [ ] Filter upcoming/ongoing/completed serta status batal tetap benar.
- [ ] Waktu WIB, poster opsional, hasil kosong dan navigasi detail terbaca pada mobile.

### Verifikasi

Jalankan events-public dan periksa filter/status sekitar batas waktu.

### File/area terkait

- `src/app/(public)/kegiatan/page.tsx`
- `tests/e2e/events-public.spec.ts`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-021

**Ganti detail kegiatan**

**Task ID:** UI-021
**Workstream:** Redesign UI
**Fase:** I — UI seluruh modul
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** FR-06; §8.8; AC-15
**Dependensi:** UI-020

Terapkan detail kegiatan dan pendaftaran sesuai kondisi waktu aktual.

### Kriteria selesai

- [ ] Jadwal WIB, lokasi/kanal, penyelenggara dan pembatalan jelas.
- [ ] CTA tetap memakai revalidasi LiveRegistration dan hilang ketika syarat waktu/URL tidak terpenuhi.

### Verifikasi

Jalankan events-public/events-policy, termasuk deadline dan kegagalan refresh CTA.

### File/area terkait

- `src/app/(public)/kegiatan/[slug]/page.tsx`
- `src/components/public/LiveRegistration.tsx`
- `tests/e2e/events-policy.spec.ts`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-022

**Ganti halaman rekrutmen**

**Task ID:** UI-022
**Workstream:** Redesign UI
**Fase:** I — UI seluruh modul
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** FR-08; AC-14; AC-29
**Dependensi:** UI-021

Terapkan kampanye, posisi, tahapan dan riwayat rekrutmen.

### Kriteria selesai

- [ ] Posisi, persyaratan, periode, tahapan dan status belum dibuka/ditutup dapat dibaca.
- [ ] CTA hanya tampil untuk kampanye terbit/aktif dalam jendela waktu dengan URL terkonfirmasi.

### Verifikasi

Jalankan recruitment dan cek sebelum buka, saat buka, saat tutup serta riwayat.

### File/area terkait

- `src/app/(public)/rekrutmen/page.tsx`
- `tests/e2e/recruitment.spec.ts`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-023

**Ganti daftar dan detail galeri**

**Task ID:** UI-023
**Workstream:** Redesign UI
**Fase:** I — UI seluruh modul
**Status awal:** Backlog
**Prioritas:** P1
**Ukuran:** M
**Acuan PRD:** FR-07; AC-07; AC-24
**Dependensi:** UI-006, UI-009, GATE-02

Terapkan album dan dokumentasi dengan media yang dapat diakses.

### Kriteria selesai

- [ ] Urutan album/foto, alt dan caption sesuai snapshot disetujui.
- [ ] Media dicabut memiliki fallback; video tetap tautan eksternal valid.

### Verifikasi

Jalankan p1-seo/p1 dan periksa album panjang pada mobile/desktop.

### File/area terkait

- `src/app/(public)/galeri/page.tsx`
- `src/app/(public)/galeri/[slug]/page.tsx`
- `src/components/public/P1Content.tsx`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-024

**Ganti halaman Partnership**

**Task ID:** UI-024
**Workstream:** Redesign UI
**Fase:** I — UI seluruh modul
**Status awal:** Backlog
**Prioritas:** P1
**Ukuran:** S
**Acuan PRD:** FR-09; AC-24
**Dependensi:** UI-006, UI-009, GATE-02

Terapkan tampilan mitra dan kolaborasi sesuai izin publikasi.

### Kriteria selesai

- [ ] Nama/deskripsi hanya dari konten terbit dan logo tampil hanya dengan izin Admin.
- [ ] Website opsional dan kondisi tanpa mitra tidak menyiratkan kerja sama fiktif.

### Verifikasi

Jalankan p1-seo dan cek mitra dengan/tanpa izin logo serta data kosong.

### File/area terkait

- `src/app/(public)/partnership/page.tsx`
- `src/components/public/P1Content.tsx`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-025

**Ganti halaman Prestasi**

**Task ID:** UI-025
**Workstream:** Redesign UI
**Fase:** I — UI seluruh modul
**Status awal:** Backlog
**Prioritas:** P1
**Ukuran:** S
**Acuan PRD:** FR-11; AC-24
**Dependensi:** UI-006, UI-009, GATE-02

Terapkan pencapaian dengan filter tahun dan dokumentasi.

### Kriteria selesai

- [ ] Filter tahun, tanggal, penerima dan deskripsi berasal dari konten terbit.
- [ ] Dokumentasi opsional, empty state dan label contoh tetap jelas.

### Verifikasi

Jalankan p1-seo dan periksa filter tahun serta media opsional.

### File/area terkait

- `src/app/(public)/prestasi/page.tsx`
- `src/components/public/P1Content.tsx`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-026

**Ganti halaman Kontak**

**Task ID:** UI-026
**Workstream:** Redesign UI
**Fase:** I — UI seluruh modul
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** FR-10; AC-21
**Dependensi:** UI-009

Terapkan kontak organisasi dan media sosial yang terkonfirmasi.

### Kriteria selesai

- [ ] Kontak menggunakan sumber Site Settings yang sama dengan header/footer.
- [ ] Kolom belum dikonfirmasi disembunyikan; tidak menambahkan formulir kontak di luar MVP.

### Verifikasi

Jalankan about-settings/zz-p0-home dan cek tautan serta kondisi tanpa kontak.

### File/area terkait

- `src/app/(public)/kontak/page.tsx`
- `src/components/public/ContactLinks.tsx`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-027

**Seragamkan empty, loading, error dan 404**

**Task ID:** UI-027
**Workstream:** Redesign UI
**Fase:** I — UI seluruh modul
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** §10; §13 Reliability; AC-10; AC-25
**Dependensi:** UI-006, UI-017, UI-021, UI-023

Lengkapi tampilan status serta navigasi pemulihan lintas modul.

### Kriteria selesai

- [ ] Pesan kosong/loading/error/404 konsisten dan memberikan tindakan pemulihan yang valid.
- [ ] Status HTTP privat/withdrawn tetap 404; error tidak memuat secret atau detail database.

### Verifikasi

Periksa fault injection/recovery, draft/withdrawn dan empty state; hindari streaming yang merusak status 404.

### File/area terkait

- `src/components/public/EmptyState.tsx`
- `src/app/(public)/error.tsx`
- `src/app/(public)/not-found.tsx`
- `src/app/global-error.tsx`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-028

**Audit responsif dan aksesibilitas UI baru**

**Task ID:** UI-028
**Workstream:** Redesign UI
**Fase:** J — QA dan penerimaan UI
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** §10; AC-19
**Dependensi:** UI-010, UI-011, UI-012, UI-013, UI-014, UI-015, UI-016, UI-017, UI-018, UI-019, UI-020, UI-021, UI-022, UI-023, UI-024, UI-025, UI-026, UI-027, GATE-06

Periksa seluruh keluarga halaman dan interaksi terhadap target PRD.

### Kriteria selesai

- [ ] Seluruh rute diperiksa pada 320/375/768/1024/1440 px tanpa scroll horizontal halaman pada 320 px.
- [ ] Keyboard, fokus, heading/landmark, alt, label/error form, kontras, zoom 200% dan reduced motion diperiksa menuju WCAG 2.2 AA.
- [ ] Temuan dan bukti screenshot/manual/otomatis dicatat; hasil axe saja tidak dianggap membuktikan kepatuhan penuh.

### Verifikasi

Jalankan public-shell/zzz-final-a11y dan pemeriksaan manual lima viewport serta zoom/keyboard.

### File/area terkait

- `tests/e2e/zzz-final-a11y.spec.ts`
- `tests/e2e/public-shell.spec.ts`
- `docs/qa/accessibility.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-029

**Verifikasi regresi seluruh fitur setelah redesign**

**Task ID:** UI-029
**Workstream:** Redesign UI
**Fase:** J — QA dan penerimaan UI
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** FR-01–FR-11; AC-01–AC-29
**Dependensi:** UI-028

Buktikan penggantian UI tetap memenuhi kontrak publik dan editorial.

### Kriteria selesai

- [ ] Matriks FR/AC mengacu hasil baru; workflow Admin/Media, snapshot, media, SEO dan CTA tetap benar.
- [ ] Lint/typecheck/build serta unit/integration/e2e relevan lulus tanpa melonggarkan skenario untuk desain baru.
- [ ] Perubahan selector/heading tes mengikuti desain dengan tetap mempertahankan pemeriksaan perilaku.

### Verifikasi

Jalankan pnpm lint, pnpm typecheck, pnpm build dan pnpm test:all pada target uji terisolasi; catat hasil aktual.

### File/area terkait

- `tests`
- `docs/qa/mvp-acceptance.md`
- `docs/testing.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-030

**Ukur ulang performa UI baru**

**Task ID:** UI-030
**Workstream:** Redesign UI
**Fase:** J — QA dan penerimaan UI
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** §13 Performance; D-09
**Dependensi:** UI-029

Ukur dampak redesign pada halaman yang ditetapkan PRD dan perbaiki hambatan terukur.

### Kriteria selesai

- [ ] Build production lokal dengan dataset tetap, browser/versi Lighthouse dan kondisi mesin dicatat.
- [ ] Sesudah warm-up, tiga pengukuran mobile per halaman menghasilkan median Performance ≥85 untuk /, daftar artikel, satu detail artikel dan /kegiatan.
- [ ] Perbaikan didasarkan hasil profil; perubahan lanjutan memicu pengukuran ulang yang terdampak.

### Verifikasi

Gunakan pnpm benchmark:demo mengikuti docs/qa/performance.md dan simpan laporan aktual.

### File/area terkait

- `scripts/benchmark.mjs`
- `docs/qa/performance.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-031

**Tinjau dan terima hasil redesign UI**

**Task ID:** UI-031
**Workstream:** Redesign UI
**Fase:** J — QA dan penerimaan UI
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** §10; §16; §18
**Dependensi:** UI-030

Serahkan desain yang sudah diimplementasikan beserta bukti QA untuk peninjauan pemilik.

### Kriteria selesai

- [ ] Pemilik dapat meninjau halaman dan bukti QA nyata pada demo yang dapat dibuka.
- [ ] Penerimaan, revisi atau penolakan dicatat; keberhasilan tes bukan penerimaan otomatis.

### Verifikasi

Jalankan demo UI dan catat tanggapan pemilik serta penyelesaian temuan.

### File/area terkait

- `docs/handover.md`
- `docs/decisions.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## UI-032

**Perbarui panduan desain dan hasil redesign**

**Task ID:** UI-032
**Workstream:** Redesign UI
**Fase:** J — QA dan penerimaan UI
**Status awal:** Backlog
**Prioritas:** P1
**Ukuran:** S
**Acuan PRD:** §13 Maintainability; §16
**Dependensi:** UI-031

Dokumentasikan sistem visual baru dan batas verifikasi.

### Kriteria selesai

- [ ] Panduan menjelaskan token, komponen, pola halaman dan aset yang benar-benar digunakan.
- [ ] Screenshot, hasil QA terkini, perubahan dan keterbatasan tersedia untuk pengelola berikutnya.

### Verifikasi

Tinjau dokumen terhadap implementasi dan hasil QA yang disetujui.

### File/area terkait

- `docs/design.md`
- `docs/handover.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## CT-001

**Inventaris konten resmi untuk seluruh modul**

**Task ID:** CT-001
**Workstream:** Konten resmi
**Fase:** Konten resmi — inventaris
**Status awal:** Ready
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** §9, §18.2; FR-01–FR-11
**Dependensi:** T063

Tetapkan materi awal rilis, sumber terkonfirmasi dan penanggung jawab setiap modul. Kartu ini mencakup isi editorial; inventaris identitas visual mengikuti UI-003.

### Kriteria selesai

- [ ] Matriks sebelas modul mencatat materi tersedia, sumber, pemilik materi dan status persetujuan.
- [ ] Materi contoh dibedakan dari materi resmi; jumlah materi awal serta empty state yang diterima ditetapkan pemilik.

### Verifikasi

Tinjau matriks terhadap FR-01–FR-11 dan simpan keputusan tanpa data privat.

### File/area terkait

- `docs/PRD-v1.1.md`
- `docs/handover.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## CT-002

**Siapkan profil organisasi dan isi editorial beranda**

**Task ID:** CT-002
**Workstream:** Konten resmi
**Fase:** Konten resmi — editorial
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** FR-01, FR-02; §8.7
**Dependensi:** CT-001

Konfirmasi profil, sejarah, visi, misi dan program unggulan lalu siapkan melalui workflow Pages yang sudah tersedia.

### Kriteria selesai

- [ ] Profil, sejarah, visi, misi dan program unggulan diperiksa pemilik materi.
- [ ] Isi Pages melalui review Admin dan versi publik sesuai materi yang disetujui.
- [ ] Statistik atau klaim organisasi hanya tampil jika memiliki sumber terkonfirmasi.

### Verifikasi

Bandingkan preview beranda/Tentang dan snapshot approved dengan materi yang disetujui.

### File/area terkait

- `docs/cms-guide.md`
- `src/app/(public)/page.tsx`
- `src/app/(public)/tentang/page.tsx`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## CT-003

**Validasi periode, delapan divisi dan data pengurus**

**Task ID:** CT-003
**Workstream:** Konten resmi
**Fase:** Konten resmi — organisasi
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** FR-03; AC-16, AC-28; §18.2.2
**Dependensi:** CT-001

Konfirmasi struktur organisasi aktual, profil/program delapan divisi, nama/jabatan dan izin foto pengurus tanpa menimpa riwayat periode.

### Kriteria selesai

- [ ] Delapan divisi memiliki profil/program terkonfirmasi; nama, jabatan dan foto pengurus yang ditampilkan memiliki izin publik.
- [ ] Periode serta relasi pengurus sesuai data organisasi dan riwayat tetap tersedia.
- [ ] Pemilihan periode aktif disetujui Admin dengan maksimum satu periode aktif.

### Verifikasi

Periksa preview struktur, arsip periode serta daftar/detail delapan divisi.

### File/area terkait

- `docs/cms-guide.md`
- `docs/qa/mvp-acceptance.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## CT-004

**Siapkan artikel dan edukasi awal yang disetujui**

**Task ID:** CT-004
**Workstream:** Konten resmi
**Fase:** Konten resmi — publikasi
**Status awal:** Backlog
**Prioritas:** P1
**Ukuran:** M
**Acuan PRD:** FR-04; §8.3
**Dependensi:** CT-001

Siapkan kumpulan artikel awal sesuai inventaris rilis, dengan sumber dan penulis publik yang diverifikasi.

### Kriteria selesai

- [ ] Kumpulan artikel awal sesuai inventaris rilis yang disepakati, termasuk keputusan empty state bila belum tersedia.
- [ ] Judul, excerpt, kategori, penulis publik, sumber dan aset diperiksa.
- [ ] Materi melalui review Admin; identitas akun CMS tidak otomatis dipublikasikan sebagai penulis.

### Verifikasi

Periksa daftar/detail, pencarian dan metadata terhadap materi approved.

### File/area terkait

- `docs/cms-guide.md`
- `docs/technical/seo.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## CT-005

**Validasi riset awal, sumber dan disclaimer**

**Task ID:** CT-005
**Workstream:** Konten resmi
**Fase:** Konten resmi — publikasi
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** FR-05; AC-20; §18.2.3
**Dependensi:** CT-001

Konfirmasi materi riset awal dan rumusan disclaimer organisasi, sambil mempertahankan disclaimer wajib serta keterikatan PDF pada versi approved.

### Kriteria selesai

- [ ] Riset yang dipilih mencatat tanggal analisis, sumber dan penulis/tim publik terkonfirmasi; materi lama tidak disajikan seolah analisis terkini.
- [ ] Rumusan disclaimer final dikonfirmasi tanpa menghilangkan disclaimer wajib template.
- [ ] PDF dan sampul yang disajikan merupakan aset yang disetujui bersama versi riset.

### Verifikasi

Periksa detail/PDF approved, tanggal analisis, sumber dan disclaimer; cocokkan keputusan inventaris jika belum ada riset awal.

### File/area terkait

- `docs/cms-guide.md`
- `docs/qa/mvp-acceptance.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## CT-006

**Validasi agenda dan tautan pendaftaran kegiatan**

**Task ID:** CT-006
**Workstream:** Konten resmi
**Fase:** Konten resmi — kegiatan
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** FR-06; §8.8; AC-15
**Dependensi:** CT-001

Periksa materi kegiatan resmi beserta waktu WIB, lokasi, poster dan konfirmasi tujuan pendaftaran sebelum dipublikasikan.

### Kriteria selesai

- [ ] Tanggal/waktu WIB, lokasi, penyelenggara dan poster diperiksa pemilik kegiatan.
- [ ] URL dan jendela pendaftaran dikonfirmasi Admin sebelum CTA aktif.
- [ ] Agenda batal/selesai/belum tersedia memiliki status atau empty state yang sesuai tanpa tautan contoh aktif.

### Verifikasi

Preview daftar/detail kegiatan dan CTA pada kondisi waktu yang relevan.

### File/area terkait

- `docs/cms-guide.md`
- `docs/qa/time.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## CT-007

**Validasi informasi rekrutmen dan status kampanye**

**Task ID:** CT-007
**Workstream:** Konten resmi
**Fase:** Konten resmi — kegiatan
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** FR-08; AC-14, AC-29
**Dependensi:** CT-001, CT-003

Konfirmasi kebutuhan rekrutmen aktual dan pilih kampanye resmi atau status belum dibuka tanpa menciptakan informasi pendaftaran fiktif.

### Kriteria selesai

- [ ] Posisi, divisi, syarat, tahapan dan rentang pendaftaran dikonfirmasi bila kampanye tersedia.
- [ ] URL hanya diaktifkan setelah konfirmasi Admin dan maksimum satu kampanye enabled.
- [ ] Jika belum ada rekrutmen resmi, halaman menunjukkan status belum dibuka tanpa CTA contoh.

### Verifikasi

Periksa kampanye/riwayat dan status sebelum buka, aktif serta tutup.

### File/area terkait

- `docs/cms-guide.md`
- `docs/qa/time.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## CT-008

**Siapkan album dokumentasi dengan izin publik**

**Task ID:** CT-008
**Workstream:** Konten resmi
**Fase:** Konten resmi — dokumentasi
**Status awal:** Backlog
**Prioritas:** P1
**Ukuran:** M
**Acuan PRD:** FR-07; §8.6; AC-24
**Dependensi:** CT-001

Pilih album rilis awal dan periksa izin foto, tanggal, alt text, caption serta tautan video melalui workflow galeri yang sudah tersedia.

### Kriteria selesai

- [ ] Album awal sesuai inventaris rilis dan foto yang ditampilkan memiliki izin publik.
- [ ] Urutan, tanggal kegiatan, alt text, caption dan tautan video diperiksa.
- [ ] Album/aset melalui review; file belum disetujui tetap privat atau memakai empty state yang disepakati.

### Verifikasi

Periksa daftar/detail album dan akses anonim terhadap foto approved versus draft.

### File/area terkait

- `docs/cms-guide.md`
- `docs/technical/media-access.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## CT-009

**Konfirmasi mitra dan izin penggunaan logo**

**Task ID:** CT-009
**Workstream:** Konten resmi
**Fase:** Konten resmi — kredibilitas
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** FR-09; AC-24; §18.2.6
**Dependensi:** CT-001

Verifikasi kerja sama resmi dan catat izin nama/logo secara privat sebelum identitas mitra ditampilkan.

### Kriteria selesai

- [ ] Nama, deskripsi, jenis kolaborasi dan website mitra yang ditampilkan memiliki konfirmasi.
- [ ] Izin logo dicatat Admin dan mengikat file yang tepat; bukti izin tetap privat.
- [ ] Mitra tanpa izin logo tampil tanpa logo; informasi belum terkonfirmasi mengikuti empty state yang disepakati.

### Verifikasi

Bandingkan halaman partnership dan agregasi homepage dengan catatan konfirmasi/izin.

### File/area terkait

- `docs/cms-guide.md`
- `docs/handover.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## CT-010

**Verifikasi prestasi dan dokumentasi pencapaian**

**Task ID:** CT-010
**Workstream:** Konten resmi
**Fase:** Konten resmi — kredibilitas
**Status awal:** Backlog
**Prioritas:** P1
**Ukuran:** S
**Acuan PRD:** FR-11; AC-24
**Dependensi:** CT-001

Konfirmasi prestasi organisasi berdasarkan sumber yang dapat ditelusuri dan periksa dokumentasi sebelum review publikasi.

### Kriteria selesai

- [ ] Judul, tanggal, penerima/tim dan sumber pencapaian dikonfirmasi.
- [ ] Dokumentasi memakai aset berizin serta approved.
- [ ] Filter tahun sesuai tanggal materi dan tidak ada prestasi contoh yang diklaim resmi.

### Verifikasi

Bandingkan daftar prestasi/filter tahun dengan inventaris approved atau keputusan empty state.

### File/area terkait

- `docs/cms-guide.md`
- `docs/qa/mvp-acceptance.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## CT-011

**Konfirmasi kontak, sosial dan konfigurasi publik**

**Task ID:** CT-011
**Workstream:** Konten resmi
**Fase:** Konten resmi — konfigurasi
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** FR-10; AC-21; §18.2.5
**Dependensi:** CT-001, UI-003, CT-012

Konfirmasi kontak organisasi lalu terapkan identitas/navigasi yang disepakati melalui Site Settings tanpa membuat formulir kontak baru.

### Kriteria selesai

- [ ] Email, lokasi dan sosial yang ditampilkan memiliki konfirmasi; data belum pasti tetap kosong.
- [ ] Header, footer dan halaman kontak memakai sumber Site Settings yang sama.
- [ ] Identitas/logo/favicon dan navigasi disimpan Admin dengan audit serta aset yang sah sesuai inventaris UI-003.

### Verifikasi

Periksa header/footer/kontak dan audit perubahan konfigurasi.

### File/area terkait

- `docs/cms-guide.md`
- `docs/handover.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## CT-012

**Validasi identitas resmi dan izin aset rilis**

**Task ID:** CT-012
**Workstream:** Konten resmi
**Fase:** Konten resmi — identitas final
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** §10; §17; §18.2.1
**Dependensi:** CT-001, UI-003, UI-005

Dapatkan konfirmasi organisasi atas identitas final dan izin aset rilis. Inventaris UI-003 tetap mencatat ketersediaan; kartu ini memvalidasi persetujuan resmi yang belum tersedia pada baseline.

### Kriteria selesai

- [ ] Logo, warna dan font final dikonfirmasi pihak yang berwenang serta sesuai desain yang dipilih.
- [ ] Sumber/lisensi dan izin publikasi aset rilis dapat ditelusuri; bukti privat tetap disimpan privat.
- [ ] Aset tanpa izin tidak digunakan sebagai identitas resmi dan mempunyai fallback yang jelas.

### Verifikasi

Bandingkan inventaris UI-003, desain terpilih dan media rilis dengan bukti konfirmasi organisasi.

### File/area terkait

- `docs/design.md`
- `docs/handover.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## OPS-001

**Tetapkan target hosting, domain dan operator**

**Task ID:** OPS-001
**Workstream:** Produksi
**Fase:** Produksi — keputusan infrastruktur
**Status awal:** Ready
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** §11.4, §18.2.7
**Dependensi:** T063

Tentukan target infrastruktur serta kepemilikan operasi. Kartu perencanaan ini tidak mengizinkan pembelian domain atau pengadaan layanan.

### Kriteria selesai

- [ ] Pilihan hosting memuat dukungan runtime, PostgreSQL, kapasitas dan media persisten.
- [ ] Pemilik domain, operator dan kewenangan akses dicatat.
- [ ] Biaya, izin UISI dan keputusan target dicatat; pengadaan memerlukan otorisasi pemilik.

### Verifikasi

Review keputusan infrastruktur terhadap kebutuhan aplikasi dan akses pengelola.

### File/area terkait

- `docs/handover.md`
- `docs/setup.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## OPS-002

**Perbarui audit dependency dan konfigurasi keamanan**

**Task ID:** OPS-002
**Workstream:** Produksi
**Fase:** Produksi — keamanan
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** §13 Security; §16
**Dependensi:** UI-030

Tinjau dependency aktual serta temuan nonkritis historis terhadap versi rilis setelah perubahan UI; hasil audit lama tidak dianggap bukti keamanan terkini.

### Kriteria selesai

- [ ] Audit baru mencatat versi, advisori, jangkauan dan tindakan untuk temuan relevan.
- [ ] Temuan moderate/low historis ditinjau ulang memakai kondisi terbaru.
- [ ] Patch yang diperlukan lulus regresi dan pengukuran ulang yang terdampak; risiko tersisa mempunyai keputusan dan penanggung jawab.

### Verifikasi

Audit package aktual; jalankan lint/typecheck/build dan tes terarah setelah perubahan.

### File/area terkait

- `docs/qa/security.md`
- `package.json`
- `pnpm-lock.yaml`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## OPS-003

**Siapkan environment produksi dan konfigurasi autentikasi**

**Task ID:** OPS-003
**Workstream:** Produksi
**Fase:** Produksi — environment
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** §11.3; §13 Security
**Dependensi:** OPS-001

Rencanakan lalu siapkan konfigurasi server pada target yang diizinkan, dengan secret privat dan batas origin/cookie yang sesuai HTTPS.

### Kriteria selesai

- [ ] Secret produksi terpisah, disimpan privat dan tidak masuk Git, log atau klien.
- [ ] SERVER_URL, origin, secure cookies dan akses database sesuai environment final.
- [ ] Login, penolakan lintas origin serta pencabutan sesi diverifikasi pada target persiapan yang diizinkan.

### Verifikasi

Periksa konfigurasi tanpa mencetak secret dan jalankan probe auth/origin/cookie.

### File/area terkait

- `docs/setup.md`
- `docs/qa/security.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## OPS-004

**Siapkan media persisten dengan gateway izin**

**Task ID:** OPS-004
**Workstream:** Produksi
**Fase:** Produksi — environment
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** §8.6, §11.4; AC-06, AC-11, AC-12
**Dependensi:** OPS-001

Siapkan penyimpanan media target tanpa mengubah aturan akses approved/draft yang telah dibuktikan pada localhost.

### Kriteria selesai

- [ ] Penyimpanan final mempertahankan file setelah restart/redeploy.
- [ ] Original, thumbnail, optimizer dan PDF mengikuti izin approved tanpa akses publik langsung ke area privat.
- [ ] Upload, download, revoke dan fallback diuji pada target persiapan yang diizinkan.

### Verifikasi

Tes byte/file anonim serta berizin dan restart media pada environment target.

### File/area terkait

- `docs/technical/media-access.md`
- `docs/setup.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## OPS-005

**Siapkan domain, HTTPS dan reverse proxy**

**Task ID:** OPS-005
**Workstream:** Produksi
**Fase:** Produksi — konektivitas
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** §11.4; §13 Security
**Dependensi:** OPS-001, OPS-003

Rencanakan konfigurasi domain/TLS/proxy dan terapkan hanya setelah perubahan DNS atau infrastruktur terkait diotorisasi.

### Kriteria selesai

- [ ] Domain/DNS dan sertifikat sesuai keputusan pemilik serta otorisasi perubahan.
- [ ] HTTPS, redirect HTTP, proxy headers dan batas upload sesuai kebutuhan aplikasi.
- [ ] Origin publik, CMS dan login bekerja dengan konfigurasi domain target.

### Verifikasi

Probe TLS, redirect, login, cookie Secure dan upload pada target yang diizinkan.

### File/area terkait

- `docs/setup.md`
- `docs/handover.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## OPS-006

**Siapkan build rilis dan staging terisolasi**

**Task ID:** OPS-006
**Workstream:** Produksi
**Fase:** Produksi — rehearsal
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** §11; §13 Maintainability; AC-22
**Dependensi:** OPS-001, OPS-003, OPS-004

Buktikan source rilis dapat dijalankan ulang pada staging tanpa memakai database/media/secret produksi atau membuka indeks publik demo.

### Kriteria selesai

- [ ] Build dapat diulang dari commit dan lockfile yang ditetapkan.
- [ ] Staging memakai database, media dan secret terpisah dengan akses terbatas serta noindex.
- [ ] Prosedur start, health check, restart dan rollback aplikasi terdokumentasi.

### Verifikasi

Rehearsal instalasi/build/start dari source bersih pada target persiapan yang diizinkan.

### File/area terkait

- `docs/setup.md`
- `docs/qa/clean-start.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## OPS-007

**Rehearsal migrasi database dan pemindahan data resmi**

**Task ID:** OPS-007
**Workstream:** Produksi
**Fase:** Produksi — rehearsal
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** §11.3; AC-22; §16
**Dependensi:** OPS-004, OPS-006, CT-001

Uji pemindahan data serta migrasi rilis ke target terpisah sebelum menyentuh produksi, termasuk konsistensi snapshot approved, audit dan media.

### Kriteria selesai

- [ ] Sumber, target dan migrasi ditentukan eksplisit tanpa reset database kerja.
- [ ] Rehearsal mempertahankan relasi, versi approved, audit, ACL dan checksum media.
- [ ] Strategi migrasi gagal serta rollback/restore disepakati sebelum eksekusi produksi.

### Verifikasi

Jalankan rehearsal ke target terpisah dan bandingkan data, file serta izin.

### File/area terkait

- `docs/operations/backup-restore.md`
- `docs/setup.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## OPS-008

**Tetapkan backup database dan media**

**Task ID:** OPS-008
**Workstream:** Produksi
**Fase:** Produksi — pemulihan
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** §13 Reliability; §18.2.8
**Dependensi:** OPS-001, OPS-004

Tentukan kebijakan pemulihan bersama operator lalu siapkan backup konsisten yang mencakup database dan seluruh media terkait.

### Kriteria selesai

- [ ] Frekuensi, retensi, RPO/RTO, pemilik akses dan lokasi off-site disepakati.
- [ ] Backup menyimpan pasangan database/media konsisten dengan manifest dan checksum.
- [ ] Backup tersimpan privat dan kegagalannya mempunyai jalur tindak lanjut.

### Verifikasi

Periksa snapshot uji, kelengkapan manifest dan akses backup.

### File/area terkait

- `docs/operations/backup-restore.md`
- `docs/handover.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## OPS-009

**Buktikan restore pada infrastruktur target**

**Task ID:** OPS-009
**Workstream:** Produksi
**Fase:** Produksi — pemulihan
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** §13 Reliability; §16
**Dependensi:** OPS-007, OPS-008

Lakukan latihan restore nyata ke target baru yang terpisah; proof lokal historis tidak menggantikan verifikasi target final.

### Kriteria selesai

- [ ] Backup dipulihkan ke database/media baru tanpa menimpa sumber.
- [ ] Konten publik dan checksum benar; draft/file privat serta ACL audit tetap terlindungi.
- [ ] Durasi pemulihan dicatat dan dibandingkan dengan RPO/RTO yang disepakati.

### Verifikasi

Latihan restore nyata pada target terpisah dengan laporan hasil dan batasnya.

### File/area terkait

- `docs/operations/backup-restore.md`
- `docs/qa/recovery-status.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## OPS-010

**Tetapkan akun operasional dan pemulihan akses**

**Task ID:** OPS-010
**Workstream:** Produksi
**Fase:** Produksi — operasi
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** §8.2; §18.2.4, §18.2.8
**Dependensi:** OPS-003

Siapkan pengelola bernama, prosedur recovery dan serah terima akses sesuai kewenangan organisasi; password/secret tidak ditaruh pada issue.

### Kriteria selesai

- [ ] Akun Admin dan Media operasional disahkan organisasi serta memakai identitas pengelola yang jelas.
- [ ] Pemulihan akun memiliki operator, prosedur dan sarana produksi yang disepakati.
- [ ] Transfer ownership, penonaktifan akun lama dan pencabutan sesi diuji; Admin aktif terakhir tetap terlindungi.

### Verifikasi

Simulasi recovery/serah terima memakai akun uji tanpa membagikan password di dokumen.

### File/area terkait

- `docs/handover.md`
- `docs/cms-guide.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## OPS-011

**Siapkan monitoring dan prosedur gangguan**

**Task ID:** OPS-011
**Workstream:** Produksi
**Fase:** Produksi — operasi
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** §13 Reliability
**Dependensi:** OPS-006, OPS-008

Tetapkan pemantauan dan respons operator untuk layanan, backup serta TLS dengan log aman yang dapat ditelusuri.

### Kriteria selesai

- [ ] Operator dapat memantau aplikasi, database, storage, backup dan masa berlaku TLS.
- [ ] Log/error mempertahankan korelasi tanpa secret atau detail koneksi.
- [ ] Jalur notifikasi, penanggung jawab insiden dan runbook pemulihan disepakati.

### Verifikasi

Simulasi kegagalan aman di staging; periksa log dan jalur pemberitahuan sesuai otorisasi.

### File/area terkait

- `docs/handover.md`
- `docs/qa/security.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## OPS-012

**Deployment produksi setelah otorisasi eksplisit**

**Task ID:** OPS-012
**Workstream:** Produksi
**Fase:** Produksi — peluncuran bersyarat
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** §11.4; §16
**Dependensi:** REL-004

Kartu rencana eksekusi mendatang. Pembuatan Kanban ini bukan izin deployment; pelaksanaan memerlukan persetujuan terpisah atas commit, target dan waktu rilis.

### Kriteria selesai

- [ ] Deployment dimulai hanya setelah otorisasi eksplisit yang merujuk commit, target dan waktu rilis.
- [ ] Backup, migrasi, konfigurasi, startup dan pemindahan traffic mengikuti runbook terverifikasi.
- [ ] Rollback dijalankan bila kriteria gagal terpenuhi; hasil dan versi terpasang dicatat.

### Verifikasi

Cocokkan log rilis dengan runbook lalu jalankan REL-005.

### File/area terkait

- `docs/handover.md`
- `docs/operations/backup-restore.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## REL-001

**Tinjauan pemilik atas demo baseline T063**

**Task ID:** REL-001
**Workstream:** Penerimaan
**Fase:** Penerimaan — baseline historis
**Status awal:** In review
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** §16, §20; docs/reports/T063.md
**Dependensi:** T063

Catat bahwa demo localhost telah selesai secara teknis tetapi penerimaan pemilik masih menunggu menurut sumber proyek. Kartu ini tidak menyatakan bahwa pemilik sudah menyetujui hasil.

### Kriteria selesai

- [ ] Pemilik meninjau hasil baseline atau menyatakan bahwa penilaian digabung dengan UAT versi terbaru.
- [ ] Keputusan, versi yang dinilai dan tindak lanjut dicatat berdasarkan pernyataan pemilik.
- [ ] Kelulusan teknis dan penerimaan pemilik ditampilkan sebagai status yang terpisah.

### Verifikasi

Cocokkan catatan keputusan dengan tanggapan pemilik; jangan menyimpulkan persetujuan dari tes atau permintaan kerja.

### File/area terkait

- `docs/reports/T063.md`
- `docs/handover.md`
- `docs/qa/mvp-acceptance.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## REL-002

**Verifikasi gabungan seluruh proyek setelah perubahan**

**Task ID:** REL-002
**Workstream:** Penerimaan
**Fase:** Penerimaan — QA gabungan
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Acuan PRD:** FR-01–FR-11; AC-01–AC-29; §10, §13–16
**Dependensi:** UI-030, CT-001, CT-002, CT-003, CT-004, CT-005, CT-006, CT-007, CT-008, CT-009, CT-010, CT-011, OPS-006, CT-012, OPS-002, OPS-005, OPS-007, OPS-010

Checkpoint regresi lintas sistem setelah UI dan konten resmi berubah. Gunakan bukti UI terarah yang baru; lengkapi bukti fungsional/editorial/privasi tanpa menganggap tes localhost lama otomatis masih berlaku.

### Kriteria selesai

- [ ] FR-01–FR-11, AC-01–AC-29 dan 12 butir DoD memiliki hasil terbaru dengan bukti yang relevan.
- [ ] Regresi editorial, draft/media privat, metadata, CTA waktu dan izin logo lulus bersama perubahan UI/konten.
- [ ] Bukti responsif/aksesibilitas dan Lighthouse sesuai metode PRD ditelusuri; kegagalan diselesaikan tanpa menurunkan ambang.

### Verifikasi

pnpm test:all; pnpm lint; pnpm typecheck; pnpm build; review laporan QA serta benchmark terbaru. Periksa juga rute publik, CMS, TLS/origin, media dan konten pada staging terisolasi; suite harness lokal tidak menggantikan pemeriksaan environment target.

### File/area terkait

- `docs/qa/mvp-acceptance.md`
- `docs/testing.md`
- `docs/qa/accessibility.md`
- `docs/qa/performance.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## REL-003

**UAT seluruh proyek bersama pemilik**

**Task ID:** REL-003
**Workstream:** Penerimaan
**Fase:** Penerimaan — UAT proyek
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** §14, §16
**Dependensi:** REL-002, UI-031, REL-001

Tinjau hasil proyek secara utuh: sebelas modul, konten resmi, operasi CMS dan alur editorial. Penerimaan visual mengikuti UI-031; kartu ini menilai keseluruhan perilaku produk.

### Kriteria selesai

- [ ] Pemilik meninjau sebelas modul dan alur Admin/Media memakai naskah yang disepakati.
- [ ] Keputusan penerimaan, revisi atau penolakan dicatat terhadap versi dan cakupan yang ditinjau.
- [ ] Temuan memiliki task tindak lanjut; penerimaan visual tidak otomatis dianggap penerimaan seluruh produk.

### Verifikasi

Catatan UAT dan keputusan pemilik menelusuri skenario serta temuan yang belum selesai.

### File/area terkait

- `docs/demo-script.md`
- `docs/handover.md`
- `docs/qa/mvp-acceptance.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## REL-004

**Tinjau kesiapan produksi dan keputusan rilis**

**Task ID:** REL-004
**Workstream:** Penerimaan
**Fase:** Penerimaan — keputusan rilis
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** §11.4; §16; §18.2
**Dependensi:** REL-003, UI-030, UI-031, UI-032, CT-001, CT-002, CT-003, CT-004, CT-005, CT-006, CT-007, CT-008, CT-009, CT-010, CT-011, OPS-002, OPS-005, OPS-007, OPS-009, OPS-010, OPS-011, CT-012

Gate rilis seluruh proyek yang memeriksa UI, konten resmi, pengujian serta kesiapan operasi. Persetujuan deployment harus diberikan secara eksplisit setelah hasil siap ditinjau.

### Kriteria selesai

- [ ] Konten/izin, UI, QA, infrastruktur, keamanan, backup/restore, recovery dan operator ditinjau dengan bukti.
- [ ] Commit, domain, jendela rilis, kriteria rollback serta risiko tersisa tercatat.
- [ ] Pihak berwenang memberi atau menolak otorisasi deployment secara eksplisit; tanpa persetujuan OPS-012 tetap tertahan.

### Verifikasi

Checklist readiness berbukti beserta keputusan rilis dari pihak berwenang.

### File/area terkait

- `docs/handover.md`
- `docs/qa/mvp-acceptance.md`
- `docs/operations/backup-restore.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## REL-005

**Smoke test website dan CMS setelah deployment**

**Task ID:** REL-005
**Workstream:** Penerimaan
**Fase:** Penerimaan — pascarilis
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** §13, §16
**Dependensi:** OPS-012

Verifikasi domain produksi serta monitoring segera setelah deployment yang telah diotorisasi, sebelum menyatakan rilis operasional sehat.

### Kriteria selesai

- [ ] URL publik, CMS login, media, pencarian dan CTA yang sah bekerja pada domain final.
- [ ] Draft/preview/file privat tetap ditolak; canonical, sitemap dan robots sesuai status produksi.
- [ ] Monitoring sehat dan hasil smoke menentukan lanjut operasi atau rollback.

### Verifikasi

Smoke test domain final menggunakan data uji yang diizinkan, pemeriksaan log dan monitoring.

### File/area terkait

- `docs/technical/seo.md`
- `docs/handover.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## REL-006

**Serahkan operasi dan tanggung jawab pemeliharaan**

**Task ID:** REL-006
**Workstream:** Penerimaan
**Fase:** Penerimaan — serah terima operasi
**Status awal:** Backlog
**Prioritas:** P1
**Ukuran:** S
**Acuan PRD:** §16.11; §18.2.4
**Dependensi:** REL-005, OPS-010, OPS-011

Serahkan panduan CMS serta runbook infrastruktur aktual kepada pengelola. Dokumentasi redesign UI sendiri mengikuti UI-032.

### Kriteria selesai

- [ ] Panduan CMS, deployment, backup/restore, recovery dan gangguan sesuai environment aktual.
- [ ] Operator dapat menjalankan skenario review/publish dan menemukan prosedur pemulihan.
- [ ] Kepemilikan akun/domain/infrastruktur serta tanggung jawab pemeliharaan dicatat tanpa secret.

### Verifikasi

Walkthrough serah terima dengan pengelola dan catatan tindak lanjut.

### File/area terkait

- `docs/handover.md`
- `docs/cms-guide.md`
- `docs/operations/backup-restore.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## GATE-01

**Checkpoint persetujuan desain**

**Task ID:** GATE-01
**Workstream:** Checkpoint lanjutan
**Fase:** Arah desain
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** §10; §14–16
**Dependensi:** UI-005

Tinjau hasil kelompok tugas sebelum melanjutkan pemeriksaan berikutnya.

### Kriteria selesai

- [ ] Mockup, inventaris aset dan keputusan arah visual dapat ditelusuri.
- [ ] Bukti pemeriksaan dan temuan tercatat; task yang gagal tetap terbuka.
- [ ] Checkpoint tidak otomatis memberi penerimaan pemilik atau izin deployment.

### Verifikasi

Telusuri bukti seluruh dependensi, jalankan demo terarah yang relevan dan catat keputusan checkpoint.

### File/area terkait

- `docs/qa`
- `docs/design.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## GATE-02

**Checkpoint fondasi dan navigasi UI**

**Task ID:** GATE-02
**Workstream:** Checkpoint lanjutan
**Fase:** Fondasi UI
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** §10; §14–16
**Dependensi:** UI-008, UI-009

Tinjau hasil kelompok tugas sebelum melanjutkan pemeriksaan berikutnya.

### Kriteria selesai

- [ ] Token, header, menu mobile dan footer bekerja konsisten; CSS Payload tetap terpisah.
- [ ] Bukti pemeriksaan dan temuan tercatat; task yang gagal tetap terbuka.
- [ ] Checkpoint tidak otomatis memberi penerimaan pemilik atau izin deployment.

### Verifikasi

Telusuri bukti seluruh dependensi, jalankan demo terarah yang relevan dan catat keputusan checkpoint.

### File/area terkait

- `docs/qa`
- `docs/design.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## GATE-03

**Checkpoint beranda dan organisasi**

**Task ID:** GATE-03
**Workstream:** Checkpoint lanjutan
**Fase:** UI modul
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** §10; §14–16
**Dependensi:** UI-011, UI-012, UI-014

Tinjau hasil kelompok tugas sebelum melanjutkan pemeriksaan berikutnya.

### Kriteria selesai

- [ ] Beranda, Tentang, divisi dan struktur/arsip mempertahankan snapshot dan periode yang benar.
- [ ] Bukti pemeriksaan dan temuan tercatat; task yang gagal tetap terbuka.
- [ ] Checkpoint tidak otomatis memberi penerimaan pemilik atau izin deployment.

### Verifikasi

Telusuri bukti seluruh dependensi, jalankan demo terarah yang relevan dan catat keputusan checkpoint.

### File/area terkait

- `docs/qa`
- `docs/design.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## GATE-04

**Checkpoint artikel dan riset**

**Task ID:** GATE-04
**Workstream:** Checkpoint lanjutan
**Fase:** UI modul
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** §10; §14–16
**Dependensi:** UI-019

Tinjau hasil kelompok tugas sebelum melanjutkan pemeriksaan berikutnya.

### Kriteria selesai

- [ ] Search/filter/pagination, renderer aman, disclaimer dan PDF approved dapat didemonstrasikan.
- [ ] Bukti pemeriksaan dan temuan tercatat; task yang gagal tetap terbuka.
- [ ] Checkpoint tidak otomatis memberi penerimaan pemilik atau izin deployment.

### Verifikasi

Telusuri bukti seluruh dependensi, jalankan demo terarah yang relevan dan catat keputusan checkpoint.

### File/area terkait

- `docs/qa`
- `docs/design.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## GATE-05

**Checkpoint kegiatan dan rekrutmen**

**Task ID:** GATE-05
**Workstream:** Checkpoint lanjutan
**Fase:** UI modul
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** §10; §14–16
**Dependensi:** UI-022

Tinjau hasil kelompok tugas sebelum melanjutkan pemeriksaan berikutnya.

### Kriteria selesai

- [ ] Status WIB, pembatalan, deadline dan revalidasi CTA bekerja pada batas waktu.
- [ ] Bukti pemeriksaan dan temuan tercatat; task yang gagal tetap terbuka.
- [ ] Checkpoint tidak otomatis memberi penerimaan pemilik atau izin deployment.

### Verifikasi

Telusuri bukti seluruh dependensi, jalankan demo terarah yang relevan dan catat keputusan checkpoint.

### File/area terkait

- `docs/qa`
- `docs/design.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)

## GATE-06

**Checkpoint seluruh halaman publik**

**Task ID:** GATE-06
**Workstream:** Checkpoint lanjutan
**Fase:** UI modul
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Acuan PRD:** §10; §14–16
**Dependensi:** UI-023, UI-024, UI-025, UI-026, UI-027, GATE-03, GATE-04, GATE-05

Tinjau hasil kelompok tugas sebelum melanjutkan pemeriksaan berikutnya.

### Kriteria selesai

- [ ] Seluruh 11 modul dan state pemulihan siap memasuki audit lintas halaman.
- [ ] Bukti pemeriksaan dan temuan tercatat; task yang gagal tetap terbuka.
- [ ] Checkpoint tidak otomatis memberi penerimaan pemilik atau izin deployment.

### Verifikasi

Telusuri bukti seluruh dependensi, jalankan demo terarah yang relevan dan catat keputusan checkpoint.

### File/area terkait

- `docs/qa`
- `docs/design.md`

### Bukti dan hasil

Belum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.

[Sumber PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/docs/PRD-v1.1.md)
