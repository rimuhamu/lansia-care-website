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

  const getIconComponent = (iconName: string) => {
    const iconProps = { className: 'w-5 h-5 text-primary' };
    switch (iconName) {
      case 'Heart':
        return <Heart {...iconProps} />;
      case 'Users':
        return <Users {...iconProps} />;
      case 'Shield':
        return <Shield {...iconProps} />;
      case 'Star':
        return <Star {...iconProps} />;
      default:
        return <Star {...iconProps} />;
    }
  };

  return (
    <section
      id='visi-misi'
      className='py-16 lg:py-20 min-h-screen flex items-center bg-gradient-to-br from-background via-background to-muted/30'>
      <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <header className='text-center mb-16'>
          <div className='inline-flex items-center bg-primary/10 px-6 py-3 rounded-full border border-primary/20 mb-6'>
            <span className='text-primary font-semibold text-sm uppercase tracking-wide'>
              Tentang Kami
            </span>
          </div>
          <h1 className='text-3xl sm:text-4xl font-bold text-foreground mb-4'>
            {visionMissionContent.title}
          </h1>
          <p className='text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
            {visionMissionContent.description}
          </p>
        </header>

        {/* Main Content Grid */}
        <div className='grid lg:grid-cols-3 gap-8 mb-16'>
          {/* Vision Section */}
          <div className='lg:col-span-1'>
            <Card className='h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <CardContent className='p-6 lg:p-8 h-full'>
                <div className='flex items-start gap-4 mb-6'>
                  <div className='flex-shrink-0 w-14 h-14 bg-primary rounded-xl flex items-center justify-center shadow-md'>
                    <Eye className='w-7 h-7 text-white' />
                  </div>
                  <div className='flex-1'>
                    <h2 className='text-2xl font-bold text-foreground mb-2'>
                      {visionMissionContent.vision.title}
                    </h2>
                    <div className='h-0.5 w-16 bg-gradient-to-r from-primary to-primary/30 rounded-full'></div>
                  </div>
                </div>
                <p className='text-muted-foreground leading-relaxed'>
                  {visionMissionContent.vision.description}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Mission Section */}
          <div className='lg:col-span-2'>
            <Card className='h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <CardContent className='p-6 lg:p-8 h-full'>
                <div className='flex items-start gap-4 mb-6'>
                  <div className='flex-shrink-0 w-14 h-14 bg-primary rounded-xl flex items-center justify-center shadow-md'>
                    <Target className='w-7 h-7 text-white' />
                  </div>
                  <div className='flex-1'>
                    <h2 className='text-2xl font-bold text-foreground mb-2'>
                      {visionMissionContent.mission.title}
                    </h2>
                    <div className='h-0.5 w-16 bg-gradient-to-r from-primary to-primary/30 rounded-full'></div>
                  </div>
                </div>
                {/* Mission Points Grid */}
                <div className='grid sm:grid-cols-2 gap-3'>
                  {visionMissionContent.mission.points.map((point, index) => (
                    <div
                      key={index}
                      className='group flex items-center gap-3 p-3 rounded-lg bg-white/50 hover:bg-white/80 border border-muted/50 hover:border-primary/20 transition-all duration-200'>
                      <div className='flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors'>
                        {getIconComponent(point.icon)}
                      </div>
                      <span className='text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-relaxed'>
                        {point.title}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <section
          id='nilai-kami'
          className='mb-16'>
          <div className='text-center mb-10'>
            <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-4'>
              {visionMissionContent.values.title}
            </h2>
            <p className='text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
              {visionMissionContent.values.description}
            </p>
          </div>

          <div className='max-w-2xl mx-auto'>
            {visionMissionContent.values.items.map((value, index) => (
              <Card
                key={index}
                className='group hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-card via-card to-muted/5 border-0 mb-4 last:mb-0'>
                <CardContent className='p-6 relative overflow-hidden'>
                  <div className='flex items-center gap-6'>
                    <div className='flex-shrink-0 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300'>
                      <span
                        className='text-3xl'
                        role='img'
                        aria-label={value.title}>
                        {value.icon}
                      </span>
                    </div>
                    <div className='flex-1'>
                      <h3 className='text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors'>
                        {value.title}
                      </h3>
                      <p className='text-muted-foreground leading-relaxed'>
                        {value.subtitle}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <footer className='text-center'>
          <Card className='relative overflow-hidden border-0 shadow-lg'>
            <div className='absolute inset-0 bg-gradient-to-r from-primary/5 via-background to-secondary/5'></div>
            <CardContent className='relative p-8 lg:p-12'>
              <div className='max-w-3xl mx-auto'>
                <h3 className='text-xl sm:text-2xl font-bold text-foreground mb-4'>
                  {visionMissionContent.cta.title}
                </h3>
                <p className=' text-muted-foreground mb-8 leading-relaxed'>
                  {visionMissionContent.cta.description}
                </p>

                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <Button
                    size='lg'
                    onClick={() => handleNavigation('/#contact')}
                    className='group px-6 py-3 font-semibold shadow-md hover:shadow-lg transition-all duration-300'>
                    Hubungi Kami
                    <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
                  </Button>
                  <Button
                    size='lg'
                    variant='outline'
                    onClick={() => handleNavigation('/#programs')}
                    className='group px-6 py-3 font-semibold border-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300'>
                    Lihat Program Kami
                    <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </footer>
      </div>
    </section>
  );
}
