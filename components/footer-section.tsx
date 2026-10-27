'use client';

import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { footerContent } from '@/lib/content/footer';
import { contactContent } from '@/lib/content/contact';
import { Qwigley } from 'next/font/google';

const qwiqley = Qwigley({
  subsets: ['latin'],
  weight: '400',
});

const socialIcons = {
  Facebook,
  Instagram,
  TikTok: function TikTokIcon({ className }: { className?: string }) {
    return (
      <svg
        viewBox='0 0 24 24'
        fill='currentColor'
        className={className}
        aria-hidden='true'>
        <path d='M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52V6.79a4.85 4.85 0 0 1-1-.1z' />
      </svg>
    );
  },
} as const;

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='bg-foreground text-background py-8 lg:py-12 px-4 sm:px-6 lg:px-8'>
      <div className='container mx-auto max-w-6xl'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 lg:mb-8'>
          {/* Company Info */}
          <div className='lg:col-span-2 space-y-3 align-bottom'>
            <button onClick={scrollToTop} className='px-2 gap-3 lg:gap-4 rounded inline-flex items-center hover:bg-neutral-200/20  transition-colors cursor-pointer'>
              <img
                src={footerContent.company.logo}
                alt='Logo'
                className='w-6 h-6 lg:w-8 lg:h-8 object-contain'
              />
              <span className={`text-2xl lg:text-3xl mt-2 lg:mt-2.5 ${qwiqley.className}`}>{footerContent.company.name}</span>
            </button>
            <p className='text-background/80 leading-relaxed text-pretty text-xs sm:text-sm'>
              {footerContent.company.description}
            </p>
            <div className='space-y-1 text-background/80'>
              <div className='flex items-center gap-2'>
                <MapPin className='w-3 h-3' />
                <span className='text-xs'>{footerContent.company.address}</span>
              </div>
              <div className='flex items-center gap-2'>
                <Phone className='w-3 h-3' />
                <span className='text-xs'>{footerContent.company.phone}</span>
              </div>
              <div className='flex items-center gap-2'>
                <Mail className='w-3 h-3' />
                <span className='text-xs'>{footerContent.company.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='font-bold text-sm sm:text-base mb-3'>
              {footerContent.programs.title}
            </h4>
            <ul className='space-y-1 text-background/80'>
              {footerContent.programs.links.map((link, index) => (
                <li key={index}>
                  <a
                    href='#'
                    className='hover:text-background transition-colors text-xs sm:text-sm'>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className='font-bold text-sm sm:text-base mb-3'>
              {footerContent.social.title}
            </h4>
            <div className='space-y-3'>
              <div className='flex gap-2'>
                {footerContent.social.links.map((link) => {
                  const Icon = socialIcons[link.label];
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors'
                      aria-label={link.label}>
                      <Icon className='w-4 h-4' />
                    </a>
                  );
                })}
              </div>
              <div>
                <h5 className='font-semibold mb-1 text-xs sm:text-sm'>
                  {contactContent.info.hours.title}
                </h5>
                <div className='text-xs text-background/80 space-y-0.5'>
                  {contactContent.info.hours.schedule.map((time, index) => (
                    <p key={index}>{time}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-background/20 pt-4 lg:pt-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-3'>
            <p className='text-background/60 text-xs'>
              {footerContent.legal.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer >
  );
}
