export type Kegiatan = {
  id: string;
  day: string;
  /** ISO date used for ordering. */
  date: string;
  dateLabel: string;
  time: string;
  name: string;
  place: string;
  participants: string[];
  /** Up to two activity photos. Empty slots render as placeholders. */
  photos?: string[];
};

export const kegiatanContent = {
  badge: 'Kegiatan Laras',
  title: 'Kegiatan Sebelumnya',
  description:
    'Catatan kegiatan yang sudah terlaksana bersama warga, pengurus, dan mitra di Sukoharjo, Ngaglik.',
  items: [
    {
      id: 'sore-seru',
      day: 'Rabu',
      date: '2025-10-15',
      dateLabel: '15 Oktober 2025',
      time: '15.00',
      name: 'Sore Seru',
      place: 'Kalurahan Sukoharjo, Ngaglik',
      participants: [
        'Pembina dan pengawas Yayasan Wreda Sadu Kencana',
        'Panewu Ngaglik',
        'Puskesmas Ngaglik II',
        'Lurah Sukoharjo',
        'Dukuh Tanjungsari',
        'Pengurus BKL',
        'Warga PSI',
      ],
      photos: ['/sore-1.jpg', '/sore-2.jpg'],
    },
    {
      id: 'potong-tumpeng',
      day: 'Sabtu',
      date: '2025-12-07',
      dateLabel: '7 Desember 2025',
      time: '16.00',
      name: 'Potong Tumpeng',
      place: 'Balai RW 16 Perumahan Sukoharjo Indah',
      participants: [
        'Pembina Yayasan Wreda Sadu Kencana',
        'Warga RT 12 PSI',
        'Tokoh masyarakat (mantan ketua RW 16 PSI)',
        'KUA Kapanewon Ngaglik',
      ],
    },
    {
      id: 'soft-launching',
      day: 'Ahad',
      date: '2026-06-14',
      dateLabel: '14 Juni 2026',
      time: '09.00',
      name: 'Soft Launching',
      place: 'Tanjungsari, Sukoharjo, Ngaglik',
      participants: [
        'Pembina Yayasan Wreda Sadu Kencana',
        'Wartawan RBTV',
        'Anggota DPRD DIY',
        'Anggota DPRD Sleman',
        'Panewu Ngaglik',
        'KUA Kapanewon Ngaglik',
        'Lurah Sukoharjo',
        'Dukuh Tanjungsari',
        'Pengurus BKL Tanjungsari',
        'Lansia Tanjungsari',
      ],
      photos: ['/soft-1.jpeg', '/soft-2.jpeg'],
    },
    {
      id: 'skrining-kesehatan-lansia',
      day: 'Ahad',
      date: '2026-07-26',
      dateLabel: '26 Juli 2026',
      time: '07.00',
      name: 'Skrining Kesehatan Lansia',
      place: 'Tanjungsari, Sukoharjo, Ngaglik',
      participants: [
        'Puskesmas Ngaglik II',
        'PPM UII',
        'Wartawan Kabar Terdepan',
        'Pengurus BKL Tanjungsari',
        'Lansia Tanjungsari',
      ],
      photos: ['/skrining-1.jpeg', '/skrining-2.jpeg'],
    },
    {
      id: 'laras-sehati',
      day: 'Ahad',
      date: '2026-10-04',
      dateLabel: '4 Oktober 2026',
      time: '07.00',
      name: 'Laras Sehati',
      place: 'Tanjungsari, Sukoharjo, Ngaglik',
      participants: [],
      photos: ['/sehati-1.jpeg', '/sehati-2.jpeg'],
    },
  ] satisfies Kegiatan[],
};
