'use client';

import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from 'lucide-react';
import { footerContent } from '@/lib/content/footer';
import { contactContent } from '@/lib/content/contact';

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='bg-foreground text-background py-8 lg:py-12 px-4 sm:px-6 lg:px-8'>
      <div className='container mx-auto max-w-6xl'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 lg:mb-8'>
          {/* Company Info */}
          <div className='lg:col-span-2 space-y-3'>
            <div className='flex items-center gap-2'>
              <div className='w-6 h-6 bg-pink-200 rounded-full flex items-center justify-center'>
                <div className='w-3 h-3 bg-pink-400 rounded-full'></div>
              </div>
              <button
                onClick={scrollToTop}
                className='text-sm sm:text-base font-bold hover:text-background/80 transition-colors cursor-pointer'>
                {footerContent.company.name}
              </button>
            </div>
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
                <a
                  href='#'
                  className='p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors'
                  aria-label='Facebook'>
                  <Facebook className='w-4 h-4' />
                </a>
                <a
                  href='#'
                  className='p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors'
                  aria-label='Instagram'>
                  <Instagram className='w-4 h-4' />
                </a>
                <a
                  href='#'
                  className='p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors'
                  aria-label='YouTube'>
                  <Youtube className='w-4 h-4' />
                </a>
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
    </footer>
  );
}
