import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Target,
  TrendingUp,
  Calendar,
  GraduationCap,
  CheckCircle,
  Users,
} from 'lucide-react';
import { programDetailsContent } from '@/lib/content/program-details';

export function ProgramDetailsSection() {
  return (
    <section
      id='program-details'
      className='py-16 lg:py-20 bg-secondary'>
      <div className='container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-4'>
            {programDetailsContent.title}
          </h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
            {programDetailsContent.description}
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-8 mb-12'>
          {/* Tujuan Program */}
          <Card className='group hover:shadow-lg transition-all duration-300  bg-white backdrop-blur-sm'>
            <CardHeader className='pb-4'>
              <div className='flex items-center gap-3 mb-2'>
                <div className='p-2 bg-primary/10 rounded-lg'>
                  <Target className='w-6 h-6 text-primary' />
                </div>
                <CardTitle className='text-xl font-bold text-foreground'>
                  {programDetailsContent.tujuanProgram.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className='space-y-3'>
              {programDetailsContent.tujuanProgram.items.map((item, index) => (
                <div
                  key={index}
                  className='flex items-start gap-3 p-3 bg-background/50 rounded-lg'>
                  <div className='flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5'>
                    <span className='text-green-600 font-bold text-sm'>
                      {index + 1}
                    </span>
                  </div>
                  <p className='text-muted-foreground leading-relaxed'>
                    {item}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Target Program */}
          <Card className='group hover:shadow-lg transition-all duration-300 bg-white backdrop-blur-sm'>
            <CardHeader className='pb-4'>
              <div className='flex items-center gap-3 mb-2'>
                <div className='p-2 bg-primary rounded-lg'>
                  <TrendingUp className='w-6 h-6 text-secondary' />
                </div>
                <CardTitle className='text-xl font-bold text-foreground'>
                  {programDetailsContent.targetProgram.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className='space-y-3'>
              {programDetailsContent.targetProgram.items.map((item, index) => (
                <div
                  key={index}
                  className='flex items-start gap-3 p-3 bg-background/50 rounded-lg'>
                  <CheckCircle className='w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5' />
                  <p className='text-muted-foreground leading-relaxed'>
                    {item}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Rencana Kegiatan */}
        <div className='mb-12'>
          <div className='text-center mb-8'>
            <div className='flex items-center justify-center gap-3 mb-4'>
              <Calendar className='w-8 h-8 text-primary' />
              <h3 className='text-2xl sm:text-3xl font-bold text-foreground'>
                {programDetailsContent.rencanaKegiatan.title}
              </h3>
            </div>
          </div>

          <div className='grid sm:grid-cols-2 gap-6'>
            {programDetailsContent.rencanaKegiatan.items.map(
              (kegiatan, index) => (
                <Card
                  key={index}
                  className='group hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-white backdrop-blur-sm'>
                  <CardContent className='p-6'>
                    <div className='flex items-start gap-4'>
                      <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors'>
                        <span className='text-2xl'>
                          {index === 0
                            ? '💪'
                            : index === 1
                            ? '🧠'
                            : index === 2
                            ? '👥'
                            : '📚'}
                        </span>
                      </div>
                      <div>
                        <h4 className='font-bold text-foreground mb-2 text-lg'>
                          {kegiatan.title}
                        </h4>
                        <p className='text-muted-foreground leading-relaxed'>
                          {kegiatan.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>

        {/* Metode Pembelajaran */}
        <div>
          <div className='text-center mb-8'>
            <div className='flex items-center justify-center gap-3 mb-4'>
              <GraduationCap className='w-8 h-8 text-primary' />
              <h3 className='text-2xl sm:text-3xl font-bold text-foreground'>
                {programDetailsContent.metodePembelajaran.title}
              </h3>
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {programDetailsContent.metodePembelajaran.items.map(
              (metode, index) => (
                <Card
                  key={index}
                  className='group hover:shadow-lg transition-all duration-300 bg-white backdrop-blur-sm'>
                  <CardContent className='p-8 text-center'>
                    <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full mb-6 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors'>
                      {index === 0 ? (
                        <Users className='w-8 h-8 text-primary' />
                      ) : (
                        <GraduationCap className='w-8 h-8 text-primary' />
                      )}
                    </div>
                    <h4 className='font-bold text-foreground mb-4 text-xl'>
                      {metode.title}
                    </h4>
                    <p className='text-muted-foreground leading-relaxed'>
                      {metode.description}
                    </p>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className='mt-16 text-center'>
          <Card className='bg-gradient-to-r from-primary/5 via-background to-secondary/5 border-primary/20'>
            <CardContent className='p-8'>
              <h4 className='text-2xl font-bold text-foreground mb-4'>
                Siap Bergabung dengan Program Kami?
              </h4>
              <p className='text-lg text-muted-foreground mb-8 max-w-2xl mx-auto'>
                Mari bersama-sama menciptakan pengalaman belajar dan berkembang
                yang bermakna untuk para lansia.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <a
                  href='#programs'
                  className='inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors'>
                  Lihat Program Kami
                </a>
                <a
                  href='#contact'
                  className='inline-flex items-center justify-center px-8 py-3 border border-border text-foreground font-medium rounded-md hover:bg-muted transition-colors'>
                  Hubungi Kami
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
