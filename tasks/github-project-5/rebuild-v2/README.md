# Kanban rebuild v2 — dashboard admin custom

Disiapkan 15 November 2026 untuk [view Rebuild v2 pada GitHub Project #5](https://github.com/users/silkiy/projects/5/views/6), dengan filter `RB-`. Acuan: [perubahan arah rebuild](../../../docs/rebuild-v2.md) dan [PRD v1.1](../../../docs/PRD-v1.1.md).

Paket memuat **61 kartu**: **1 epic** dan **60 task baru**. Next.js tetap digunakan; dashboard, API, validasi dan domain admin dibuat sendiri tanpa Payload. Admin/Media serta draft → review → publish tetap dipakai dan diuji ulang.

**Seluruh task rebuild belum selesai.** Status Done v1 tidak diwariskan. [Paket 154 kartu terdahulu](../README.md) disimpan sebagai histori; pekerjaan aktif v2 menggunakan ID RB dan dependensi RB saja.

**Status sinkronisasi: complete.** Seluruh **61 kartu** memiliki mapping Project dan body terverifikasi. Generator hanya membaca mapping yang disimpan; ketiadaan mapping tidak membuktikan bahwa suatu judul belum ada di GitHub.

## Batas perubahan

- Tahap ini menyiapkan rencana/task. Tidak ada branch yang dibuat, kode/data yang dihapus, implementasi aplikasi atau deployment oleh generator.
- RB-001 menyiapkan branch baru, titik pemulihan dan isolasi target. Branch Git tidak melindungi database/media; data lama tidak direset otomatis.
- RB-002 memilih library auth/session, rich text, akses database/migrasi dan storage berdasarkan dokumentasi resmi. Dashboard custom tidak berarti membuat kriptografi sendiri.
- Setiap slice modul mencakup model/migrasi baru, form admin, API/validasi dan pembacaan publik yang diperlukan. Schema Payload lama tidak menjadi ketergantungan diam-diam.
- Kepatuhan PRD terhadap versi publik, review, media privat, audit, disclaimer, izin logo, waktu WIB serta aktivasi tunggal dibuktikan ulang.
- Penerimaan pemilik dan otorisasi deployment merupakan keputusan baru; tidak disimpulkan dari pembuatan kartu atau kelulusan teknis v1.

## Kolom dan ukuran task

`Backlog → Ready → In progress → In review → Done`. Status di indeks adalah status awal rencana, bukan klaim pelaksanaan. Assignee dan deadline belum ditetapkan.

S/M merupakan perkiraan satu sesi kecil. Pecah task sebelum implementasi bila lingkup aktual melampaui sekitar lima berkas atau mencakup beberapa jalur independen. Epic RB-000 melacak keseluruhan hasil dan bukan satu sesi implementasi.

## Kelompok pekerjaan

| Fase | Jumlah kartu |
|---|---:|
| Rebuild v2 | 1 |
| Fondasi | 3 |
| Desain | 2 |
| Data dan autentikasi | 4 |
| Dashboard admin | 3 |
| Editorial dan media | 12 |
| Modul publik dan admin | 20 |
| Checkpoint | 1 |
| QA dan kualitas | 7 |
| Konten resmi | 1 |
| Penerimaan | 2 |
| Produksi | 5 |

## Urutan implementasi

Indeks disusun menurut dependensi, sehingga RB-060 dapat muncul sebelum RB-025. Mulai RB-001, tetapkan arsitektur/desain, buktikan satu alur artikel tanpa Payload pada RB-026, lalu perluas ke seluruh modul dan lanjutkan QA/UAT serta persiapan produksi.

| Urutan | ID | Task | Status awal | Ukuran | Dependensi | Sinkronisasi |
|---:|---|---|---|---|---|---|
| 1 | RB-000 | [Rebuild v2 dari nol — Next.js dan dashboard admin custom](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305867582) | Backlog | Epic | — | Body terverifikasi |
| 2 | RB-001 | [Siapkan branch rebuild dan titik pemulihan](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305867715) | Ready | S | — | Body terverifikasi |
| 3 | RB-002 | [Tetapkan arsitektur Next.js dan admin custom](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305867822) | Backlog | S | RB-001 | Body terverifikasi |
| 4 | RB-003 | [Bangun kerangka Next.js baru tanpa Payload](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305867952) | Backlog | M | RB-002 | Body terverifikasi |
| 5 | RB-004 | [Rancang UI publik dan dashboard admin baru](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305869901) | Backlog | S | RB-002 | Body terverifikasi |
| 6 | RB-005 | [Bangun token dan komponen dasar UI baru](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305869978) | Backlog | M | RB-003, RB-004 | Body terverifikasi |
| 7 | RB-006 | [Rancang schema baru dan kontrak versi artikel](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305870098) | Backlog | M | RB-003 | Body terverifikasi |
| 8 | RB-007 | [Buat bootstrap Admin awal yang aman](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305870872) | Backlog | S | RB-006 | Body terverifikasi |
| 9 | RB-008 | [Bangun login, logout dan sesi admin](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305871001) | Backlog | M | RB-007 | Body terverifikasi |
| 10 | RB-009 | [Kelola akun, role dan assignment secara custom](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305871122) | Backlog | M | RB-008 | Body terverifikasi |
| 11 | RB-010 | [Bangun shell dashboard admin custom](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305871238) | Backlog | M | RB-005, RB-008 | Body terverifikasi |
| 12 | RB-011 | [Buat editor draft artikel custom](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305871371) | Backlog | M | RB-006, RB-009, RB-010 | Body terverifikasi |
| 13 | RB-012 | [Terima upload gambar dan PDF privat](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305871499) | Backlog | M | RB-008, RB-011 | Body terverifikasi |
| 14 | RB-013 | [Lindungi akses file asli dan turunan](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305871962) | Backlog | M | RB-012 | Body terverifikasi |
| 15 | RB-014 | [Bangun media library dan pemilih aset](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305872097) | Backlog | M | RB-010, RB-012, RB-013 | Body terverifikasi |
| 16 | RB-015 | [Ajukan dan tarik pengajuan konten](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305872223) | Backlog | M | RB-011, RB-014 | Body terverifikasi |
| 17 | RB-016 | [Minta revisi dengan catatan Admin](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305872325) | Backlog | M | RB-015 | Body terverifikasi |
| 18 | RB-017 | [Terbitkan snapshot yang disetujui secara atomik](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305872867) | Backlog | M | RB-015, RB-016, RB-013 | Body terverifikasi |
| 19 | RB-018 | [Bangun pembacaan publik approved-only](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305872967) | Backlog | M | RB-017 | Body terverifikasi |
| 20 | RB-019 | [Revisi konten terbit tanpa mengubah publik](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306043663) | Backlog | M | RB-017, RB-018 | Body terverifikasi |
| 21 | RB-020 | [Tarik publikasi dan bersihkan representasinya](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306044874) | Backlog | M | RB-019 | Body terverifikasi |
| 22 | RB-021 | [Kelola media yang digunakan bersama](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306044953) | Backlog | M | RB-017, RB-020 | Body terverifikasi |
| 23 | RB-022 | [Sediakan revoke dan hapus media aman](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306045035) | Backlog | M | RB-021 | Body terverifikasi |
| 24 | RB-023 | [Bangun antrean review dan preview privat](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306045180) | Backlog | M | RB-010, RB-016, RB-019, RB-022 | Body terverifikasi |
| 25 | RB-024 | [Kelola Site Settings melalui dashboard custom](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306045281) | Backlog | M | RB-009, RB-010, RB-014 | Body terverifikasi |
| 26 | RB-060 | [Bangun header, navigasi dan footer publik baru](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306050894) | Backlog | M | RB-005, RB-024 | Body terverifikasi |
| 27 | RB-025 | [Bangun daftar dan detail artikel dengan UI baru](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306045513) | Backlog | M | RB-005, RB-018, RB-060 | Body terverifikasi |
| 28 | RB-026 | [Checkpoint alur artikel lengkap tanpa Payload](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306045607) | Backlog | M | RB-019, RB-020, RB-021, RB-022, RB-023, RB-024, RB-025 | Body terverifikasi |
| 29 | RB-027 | [Bangun Pages untuk beranda dan Tentang](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306045874) | Backlog | M | RB-026 | Body terverifikasi |
| 30 | RB-028 | [Kelola periode organisasi dan arsip](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306047101) | Backlog | M | RB-026 | Body terverifikasi |
| 31 | RB-029 | [Bangun pengelolaan delapan divisi](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306047174) | Backlog | M | RB-028 | Body terverifikasi |
| 32 | RB-030 | [Bangun pengelolaan dan struktur pengurus](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306047263) | Backlog | M | RB-028, RB-029 | Body terverifikasi |
| 33 | RB-031 | [Batasi satu periode organisasi aktif](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306047344) | Backlog | M | RB-030 | Body terverifikasi |
| 34 | RB-032 | [Bangun editor dan workflow riset custom](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306047524) | Backlog | M | RB-026 | Body terverifikasi |
| 35 | RB-033 | [Bangun katalog dan detail riset baru](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306047610) | Backlog | M | RB-032, RB-025 | Body terverifikasi |
| 36 | RB-034 | [Bangun editor kegiatan dan kebijakan waktu](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306047716) | Backlog | M | RB-026 | Body terverifikasi |
| 37 | RB-035 | [Bangun agenda dan detail kegiatan baru](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306047797) | Backlog | M | RB-034, RB-005 | Body terverifikasi |
| 38 | RB-036 | [Bangun pengelolaan kampanye rekrutmen](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306047873) | Backlog | M | RB-026, RB-028, RB-029 | Body terverifikasi |
| 39 | RB-037 | [Batasi satu kampanye rekrutmen enabled](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306048200) | Backlog | M | RB-036 | Body terverifikasi |
| 40 | RB-038 | [Bangun halaman rekrutmen dan riwayat baru](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306048283) | Backlog | M | RB-037, RB-035 | Body terverifikasi |
| 41 | RB-039 | [Bangun galeri dari dashboard sampai publik](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306048374) | Backlog | M | RB-026, RB-034 | Body terverifikasi |
| 42 | RB-040 | [Bangun partnership dengan izin logo Admin](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306048463) | Backlog | M | RB-026, RB-024 | Body terverifikasi |
| 43 | RB-041 | [Bangun prestasi dan filter tahun](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306048554) | Backlog | M | RB-026 | Body terverifikasi |
| 44 | RB-042 | [Bangun portal publikasi baru](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306048912) | Backlog | S | RB-025, RB-033 | Body terverifikasi |
| 45 | RB-043 | [Bangun halaman kontak terkonfirmasi](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306049002) | Backlog | S | RB-024, RB-005 | Body terverifikasi |
| 46 | RB-044 | [Lengkapi beranda dengan seluruh modul](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306049105) | Backlog | M | RB-027, RB-031, RB-033, RB-035, RB-038, RB-039, RB-040, RB-041, RB-042, RB-043 | Body terverifikasi |
| 47 | RB-045 | [Lengkapi loading, error, 404 dan log aman](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306049178) | Backlog | M | RB-044, RB-023 | Body terverifikasi |
| 48 | RB-046 | [Bangun metadata, sitemap dan aturan indeks](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306049275) | Backlog | M | RB-044 | Body terverifikasi |
| 49 | RB-047 | [Siapkan seed demo rebuild yang terisolasi](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306049473) | Backlog | M | RB-044 | Body terverifikasi |
| 50 | RB-048 | [Validasi konten resmi dan izin aset rilis](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306049571) | Backlog | S | RB-004, RB-044 | Body terverifikasi |
| 51 | RB-049 | [Audit keamanan dan matriks izin sistem baru](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306049666) | Backlog | M | RB-045, RB-046, RB-047 | Body terverifikasi |
| 52 | RB-050 | [Audit responsif dan aksesibilitas publik/admin](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306049755) | Backlog | M | RB-045, RB-047 | Body terverifikasi |
| 53 | RB-051 | [Ukur performa UI baru sesuai PRD](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306049832) | Backlog | M | RB-046, RB-049, RB-050 | Body terverifikasi |
| 54 | RB-052 | [Buktikan clean start, restart dan restore lokal](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306050045) | Backlog | M | RB-047, RB-049 | Body terverifikasi |
| 55 | RB-053 | [UAT dan serah terima demo rebuild](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306050138) | Backlog | S | RB-048, RB-049, RB-050, RB-051, RB-052 | Body terverifikasi |
| 56 | RB-054 | [Tetapkan hosting, domain dan staging rebuild](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306050199) | Backlog | M | RB-053 | Body terverifikasi |
| 57 | RB-055 | [Siapkan keamanan dan recovery akun target](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306050305) | Backlog | M | RB-054 | Body terverifikasi |
| 58 | RB-056 | [Buktikan backup, restore dan rollback target](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306050426) | Backlog | M | RB-054, RB-055 | Body terverifikasi |
| 59 | RB-057 | [Siapkan monitoring dan panduan operasi](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306050601) | Backlog | M | RB-054, RB-056 | Body terverifikasi |
| 60 | RB-058 | [Tinjau kesiapan dan otorisasi rilis rebuild](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306050683) | Backlog | S | RB-053, RB-055, RB-056, RB-057 | Body terverifikasi |
| 61 | RB-059 | [Deploy rebuild dan verifikasi pascarilis](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306050772) | Backlog | M | RB-058 | Body terverifikasi |

## Kriteria kelulusan lintas sistem

- Seluruh 11 modul dan dua role mempunyai bukti baru pada dashboard, API dan website publik; FR-01–FR-11, AC-01–AC-29 dan DoD ditelusuri.
- Uji 320/375/768/1024/1440 px, keyboard, fokus, zoom 200%, reduced motion dan target WCAG 2.2 AA pada publik/admin.
- Lighthouse mobile mengikuti production build/dataset tetap, warm-up lalu tiga run; median Performance minimal 85 pada beranda, daftar artikel, satu detail artikel dan kegiatan.
- Clean start, migrasi, seed ulang, restart, backup/restore, dokumentasi dan UAT dibuktikan ulang. Produksi memerlukan kesiapan target serta otorisasi rilis.

## File dan pembaruan

- [cards.json](cards.json): sumber task baru; simpan keputusan scope pada [docs/rebuild-v2.md](../../../docs/rebuild-v2.md).
- [manifest.json](manifest.json): metadata, urutan, dependensi serta body siap kartu untuk seluruh rencana.
- [sync-results.json](sync-results.json): mapping ID/URL draft item serta hasil verifikasi aktual.
- [build-manifest.mjs](build-manifest.mjs): generator lokal. Jalankan `node tasks/github-project-5/rebuild-v2/build-manifest.mjs` dari repository.

Generator tidak menulis cards.json atau sync-results.json dan tidak menghubungi GitHub. Untuk melanjutkan publikasi, cocokkan Task ID dengan item existing terlebih dahulu; jangan membuat ulang judul yang sudah ada hanya karena mapping lokal belum lengkap. Catat ID/URL dan bodyVerified berdasarkan hasil yang benar-benar diamati, lalu regenerasi. Draft item Project tidak dianggap sebagai issue repository.

## Rincian kartu

### RB-000

**Rebuild v2 dari nol — Next.js dan dashboard admin custom**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305867582)

