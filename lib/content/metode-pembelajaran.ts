// lib/content/metode-pembelajaran.ts
export const metodePembelajaranContent = {
  hero: {
    title: 'Metode Pembelajaran Inovatif untuk Lansia',
    description:
      "Untuk Pusat Kegiatan Lansia, metode pembelajaran yang dipilih sebaiknya interaktif, menyenangkan, sederhana, partisipatif, dan sesuai dengan kondisi fisik & psikologis lansia. Artinya, tidak boleh taku seperti 'kelas formal', melainkan berbasis pengalaman, praktik, dan kebersamaan. Beberapa metode yang cocok:",
    badge: 'Metode Pembelajaran',
  },

  coreMethod: {
    center: 'Metode Pembelajaran Lansia',
    methods: [
      { name: 'Andragogi', position: 'top' },
      { name: 'Partisipatif', position: 'top-right' },
      { name: 'Story Telling', position: 'right' },
      { name: 'Art', position: 'bottom-right' },
      { name: 'Game', position: 'bottom' },
      { name: 'Peer Learning', position: 'bottom-left' },
      { name: 'Holistic Method', position: 'left' },
      { name: 'Experiential', position: 'top-left' },
    ],
  },

  methods: [
    {
      id: 'andragogi',
      title: 'Andragogi (Pembelajaran Orang Dewasa)',
      icon: 'Users',
      color: 'blue',
      description:
        'Pendekatan pembelajaran yang dirancang khusus untuk orang dewasa dengan mempertimbangkan pengalaman hidup mereka.',
      keyPoints: [
        'Menekankan pengalaman hidup lansia sebagai sumber utama belajar',
        'Lansia dibagi berbagi cerita, pengalaman, dan praktik nyata',
        "Fasilitator lebih berperan sebagai pendamping, bukan 'guru'",
      ],
      benefits: [
        'Pembelajaran lebih bermakna',
        'Menghargai pengalaman',
        'Partisipasi aktif',
      ],
    },
    {
      id: 'experiential',
      title: 'Experiential Learning (Belajar Melalui Pengalaman Langsung)',
      icon: 'HandHeart',
      color: 'green',
      description:
        'Pembelajaran melalui pengalaman langsung dan praktik nyata yang memungkinkan lansia belajar sambil melakukan.',
      keyPoints: [
        'Lansia belajar dengan melakukan aktivitas nyata, misalnya senam, berkebun, memasak sehat, atau keterampilan tangan',
        "Proses 'melakukan → merasakan → merefleksi → mencoba lagi' membuat pembelajaran lebih bermakna",
      ],
      benefits: [
        'Pembelajaran praktis',
        'Pengalaman langsung',
        'Retensi lebih baik',
      ],
    },
    {
      id: 'partisipatif',
      title: 'Metode Partisipatif / Active Learning',
      icon: 'Users2',
      color: 'purple',
      description:
        'Pendekatan yang mendorong partisipasi aktif peserta dalam setiap aspek pembelajaran.',
      keyPoints: [
        'Lansia dilibatkan aktif dalam diskusi, tanya jawab, bermain peran, atau simulasi',
        'Memberi kesempatan untuk berbagi dan berinteraksi sehingga mengurangi rasa kesepian',
      ],
      benefits: [
        'Keterlibatan aktif',
        'Interaksi sosial',
        'Mengurangi isolasi',
      ],
    },
    {
      id: 'storytelling',
      title: 'Storytelling & Sharing Session',
      icon: 'MessageSquare',
      color: 'orange',
      description:
        'Metode berbagi cerita dan pengalaman sebagai sarana pembelajaran yang menyentuh emosi.',
      keyPoints: [
        'Cerita (baik dari fasilitator maupun sesama lansia) menjadi sarana pembelajaran yang menyentuh emosi dan mudah diingat',
        'Cocok untuk topik kesehatan, spiritualitas, dan motivasi hidup',
      ],
      benefits: ['Mudah diingat', 'Menyentuh emosi', 'Berbagi wisdom'],
    },
    {
      id: 'art-music',
      title: 'Art & Music Therapy',
      icon: 'Palette',
      color: 'pink',
      description:
        'Terapi seni dan musik untuk merangsang kreativitas dan kesehatan mental lansia.',
      keyPoints: [
        'Melibatkan kegiatan seni (melukis, menyanyi, menari ringan, musik tradisional) untuk menstimulasi kreativitas, memperbaiki mood, dan menjaga kesehatan mental',
      ],
      benefits: ['Stimulasi kreativitas', 'Perbaikan mood', 'Kesehatan mental'],
    },
    {
      id: 'game-simulasi',
      title: 'Game & Simulasi Sederhana',
      icon: 'Gamepad2',
      color: 'indigo',
      description:
        'Permainan edukatif yang dirancang untuk melatih kognitif dan interaksi sosial.',
      keyPoints: [
        'Permainan edukatif seperti kuis ringan, teka-teki, atau permainan kelompok untuk melatih daya ingat, konsentrasi, dan interaksi sosial',
        'Bisa dikombinasikan dengan gerakan fisik (misalnya permainan tepuk tangan berirama)',
      ],
      benefits: [
        'Melatih kognitif',
        'Interaksi sosial',
        'Aktivitas fisik ringan',
      ],
    },
    {
      id: 'peer-learning',
      title: 'Peer Learning (Belajar dari Sesama)',
      icon: 'UserCheck',
      color: 'teal',
      description:
        'Pembelajaran dari sesama peserta yang memiliki keahlian atau pengalaman khusus.',
      keyPoints: [
        'Lansia saling mengajar sesuai keahlian atau hobi mereka (misalnya: berkebun, memasak, keterampilan tangan)',
        'Membantu mereka merasa dihargai dan bermanfaat',
      ],
      benefits: ['Merasa dihargai', 'Berbagi keahlian', 'Mutual learning'],
    },
    {
      id: 'holistik',
      title: 'Metode Holistik',
      icon: 'Heart',
      color: 'red',
      description:
        'Pendekatan menyeluruh yang mengintegrasikan berbagai aspek kesehatan dan kesejahteraan.',
      keyPoints: [
        'Mengintegrasikan aspek fisik, mental, spiritual, dan sosial dalam setiap program pembelajaran',
        'Memastikan keseimbangan antara aktivitas fisik, mental, dan spiritual',
        'Pendekatan yang disesuaikan dengan kebutuhan holistik setiap peserta',
      ],
      aspects: [
        {
          name: 'Fisik',
          description: 'senam, yoga lansia, jalan sehat',
        },
        {
          name: 'Mental',
          description: 'pelatihan memori, membaca, bermain puzzle',
        },
        {
          name: 'Spiritual',
          description: 'doa bersama, pengajian, meditasi ringan',
        },
        {
          name: 'Sosial',
          description: 'kunjungan kelompok, diskusi komunitas',
        },
      ],
      benefits: [
        'Pendekatan menyeluruh',
        'Keseimbangan hidup',
        'Kesejahteraan optimal',
      ],
    },
  ],

  principles: {
    title: 'Prinsip-Prinsip Pembelajaran Lansia',
    description:
      'Pedoman dasar dalam merancang dan melaksanakan program pembelajaran untuk lansia',
    items: [
      {
        icon: 'Clock',
        title: 'Fleksibel Waktu',
        description:
          'Durasi pembelajaran disesuaikan dengan stamina dan konsentrasi lansia',
      },
      {
        icon: 'Users',
        title: 'Pembelajaran Sosial',
        description:
          'Menekankan interaksi dan kebersamaan dalam setiap aktivitas',
      },
      {
        icon: 'Heart',
        title: 'Pendekatan Empati',
        description:
          'Memahami kondisi fisik, mental, dan emosional setiap peserta',
      },
      {
        icon: 'Target',
        title: 'Tujuan Jelas',
        description:
          'Setiap aktivitas memiliki tujuan yang mudah dipahami dan dicapai',
      },
      {
        icon: 'Smile',
        title: 'Menyenangkan',
        description:
          'Pembelajaran dibuat enjoyable dan tidak membebani peserta',
      },
      {
        icon: 'CheckCircle',
        title: 'Praktis',
        description:
          'Materi yang diajarkan dapat langsung diterapkan dalam kehidupan sehari-hari',
      },
    ],
  },

  outcomes: {
    title: 'Hasil yang Diharapkan',
    description: 'Dampak positif dari penerapan metode pembelajaran yang tepat',
    items: [
      {
        category: 'Fisik',
        benefits: [
          'Kebugaran terjaga',
          'Mobilitas meningkat',
          'Kesehatan optimal',
        ],
      },
      {
        category: 'Mental',
        benefits: [
          'Kognitif terasah',
          'Memori terjaga',
          'Kreativitas berkembang',
        ],
      },
      {
        category: 'Sosial',
        benefits: [
          'Interaksi meningkat',
          'Jaringan pertemanan',
          'Dukungan sosial',
        ],
      },
      {
        category: 'Emosional',
        benefits: [
          'Kebahagiaan meningkat',
          'Stress berkurang',
          'Motivasi hidup',
        ],
      },
    ],
  },

  cta: {
    title: 'Bergabung dengan Program Pembelajaran Kami',
    description:
      'Rasakan pengalaman belajar yang menyenangkan dan bermakna bersama komunitas lansia yang hangat dan supportif.',
    buttons: {
      primary: 'Daftar Program',
      secondary: 'Konsultasi Gratis',
    },
  },
};
