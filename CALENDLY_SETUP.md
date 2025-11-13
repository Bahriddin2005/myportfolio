# 🎥 CALENDLY VIDEO CALL SETUP

## ⚡ TEZKOR YO'RIQNOMA

Video qo'ng'iroq funksiyasi qo'shildi! Foydalanuvchilar sizning bilan video orqali gaplasha olishadi.

---

## 📋 1-QADAM: Calendly Account Yarating

### **A) Calendly.com ga o'ting:**
```
https://calendly.com/signup
```

### **B) Bepul akkaunt yarating:**
- Email bilan ro'yxatdan o'ting
- Profil to'ldiring (ism, vaqt zonasi, etc.)
- ✅ **Bepul plan etarli!**

---

## 🔗 2-QADAM: Event Type Yarating

### **A) "New Event Type" tugmasini bosing**

### **B) Event sozlamalari:**
- **Event Name:** "30 Minute Meeting" yoki "Konsultatsiya"
- **Duration:** 15min, 30min, 60min (o'zingiz tanlang)
- **Location:** 
  - Google Meet (tavsiya)
  - Zoom
  - Microsoft Teams
- **Description:** Loyiha muhokamasi, narx hisoblash, texnik savol-javob

### **C) Availability sozlash:**
- Hafta kunlari: Dushanba-Juma
- Vaqt: 09:00 - 18:00 (o'zingiz tanlang)
- Buffer time: 15min (optional)

### **D) "Save & Close"**

---

## 📝 3-QADAM: Calendly Linkni Olish

### **A) Dashboard'ga o'ting:**
```
https://calendly.com/event_types/user/me
```

### **B) Event type'ingizni toping:**
- "30 Minute Meeting" yoki sizning event nomingiz
- "Copy Link" tugmasini bosing
- **Misol:** `https://calendly.com/baxadevuz/30min`

---

## 💻 4-QADAM: Portfolio'da Linkni Yangilash

### **Faylni oching:**
```bash
src/pages/contact.jsx
```

### **Qatorlarni toping va yangilang:**

**Qator 71:** (Video Call karta)
```jsx
href="https://calendly.com/baxadevuz/30min"  // ❌ Eski link
href="https://calendly.com/SIZNING_USERNAME/30min"  // ✅ Yangi link
```

**Qator 196:** (Katta CTA bo'limi)
```jsx
href="https://calendly.com/baxadevuz/30min"  // ❌ Eski link
href="https://calendly.com/SIZNING_USERNAME/30min"  // ✅ Yangi link
```

**Qator 259:** (Kontakt ma'lumotlari)
```jsx
href="https://calendly.com/baxadevuz/30min"  // ❌ Eski link
href="https://calendly.com/SIZNING_USERNAME/30min"  // ✅ Yangi link
```

### **Yoki terminal'da avtomatik almashtiring:**
```bash
# Hamma joyda bir vaqtda o'zgartirish:
sed -i 's/calendly\.com\/baxadevuz\/30min/calendly.com\/SIZNING_USERNAME\/30min/g' src/pages/contact.jsx
```

---

## 🎨 5-QADAM: Test Qiling

### **A) Local test:**
```bash
npm run dev
```

### **B) Contact page'ga o'ting:**
```
http://localhost:3000/contact
```

### **C) Video Call kartasini bosing:**
- ✅ Calendly widget ochilishi kerak
- ✅ Sizning vaqt jadvalingiz ko'rinishi kerak
- ✅ Vaqt tanlash va booking qilish mumkin

---

## 🚀 6-QADAM: Deploy Qiling

```bash
git add -A
git commit -m "feat: Update Calendly link to personal account"
git push origin main
```

---

## 🎯 QANDAY ISHLAYDI?

### **Foydalanuvchi uchun:**
1. Contact page'ga kiradi
2. "Video Call" kartasini bosadi
3. Calendly widget ochiladi
4. Qulay vaqt tanlaydi
5. Email va ismini kiritadi
6. ✅ Booking tasdiqlanadi
7. 📧 Email orqali Google Meet/Zoom link keladi

### **Siz uchun:**
1. 📧 Email notification keladi
2. 📅 Kalendaringizga qo'shiladi
3. 🔔 Meeting'dan oldin eslatma
4. 🎥 Video link avtomatik yaratiladi

---

## ⚙️ ADVANCED SOZLAMALAR (Optional)

### **Custom Domain (Pro plan):**
```
calendly.com/baxadevuz → cal.baxadevuz.dev
```

### **Embed Widget (iframe):**
Contact page'ga to'liq embed qilish:
```jsx
<iframe 
  src="https://calendly.com/YOUR_USERNAME" 
  width="100%" 
  height="800px"
  frameBorder="0"
/>
```

### **Calendly API:**
Advanced integration uchun:
```
https://developer.calendly.com/
```

---

## 🆓 BEPUL vs PRO

| Feature | Free | Pro ($12/mo) |
|---------|------|--------------|
| 1 event type | ✅ | ✅ |
| Unlimited bookings | ✅ | ✅ |
| Google Meet/Zoom | ✅ | ✅ |
| Remove Calendly branding | ❌ | ✅ |
| Multiple event types | ❌ | ✅ |
| Custom reminders | ❌ | ✅ |
| Integrations (CRM) | ❌ | ✅ |

**Boshlash uchun bepul plan yetarli!**

---

## 🎉 TAYYOR!

Video qo'ng'iroq funksiyasi ishlayapti! 🚀

Foydalanuvchilar endi sizning bilan to'g'ridan-to'g'ri video orqali gaplasha olishadi! 🎥✨

---

## ❓ SAVOL-JAVOBLAR

**Q: Calendly o'rniga boshqa xizmatdan foydalansa bo'ladimi?**
A: Ha! Cal.com, Acuity Scheduling, Doodle - barchasi ishlaydi. Linkni almashtiring.

**Q: Video qo'ng'iroq uchun pul to'lash kerakmi?**
A: Yo'q, Calendly bepul. Google Meet ham bepul (Gmail bilan).

**Q: Necha kishi booking qilishi mumkin?**
A: Cheksiz! Bepul plan'da limitlar yo'q.

**Q: Mobil'da ishlayaptimi?**
A: Ha, to'liq responsive. Telefon, planshet, desktop - hamma joyda.

---

**Qo'shimcha yordam kerakmi? Contact page'ni oching va test qiling!** 📞

