'use client';

import { ProgramDetailsSection } from '@/components/program-details';
import { VisiMisi } from '@/components/visi-misi';

export default function VisiMisiPage() {
  return (
    <div className='min-h-screen'>
      <VisiMisi />
      <ProgramDetailsSection />
    </div>
  );
}
