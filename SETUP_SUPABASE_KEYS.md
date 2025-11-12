# 🔑 Supabase Keys Setup - MUHIM!

Chat'ning har qayerdan ko'rinishi uchun keys kerak.

---

## ⚡ **TEZKOR SETUP (5 daqiqa):**

### **1. Supabase Account (2 min)**

```
1. https://supabase.com ochish
2. "Start your project" → GitHub bilan login
3. "New project" yaratish:
   - Name: portfolio-chat
   - Password: o'ylab topish (eslab qolish!)
   - Region: tanlash
4. 2 minut kutish (database yaratilmoqda)
```

---

### **2. Database Setup (1 min)**

```
1. Supabase Dashboard → SQL Editor
2. "New query" bosish
3. Loyihada: supabase-setup.sql faylini ochish
4. BARCHA SQL'ni copy-paste qilish
5. "Run" bosish
6. ✅ "Database setup complete!" ko'rinishi kerak
```

---

### **3. Keys Olish (1 min)**

```
1. Settings → API (chap menu)
2. Copy qiling:
   - Project URL
   - anon public key
```

---

### **4. .env.local Yaratish (1 min)**

Loyihada `.env.local` fayl yarating:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.your-key-here
```

**ESLATMA:** O'z keys'laringizni qo'ying!

---

### **5. Restart (10 sek)**

```bash
# Development server'ni to'xtatish (Ctrl+C)
# Qayta ishga tushirish:
npm run dev
```

---

## ✅ **Test:**

```
1. Browser 1: http://localhost:3000
   → Chat ochish → Xabar yozish

2. Browser 2 (yoki boshqa device):
   http://localhost:3000/administration
   → Login → Messages
   → ✅ Xabar ko'rinadi!
```

---

## 🚀 **Deploy (Vercel/Render):**

Environment variables qo'shing:

```
NEXT_PUBLIC_SUPABASE_URL=your-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
```

---

## ❌ **Agar Keys Yo'q Bo'lsa:**

Chat **localStorage** ishlatadi (faqat same browser).

Keys qo'yganingizdan keyin **database**'da saqlanadi (har yerda ko'rinadi).

---

## 📞 **Yordam:**

Keys topishda qiynalsangiz, `SUPABASE_INTEGRATION_GUIDE.md` ga qarang.

