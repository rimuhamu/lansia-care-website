import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lansia Care Sleman',
  description:
    'Lansia Care Sleman menyediakan layanan perawatan dan pendampingan lansia dengan kasih sayang, aman, serta profesional di wilayah Sleman.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning>
      <body className='font-sans'>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
