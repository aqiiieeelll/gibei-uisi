import { Hero } from '@/components/home/Hero';
import { SiteHeader } from '@/components/site/SiteHeader';

export default function Home() {
  return <><a className="skip-link" href="#main-content">Lewati ke konten utama</a><SiteHeader /><main id="main-content" tabIndex={-1}><div id="beranda" tabIndex={-1}><Hero /></div><section className="section" id="tentang" tabIndex={-1}><div className="container"><h2>Tentang GIBEI UISI</h2></div></section></main></>;
}
