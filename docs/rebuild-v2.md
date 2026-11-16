# Perubahan arah: rebuild v2 dengan dashboard admin custom

Tanggal: 15 November 2026. Target tracker: [GitHub Project #5](https://github.com/users/silkiy/projects/5/views/1). Acuan kebutuhan fungsional: [PRD v1.1](PRD-v1.1.md). Rincian pekerjaan baru: [rencana rebuild](../tasks/github-project-5/rebuild-v2/README.md).

## Keputusan pemilik

- Mulai ulang implementasi dari awal pada branch baru, dengan UI publik dan dashboard admin baru.
- Next.js tetap menjadi framework. Payload CMS dan paket integrasinya diganti oleh implementasi dashboard, API, validasi dan layanan domain milik aplikasi sendiri.
- Dua peran Admin dan Media Communication serta alur draft → review → publish tetap digunakan dan dibangun ulang.
- Riwayat Done pada v1 hanya menjelaskan sistem lama; bukan bukti bahwa bagian v2 sudah selesai.

Perencanaan dan Kanban telah disiapkan. Pada 16 November 2026, pemilik meminta starter Next.js kosong pada branch `rebuild/website-v2`; lihat catatan setup di bawah.

## Batas kebutuhan

Sebelas modul publik FR-01–FR-11 dan sitemap PRD tetap menjadi cakupan awal. Dashboard custom menyediakan pengelolaan akun, konten, media, assignment, antrean review, preview, riwayat keputusan dan Site Settings. Form admin beserta API/validasi menjadi bagian setiap slice modul; tugas bukan sekadar mengganti halaman publik.

Kebijakan versi terbit terpisah dari revisi, persetujuan berbasis versi/aset, audit, media privat, penarikan, sumber kontak, disclaimer riset, izin logo, batas waktu WIB dan aktivasi tunggal tetap menjadi kriteria awal dari PRD. Perubahan aturan produk berikutnya dicatat eksplisit melalui task kebutuhan, bukan dihilangkan diam-diam saat mengganti CMS.

Pemilihan library autentikasi/session, editor, ORM/driver/migrasi dan penyimpanan belum diputuskan. RB-002 menilai pilihan yang kompatibel berdasarkan dokumentasi resmi. Dashboard buatan sendiri tidak berarti membuat algoritma kriptografi sendiri. Pola App Router, autentikasi dan Route Handler harus diperiksa pada dokumentasi Next yang terpasang sebelum implementasi, sesuai AGENTS.md.

## Isolasi dan data lama

Branch Git mengisolasi source, tetapi tidak memisahkan database atau media. RB-001/RB-006 memakai target database/schema serta media baru yang jelas. Memilih mulai dari kode kosong tidak otomatis mengizinkan penghapusan schema Payload, file lama, histori editorial, backup atau data resmi.

RB-002 mencatat pilihan mulai dengan dataset kosong atau memigrasikan data yang dipilih. Migrasi/retensi/rollback kemudian mengikuti keputusan tersebut. Penghapusan source lama dilakukan hanya pada branch rebuild sesudah titik pemulihan dan perubahan kerja yang belum dikomit diamankan. Main dan bukti v1 tetap dapat menjadi referensi regresi sampai pengganti dibuktikan.

## Ukuran kelulusan baru

- Alur artikel lengkap dibuktikan sebelum menyalin kontraknya ke modul lain.
- Semua 11 modul, dua role, API langsung, versi, media, audit, konflik dan rollback mendapat hasil uji v2 yang baru.
- UI publik dan admin diuji pada 320/375/768/1024/1440 px, keyboard, zoom 200%, reduced motion dan target WCAG 2.2 AA.
- Lighthouse mobile mengikuti kondisi PRD: production build, dataset tetap, warm-up, tiga run, median Performance minimal 85 pada beranda, daftar artikel, satu detail artikel dan kegiatan.
- Clean start, seed ulang, restart, backup/restore, dokumentasi dan penerimaan pemilik dibuktikan ulang. Angka hasil tes v1 tidak diwariskan.
- Produksi tetap memiliki persiapan infrastruktur, konten/izin resmi, recovery, monitoring, rollback dan keputusan rilis tersendiri. Membuat kartu bukan menjalankan deployment.

## Status backlog terdahulu

T001–T063/CP-01–CP-23 dan paket 154 kartu sebelumnya dipertahankan sebagai histori perencanaan v1/redesign. Paket tersebut tidak menjadi antrean eksekusi utama v2. Kartu RB-000–RB-060 adalah rencana baru; tidak ada dependency RB yang dianggap selesai hanya karena task T/UI/CT/OPS/REL lama Done.

Item GitHub lama tidak dihapus massal. View rebuild dan prefix RB membedakan pekerjaan aktif baru dari histori; setiap pekerjaan baru dimulai dalam status belum selesai. Penerimaan v1 yang masih tertunda tidak diperlakukan sebagai penerimaan v2.

## Penyelesaian pengisian Kanban — 16 November 2026

Seluruh 61 kartu (epic RB-000 dan 60 task RB-001–RB-060) tersedia di [view Rebuild v2](https://github.com/users/silkiy/projects/5/views/6). Status awal: 60 Backlog, 1 Ready, 0 Done. Tautan dan ID aktual disimpan pada [hasil sinkronisasi](../tasks/github-project-5/rebuild-v2/sync-results.json). Satu duplikat kosong RB-056 diarsipkan. Tidak ada branch baru, penghapusan kode/data atau implementasi aplikasi yang dijalankan sebagai bagian pengisian Kanban.

## Setup starter kosong — 16 November 2026

Nama branch aktif adalah `rebuild/website-v2` agar mencakup rebuild seluruh UI publik dan sistem, termasuk dashboard admin. Branch `demo/website-v1` dibuat dari `main` pada commit `ec4f8de` untuk mempertahankan seluruh kode demo lama. Keduanya berada pada repository yang sama dan belum di-push pada tahap setup ini; `main` tetap pada baseline v1.

Branch `rebuild/website-v2` dimulai dari commit v1 `ec4f8dee1fc6c5754b02b2c56fae5fde502d1494`. Source, konfigurasi, skrip, tes dan migrasi v1 dicadangkan ke `artifacts/rebuild-baseline-20261116/` sebelum diganti dengan Next.js App Router minimal. Payload dan integrasi database lama dikeluarkan dari dependency dan aplikasi aktif. PRD, backlog, histori dokumentasi dan AGENTS.md dipertahankan.

Starter hanya mempunyai halaman placeholder, root layout, TypeScript, Tailwind dan ESLint. Environment privat lama dipindahkan ke snapshot lokal yang diabaikan Git; aplikasi baru belum membutuhkan environment variable atau koneksi database. Database/media lama tidak diubah. Pemilihan dan isolasi backend baru tetap pekerjaan berikutnya; setup ini tidak menandai seluruh RB-001/RB-006 atau deployment selesai.

Perintah development/build memakai opsi `--webpack` karena worker PostCSS Turbopack gagal memulai proses pada mesin ini, termasuk di luar sandbox. Versi dependency utama tetap mengikuti versi terpasang sebelumnya; lockfile baru hanya memuat kebutuhan starter, dengan `tslib 2.8.1` dan `@types/estree 1.0.9` yang kompatibel dan tersedia di cache lokal.

Verifikasi starter: instalasi offline dengan frozen lockfile, ESLint, TypeScript dan production build Webpack lulus pada Node.js 24.22.1. Chrome headless membuktikan `/` HTTP 200, Tailwind aktif, tidak ada overflow pada 375 px, `/admin` HTTP 404, tanpa error JavaScript atau request eksternal selama smoke test. Screenshot lokal tersedia di `artifacts/rebuild-starter-desktop.png` dan `artifacts/rebuild-starter-mobile.png`. Ini hanya verifikasi fondasi kosong, bukan penerimaan fitur atau deployment.
