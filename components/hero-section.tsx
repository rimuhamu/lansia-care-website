'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  MapPin,
  Heart,
  Users,
  Shield,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { heroContent } from '@/lib/content/hero';
import { contactContent } from '@/lib/content/contact';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const slideshowImages = [
  {
    src: '/elder.jpg',
    alt: 'Happy elderly people in community care',
  },
  {
    src: '/elder-2.jpg',
    alt: 'Happy elderly people in community care',
  },
  {
    src: '/elder-3.jpg',
    alt: 'Happy elderly people in community care',
  },
  {
    src: '/elder-4.jpg',
    alt: 'Happy elderly people in community care',
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleWhatsAppContact = () => {
    const whatsappUrl = `https://wa.me/${
      contactContent.whatsappNumber
    }?text=${encodeURIComponent(contactContent.whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      id='hero'
      className='relative bg-background pt-20 pb-12 px-4 sm:px-6 lg:px-8'>
      <div className='container mx-auto max-w-6xl'>
        <Card className='bg-white shadow-2xl border-0 overflow-hidden backdrop-blur-sm'>
          <CardContent className='p-0'>
            <div className='grid lg:grid-cols-2 gap-0'>
              <div className='order-1 lg:order-2 relative'>
                <div className='w-full h-64 sm:h-80 lg:h-full relative overflow-hidden rounded-tr-2xl lg:rounded-tr-none lg:rounded-r-2xl'>
                  {/* Slideshow Container */}
                  <div
                    className='flex transition-transform duration-500 ease-in-out h-full'
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    onMouseEnter={() => setIsPlaying(false)}
                    onMouseLeave={() => setIsPlaying(true)}>
                    {slideshowImages.map((image, index) => (
                      <div
                        key={index}
                        className='w-full h-full flex-shrink-0 relative'>
                        <div className='w-full h-full p-3'>
                          <div className='w-full h-full rounded-xl overflow-hidden shadow-lg border-2 border-white/20 backdrop-blur-sm relative'>
                            <img
                              src={image.src}
                              alt={image.alt}
                              className='w-full h-full object-cover'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10'></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-2xl border border-white/50 transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/50 backdrop-blur-sm'
                    aria-label='Previous image'>
                    <ChevronLeft className='w-5 h-5' />
                  </button>
                  <button
                    onClick={nextSlide}
                    className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-2xl border border-white/50 transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/50 backdrop-blur-sm'
                    aria-label='Next image'>
                    <ChevronRight className='w-5 h-5' />
                  </button>

                  {/* Slide Indicators */}
                  <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30'>
                    {slideshowImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                          currentSlide === index
                            ? 'bg-white scale-125 shadow-lg'
                            : 'bg-white/60 hover:bg-white/80 hover:scale-110'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className='order-2 lg:order-1 p-6 lg:p-8 space-y-4 lg:space-y-6 bg-gradient-to-br from-white via-white to-gray-50/30 rounded-bl-2xl lg:rounded-bl-none lg:rounded-l-2xl'>
                <div className='flex items-center gap-2 text-primary'>
                  <div className='w-6 h-6 bg-pink-200 rounded-full flex items-center justify-center'>
                    <div className='w-3 h-3 bg-pink-400 rounded-full'></div>
                  </div>
                  <span className='text-xs sm:text-sm font-medium'>
                    {heroContent.badge}
                  </span>
                </div>

                <h1 className='text-lg sm:text-xl lg:text-3xl font-bold text-foreground leading-tight text-balance'>
                  {heroContent.title}
                </h1>

                <p className='text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed text-pretty'>
                  {heroContent.description}
                </p>

                <div className='flex items-center gap-2 text-muted-foreground'>
                  <MapPin className='w-4 h-4 text-primary' />
                  <span className='text-xs sm:text-sm'>
                    {heroContent.location}
                  </span>
                </div>

                <div className='grid grid-cols-3 gap-2 py-3'>
                  {heroContent.features.map((feature, index) => (
                    <div
                      key={feature.label}
                      className={`text-center p-2 bg-${feature.color}-50 rounded-lg border border-gray-200`}>
                      {
                        [
                          <Heart
                            className='w-4 h-4 text-red-500 mx-auto mb-1'
                            key='heart'
                          />,
                          <Users
                            className='w-4 h-4 text-blue-500 mx-auto mb-1'
                            key='users'
                          />,
                          <Shield
                            className='w-4 h-4 text-green-500 mx-auto mb-1'
                            key='shield'
                          />,
                        ][index]
                      }
                      <p className='text-xs font-medium text-gray-800'>
                        {feature.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className='flex flex-col sm:flex-row gap-3'>
                  <Link href='/visi-misi'>
                    <Button className='text-xs sm:text-sm px-4 py-2'>
                      {heroContent.ctaPrimary}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
