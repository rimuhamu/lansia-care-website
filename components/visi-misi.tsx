'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Eye,
  Target,
  Heart,
  Users,
  Shield,
  Star,
  ArrowRight,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { visionMissionContent } from '@/lib/content/visi-misi';

export function VisiMisi() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    if (path.startsWith('/#')) {
      router.push(path);
    } else if (path.startsWith('#')) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(path);
    }
  };

  return (
    <section
      id='visi-misi'
      className='py-20 lg:py-24 min-h-screen flex items-center'>
      <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Hero Header */}
        <div className='text-center mb-20'>
          <div className='inline-block bg-primary/10 px-6 py-3 rounded-full border border-primary/20 mb-6'>
            <span className='text-primary font-semibold text-sm uppercase tracking-wide'>
              Tentang Kami
            </span>
          </div>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight'>
            {visionMissionContent.title}
          </h1>
          <p className='text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed'>
            {visionMissionContent.description}
          </p>
        </div>

        {/* Vision, Values & Mission Layout */}
        <div className='grid lg:grid-cols-2 gap-12 mb-20'>
          {/* Left Column: Vision + Values */}
          <div className='space-y-12'>
            {/* Vision Card */}
            <Card className='overflow-hidden border-0 shadow-2xl'>
              <CardContent className='p-8 lg:p-10'>
                <div className='flex items-center gap-4 mb-8'>
                  <div className='relative'>
                    <div className='w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg'>
                      <Eye className='w-8 h-8 text-white' />
                    </div>
                  </div>
                  <div>
                    <h2 className='text-3xl font-bold text-foreground'>
                      {visionMissionContent.vision.title}
                    </h2>
                    <div className='h-1 w-20 bg-gradient-to-r from-primary to-primary/30 rounded-full mt-2'></div>
                  </div>
                </div>
                <p className='text-lg text-muted-foreground leading-relaxed mb-8'>
                  {visionMissionContent.vision.description}
                </p>
              </CardContent>
            </Card>

            {/* Values Section */}
            <div id='nilai-kami'>
              <div className='mb-8'>
                <h2 className='text-2xl sm:text-3xl font-bold text-foreground mb-4'>
                  {visionMissionContent.values.title}
                </h2>
                <p className='text-muted-foreground leading-relaxed'>
                  {visionMissionContent.values.description}
                </p>
              </div>

              <div className='grid gap-4'>
                {visionMissionContent.values.items.map((value, index) => (
                  <Card
                    key={index}
                    className='group hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-card via-card to-muted/10 border-0'>
                    <CardContent className='p-6 relative overflow-hidden'>
                      <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></div>

                      <div className='flex items-start gap-4'>
                        <div className='flex-shrink-0'>
                          <div className='w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300'>
                            <span className='text-2xl'>{value.icon}</span>
                          </div>
                        </div>
                        <div className='flex-1'>
                          <h3 className='font-bold text-foreground mb-2 group-hover:text-primary transition-colors'>
                            {value.title}
                          </h3>
                          <p className='text-muted-foreground text-sm leading-relaxed'>
                            {value.subtitle}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Mission */}
          <div>
            <Card className='h-full overflow-hidden border-0 shadow-2xl'>
              <CardContent className='p-8 lg:p-10'>
                <div className='flex items-center gap-4 mb-8'>
                  <div className='relative'>
                    <div className='w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg'>
                      <Target className='w-8 h-8 text-white' />
                    </div>
                  </div>
                  <div>
                    <h2 className='text-3xl font-bold text-foreground'>
                      {visionMissionContent.mission.title}
                    </h2>
                    <div className='h-1 w-20 bg-gradient-to-r from-primary to-primary/30 rounded-full mt-2'></div>
                  </div>
                </div>
                <div className='space-y-4'>
                  {visionMissionContent.mission.points.map((point, index) => (
                    <div
                      key={index}
                      className='group'>
                      <Card className='border-0 bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 hover:shadow-md'>
                        <CardContent className='p-2 mx-4'>
                          <div className='flex items-start gap-4'>
                            <div className='flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors'>
                              {point.icon === 'Heart' && (
                                <Heart className='w-5 h-5 text-primary' />
                              )}
                              {point.icon === 'Users' && (
                                <Users className='w-5 h-5 text-primary' />
                              )}
                              {point.icon === 'Shield' && (
                                <Shield className='w-5 h-5 text-primary' />
                              )}
                              {point.icon === 'Star' && (
                                <Star className='w-5 h-5 text-primary' />
                              )}
                            </div>
                            <div className='flex-1'>
                              <h3 className='font-semibold text-foreground mb-2 group-hover:text-primary transition-colors'>
                                {point.title}
                              </h3>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center'>
          <Card className='relative overflow-hidden border-0 shadow-2xl'>
            <div className='absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-secondary/10'></div>
            <CardContent className='relative p-12 lg:p-16'>
              <div className='max-w-4xl mx-auto'>
                <h3 className='text-3xl sm:text-4xl font-bold text-foreground mb-6'>
                  {visionMissionContent.cta.title}
                </h3>
                <p className='text-xl text-muted-foreground mb-10 leading-relaxed'>
                  {visionMissionContent.cta.description}
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center'>
                  <Button
                    size='lg'
                    onClick={() => handleNavigation('/#contact')}
                    className='group px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300'>
                    Hubungi Kami
                    <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform' />
                  </Button>
                  <Button
                    size='lg'
                    variant='outline'
                    onClick={() => handleNavigation('/#programs')}
                    className='group px-8 py-4 text-lg font-semibold border-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300'>
                    Lihat Program Kami
                    <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform' />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
