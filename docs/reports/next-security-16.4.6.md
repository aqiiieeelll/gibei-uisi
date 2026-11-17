# Upgrade keamanan Next.js 16.4.2 ke 16.4.6

<!-- next-upgrade: security; path="." -->

Tanggal verifikasi: 17 November 2026. Dasar perubahan: `f2f1efb`, cabang
`feature/beranda-responsive`; pekerjaan di worktree terpisah pada
`fix/next-security-16.4.6`.

`next` dan `eslint-config-next` dipatok tepat ke 16.4.6. Lockfile mempertahankan
resolusi dependency lain; hanya paket Next terkait yang berubah.
`experimental.agentUpgrade` diatur ke `security`; schema dan deklarasi tipe
Next 16.4.6 mendukung opsi tersebut. Tidak ada codemod atau adopsi Future Defaults.

Pemeriksaan cabang, isi config/manifest, dan riwayat lokal maupun remote setelah
`git fetch origin` tidak menemukan pekerjaan setara. Pemeriksaan PR dicoba melalui
`gh pr list --state open --limit 100 --json number,title,body,url,headRefName`,
tetapi CLI tidak terpasang. Fallback API GitHub mengembalikan HTTP 403; status PR
terbuka belum dapat dipastikan. Branch belum dipush dan PR belum dibuat.

Verifikasi memakai Node.js 24.22.1 dan pnpm 10.24.0 sesuai konfigurasi proyek:

- Instalasi dependency dengan scripts dinonaktifkan dan instalasi akhir
  `pnpm install --frozen-lockfile --ignore-scripts` berhasil.
- `pnpm exec next --version`: `Next.js v16.4.6`.
- `pnpm lint` dan `pnpm typecheck` lulus.
- `pnpm build` lulus dengan `NODE_ENV=production`; halaman `/` statis.
  Percobaan pertama gagal saat prerender karena shell mewariskan
  `NODE_ENV=development`; pengulangan dengan environment produksi lulus tanpa
  perubahan source aplikasi.
- `pnpm test:ui` lulus terhadap server produksi pada port 3016: 14 viewport,
  navigasi/menu, keyboard/fokus, Kontak, ukuran section, Hero dan reflow zoom.
  Audit axe pada 375/1440 px: 0 violations. Tidak ada error JavaScript,
  request eksternal, atau respons HTTP gagal. Screenshot Hero desktop diperiksa.
- `pnpm audit --prod --json`: 0 kerentanan. Endpoint npm bulk dengan hanya
  `next@16.4.6` juga mengembalikan hasil kosong.

Audit seluruh dependency masih melaporkan satu temuan moderat pada
`minimatch@10.2.6` melalui tooling ESLint/TypeScript. Versi tersebut sudah ada
pada lockfile dasar dan bukan dependency produksi. Temuan ini dipertahankan
sebagai tindak lanjut terpisah, tanpa memaksakan upgrade major dependency lain.

Bukti browser lokal berada di `artifacts/beranda-ui/beranda-ui-results.json`
dan screenshot dalam direktori yang sama (diabaikan Git). Pengujian memakai
Chrome headless; perangkat fisik tidak diuji. Perubahan lokal pada checkout
asal (`.gitignore`, `next-env.d.ts`) tetap dipertahankan.

Sumber: [metadata versi target](https://registry.npmjs.org/next/16.4.6),
[advisory Next.js](https://github.com/advisories/GHSA-mfr8-8qww-v76h),
[advisory minimatch](https://github.com/advisories/GHSA-g3hv-75wg-m249),
serta panduan config/agentUpgrade dan testing Playwright pada
`node_modules/next/dist/docs/` dari paket yang terpasang.

## Integrasi ke checkout aktif

Commit `36f4e20` diterapkan melalui fast-forward ke `feature/beranda-responsive`;
tidak dibuat implementasi upgrade duplikat. Checkout aktif berhasil menjalankan
`pnpm install --frozen-lockfile --ignore-scripts`, `pnpm exec next --version`
(16.4.6), lint, typecheck dan build produksi. Audit ulang di checkout aktif:
0 temuan produksi, 1 moderat `minimatch` pada tooling development, tanpa advisory
Next.js. Bukti: `artifacts/next-security-current-build.txt` dan
`artifacts/next-security-audit-{prod,all}-after.json`.

Hasil regresi 14 viewport di worktree pembaruan diperiksa kembali dari artefak;
browser dan server tidak dijalankan ulang dalam verifikasi integrasi ini,
mengikuti permintaan pemilik. Proses development yang sudah berjalan perlu
di-restart sendiri oleh pemilik saat siap agar memuat paket baru. Perubahan
awal `.gitignore` dan `next-env.d.ts` dipertahankan.
