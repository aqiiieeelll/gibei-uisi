# Kanban seluruh proyek GIBEI UISI

**Arah aktif: rebuild v2 dari nol.** Pemilik mempertahankan Next.js dan mengganti Payload dengan dashboard admin custom. [Rencana rebuild v2](rebuild-v2/README.md) menjadi antrean baru; paket 154 kartu ini dipertahankan sebagai histori v1/redesign dan tidak diteruskan otomatis.

Disiapkan 15 November 2026 untuk [GitHub Project #5](https://github.com/users/silkiy/projects/5/views/1). Acuan: [PRD v1.1](../../docs/PRD-v1.1.md), [backlog implementasi](../todo.md), [audit MVP](../../docs/qa/mvp-acceptance.md), dan [serah terima](../../docs/handover.md).

Paket berisi **154 kartu**: **86 Done historis** dan **68 pekerjaan/checkpoint lanjutan**. Seluruh fase fondasi, CMS/backend, editorial/media, sebelas modul publik, UI, QA, konten, operasi dan penerimaan tercakup.

**Status publikasi: sebagian terverifikasi.** 34 dari 154 kartu memiliki mapping item dan body terverifikasi (34 mapping item tercatat). Konektor GitHub tetap memakai DinarPutra1408 dengan akses baca; browser telah diautentikasi sebagai silkiy dan digunakan untuk mengedit Project. Catatan hambatan terakhir: GitHub gagal diakses dengan ERR_NAME_NOT_RESOLVED di browser dan pemeriksaan DNS Windows. Pengisian dihentikan atas permintaan pemilik; tidak ada percobaan penulisan lanjutan.

**Progres disimpan atas permintaan pemilik.** Pengisian berikutnya menunggu permintaan melanjutkan. 120 kartu belum terverifikasi lengkap. T024, CP-08 dan T021 sempat dicoba; kartu judul mungkin sudah ada. Cocokkan Task ID dengan board dan periksa body sebelum membuat ulang. Screenshot terakhir menampilkan 32 item di Done, termasuk kemungkinan tiga judul yang belum diverifikasi; angka ini bukan bukti 32 kartu lengkap.

## Kolom dan field

`Backlog → Ready → In progress → In review → Done` mengikuti kolom Project yang teramati.

| Status | Aturan |
|---|---|
| Backlog | Belum siap; dependensi, keputusan atau aset wajib masih terbuka. |
| Ready | Hasil dan kriteria jelas; seluruh dependensi sudah Done. |
| In progress | Benar-benar sedang dikerjakan. |
| In review | Hasil tersedia dan menunggu pemeriksaan/keputusan. |
| Done | Kriteria dan verifikasi terbukti; hasil serta lingkungan dicatat. |

Field yang disarankan: **Task ID**, **Workstream**, **Phase**, **Priority**, **Size**. Dependensi, acuan PRD, kriteria, verifikasi dan bukti berada pada body kartu. Assignee/tenggat tidak dikarang. Hambatan dicatat di body tanpa menambah kolom status.

P0/P1 pada PRD tetap sama-sama wajib untuk MVP. Prioritas kartu baru menunjukkan urutan pekerjaan lanjutan; prioritas historis belum diisi agar tidak mengarang pemetaan baru.

## Ringkasan seluruh proyek

| Kelompok | Kartu | Status awal |
|---|---:|---|
| Implementasi MVP | 63 | Done historis localhost |
| Checkpoint MVP | 23 | Done historis localhost |
| Redesign UI | 32 | Lihat kartu |
| Konten resmi | 12 | Lihat kartu |
| Produksi | 12 | Lihat kartu |
| Penerimaan | 6 | Lihat kartu |
| Checkpoint lanjutan | 6 | Lihat kartu |

Riwayat T001–T063 serta CP-01–CP-23 menyimpan body dan bukti aslinya, termasuk subtugas T004–T009/T052 serta koreksi QA. Status tersebut mengacu konsolidasi 2 November 2026, bukan pengujian ulang saat penyusunan Kanban. Penerimaan pemilik yang masih terbuka tercatat pada REL-001.

## Urutan dan pekerjaan paralel

1. Mulai UI-001/UI-003, CT-001 dan OPS-001. REL-001 menunggu peninjauan pemilik terhadap baseline.
2. UI-002–UI-005 menetapkan arah desain; UI-006–UI-009 menyiapkan komponen dan navigasi.
3. UI-010–UI-027 mengganti seluruh kelompok halaman. Modul independen dapat dikerjakan paralel setelah fondasi stabil; penyesuaian shared CSS/komponen dikoordinasikan.
4. CT-002–CT-012 memvalidasi konten dan aset resmi. Keputusan empty state diperbolehkan secara eksplisit tanpa mengklaim contoh sebagai fakta.
5. UI-028–UI-032 menjalankan audit dan penerimaan visual. OPS-002–OPS-011 menyiapkan keamanan, staging, migrasi, backup/restore, recovery serta operasi sesuai dependensi.
6. REL-002/REL-003 memeriksa seluruh produk dan UAT. REL-004 menilai kesiapan serta keputusan rilis; OPS-012 baru dapat dilaksanakan setelah otorisasi eksplisit.
7. REL-005/REL-006 memeriksa pascarilis dan menyerahkan operasi.

Dependensi persis pada manifest menjadi acuan. Enam GATE tambahan memeriksa desain, shell, organisasi, publikasi, CTA waktu dan kelengkapan halaman. REL-002/REL-004 menjadi checkpoint gabungan konten serta kesiapan produksi.

## Ketentuan verifikasi

- UI: 320/375/768/1024/1440 px, tanpa horizontal scroll halaman pada 320 px; keyboard, fokus, zoom 200%, reduced motion dan target WCAG 2.2 AA.
- Performa: build production, dataset tetap, mobile default Lighthouse, warm-up dan tiga pengukuran; median minimal 85 untuk beranda, daftar artikel, satu detail artikel dan kegiatan.
- Regresi: FR-01–FR-11, AC-01–AC-29, workflow Admin/Media, versi terbit, draft/media privat, withdrawal, SEO, izin logo, disclaimer serta CTA waktu.
- Dokumen dan keputusan: tinjau sumber/hasil aktual; tidak perlu build aplikasi untuk perubahan dokumen saja.
- Produksi: bukti lingkungan target, restore nyata, operator dan keputusan rilis dicatat tersendiri. Kartu rencana bukan izin eksekusi.

## Indeks kartu

| ID | Task | Status awal | Dependensi |
|---|---|---|---|
| T001 | [Catat keputusan baseline PRD](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305835186) | Done (historis) | — |
| T002 | [Verifikasi kompatibilitas stack](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305840931) | Done (historis) | — |
| T003 | [Rancang kontrak versi dan akses file](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305841150) | Done (historis) | T002 |
| CP-01 | [Checkpoint setelah T003](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305841508) | Done (historis) | T003 |
| T004 | [Buat kerangka Next.js dan tooling](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305841569) | Done (historis) | T001, T002, T003 |
| T005 | [Hubungkan PostgreSQL Supabase dan migration awal](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305841629) | Done (historis) | T004 |
| T006 | [Aktifkan Payload dan login CMS](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305841933) | Done (historis) | T004, T005 |
| CP-02 | [Checkpoint setelah T006](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305842357) | Done (historis) | T006 |
| T007 | [Batasi pengelolaan akun dan sesi](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305843029) | Done (historis) | T006 |
| T008 | [Siapkan harness uji izin dan browser](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305843120) | Done (historis) | T005, T006 |
| T009 | [Buat fondasi visual dan layout publik](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305843189) | Done (historis) | T004 |
| CP-03 | [Checkpoint setelah T009](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305846041) | Done (historis) | T009 |
| T010 | [Buat draft artikel dengan ownership](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305846446) | Done (historis) | T007, T008 |
| T011 | [Terima upload privat yang tervalidasi](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305846444) | Done (historis) | T008, T010 |
| T012 | [Lindungi pembacaan file dan turunannya](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305846440) | Done (historis) | T011 |
| CP-04 | [Checkpoint setelah T012](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305846550) | Done (historis) | T012 |
| T013 | [Ajukan dan tarik pengajuan artikel](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305846559) | Done (historis) | T010, T011, T012 |
| T014 | [Kembalikan artikel untuk revisi](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305846558) | Done (historis) | T013 |
| T015 | [Terbitkan versi artikel yang disetujui](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305847418) | Done (historis) | T013, T014 |
| CP-05 | [Checkpoint setelah T015](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305846663) | Done (historis) | T015 |
| T016 | [Baca hanya versi publik artikel](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305847412) | Done (historis) | T015 |
| T017 | [Revisi artikel tanpa mengubah versi publik](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305847516) | Done (historis) | T015, T016 |
| T018 | [Tarik publikasi dan bersihkan cache](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305847342) | Done (historis) | T016, T017 |
| CP-06 | [Checkpoint setelah T018](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305847513) | Done (historis) | T018 |
| T019 | [Kelola akses aset yang digunakan ulang](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305848081) | Done (historis) | T012, T015, T018 |
| T020 | [Amankan hapus dan pencabutan darurat](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305847439) | Done (historis) | T019 |
| T021 | [Tolak konflik review dan kunci audit](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L480) | Done (historis) | T014, T015, T017, T018 |
| CP-07 | [Checkpoint setelah T021](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305848157) | Done (historis) | T021 |
| T022 | [Tampilkan antrean review dan preview privat](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305847538) | Done (historis) | T013, T014, T015, T017, T018, T020, T021 |
| T023 | [Buat daftar artikel yang bisa dicari](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L528) | Done (historis) | T009, T016 |
| T024 | [Buat detail artikel dan renderer aman](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L549) | Done (historis) | T009, T012, T016, T023 |
| CP-08 | [Checkpoint setelah T024](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L570) | Done (historis) | T024 |
| T025 | [Buktikan alur artikel lengkap](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L576) | Done (historis) | T007, T008, T019, T020, T021, T022, T023, T024 |
| CP-09 | [Checkpoint setelah T025](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L597) | Done (historis) | T025 |
| T026 | [Buat konten Pages dengan review](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L607) | Done (historis) | T025 |
| T027 | [Kelola Site Settings oleh Admin](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L630) | Done (historis) | T020, T025, T026 |
| CP-10 | [Checkpoint setelah T027](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L651) | Done (historis) | T027 |
| T028 | [Tampilkan Tentang dan layout dari CMS](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L659) | Done (historis) | T009, T026, T027 |
| T029 | [Kelola periode organisasi melalui review](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L680) | Done (historis) | T025 |
| T030 | [Publikasikan delapan profil divisi](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L703) | Done (historis) | T009, T025, T029 |
| CP-11 | [Checkpoint setelah T030](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L726) | Done (historis) | T030 |
| T031 | [Tampilkan pengurus berdasarkan periode](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305846046) | Done (historis) | T009, T029, T030 |
| T032 | [Pilih satu periode aktif secara aman](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L757) | Done (historis) | T029, T031 |
| T033 | [Kelola riset dengan disclaimer wajib](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L778) | Done (historis) | T025 |
| CP-12 | [Checkpoint setelah T033](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L801) | Done (historis) | T033 |
| T034 | [Tampilkan daftar dan detail riset](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L809) | Done (historis) | T009, T012, T023, T024, T033 |
| T035 | [Kelola event dan aturan waktunya](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L830) | Done (historis) | T025 |
| T036 | [Tampilkan daftar dan detail kegiatan](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L853) | Done (historis) | T009, T035 |
| CP-13 | [Checkpoint setelah T036](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L874) | Done (historis) | T036 |
| T037 | [Kelola kampanye dan posisi rekrutmen](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L882) | Done (historis) | T029, T030, T032, T025 |
| T038 | [Batasi aktivasi satu kampanye](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L905) | Done (historis) | T037 |
| T039 | [Tampilkan rekrutmen dan CTA tepat waktu](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L926) | Done (historis) | T009, T037, T038 |
| CP-14 | [Checkpoint setelah T039](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L947) | Done (historis) | T039 |
| T040 | [Tampilkan kontak terkonfirmasi](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L955) | Done (historis) | T027, T028 |
| T041 | [Buat pintu masuk publikasi](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L976) | Done (historis) | T023, T024, T034 |
| T042 | [Hubungkan homepage dengan modul P0](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L996) | Done (historis) | T026, T028, T030, T032, T034, T036, T039, T040, T041 |
| CP-15 | [Checkpoint setelah T042](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1019) | Done (historis) | T042 |
| T043 | [Kelola album dokumentasi privat](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1031) | Done (historis) | T025, T035 |
| T044 | [Tampilkan daftar dan detail galeri](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1052) | Done (historis) | T009, T012, T043 |
| T045 | [Kelola mitra dengan izin logo](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1073) | Done (historis) | T025 |
| CP-16 | [Checkpoint setelah T045](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1094) | Done (historis) | T045 |
| T046 | [Tampilkan partnership publik](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1100) | Done (historis) | T009, T045 |
| T047 | [Kelola dan tampilkan prestasi](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1120) | Done (historis) | T009, T025 |
| T048 | [Lengkapi homepage dengan modul P1](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1141) | Done (historis) | T042, T044, T046, T047 |
| CP-17 | [Checkpoint setelah T048](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1162) | Done (historis) | T048 |
| T049 | [Siapkan seed demo lengkap yang aman](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1172) | Done (historis) | T032, T034, T036, T039, T040, T044, T046, T047, T048 |
| T050 | [Lengkapi metadata dan canonical](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1193) | Done (historis) | T027, T034, T036, T039, T044, T046, T047, T048, T049 |
| T051 | [Buat sitemap, robots, dan structured data](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1214) | Done (historis) | T050 |
| CP-18 | [Checkpoint setelah T051](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1235) | Done (historis) | T051 |
| T052 | [Lengkapi error handling dan log aman](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1241) | Done (historis) | T025, T027, T048 |
| T053 | [Periksa sesi, login, dan input berbahaya](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1264) | Done (historis) | T007, T008, T024, T027, T048 |
| T054 | [Uji matriks izin lintas semua collection](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1285) | Done (historis) | T025, T032, T034, T036, T039, T044, T046, T047, T051, T053 |
| CP-19 | [Checkpoint setelah T054](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1306) | Done (historis) | T054 |
| T055 | [Uji batas waktu dan request bersamaan](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1314) | Done (historis) | T021, T032, T036, T038, T039, T049 |
| T056 | [Uji responsivitas dan aksesibilitas](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1335) | Done (historis) | T028, T031, T034, T036, T039, T040, T041, T044, T046, T047, T048, T049 |
| T057 | [Ukur performa sesuai kondisi PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1356) | Done (historis) | T049, T050, T051, T056 |
| CP-20 | [Checkpoint setelah T057](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1377) | Done (historis) | T057 |
| T058 | [Perbaiki hanya hambatan performa terukur](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1385) | Done (historis) | T057 |
| CP-21 | [Checkpoint setelah T058](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1406) | Done (historis) | T058 |
| T059 | [Tulis panduan setup dan buktikan clean start](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1418) | Done (historis) | T049, T053, T058 |
| T060 | [Tulis prosedur backup dan restore](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1439) | Done (historis) | T049, T059 |
| CP-22 | [Checkpoint setelah T060](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1460) | Done (historis) | T060 |
| T061 | [Tulis panduan CMS dan naskah demo](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1468) | Done (historis) | T022, T032, T038, T049, T059 |
| T062 | [Audit kelulusan MVP terhadap PRD](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1489) | Done (historis) | T051, T052, T054, T055, T056, T058, T059, T060, T061 |
| T063 | [Serahkan demo localhost yang dapat diulang](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1510) | Done (historis) | T062 |
| CP-23 | [Checkpoint setelah T063](https://github.com/silkiy/gibei-uisi/blob/ec4f8dee1fc6c5754b02b2c56fae5fde502d1494/tasks/todo.md#L1531) | Done (historis) | T063 |
| UI-001 | [Audit UI dan inventaris seluruh rute](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305844586) | Ready | T063 |
| UI-002 | [Eksplorasi arah visual website](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305844691) | Backlog | UI-001 |
| UI-003 | [Inventaris identitas dan aset desain](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305844797) | Ready | — |
| UI-004 | [Buat mockup beranda mobile dan desktop](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305844876) | Backlog | UI-002, UI-003 |
| UI-005 | [Catat persetujuan arah desain](https://github.com/users/silkiy/projects/5/views/1?pane=issue&itemId=305846035) | Backlog | UI-004 |
| UI-006 | [Terapkan token dan komponen dasar](backlog.md#ui-006) | Backlog | UI-005, GATE-01 |
| UI-007 | [Ganti header dan navigasi desktop](backlog.md#ui-007) | Backlog | UI-006 |
| UI-008 | [Ganti navigasi mobile](backlog.md#ui-008) | Backlog | UI-007 |
| UI-009 | [Ganti footer dan kontak bersama](backlog.md#ui-009) | Backlog | UI-006 |
| UI-010 | [Ganti hero dan pengantar beranda](backlog.md#ui-010) | Backlog | UI-006, UI-008, UI-009, GATE-02 |
| UI-011 | [Ganti agregasi konten beranda](backlog.md#ui-011) | Backlog | UI-010 |
| UI-012 | [Ganti halaman Tentang](backlog.md#ui-012) | Backlog | UI-006, UI-009, GATE-02 |
| UI-013 | [Ganti daftar dan detail divisi](backlog.md#ui-013) | Backlog | UI-006, UI-009, GATE-02 |
| UI-014 | [Ganti struktur organisasi dan arsip](backlog.md#ui-014) | Backlog | UI-013 |
| UI-015 | [Ganti portal Publikasi](backlog.md#ui-015) | Backlog | UI-006, UI-009, GATE-02 |
| UI-016 | [Ganti daftar artikel](backlog.md#ui-016) | Backlog | UI-015 |
| UI-017 | [Ganti detail artikel](backlog.md#ui-017) | Backlog | UI-016 |
| UI-018 | [Ganti daftar riset](backlog.md#ui-018) | Backlog | UI-016 |
| UI-019 | [Ganti detail riset](backlog.md#ui-019) | Backlog | UI-017, UI-018 |
| UI-020 | [Ganti daftar kegiatan](backlog.md#ui-020) | Backlog | UI-006, UI-009, GATE-02 |
| UI-021 | [Ganti detail kegiatan](backlog.md#ui-021) | Backlog | UI-020 |
| UI-022 | [Ganti halaman rekrutmen](backlog.md#ui-022) | Backlog | UI-021 |
| UI-023 | [Ganti daftar dan detail galeri](backlog.md#ui-023) | Backlog | UI-006, UI-009, GATE-02 |
| UI-024 | [Ganti halaman Partnership](backlog.md#ui-024) | Backlog | UI-006, UI-009, GATE-02 |
| UI-025 | [Ganti halaman Prestasi](backlog.md#ui-025) | Backlog | UI-006, UI-009, GATE-02 |
| UI-026 | [Ganti halaman Kontak](backlog.md#ui-026) | Backlog | UI-009 |
| UI-027 | [Seragamkan empty, loading, error dan 404](backlog.md#ui-027) | Backlog | UI-006, UI-017, UI-021, UI-023 |
| UI-028 | [Audit responsif dan aksesibilitas UI baru](backlog.md#ui-028) | Backlog | UI-010, UI-011, UI-012, UI-013, UI-014, UI-015, UI-016, UI-017, UI-018, UI-019, UI-020, UI-021, UI-022, UI-023, UI-024, UI-025, UI-026, UI-027, GATE-06 |
| UI-029 | [Verifikasi regresi seluruh fitur setelah redesign](backlog.md#ui-029) | Backlog | UI-028 |
| UI-030 | [Ukur ulang performa UI baru](backlog.md#ui-030) | Backlog | UI-029 |
| UI-031 | [Tinjau dan terima hasil redesign UI](backlog.md#ui-031) | Backlog | UI-030 |
| UI-032 | [Perbarui panduan desain dan hasil redesign](backlog.md#ui-032) | Backlog | UI-031 |
| CT-001 | [Inventaris konten resmi untuk seluruh modul](backlog.md#ct-001) | Ready | T063 |
| CT-002 | [Siapkan profil organisasi dan isi editorial beranda](backlog.md#ct-002) | Backlog | CT-001 |
| CT-003 | [Validasi periode, delapan divisi dan data pengurus](backlog.md#ct-003) | Backlog | CT-001 |
| CT-004 | [Siapkan artikel dan edukasi awal yang disetujui](backlog.md#ct-004) | Backlog | CT-001 |
| CT-005 | [Validasi riset awal, sumber dan disclaimer](backlog.md#ct-005) | Backlog | CT-001 |
| CT-006 | [Validasi agenda dan tautan pendaftaran kegiatan](backlog.md#ct-006) | Backlog | CT-001 |
| CT-007 | [Validasi informasi rekrutmen dan status kampanye](backlog.md#ct-007) | Backlog | CT-001, CT-003 |
| CT-008 | [Siapkan album dokumentasi dengan izin publik](backlog.md#ct-008) | Backlog | CT-001 |
| CT-009 | [Konfirmasi mitra dan izin penggunaan logo](backlog.md#ct-009) | Backlog | CT-001 |
| CT-010 | [Verifikasi prestasi dan dokumentasi pencapaian](backlog.md#ct-010) | Backlog | CT-001 |
| CT-011 | [Konfirmasi kontak, sosial dan konfigurasi publik](backlog.md#ct-011) | Backlog | CT-001, UI-003, CT-012 |
| CT-012 | [Validasi identitas resmi dan izin aset rilis](backlog.md#ct-012) | Backlog | CT-001, UI-003, UI-005 |
| OPS-001 | [Tetapkan target hosting, domain dan operator](backlog.md#ops-001) | Ready | T063 |
| OPS-002 | [Perbarui audit dependency dan konfigurasi keamanan](backlog.md#ops-002) | Backlog | UI-030 |
| OPS-003 | [Siapkan environment produksi dan konfigurasi autentikasi](backlog.md#ops-003) | Backlog | OPS-001 |
| OPS-004 | [Siapkan media persisten dengan gateway izin](backlog.md#ops-004) | Backlog | OPS-001 |
| OPS-005 | [Siapkan domain, HTTPS dan reverse proxy](backlog.md#ops-005) | Backlog | OPS-001, OPS-003 |
| OPS-006 | [Siapkan build rilis dan staging terisolasi](backlog.md#ops-006) | Backlog | OPS-001, OPS-003, OPS-004 |
| OPS-007 | [Rehearsal migrasi database dan pemindahan data resmi](backlog.md#ops-007) | Backlog | OPS-004, OPS-006, CT-001 |
| OPS-008 | [Tetapkan backup database dan media](backlog.md#ops-008) | Backlog | OPS-001, OPS-004 |
| OPS-009 | [Buktikan restore pada infrastruktur target](backlog.md#ops-009) | Backlog | OPS-007, OPS-008 |
| OPS-010 | [Tetapkan akun operasional dan pemulihan akses](backlog.md#ops-010) | Backlog | OPS-003 |
| OPS-011 | [Siapkan monitoring dan prosedur gangguan](backlog.md#ops-011) | Backlog | OPS-006, OPS-008 |
| OPS-012 | [Deployment produksi setelah otorisasi eksplisit](backlog.md#ops-012) | Backlog | REL-004 |
| REL-001 | [Tinjauan pemilik atas demo baseline T063](backlog.md#rel-001) | In review | T063 |
| REL-002 | [Verifikasi gabungan seluruh proyek setelah perubahan](backlog.md#rel-002) | Backlog | UI-030, CT-001, CT-002, CT-003, CT-004, CT-005, CT-006, CT-007, CT-008, CT-009, CT-010, CT-011, OPS-006, CT-012, OPS-002, OPS-005, OPS-007, OPS-010 |
| REL-003 | [UAT seluruh proyek bersama pemilik](backlog.md#rel-003) | Backlog | REL-002, UI-031, REL-001 |
| REL-004 | [Tinjau kesiapan produksi dan keputusan rilis](backlog.md#rel-004) | Backlog | REL-003, UI-030, UI-031, UI-032, CT-001, CT-002, CT-003, CT-004, CT-005, CT-006, CT-007, CT-008, CT-009, CT-010, CT-011, OPS-002, OPS-005, OPS-007, OPS-009, OPS-010, OPS-011, CT-012 |
| REL-005 | [Smoke test website dan CMS setelah deployment](backlog.md#rel-005) | Backlog | OPS-012 |
| REL-006 | [Serahkan operasi dan tanggung jawab pemeliharaan](backlog.md#rel-006) | Backlog | REL-005, OPS-010, OPS-011 |
| GATE-01 | [Checkpoint persetujuan desain](backlog.md#gate-01) | Backlog | UI-005 |
| GATE-02 | [Checkpoint fondasi dan navigasi UI](backlog.md#gate-02) | Backlog | UI-008, UI-009 |
| GATE-03 | [Checkpoint beranda dan organisasi](backlog.md#gate-03) | Backlog | UI-011, UI-012, UI-014 |
| GATE-04 | [Checkpoint artikel dan riset](backlog.md#gate-04) | Backlog | UI-019 |
| GATE-05 | [Checkpoint kegiatan dan rekrutmen](backlog.md#gate-05) | Backlog | UI-022 |
| GATE-06 | [Checkpoint seluruh halaman publik](backlog.md#gate-06) | Backlog | UI-023, UI-024, UI-025, UI-026, UI-027, GATE-03, GATE-04, GATE-05 |

## Paket file dan sinkronisasi

- [backlog.md](backlog.md): uraian lengkap seluruh kartu lanjutan.
- [manifest.json](manifest.json): seluruh kartu dengan body siap issue, status, dependensi dan sumber.
- [legacy-cards.json](legacy-cards.json): ekspor lengkap 63 task dan 23 checkpoint historis.
- [sync-results.json](sync-results.json): mapping draft item dan bukti sinkronisasi yang teramati.
- `ui-cards.json`, `operations-cards.json`, `checkpoint-cards.json`: sumber data kartu lanjutan.
- [build-manifest.mjs](build-manifest.mjs): generator lokal. Jalankan `node tasks/github-project-5/build-manifest.mjs` dari repository; tidak menghubungi GitHub.

Manifest ini bukan format impor bawaan GitHub Projects. Periksa item existing dan cocokkan Task ID agar tidak menggandakan kartu, termasuk kartu yang mungkin sudah dibuat tetapi belum tercatat ketika koneksi terganggu. Buat/reuse draft item pada Project #5, atur status, lalu catat URL, item ID dan hasil verifikasi body pada sync-results.json. Terbitkan seluruh kartu sebelum mengganti dependensi ID menjadi tautan item; beberapa dependensi menunjuk kartu yang muncul belakangan.

Generator membaca sync-results.json bila tersedia dan mempertahankan mapping yang tercatat pada ekspor. File tersebut tidak ditulis oleh generator; simpan hasil sinkronisasi aktual di sana sebelum regenerasi. Generator tidak menghubungi atau mengubah GitHub.

## Batas scope

Rencana meliputi seluruh kebutuhan PRD dan kelanjutan produksi yang masih terbuka. Newsletter, analytics, multibahasa, akun pengunjung/anggota, portal internal, harga saham real-time, trading, pembayaran dan integrasi Instagram otomatis tetap di luar komitmen MVP; daftar §19 merupakan ide pengembangan berikutnya.

Histori tasks/plan.md dan tasks/todo.md dipertahankan. GitHub menjadi tempat perubahan status aktif bagi kartu yang telah tersinkron; file ekspor ini merupakan snapshot rencana dan hasil sinkronisasi terakhir yang tercatat.
