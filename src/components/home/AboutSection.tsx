import { Icon, type IconName } from '@/components/site/Icon';

const pillars: { icon: IconName; title: string; description: string }[] = [
  {
    icon: 'book',
    title: 'Sekolah Pasar Modal',
    description:
      'Pelatihan kurikulum resmi berjenjang bersama IDX dan sekuritas mitra untuk memahami mekanisme instrumen saham dan reksa dana.',
  },
  {
    icon: 'chart',
    title: 'Riset & Analisis Finansial',
    description:
      'Penyusunan kajian fundamental, analisis laporan keuangan emiten, dan snapshot makroekonomi secara berkala dan independen.',
  },
  {
    icon: 'trophy',
    title: 'Inkubasi Prestasi & Karier',
    description:
      'Pembinaan delegasi kompetisi analisis saham tingkat nasional serta persiapan profesional menuju industri keuangan modern.',
  },
];

export function AboutSection() {
  return (
    <section className="section" id="tentang" aria-labelledby="about-title" tabIndex={-1}>
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Tentang GIBEI UISI</p>
          <h2 id="about-title">Jembatan Literasi Finansial di Lingkungan Kampus</h2>
          <p>
            Berlokasi di Kampus B UISI Kompleks PT Semen Indonesia Tbk Gresik, GIBEI UISI
            menyediakan wadah pembelajaran pasar modal, riset pasar objektif, dan inkubasi talenta
            industri finansial.
          </p>
        </div>
        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <article className="pillar-card" key={pillar.title}>
              <span className="icon-box">
                <Icon name={pillar.icon} />
              </span>
              <p className="eyebrow">Pilar 0{index + 1}</p>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
