'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Clock,
  Calendar,
  Users,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Target,
  Star,
  Activity,
  Heart,
} from 'lucide-react';
import { programImplementationContent } from '@/lib/content/implementasi-program';

const iconMap = {
  Clock,
  Calendar,
  Users,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Target,
  Star,
  Activity,
  Heart,
};

const colorMap = {
  blue: 'from-blue-500/10 to-blue-600/5 border-blue-200/50',
  green: 'from-green-500/10 to-green-600/5 border-green-200/50',
  purple: 'from-purple-500/10 to-purple-600/5 border-purple-200/50',
  orange: 'from-orange-500/10 to-orange-600/5 border-orange-200/50',
  teal: 'from-teal-500/10 to-teal-600/5 border-teal-200/50',
  pink: 'from-pink-500/10 to-pink-600/5 border-pink-200/50',
  indigo: 'from-indigo-500/10 to-indigo-600/5 border-indigo-200/50',
  red: 'from-red-500/10 to-red-600/5 border-red-200/50',
};

const iconColorMap = {
  blue: 'text-blue-600',
  green: 'text-green-600',
  purple: 'text-purple-600',
  orange: 'text-orange-600',
  teal: 'text-teal-600',
  pink: 'text-pink-600',
  indigo: 'text-indigo-600',
  red: 'text-red-600',
};

