# 🚀 VPS SERVER'GA XAVFSIZ DEPLOY - MY_TEST XALAQIT BERMAYDI

## ⚠️ MUAMMO:
- VPS'da `my_test` project bor
- Portfolio'ni deploy qilmoqchisiz
- my_test'ni xalaqit qilmaslik kerak
- Oldin repositoriy o'zgarib ketgan

## ✅ YECHIM: ALOHIDA PAPKALAR + ALOHIDA PORTLAR

---

## 📁 1-QADAM: VPS STRUKTURA

### **Server'dagi papkalar:**
```bash
/home/username/
├── my_test/              # ← Mavjud project (ishlab turibdi)
│   ├── .git/
│   ├── package.json
│   └── ...
│
└── portfolio/            # ← Yangi project (qo'shamiz)
    ├── .git/
    ├── package.json
    └── ...
```

### **Portlar:**
```
my_test:   port 3000 (yoki boshqa port)
portfolio: port 3001 (yangi port)
```

### **Domain/Subdomain:**
```
my_test:   my-test.example.com   (yoki example.com)
portfolio: bahriddin.dev         (yoki portfolio.example.com)
```

---

## 🔧 2-QADAM: VPS'GA SSH QILING

```bash
# SSH bilan kirasiz
ssh username@YOUR_VPS_IP

# Yoki:
ssh root@YOUR_VPS_IP
```

---

## 📦 3-QADAM: YANGI PAPKA YARATING

```bash
# Home directory'ga o'ting
cd /home/username/

# Portfolio uchun papka yarating
mkdir portfolio

# Portfolio papkaga o'ting
cd portfolio

# Git clone qiling (yangi repository!)
git clone https://github.com/Bahriddin2005/myportfolio.git .

# Yoki agar repository boshqa bo'lsa:
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git .
```

⚠️ **MUHIM:** `my_test` papkaga KIRMANG! Yangi papka yarating!

---

## 🔑 4-QADAM: ENVIRONMENT VARIABLES (.env.local)

```bash
# Portfolio papkada:
cd /home/username/portfolio

# .env.local yarating
nano .env.local

# Quyidagilarni kiriting:
NEXT_PUBLIC_SUPABASE_URL=https://nkbootgmzamrlgflezdo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rYm9vdGdtemFtcmxnZmxlemRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5Mjg0MjEsImV4cCI6MjA3ODUwNDQyMX0.KYN8Efb8gLueWgC-dR6m3TjIZNhFfWKjtzidrxSUmwY

# Save: Ctrl+O, Enter, Ctrl+X
```

---

## 📦 5-QADAM: DEPENDENCIES INSTALL

```bash
# Portfolio papkada:
cd /home/username/portfolio

# Node.js version tekshiring
node -v
npm -v

# Agar Node.js yo'q bo'lsa yoki eski bo'lsa:
# NVM orqali yangilang (optional)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20

# Dependencies install qiling
npm install

# Build qiling
npm run build
```

---

## 🚀 6-QADAM: PM2 BILAN ISHGA TUSHIRING

### **PM2 o'rnatish (agar yo'q bo'lsa):**
```bash
npm install -g pm2
```

### **Portfolio'ni PM2 bilan ishga tushiring:**
```bash
# Portfolio papkada:
cd /home/username/portfolio

# PM2 bilan start (PORT 3001)
PORT=3001 pm2 start npm --name "portfolio" -- start

# Status tekshiring
pm2 status

# Ko'rishingiz kerak:
# my_test   | online | port 3000
# portfolio | online | port 3001
```

### **PM2 auto-restart (server reboot bo'lsa):**
```bash
pm2 startup
pm2 save
```

---

## 🌐 7-QADAM: NGINX CONFIGURATION

### **A) Nginx config ochish:**
```bash
sudo nano /etc/nginx/sites-available/portfolio
```

### **B) Config yozish:**
```nginx
server {
    listen 80;
    server_name bahriddin.dev www.bahriddin.dev;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### **C) Config aktivlashtirish:**
```bash
# Symlink yaratish
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/

# Nginx test
sudo nginx -t

# Nginx restart
sudo systemctl restart nginx
```

---

## 🔒 8-QADAM: SSL (HTTPS) QO'SHISH

### **Certbot bilan bepul SSL:**
```bash
# Certbot install (agar yo'q bo'lsa)
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx

# SSL olish
sudo certbot --nginx -d bahriddin.dev -d www.bahriddin.dev

# Follow prompts:
# - Email kiriting
# - Agree to terms
# - Redirect HTTP to HTTPS (Yes)

# Auto-renewal test
sudo certbot renew --dry-run
```

---

## ✅ 9-QADAM: TEST QILING

### **Portfolio:**
```
http://bahriddin.dev       (HTTP)
https://bahriddin.dev      (HTTPS) ✅
```

### **my_test (hali ham ishlayapti!):**
```
http://my-test.example.com
```

---

## 📊 FINAL STRUCTURE

### **Server:**
```
/home/username/
├── my_test/          → port 3000 → my-test.example.com
└── portfolio/        → port 3001 → bahriddin.dev
```

### **PM2 processes:**
```bash
pm2 list