**Task ID:** RB-000
**Jenis:** epic
**Fase:** Rebuild v2
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** Epic; beberapa sesi, dipecah pada kartu anak
**Dependensi:** Tidak ada

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Implementasi baru dilakukan di branch baru dengan UI publik dan dashboard admin buatan sendiri, tanpa Payload.
- [ ] Dua role Admin/Media serta workflow draft → review → publish dibangun dan diuji ulang; seluruh 11 modul PRD tercakup.
- [ ] Seluruh task RB-001–RB-060 memiliki bukti selesai dan penerimaan baru; status Done v1 tidak dihitung sebagai progres rebuild.

### Verifikasi

Telusuri seluruh kartu RB dan bukti QA/UAT. Kartu ini merupakan epic, bukan satu sesi implementasi.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** Keputusan pemilik 15 November 2026; docs/rebuild-v2.md.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-001

**Siapkan branch rebuild dan titik pemulihan**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305867715)

**Task ID:** RB-001
**Jenis:** task
**Fase:** Fondasi
**Status awal:** Ready
**Prioritas:** P0
**Ukuran:** S
**Dependensi:** Tidak ada

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Branch baru dan commit acuan v1 tercatat; perubahan kerja yang belum dikomit diamankan tanpa dibuang.
- [ ] Target database dan direktori media rebuild terpisah; penghapusan kode hanya berlaku pada branch baru, tanpa reset data lama.

