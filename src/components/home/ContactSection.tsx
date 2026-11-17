import { siteContact } from '@/content/site-contact';

export function ContactSection() {
  return (
    <section
      className="section section-tinted"
      id="kontak"
      aria-labelledby="contact-title"
      tabIndex={-1}
    >
      <div className="container contact-layout">
        <div className="section-heading contact-heading">
          <p className="eyebrow">Kontak</p>
          <h2 id="contact-title">Mari Terhubung dengan GIBEI UISI</h2>
          <p>
            Ikuti informasi edukasi, kegiatan, dan pengumuman GIBEI UISI melalui kanal media sosial
            kami.
          </p>
        </div>
        <div className="contact-panel">
          <h3>Media Sosial</h3>
          <ul className="contact-channels" aria-describedby="contact-notice">
            {siteContact.socialAccounts.map((account) => (
              <li key={account.name}>
                <span className="contact-monogram" aria-hidden="true">
                  {account.abbreviation}
                </span>
                <span>{account.name}</span>
              </li>
            ))}
          </ul>
          <p className="contact-notice" id="contact-notice">
            {siteContact.notice}
          </p>
        </div>
      </div>
    </section>
  );
}
