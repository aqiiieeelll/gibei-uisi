import { Brand } from './Brand';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Brand compact />
          <p>
            Pusat literasi, edukasi, dan inklusi pasar modal civitas akademika di lingkungan
            Universitas Internasional Semen Indonesia, Gresik.
          </p>
          <p className="footer-location">
            Kampus B UISI, Kebomas, Gresik
            <br />
            Kontak resmi sedang dikonfirmasi.
          </p>
        </div>
        <nav aria-label="Navigasi footer">
          <h2>Navigasi</h2>
          <ul>
            <li>
              <a href="#beranda">Beranda</a>
            </li>
            <li>
              <a href="#tentang">Tentang Kami</a>
            </li>
            <li>
              <a href="#divisi">8 Divisi</a>
            </li>
            <li>
              <a href="#publikasi">Publikasi &amp; Riset</a>
            </li>
            <li>
              <a href="#kegiatan">Kegiatan SPM</a>
            </li>
          </ul>
        </nav>
        <div>
          <h2>Media Sosial</h2>
          <ul className="social-list">
            <li>Instagram GIBEI UISI</li>
            <li>YouTube GIBEI Official</li>
            <li>LinkedIn GIBEI UISI</li>
            <li>Telegram Community</li>
          </ul>
          <p className="social-note">Tautan resmi akan dikonfirmasi.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 Galeri Investasi BEI UISI.</p>
          <div>
            <span>Pratinjau UI · data contoh</span>
            <a href="#disclaimer">Disclaimer Edukasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
