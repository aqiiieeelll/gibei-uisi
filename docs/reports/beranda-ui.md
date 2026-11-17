# Verifikasi Beranda responsif — 17 November 2026

Implementasi di `feature/beranda-responsive`, berdasarkan [kontrak UI](../technical/beranda-ui.md)
dan layar Stitch `cdf1f963f6a7445683103521f8652e7d` milik proyek GIBEI UISI.

## Hasil implementasi

Beranda terdiri dari header/menu mobile, hero dan statistik, tiga pilar, delapan
divisi, publikasi, kegiatan, rekrutmen, referensi mitra dan footer. Halaman serta
bagian konten memakai Server Components; interaktivitas dibatasi pada header.
Logo, Inter, Plus Jakarta Sans dan ikon SVG disajikan lokal. Lisensi font OFL
dipertahankan. Tidak ada dependency aplikasi baru.

Navigasi mengarah ke section nyata. Menu menutup lewat Escape, klik luar,
pemilihan tautan/logo, pergantian layout desktop, atau Tab keluar header.
Escape mengembalikan fokus ke tombol menu. Skip link, fokus terlihat, offset
header dan reduced motion tersedia.

Statistik, publikasi, agenda dan mitra merupakan konten contoh berlabel.
Registrasi, unduhan, sosial dan portal admin tidak diarahkan ke tautan palsu.
Backend, halaman detail dan dashboard belum termasuk implementasi Beranda ini.

## Pemeriksaan aktual

Lingkungan: Windows, Node.js 24.22.1, pnpm 10.24.0, Chrome headless dengan profil
terisolasi. Playwright 1.64.1 dan axe Playwright 4.14.0 memakai cache tool yang
sudah tersedia; tidak memasang framework pengujian baru.

| Pemeriksaan | Hasil |
| --- | --- |
| `pnpm lint` | Lulus, zero warnings |
| `pnpm typecheck` | Lulus |
| `pnpm build` (Webpack) | Lulus; `/` diprerender statis |
| `pnpm test:ui` pada development dan production | Lulus |
| Lebar viewport | 320, 375, 390, 430, 640, 768, 820, 1024, 1200, 1280, 1440, 1920, 2560 px |
| Landscape | 844 × 390 px; menu dibatasi tinggi viewport dan CTA dapat dicapai lewat keyboard |
| Overflow horizontal | Tidak ditemukan pada 14 viewport |
| Target sentuh interaktif UI aplikasi | Minimal 44 × 44 px pada seluruh viewport yang diuji |
| Keyboard dan fokus | Enter, Tab, Escape, skip link, pemilihan bagian, logo, keluar header lulus |
| Reflow zoom 200% | Lulus emulasi: 1280 piksel fisik / 640 piksel CSS, menu tetap dapat dipakai |
| Reduced motion | Smooth scrolling dinonaktifkan |
| axe WCAG 2 A/AA, 2.1 AA, 2.2 AA | 0 violations pada 375 dan 1440 px; menu mobile terbuka saat diaudit |
| JavaScript/console errors | 0 pada pemeriksaan produksi |
| HTTP response gagal / request eksternal | 0 / 0 pada pemeriksaan produksi |
| Gambar dan anchor | Semua gambar termuat; semua anchor internal mempunyai target |

Tes awal pada starter gagal karena hero/menu belum ada. Tes target sentuh
menemukan tautan footer `8 Divisi` terlalu sempit dan sudah diperbaiki. Tes
navigasi logo menemukan menu belum menutup dan sudah diperbaiki melalui
pengelolaan fokus keluar header. Mutation check membalik kondisi Escape untuk
sementara: tes gagal sesuai harapan; source dikembalikan dan tes lulus lagi.

## Reproduksi pengujian browser

Jalankan server melalui `pnpm dev`, atau `pnpm build` lalu `pnpm start`.
Jika modul Playwright/axe sudah tersedia di project/tool environment,
`pnpm test:ui` dapat menggunakannya. Contoh cache lokal pada workspace ini:

```powershell
$env:UI_PLAYWRIGHT_MODULE = '.tools/clean-start-d736fb29e48c/node_modules/.pnpm/playwright@1.64.1/node_modules/playwright/index.mjs'
$env:UI_AXE_MODULE = '.tools/clean-start-d736fb29e48c/node_modules/.pnpm/@axe-core+playwright@4.14.0_playwright-core@1.64.1/node_modules/@axe-core/playwright/dist/index.mjs'
pnpm test:ui
```

