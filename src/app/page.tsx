import { Hero } from '@/components/home/Hero';
import { OrganizationSections } from '@/components/home/OrganizationSections';
import { PublicationSection } from '@/components/home/PublicationSection';
import { ActivitySections } from '@/components/home/ActivitySections';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Lewati ke konten utama</a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <div id="beranda" tabIndex={-1}><Hero /></div>
        <OrganizationSections />
        <PublicationSection />
        <ActivitySections />
      </main>
      <SiteFooter />
    </>
  );
}
