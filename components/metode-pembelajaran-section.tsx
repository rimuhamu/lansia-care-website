'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Users,
  HandHeart,
  Users2,
  MessageSquare,
  Palette,
  Gamepad2,
  UserCheck,
  Heart,
  Clock,
  Target,
  Smile,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Lightbulb,
  Star,
} from 'lucide-react';
import { metodePembelajaranContent } from '@/lib/content/metode-pembelajaran';
import { CircularLearningMethods } from './circular-learning-methods';

const iconMap = {
  Users,
  HandHeart,
  Users2,
  MessageSquare,
  Palette,
  Gamepad2,
  UserCheck,
  Heart,
  Clock,
  Target,
  Smile,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Lightbulb,
  Star,
};

const colorMap = {
  blue: 'from-blue-500/10 to-blue-600/5 border-blue-200/50',
  green: 'from-green-500/10 to-green-600/5 border-green-200/50',
  purple: 'from-purple-500/10 to-purple-600/5 border-purple-200/50',
  orange: 'from-orange-500/10 to-orange-600/5 border-orange-200/50',
  pink: 'from-pink-500/10 to-pink-600/5 border-pink-200/50',
  indigo: 'from-indigo-500/10 to-indigo-600/5 border-indigo-200/50',
  teal: 'from-teal-500/10 to-teal-600/5 border-teal-200/50',
  red: 'from-red-500/10 to-red-600/5 border-red-200/50',
};

const iconColorMap = {
  blue: 'text-blue-600',
  green: 'text-green-600',
  purple: 'text-purple-600',
  orange: 'text-orange-600',
  pink: 'text-pink-600',
  indigo: 'text-indigo-600',
  teal: 'text-teal-600',
  red: 'text-red-600',
};