### Verifikasi

Periksa branch/base commit, status kerja dan target DB/media sebelum perubahan destruktif.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-002

**Tetapkan arsitektur Next.js dan admin custom**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305867822)

**Task ID:** RB-002
**Jenis:** task
**Fase:** Fondasi
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Dependensi:** RB-001

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Next.js dipertahankan; dashboard, API, validasi dan domain admin dibuat sendiri tanpa Payload.
- [ ] Pilihan library auth/session, editor rich text, akses database/migrasi, storage serta kebijakan migrasi data vs mulai kosong dicatat dan diverifikasi kompatibilitasnya.

### Verifikasi

Tinjau keputusan terhadap PRD dan dokumentasi resmi; jangan mengarang versi/library yang belum dipilih.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-003

**Bangun kerangka Next.js baru tanpa Payload**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305867952)

**Task ID:** RB-003
**Jenis:** task
**Fase:** Fondasi
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-002

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Source rebuild dan dependensi aktif tidak bergantung pada Payload atau @payloadcms; struktur publik/admin/server/tests tersedia.
- [ ] Environment example tanpa secret, lockfile serta scripts dev/build/lint/typecheck/test tersedia; startup dan build bersih lulus.

### Verifikasi

Instalasi bersih, lint/typecheck/build dan smoke rute publik/admin pada target rebuild.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-004

**Rancang UI publik dan dashboard admin baru**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305869901)

**Task ID:** RB-004
**Jenis:** task
**Fase:** Desain
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Dependensi:** RB-002

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Wireframe/mockup mobile dan desktop mencakup navigasi publik, halaman baca, login, dashboard, form editor dan antrean review.
- [ ] Arah warna/font/aset, empty/error/loading states, keyboard dan keputusan desain pemilik tercatat.

### Verifikasi

Review mockup konkret bersama pemilik; aset sementara tetap berlabel.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-005

**Bangun token dan komponen dasar UI baru**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305869978)

**Task ID:** RB-005
**Jenis:** task
**Fase:** Desain
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-003, RB-004

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Token warna/font/jarak serta tombol, field, tabel, pagination dan status mengikuti desain disetujui.
- [ ] Komponen responsif, memiliki label/fokus yang jelas dan menghormati reduced motion.

### Verifikasi

Inspeksi komponen mobile/desktop dan keyboard; lint/typecheck/build.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-006

**Rancang schema baru dan kontrak versi artikel**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305870098)

**Task ID:** RB-006
**Jenis:** task
**Fase:** Data dan autentikasi
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-003

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Schema akun, artikel, revisi, pengajuan, manifest aset dan audit memiliki constraint satu revisi kerja serta versi publik.
- [ ] Migrasi hanya ke database/schema rebuild terisolasi; setup DB kosong dan rollback dibuktikan.

### Verifikasi

Terapkan migrasi pada target baru; periksa constraint, transaksi dan rollback.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-007

**Buat bootstrap Admin awal yang aman**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305870872)

**Task ID:** RB-007
**Jenis:** task
**Fase:** Data dan autentikasi
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Dependensi:** RB-006

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Admin awal dibuat melalui prosedur lokal tanpa password tetap di source atau pendaftaran publik bebas.
- [ ] Bootstrap ulang tidak menggandakan akun; secret dan hasil setup tidak masuk log publik.

### Verifikasi

Jalankan setup pertama/ulang dan probe endpoint anonim.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-008

**Bangun login, logout dan sesi admin**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305871001)

