# ⚡ Quick Start Guide

Portfolio saytni 5 daqiqada ishga tushirish!

## 🚀 Tezkor boshlash

### 1. Dependencylarni o'rnatish

```bash
cd /home/baxadev/Desktop/portfolio
npm install
```

### 2. Development server

```bash
npm run dev
```

Browser: [http://localhost:3000](http://localhost:3000) 🎉

## ✏️ Muhim o'zgarishlar

### 1. Shaxsiy ma'lumotlar

**Barcha fayllarda "Bahriddin" o'rniga o'z ismingizni qo'ying:**

```bash
# Linux/Mac:
grep -r "Bahriddin" src/ | cut -d: -f1 | sort -u

# Yoki manual:
# - src/pages/index.jsx
# - src/pages/about.jsx  
# - src/pages/resume.jsx
# - src/components/Hero.jsx
# - src/components/Footer.jsx
```

### 2. Loyihalar ma'lumotlari

**`src/lib/projectsData.js`** — o'z loyihalaringizni qo'shing:

```js
export const projects = [
  {
    id: 1,
    title: 'Sizning proyekt nomingiz',
    slug: 'project-slug',
    image: '🚀', // emoji yoki rasm path
    year: '2025',
    summary: 'Qisqa tavsif...',
    description: 'To\'liq tavsif...',
    // ... va boshqalar
  }
]
```

### 3. Rasmlar qo'shish

```bash
# Rasmlar papkasi yarating
mkdir -p public/images

# Kerakli rasmlar:
# - public/images/headshot.jpg (sizning rasmingiz)
# - public/images/project1.jpg (loyiha rasmlari)
# - public/og-image.jpg (1200x630px, social media preview)
# - public/resume.pdf (tayyor CV)
```

### 4. Social media links

**`src/components/Footer.jsx`** va **`Nav.jsx`** da:

```jsx
const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/YOUR_USERNAME' },
  { icon: <FaLinkedin />, href: 'https://linkedin.com/in/YOUR_USERNAME' },
  // ... va boshqalar
]
```

### 5. Contact info

**`src/pages/contact.jsx`** va **`resume.jsx`** da:

```jsx
email: 'your-email@example.com'
phone: '+998 XX XXX XX XX'
location: 'Shahar, Uzbekistan'
```

## 🎨 Dizaynni sozlash

### Ranglar o'zgartirish

**`tailwind.config.js`:**

```js
colors: {
  primary: '#2563EB',  // O'z rangingiz
  cyan: '#06B6D4',     // Ikkinchi rang
  // ...
}
```

### Font o'zgartirish

**`src/styles/globals.css`:**

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap');
```

## 📦 Build va Deploy

### Local build test

```bash
npm run build
npm start
```

### Vercel'ga deploy

```bash
# GitHub'ga push
git init
git add .
git commit -m "Initial commit"
git push

# Vercel.com da GitHub repo connect qiling
# Auto-deploy! ✅
```

Batafsil: `DEPLOYMENT.md` ni ko'ring.

## ✅ Checklist

Deploy qilishdan oldin:

- [ ] Shaxsiy ma'lumotlar o'zgartirildi
- [ ] Loyihalar qo'shildi
- [ ] Rasmlar yuklandi
- [ ] Social links update
- [ ] Contact form test qilindi
- [ ] Mobile responsive check
- [ ] Resume PDF tayyor
- [ ] Build test (`npm run build`)

## 🆘 Yordam kerakmi?

- 📖 To'liq qo'llanma: `README.md`
- 🚀 Deploy guide: `DEPLOYMENT.md`
- 📧 Email: hello@bahriddin.dev

**Omad tilaymiz! 🎉**

