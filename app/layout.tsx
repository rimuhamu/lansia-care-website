import type { Metadata } from 'next';
import { Funnel_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { StickyNav } from '@/components/sticky-nav';
import { FooterSection } from '@/components/footer-section';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lansia Care Sleman',
  description:
    'Lansia Care Sleman menyediakan layanan perawatan dan pendampingan lansia dengan kasih sayang, aman, serta profesional di wilayah Sleman.',
  icons: {
    icon: '/favicon.ico',
  },
};

const funnelSans = Funnel_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '800'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='id'
      suppressHydrationWarning>
      <body className={funnelSans.className}>
        <StickyNav />
        {children}
        <FooterSection />
        <Analytics />
      </body>
    </html>
  );
}
