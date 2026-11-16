import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Local planning export only; this utility never contacts GitHub or app data.
const directory = path.dirname(fileURLToPath(import.meta.url));
const readJson = (name) => JSON.parse(fs.readFileSync(path.join(directory, name), 'utf8'));
const write = (name, value) => fs.writeFileSync(path.join(directory, name), value, 'utf8');
const projectUrl = 'https://github.com/users/silkiy/projects/5/views/6';
const cards = readJson('cards.json');
if (!Array.isArray(cards) || !cards.length) throw new Error('cards.json must contain task cards');
const byId = new Map(cards.map((card) => [card.id, card]));
if (byId.size !== cards.length) throw new Error('Duplicate rebuild Task ID');
for (const card of cards) {
  if (!/^RB-\d{3}$/.test(card.id)) throw new Error(`Invalid rebuild ID: ${card.id}`);
  if (!['task', 'epic'].includes(card.kind)) throw new Error(`Invalid kind: ${card.id}`);
  if (!['Backlog', 'Ready', 'In progress', 'In review'].includes(card.status)) throw new Error(`Rebuild cannot inherit Done: ${card.id}`);
  if (!Array.isArray(card.dependencies) || new Set(card.dependencies).size !== card.dependencies.length) throw new Error(`Invalid dependencies: ${card.id}`);
  for (const dependency of card.dependencies) {
    if (!/^RB-\d{3}$/.test(dependency) || !byId.has(dependency)) throw new Error(`Missing or legacy dependency: ${card.id} -> ${dependency}`);
  }
  if (!Array.isArray(card.acceptanceCriteria) || card.acceptanceCriteria.length < 2 || card.acceptanceCriteria.length > 3 || card.acceptanceCriteria.some((criterion) => typeof criterion !== 'string' || !criterion.trim())) throw new Error(`Expected 2-3 acceptance criteria: ${card.id}`);
  if (!card.title || !card.phase || !card.verification) throw new Error(`Incomplete card: ${card.id}`);
  if (card.status === 'Ready' && card.dependencies.length) throw new Error(`New Ready task still has unfinished dependencies: ${card.id}`);
}

const visiting = new Set();
const visited = new Set();
const ordered = [];
function visit(id) {
  if (visiting.has(id)) throw new Error(`Dependency cycle at ${id}`);
  if (visited.has(id)) return;
  visiting.add(id);
  byId.get(id).dependencies.forEach(visit);
  visiting.delete(id);
  visited.add(id);
  ordered.push(byId.get(id));
}
cards.forEach((card) => visit(card.id));

const syncPath = path.join(directory, 'sync-results.json');
const sync = fs.existsSync(syncPath) ? readJson('sync-results.json') : null;
const mappings = new Map();
const itemIds = new Set();
for (const item of sync?.items ?? []) {
  if (!byId.has(item.id) || mappings.has(item.id) || !/^\d+$/.test(String(item.itemId)) || itemIds.has(String(item.itemId))) throw new Error(`Invalid synchronization record: ${item.id}`);
  const url = new URL(item.url);
  if (url.origin !== 'https://github.com' || !/^\/users\/silkiy\/projects\/5\/views\/\d+$/.test(url.pathname) || url.searchParams.get('itemId') !== String(item.itemId)) throw new Error(`Invalid project item URL: ${item.id}`);
  mappings.set(item.id, item);
  itemIds.add(String(item.itemId));
}

