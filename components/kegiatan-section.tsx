import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { kegiatanContent } from '@/lib/content/kegiatan';

const activities = [...kegiatanContent.items].sort((a, b) =>
  b.date.localeCompare(a.date)
);

export function KegiatanSection() {
  return (
    <section
      id='kegiatan'
      className='py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-background'>
      <div className='container mx-auto max-w-4xl'>
        <div className='text-center mb-8 lg:mb-12'>
          <div className='inline-block bg-cream px-4 py-2 rounded-full border border-primary/20 mb-3'>
            <span className='text-primary font-semibold text-xs sm:text-sm'>
              {kegiatanContent.badge}
            </span>
          </div>
          <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 text-balance'>
            {kegiatanContent.title}
          </h2>
          <p className='text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto text-pretty'>
            {kegiatanContent.description}
          </p>
        </div>

        <ol className='space-y-4'>
          {activities.map((activity) => (
            <li
              key={activity.id}
              className='bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-6'>
              <div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
                <div className='min-w-0'>
                  <p className='text-xs font-semibold uppercase tracking-wide text-primary mb-1'>
                    {activity.day}
                  </p>
                  <h3 className='text-lg sm:text-xl font-bold text-foreground'>
                    {activity.name}
                  </h3>
                </div>
                <div className='flex flex-wrap gap-2 sm:justify-end shrink-0'>
                  <span className='inline-flex items-center gap-1.5 rounded-full bg-cream px-3 py-1 text-xs sm:text-sm text-foreground'>
                    <Calendar
                      className='w-3.5 h-3.5 text-primary'
                      aria-hidden
                    />
                    {activity.dateLabel}
                  </span>
                  <span className='inline-flex items-center gap-1.5 rounded-full bg-cream px-3 py-1 text-xs sm:text-sm text-foreground'>
                    <Clock
                      className='w-3.5 h-3.5 text-primary'
                      aria-hidden
                    />
                    {activity.time}
                  </span>
                </div>
              </div>

              <p className='mt-3 flex items-start gap-2 text-sm sm:text-base text-muted-foreground'>
                <MapPin
                  className='w-4 h-4 mt-0.5 shrink-0 text-primary'
                  aria-hidden
                />
                <span>{activity.place}</span>
              </p>

              {activity.participants.length > 0 && (
                <div className='mt-4 pt-4 border-t border-gray-100'>
                  <p className='flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground mb-2'>
                    <Users
                      className='w-4 h-4 text-primary'
                      aria-hidden
                    />
                    Peserta
                  </p>
                  <ul className='flex flex-wrap gap-2'>
                    {activity.participants.map((participant) => (
                      <li
                        key={participant}
                        className='rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs sm:text-sm text-foreground'>
                        {participant}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
