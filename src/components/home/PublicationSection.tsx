import { Icon } from '@/components/site/Icon';

const publications = [
  {
    category: 'Equity Snapshot',
    date: '28 Okt 2026',
    dateTime: '2026-10-28',
    title: 'Evaluasi Kinerja & Valuasi Fundamental Emiten Semen (IDX: SMGR)',
    description:
      'Analisis efisiensi biaya operasional, utilisasi kapasitas produksi terintegrasi di Jawa Timur, serta rasio valuasi PBV dan PER industri.',
    author: 'Tim Divisi Riset',
    action: 'Baca Riset',
  },
  {
    category: 'Modul Pemula',
    date: '24 Okt 2026',
    dateTime: '2026-10-24',
    title: 'Mengenal Mekanisme Kliring KPEI dan Penyimpanan Aset KSEI',
    description:
      'Panduan dasar untuk investor pemula mengenai alur penyelesaian transaksi bursa T+2, keamanan rekening SID, dan struktur SRO pasar modal.',
    author: 'Divisi Edukasi',
    action: 'Baca Modul',
  },
  {
    category: 'Metodologi',
    date: '19 Okt 2026',
    dateTime: '2026-10-19',
    title: 'Screening Saham Sektor Konsumer Berdasarkan ROE dan Operating Cashflow',
    description:
      'Kriteria kuantitatif menyaring emiten Consumer Non-Cyclical berkinerja defensif dengan daya tahan harga dan struktur modal yang sehat.',
    author: 'FEB UISI Research',
    action: 'Unduh PDF',
  },
];

export function PublicationSection() {
  return (
    <section className="section" id="publikasi" aria-labelledby="publications-title" tabIndex={-1}>
      <div className="container">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">Publikasi &amp; Analisis</p>
            <h2 id="publications-title">Riset Terkini Mahasiswa</h2>
          </div>
          <span className="preview-label">Pratinjau konten</span>
        </div>
        <p className="section-note" id="publication-note">
          Contoh publikasi untuk pratinjau. Materi resmi akan tersedia setelah diterbitkan.
        </p>
        <div className="publications-grid">
          {publications.map((publication) => (
            <article className="publication-card" key={publication.title}>
              <div className="publication-meta">
                <span className="tag">{publication.category}</span>
                <time dateTime={publication.dateTime}>{publication.date}</time>
              </div>
              <h3>{publication.title}</h3>
              <p>{publication.description}</p>
              <div className="publication-footer">
                <span>{publication.author}</span>
                <button type="button" disabled aria-describedby="publication-note">
                  {publication.action}
                  <Icon name="arrow" />
                </button>
              </div>
            </article>
          ))}
        </div>
        <p className="disclaimer" id="disclaimer" tabIndex={-1}>
          Seluruh materi riset bersifat edukatif untuk kebutuhan akademis civitas UISI dan bukan
          merupakan anjuran transaksi investasi.
        </p>
      </div>
    </section>
  );
}