const prdUrl = 'https://github.com/silkiy/gibei-uisi/blob/main/docs/PRD-v1.1.md';
const exportedCards = ordered.map((card, index) => {
  const item = mappings.get(card.id);
  const dependencies = card.dependencies.join(', ') || 'Tidak ada';
  const body = [
    `**Task ID:** ${card.id}`, `**Jenis:** ${card.kind}`, `**Fase:** ${card.phase}`,
    `**Status awal:** ${card.status}`, `**Prioritas:** ${card.priority ?? 'Belum ditetapkan'}`,
    `**Ukuran:** ${card.kind === 'epic' ? 'Epic; beberapa sesi, dipecah pada kartu anak' : card.size ?? 'Tentukan sebelum implementasi'}`,
    `**Dependensi:** ${dependencies}`, '',
    'Rebuild v2 merupakan implementasi baru pada branch baru: Next.js tetap; Payload diganti dashboard admin custom. Dua role Admin/Media dan workflow draft → review → publish dibangun ulang. Status Done sistem lama tidak meluluskan task ini.', '',
    ...(card.implementationNote ? [`**Catatan implementasi:** ${card.implementationNote}`, ''] : []),
    '### Kriteria selesai', '', ...card.acceptanceCriteria.map((criterion) => `- [ ] ${criterion}`), '',
    '### Verifikasi', '', card.verification, '',
    '### Bukti dan hasil', '', 'Belum dikerjakan. Tautkan bukti implementasi, pemeriksaan dan keputusan aktual sebelum memindahkan ke Done.', '',
    '**Batas pelaksanaan:** kartu ini tidak menjalankan penghapusan kode/data atau deployment. Branch Git tidak memisahkan database/media; gunakan target rebuild terisolasi sesuai task fondasi.', '',
    `**Sumber keputusan:** ${card.source ?? 'Keputusan pemilik 15 November 2026; docs/rebuild-v2.md.'}`,
    `[Kebutuhan fungsional dan penerimaan PRD](${prdUrl})`,
  ].join('\n');
  return {
    ...card, executionOrder: index + 1, body,
    github: {
      itemType: 'Project draft item', projectItemId: item ? String(item.itemId) : null,
      projectItemUrl: item?.url ?? null, bodyVerified: item?.bodyVerified === true,
      published: Boolean(item), issueNumber: null, issueUrl: null,
    },
  };
});
const publishedCount = exportedCards.filter((card) => card.github.published).length;
const verifiedCount = exportedCards.filter((card) => card.github.bodyVerified).length;
const complete = verifiedCount === cards.length;
const syncStatus = complete ? 'complete' : publishedCount ? 'partial' : 'not_started';
const manifest = {
  schemaVersion: 1, preparedOn: '2026-11-15', timezone: 'Asia/Jakarta',
  project: { owner: 'silkiy', number: 5, view: 6, url: projectUrl, filter: 'RB-', repository: 'silkiy/gibei-uisi' },
  scope: {
    version: 'Rebuild v2', source: ['docs/rebuild-v2.md', 'docs/PRD-v1.1.md'],
    decisions: ['Mulai dari awal pada branch baru.', 'Next.js tetap; Payload diganti dashboard admin custom.', 'Admin/Media dan draft → review → publish dibangun ulang.'],
    previousPlan: '../manifest.json', previousPlanRole: 'Histori v1/redesign; bukan antrean eksekusi utama atau bukti selesai v2.',
  },
  synchronization: {
    status: syncStatus, complete, publishedCount, verifiedCount, remainingUnverified: cards.length - verifiedCount,
    remoteWritesRecorded: publishedCount > 0, resultsFile: sync ? 'sync-results.json' : null,
    blocker: sync?.blocker ?? null, pausedByUser: sync?.pausedByUser === true,
    stopReason: sync?.stopReason ?? null, attemptedUnverified: sync?.attemptedUnverified ?? [],
    note: 'Generator hanya membaca catatan sinkronisasi lokal; tidak menghubungi atau mengubah GitHub.',
  },
  summary: {
    total: cards.length, epics: cards.filter((card) => card.kind === 'epic').length,
    tasks: cards.filter((card) => card.kind === 'task').length, inheritedDone: 0,
    byStatus: Object.fromEntries([...new Set(cards.map((card) => card.status))].map((status) => [status, cards.filter((card) => card.status === status).length])),
  },
  cards: exportedCards,
};
write('manifest.json', JSON.stringify(manifest, null, 2) + '\n');

const phases = [...new Set(ordered.map((card) => card.phase))];
const publication = complete
  ? `Seluruh **${verifiedCount} kartu** memiliki mapping Project dan body terverifikasi.`
  : `**${verifiedCount} dari ${cards.length} kartu** memiliki mapping Project dan body terverifikasi; ${publishedCount} mapping item tercatat. ${cards.length - verifiedCount} kartu belum terverifikasi lengkap.`;
