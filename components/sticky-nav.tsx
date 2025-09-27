'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function StickyNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutDropdownOpen, setMobileAboutDropdownOpen] = useState(false);
  const pathname = usePathname();
  const aboutDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        aboutDropdownRef.current &&
        event.target instanceof Element &&
        !aboutDropdownRef.current.contains(event.target)
      ) {
        setAboutDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // About Us dropdown items
  const aboutDropdownItems = [
    { label: 'Visi & Misi', href: '/visi-misi' },
    { label: 'Pengurus', href: '/pengurus' },
  ];

  const navItems = [
    { label: 'Beranda', href: '/' },
    {
      label: 'Tentang Kami',
      href: '/visi-misi',
      hasDropdown: true,
      dropdownItems: aboutDropdownItems,
    },
    { label: 'Program', href: pathname === '/' ? '#programs' : '/#programs' },
    { label: 'Fasilitas', href: '/fasilitas' },
    { label: 'Metode Pembelajaran', href: '/metode-pembelajaran' },
    { label: 'FAQ', href: pathname === '/' ? '#faq' : '/#faq' },
    { label: 'Kontak', href: pathname === '/' ? '#contact' : '/#contact' },
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
    setAboutDropdownOpen(false);
    setMobileAboutDropdownOpen(false);
  };

  const isAboutPage = (href: string) => {
    return (
      href === '/tentang-kami' ||
      aboutDropdownItems.some((item) => item.href === href)
    );
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
            {navItems.map((item) => (
              <div
                key={item.label}
                className='relative'
                ref={item.hasDropdown ? aboutDropdownRef : null}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                      onMouseEnter={() => setAboutDropdownOpen(true)}
                      className={`flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium ${
                        isAboutPage(pathname) ? 'text-primary' : ''
                      }`}>
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          aboutDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Desktop Dropdown */}
                    {aboutDropdownOpen && (
                      <div
                        className='absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50'
                        onMouseLeave={() => setAboutDropdownOpen(false)}>
                        {aboutDropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            onClick={() => setAboutDropdownOpen(false)}
                            className={`block px-4 py-2 text-sm text-foreground hover:bg-gray-50 hover:text-primary transition-colors ${
                              pathname === dropdownItem.href
                                ? 'text-primary bg-gray-50'
                                : ''
                            }`}>
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                  <Link
                    href={item.href}
                    className={`text-foreground hover:text-primary transition-colors font-medium ${
                      pathname === item.href ? 'text-primary' : ''
                    }`}>
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className='text-foreground hover:text-primary transition-colors font-medium'>
                    {item.label}
                  </button>
                )}
              </div>
            ))}
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

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className='md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg'>
            <div className='container px-4 py-4'>
              <div className='flex flex-col space-y-4'>
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() =>
                            setMobileAboutDropdownOpen(!mobileAboutDropdownOpen)
                          }
                          className={`flex items-center justify-between w-full text-left text-foreground hover:text-primary transition-colors font-medium ${
                            isAboutPage(pathname) ? 'text-primary' : ''
                          }`}>
                          {item.label}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              mobileAboutDropdownOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {/* Mobile Dropdown */}
                        {mobileAboutDropdownOpen && (
                          <div className='ml-4 mt-2 space-y-2'>
                            {aboutDropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.href}
                                href={dropdownItem.href}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileAboutDropdownOpen(false);
                                }}
                                className={`block py-2 text-sm text-foreground hover:text-primary transition-colors ${
                                  pathname === dropdownItem.href
                                    ? 'text-primary'
                                    : ''
                                }`}>
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : item.href.startsWith('/') &&
                      !item.href.startsWith('/#') ? (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block text-foreground hover:text-primary transition-colors font-medium ${
                          pathname === item.href ? 'text-primary' : ''
                        }`}>
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className='text-foreground hover:text-primary transition-colors font-medium'>
                        {item.label}
                      </button>
                    )}
                  </div>
                ))}
                <Button
                  onClick={() =>
                    handleNavClick(pathname === '/' ? '#contact' : '/#contact')
                  }
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
