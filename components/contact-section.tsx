'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Clock, Mail, MessageCircle } from 'lucide-react';
import { contactContent } from '@/lib/content/contact';
import { footerContent } from '@/lib/content/footer';

const whatsappNumber = contactContent.whatsappNumber;
const mapSrc =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.890938510231!2d110.43027351122065!3d-7.694852292290472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5c04c0a015d3%3A0xdb9741a91bdd3d95!2sJl.%20Tanjungsari%2C%20Sukoharjo%2C%20Kec.%20Ngaglik%2C%20Kabupaten%20Sleman%2C%20Daerah%20Istimewa%20Yogyakarta%2055581%2C%20Indonesia!5e0!3m2!1sid!2sde!4v1759698604209!5m2!1sid!2sde';

export function ContactSection() {
  const handleWhatsAppContact = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      contactContent.whatsappMessage
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id='contact'
      className='py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-cream'>
      <div className='container mx-auto max-w-6xl'>
        <div className='text-center mb-8 lg:mb-12'>
          <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 text-balance'>
            {contactContent.title}
          </h2>
          <p className='text-sm sm:text-base text-muted-foreground text-pretty'>
            {contactContent.description}
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
          {/* Map - First on mobile/tablet */}
          <div className='space-y-4 order-1 md:order-2 lg:order-2'>
            <div>
              <h3 className='text-lg sm:text-xl font-bold text-foreground mb-4'>
                {contactContent.map.title}
              </h3>
              <Card>
                <CardContent className='p-0'>
                  <div className='relative h-64 rounded-lg overflow-hidden'>
                    <iframe
                      src={mapSrc}
                      width='100%'
                      height='100%'
                      style={{ border: 0 }}
                      allowFullScreen
                      loading='lazy'
                      referrerPolicy='no-referrer-when-downgrade'
                      className='absolute inset-0'
                      title='Office Location Map'></iframe>
                    {!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY && (
                      <div className='absolute inset-0 bg-card/50 flex items-center justify-center'>
                        <div className='text-center'>
                          <MapPin className='w-8 h-8 text-primary mx-auto mb-2' />
                          <p className='text-foreground font-semibold text-xs sm:text-sm'>
                            {footerContent.company.name}
                          </p>
                          <p className='text-muted-foreground text-xs'>Laras</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className='bg-background p-4 rounded-lg border border-gray-200'>
              <h4 className='font-semibold text-foreground mb-2 text-xs sm:text-sm'>
                Petunjuk Arah
              </h4>
              <div className='space-y-1 text-xs text-muted-foreground'>
                {contactContent.map.directions.map((direction, index) => (
                  <p key={index}>• {direction}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information - Second on mobile/tablet */}
          <div className='space-y-6 order-2 md:order-1 lg:order-1'>
            <div>
              <h3 className='text-lg sm:text-xl font-bold text-foreground mb-4'>
                {contactContent.info.title}
              </h3>
              <div className='space-y-4'>
                <div className='flex items-start gap-3'>
                  <div className='p-2 bg-primary/10 rounded-full'>
                    <MapPin className='w-5 h-5 text-primary' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-foreground mb-1 text-xs sm:text-sm'>
                      {contactContent.info.address.title}
                    </h4>
                    <div className='text-muted-foreground text-xs sm:text-sm'>
                      {contactContent.info.address.lines.map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='p-2 bg-primary/10 rounded-full'>
                    <Phone className='w-5 h-5 text-primary' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-foreground mb-1 text-xs sm:text-sm'>
                      {contactContent.info.phone.title}
                    </h4>
                    <p className='text-muted-foreground text-xs sm:text-sm'>
                      {contactContent.info.phone.number}
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='p-2 bg-primary/10 rounded-full'>
                    <Mail className='w-5 h-5 text-primary' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-foreground mb-1 text-xs sm:text-sm'>
                      {contactContent.info.email.title}
                    </h4>
                    <p className='text-muted-foreground text-xs sm:text-sm'>
                      {contactContent.info.email.address}
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='p-2 bg-primary/10 rounded-full'>
                    <Clock className='w-5 h-5 text-primary' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-foreground mb-1 text-xs sm:text-sm'>
                      {contactContent.info.hours.title}
                    </h4>
                    <div className='text-muted-foreground space-y-1 text-xs sm:text-sm'>
                      {contactContent.info.hours.schedule.map((time, index) => (
                        <p key={index}>{time}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-6'>
                <Button
                  onClick={handleWhatsAppContact}
                  className='w-full sm:w-auto text-xs sm:text-sm'>
                  <MessageCircle className='w-4 h-4 mr-2' />
                  Hubungi via WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