const readme = [
  '# Kanban rebuild v2 — dashboard admin custom', '',
  `Disiapkan 15 November 2026 untuk [view Rebuild v2 pada GitHub Project #5](${projectUrl}), dengan filter \`RB-\`. Acuan: [perubahan arah rebuild](../../../docs/rebuild-v2.md) dan [PRD v1.1](../../../docs/PRD-v1.1.md).`, '',
  `Paket memuat **${manifest.summary.total} kartu**: **${manifest.summary.epics} epic** dan **${manifest.summary.tasks} task baru**. Next.js tetap digunakan; dashboard, API, validasi dan domain admin dibuat sendiri tanpa Payload. Admin/Media serta draft → review → publish tetap dipakai dan diuji ulang.`, '',
  '**Seluruh task rebuild belum selesai.** Status Done v1 tidak diwariskan. [Paket 154 kartu terdahulu](../README.md) disimpan sebagai histori; pekerjaan aktif v2 menggunakan ID RB dan dependensi RB saja.', '',
  `**Status sinkronisasi: ${syncStatus}.** ${publication} Generator hanya membaca mapping yang disimpan; ketiadaan mapping tidak membuktikan bahwa suatu judul belum ada di GitHub.`, '',
  ...(sync?.blocker ? [`**Hambatan terakhir:** ${sync.blocker}`, ''] : []),
  ...(sync?.pausedByUser ? ['**Progres disimpan atas permintaan pemilik.** Pengisian dilanjutkan setelah ada permintaan melanjutkan.', ''] : []),
  '## Batas perubahan', '',
  '- Tahap ini menyiapkan rencana/task. Tidak ada branch yang dibuat, kode/data yang dihapus, implementasi aplikasi atau deployment oleh generator.',
  '- RB-001 menyiapkan branch baru, titik pemulihan dan isolasi target. Branch Git tidak melindungi database/media; data lama tidak direset otomatis.',
  '- RB-002 memilih library auth/session, rich text, akses database/migrasi dan storage berdasarkan dokumentasi resmi. Dashboard custom tidak berarti membuat kriptografi sendiri.',
  '- Setiap slice modul mencakup model/migrasi baru, form admin, API/validasi dan pembacaan publik yang diperlukan. Schema Payload lama tidak menjadi ketergantungan diam-diam.',
  '- Kepatuhan PRD terhadap versi publik, review, media privat, audit, disclaimer, izin logo, waktu WIB serta aktivasi tunggal dibuktikan ulang.',
  '- Penerimaan pemilik dan otorisasi deployment merupakan keputusan baru; tidak disimpulkan dari pembuatan kartu atau kelulusan teknis v1.', '',
  '## Kolom dan ukuran task', '',
  '`Backlog → Ready → In progress → In review → Done`. Status di indeks adalah status awal rencana, bukan klaim pelaksanaan. Assignee dan deadline belum ditetapkan.', '',
  'S/M merupakan perkiraan satu sesi kecil. Pecah task sebelum implementasi bila lingkup aktual melampaui sekitar lima berkas atau mencakup beberapa jalur independen. Epic RB-000 melacak keseluruhan hasil dan bukan satu sesi implementasi.', '',
  '## Kelompok pekerjaan', '',
  '| Fase | Jumlah kartu |', '|---|---:|',
  ...phases.map((phase) => `| ${phase} | ${ordered.filter((card) => card.phase === phase).length} |`), '',
  '## Urutan implementasi', '',
  'Indeks disusun menurut dependensi, sehingga RB-060 dapat muncul sebelum RB-025. Mulai RB-001, tetapkan arsitektur/desain, buktikan satu alur artikel tanpa Payload pada RB-026, lalu perluas ke seluruh modul dan lanjutkan QA/UAT serta persiapan produksi.', '',
  '| Urutan | ID | Task | Status awal | Ukuran | Dependensi | Sinkronisasi |', '|---:|---|---|---|---|---|---|',
  ...exportedCards.map((card) => `| ${card.executionOrder} | ${card.id} | [${card.title}](${card.github.projectItemUrl ?? '#' + card.id.toLowerCase()}) | ${card.status} | ${card.kind === 'epic' ? 'Epic' : card.size ?? '—'} | ${card.dependencies.join(', ') || '—'} | ${card.github.bodyVerified ? 'Body terverifikasi' : card.github.published ? 'Item tercatat; body belum terverifikasi' : 'Belum tercatat'} |`), '',
  '## Kriteria kelulusan lintas sistem', '',
  '- Seluruh 11 modul dan dua role mempunyai bukti baru pada dashboard, API dan website publik; FR-01–FR-11, AC-01–AC-29 dan DoD ditelusuri.',
  '- Uji 320/375/768/1024/1440 px, keyboard, fokus, zoom 200%, reduced motion dan target WCAG 2.2 AA pada publik/admin.',
  '- Lighthouse mobile mengikuti production build/dataset tetap, warm-up lalu tiga run; median Performance minimal 85 pada beranda, daftar artikel, satu detail artikel dan kegiatan.',
  '- Clean start, migrasi, seed ulang, restart, backup/restore, dokumentasi dan UAT dibuktikan ulang. Produksi memerlukan kesiapan target serta otorisasi rilis.', '',
  '## File dan pembaruan', '',
  '- [cards.json](cards.json): sumber task baru; simpan keputusan scope pada [docs/rebuild-v2.md](../../../docs/rebuild-v2.md).',
  '- [manifest.json](manifest.json): metadata, urutan, dependensi serta body siap kartu untuk seluruh rencana.',
  ...(sync ? ['- [sync-results.json](sync-results.json): mapping ID/URL draft item serta hasil verifikasi aktual.'] : []),
  '- [build-manifest.mjs](build-manifest.mjs): generator lokal. Jalankan `node tasks/github-project-5/rebuild-v2/build-manifest.mjs` dari repository.', '',
  'Generator tidak menulis cards.json atau sync-results.json dan tidak menghubungi GitHub. Untuk melanjutkan publikasi, cocokkan Task ID dengan item existing terlebih dahulu; jangan membuat ulang judul yang sudah ada hanya karena mapping lokal belum lengkap. Catat ID/URL dan bodyVerified berdasarkan hasil yang benar-benar diamati, lalu regenerasi. Draft item Project tidak dianggap sebagai issue repository.', '',
  '## Rincian kartu', '',
  ...exportedCards.flatMap((card) => [`### ${card.id}`, '', `**${card.title}**`, '', ...(card.github.projectItemUrl ? [`[Buka item GitHub](${card.github.projectItemUrl})`, ''] : []), card.body, '']),
];
write('README.md', readme.join('\n'));
console.log(JSON.stringify({ ...manifest.summary, synchronization: manifest.synchronization.status, publishedCount, verifiedCount, validation: 'Unique RB IDs, RB-only dependencies, acyclic graph, zero inherited Done, acceptance criteria and item mappings verified. No remote calls.' }, null, 2));
