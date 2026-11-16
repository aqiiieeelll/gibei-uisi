import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';

// Local planning export only. This script never calls GitHub or changes app data.
const outputDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(outputDir, '../..');
const read = (relative) => fs.readFileSync(path.join(root, relative), 'utf8');
const write = (name, text) => fs.writeFileSync(path.join(outputDir, name), text, 'utf8');
const revision = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim();
const repository = 'https://github.com/silkiy/gibei-uisi';
const projectUrl = 'https://github.com/users/silkiy/projects/5/views/1';
const raw = read('tasks/todo.md');
const headings = [...raw.matchAll(/^(#{2,4}) (.+)\r?$/gm)];
const lineAt = (offset) => raw.slice(0, offset).split('\n').length;
const sourceUrl = (file, line) => `${repository}/blob/${revision}/${file}${line ? '#L' + line : ''}`;

function absoluteLinks(markdown) {
  return markdown.replace(/\]\(([^)]+)\)/g, (match, target) => {
    if (/^(https?:|mailto:|#)/i.test(target)) return match;
    const [file, anchor] = target.split('#');
    const resolved = path.posix.normalize(path.posix.join('tasks', file.replaceAll('\\', '/')));
    return `](${sourceUrl(resolved)}${anchor ? '#' + anchor : ''})`;
  });
}

const historicalNote = 'Status Done merupakan migrasi riwayat: selesai secara teknis untuk demo localhost berdasarkan konsolidasi QA 2 November 2026. Bukan pengujian ulang 15 November 2026, penerimaan pemilik, validasi konten resmi, atau kesiapan produksi.';
let phase = '';
const legacy = [];
for (let index = 0; index < headings.length; index++) {
  const heading = headings[index];
  if (heading[1] === '##' && /^Fase /.test(heading[2])) phase = heading[2];
  const task = heading[2].match(/^(T\d{3})$/);
  const checkpoint = heading[2].match(/^(CP-\d{2})\s*[—–-]\s*setelah (T\d{3})/);
  if (!task && !checkpoint) continue;
  const id = (task || checkpoint)[1];
  const originalBody = raw.slice(heading.index + heading[0].length, headings[index + 1]?.index ?? raw.length).trim();
  const title = task ? originalBody.match(/^- \[[xX]\] \*\*(.+?)\*\*/m)?.[1] : `Checkpoint setelah ${checkpoint[2]}`;
  if (!title || /- \[ \]/.test(originalBody)) throw new Error(`Historical task needs review: ${id}`);
  const dependencies = task
    ? [...new Set((originalBody.match(/\*\*Dependensi:\*\* ([^\r\n]+)/)?.[1] ?? '').match(/T\d{3}/g) ?? [])]
    : [checkpoint[2]];
  const source = { file: 'tasks/todo.md', line: lineAt(heading.index), revision };
  source.url = sourceUrl(source.file, source.line);
  const withoutTitle = task ? originalBody.replace(/^- \[[xX]\] \*\*.+?\*\*\s*\r?\n/m, '').trim() : originalBody;
  const supplement = id === 'CP-15'
    ? `\n\n**Bukti tambahan dari pengantar Fase D:** catatan penutupan QA pada [sumber](${sourceUrl('tasks/todo.md', 1029)}) dan [laporan perbaikan](${sourceUrl('docs/qa/CP01-CP15-fixes.md')}). QA-01–QA-03 sudah diperbaiki dan diverifikasi ulang; catatan fase lengkap juga disimpan pada metadata manifest.`
    : '';
  const body = `**Task ID:** ${id}\n**Workstream:** ${task ? 'Implementasi MVP' : 'Checkpoint MVP'}\n**Fase:** ${phase}\n**Status awal:** Done (historis localhost)\n\n${historicalNote}\n\n[Sumber task dan bukti historis](${source.url})\n\n${absoluteLinks(withoutTitle)}${supplement}`;
  legacy.push({
    id, title, description: originalBody.match(/\*\*Hasil:\*\* ([^\r\n]+)/)?.[1] ?? title,
    workstream: task ? 'Implementasi MVP' : 'Checkpoint MVP', phase, status: 'Done', priority: null,
    size: originalBody.match(/\*\*Ukuran:\*\* ([SM])/)?.[1] ?? 'S', dependencies,
    prd: originalBody.match(/\*\*Acuan PRD:\*\* ([^\r\n]+)/)?.[1]?.trim() ?? '§14–16; checkpoint historis',
    historical: true,
    statusEvidence: { date: '2026-11-02', scope: 'Demo localhost; bukti historis, belum diuji ulang saat pembuatan Kanban', finalReport: sourceUrl('docs/reports/T063.md') },
    source, originalBody, body,
    github: { issueNumber: null, issueUrl: null, projectItemId: null, published: false },
  });
}

const inputNames = ['ui-cards.json', 'operations-cards.json', 'checkpoint-cards.json'];
const planned = inputNames.flatMap((name) => JSON.parse(fs.readFileSync(path.join(outputDir, name), 'utf8')));
const cards = [...legacy, ...planned.map((card) => {
  const criteria = card.acceptanceCriteria.map((text) => `- [ ] ${text}`).join('\n');
  const files = (card.files ?? []).map((file) => `- \`${file}\``).join('\n');
  const dependencies = card.dependencies.length ? card.dependencies.join(', ') : 'Tidak ada';
  const body = `**Task ID:** ${card.id}\n**Workstream:** ${card.workstream}\n**Fase:** ${card.phase}\n**Status awal:** ${card.status}\n**Prioritas:** ${card.priority}\n**Ukuran:** ${card.size}\n**Acuan PRD:** ${card.prd}\n**Dependensi:** ${dependencies}\n\n${card.description}\n\n### Kriteria selesai\n\n${criteria}\n\n### Verifikasi\n\n${card.verification}\n\n### File/area terkait\n\n${files || 'Tentukan saat task siap dikerjakan.'}\n\n### Bukti dan hasil\n\nBelum dikerjakan/disetujui. Tautkan hasil aktual sebelum memindahkan ke Done.\n\n[Sumber PRD](${sourceUrl('docs/PRD-v1.1.md')})`;
  return { ...card, historical: false, body, github: { issueNumber: null, issueUrl: null, projectItemId: null, published: false } };
})];

const ids = new Set(cards.map((card) => card.id));
if (ids.size !== cards.length) throw new Error('Duplicate task ID');
if (legacy.filter((card) => /^T\d/.test(card.id)).length !== 63 || legacy.filter((card) => /^CP-/.test(card.id)).length !== 23) throw new Error('Historical coverage changed');
for (const card of cards) {
  for (const dependency of card.dependencies) if (!ids.has(dependency)) throw new Error(`${card.id}: missing ${dependency}`);
  if (!['Backlog', 'Ready', 'In progress', 'In review', 'Done'].includes(card.status)) throw new Error(`Invalid status: ${card.id}`);
  if (!card.historical && (card.acceptanceCriteria.length < 2 || card.acceptanceCriteria.length > 3 || !card.verification)) throw new Error(`Incomplete task: ${card.id}`);
  if (card.github.published || card.github.issueUrl) throw new Error('Local export must not claim publication');
}
const visiting = new Set();
const visited = new Set();
const byId = new Map(cards.map((card) => [card.id, card]));
function visit(id) {
  if (visiting.has(id)) throw new Error(`Dependency cycle at ${id}`);
  if (visited.has(id)) return;
  visiting.add(id);
  byId.get(id).dependencies.forEach(visit);
  visiting.delete(id);
  visited.add(id);
}
cards.forEach((card) => visit(card.id));
const ready = cards.filter((card) => card.status === 'Ready');
for (const card of ready) if (card.dependencies.some((id) => byId.get(id).status !== 'Done')) throw new Error(`Ready task has unfinished dependency: ${card.id}`);
const counts = (field) => Object.fromEntries([...new Set(cards.map((card) => card[field]))].map((value) => [value, cards.filter((card) => card[field] === value).length]));
const phaseNotes = headings.flatMap((heading, index) => {
  if (heading[1] !== '##') return [];
  return [{ heading: heading[2], line: lineAt(heading.index), text: raw.slice(heading.index + heading[0].length, headings[index + 1]?.index ?? raw.length).trim() }];
});
const syncFile = path.join(outputDir, 'sync-results.json');
const syncResults = fs.existsSync(syncFile) ? JSON.parse(fs.readFileSync(syncFile, 'utf8')) : null;
const mappedIds = new Set();
const mappedItemIds = new Set();
for (const item of syncResults?.items ?? []) {
  if (!byId.has(item.id) || mappedIds.has(item.id) || !item.itemId || !item.url || mappedItemIds.has(String(item.itemId))) throw new Error(`Invalid synchronization mapping: ${item.id}`);
  const itemUrl = new URL(item.url);
  if (itemUrl.origin !== 'https://github.com' || itemUrl.pathname !== new URL(projectUrl).pathname || itemUrl.searchParams.get('itemId') !== String(item.itemId)) throw new Error(`Invalid project item URL: ${item.id}`);
  mappedIds.add(item.id);
  mappedItemIds.add(String(item.itemId));
  byId.get(item.id).github = { issueNumber: null, issueUrl: null, projectItemId: String(item.itemId), projectItemUrl: item.url, bodyVerified: item.bodyVerified === true, published: true };
}
const publishedCount = cards.filter((card) => card.github.published).length;
const verifiedCount = cards.filter((card) => card.github.published && card.github.bodyVerified).length;
const syncComplete = verifiedCount === cards.length;
const syncStatus = syncComplete ? 'complete' : publishedCount ? 'partial' : 'not_started';
const blocker = syncResults?.blocker ?? null;
const connectionNote = syncResults
  ? 'Konektor GitHub tetap memakai DinarPutra1408 dengan akses baca; browser telah diautentikasi sebagai silkiy dan digunakan untuk mengedit Project.'
  : 'Belum ada hasil sinkronisasi yang tercatat. Konektor GitHub memakai DinarPutra1408 dengan akses baca.';
const publicationNote = `**Status publikasi: ${syncComplete ? 'lengkap terverifikasi' : publishedCount ? 'sebagian terverifikasi' : 'belum terverifikasi'}.** ${verifiedCount} dari ${cards.length} kartu memiliki mapping item dan body terverifikasi (${publishedCount} mapping item tercatat). ${connectionNote}${blocker ? ` Catatan hambatan terakhir: ${blocker}` : ''}`;
const manifest = {
  schemaVersion: 1, preparedOn: '2026-11-15', timezone: 'Asia/Jakarta',
  project: { owner: 'silkiy', number: 5, url: projectUrl, name: 'kanban-gibei-uisi', repository: 'silkiy/gibei-uisi' },
  source: { revision, prd: 'docs/PRD-v1.1.md', originalBacklog: 'tasks/todo.md', originalBacklogSha256: createHash('sha256').update(raw).digest('hex'), phaseNotes },
  synchronization: { status: syncStatus, published: syncComplete, remoteWritesPerformed: publishedCount > 0, publishedCount, verifiedCount, remainingUnverified: cards.length - verifiedCount, itemType: syncResults?.itemType ?? 'Project draft item', resultsFile: syncResults ? 'sync-results.json' : null, blocker, pausedByUser: syncResults?.pausedByUser === true, stopReason: syncResults?.stopReason ?? null, attemptedUnverified: syncResults?.attemptedUnverified ?? [], reason: connectionNote, remainingCardState: syncResults?.remainingCardState ?? 'Cocokkan Task ID dengan board sebelum membuat item baru.' },
  statusOptions: ['Backlog', 'Ready', 'In progress', 'In review', 'Done'],
  recommendedFields: ['Task ID', 'Workstream', 'Phase', 'Priority', 'Size'],
  importNotes: [
    'Manifest persiapan untuk API/CLI atau salin manual, bukan format impor bawaan GitHub Projects.',
    'Periksa item existing, gunakan Task ID untuk deduplikasi, lalu catat URL dan ID draft item Project yang benar-benar dibuat pada sync-results.json. Tidak ada issue repository yang disimpulkan dari draft item.',
    'Terbitkan semua kartu terlebih dahulu sebelum mengubah ID dependensi menjadi tautan item, karena ada dependensi ke kartu yang muncul belakangan.',
    'Status Done hanya untuk 86 task/checkpoint historis localhost. Draft item historis tetap menggunakan kolom Done; tugas baru mengikuti status awalnya.',
    'Assignee dan tenggat belum ditetapkan; prioritas null pada historis berarti belum dipetakan, tidak berarti opsional.',
    'Jangan mengunggah bukti izin privat, credential, secret atau media draft ke issue publik.',
    'Pembuatan kartu tidak mengizinkan menjalankan deployment atau mengubah infrastruktur.',
  ],
  summary: { total: cards.length, historicalDone: legacy.length, open: planned.length, byStatus: counts('status'), byWorkstream: counts('workstream') },
  cards,
};
write('legacy-cards.json', JSON.stringify(legacy, null, 2) + '\n');
write('manifest.json', JSON.stringify(manifest, null, 2) + '\n');

const lines = [
  '# Kanban seluruh proyek GIBEI UISI', '',
  '**Arah aktif: rebuild v2 dari nol.** Pemilik mempertahankan Next.js dan mengganti Payload dengan dashboard admin custom. [Rencana rebuild v2](rebuild-v2/README.md) menjadi antrean baru; paket 154 kartu ini dipertahankan sebagai histori v1/redesign dan tidak diteruskan otomatis.', '',
  `Disiapkan 15 November 2026 untuk [GitHub Project #5](${projectUrl}). Acuan: [PRD v1.1](../../docs/PRD-v1.1.md), [backlog implementasi](../todo.md), [audit MVP](../../docs/qa/mvp-acceptance.md), dan [serah terima](../../docs/handover.md).`, '',
  `Paket berisi **${cards.length} kartu**: **${legacy.length} Done historis** dan **${planned.length} pekerjaan/checkpoint lanjutan**. Seluruh fase fondasi, CMS/backend, editorial/media, sebelas modul publik, UI, QA, konten, operasi dan penerimaan tercakup.`, '',
  publicationNote, '',
  ...(syncResults?.pausedByUser ? ['**Progres disimpan atas permintaan pemilik.** Pengisian berikutnya menunggu permintaan melanjutkan. ' + (syncResults.remainingCardState ?? ''), ''] : []),
  '## Kolom dan field', '',
  '`Backlog → Ready → In progress → In review → Done` mengikuti kolom Project yang teramati.', '',
  '| Status | Aturan |', '|---|---|',
  '| Backlog | Belum siap; dependensi, keputusan atau aset wajib masih terbuka. |',
  '| Ready | Hasil dan kriteria jelas; seluruh dependensi sudah Done. |',
  '| In progress | Benar-benar sedang dikerjakan. |',
  '| In review | Hasil tersedia dan menunggu pemeriksaan/keputusan. |',
  '| Done | Kriteria dan verifikasi terbukti; hasil serta lingkungan dicatat. |', '',
  'Field yang disarankan: **Task ID**, **Workstream**, **Phase**, **Priority**, **Size**. Dependensi, acuan PRD, kriteria, verifikasi dan bukti berada pada body kartu. Assignee/tenggat tidak dikarang. Hambatan dicatat di body tanpa menambah kolom status.', '',
  'P0/P1 pada PRD tetap sama-sama wajib untuk MVP. Prioritas kartu baru menunjukkan urutan pekerjaan lanjutan; prioritas historis belum diisi agar tidak mengarang pemetaan baru.', '',
  '## Ringkasan seluruh proyek', '',
  '| Kelompok | Kartu | Status awal |', '|---|---:|---|',
  ...Object.entries(manifest.summary.byWorkstream).map(([group, count]) => `| ${group} | ${count} | ${group.includes('MVP') ? 'Done historis localhost' : 'Lihat kartu'} |`), '',
  'Riwayat T001–T063 serta CP-01–CP-23 menyimpan body dan bukti aslinya, termasuk subtugas T004–T009/T052 serta koreksi QA. Status tersebut mengacu konsolidasi 2 November 2026, bukan pengujian ulang saat penyusunan Kanban. Penerimaan pemilik yang masih terbuka tercatat pada REL-001.', '',
  '## Urutan dan pekerjaan paralel', '',
  '1. Mulai UI-001/UI-003, CT-001 dan OPS-001. REL-001 menunggu peninjauan pemilik terhadap baseline.',
  '2. UI-002–UI-005 menetapkan arah desain; UI-006–UI-009 menyiapkan komponen dan navigasi.',
  '3. UI-010–UI-027 mengganti seluruh kelompok halaman. Modul independen dapat dikerjakan paralel setelah fondasi stabil; penyesuaian shared CSS/komponen dikoordinasikan.',
  '4. CT-002–CT-012 memvalidasi konten dan aset resmi. Keputusan empty state diperbolehkan secara eksplisit tanpa mengklaim contoh sebagai fakta.',
  '5. UI-028–UI-032 menjalankan audit dan penerimaan visual. OPS-002–OPS-011 menyiapkan keamanan, staging, migrasi, backup/restore, recovery serta operasi sesuai dependensi.',
  '6. REL-002/REL-003 memeriksa seluruh produk dan UAT. REL-004 menilai kesiapan serta keputusan rilis; OPS-012 baru dapat dilaksanakan setelah otorisasi eksplisit.',
  '7. REL-005/REL-006 memeriksa pascarilis dan menyerahkan operasi.', '',
  'Dependensi persis pada manifest menjadi acuan. Enam GATE tambahan memeriksa desain, shell, organisasi, publikasi, CTA waktu dan kelengkapan halaman. REL-002/REL-004 menjadi checkpoint gabungan konten serta kesiapan produksi.', '',
  '## Ketentuan verifikasi', '',
  '- UI: 320/375/768/1024/1440 px, tanpa horizontal scroll halaman pada 320 px; keyboard, fokus, zoom 200%, reduced motion dan target WCAG 2.2 AA.',
  '- Performa: build production, dataset tetap, mobile default Lighthouse, warm-up dan tiga pengukuran; median minimal 85 untuk beranda, daftar artikel, satu detail artikel dan kegiatan.',
  '- Regresi: FR-01–FR-11, AC-01–AC-29, workflow Admin/Media, versi terbit, draft/media privat, withdrawal, SEO, izin logo, disclaimer serta CTA waktu.',
  '- Dokumen dan keputusan: tinjau sumber/hasil aktual; tidak perlu build aplikasi untuk perubahan dokumen saja.',
  '- Produksi: bukti lingkungan target, restore nyata, operator dan keputusan rilis dicatat tersendiri. Kartu rencana bukan izin eksekusi.', '',
  '## Indeks kartu', '',
  '| ID | Task | Status awal | Dependensi |', '|---|---|---|---|',
  ...cards.map((card) => `| ${card.id} | [${card.title}](${card.github.projectItemUrl || (card.historical ? card.source.url : `backlog.md#${card.id.toLowerCase()}`)}) | ${card.status}${card.historical ? ' (historis)' : ''} | ${card.dependencies.join(', ') || '—'} |`), '',
  '## Paket file dan sinkronisasi', '',
  '- [backlog.md](backlog.md): uraian lengkap seluruh kartu lanjutan.',
  '- [manifest.json](manifest.json): seluruh kartu dengan body siap issue, status, dependensi dan sumber.',
  '- [legacy-cards.json](legacy-cards.json): ekspor lengkap 63 task dan 23 checkpoint historis.',
  ...(syncResults ? ['- [sync-results.json](sync-results.json): mapping draft item dan bukti sinkronisasi yang teramati.'] : []),
  '- `ui-cards.json`, `operations-cards.json`, `checkpoint-cards.json`: sumber data kartu lanjutan.',
  '- [build-manifest.mjs](build-manifest.mjs): generator lokal. Jalankan `node tasks/github-project-5/build-manifest.mjs` dari repository; tidak menghubungi GitHub.', '',
  'Manifest ini bukan format impor bawaan GitHub Projects. Periksa item existing dan cocokkan Task ID agar tidak menggandakan kartu, termasuk kartu yang mungkin sudah dibuat tetapi belum tercatat ketika koneksi terganggu. Buat/reuse draft item pada Project #5, atur status, lalu catat URL, item ID dan hasil verifikasi body pada sync-results.json. Terbitkan seluruh kartu sebelum mengganti dependensi ID menjadi tautan item; beberapa dependensi menunjuk kartu yang muncul belakangan.', '',
  'Generator membaca sync-results.json bila tersedia dan mempertahankan mapping yang tercatat pada ekspor. File tersebut tidak ditulis oleh generator; simpan hasil sinkronisasi aktual di sana sebelum regenerasi. Generator tidak menghubungi atau mengubah GitHub.', '',
  '## Batas scope', '',
  'Rencana meliputi seluruh kebutuhan PRD dan kelanjutan produksi yang masih terbuka. Newsletter, analytics, multibahasa, akun pengunjung/anggota, portal internal, harga saham real-time, trading, pembayaran dan integrasi Instagram otomatis tetap di luar komitmen MVP; daftar §19 merupakan ide pengembangan berikutnya.', '',
  'Histori tasks/plan.md dan tasks/todo.md dipertahankan. GitHub menjadi tempat perubahan status aktif bagi kartu yang telah tersinkron; file ekspor ini merupakan snapshot rencana dan hasil sinkronisasi terakhir yang tercatat.', '',
];
write('README.md', lines.join('\n'));
write('backlog.md', [
  '# Task lanjutan untuk Kanban seluruh proyek', '',
  '[Kembali ke rencana dan indeks seluruh proyek](README.md). Status di bawah merupakan rencana awal; tautan GitHub ditampilkan bila mapping aktual tersedia. Riwayat 86 kartu MVP tersedia pada manifest dan tasks/todo.md.', '',
  publicationNote, '',
  ...planned.flatMap((card) => [`## ${card.id}`, '', `**${card.title}**`, '', ...(byId.get(card.id).github.projectItemUrl ? [`[Buka kartu GitHub](${byId.get(card.id).github.projectItemUrl})`, ''] : []), byId.get(card.id).body, '']),
].join('\n'));
console.log(JSON.stringify({ ...manifest.summary, synchronization: { status: syncStatus, publishedCount, verifiedCount }, ready: ready.map((card) => card.id), validation: 'IDs, references, historical coverage, acceptance criteria, Ready dependencies, acyclic graph and recorded item mappings verified. Generator did not contact GitHub.' }, null, 2));