**Task ID:** RB-008
**Jenis:** task
**Fase:** Data dan autentikasi
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-007

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Login/logout memakai library auth terawat, cookie aman, validasi server dan perlindungan request lintas origin.
- [ ] Request memeriksa akun/role terbaru; logout dan perubahan akses mencabut sesi yang tidak lagi sah.

### Verifikasi

API/browser: login salah/berulang, logout, origin berbeda, sesi nonaktif dan expiry.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-009

**Kelola akun, role dan assignment secara custom**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305871122)

**Task ID:** RB-009
**Jenis:** task
**Fase:** Data dan autentikasi
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-008

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Hanya Admin membuat akun/mengubah role/status/reset akses dan owner/assignee; Media tidak dapat memalsukan hak melalui API.
- [ ] Admin aktif terakhir terlindungi termasuk request paralel; perubahan tercatat dalam audit tanpa secret.

### Verifikasi

Dua role, akun nonaktif, spoofing owner/role, transfer assignment dan race Admin terakhir.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-010

**Bangun shell dashboard admin custom**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305871238)

**Task ID:** RB-010
**Jenis:** task
**Fase:** Dashboard admin
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-005, RB-008

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Sidebar/header/rute dashboard dibuat sendiri dan memerlukan sesi valid; navigasi sesuai izin server.
- [ ] Dashboard berfungsi pada mobile dan keyboard, dengan ringkasan tugas editorial yang sesuai akses pengguna.

### Verifikasi

Anonim/Admin/Media, menu mobile, fokus keyboard dan direct URL privat.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-011

**Buat editor draft artikel custom**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305871371)

**Task ID:** RB-011
**Jenis:** task
**Fase:** Editorial dan media
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-006, RB-009, RB-010

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Form/API menyimpan judul, slug, excerpt, kategori, penulis publik, rich text dan sumber tanpa menerbitkan.
- [ ] createdBy/owner ditetapkan server; akses owner/assignee, kategori Admin dan slug unik ditegakkan.
- [ ] Hanya Admin dapat menghapus draft yang belum pernah terbit dan tidak dirujuk; Media ditolak dan audit tetap dipertahankan.

### Verifikasi

Dua Media, draft milik orang lain, ID ditebak, spoofing field, rich text berbahaya dan slug duplikat.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-012

**Terima upload gambar dan PDF privat**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305871499)

**Task ID:** RB-012
**Jenis:** task
**Fase:** Editorial dan media
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-008, RB-011

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Validasi JPEG/PNG/WebP maksimum 5 MiB/25 MP dan PDF 15 MiB dengan MIME/signature/decode serta nama internal aman.
- [ ] File awal privat; file palsu, oversized, PDF aktif dan kegagalan upload tidak meninggalkan file publik/yatim.

### Verifikasi

Upload valid/palsu/oversized, nama path berbahaya, PDF aktif dan cleanup kegagalan.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-013

**Lindungi akses file asli dan turunan**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305871962)

**Task ID:** RB-013
**Jenis:** task
**Fase:** Editorial dan media
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-012

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Original/thumbnail/transformasi/PDF melewati pemeriksaan izin yang sama, termasuk HEAD/range/cache.
- [ ] Hanya owner/assignee/Admin berizin membaca media privat; direktori statis dan optimizer tidak menjadi bypass.

### Verifikasi

Probe byte/header sebagai anonim, dua Media dan Admin; periksa original/derivative/PDF.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-014

**Bangun media library dan pemilih aset**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305872097)

**Task ID:** RB-014
**Jenis:** task
**Fase:** Editorial dan media
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-010, RB-012, RB-013

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Daftar/search/picker hanya memuat aset yang boleh diakses pengguna, dengan alt/caption sesuai izin.
- [ ] Referensi ID aset privat milik pengguna lain ditolak server tanpa membocorkan metadata.

### Verifikasi

Alur picker dan request ID palsu; alt informatif, filter dan pagination media.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-015

**Ajukan dan tarik pengajuan konten**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305872223)

**Task ID:** RB-015
**Jenis:** task
**Fase:** Editorial dan media
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-011, RB-014

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Submit mengikat revisi dan manifest aset tertentu serta mengunci isi in_review.
- [ ] Owner/assignee dapat submit/withdraw; versi dibatalkan/kedaluwarsa dan aset tanpa izin ditolak.

### Verifikasi

Submit, edit terkunci, withdraw, submit ulang dan perubahan aset sebelum keputusan.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-016

**Minta revisi dengan catatan Admin**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305872325)

**Task ID:** RB-016
**Jenis:** task
**Fase:** Editorial dan media
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-015

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Hanya Admin mengembalikan konten dengan catatan revisi wajib; editor berizin dapat memperbaiki dan submit ulang.
- [ ] Reviewer/decision tidak dapat dipalsukan dan catatan privat tidak dapat diakses publik/Media lain.

### Verifikasi

Admin tanpa catatan, forged decision, akses audit silang dan siklus revisi.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-017

**Terbitkan snapshot yang disetujui secara atomik**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305872867)

**Task ID:** RB-017
**Jenis:** task
**Fase:** Editorial dan media
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-015, RB-016, RB-013

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Admin hanya menyetujui versi pengajuan yang masih cocok; snapshot, izin aset dan audit konsisten dalam satu operasi.
- [ ] Konflik keputusan dan kegagalan DB/storage/audit tidak menghasilkan publikasi parsial.

### Verifikasi

Publish sukses, stale version, dua keputusan paralel dan fault injection rollback.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-018

**Bangun pembacaan publik approved-only**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=305872967)

**Task ID:** RB-018
**Jenis:** task
**Fase:** Editorial dan media
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-017

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] DTO/list/detail/count/relasi/metadata hanya memuat snapshot terbit melalui field allowlist.
- [ ] Draft, audit, identitas akun dan data privat tidak bocor; detail tanpa publikasi memberi HTTP 404.

### Verifikasi

Request anonim, nested relation, count/search, ID ditebak dan metadata draft.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-019

**Revisi konten terbit tanpa mengubah publik**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306043663)

**Task ID:** RB-019
**Jenis:** task
**Fase:** Editorial dan media
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-017, RB-018

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Maksimum satu revisi kerja aktif; judul/isi/slug/aset/metadata publik tetap sampai approval revisi.
- [ ] Slug terkunci setelah publikasi pertama; konflik edit/publish menghasilkan penolakan yang jelas.

### Verifikasi

Bandingkan sebelum/saat/setelah revisi dan dua editor bersamaan.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-020

**Tarik publikasi dan bersihkan representasinya**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306044874)

**Task ID:** RB-020
**Jenis:** task
**Fase:** Editorial dan media
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-019

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Admin menarik dengan alasan; daftar/detail/search/count/metadata/cache tidak lagi menyajikan konten.
- [ ] Review tertunda dibatalkan; relasi wajib menghalangi penarikan dan relasi opsional memiliki fallback.

