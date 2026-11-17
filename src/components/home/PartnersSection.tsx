import { Icon, type IconName } from '@/components/site/Icon';

const partners: [IconName, string][] = [
  ['building', 'PT Bursa Efek Indonesia'],
  ['building', 'IDX Jawa Timur'],
  ['school', 'Universitas Internasional Semen Indonesia'],
  ['bank', 'Mitra Anggota Bursa'],
];

export function PartnersSection() {
  return (
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
  );
}
