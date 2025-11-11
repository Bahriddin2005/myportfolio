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
  }
]

export function getProjectBySlug(slug) {
  return projects.find(p => p.slug === slug)
}

export function getFeaturedProjects() {
  return projects.filter(p => p.featured)
}