### Verifikasi

Cache hangat, URL langsung, relasi wajib/opsional dan penerbitan ulang lewat pengajuan baru.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-021

**Kelola media yang digunakan bersama**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306044953)

**Task ID:** RB-021
**Jenis:** task
**Fase:** Editorial dan media
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-017, RB-020

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Aset tetap publik selama ada referensi publik sah; referensi terakhir hilang menutup asli dan turunan.
- [ ] Byte approved immutable; mengganti file membuat aset baru dan mengikuti review.

### Verifikasi

Dua konten berbagi gambar/PDF, last-reference removal dan pergantian file.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-022

**Sediakan revoke dan hapus media aman**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306045035)

**Task ID:** RB-022
**Jenis:** task
**Fase:** Editorial dan media
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-021

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Admin dapat mencabut aset darurat dengan fallback serta daftar konten terdampak.
- [ ] Hapus ditolak selama ada referensi konten/revisi/config; tindakan sah diaudit.

### Verifikasi

Revoke shared asset, URL langsung sesudah revoke, hapus saat dirujuk/tidak dirujuk.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-023

**Bangun antrean review dan preview privat**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306045180)

**Task ID:** RB-023
**Jenis:** task
**Fase:** Dashboard admin
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-010, RB-016, RB-019, RB-022

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Admin/Media melihat antrean dan riwayat yang sesuai izin dengan revisi/aset/catatan tepat.
- [ ] Preview memerlukan sesi dan tidak masuk sitemap, metadata publik atau indeks pencarian.

### Verifikasi

Admin/owner/assignee/Media lain/anonim dari antrean sampai keputusan.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-024

**Kelola Site Settings melalui dashboard custom**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306045281)

**Task ID:** RB-024
**Jenis:** task
**Fase:** Dashboard admin
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-009, RB-010, RB-014

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Admin mengelola identitas, logo/favicon, navigasi, footer, kontak dan SEO default dengan validasi serta audit.
- [ ] Kontak dan aset sah berasal dari satu sumber; isi halaman editorial tidak diduplikasi di konfigurasi global.

### Verifikasi

Simpan konfigurasi, spoofing Media, URL invalid dan konsistensi sumber publik.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-060

**Bangun header, navigasi dan footer publik baru**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306050894)

**Task ID:** RB-060
**Jenis:** task
**Fase:** Modul publik dan admin
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-005, RB-024

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Header/navigasi desktop/mobile, skip link dan footer mengikuti desain baru serta satu sumber Site Settings.
- [ ] Semua tujuan navigasi valid; menu mendukung keyboard/Escape/fokus kembali dan bekerja pada 320 px serta zoom 200%.

### Verifikasi

Inspeksi shell publik desktop/mobile, skip link, seluruh tautan, fokus dan konfigurasi kontak.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD §6/§10; FR-10; AC-19/21; keputusan rebuild 15 November 2026.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-025

**Bangun daftar dan detail artikel dengan UI baru**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306045513)

**Task ID:** RB-025
**Jenis:** task
**Fase:** Modul publik dan admin
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-005, RB-018, RB-060

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Search judul/excerpt, kategori dan pagination dapat digabung serta menangani parameter/hasil kosong sesuai PRD.
- [ ] Detail menampilkan penulis publik, tanggal, sumber, rich text aman dan media snapshot disetujui.

### Verifikasi

Search/filter/pagination GET, detail mobile, XSS, revisi draft dan file dicabut.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-026

**Checkpoint alur artikel lengkap tanpa Payload**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306045607)

**Task ID:** RB-026
**Jenis:** task
**Fase:** Checkpoint
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-019, RB-020, RB-021, RB-022, RB-023, RB-024, RB-025

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Dashboard/API/publik membuktikan draft → review → revisi → publish → revisi terbit → withdraw dengan dua role.
- [ ] Privasi media, audit append-only, konflik dan rollback teruji sebelum pola diperluas ke modul lain.

### Verifikasi

Suite unit/integration/browser terarah dan demo lengkap; simpan bukti aktual.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-027

**Bangun Pages untuk beranda dan Tentang**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306045874)

**Task ID:** RB-027
**Jenis:** task
**Fase:** Modul publik dan admin
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-026

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

**Catatan implementasi:** Slice mencakup model/migrasi baru untuk modul terkait, validasi/API, form dashboard dan publik; tidak memakai schema/model Payload lama. Pecah ID turunan bila lingkup >5 file/satu sesi.

### Kriteria selesai

- [ ] Form admin Pages mengikuti assignment, review dan snapshot untuk identitas halaman tetap.
- [ ] Beranda/Tentang menampilkan profil, sejarah, visi/misi/program dari versi disetujui dengan UI baru.

### Verifikasi

Create/edit/review Pages, revisi terbit, mobile dan kondisi tanpa konten.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-028

**Kelola periode organisasi dan arsip**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306047101)

**Task ID:** RB-028
**Jenis:** task
**Fase:** Modul publik dan admin
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-026

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

**Catatan implementasi:** Slice mencakup model/migrasi baru untuk modul terkait, validasi/API, form dashboard dan publik; tidak memakai schema/model Payload lama. Pecah ID turunan bila lingkup >5 file/satu sesi.

### Kriteria selesai

- [ ] Form/API periode memvalidasi kalender dan mengikuti workflow editorial baru.
- [ ] Periode selesai tetap tersedia sebagai arsip tanpa menghapus pengurus atau menyamakan past dengan withdrawal.

### Verifikasi

Dua periode, kalender invalid, review dan arsip publik.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-029

**Bangun pengelolaan delapan divisi**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306047174)

**Task ID:** RB-029
**Jenis:** task
**Fase:** Modul publik dan admin
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-028

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

**Catatan implementasi:** Slice mencakup model/migrasi baru untuk modul terkait, validasi/API, form dashboard dan publik; tidak memakai schema/model Payload lama. Pecah ID turunan bila lingkup >5 file/satu sesi.

### Kriteria selesai

- [ ] Admin/editor berizin mengelola nama, deskripsi, urutan dan program delapan divisi melalui review.
- [ ] Daftar/detail divisi ber-UI baru hanya membaca versi terbit serta relasi publik sah.

### Verifikasi

Dua role, delapan divisi, draft/private relation, urutan dan program kerja.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-030

**Bangun pengelolaan dan struktur pengurus**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306047263)

**Task ID:** RB-030
**Jenis:** task
**Fase:** Modul publik dan admin
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-028, RB-029

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

**Catatan implementasi:** Slice mencakup model/migrasi baru untuk modul terkait, validasi/API, form dashboard dan publik; tidak memakai schema/model Payload lama. Pecah ID turunan bila lingkup >5 file/satu sesi.

