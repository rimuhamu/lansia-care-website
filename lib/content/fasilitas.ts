// lib/content/fasilitas.ts
export const fasilitasContent = {
  hero: {
    title: 'Fasilitas Lengkap untuk Kenyamanan Lansia',
    description:
      'Kami menyediakan berbagai fasilitas modern dan nyaman yang dirancang khusus untuk mendukung aktivitas, kesehatan, dan kebahagiaan para lansia.',
    badge: 'Fasilitas Kami',
  },

  categories: [
    {
      id: 'ruang-lingkungan',
      title: 'Ruang dan Lingkungan',
      description: 'Ruang yang nyaman dan aman untuk berbagai aktivitas lansia',
      icon: 'Building2',
      color: 'blue',
      facilities: [
        {
          name: 'Ruang Kegiatan Utama',
          description: 'Luas, sirkulasi udara baik, pencahayaan alami.',
          details:
            'Dilengkapi kursi dengan sandaran (bukan bangku panjang keras).',
          features: [
            'Pencahayaan alami optimal',
            'Sirkulasi udara baik',
            'Kursi ergonomis',
          ],
        },
        {
          name: 'Ruang Diskusi/Belajar Kelompok',
          description:
            'Untuk aktivitas storytelling, pelatihan keterampilan, dan diskusi.',
          details:
            'Bisa berupa ruang kelas kecil dengan meja bundar agar interaktif.',
          features: [
            'Meja bundar interaktif',
            'Kapasitas kelompok kecil',
            'Suasana kondusif',
          ],
        },
        {
          name: 'Ruang Relaksasi',
          description: 'Untuk meditasi, doa bersama, atau sesi musik tenang.',
          details:
            'Suasana hening, bisa diberi aroma terapi atau musik lembut.',
          features: ['Suasana tenang', 'Aroma terapi', 'Musik lembut'],
        },
        {
          name: 'Ruang Kesehatan',
          description:
            'Untuk pemeriksaan kesehatan rutin (cek tensi, gula darah, kolesterol).',
          details: 'Dilengkapi tempat tidur periksa dan peralatan medis dasar.',
          features: [
            'Tempat tidur periksa',
            'Peralatan medis dasar',
            'Privasi terjaga',
          ],
        },
        {
          name: 'Area Outdoor / Taman Lansia',
          description: 'Bisa memanfaatkan halaman SD.',
          details:
            'Untuk berkebun, berjalan santai, atau senam pagi. Ada bangku taman untuk beristirahat.',
          features: ['Area berkebun', 'Jalur jalan santai', 'Bangku taman'],
        },
      ],
    },
    {
      id: 'pendukung-aktivitas',
      title: 'Pendukung Aktivitas',
      description:
        'Peralatan dan fasilitas untuk mendukung berbagai program kegiatan',
      icon: 'Activity',
      color: 'green',
      facilities: [
        {
          name: 'Peralatan Senam dan Fisik Ringan',
          description:
            'Bola senam kecil, stick peregangan, tali elastis, matras.',
          details: 'Musik instruksional untuk senam lansia.',
          features: [
            'Bola senam kecil',
            'Stick peregangan',
            'Tali elastis',
            'Matras',
            'Musik instruksional',
          ],
        },
        {
          name: 'Peralatan Seni dan Kreativitas',
          description:
            'Cat air, kertas gambar, pensil warna, kain & benang rajut.',
          details: 'Alat musik sederhana (angklung, gitar, keyboard).',
          features: [
            'Alat lukis lengkap',
            'Bahan kerajinan',
            'Alat musik sederhana',
          ],
        },
        {
          name: 'Peralatan Digital Sederhana',
          description:
            'Proyektor / TV layar lebar untuk pemutaran film edukatif.',
          details:
            'Beberapa tablet/laptop untuk pelatihan keterampilan digital dasar.',
          features: ['Proyektor/TV besar', 'Tablet/laptop', 'Konten edukatif'],
        },
        {
          name: 'Peralatan Game Edukatif',
          description:
            'Puzzle, papan permainan (ular tangga lansia, catur, domino).',
          details: 'Kartu memori / kuis interaktif.',
          features: [
            'Puzzle variatif',
            'Board games',
            'Kartu memori',
            'Kuis interaktif',
          ],
        },
      ],
    },
    {
      id: 'konsumsi-istirahat',
      title: 'Konsumsi dan Istirahat',
      description: 'Area untuk makan, minum, dan beristirahat dengan nyaman',
      icon: 'Coffee',
      color: 'orange',
      facilities: [
        {
          name: 'Area Snack dan Minum',
          description: 'Menyediakan teh, kopi, air putih, dan camilan sehat.',
          details: 'Disiapkan meja prasmanan sederhana.',
          features: ['Minuman hangat', 'Camilan sehat', 'Meja prasmanan'],
        },
        {
          name: 'Area Makan Bersama',
          description:
            'Jika ada sesi makan siang bersama → menumbuhkan rasa kebersamaan.',
          details: 'Pengaturan meja yang mendukung interaksi sosial.',
          features: ['Meja komunal', 'Suasana hangat', 'Interaksi sosial'],
        },
        {
          name: 'Tempat Istirahat Singkat',
          description:
            'Kursi malas atau sofa empuk untuk lansia yang butuh rehat.',
          details: 'Area yang tenang dan nyaman untuk pemulihan energi.',
          features: ['Kursi empuk', 'Area tenang', 'Pemulihan energi'],
        },
      ],
    },
  ],

  accessibility: {
    title: 'Fasilitas Aksesibilitas & Keselamatan',
    description:
      'Fasilitas khusus untuk memastikan keamanan dan kemudahan akses bagi semua lansia',
    icon: 'Shield',
    items: [
      {
        name: 'Toilet Ramah Lansia',
        description:
          'Pegangan tangan (grab bar), lantai anti-slip, dudukan tinggi.',
        features: ['Grab bar', 'Lantai anti-slip', 'Dudukan ergonomis'],
      },
      {
        name: 'Ruang Tunggu / Area Transit',
        description: 'Bagi keluarga yang menjemput atau mengantar.',
        features: ['Area nyaman', 'Informasi kegiatan', 'Tempat duduk'],
      },
      {
        name: 'Fasilitas Transportasi Opsional',
        description: 'Shuttle / jemputan khusus lansia (jika memungkinkan).',
        features: ['Transportasi aman', 'Jadwal fleksibel', 'Pendampingan'],
      },
      {
        name: 'Alat Keselamatan',
        description: 'Kotak P3K, fire extinguisher, jalur evakuasi jelas.',
        features: ['Kotak P3K', 'Fire extinguisher', 'Jalur evakuasi'],
      },
    ],
  },

  additionalFeatures: {
    title: 'Fasilitas Tambahan agar Menarik',
    description:
      'Fitur-fitur khusus yang membuat pengalaman lansia lebih berkesan',
    icon: 'Star',
    items: [
      {
        name: 'Galeri Hasil Karya Lansia',
        description: 'Pajangan hasil seni atau kerajinan mereka.',
        purpose: 'Meningkatkan rasa bangga dan motivasi',
      },
      {
        name: 'Pojok Nostalgia',
        description: 'Berisi buku, foto-foto lama, permainan tradisional.',
        purpose: 'Menghidupkan kenangan indah',
      },
      {
        name: 'Pojok Bacaan',
        description: 'Majalah, koran, buku motivasi, cerita rakyat.',
        purpose: 'Stimulasi mental dan hiburan',
      },
      {
        name: 'Pojok Musik & Karaoke',
        description: 'Untuk hiburan, terapi, dan nostalgia.',
        purpose: 'Relaksasi dan kegembiraan',
      },
    ],
  },

  stats: {
    title: 'Fasilitas Dalam Angka',
    items: [
      {
        number: '15+',
        label: 'Ruang Fasilitas',
        description: 'Ruang yang tersedia untuk berbagai aktivitas',
      },
      {
        number: '100%',
        label: 'Aksesibilitas',
        description: 'Semua area dapat diakses dengan mudah',
      },
      {
        number: '24/7',
        label: 'Keamanan',
        description: 'Sistem keamanan dan keselamatan',
      },
      {
        number: '50+',
        label: 'Peralatan',
        description: 'Peralatan pendukung aktivitas',
      },
    ],
  },

  cta: {
    title: 'Kunjungi Fasilitas Kami',
    description:
      'Lihat langsung fasilitas lengkap yang kami sediakan untuk kenyamanan dan kebahagiaan para lansia.',
    buttons: {
      primary: 'Jadwalkan Kunjungan',
      secondary: 'Hubungi Kami',
    },
  },
};
