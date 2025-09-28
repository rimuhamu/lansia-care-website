'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Building2,
  Activity,
  Coffee,
  Shield,
  Star,
  Check,
  ArrowRight,
  MapPin,
  Clock,
  Users,
  Zap,
} from 'lucide-react';
import { fasilitasContent } from '@/lib/content/fasilitas';

const iconMap = {
  Building2,
  Activity,
  Coffee,
  Shield,
  Star,
  Check,
  ArrowRight,
  MapPin,
  Clock,
  Users,
  Zap,
};

const colorMap = {
  blue: 'from-blue-500/10 to-blue-600/5 border-blue-200/50',
  green: 'from-green-500/10 to-green-600/5 border-green-200/50',
  orange: 'from-orange-500/10 to-orange-600/5 border-orange-200/50',
  purple: 'from-purple-500/10 to-purple-600/5 border-purple-200/50',
  pink: 'from-pink-500/10 to-pink-600/5 border-pink-200/50',
};

const iconColorMap = {
  blue: 'text-blue-600',
  green: 'text-green-600',
  orange: 'text-orange-600',
  purple: 'text-purple-600',
  pink: 'text-pink-600',
};

export function FasilitasSection() {
  return (
    <section
      id='fasilitas'
      className='py-16 lg:py-20 min-h-screen flex items-center bg-gradient-to-br from-background via-background to-muted/30'>
      <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <header className='text-center mb-16'>
          <div className='inline-flex items-center bg-primary/10 px-6 py-3 rounded-full border border-primary/20 mb-6'>
            <span className='text-primary font-semibold text-sm uppercase tracking-wide'>
              {fasilitasContent.hero.badge}
            </span>
          </div>
          <h1 className='text-3xl sm:text-4xl font-bold text-foreground mb-4'>
            {fasilitasContent.hero.title}
          </h1>
          <p className='text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
            {fasilitasContent.hero.description}
          </p>
        </header>

        {/* Main Facility Categories */}
        <div className='space-y-16 mb-20'>
          {fasilitasContent.categories.map((category, index) => {
            const IconComponent =
              iconMap[category.icon as keyof typeof iconMap];
            const gradientClass =
              colorMap[category.color as keyof typeof colorMap];
            const iconColorClass =
              iconColorMap[category.color as keyof typeof iconColorMap];

            return (
              <div
                key={category.id}
                className='space-y-8'>
                {/* Category Header */}
                <div className='text-center'>
                  <div
                    className={`inline-flex items-center gap-3 bg-gradient-to-r ${gradientClass} px-6 py-4 rounded-2xl border mb-4`}>
                    <IconComponent className={`w-8 h-8 ${iconColorClass}`} />
                    <h2 className='text-xl lg:text-2xl font-bold text-foreground'>
                      {category.title}
                    </h2>
                  </div>
                  <p className=' text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
                    {category.description}
                  </p>
                </div>

                {/* Facilities Grid */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {category.facilities.map((facility, facilityIndex) => (
                    <Card
                      key={facilityIndex}
                      className='h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:-translate-y-1'>
                      <CardContent className='p-6 h-full flex flex-col'>
                        <div className='flex-1'>
                          <h3 className='text-xl font-bold text-foreground mb-3'>
                            {facility.name}
                          </h3>
                          <p className='text-muted-foreground mb-4 leading-relaxed'>
                            {facility.description}
                          </p>
                          {facility.details && (
                            <p className='text-muted-foreground mb-4 italic leading-relaxed'>
                              {facility.details}
                            </p>
                          )}
                        </div>
                        <div className='mt-4'>
                          <h4 className='font-semibold text-foreground mb-3'>
                            Fitur Utama:
                          </h4>
                          <div className='space-y-2'>
                            {facility.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className='flex items-center gap-2'>
                                <Check className='w-4 h-4 text-green-500 flex-shrink-0' />
                                <span className='text-sm text-muted-foreground leading-relaxed'>
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Accessibility Section */}
        <div className='mb-20'>
          <div className='text-center mb-12'>
            <div className='inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-purple-600/5 border border-purple-200/50 px-6 py-4 rounded-2xl mb-4'>
              <Shield className='w-8 h-8 text-purple-600' />
              <h2 className='text-xl lg:text-2xl font-bold text-foreground'>
                {fasilitasContent.accessibility.title}
              </h2>
            </div>
            <p className='text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              {fasilitasContent.accessibility.description}
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-6'>
            {fasilitasContent.accessibility.items.map((item, index) => (
              <Card
                key={index}
                className='hover:shadow-lg transition-all duration-300'>
                <CardContent className='p-6'>
                  <h3 className='text-xl font-bold text-foreground mb-3'>
                    {item.name}
                  </h3>
                  <p className='text-muted-foreground mb-4 leading-relaxed'>
                    {item.description}
                  </p>
                  <div className='space-y-2'>
                    {item.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className='flex items-center gap-2'>
                        <Check className='w-4 h-4 text-green-500 flex-shrink-0' />
                        <span className='text-sm text-muted-foreground leading-relaxed'>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Features */}
        <div className='mb-20'>
          <div className='text-center mb-12'>
            <div className='inline-flex items-center gap-3 bg-gradient-to-r from-pink-500/10 to-pink-600/5 border border-pink-200/50 px-6 py-4 rounded-2xl mb-4'>
              <Star className='w-8 h-8 text-pink-600' />
              <h2 className='text-xl lg:text-2xl font-bold text-foreground'>
                {fasilitasContent.additionalFeatures.title}
              </h2>
            </div>
            <p className='text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              {fasilitasContent.additionalFeatures.description}
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {fasilitasContent.additionalFeatures.items.map((item, index) => (
              <Card
                key={index}
                className='text-center hover:shadow-lg transition-all duration-300'>
                <CardContent className='p-6'>
                  <h3 className='text-xl font-bold text-foreground mb-3'>
                    {item.name}
                  </h3>
                  <p className='text-muted-foreground mb-4 leading-relaxed'>
                    {item.description}
                  </p>
                  <div className='inline-block bg-pink-100 px-3 py-1 rounded-full'>
                    <span className='text-sm text-pink-700 font-medium'>
                      {item.purpose}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className='mb-20'>
          <div className='text-center mb-12'>
            <h2 className='text-2xl lg:text-3xl font-bold text-foreground mb-4'>
              {fasilitasContent.stats.title}
            </h2>
          </div>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
            {fasilitasContent.stats.items.map((stat, index) => (
              <Card
                key={index}
                className='text-center border-0 shadow-lg'>
                <CardContent className='p-6'>
                  <div className='text-3xl lg:text-4xl font-bold text-primary mb-2'>
                    {stat.number}
                  </div>
                  <div className='text-lg font-semibold text-foreground mb-1'>
                    {stat.label}
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center'>
          <Card className='bg-gradient-to-r from-primary/5 via-background to-secondary/5 border-primary/20'>
            <CardContent className='p-8 lg:p-12'>
              <h3 className='text-2xl lg:text-3xl font-bold text-foreground mb-4'>
                {fasilitasContent.cta.title}
              </h3>
              <p className='text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed'>
                {fasilitasContent.cta.description}
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button
                  size='lg'
                  className='px-8 py-3'>
                  {fasilitasContent.cta.buttons.primary}
                  <ArrowRight className='w-4 h-4 ml-2' />
                </Button>
                <Button
                  size='lg'
                  variant='outline'
                  className='px-8 py-3'>
                  {fasilitasContent.cta.buttons.secondary}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
