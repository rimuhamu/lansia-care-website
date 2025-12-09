'use client';

import { usePathname } from 'next/navigation';
import { StickyNav } from '@/components/sticky-nav';

export function ConditionalNav() {
  const pathname = usePathname();

  if (pathname.startsWith('/admin')) {
    return null;
  }

  return <StickyNav />;
}
