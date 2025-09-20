'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function StickyNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Program', href: pathname === '/' ? '#programs' : '/#programs' },
    { label: 'FAQ', href: pathname === '/' ? '#faq' : '/#faq' },
    { label: 'Kontak', href: pathname === '/' ? '#contact' : '/#contact' },
    { label: 'Tentang Kami', href: '/tentang-kami' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('/#')) {
      if (pathname !== '/') {
        window.location.href = href;
      } else {
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsOpen(false);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}>
      <div className='container w-full px-4 sm:px-6 lg:px-10 mx-auto'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link href='/'>
            <div className='flex items-center gap-2'>
              <Image
                src={'/elder.svg'}
                alt='Logo'
                width={40}
                height={40}
                className='object-contain'
              />
              <span className='font-bold text-foreground'>
                Lansia Day Care Kleben
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) =>
              item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-foreground hover:text-primary transition-colors font-medium ${
                    pathname === item.href ? 'text-primary' : ''
                  }`}>
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className='text-foreground hover:text-primary transition-colors font-medium'>
                  {item.label}
                </button>
              )
            )}
            <Button
              onClick={() =>
                handleNavClick(pathname === '/' ? '#contact' : '/#contact')
              }
              size='sm'
              className='ml-4'>
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant='ghost'
            size='sm'
            className='md:hidden'
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md:hidden bg-background border-t border-border'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className='block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors'>
                  {item.label}
                </button>
              ))}
              <div className='px-3 py-2'>
                <Button
                  onClick={() => scrollToSection('#contact')}
                  size='sm'
                  className='w-full'>
                  Hubungi Kami
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
