import { Icon, type IconName } from '@/components/site/Icon';

const events: {
  label: string;
  title: string;
  description: string;
  details: [IconName, string][];
  audience: string;
  action: string;
}[] = [
  {
    label: 'Contoh seminar',
    title: 'Capital Market Summit 2026: Strategi Portofolio Hadapi Dinamika Global',
    description:
      'Seminar terpadu mengulas arah suku bunga acuan, prospek sektor industri dasar, dan manajemen alokasi aset menyambut tahun baru.',
    details: [
      ['calendar', 'Sabtu, 28 Nov 2026'],
      ['clock', '09.00 – 12.30 WIB'],
      ['pin', 'Auditorium Kampus B'],
      ['badge', 'E-Sertifikat'],
    ],
    audience: 'Jadwal ilustrasi',
    action: 'Daftar Seminar',
  },
  {
    label: 'Contoh pelatihan',
    title: 'Sekolah Pasar Modal (SPM) Level 1 & 2 Mitra Phintraco Sekuritas',
    description:
      'Workshop interaktif 4 sesi mempelajari mekanisme pembukaan rekening efek saham, dasar charting teknikal, dan evaluasi rasio keuangan.',
    details: [
      ['calendar', 'Batch IV · Des 2026'],
      ['clock', '4 Sesi (16 Jam)'],
      ['devices', 'Hybrid (Lab & Daring)'],
      ['users', 'Civitas Akademika UISI'],
    ],
    audience: 'Informasi akan diperbarui',
    action: 'Registrasi SPM',
  },
];

const partners: [IconName, string][] = [
  ['building', 'PT Bursa Efek Indonesia'],
  ['building', 'IDX Jawa Timur'],
  ['school', 'Universitas Internasional Semen Indonesia'],
  ['bank', 'Mitra Anggota Bursa'],
];

export function ActivitySections() {
  return (
    <>
      <section
        className="section section-tinted"
        id="kegiatan"
        aria-labelledby="events-title"
        tabIndex={-1}
      >
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Agenda Terjadwal</p>
            <h2 id="events-title">Kegiatan &amp; Seminar Mendatang</h2>
            <p>
              Tingkatkan wawasan literasi finansial Anda melalui sesi pelatihan interaktif dan
              talkshow bersama praktisi bursa.
            </p>
          </div>
          <p className="section-note centered" id="event-note">
            Agenda contoh · jadwal dan tautan pendaftaran resmi belum tersedia.
          </p>
          <div className="events-grid">
            {events.map((event, index) => (
              <article className="event-card" key={event.title}>
                <span className={`tag${index === 0 ? ' tag-green' : ''}`}>
                  <span className="status-dot" />
                  {event.label}
                </span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <ul className="event-details">
                  {event.details.map(([icon, label]) => (
                    <li key={label}>
                      <Icon name={icon} />
                      <span>{label}</span>
                    </li>
                  ))}
                </ul>
                <div className="event-footer">
                  <span>{event.audience}</span>
                  <button
                    type="button"
                    className="button button-secondary"
                    disabled
                    aria-describedby="event-note"
                  >
                    {event.action}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        className="section recruitment-section"
        id="rekrutmen"
        aria-labelledby="recruitment-title"
        tabIndex={-1}
      >
        <div className="container">
          <div className="recruitment-card">
            <p className="tag">
              <Icon name="users" />
              Bertumbuh bersama GIBEI UISI
            </p>
            <h2 id="recruitment-title">Bergabung Bersama Pengurus GIBEI UISI</h2>
            <p>
              Asah kompetensi analisis pasar modal, kembangkan kepemimpinan organisasi, dan bangun
              koneksi langsung dengan regulator serta industri finansial nasional.
            </p>
            <div className="recruitment-actions">
              <button
                type="button"
                className="button button-primary"
                disabled
                aria-describedby="recruitment-note"
              >
                Pendaftaran Belum Dibuka
              </button>
              <button
                type="button"
                className="button button-secondary"
                disabled
                aria-describedby="recruitment-note"
              >
                Panduan Segera Tersedia
              </button>
            </div>
            <p className="recruitment-note" id="recruitment-note">
              Jadwal dan persyaratan rekrutmen akan diumumkan melalui kanal resmi GIBEI UISI.
            </p>
          </div>
        </div>
      </section>
      <section className="partners-section" aria-labelledby="partners-title">
        <div className="container">
          <h2 id="partners-title">Referensi Kemitraan &amp; Kelembagaan</h2>
          <p className="partners-note">Daftar ilustrasi · menunggu verifikasi informasi resmi</p>
          <ul className="partners-list">
            {partners.map(([icon, name]) => (
              <li key={name}>
                <Icon name={icon} />
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