export function ProgramImplementationSection() {
  return (
    <section
      id='implementasi-program'
      className='py-16 lg:py-20 min-h-screen flex items-center bg-gradient-to-br from-background via-background to-muted/30'>
      <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <header className='text-center mb-16'>
          <div className='inline-flex items-center bg-primary/10 px-6 py-3 rounded-full border border-primary/20 mb-6'>
            <span className='text-primary font-semibold text-sm uppercase tracking-wide'>
              {programImplementationContent.hero.badge}
            </span>
          </div>
          <h1 className='text-3xl sm:text-4xl font-bold text-foreground mb-4'>
            {programImplementationContent.hero.title}
          </h1>
          <p className='text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
            {programImplementationContent.hero.description}
          </p>
        </header>

        {/* Schedule Section */}
        <div className='mb-20'>
          <div className='text-center mb-12'>
            <h2 className='text-2xl lg:text-3xl font-bold text-foreground mb-4'>
              {programImplementationContent.schedule.title}
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              {programImplementationContent.schedule.description}
            </p>
          </div>

          {/* Desktop Table */}
          <Card className='overflow-hidden mb-8 hidden md:block'>
            <CardContent className='p-0'>
              <div className='overflow-x-auto'>
                <table className='w-full'>
                  <thead>
                    <tr className='bg-gradient-to-r from-primary/10 to-primary/5 border-b border-primary/20'>
                      <th className='px-6 py-4 text-left text-sm font-bold text-foreground'>
                        No
                      </th>
                      <th className='px-6 py-4 text-left text-sm font-bold text-foreground'>
                        Waktu
                      </th>
                      <th className='px-6 py-4 text-left text-sm font-bold text-foreground'>
                        Kegiatan
                      </th>
                      <th className='px-6 py-4 text-left text-sm font-bold text-foreground'>
                        Metode
                      </th>
                      <th className='px-6 py-4 text-left text-sm font-bold text-foreground'>
                        Deskripsi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {programImplementationContent.schedule.items.map(
                      (item, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-100 hover:bg-primary/5 transition-colors ${
                            index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                          }`}>
                          <td className='px-6 py-4 text-center font-bold text-primary'>
                            {item.no}
                          </td>
                          <td className='px-6 py-4 font-semibold text-foreground'>
                            {item.time}
                          </td>
                          <td className='px-6 py-4 font-medium text-foreground'>
                            {item.activity}
                          </td>
                          <td className='px-6 py-4 text-muted-foreground'>
                            <span
                              className={`inline-block bg-gradient-to-r ${
                                colorMap[item.color as keyof typeof colorMap]
                              } px-3 py-1 rounded-full text-sm font-medium ${
                                iconColorMap[
                                  item.color as keyof typeof iconColorMap
                                ]
                              } border`}>
                              {item.method}
                            </span>
                          </td>
                          <td className='px-6 py-4 text-muted-foreground leading-relaxed max-w-xs'>
                            {item.description}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Mobile Schedule Cards */}
          <div className='md:hidden space-y-4'>
            {programImplementationContent.schedule.items.map((item, index) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap];
              const gradientClass =
                colorMap[item.color as keyof typeof colorMap];
              const iconColorClass =
                iconColorMap[item.color as keyof typeof iconColorMap];

              return (
                <Card
                  key={index}
                  className='hover:shadow-lg transition-all duration-300'>
                  <CardContent className='p-6'>
                    <div className='flex items-start gap-4'>
                      <div
                        className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${gradientClass} rounded-xl flex items-center justify-center border`}>
                        <IconComponent
                          className={`w-6 h-6 ${iconColorClass}`}
                        />
                      </div>
                      <div className='flex-1'>
                        <div className='flex items-center gap-2 mb-2'>
                          <span className='text-lg font-bold text-primary'>
                            #{item.no}
                          </span>
                          <span className='font-semibold text-foreground bg-primary/10 px-3 py-1 rounded'>
                            {item.time}
                          </span>
                        </div>
                        <h4 className='font-bold text-foreground mb-3 text-lg'>
                          {item.activity}
                        </h4>
                        <div className='mb-3'>
                          <span
                            className={`inline-block bg-gradient-to-r ${gradientClass} px-3 py-1 rounded-full text-sm font-medium ${iconColorClass} border`}>
                            {item.method}
                          </span>
                        </div>
                        <p className='text-muted-foreground leading-relaxed'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Benefits Section */}
        <div className='mb-20'>
          <div className='text-center mb-12'>
            <h2 className='text-2xl lg:text-3xl font-bold text-foreground mb-4'>
              {programImplementationContent.benefits.title}
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              {programImplementationContent.benefits.description}
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {programImplementationContent.benefits.items.map(
              (benefit, index) => {
                const IconComponent =
                  iconMap[benefit.icon as keyof typeof iconMap];
                const gradientClass =
                  colorMap[benefit.color as keyof typeof colorMap];
                const iconColorClass =
                  iconColorMap[benefit.color as keyof typeof iconColorMap];

                return (
                  <Card
                    key={index}
                    className='text-center hover:shadow-lg transition-all duration-300'>
                    <CardContent className='p-6'>
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${gradientClass} rounded-2xl mb-4 border`}>
                        <IconComponent
                          className={`w-8 h-8 ${iconColorClass}`}
                        />
                      </div>
                      <h3 className='font-bold text-foreground mb-3 text-lg'>
                        {benefit.title}
                      </h3>
                      <p className='text-muted-foreground leading-relaxed'>
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              }
            )}
          </div>
        </div>

        {/* Highlights Section */}
        <div className='mb-20'>
          <div className='text-center mb-12'>
            <h2 className='text-2xl lg:text-3xl font-bold text-foreground mb-4'>
              {programImplementationContent.highlights.title}
            </h2>
          </div>

          <Card className='bg-gradient-to-r from-primary/5 via-background to-secondary/5 border-primary/20'>
            <CardContent className='p-8 lg:p-12'>
              <div className='grid md:grid-cols-2 gap-4'>
                {programImplementationContent.highlights.items.map(
                  (highlight, index) => (
                    <div
                      key={index}
                      className='flex items-start gap-3'>
                      <CheckCircle className='w-5 h-5 text-green-500 flex-shrink-0 mt-0.5' />
                      <span className='text-muted-foreground leading-relaxed'>
                        {highlight}
                      </span>
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className='text-center'>
          <Card className='bg-gradient-to-r from-primary/5 via-background to-secondary/5 border-primary/20'>
            <CardContent className='p-8 lg:p-12'>
              <h3 className='text-2xl lg:text-3xl font-bold text-foreground mb-4'>
                {programImplementationContent.cta.title}
              </h3>
              <p className='text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed'>
                {programImplementationContent.cta.description}
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button
                  size='lg'
                  className='px-8 py-3'>
                  {programImplementationContent.cta.buttons.primary}
                  <ArrowRight className='w-4 h-4 ml-2' />
                </Button>
                <Button
                  size='lg'
                  variant='outline'
                  className='px-8 py-3'>
                  {programImplementationContent.cta.buttons.secondary}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
