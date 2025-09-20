'use client';

import { ProgramDetailsSection } from '@/components/program-details';
import { ContactSection } from '@/components/contact-section';

export default function ProgramDetailsPage() {
  return (
    <div className='min-h-screen'>
      <ProgramDetailsSection />
      <ContactSection />
    </div>
  );
}
