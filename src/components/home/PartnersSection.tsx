import Image from 'next/image';

const partners = [
  {
    name: 'PT Bursa Efek Indonesia',
    logo: '/images/partners/idx.png',
    logoClass: 'partner-logo-idx',
    width: 822,
    height: 801,
    sizes: '120px',
  },
  {
    name: 'Universitas Internasional Semen Indonesia',
    logo: '/images/partners/uisi.png',
    logoClass: 'partner-logo-uisi',
    width: 240,
    height: 68,
    sizes: '232px',
  },
  {
    name: 'Mandiri Sekuritas',
    logo: '/images/partners/mandiri-sekuritas.png',
    logoClass: 'partner-logo-mandiri',
    width: 330,
    height: 157,
    sizes: '160px',
  },
];

export function PartnersSection() {
  return (
    <section className="partners-section" aria-labelledby="partners-title">
      <div className="container">
        <h2 id="partners-title">Mitra &amp; Kelembagaan</h2>
        <ul className="partners-list">
          {partners.map(({ name, logo, logoClass, width, height, sizes }) => (
            <li key={name}>
              <div className="partner-logo">
                <Image
                  className={logoClass}
                  src={logo}
                  alt=""
                  width={width}
                  height={height}
                  sizes={sizes}
                />
              </div>
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
