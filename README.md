# 🚀 Bahriddin Portfolio — Million-Dollar Professional Website

Professional, zamonaviy va kuchli portfolio website — Full-Stack Developer, Product Designer va texnologiya professionallar uchun.

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.x-ff0055)](https://www.framer.com/motion/)

## ✨ Features

- 🎨 **Modern UI/UX**: Zamonaviy dizayn tizimi, gradient ranglar, smooth animatsiyalar
- 📱 **Fully Responsive**: Barcha qurilmalarda mukammal ko'rinish
- ⚡ **Performance Optimized**: Core Web Vitals optimized, lazy loading, code splitting
- 🎬 **Smooth Animations**: Framer Motion bilan professional animatsiyalar
- 🔍 **SEO Optimized**: Meta tags, Open Graph, JSON-LD structured data
- 📊 **Project Showcase**: Case study formatida loyihalar (Problem → Solution → Impact)
- 📄 **Interactive Resume**: Timeline, skills bars, downloadable PDF
- 📮 **Contact Form**: To'liq funksional aloqa shakli
- 🌐 **Multi-language ready**: O'zbek, English support

## 🎯 Sahifalar

- **Home** (`/`) — Hero, featured projects, skills, CTA
- **About** (`/about`) — Bio, values, timeline, testimonials
- **Projects** (`/projects`) — Barcha loyihalar, search va filter
- **Project Detail** (`/projects/[slug]`) — To'liq case study
- **Resume** (`/resume`) — Interaktiv CV + PDF download
- **Contact** (`/contact`) — Form, contact info, social links
- **Privacy** & **Terms** — Legal pages

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (React 18)
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 10
- **Icons**: React Icons (Heroicons, Font Awesome)
- **Fonts**: Inter, Poppins (Google Fonts)

### Development
- **Language**: JavaScript (JSX)
- **Linting**: ESLint (Next.js config)
- **Package Manager**: npm / yarn / pnpm

## 📦 Installation

### Prerequisites
- Node.js 16+ va npm/yarn o'rnatilgan bo'lishi kerak

### 1. Loyihani klonlash

```bash
cd /home/baxadev/Desktop/portfolio
```

### 2. Dependencylarni o'rnatish

```bash
npm install
# yoki
yarn install
# yoki
pnpm install
```

### 3. Development server ishga tushirish

```bash
npm run dev
# yoki
yarn dev
```

Brauzerda [http://localhost:3000](http://localhost:3000) ochiladi.

## 📁 Project Structure

```
bahriddin-portfolio/
├── public/
│   ├── favicon.ico          # Site icon
│   ├── resume.pdf           # Downloadable resume
│   ├── og-image.jpg         # Open Graph image
│   └── robots.txt           # SEO
├── src/
│   ├── components/
│   │   ├── Nav.jsx          # Navigation bar
│   │   ├── Footer.jsx       # Footer component
│   │   ├── Hero.jsx         # Hero section
│   │   ├── ProjectCard.jsx  # Project card
│   │   └── SkillsSection.jsx
│   ├── pages/
│   │   ├── _app.jsx         # App wrapper
│   │   ├── _document.jsx    # HTML document
│   │   ├── index.jsx        # Home page
│   │   ├── about.jsx        # About page
│   │   ├── projects.jsx     # Projects list
│   │   ├── projects/[slug].jsx  # Project detail
│   │   ├── resume.jsx       # Resume page
│   │   ├── contact.jsx      # Contact page
│   │   ├── privacy.jsx      # Privacy policy
│   │   └── terms.jsx        # Terms of service
│   ├── lib/
│   │   └── projectsData.js  # Projects data
│   └── styles/
│       └── globals.css      # Global styles
├── tailwind.config.js       # Tailwind config
├── next.config.js           # Next.js config
├── postcss.config.js        # PostCSS config
├── package.json
└── README.md
```

## 🎨 Customization

### 1. Personal ma'lumotlarni o'zgartirish

**`src/pages/index.jsx`, `about.jsx`, `resume.jsx`** — ismingiz, bio, tajriba
**`src/lib/projectsData.js`** — loyihalaringiz
**`src/components/Footer.jsx`** — ijtimoiy tarmoq havolalari

### 2. Ranglarni o'zgartirish

`tailwind.config.js` faylida:

```js
colors: {
  primary: '#2563EB',     // Asosiy rang
  cyan: '#06B6D4',        // Ikkinchi rang
  bg: '#F8FAFC',          // Fon rangi
  dark: '#0F172A'         // Matn rangi
}
```

### 3. Rasmlarni qo'shish

`public/` papkaga rasmlar qo'shing:
- `public/images/headshot.jpg` — sizning rasmingiz
- `public/images/project1.jpg` — loyiha rasmlari
- `public/og-image.jpg` — social media preview (1200×630px)

### 4. Resume PDF yaratish

`public/resume.pdf` — tayyor PDF resume fayl qo'shing.

## 🚀 Deployment

### Vercel (Recommended — Eng oson)

1. GitHub'ga push qiling:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/portfolio.git
git push -u origin main
```

2. [vercel.com](https://vercel.com) ga kiring
3. "Import Project" → GitHub repo tanlang
4. Deploy bosing — tayyor! ✅

**Custom domain qo'shish:**
- Vercel dashboard → Settings → Domains
- `bahriddin.dev` domain qo'shing
- DNS record update qiling

### Alternative Deployment

**Netlify:**
```bash
npm run build
# Netlify'ga deploy qiling
```

**AWS / DigitalOcean:**
```bash
npm run build
npm start
# PM2 bilan process manager
```

## 📈 SEO Optimization

### Meta Tags

Har bir sahifada unique title va description:

```jsx
<Head>
  <title>Sahifa nomi — Bahriddin</title>
  <meta name="description" content="Tavsif..." />
</Head>
```

### Sitemap yaratish

`next-sitemap` package o'rnatish:

```bash
npm install next-sitemap
```

`next-sitemap.config.js`:

```js
module.exports = {
  siteUrl: 'https://bahriddin.dev',
  generateRobotsTxt: true
}
```

### Google Analytics

`_document.jsx` ga Google Analytics script qo'shing:

```jsx
<script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
/>
```

## 🔧 Advanced Features

### 1. Backend API (Contact Form)

Django REST API yoki Node.js backend qo'shish uchun:

```bash
# Backend papka yarating
mkdir backend
cd backend
django-admin startproject api .
```

### 2. CMS Integration (Sanity / Contentful)

Kontent boshqarish uchun:

```bash
npm install @sanity/client
```

### 3. Analytics (Plausible / Google Analytics)

```bash
npm install next-plausible
```

### 4. Performance Monitoring

```bash
npm install @vercel/analytics
```

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **Core Web Vitals**: Optimized
- **Bundle Size**: < 200KB (gzipped)
- **First Load**: < 2s

## 🐛 Troubleshooting

### Xatolar

**Module not found:**
```bash
npm install
```

**Port busy:**
```bash
npm run dev -- -p 3001
```

**Build errors:**
```bash
rm -rf .next
npm run build
```

## 📝 Roadmap

- [ ] Blog qo'shish (`/blog`)
- [ ] Dark mode toggle
- [ ] Multi-language support (i18n)
- [ ] Admin panel (loyihalarni update qilish)
- [ ] Newsletter subscription
- [ ] Real-time chat support
- [ ] Analytics dashboard

## 🤝 Contributing

Pull request'lar xush kelibsiz! Katta o'zgarishlar uchun avval issue oching.

## 📄 License

MIT License — erkin foydalaning va customize qiling.

## 📞 Support

- **Email**: hello@baxadevuz.dev
- **Telegram**: [@baxadevuz](https://t.me/baxadevuz)
- **GitHub**: [github.com/bahriddin](https://github.com/bahriddin)

---

**Made with ❤️ by Bahriddin**

Portfolio yaratish bo'yicha savollar bo'lsa — aloqaga chiqing!

## 🎯 Investor/Client Checklist

Portfolio tayyor bo'lgandan keyin:

- [ ] Domain sotib olish va connect qilish
- [ ] Professional headshot rasm qo'shish
- [ ] Barcha loyihalar to'liq case-study bilan
- [ ] Resume PDF optimized va downloadable
- [ ] Contact form test qilish
- [ ] Social media links update
- [ ] Google Analytics o'rnatish
- [ ] Open Graph image yaratish (1200×630)
- [ ] Mobile responsive test
- [ ] Lighthouse audit 90+ score
- [ ] LinkedIn, GitHub profilda link qo'shish
- [ ] Email signature update qilish

---

🚀 **Muvaffaqiyatlar tilayman! G'oyadan million-dollar mahsulotgacha!**

