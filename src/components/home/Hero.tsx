import { Icon } from '@/components/site/Icon';

const statistics = [['1.200+', 'Mahasiswa Terliterasi'], ['8 Divisi', 'Struktur Penggerak'], ['40+', 'Riset & Publikasi'], ['100%', 'Mitra BEI']];

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-content">
        <p className="eyebrow hero-eyebrow"><span className="status-dot" />Galeri Investasi BEI <span className="eyebrow-divider">·</span> Universitas Internasional Semen Indonesia</p>
        <h1 id="hero-title">Edukasi &amp; Literasi Pasar Modal Terpercaya untuk <span>Generasi Muda</span></h1>
        <p className="hero-description">Membentuk investor muda yang analitis, cerdas, dan beretika melalui ekosistem pembelajaran bursa yang aplikatif di lingkungan kampus UISI.</p>
        <div className="hero-actions"><a className="button button-primary" href="#publikasi">Jelajahi Edukasi &amp; Riset <Icon name="arrow" /></a><a className="button button-secondary" href="#tentang">Tentang Organisasi</a></div>
        <p className="sample-caption" id="statistics-note">Statistik ilustrasi · data contoh untuk pratinjau</p>
        <dl className="statistics" aria-describedby="statistics-note">
          {statistics.map(([value, label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>
      </div>
    </section>
  );
}
