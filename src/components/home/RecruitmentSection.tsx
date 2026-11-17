import { Icon } from '@/components/site/Icon';

export function RecruitmentSection() {
  return (
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
  );
}