Untuk server pada port lain, set `UI_BASE_URL`; default `http://127.0.0.1:3000`.
Skrip [regresi browser](../../tests/browser/beranda.mjs) memakai Chrome yang
terpasang (`UI_BROWSER_CHANNEL` dapat disesuaikan). Path cache merupakan kondisi
lokal, bukan dependency atau syarat runtime aplikasi.

Bukti lokal yang diabaikan Git:

- `artifacts/beranda-ui/beranda-ui-results.json`
- `artifacts/beranda-ui/beranda-{320,375,768,1024,1440,2560}.png`
- `artifacts/beranda-ui/beranda-zoom-200.png`
- `artifacts/beranda-production-test-output.txt`
- `artifacts/beranda-mutation-result.txt`

## Temuan dependency yang sudah ada

`pnpm audit --prod --json` menemukan satu advisory **moderat** pada Next.js
16.4.2: [GHSA-mfr8-8qww-v76h](https://github.com/advisories/GHSA-mfr8-8qww-v76h).
Rentang terdampak 16.3.0–16.4.4; patch 16.4.5. Advisori berkaitan dengan
pemanggilan fungsi `use cache` melalui `unstable_cache` yang membaca root params.
Pola tersebut tidak digunakan oleh source Beranda ini; pemeriksaan source tidak
menemukan penggunaan kedua API. Ini membatasi paparan fitur saat ini, bukan
klaim bahwa versi paket sudah bebas advisory.

Next CLI sempat menghentikan build pada pemberitahuan ini. Pengulangan perintah
build menyelesaikan build dengan exit code 0; audit produksi tetap exit code 1.
Versi dependency dan hasil audit tidak diubah untuk meloloskan gate. Pembaruan
keamanan framework tetap perlu dikerjakan terpisah sebelum rilis produksi.

## Batas verifikasi

Pengujian otomatis dilakukan pada Chromium/Chrome, bukan pada setiap model
perangkat fisik atau Safari/Firefox. Zoom 200% diuji sebagai reflow emulasi,
bukan melalui kontrol zoom browser manual. Axe bukan sertifikasi WCAG atau
pengganti pengujian screen reader manusia. Belum ada penerimaan desain oleh
pemilik, push, merge ke main, atau deployment produksi untuk perubahan UI ini.

## Perbaikan navigasi aktif — 17 November 2026

Warna biru sebelumnya memakai selector `a:first-child`, sehingga selalu menandai
Beranda. Header kini mengukur posisi keenam section terhadap offset sticky header
dan menandai satu tautan aktif dengan `aria-current="location"`. Pembaruan scroll
dibatasi satu kali per animation frame dengan listener pasif. Perubahan ukuran
konten, font selesai dimuat, resize viewport dan perubahan hash juga diperiksa;
listener dan observer dibersihkan ketika komponen dilepas.

Posisi anchor dapat dibulatkan browser menjadi pecahan piksel CSS. Toleransi dua
CSS pixel mencegah section tujuan tetap dianggap sebagai section sebelumnya.
Scroll manual tidak mengubah URL/history. Menu desktop dan mobile memakai status
aktif yang sama.

[Tes regresi navigasi](../../tests/browser/active-navigation.mjs) membuktikan kasus
`/#divisi` gagal sebelum perbaikan. Sesudah perbaikan, direct hash, klik, scroll
manual keenam section, Back, Reload, anchor terakhir pada 2560 × 1440 dan menu
mobile 375 px lulus. Tes terintegrasi dalam `pnpm test:ui`; matriks Beranda,
keyboard dan audit axe tetap lulus tanpa error atau request eksternal. Lint dan
typecheck lulus. Animasi smooth scrolling juga diperiksa pada tes navigasi fokus.

Build produksi lulus; tes navigasi fokus pada production server juga lulus.
Bukti lokal tambahan: `artifacts/active-navigation-ui-results.txt` dan
`artifacts/navigation-divisi-fixed.png`.

## Section mandiri dan Kontak — 17 November 2026

`OrganizationSections` dipisah menjadi `AboutSection` dan `DivisionsSection`;
`ActivitySections` dipisah menjadi `EventsSection`, `RecruitmentSection` dan
`PartnersSection`. `Hero` menjadi `HeroSection` dan memiliki anchor sendiri,
tanpa wrapper isi section di page. `PublicationSection` tetap mandiri. Refactor
disimpan terpisah setelah lint, build dan regresi browser lulus, termasuk
pengecekan bahwa teks UTF-8 sumber tetap utuh.

Beranda kini memiliki delapan section, termasuk `ContactSection`. Isi media sosial berasal dari jawaban
pemilik: Instagram GIBEI UISI, YouTube GIBEI Official, LinkedIn GIBEI UISI,
Telegram Community, serta "Tautan resmi akan dikonfirmasi." Section Kontak dan
footer membaca data yang sama dari `src/content/site-contact.ts`; tidak dibuat
URL, email, WhatsApp, form pesan, atau integrasi layanan baru.

Menu Kontak tersedia di header dan footer. Pada layar 2560 × 1440, batas scroll
sebelumnya membuat Kontak tidak mencapai garis aktivasi sticky header. Tes
mendeteksi masalah tersebut; penanda kini mengikuti section navigasi terakhir
ketika halaman mencapai bagian bawah. Ini mempertahankan warna aktif yang benar
pada direct hash, klik, dan scroll manual.

[Tes Kontak](../../tests/browser/contact-section.mjs) gagal pada preview awal yang
belum memiliki section ini, lalu lulus setelah implementasi. Pemeriksaan mencakup
delapan section tetap ada, empat nama kanal dan keterangan sesuai permintaan,
data footer konsisten, anchor desktop/mobile, status aktif pada layar tinggi,
serta tidak ada tautan palsu atau form. Regresi Beranda pada 14 viewport tetap
lulus, axe 375/1440 px menghasilkan 0 violations, dan tidak ada error JavaScript
atau request eksternal. Lint dan typecheck lulus.

Build produksi final lulus. Pemeriksaan Kontak dan navigasi aktif pada production
server juga lulus. Source dan hasil build sama-sama menempatkan Kontak sebelum
Mitra, sesuai susunan `page.tsx` terbaru yang dipertahankan selama pengerjaan.

Bukti lokal: `artifacts/section-refactor-ui-results.txt`,
`artifacts/contact-ui-results.txt` dan `artifacts/beranda-ui/contact-375.png`.

## Section minimal satu layar — 17 November 2026

Pemilik memilih section utama minimal satu layar dengan isi panjang tetap boleh
memanjang. Hero dan enam section navigasi menggunakan tinggi minimal viewport
dinamis dikurangi tinggi header aktual; isi yang muat diposisikan di tengah
vertikal. Section Mitra dan footer tetap ringkas. Tidak ditambahkan clipping,
scroll internal, pagination atau scroll snap yang memaksa perpindahan layar.

Jarak tambahan 24 px pada anchor dihapus. `scroll-padding-top` memakai tinggi
header sebenarnya, termasuk border, melalui token `--header-offset`. Token itu
terpisah dari ukuran dasar header agar ResizeObserver tidak menyebabkan ukuran
header bertambah berulang. Header yang berubah tinggi ikut menyesuaikan offset,
tinggi minimal section, dan batas menu mobile.

[Tes batas section](../../tests/browser/section-viewport.mjs) mereproduksi
ketidakcocokan offset sebelum perubahan. Setelah perubahan, pemeriksaan lulus:

- Tinggi minimal ketujuh section pada 1440×900, 375×812, 320×568, 768×1024,
  2560×1440 dan landscape 844×390.
- Klik masing-masing tujuh menu pada desktop, mobile dan landscape (21 kasus):
  section tujuan sejajar dengan batas bawah header dalam toleransi 2 CSS px,
  batas bawahnya memenuhi viewport, dan tidak ada section tetangga di area baca
  setelah perpindahan selesai.
- Direct hash Kontak pada layar tinggi dan adaptasi saat tinggi header diuji
  menjadi 113 px.
- Regresi 14 viewport, keyboard, menu, reflow zoom 200%, dan audit axe tetap
  lulus; 0 violations pada 375/1440 px, 0 error JavaScript dan request eksternal.
- Lint dan typecheck lulus. Tinggi section fleksibel mempertahankan seluruh isi;
  aturan ini bukan janji bahwa semua isi panjang muat sekaligus dalam satu layar.

Build produksi final lulus. Pemeriksaan batas section dan navigasi dengan
smooth scroll pada production server juga lulus. Screenshot viewport normal
desktop 1440×900 dan mobile 375×812 diperiksa secara visual: area di bawah header
diisi section tujuan tanpa potongan section tetangga.

Bukti lokal: `artifacts/section-viewport-ui-results.txt` dan screenshot dalam
`artifacts/beranda-ui/section-*.png`. Batas verifikasi perangkat/browser yang
dijelaskan sebelumnya tetap berlaku.

## Redesign Hero — 17 November 2026

Hero memakai komposisi editorial: judul rata kiri, deskripsi singkat dan dua
CTA menuju Publikasi/Tentang; ilustrasi meja belajar di kanan mulai 900 px.
Pada mobile, urutannya teks, aksi, lalu gambar. Statistik contoh dikeluarkan
dari Hero. Warna merek, font lokal, anchor dan tinggi minimum viewport tetap
dipakai. Gaya khusus dipisahkan ke `HeroSection.module.css`.

Gambar `public/images/hero-learning-v2.png` dibuat dengan imagegen built-in dan
dilabeli sebagai ilustrasi. Prompt final tercatat di `docs/assets/hero-learning-v2.md`.
Next Image menyediakan ukuran responsif; request gambar pada pemeriksaan lokal
desktop 1440 px berukuran 41.948 bytes. Ini observasi aset lokal, bukan hasil
audit performa produksi di jaringan pengguna.

Lint, typecheck dan build produksi lulus. Build sempat berhenti karena pengingat
advisory Next.js yang sudah dicatat sebelumnya; retry berhasil. Tidak ada
perubahan dependency dalam pekerjaan Hero ini. Screenshot produksi desktop
diperiksa langsung; pemeriksaan awal 320, 375, 1024 dan 1440 px tidak menemukan
overflow horizontal. Belum ada pengujian pada perangkat fisik.

Regresi browser pada hasil produksi lulus: 14 viewport (320–2560 px dan
landscape), menu/keyboard/reflow 200%, navigasi aktif, Kontak serta batas section
dan offset header. Tes Hero memastikan gambar dimuat dan kedua CTA bisa
diaktifkan dengan keyboard pada 375/1440 px. Axe menghasilkan 0 violations
pada kedua lebar tersebut; 0 error JavaScript, request eksternal dan respons
HTTP gagal. Bukti: `artifacts/hero-ui-results.txt`,
`artifacts/hero-production-desktop.png` dan `artifacts/beranda-ui/hero-375.png`.

## Hero komunitas dan komposisi panorama — 17 November 2026

Hero disusun ulang menjadi satu alur baca terpusat: identitas, judul besar
"Belajar pasar modal. Tumbuh bersama.", deskripsi, dua CTA dan visual kolaborasi
mahasiswa yang melebar. Biru merek menegaskan baris kedua judul; tracking
`-.035em` memberi ruang huruf lebih lega. Latar biru pucat membatasi area Hero.
Tidak menambah statistik, badge, animasi, dependency atau fitur baru.

Visual memakai imagegen built-in. Panorama 2172×724 dipakai mulai 640 px;
komposisi mobile 1448×1086 menjaga semua wajah dan aktivitas tetap terlihat.
Keduanya ilustrasi, bukan dokumentasi anggota/tempat/kegiatan resmi. Keterangan
terlihat di bawah gambar dan alt menjelaskan isi. `getImageProps` dan `<picture>`
memilih satu komposisi yang sesuai serta mengoptimasi ukuran unduhan. Rasio
intrinsik masing-masing sumber dipertahankan, tanpa clipping gambar untuk
memaksanya masuk tinggi tertentu. Prompt ada di `docs/assets/hero-community-v3.md`.

Hero tetap minimal satu viewport dikurangi header, dan boleh memanjang mengikuti
konten. Komponen section lain, navigasi, metadata, dan tujuan kedua CTA tetap
dipakai. Pemeriksaan awal pada 320, 375, 768 dan 1440 px tidak menemukan overflow
horizontal; screenshot desktop/mobile diperiksa langsung dan pemilihan sumber
gambar sesuai breakpoint.

Pemeriksaan request lokal pada produksi memuat hanya satu komposisi gambar per
viewport: 77.396 bytes untuk panorama desktop 1440 px dan 19.218 bytes untuk
mobile 375 px. Angka ini observasi browser lokal, bukan janji performa jaringan
pengguna. Audit awal menemukan kontras caption 4,48:1 terhadap latar baru;
caption kemudian memakai token `--text` yang lebih gelap, tanpa mengubah warna
teks section lain. Pemeriksaan axe pada suite browser menjadi guard regresinya.

Verifikasi final lulus: lint tanpa warning, typecheck, production build, dan
regresi 14 viewport (320–2560 px serta landscape). Menu/keyboard, reflow zoom
200%, Kontak, menu aktif, batas section dan offset header tetap lulus. Tes Hero
memastikan sumber gambar yang tepat serta kedua CTA lewat keyboard pada
375/640/1440 px. Axe pada 375/1440 px menghasilkan 0 violations; 0 error
JavaScript, request eksternal atau respons HTTP gagal. Perbaikan warna caption
terlihat pada computed style dan screenshot produksi final.

Bukti: `artifacts/hero-community-final-ui-results.txt`,
`artifacts/hero-community-final-build-retry.txt`, dan
`artifacts/hero-community-production-{1440,375}.png`. Verifikasi memakai Chrome
desktop dengan emulasi viewport; perangkat fisik belum diuji.