### Kriteria selesai

- [ ] Form/API pengurus memvalidasi jabatan, periode wajib, divisi opsional, foto dan urutan sesuai izin.
- [ ] Struktur publik menyediakan pemilih periode/arsip serta jabatan lintas divisi tanpa menimpa sejarah.

### Verifikasi

Dua periode, jabatan tanpa divisi, foto privat/fallback dan revisi relasi.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-031

**Batasi satu periode organisasi aktif**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306047344)

**Task ID:** RB-031
**Jenis:** task
**Fase:** Modul publik dan admin
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-030

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

**Catatan implementasi:** Slice mencakup model/migrasi baru untuk modul terkait, validasi/API, form dashboard dan publik; tidak memakai schema/model Payload lama. Pecah ID turunan bila lingkup >5 file/satu sesi.

### Kriteria selesai

- [ ] Aktivasi operasional Admin hanya menunjuk periode terbit dan terpisah dari review isi.
- [ ] Maksimum satu periode aktif tahan request paralel; penarikan sah mengosongkan pilihan tanpa menghapus riwayat.

### Verifikasi

Aktivasi draft/paralel, switch periode dan withdrawal dengan/tanpa dependensi.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-032

**Bangun editor dan workflow riset custom**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306047524)

**Task ID:** RB-032
**Jenis:** task
**Fase:** Modul publik dan admin
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-026

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

**Catatan implementasi:** Slice mencakup model/migrasi baru untuk modul terkait, validasi/API, form dashboard dan publik; tidak memakai schema/model Payload lama. Pecah ID turunan bila lingkup >5 file/satu sesi.

### Kriteria selesai

- [ ] Form/API riset mencakup kategori, tim publik, tanggal analisis date-only, sumber, sampul/PDF dan review.
- [ ] Disclaimer dasar wajib, tidak dapat dihapus editor; PDF terikat versi approved.

### Verifikasi

Riset tanpa tanggal/sumber, perubahan PDF, review dan date-only lintas zona waktu.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-033

**Bangun katalog dan detail riset baru**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306047610)

**Task ID:** RB-033
**Jenis:** task
**Fase:** Modul publik dan admin
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-032, RB-025

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

**Catatan implementasi:** Slice mencakup model/migrasi baru untuk modul terkait, validasi/API, form dashboard dan publik; tidak memakai schema/model Payload lama. Pecah ID turunan bila lingkup >5 file/satu sesi.

### Kriteria selesai

- [ ] Katalog mendukung search/kategori/pagination; detail membedakan tanggal analisis dari publikasi.
- [ ] Sumber/disclaimer selalu tampil; unduhan hanya PDF approved dengan fallback jika dicabut.

### Verifikasi

Kombinasi query, mobile, revisi draft, disclaimer, tanggal dan direct PDF.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-034

**Bangun editor kegiatan dan kebijakan waktu**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306047716)

**Task ID:** RB-034
**Jenis:** task
**Fase:** Modul publik dan admin
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-026

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

**Catatan implementasi:** Slice mencakup model/migrasi baru untuk modul terkait, validasi/API, form dashboard dan publik; tidak memakai schema/model Payload lama. Pecah ID turunan bila lingkup >5 file/satu sesi.

### Kriteria selesai

- [ ] Form/API event memvalidasi mulai/selesai WIB/UTC, lokasi/kanal, pembatalan dan jendela pendaftaran.
- [ ] CTA memerlukan URL terkonfirmasi; perubahan isi/status editorial mengikuti review.

### Verifikasi

Batas waktu, end<=start, cancelled, URL berbahaya dan spoofing konfirmasi.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-035

**Bangun agenda dan detail kegiatan baru**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306047797)

**Task ID:** RB-035
**Jenis:** task
**Fase:** Modul publik dan admin
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-034, RB-005

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

**Catatan implementasi:** Slice mencakup model/migrasi baru untuk modul terkait, validasi/API, form dashboard dan publik; tidak memakai schema/model Payload lama. Pecah ID turunan bila lingkup >5 file/satu sesi.

### Kriteria selesai

- [ ] Daftar/detail membedakan upcoming/ongoing/completed/cancelled dan menjaga arsip terbit.
- [ ] CTA direvalidasi terhadap waktu server; deadline, cache hangat dan kegagalan refresh tidak menyisakan tautan aktif.

### Verifikasi

Browser sebelum/saat/sesudah deadline, halaman terbuka/background, cache dan mobile.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-036

**Bangun pengelolaan kampanye rekrutmen**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306047873)

**Task ID:** RB-036
**Jenis:** task
**Fase:** Modul publik dan admin
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-026, RB-028, RB-029

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

**Catatan implementasi:** Slice mencakup model/migrasi baru untuk modul terkait, validasi/API, form dashboard dan publik; tidak memakai schema/model Payload lama. Pecah ID turunan bila lingkup >5 file/satu sesi.

### Kriteria selesai

- [ ] Form/API kampanye mencakup periode, posisi/divisi, syarat, tahapan, jadwal dan URL melalui review.
- [ ] Publikasi isi tidak otomatis mengaktifkan kampanye; relasi wajib harus terbit.

### Verifikasi

Nested posisi, jadwal WIB, relasi privat dan dua role submit/revisi.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-037

**Batasi satu kampanye rekrutmen enabled**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306048200)

**Task ID:** RB-037
**Jenis:** task
**Fase:** Modul publik dan admin
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-036

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

**Catatan implementasi:** Slice mencakup model/migrasi baru untuk modul terkait, validasi/API, form dashboard dan publik; tidak memakai schema/model Payload lama. Pecah ID turunan bila lingkup >5 file/satu sesi.

### Kriteria selesai

- [ ] Hanya Admin mengaktifkan kampanye terbit dan maksimum satu enabled termasuk mendatang/berakhir.
- [ ] Aktivasi paralel ditolak secara konsisten; withdrawal menonaktifkan tanpa menghapus riwayat.

### Verifikasi

Draft, dua Admin paralel, rentang tumpang tindih dan penarikan aktif.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-038

**Bangun halaman rekrutmen dan riwayat baru**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306048283)

**Task ID:** RB-038
**Jenis:** task
**Fase:** Modul publik dan admin
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-037, RB-035

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

**Catatan implementasi:** Slice mencakup model/migrasi baru untuk modul terkait, validasi/API, form dashboard dan publik; tidak memakai schema/model Payload lama. Pecah ID turunan bila lingkup >5 file/satu sesi.

### Kriteria selesai

- [ ] Posisi, syarat, tahapan, periode dan riwayat terbaca dengan status belum buka/terbuka/tutup.
- [ ] CTA hanya untuk snapshot terbit, enabled, rentang waktu sah dan URL terkonfirmasi; waktu tutup menghilangkan tombol.

