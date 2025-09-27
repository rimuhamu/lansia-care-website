'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Award,
  Heart,
  Users,
  FileText,
  Shield,
  GraduationCap,
} from 'lucide-react';
import { pengurusContent } from '@/lib/content/pengurus';

export function PengurusSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Heart':
        return <Heart className='w-6 h-6' />;
      case 'Users':
        return <Users className='w-6 h-6' />;
      case 'FileText':
        return <FileText className='w-6 h-6' />;
      case 'Shield':
        return <Shield className='w-6 h-6' />;
      case 'GraduationCap':
        return <GraduationCap className='w-6 h-6' />;
      default:
        return <Users className='w-6 h-6' />;
    }
  };

  return (
    <section
      id='pengurus'
      className='py-20 lg:py-24 bg-gradient-to-br from-background via-muted/20 to-background'>
      <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-12'>
          <div className='inline-block bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-4'>
            <span className='text-primary font-semibold text-xs uppercase tracking-wide'>
              Tim Kami
            </span>
          </div>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight'>
            {pengurusContent.title}
          </h1>
          <p className='text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
            {pengurusContent.description}
          </p>
        </div>

        {/* Leadership Section - Pembina */}
        <div className='mb-12'>
          <h2 className='text-xl sm:text-2xl font-bold text-foreground text-center mb-8'>
            {pengurusContent.leadership.title}
          </h2>
          <div className='grid md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
            {pengurusContent.leadership.members.map((member) => (
              <Card
                key={member.id}
                className='group hover:shadow-lg transition-all duration-300 bg-white border-0 overflow-hidden hover:-translate-y-1'>
                <CardContent className='p-0'>
                  <div className='relative'>
                    <div className='w-full h-56 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden rounded-t-lg'>
                      {/* Photo or placeholder */}
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className='w-full h-full object-contain bg-white'
                        />
                      ) : (
                        <div className='absolute inset-0 flex items-center justify-center'>
                          <div className='w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center'>
                            <Award className='w-10 h-10 text-primary' />
                          </div>
                        </div>
                      )}
                      <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent'></div>
                    </div>
                    <div className='p-4 text-center'>
                      <h3 className='text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors'>
                        {member.name}
                      </h3>
                      <p className='text-primary font-semibold text-sm'>
                        {member.position}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Management Section - Ketua Program */}
        {pengurusContent.management && (
          <div className='mb-12'>
            <h2 className='text-xl sm:text-2xl font-bold text-foreground text-center mb-8'>
              {pengurusContent.management.title}
            </h2>
            <div className='flex justify-center'>
              {pengurusContent.management.members.map((member) => (
                <Card
                  key={member.id}
                  className='group hover:shadow-lg transition-all duration-300 bg-white border-0 overflow-hidden hover:-translate-y-1 max-w-sm'>
                  <CardContent className='p-0'>
                    <div className='relative'>
                      <div className='w-full h-56 bg-gradient-to-br from-secondary/10 to-primary/10 relative overflow-hidden rounded-t-lg'>
                        {/* Photo or placeholder */}
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className='w-full h-full object-contain bg-white'
                          />
                        ) : (
                          <div className='absolute inset-0 flex items-center justify-center'>
                            <div className='w-20 h-20 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full flex items-center justify-center'>
                              <Award className='w-10 h-10 text-secondary' />
                            </div>
                          </div>
                        )}
                        <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent'></div>
                      </div>
                      <div className='p-4 text-center'>
                        <h3 className='text-base font-bold text-foreground mb-1 group-hover:text-secondary transition-colors'>
                          {member.name}
                        </h3>
                        <p className='text-secondary font-semibold text-sm'>
                          {member.position}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Departments - Koordinator */}
        {pengurusContent.departments.map((department, deptIndex) => (
          <div
            key={deptIndex}
            className='mb-10'>
            <div className='text-center mb-6'>
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 bg-${department.color}-50 rounded-full border border-${department.color}-200 mb-3`}>
                <div className={`text-${department.color}-500`}>
                  {getIcon(department.icon)}
                </div>
                <h2
                  className={`text-lg sm:text-xl font-bold text-${department.color}-700`}>
                  {department.title}
                </h2>
              </div>
              <p className='text-sm text-muted-foreground max-w-xl mx-auto'>
                {department.description}
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
              {department.members.map((member) => (
                <Card
                  key={member.id}
                  className='group hover:shadow-md transition-all duration-300 bg-white border-0 hover:-translate-y-1'>
                  <CardContent className='p-4 text-center'>
                    <div className='relative mb-3'>
                      <div className='w-20 h-20 mx-auto mb-3 rounded-xl overflow-hidden bg-white border border-gray-200'>
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className='w-full h-full object-contain'
                          />
                        ) : (
                          <div
                            className={`w-full h-full bg-gradient-to-br from-${department.color}-100 to-${department.color}-200 flex items-center justify-center`}>
                            <div
                              className={`w-12 h-12 bg-${department.color}-500 rounded-full flex items-center justify-center`}>
                              <span className='text-white font-bold text-sm'>
                                {member.name.charAt(0)}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <h3 className='text-sm font-bold text-foreground mb-1 group-hover:text-primary transition-colors leading-tight'>
                      {member.name}
                    </h3>
                    <p className='text-primary font-medium text-xs leading-tight'>
                      {member.position}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Stats Section */}
        {/* <div className='mb-10'>
          <h2 className='text-xl sm:text-2xl font-bold text-foreground text-center mb-6'>
            {pengurusContent.stats.title}
          </h2>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
            {pengurusContent.stats.items.map((stat, index) => (
              <Card
                key={index}
                className='text-center bg-white border-0 shadow-md hover:shadow-lg transition-shadow'>
                <CardContent className='p-4'>
                  <div className='text-2xl font-bold text-primary mb-1'>
                    {stat.number}
                  </div>
                  <div className='text-sm font-semibold text-foreground mb-1'>
                    {stat.label}
                  </div>
                  <div className='text-xs text-muted-foreground'>
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Call to Action */}
        <div className='text-center'>
          <Card className='bg-gradient-to-r from-primary/5 via-background to-secondary/5 border-primary/20'>
            <CardContent className='p-8'>
              <h3 className='text-xl font-bold text-foreground mb-3'>
                {pengurusContent.cta.title}
              </h3>
              <p className='text-base text-muted-foreground mb-6 max-w-xl mx-auto'>
                {pengurusContent.cta.description}
              </p>
              <div className='flex flex-col sm:flex-row gap-3 justify-center'>
                <Button
                  size='sm'
                  className='px-6 py-2'>
                  {pengurusContent.cta.buttons.primary}
                </Button>
                <Button
                  size='sm'
                  variant='outline'
                  className='px-6 py-2'>
                  {pengurusContent.cta.buttons.secondary}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
