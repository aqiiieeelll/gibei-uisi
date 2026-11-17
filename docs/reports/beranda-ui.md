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
