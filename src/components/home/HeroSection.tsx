import Image from 'next/image';
import { Icon } from '@/components/site/Icon';
import styles from './HeroSection.module.css';

export function HeroSection() {
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
            Kenali pasar modal. <span>Mulai dari sini.</span>
          </h1>
          <p className={styles.description}>
            Bangun pemahaman investasi yang analitis, cerdas, dan beretika bersama ekosistem edukasi
            dan riset GIBEI UISI.
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
          <Image
            className={styles.image}
            src="/images/hero-learning-v2.png"
            alt="Ilustrasi buku catatan berisi sketsa grafik, buku biru, pensil, dan kalkulator di meja belajar."
            width={1122}
            height={1402}
            sizes="(min-width: 1304px) 536px, (min-width: 900px) 40vw, (min-width: 640px) 576px, calc(100vw - 40px)"
            loading="eager"
          />
          <figcaption>Ilustrasi pembelajaran pasar modal.</figcaption>
        </figure>
      </div>
    </section>
  );
}