### Verifikasi

Batas buka inklusif/tutup eksklusif, nonaktif, cache hangat, revisi draft dan mobile.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-039

**Bangun galeri dari dashboard sampai publik**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306048374)

**Task ID:** RB-039
**Jenis:** task
**Fase:** Modul publik dan admin
**Status awal:** Backlog
**Prioritas:** P1
**Ukuran:** M
**Dependensi:** RB-026, RB-034

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

**Catatan implementasi:** Slice mencakup model/migrasi baru untuk modul terkait, validasi/API, form dashboard dan publik; tidak memakai schema/model Payload lama. Pecah ID turunan bila lingkup >5 file/satu sesi.

### Kriteria selesai

- [ ] Form/API album mengelola urutan foto, alt/caption, tanggal, event opsional dan tautan video melalui review.
- [ ] Daftar/detail ber-UI baru hanya memuat aset approved dengan fallback revoke; video berupa tautan aman.

### Verifikasi

Album kosong/multi-foto, aset lintas owner, event ditarik, revisi caption dan keyboard.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-040

**Bangun partnership dengan izin logo Admin**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306048463)

**Task ID:** RB-040
**Jenis:** task
**Fase:** Modul publik dan admin
**Status awal:** Backlog
**Prioritas:** P1
**Ukuran:** M
**Dependensi:** RB-026, RB-024

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

**Catatan implementasi:** Slice mencakup model/migrasi baru untuk modul terkait, validasi/API, form dashboard dan publik; tidak memakai schema/model Payload lama. Pecah ID turunan bila lingkup >5 file/satu sesi.

### Kriteria selesai

- [ ] Form/API mitra mengikuti review; izin penggunaan logo hanya Admin dan bukti izin tetap privat.
- [ ] Publik/homepage hanya memuat mitra terbit; logo tanpa izin tidak tampil walau file publik di konteks lain.

### Verifikasi

Forge flag izin, mitra dengan/tanpa logo, bukti privat dan penarikan izin.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-041

**Bangun prestasi dan filter tahun**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306048554)

**Task ID:** RB-041
**Jenis:** task
**Fase:** Modul publik dan admin
**Status awal:** Backlog
**Prioritas:** P1
**Ukuran:** M
**Dependensi:** RB-026

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

**Catatan implementasi:** Slice mencakup model/migrasi baru untuk modul terkait, validasi/API, form dashboard dan publik; tidak memakai schema/model Payload lama. Pecah ID turunan bila lingkup >5 file/satu sesi.

### Kriteria selesai

- [ ] Form/API prestasi mencakup judul, kategori, tanggal, penerima dan dokumentasi melalui review.
- [ ] Halaman baru membaca versi terbit dengan filter tahun/date-only dan label contoh yang jelas.

### Verifikasi

Dua tahun, batas tahun, hasil kosong, revisi/withdrawal dan media.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-042

**Bangun portal publikasi baru**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306048912)

**Task ID:** RB-042
**Jenis:** task
**Fase:** Modul publik dan admin
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Dependensi:** RB-025, RB-033

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Portal mengarahkan pembaca ke artikel/riset dengan tautan valid dan ringkasan snapshot terbit.
- [ ] Empty state dan navigasi mobile/keyboard jelas tanpa duplikasi isi manual.

### Verifikasi

Kedua jenis publikasi kosong/terisi, link tujuan dan keyboard.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-043

**Bangun halaman kontak terkonfirmasi**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306049002)

**Task ID:** RB-043
**Jenis:** task
**Fase:** Modul publik dan admin
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Dependensi:** RB-024, RB-005

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Kontak/sosial/lokasi hanya dari Site Settings terkonfirmasi dan konsisten dengan header/footer.
- [ ] Kolom kosong memiliki penanganan jelas; tidak menambah formulir kontak di luar scope.

### Verifikasi

Ubah satu kontak melalui admin, periksa semua lokasi, mailto/HTTPS dan kosong.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-044

**Lengkapi beranda dengan seluruh modul**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306049105)

**Task ID:** RB-044
**Jenis:** task
**Fase:** Modul publik dan admin
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-027, RB-031, RB-033, RB-035, RB-038, RB-039, RB-040, RB-041, RB-042, RB-043

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Beranda baru mengagregasi program, publikasi, agenda, rekrutmen, prestasi dan mitra dari data terbit dengan urutan benar.
- [ ] Izin logo, CTA waktu, label contoh dan kondisi tanpa data tetap benar setelah publish/withdraw/revoke.

### Verifikasi

Dataset kosong/lengkap, perubahan snapshot, penarikan/izin dan batas jadwal.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-045

**Lengkapi loading, error, 404 dan log aman**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306049178)

**Task ID:** RB-045
**Jenis:** task
**Fase:** QA dan kualitas
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-044, RB-023

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Website dan dashboard menyediakan state kosong/loading/error/404 dengan jalur pemulihan yang valid.
- [ ] Error tidak mengungkap secret/stack/SQL; private/withdrawn mempertahankan HTTP 404 dan request dapat dikorelasikan.

### Verifikasi

Fault injection DB/storage, recovery UI, direct private URLs dan inspeksi log.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-046

**Bangun metadata, sitemap dan aturan indeks**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306049275)

**Task ID:** RB-046
**Jenis:** task
**Fase:** QA dan kualitas
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-044

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Canonical/SEO/Open Graph/structured data mengikuti domain serta snapshot terbit dan label contoh.
- [ ] Draft/admin/preview tidak masuk sitemap/indeks; withdrawal menghapus representasi termasuk cache.

### Verifikasi

HTML/XML/robots/JSON-LD untuk publish/revisi/withdraw; staging noindex.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-047

**Siapkan seed demo rebuild yang terisolasi**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306049473)

**Task ID:** RB-047
**Jenis:** task
**Fase:** QA dan kualitas
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-044

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Seed mencakup 11 modul, delapan divisi, dua periode serta dua role dengan data contoh berlabel dan secret input aman.
- [ ] Seed ulang tidak menduplikasi atau menimpa edit; reset eksplisit hanya pada target rebuild uji.

### Verifikasi

Seed dua kali, edit satu konten, seed ulang dan restart DB/media.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-048

**Validasi konten resmi dan izin aset rilis**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306049571)

**Task ID:** RB-048
**Jenis:** task
**Fase:** Konten resmi
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Dependensi:** RB-004, RB-044

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Inventaris 11 modul mencatat sumber, pemilik validasi, status resmi/contoh, kontak/tautan dan izin foto/logo.
- [ ] Materi rilis disetujui melalui dashboard baru; kekosongan yang diterima dicatat tanpa mengklaim data contoh sebagai fakta.

### Verifikasi

Cocokkan inventaris dan snapshot rilis, date-only/disclaimer serta bukti izin privat.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-049

