import Image from 'next/image';

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a className="brand" href="#beranda" aria-label="GIBEI UISI — Beranda">
      <Image src="/images/gibei-mark.jpg" alt="" width={44} height={44} sizes="44px" className="brand-mark" />
      <span><strong>GIBEI UISI</strong>{!compact && <span className="brand-caption">GALERI INVESTASI BEI</span>}</span>
    </a>
  );
}
