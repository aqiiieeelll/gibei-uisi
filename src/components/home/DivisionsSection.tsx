import { Icon, type IconName } from '@/components/site/Icon';

const divisions: { icon: IconName; title: string; description: string }[] = [
  {
    icon: 'pen',
    title: 'Secretary',
    description:
      'Pengelolaan administrasi kelembagaan, persuratan resmi, dan dokumentasi tata kelola internal.',
  },
  {
    icon: 'wallet',
    title: 'Treasurer',
    description:
      'Manajemen perbendaharaan, anggaran operasional kegiatan, dan akuntabilitas keuangan organisasi.',
  },
  {
    icon: 'trend',
    title: 'Strategy',
    description:
      'Penyusunan kurikulum kelas investasi terpadu, watchlist berkala, dan simulasi strategi portofolio.',
  },
  {
    icon: 'search',
    title: 'Research',
    description:
      'Kajian valuasi fundamental emiten, laporan Equity Snapshot, serta panduan riset ilmiah pasar modal.',
  },
  {
    icon: 'badge',
    title: 'Human Resource',
    description:
      'Pelaksanaan rekrutmen terbuka, evaluasi performa, serta pengembangan kepemimpinan anggota.',
  },
  {
    icon: 'handshake',
    title: 'Partnership',
    description:
      'Membangun relasi kemitraan strategis dengan IDX, sekuritas anggota bursa, dan sponsor.',
  },
  {
    icon: 'calendar',
    title: 'Event Organizer',
    description:
      'Perencanaan dan eksekusi seminar, workshop SPM, dan kompetisi pasar modal tingkat nasional.',
  },
  {
    icon: 'message',
    title: 'Media Communication',
    description:
      'Produksi infografis edukasi, publikasi media sosial, dan penyampaian informasi kepada publik.',
  },
];

export function DivisionsSection() {
  return (
    <section
      className="section section-tinted"
      id="divisi"
      aria-labelledby="divisions-title"
      tabIndex={-1}
    >
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Struktur Penggerak</p>
          <h2 id="divisions-title">8 Divisi, Satu Tujuan Bersama</h2>
          <p>
            Setiap divisi saling berkolaborasi menjaga kualitas edukasi, manajemen profesional,
            serta jangkauan publik organisasi.
          </p>
        </div>
        <div className="divisions-grid">
          {divisions.map((division) => (
            <article
              className={`division-card${division.title === 'Strategy' ? ' division-highlight' : ''}`}
              key={division.title}
            >
              <span className="icon-box icon-box-subtle">
                <Icon name={division.icon} />
              </span>
              <h3>{division.title}</h3>
              <p>{division.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