**Audit keamanan dan matriks izin sistem baru**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306049666)

**Task ID:** RB-049
**Jenis:** task
**Fase:** QA dan kualitas
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-045, RB-046, RB-047

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Matriks Admin/owner/assignee/Media lain/anonim mencakup seluruh modul, API, versi, file, audit, settings dan activation.
- [ ] AC terkait XSS/CSRF/sesi/upload/race/rollback lulus dan dependency aktual ditinjau; temuan memiliki tindak lanjut.

### Verifikasi

Suite unit/integration/browser baru, request langsung, fault/race dan audit dependency.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-050

**Audit responsif dan aksesibilitas publik/admin**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306049755)

**Task ID:** RB-050
**Jenis:** task
**Fase:** QA dan kualitas
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-045, RB-047

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Halaman diperiksa pada 320/375/768/1024/1440 px tanpa horizontal scroll halaman di 320 px.
- [ ] Keyboard/fokus/heading/landmark/kontras/label/error/alt/zoom 200%/reduced motion dicatat menuju WCAG 2.2 AA.

### Verifikasi

Audit otomatis ditambah inspeksi manual dan screenshot seluruh keluarga halaman.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-051

**Ukur performa UI baru sesuai PRD**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306049832)

**Task ID:** RB-051
**Jenis:** task
**Fase:** QA dan kualitas
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-046, RB-049, RB-050

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Production build dan dataset tetap dipakai; browser/Lighthouse/kondisi mesin tercatat.
- [ ] Warm-up lalu tiga pengukuran mobile memberi median Performance >=85 pada /, daftar artikel, satu detail artikel dan /kegiatan.

### Verifikasi

Benchmark ulang dan perbaiki hanya hambatan terukur tanpa menurunkan isi/privasi/aksesibilitas.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-052

**Buktikan clean start, restart dan restore lokal**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306050045)

**Task ID:** RB-052
**Jenis:** task
**Fase:** QA dan kualitas
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-047, RB-049

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Source/lockfile/env/migrasi/setup akun dapat dijalankan dari lingkungan bersih; DB/media bertahan setelah restart.
- [ ] Backup DB/media konsisten dipulihkan ke target terpisah dengan checksum, ACL audit dan privasi tetap benar.

### Verifikasi

Rehearsal instalasi/start/migrasi/seed/restart dan restore nyata tanpa menimpa data sumber.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-053

**UAT dan serah terima demo rebuild**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306050138)

**Task ID:** RB-053
**Jenis:** task
**Fase:** Penerimaan
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Dependensi:** RB-048, RB-049, RB-050, RB-051, RB-052

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Pemilik meninjau 11 modul dan dashboard Admin/Media dengan bukti FR-01–11, AC-01–29 serta DoD baru.
- [ ] Penerimaan/revisi dicatat terhadap commit yang ditinjau; panduan admin/setup dan keterbatasan aktual tersedia.

### Verifikasi

Naskah dua role/pengunjung, audit traceability, catatan keputusan dan temuan UAT.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-054

**Tetapkan hosting, domain dan staging rebuild**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306050199)

**Task ID:** RB-054
**Jenis:** task
**Fase:** Produksi
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-053

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Target runtime/DB/media persisten, domain, biaya dan operator disepakati; staging memakai data/secret terpisah dan noindex.
- [ ] Prosedur build/start/healthcheck dan strategi pindah data atau mulai kosong direhearsal sesuai keputusan RB-002.

### Verifikasi

Review infrastruktur dan deployment uji pada target yang diizinkan.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-055

**Siapkan keamanan dan recovery akun target**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306050305)

**Task ID:** RB-055
**Jenis:** task
**Fase:** Produksi
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-054

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] HTTPS/origin/cookie/secret/storage dan akses operator sesuai target; secret tetap privat.
- [ ] Prosedur pemulihan akun serta akun bernama diverifikasi; hardening/dependency rilis mempunyai hasil terbaru.

### Verifikasi

Probe TLS/auth/origin/upload, revoke sesi dan simulasi recovery pada staging.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-056

**Buktikan backup, restore dan rollback target**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306050426)

**Task ID:** RB-056
**Jenis:** task
**Fase:** Produksi
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-054, RB-055

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Frekuensi/retensi/off-site/RPO/RTO disepakati; database/media dibackup secara konsisten.
- [ ] Restore pada target baru dan rollback rilis mempertahankan versi, audit, ACL dan checksum dalam hasil terukur.

### Verifikasi

Latihan nyata restore/rollback di target terpisah; catat durasi dan hasil.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-057

**Siapkan monitoring dan panduan operasi**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306050601)

**Task ID:** RB-057
**Jenis:** task
**Fase:** Produksi
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-054, RB-056

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Operator dapat memantau aplikasi/DB/storage/backup/TLS dengan log aman dan jalur notifikasi yang disepakati.
- [ ] Runbook gangguan, pemeliharaan dan penanggung jawab akun/domain/infrastruktur siap diserahkan.

### Verifikasi

Simulasi kegagalan aman dan walkthrough operasi bersama pengelola.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-058

**Tinjau kesiapan dan otorisasi rilis rebuild**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306050683)

**Task ID:** RB-058
**Jenis:** task
**Fase:** Penerimaan
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** S
**Dependensi:** RB-053, RB-055, RB-056, RB-057

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] QA, konten/izin, keamanan, backup/restore, recovery dan operator mempunyai bukti untuk commit/domain rilis.
- [ ] Pihak berwenang memberi/menolak otorisasi deployment eksplisit dengan jendela rilis serta kriteria rollback.

### Verifikasi

Review readiness konkret; pembuatan kartu bukan otorisasi deployment.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)

### RB-059

**Deploy rebuild dan verifikasi pascarilis**

[Buka item GitHub](https://github.com/users/silkiy/projects/5/views/6?pane=issue&itemId=306050772)

**Task ID:** RB-059
**Jenis:** task
**Fase:** Produksi
**Status awal:** Backlog
**Prioritas:** P0
**Ukuran:** M
**Dependensi:** RB-058

Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.

### Kriteria selesai

- [ ] Eksekusi hanya setelah otorisasi rilis; backup/migrasi/konfigurasi/traffic mengikuti runbook dan rollback bila gagal.
- [ ] Smoke publik/admin/media/CTA/SEO/privasi dan monitoring di domain final lulus; versi serta serah terima operasi dicatat.

### Verifikasi

Deployment yang diizinkan, smoke domain final dan walkthrough pengelola.

### Bukti dan hasil

Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.

**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.

**Sumber keputusan:** PRD v1.1; keputusan pemilik 15 November 2026: rebuild dari awal, Next.js tetap, dashboard custom tanpa Payload, dua role dan workflow tetap.
[Kebutuhan fungsional dan penerimaan PRD](https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md)
