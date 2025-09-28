'use client';

import { FasilitasSection } from '@/components/fasilitas-section';
import { ContactSection } from '@/components/contact-section';

export default function FasilitasPage() {
  return (
    <div className='min-h-screen'>
      <FasilitasSection />
      <ContactSection />
    </div>
  );
}
