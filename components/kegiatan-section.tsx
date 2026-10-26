import { Calendar, Clock, ImageIcon, MapPin, Users } from 'lucide-react';
import { kegiatanContent, type Kegiatan } from '@/lib/content/kegiatan';

const PHOTO_SLOTS = 2;

function groupByYear(items: Kegiatan[]) {
  const sorted = [...items].sort((a, b) => a.date.localeCompare(b.date));
  const groups = new Map<string, Kegiatan[]>();

  for (const item of sorted) {
    const year = item.date.slice(0, 4);
    const list = groups.get(year) ?? [];
    list.push(item);
    groups.set(year, list);
  }

  return [...groups.entries()];
}

const activitiesByYear = groupByYear(kegiatanContent.items);

function ActivityPhotos({ activity }: { activity: Kegiatan }) {
  return (
    <div className='grid grid-cols-2 gap-2 sm:gap-3'>
      {Array.from({ length: PHOTO_SLOTS }, (_, index) => {
        const src = activity.photos?.[index];
        const label = `Foto ${index + 1} ${activity.name}`;

        if (src) {
          return (
            <img
              key={`${activity.id}-photo-${index}`}
              src={src}
              alt={label}
              className='aspect-[4/3] w-full rounded-xl object-cover bg-white'
            />
          );
        }

        return (
          <div
            key={`${activity.id}-photo-${index}`}
            className='aspect-[4/3] rounded-xl border border-dashed border-primary/25 bg-gradient-to-br from-white to-primary/5 flex flex-col items-center justify-center gap-2 text-muted-foreground'
            role='img'
            aria-label={`${label} belum tersedia`}>
            <ImageIcon
              className='w-6 h-6 sm:w-7 sm:h-7 text-primary/60'
              aria-hidden
            />
            <span className='text-[11px] sm:text-xs font-medium'>
              Foto {index + 1}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function KegiatanSection() {
  return (
    <section
      id='kegiatan'
      className='py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-background'>
      <div className='container mx-auto max-w-3xl'>
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

        <div className='space-y-10'>
          {activitiesByYear.map(([year, activities]) => (
            <div key={year}>
              <div className='flex items-center gap-3 mb-5'>
                <h3 className='text-lg sm:text-xl font-bold text-primary'>
                  {year}
                </h3>
                <div className='h-px flex-1 bg-primary/20' />
                <p className='text-xs sm:text-sm text-muted-foreground shrink-0'>
                  {activities.length} kegiatan
                </p>
              </div>

              <div className='relative'>
                <div
                  className='absolute left-[6px] top-3 bottom-3 w-0.5 bg-primary/15'
                  aria-hidden
                />
                <ol className='space-y-6'>
                {activities.map((activity) => (
                  <li
                    key={activity.id}
                    className='relative pl-8'>
                    <span
                      className='absolute left-[7px] top-7 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background'
                      aria-hidden
                    />
                    <article className='bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden'>
                      {activity.photos && activity.photos.length > 0 && (
                        <div className='bg-cream/70 p-3 sm:p-4'>
                          <ActivityPhotos activity={activity} />
                        </div>
                      )}

                      <div className='p-5 sm:p-6'>
                        <p className='text-xs font-semibold uppercase tracking-wide text-primary mb-1'>
                          {activity.day}
                        </p>
                        <h4 className='text-lg sm:text-xl font-bold text-foreground'>
                          {activity.name}
                        </h4>

                        <div className='mt-3 flex flex-wrap gap-2'>
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
                              Hadir bersama
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
                      </div>
                    </article>
                  </li>
                ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
