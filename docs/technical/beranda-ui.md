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
- Header, hero, tiga pilar, delapan divisi, tiga publikasi, dua
  kegiatan, rekrutmen, mitra, dan footer menjadi komponen React yang semantik.
- Font dan logo lokal; SVG dekoratif lokal, tanpa Tailwind CDN/ikon font/CDN.
- Satu h1; h2 per bagian; skip link, fokus terlihat dan navigasi keyboard.
- Navigasi mobile memakai disclosure dengan button berlabel, aria-expanded,
  aria-controls, Escape mengembalikan fokus, dan tutup setelah memilih tautan.
- Navigasi bagian menggunakan anchor nyata dengan offset terhadap header.
- Warna menu aktif mengikuti section yang terlihat, termasuk klik anchor, scroll
  manual, direct hash, Reload dan Back. Satu tautan memakai `aria-current="location"`;
  perubahan scroll manual tidak menulis ulang URL atau history.
- Konten contoh dilabeli; tautan eksternal yang belum diverifikasi,
  file yang belum ada, registrasi, dan portal admin tidak diberi aksi palsu.
- Footer memuat disclaimer edukasi. Tidak menambah backend atau CMS.

## Responsif dan kriteria terima

- Hero dan enam section utama memiliki tinggi minimal viewport dinamis dikurangi
  tinggi header aktual. Konten panjang boleh menambah tinggi section secara alami.
- Klik menu menyelaraskan awal section tepat di bawah header, tanpa celah 24 px
  atau potongan section sebelumnya; section berikutnya berada di luar viewport.
- Mitra dan footer tetap ringkas. Tidak memakai tinggi tetap, clipping konten,
  pagination tambahan atau scroll yang dipaksa per layar.
- Mobile mulai 320 px: menu ringkas, CTA bertumpuk, isi satu kolom,
  tanpa scroll horizontal.
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

1. Font/logo lokal, token CSS, header/menu dan hero; verifikasi dahulu.
2. Bagian konten dan footer, lalu layout responsif lengkap.
3. Pemeriksaan browser dan aksesibilitas, perbaikan temuan, dokumentasi hasil.

## Kepemilikan file section

Setiap section dimiliki satu komponen di `src/components/home/`:

| Bagian | File | Anchor |
| --- | --- | --- |
| Hero dan ilustrasi | `HeroSection.tsx` | `#beranda` |
| Tentang dan pilar | `AboutSection.tsx` | `#tentang` |
| Delapan divisi | `DivisionsSection.tsx` | `#divisi` |
| Publikasi | `PublicationSection.tsx` | `#publikasi` |
| Kegiatan | `EventsSection.tsx` | `#kegiatan` |
| Rekrutmen | `RecruitmentSection.tsx` | `#rekrutmen` |
| Kontak | `ContactSection.tsx` | `#kontak` |
| Mitra | `PartnersSection.tsx` | Bagian informasi tanpa menu terpisah |

Data pratinjau khusus suatu section berada di file komponennya.
`src/app/page.tsx` hanya menyusun urutan komponen; tidak memuat markup isi section
atau wrapper identitas section. Header dan footer juga mempunyai file sendiri
di `src/components/site/`. Token dan gaya bersama berada di `src/app/globals.css`.

Daftar media sosial Kontak dan footer bersumber dari `src/content/site-contact.ts`.
Nama kanal mengikuti konfirmasi pemilik: Instagram GIBEI UISI, YouTube GIBEI
Official, LinkedIn GIBEI UISI dan Telegram Community. Keterangan bersama:
"Tautan resmi akan dikonfirmasi." Belum ada URL resmi, sehingga kanal ditampilkan
sebagai informasi, tanpa tautan palsu atau form kontak (sesuai FR-10).

Section Kontak berada setelah Rekrutmen dan sebelum Mitra, mengikuti susunan
`page.tsx` terbaru. Saat viewport terlalu tinggi
untuk menempatkannya tepat di bawah header, penanda menu beralih ke section
navigasi terakhir ketika halaman mencapai batas scroll bawah.

## Tinggi section dan posisi anchor

`--header-height` mengatur ukuran dasar header, sedangkan `--header-offset`
menyimpan tinggi kotak header aktual beserta bordernya. Kedua nilai dipisahkan
agar pembaruan pengukuran tidak membuat tinggi header bertambah berulang kali.
Offset aktual diperbarui melalui ResizeObserver dan dipakai bersama oleh
`scroll-padding-top`, tinggi minimal section, batas menu mobile dan scrollspy.

Section utama memakai `min-height: calc(100dvh - var(--header-offset))` dengan
fallback `100vh`. Isi diposisikan di tengah vertikal jika muat. Section tanpa ID
navigasi (Mitra) serta footer mengikuti panjang isinya. Styles tidak menyembunyikan
overflow vertikal untuk memaksakan seluruh isi masuk satu layar.

## Penyegaran Hero

Audit Hero: komposisi teks terpusat, badge panjang dan statistik contoh membuat
hierarki kurang jelas. Redesign terbatas pada Hero, mempertahankan brand biru
`#006194`, Plus Jakarta Sans/Inter, logo, anchor `#beranda` serta kedua tujuan CTA.
Metadata, navigasi dan isi section lain tetap mengikuti kontrak sebelumnya.

Arah visual: editorial edukasi kampus dengan komposisi dua kolom mulai 900 px,
teks rata kiri dan satu gambar pembelajaran. Variasi desain 4/10, gerak 2/10
(feedback tombol yang sudah ada), kepadatan 4/10. Tidak menambah library atau
animasi. Mobile menempatkan teks dan aksi sebelum gambar; isi boleh memanjang.

Judul menjadi "Kenali pasar modal. Mulai dari sini." Statistik ilustrasi pada
Hero dihapus; tidak dipakai sebagai bukti pencapaian organisasi. Gambar lokal
`public/images/hero-learning-v2.png` merupakan ilustrasi hasil imagegen built-in,
bukan foto kegiatan resmi atau data pasar. Keterangan ilustrasi tampil di bawah
gambar. Alt menjelaskan isinya; Next Image dengan ukuran intrinsik, `sizes` dan
eager loading menyediakan gambar responsif. Prompt/provenance ada di
`../assets/hero-learning-v2.md`.

CSS khusus Hero berada di `HeroSection.module.css`; aturan tinggi minimum yang
dipakai bersama section lain tetap berada di `globals.css`.
