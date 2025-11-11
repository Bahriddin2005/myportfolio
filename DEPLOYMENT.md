# 🚀 Deployment Guide — Portfolio Website

Portfolio saytni production ga deploy qilish bo'yicha to'liq qo'llanma.

## 📋 Pre-Deployment Checklist

Deploy qilishdan oldin:

- [x] Barcha sahifalar test qilindi
- [x] Mobile responsive check
- [x] Performance optimized (Lighthouse 90+)
- [ ] Domain sotib olindi
- [ ] Professional content tayyor
- [ ] Rasmlar optimized (WebP format)
- [ ] Resume PDF tayyor
- [ ] Social links update
- [ ] Contact form test
- [ ] Analytics setup

## 🌐 Option 1: Vercel (Recommended — Eng oson)

Vercel — Next.js uchun eng yaxshi hosting. Bepul, tez va oson.

### Step 1: GitHub'ga push

```bash
# Git repository yarating
git init
git add .
git commit -m "Initial commit: Portfolio website"

# GitHub'ga push (repository yaratganingizdan keyin)
git remote add origin https://github.com/username/portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Vercel'ga deploy

1. [vercel.com](https://vercel.com) ga o'ting
2. "Sign up with GitHub" tugmasini bosing
3. "Add New" → "Project"
4. GitHub repository'ni tanlang
5. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: (auto)
6. "Deploy" bosing

⏱️ 2-3 daqiqada deploy bo'ladi!

### Step 3: Custom Domain qo'shish

1. Vercel Dashboard → Project → Settings → Domains
2. `bahriddin.dev` yoki `www.bahriddin.dev` kiriting
3. Nameserver yoki A/CNAME record update qiling:

**Option A: Nameserver (Oson)**
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Option B: A Record**
```
A @ 76.76.21.21
CNAME www cname.vercel-dns.com
```

4. DNS propagation (10-60 daqiqa)
5. Tayyor! ✅ HTTPS avtomatik

---

## 🌊 Option 2: Netlify

Alternative option — Netlify ham yaxshi.

### Deploy qilish

```bash
# Build
npm run build

# Netlify CLI o'rnatish
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

Yoki:
1. [app.netlify.com](https://app.netlify.com) → "Add new site"
2. GitHub repo connect
3. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
4. Deploy!

---

## 🐳 Option 3: Docker + VPS (Advanced)

O'z serveringizda deploy qilish.

### Dockerfile yaratish

```dockerfile
# Dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

### Docker Compose

```yaml
# docker-compose.yml
version: '3.8'
services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

### Deploy qilish

```bash
# Build va run
docker-compose up -d

# Nginx reverse proxy (recommended)
# /etc/nginx/sites-available/portfolio
server {
    listen 80;
    server_name bahriddin.dev;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# SSL (Let's Encrypt)
sudo certbot --nginx -d bahriddin.dev
```

---

## ☁️ Option 4: AWS (Elastic Beanstalk yoki EC2)

Enterprise-level hosting.

### AWS Elastic Beanstalk

```bash
# EB CLI o'rnatish
pip install awsebcli

# Initialize
eb init -p node.js bahriddin-portfolio

# Create environment
eb create portfolio-env

# Deploy
eb deploy
```

### AWS EC2 + PM2

```bash
# EC2 instance ga SSH
ssh -i key.pem ubuntu@your-ec2-ip

# Setup
sudo apt update
sudo apt install nodejs npm nginx

# Clone repo
git clone https://github.com/username/portfolio.git
cd portfolio
npm install
npm run build

# PM2 setup
sudo npm install -g pm2
pm2 start npm --name "portfolio" -- start
pm2 startup
pm2 save

# Nginx config
sudo nano /etc/nginx/sites-available/default
# (Yuqoridagi nginx config ni qo'shing)

sudo systemctl restart nginx
```

---

## 📊 Analytics Setup

### Google Analytics

1. [analytics.google.com](https://analytics.google.com) → Property yarating
2. Measurement ID oling (G-XXXXXXXXXX)
3. `_document.jsx` ga qo'shing:

```jsx
<script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `,
  }}
/>
```

### Plausible Analytics (Privacy-friendly alternative)

```bash
npm install next-plausible
```

`_app.jsx`:
```jsx
import PlausibleProvider from 'next-plausible'

export default function App({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="bahriddin.dev">
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}
```

---

## 📧 Contact Form Backend Setup

### Option A: Formspree (Oson)

```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  {/* form fields */}
</form>
```

### Option B: Django Backend

```bash
# Backend yaratish
django-admin startproject backend
cd backend
python manage.py startapp api

# Django REST Framework
pip install djangorestframework django-cors-headers

# Email view
# api/views.py
from rest_framework.decorators import api_view
from django.core.mail import send_mail

@api_view(['POST'])
def contact(request):
    send_mail(
        subject=request.data['subject'],
        message=request.data['message'],
        from_email=request.data['email'],
        recipient_list=['hello@bahriddin.dev']
    )
    return Response({'status': 'success'})
```

Deploy backend to Railway / Heroku.

---

## 🔒 Security Checklist

- [ ] HTTPS enabled (SSL certificate)
- [ ] Environment variables secure
- [ ] CORS properly configured
- [ ] Rate limiting on contact form
- [ ] Content Security Policy headers
- [ ] Regular dependency updates
- [ ] Backup strategy

---

## 📈 Performance Optimization

### 1. Image Optimization

```jsx
import Image from 'next/image'

<Image 
  src="/images/project.jpg"
  alt="Project"
  width={800}
  height={600}
  quality={85}
  loading="lazy"
/>
```

### 2. Code Splitting

```jsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
})
```

### 3. Caching Strategy

Vercel automatically caches. For custom:

```js
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

---

## 🐛 Troubleshooting

### Build failures

```bash
# Clear cache
rm -rf .next
npm run build
```

### Environment variables not working

```bash
# Vercel: Project Settings → Environment Variables
# Add variables there, redeploy
```

### Domain not connecting

- DNS propagation: 24-48 hours
- Check nameservers: `nslookup bahriddin.dev`
- Verify SSL: `https://www.ssllabs.com/ssltest/`

---

## 📱 Post-Deployment Tasks

1. **Test everything**:
   - [ ] All pages load
   - [ ] Forms submit
   - [ ] Links work
   - [ ] Mobile responsive
   - [ ] Performance (Lighthouse)

2. **SEO**:
   - [ ] Google Search Console submit
   - [ ] Sitemap submit
   - [ ] Bing Webmaster Tools

3. **Marketing**:
   - [ ] LinkedIn profile update
   - [ ] GitHub profile README
   - [ ] Twitter bio
   - [ ] Email signature

4. **Monitoring**:
   - [ ] Set up Vercel Analytics
   - [ ] Google Analytics
   - [ ] Uptime monitoring (UptimeRobot)

---

## 🎉 Success!

Portfolio saytingiz live! 🚀

**Keyingi qadamlar:**
1. Social media'da share qiling
2. LinkedIn'da post yarating
3. GitHub README'ga link qo'shing
4. Portfolio to'liq optimizatsiya qiling

Savollar bo'lsa: hello@bahriddin.dev

---

**Good luck! 💪**

