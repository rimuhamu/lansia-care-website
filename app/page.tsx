'use client';

import { HeroSection } from '@/components/hero-section';
import { ProgramsSection } from '@/components/programs-section';
import { KegiatanSection } from '@/components/kegiatan-section';
import { FaqSection } from '@/components/faq-section';
import { ContactSection } from '@/components/contact-section';

export default function HomePage() {
  return (
    <div className='min-h-screen'>
      <HeroSection />
      <ProgramsSection />
      <KegiatanSection />
      <FaqSection />
      <ContactSection />
    </div>
  );
}
