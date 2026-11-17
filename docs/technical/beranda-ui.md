# Kontrak implementasi Beranda v2

## Acuan dan tujuan

Layar Stitch `cdf1f963f6a7445683103521f8652e7d` pada proyek
`13905014639286624635`, screenshot dan HTML lokal di `../design/stitch/beranda/`, serta
FR-01 dan persyaratan aksesibilitas/responsif PRD v1.1.

Beranda memperkenalkan GIBEI UISI dan mengarahkan pengunjung ke edukasi/riset,
organisasi, kegiatan, dan rekrutmen. Aksi utama: menjelajahi bagian publikasi.

## Keputusan UI

- Pertahankan biru `#006194`, navy, latar putih/slate, tipografi Plus Jakarta
  Sans untuk heading dan Inter untuk isi, whitespace, dan urutan bagian Stitch.
- Header, hero, statistik, tiga pilar, delapan divisi, tiga publikasi, dua
  kegiatan, rekrutmen, mitra, dan footer menjadi komponen React yang semantik.
- Font dan logo lokal; SVG dekoratif lokal, tanpa Tailwind CDN/ikon font/CDN.
- Satu h1; h2 per bagian; skip link, fokus terlihat dan navigasi keyboard.
- Navigasi mobile memakai disclosure dengan button berlabel, aria-expanded,
  aria-controls, Escape mengembalikan fokus, dan tutup setelah memilih tautan.
- Navigasi bagian menggunakan anchor nyata dengan offset terhadap header.
- Warna menu aktif mengikuti section yang terlihat, termasuk klik anchor, scroll
  manual, direct hash, Reload dan Back. Satu tautan memakai `aria-current="location"`;
  perubahan scroll manual tidak menulis ulang URL atau history.
- Statistik/konten contoh dilabeli; tautan eksternal yang belum diverifikasi,
  file yang belum ada, registrasi, dan portal admin tidak diberi aksi palsu.
- Footer memuat disclaimer edukasi. Tidak menambah backend atau CMS.

## Responsif dan kriteria terima

- Mobile mulai 320 px: menu ringkas, CTA bertumpuk, isi satu kolom, statistik
  dua kolom, tanpa scroll horizontal.
- Tablet: dua kolom pada divisi/publikasi jika muat; judul memakai ukuran fluid.
- Desktop: navigasi penuh ketika seluruh item muat, tiga pilar/publikasi,
  empat divisi dan dua kegiatan. Lebar isi dibatasi agar nyaman di ultrawide.
- Target sentuh minimal 44 px, kontras teks normal minimal 4.5:1, focus jelas.
- Reduced motion menonaktifkan smooth scroll dan transisi.
- Verifikasi runtime pada 320, 375, 768, 1024, 1440, serta 2560 px dan landscape;
  menu buka/tutup/Escape/pilih tautan, zoom 200%, keyboard, dan axe bila tersedia.
- Jalankan lint, typecheck, production build dan pemeriksaan browser. Catat hasil
  aktual, termasuk batas verifikasi perangkat fisik, dalam laporan implementasi.

## Potongan implementasi

1. Font/logo lokal, token CSS, header/menu, hero dan statistik; verifikasi dahulu.
2. Bagian konten dan footer, lalu layout responsif lengkap.
3. Pemeriksaan browser dan aksesibilitas, perbaikan temuan, dokumentasi hasil.

## Kepemilikan file section

Setiap section dimiliki satu komponen di `src/components/home/`: `HeroSection`,
`AboutSection`, `DivisionsSection`, `PublicationSection`, `EventsSection`,
`RecruitmentSection`, dan `PartnersSection`. Data pratinjau khusus suatu section
berada di file komponennya. `src/app/page.tsx` hanya menyusun urutan komponen;
tidak memuat markup isi section atau wrapper identitas section.