export function MetodePembelajaranSection() {
  return (
    <section
      id='metode-pembelajaran'
      className='py-16 lg:py-20 min-h-screen flex items-center bg-gradient-to-br from-background via-background to-muted/30'>
      <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <header className='text-center mb-16'>
          <div className='inline-flex items-center bg-primary/10 px-6 py-3 rounded-full border border-primary/20 mb-6'>
            <span className='text-primary font-semibold text-sm uppercase tracking-wide'>
              {metodePembelajaranContent.hero.badge}
            </span>
          </div>
          <h1 className='text-3xl sm:text-4xl font-bold text-foreground mb-4'>
            {metodePembelajaranContent.hero.title}
          </h1>
          <p className='text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
            {metodePembelajaranContent.hero.description}
          </p>
        </header>

        {/* Introduction */}
        <div className='mb-20'>
          <Card className='bg-gradient-to-r from-primary/5 via-background to-secondary/5 border-primary/20'>
            <CardContent className='p-8 lg:p-12 text-center'>
              <h2 className='text-2xl lg:text-3xl font-bold text-foreground mb-6'>
                {metodePembelajaranContent.introduction.title}
              </h2>
              <p className='text-lg text-muted-foreground mb-6 max-w-4xl mx-auto leading-relaxed'>
                {metodePembelajaranContent.introduction.description}
              </p>
              <div className='inline-block bg-primary/10 px-4 py-2 rounded-full border border-primary/20'>
                <span className='text-primary font-semibold text-sm'>
                  {metodePembelajaranContent.introduction.highlight}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Core Method Diagram */}
        <div className='mb-20'>
          <div className='text-center mb-12'>
            <h2 className='text-2xl lg:text-3xl font-bold text-foreground mb-4'>
              Peta Metode Pembelajaran Terintegrasi
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              Diagram metode pembelajaran yang saling terkait dan mendukung satu
              sama lain
            </p>
          </div>
          <CircularLearningMethods />
        </div>

        {/* Detailed Methods */}
        <div className='mb-20'>
          <div className='text-center mb-12'>
            <h2 className='text-2xl lg:text-3xl font-bold text-foreground mb-4'>
              Penjelasan Detail Metode Pembelajaran
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              Setiap metode dirancang khusus untuk memenuhi kebutuhan
              pembelajaran lansia
            </p>
          </div>

          <div className='grid gap-8'>
            {metodePembelajaranContent.methods.map((method, index) => {
              const IconComponent =
                iconMap[method.icon as keyof typeof iconMap];
              const gradientClass =
                colorMap[method.color as keyof typeof colorMap];
              const iconColorClass =
                iconColorMap[method.color as keyof typeof iconColorMap];

              return (
                <Card
                  key={method.id}
                  className='hover:shadow-lg transition-all duration-300'>
                  <CardContent className='p-8'>
                    <div className='grid lg:grid-cols-3 gap-6'>
                      {/* Header */}
                      <div className='lg:col-span-3'>
                        <div className='flex items-start gap-4 mb-6'>
                          <div
                            className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${gradientClass} rounded-2xl flex-shrink-0`}>
                            <IconComponent
                              className={`w-8 h-8 ${iconColorClass}`}
                            />
                          </div>
                          <div className='flex-1'>
                            <h3 className='text-xl lg:text-2xl font-bold text-foreground mb-2'>
                              {method.title}
                            </h3>
                            <p className='text-muted-foreground leading-relaxed'>
                              {method.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Key Points */}
                      <div className='lg:col-span-2'>
                        <h4 className='text-lg font-semibold text-foreground mb-3'>
                          Penerapan:
                        </h4>
                        <ul className='space-y-2'>
                          {method.keyPoints.map((point, pointIndex) => (
                            <li
                              key={pointIndex}
                              className='flex items-start gap-2'>
                              <CheckCircle className='w-5 h-5 text-green-500 flex-shrink-0 mt-0.5' />
                              <span className='text-muted-foreground leading-relaxed'>
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* Special case for Holistik method */}
                        {method.id === 'holistik' && method.aspects && (
                          <div className='mt-6'>
                            <h4 className='text-lg font-semibold text-foreground mb-3'>
                              Aspek Holistik:
                            </h4>
                            <div className='grid sm:grid-cols-2 gap-3'>
                              {method.aspects.map((aspect, aspectIndex) => (
                                <div
                                  key={aspectIndex}
                                  className='bg-muted/50 p-3 rounded-lg'>
                                  <span className='font-medium text-foreground'>
                                    {aspect.name}:
                                  </span>
                                  <span className='text-muted-foreground ml-1'>
                                    {aspect.description}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className='text-lg font-semibold text-foreground mb-3'>
                          Manfaat:
                        </h4>
                        <div className='space-y-2'>
                          {method.benefits.map((benefit, benefitIndex) => (
                            <div
                              key={benefitIndex}
                              className='inline-block bg-primary/10 px-3 py-1 rounded-full mr-2 mb-2'>
                              <span className='text-sm text-primary font-medium'>
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Principles */}
        <div className='mb-20'>
          <div className='text-center mb-12'>
            <h2 className='text-2xl lg:text-3xl font-bold text-foreground mb-4'>
              {metodePembelajaranContent.principles.title}
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              {metodePembelajaranContent.principles.description}
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {metodePembelajaranContent.principles.items.map(
              (principle, index) => {
                const IconComponent =
                  iconMap[principle.icon as keyof typeof iconMap];

                return (
                  <Card
                    key={index}
                    className='text-center hover:shadow-lg transition-all duration-300'>
                    <CardContent className='p-6'>
                      <div className='inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4'>
                        <IconComponent className='w-6 h-6 text-primary' />
                      </div>
                      <h3 className='text-lg font-bold text-foreground mb-2'>
                        {principle.title}
                      </h3>
                      <p className='text-muted-foreground leading-relaxed'>
                        {principle.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              }
            )}
          </div>
        </div>

        {/* Expected Outcomes */}
        <div className='mb-20'>
          <div className='text-center mb-12'>
            <h2 className='text-2xl lg:text-3xl font-bold text-foreground mb-4'>
              {metodePembelajaranContent.outcomes.title}
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              {metodePembelajaranContent.outcomes.description}
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {metodePembelajaranContent.outcomes.items.map((outcome, index) => (
              <Card
                key={index}
                className='text-center hover:shadow-lg transition-all duration-300'>
                <CardContent className='p-6'>
                  <h3 className='font-bold text-foreground mb-4 text-lg'>
                    {outcome.category}
                  </h3>
                  <div className='space-y-2'>
                    {outcome.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className='flex items-center gap-2 justify-center'>
                        <Star className='w-4 h-4 text-yellow-500 flex-shrink-0' />
                        <span className='text-muted-foreground'>{benefit}</span>
                      </div>
                    ))}
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
                {metodePembelajaranContent.cta.title}
              </h3>
              <p className='text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed'>
                {metodePembelajaranContent.cta.description}
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button
                  size='lg'
                  className='px-8 py-3'>
                  {metodePembelajaranContent.cta.buttons.primary}
                  <ArrowRight className='w-4 h-4 ml-2' />
                </Button>
                <Button
                  size='lg'
                  variant='outline'
                  className='px-8 py-3'>
                  {metodePembelajaranContent.cta.buttons.secondary}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
