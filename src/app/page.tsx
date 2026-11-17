import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { DivisionsSection } from '@/components/home/DivisionsSection';
import { PublicationSection } from '@/components/home/PublicationSection';
import { EventsSection } from '@/components/home/EventsSection';
import { RecruitmentSection } from '@/components/home/RecruitmentSection';
import { PartnersSection } from '@/components/home/PartnersSection';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <DivisionsSection />
        <PublicationSection />
        <EventsSection />
        <RecruitmentSection />
        <PartnersSection />
      </main>
      <SiteFooter />
    </>
  );
}
