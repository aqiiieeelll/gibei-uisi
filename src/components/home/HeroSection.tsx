import { getImageProps } from 'next/image';
import { Icon } from '@/components/site/Icon';
import styles from './HeroSection.module.css';

export function HeroSection() {
  const commonImageProps = {
    alt: 'Ilustrasi empat mahasiswa berdiskusi dan mempelajari grafik bersama di meja belajar.',
    loading: 'eager' as const,
  };
  const { props: desktopImage } = getImageProps({
    ...commonImageProps,
    src: '/images/hero-community-v3.png',
    width: 2172,
    height: 724,
    sizes: '(min-width: 1304px) 1240px, calc(100vw - 64px)',
  });
  const { props: mobileImage } = getImageProps({
    ...commonImageProps,
    src: '/images/hero-community-mobile-v3.png',
    width: 1448,
    height: 1086,
    sizes: 'calc(100vw - 40px)',
  });

  return (
    <section
      className={`hero ${styles.hero}`}
      id="beranda"
      aria-labelledby="hero-title"
      tabIndex={-1}
    >
      <div className={`container ${styles.layout}`}>
        <div className={styles.copy}>
          <p className={styles.identity}>Galeri Investasi BEI UISI</p>
          <h1 id="hero-title" className={styles.title}>
            Belajar pasar modal. <span>Tumbuh bersama.</span>
          </h1>
          <p className={styles.description}>
            Kenali investasi melalui edukasi, riset, dan diskusi bersama GIBEI UISI. Bangun
            pemahaman sebelum mulai berinvestasi.
          </p>
          <div className={styles.actions}>
            <a className="button button-primary" href="#publikasi">
              Jelajahi Edukasi &amp; Riset <Icon name="arrow" />
            </a>
            <a className="button button-secondary" href="#tentang">
              Tentang Organisasi
            </a>
          </div>
        </div>
        <figure className={styles.visual}>
          <picture>
            <source
              media="(min-width: 640px)"
              srcSet={desktopImage.srcSet}
              sizes={desktopImage.sizes}
              width={2172}
              height={724}
            />
            <img {...mobileImage} alt={commonImageProps.alt} className={styles.image} />
          </picture>
          <figcaption>Ilustrasi kolaborasi mahasiswa dalam belajar pasar modal.</figcaption>
        </figure>
      </div>
    </section>
  );
}
