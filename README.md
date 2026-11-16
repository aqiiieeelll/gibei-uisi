# GIBEI UISI — Rebuild v2

Starter Next.js kosong untuk membangun ulang website dan dashboard admin custom.
Branch: `codex/rebuild-v2-custom-admin`.

## Menjalankan proyek

Gunakan Node.js `24.22.1` (lihat `.node-version`) dan pnpm `10.24.0`.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Buka http://127.0.0.1:3000. Starter belum membutuhkan `.env`, database,
akun admin, CMS, seed, atau layanan eksternal.

Script development dan build memakai Webpack karena worker PostCSS Turbopack
gagal dijalankan pada mesin Windows ini. Framework tetap Next.js App Router.
Cache pnpm lokal disimpan di `.pnpm-store/` melalui `.npmrc` dan diabaikan Git.

```sh
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

## Struktur awal

- `src/app/layout.tsx`: root layout dan metadata.
- `src/app/page.tsx`: halaman placeholder yang dapat diganti saat mulai coding.
- `src/app/globals.css`: Tailwind CSS dan gaya dasar.
- `public/`: aset baru.
- `docs/` dan `tasks/`: PRD, rencana rebuild, dan histori v1.

Stack awal: Next.js App Router, React, TypeScript, Tailwind CSS, ESLint.
Payload, dashboard lama, route API lama, library database, dan skrip seed/migrasi
lama telah dikeluarkan dari aplikasi aktif. Library backend dan autentikasi baru
belum dipilih.

## Acuan pekerjaan

- [PRD v1.1](docs/PRD-v1.1.md)
- [Keputusan rebuild](docs/rebuild-v2.md)
- [Kanban rebuild](https://github.com/users/silkiy/projects/5/views/6)
- [Rincian task RB](tasks/github-project-5/rebuild-v2/README.md)

Dokumentasi dan hasil tes v1 merupakan histori, bukan bukti kelulusan v2.
Dashboard, role Admin/Media, alur editorial, dan UI baru akan dibangun berikutnya.

## Pemulihan implementasi lama

Source v1 tersimpan dalam Git pada commit
`ec4f8dee1fc6c5754b02b2c56fae5fde502d1494` (baseline `main` saat setup).
Snapshot lokal sebelum reset juga disimpan di
`artifacts/rebuild-baseline-20261116/`, termasuk konfigurasi privat dan perubahan
`next-env.d.ts` sebelumnya. Folder ini diabaikan Git dan tidak boleh dipublikasikan.
Environment lama dipindahkan ke snapshot agar tidak dimuat oleh starter baru.

Database, media, dan backup lama tidak dihapus. Jangan menghubungkan rebuild ke
database/media produksi sebelum isolasi target baru diputuskan di RB-001/RB-006.
Belum ada deployment produksi.