┌─────┬────────────┬─────────┬──────┬─────┐
│ id  │ name       │ status  │ port │ cpu │
├─────┼────────────┼─────────┼──────┼─────┤
│ 0   │ my_test    │ online  │ 3000 │ 0%  │
│ 1   │ portfolio  │ online  │ 3001 │ 0%  │
└─────┴────────────┴─────────┴──────┴─────┘
```

### **Nginx configs:**
```
/etc/nginx/sites-available/
├── my_test       → proxy to :3000
└── portfolio     → proxy to :3001
```

---

## 🛡️ XAVFSIZLIK - MY_TEST XALAQIT QILMAYDI

### **✅ Alohida Git Repository:**
```bash
my_test:   git remote -v    # boshqa repo
portfolio: git remote -v    # boshqa repo
```

### **✅ Alohida Dependencies:**
```bash
my_test:   node_modules/    # alohida
portfolio: node_modules/    # alohida
```

### **✅ Alohida Environment:**
```bash
my_test:   .env.local        # alohida
portfolio: .env.local        # alohida
```

### **✅ Alohida Port:**
```bash
my_test:   3000
portfolio: 3001
```

### **✅ Alohida Process:**
```bash
pm2 list
# 2 ta alohida process
```

---

## ⚠️ OLDINI OLISH (Reponing o'zgarmasligi uchun)

### **1. Git Remote Tekshiring:**
```bash
cd /home/username/portfolio
git remote -v

# Ko'rishingiz kerak:
# origin  https://github.com/Bahriddin2005/myportfolio.git (fetch)
# origin  https://github.com/Bahriddin2005/myportfolio.git (push)
```

### **2. Agar noto'g'ri bo'lsa, o'zgartiring:**
```bash
git remote remove origin
git remote add origin https://github.com/Bahriddin2005/myportfolio.git
```

### **3. Hech qachon quyidagilarni QILMANG:**
```bash
# ❌ NOTO'G'RI:
cd /home/username/my_test
git remote set-url origin https://github.com/NEW_REPO.git  # ← my_test'ning repo'si o'zgaradi!

# ✅ TO'G'RI:
# Har doim to'g'ri papkada ishlang!
pwd  # Qaysi papkadasiz?
```

---

## 🔄 UPDATE WORKFLOW (Kelajakda)

### **my_test update qilish:**
```bash
cd /home/username/my_test
git pull origin main
npm install
npm run build
pm2 restart my_test
```

### **portfolio update qilish:**
```bash
cd /home/username/portfolio
git pull origin main
npm install
npm run build
pm2 restart portfolio
```

⚠️ **2 ta alohida workflow!** Bir-biriga tegmaydi!

---

## 🆘 MUAMMO BO'LSA

### **1. pm2 logs tekshiring:**
```bash
pm2 logs portfolio      # Portfolio logs
pm2 logs my_test        # my_test logs
```

### **2. Port band bo'lsa:**
```bash
# Port 3001 band bo'lsa, boshqa port ishlating:
PORT=3002 pm2 start npm --name "portfolio" -- start
```

### **3. Nginx xatolari:**
```bash
# Nginx error log
sudo tail -f /var/log/nginx/error.log

# Nginx access log
sudo tail -f /var/log/nginx/access.log
```

### **4. Build xatolari:**
```bash
cd /home/username/portfolio
npm run build

# Agar xato bo'lsa, local'da test qiling:
npm run dev
```

---

## 📝 QUICK CHECKLIST

Har bir qadam bajarilganini belgilang:

- [ ] SSH qiling VPS'ga
- [ ] Yangi papka yarating: `mkdir portfolio`
- [ ] Git clone qiling portfolio papkaga
- [ ] `.env.local` yarating
- [ ] `npm install` bajaring
- [ ] `npm run build` bajaring
- [ ] PM2 bilan start qiling (port 3001)
- [ ] Nginx config yarating
- [ ] SSL qo'shing (certbot)
- [ ] Test qiling: https://bahriddin.dev
- [ ] my_test hali ishlaydimi? (tekshiring!)

---

## 🎯 NATIJA

| Project | Papka | Port | Domain | Status |
|---------|-------|------|--------|--------|
| my_test | /home/username/my_test | 3000 | my-test.example.com | ✅ Ishlayapti |
| portfolio | /home/username/portfolio | 3001 | bahriddin.dev | ✅ Yangi |

**Ikkalasi ham parallel ishlaydi!** 🚀

---

## 📞 YORDAM KERAKMI?

Agar muammo bo'lsa:
1. SSH login ma'lumotlaringizni bering (private!)
2. VPS provideringiz nima? (DigitalOcean, Linode, Hetzner?)
3. Qaysi domain ishlatmoqchisiz?
4. my_test qaysi domain'da?

Men step-by-step yordam beraman! 💪

