export const projects = [
  {
    id: 1,
    title: 'Buxoro Bilimdonlar',
    slug: 'buxoro-bilimdonlar',
    image: '🎓',
    year: '2025',
    summary: 'Online ta\'lim platformasi: kurslar, video player, to\'lov tizimi va analytics.',
    description: 'To\'liq funksional onlayn ta\'lim platformasi. O\'qituvchilar kurs yaratishi, talabalar video darslarni ko\'rishi va testlar topshirishi mumkin.',
    challenge: 'O\'qitish jarayoni avtomatlashtirilmagan, kurslarga qo\'shilish murakkab edi. Talabalarning progressini kuzatish va to\'lovlarni boshqarish qo\'lda amalga oshirilardi.',
    approach: 'Django REST Framework yordamida backend yaratdim, React bilan interaktiv frontend qurdim. Video streaming uchun AWS S3 va CloudFront, to\'lov uchun Stripe integratsiyasi qildim.',
    impact: '3 oy ichida 10,000+ foydalanuvchi, 150+ kurs, 40% konversiya oshishi. O\'qituvchilarning vaqti 60% tejaldi.',
    tech: ['Django', 'React', 'PostgreSQL', 'AWS S3', 'Stripe', 'Redis'],
    role: 'Full-Stack Lead Developer',
    duration: '5 oy',
    featured: true,
    metrics: {
      users: '10K+',
      growth: '+40%',
      courses: '150+',
      revenue: '$50K+'
    },
    links: {
      live: '#',
      github: '#',
      demo: '#'
    },
    screenshots: [
      { title: 'Dashboard', emoji: '📊' },
      { title: 'Course Player', emoji: '▶️' },
      { title: 'Analytics', emoji: '📈' },
    ]
  },
  {
    id: 2,
    title: 'CodeLab Platform',
    slug: 'codelab',
    image: '💻',
    year: '2024',
    summary: 'Bootcamp platformasi: course management, coding challenges va live tests.',
    description: 'Dasturlash bootcamp uchun maxsus platforma. O\'quvchilar interaktiv coding challenges yechishi, mentor feedback olishi va real-time collaborative coding qilishi mumkin.',
    challenge: 'Bootcamp jarayonini boshqarish murakkab, o\'quvchilarning kodini tekshirish va feedback berish uzoq vaqt olardi.',
    approach: 'Next.js va TypeScript yordamida SPA yaratdim. Monaco Editor integratsiyasi, WebSocket yordamida real-time collaboration, Docker containerlar yordamida kod execution.',
    impact: '500+ o\'quvchi, 95% completion rate, mentorlar vaqti 70% tejaldi.',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'WebSocket', 'Docker'],
    role: 'Lead Developer & Designer',
    duration: '4 oy',
    featured: true,
    metrics: {
      users: '500+',
      growth: '+95%'
    },
    links: {
      live: '#',
      github: '#'
    },
    screenshots: [
      { title: 'Code Editor', emoji: '👨‍💻' },
      { title: 'Challenges', emoji: '🎯' },
      { title: 'Leaderboard', emoji: '🏆' },
    ]
  },
  {
    id: 3,
    title: 'Smart Inventory System',
    slug: 'smart-inventory',
    image: '📦',
    year: '2024',
    summary: 'Aqlli omborxona tizimi: inventar, zakaz va hisobot boshqaruvi.',
    description: 'Kichik va o\'rta bizneslar uchun inventory management tizimi. Real-time stock tracking, automatic reorder alerts, sales analytics.',
    challenge: 'Mahsulot qoldig\'ini qo\'lda hisoblash, xatolar ko\'p, zakaz berish vaqti yo\'qolardi.',
    approach: 'Django REST backend, Vue.js frontend, PostgreSQL DB. QR code scanning, automatic notifications, Excel/PDF export.',
    impact: '20+ biznes mijoz, inventory xatolari 80% kamaydi, operatsion xarajatlar 35% tejaldi.',
    tech: ['Django', 'Vue.js', 'PostgreSQL', 'Celery', 'Redis'],
    role: 'Full-Stack Developer',
    duration: '3 oy',
    featured: false,
    metrics: {
      users: '20+ bizneslar',
      growth: '-80% xatolar'
    },
    links: {
      live: '#'
    },
    screenshots: [
      { title: 'Dashboard', emoji: '📊' },
      { title: 'Inventory', emoji: '📦' },
    ]
  },
  {
    id: 4,
    title: 'Portfolio Generator',
    slug: 'portfolio-generator',
    image: '🎨',
    year: '2024',
    summary: 'AI-powered portfolio website generator dasturchlar uchun.',
    description: 'No-code portfolio generator. Foydalanuvchi ma\'lumotlarini kiritadi, AI unique dizayn yaratadi, bir klikda deploy qiladi.',
    challenge: 'Ko\'p dasturchilarda portfolio yo\'q yoki eskirgan. Custom sayt yaratish qimmat va vaqt oladi.',
    approach: 'Next.js + Tailwind templates, OpenAI API content generation, Vercel auto-deploy.',
    impact: '1,000+ portfolio yaratildi, o\'rtacha 10 daqiqada tayyor sayt.',
    tech: ['Next.js', 'Tailwind', 'OpenAI API', 'Vercel'],
    role: 'Solo Developer',
    duration: '2 oy',
    featured: false,
    metrics: {
      users: '1K+ portfolios',
    },
    links: {
      live: '#',
      github: '#'
    },
    screenshots: [
      { title: 'Generator', emoji: '✨' },
      { title: 'Templates', emoji: '🎨' },
    ]
  },
  {
    id: 5,
    title: 'Restaurant Management',
    slug: 'restaurant-management',
    image: '🍽️',
    year: '2023',
    summary: 'Restaurant uchun kompleks boshqaruv tizimi: zakaz, menu, oshpazxona.',
    description: 'Restaurant operatsiyalarini to\'liq avtomatlashtirgan tizim. Zakaz qabul qilish, oshpazxona ekrani, inventar, hisobot.',
    challenge: 'Zakaz qog\'ozda, xatolar ko\'p, oshpazxona bilan aloqa zaif.',
    approach: 'Real-time order management, kitchen display system, POS integration, analytics dashboard.',
    impact: '5 restaurant branch, xizmat tezligi 40% oshdi, xatolar 90% kamaydi.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    role: 'Full-Stack Developer',
    duration: '4 oy',
    featured: false,
    metrics: {
      users: '5 filiallar',
      growth: '+40% tezlik'
    },
    links: {
      live: '#'
    },
    screenshots: [
      { title: 'POS', emoji: '💳' },
      { title: 'Kitchen', emoji: '👨‍🍳' },
    ]
  },
  {
    id: 6,
    title: 'Event Booking Platform',
    slug: 'event-booking',
    image: '🎉',
    year: '2023',
    summary: 'Event va to\'y zallarini online band qilish platformasi.',
    description: 'To\'y zallari va event mekonlarini online booking tizimi. Calendar view, real-time availability, payment processing.',
    challenge: 'Telefon orqali band qilish noqulay, double booking muammolari.',
    approach: 'Calendar integration, automated booking confirmation, payment gateway, SMS notifications.',
    impact: '50+ event mekonlar, 2,000+ booking, double booking 0%.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    role: 'Lead Developer',
    duration: '3 oy',
    featured: false,
    metrics: {
      users: '50+ mekonlar',
      growth: '2K+ bookings'
    },
    links: {
      live: '#'
    },
    screenshots: [
      { title: 'Calendar', emoji: '📅' },
      { title: 'Venues', emoji: '🏛️' },
    ]
  },
  {
    id: 7,
    title: 'Iqromax.uz',
    slug: 'iqromax-uz',
    image: '📖',
    year: '2024',
    summary: 'Iqromax.uz — zamonaviy veb-sayt. Kontent, foydalanuvchi tajribasi va mobil qurilmalar uchun optimallashtirilgan.',
    description: 'Iqromax.uz domeni uchun yaratilgan professional veb-sayt. Zamonaviy dizayn, tez yuklanish va qulay foydalanish.',
    challenge: 'Brend va auditoriyaga mos, ishonchli va zamonaviy ko\'rinishda sayt yaratish kerak edi.',
    approach: 'Zamonaviy frontend texnologiyalari, responsive dizayn va SEO optimallashtirish. Foydalanuvchi tajribasiga e\'tibor.',
    impact: 'Sayt ishga tushdi, foydalanuvchilar mobil va kompyuterda qulay foydalana oladi.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    role: 'Full-Stack Developer',
    duration: '2 oy',
    featured: true,
    metrics: {
      users: 'Live',
      growth: 'iqromax.uz'
    },
    links: {
      live: 'https://iqromax.uz',
      github: '#',
      demo: 'https://iqromax.uz'
    },
    screenshots: [
      { title: 'Bosh sahifa', emoji: '🏠' },
      { title: 'Kontent', emoji: '📄' },
    ],
    fixes: {
      sectionTitle: 'Aniqlangan kamchiliklar va bajarilgan tuzatishlar',
      intro: 'Ushbu hujjatda iqromax.uz web-saytining mobil va autentifikatsiya qismlarida aniqlangan muammolar hamda ularni professional darajada qanday hal qilganim batafsil bayon etiladi.',
      items: [
        {
          num: '1',
          title: 'Mobil versiyada scroll muammosi (Android)',
          problem: 'Sayt iOS (iPhone) qurilmalarda to\'g\'ri scroll bo\'lardi. Android telefonlarda esa sahifa qotib qolardi, pastga yoki yuqoriga siljimasdi. Foydalanuvchi kontentni ko\'ra olmas edi.',
          cause: 'height: 100vh noto\'g\'ri ishlatilgan; overflow: hidden asosiy wrapperlarda qo\'llangan; ba\'zi container\'lar position: fixed bilan butun sahifani yopib qo\'ygan. Android brauzerlar iOS\'ga qaraganda qat\'iyroq ishlaydi.',
          solution: 'Global scroll arxitekturasi qayta qurildi. Scroll faqat body orqali ishlaydigan qilindi. 100vh o\'rniga 100dvh ishlatildi. Root elementlarda overflow: visible tiklandi.',
          result: 'Android va iOS qurilmalarda scroll 100% barqaror ishlay boshladi. Sahifa qotib qolish muammosi butunlay bartaraf etildi.'
        },
        {
          num: '2',
          title: 'Telegram orqali ro\'yxatdan o\'tishda username muammosi',
          problem: 'Ro\'yxatdan o\'tishda faqat bitta Telegram username (baxadevuz) olinayotgan edi. Barcha foydalanuvchilar bitta username bilan yozilib qolardi. Bu xavfsizlik va ma\'lumotlar aniqligi uchun jiddiy xato edi.',
          cause: 'Telegram username frontend\'dan olinayotgan edi. Telegram bilan real autentifikatsiya yo\'q edi. Username hardcode qilingan yoki noto\'g\'ri bog\'langan.',
          solution: 'Telegram Bot + OTP asosidagi real autentifikatsiya joriy qilindi. Username faqat Telegram serveridan olinadigan qilindi. Frontend\'dan kiritilgan ma\'lumotlar ishonchsiz deb belgilandi. Backend orqali to\'liq tekshiruv joriy qilindi.',
          result: 'Har bir foydalanuvchi o\'zining real Telegram username\'i bilan ro\'yxatdan o\'tadi. Aldov va noto\'g\'ri ma\'lumotlar butunlay yo\'q qilindi.'
        },
        {
          num: '3',
          title: 'Bitta Telegram = bitta account muammosi',
          problem: 'Bir foydalanuvchi bir nechta akkaunt ochishi mumkin edi. Duplicate account\'lar paydo bo\'lish xavfi bor edi.',
          cause: 'Telegram username va telegram_id unikalligi majburiy qilinmagan. Database darajasida cheklov yo\'q edi.',
          solution: 'telegram_id va telegram_username uchun UNIQUE constraint qo\'yildi. Backend\'da qo\'shimcha tekshiruvlar yozildi. Bir Telegram akkaunt bilan qayta ro\'yxatdan o\'tish bloklandi.',
          result: '1 ta Telegram akkaunt = 1 ta Iqromax akkaunt. Ma\'lumotlar bazasi toza va ishonchli bo\'ldi.'
        },
        {
          num: '4',
          title: 'OTP tasdiqlash jarayonining noto\'g\'ri ishlashi',
          problem: 'OTP qayerga yuborilishi va qayerga kiritilishi aniq emas edi. Xavfsizlik past edi.',
          solution: 'OTP faqat Telegram botga yuboriladigan qilindi. Foydalanuvchi OTP\'ni faqat web saytga kiritadi. OTP vaqt bilan cheklangan va bir martalik qilindi.',
          result: 'Real vaqtli, xavfsiz va foydalanuvchi uchun qulay ro\'yxatdan o\'tish tizimi yaratildi.'
        }
      ],
      conclusion: {
        title: 'Yakuniy xulosa',
        points: [
          'Mobil (Android + iOS) muammolar to\'liq bartaraf etildi',
          'Telegram autentifikatsiya tizimi real va xavfsiz qilindi',
          'Duplicate account\'lar oldi olindi',
          'Sayt professional va production darajaga olib chiqildi'
        ],
        closing: 'Iqromax.uz hozir: texnik jihatdan barqaror, xavfsiz, real foydalanuvchilar uchun ishonchli platformaga aylandi.'
      }
    }
  }
]

export function getProjectBySlug(slug) {
  return projects.find(p => p.slug === slug)
}

export function getFeaturedProjects() {
  return projects.filter(p => p.featured)
}

