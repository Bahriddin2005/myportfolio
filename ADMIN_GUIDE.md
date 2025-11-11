# 🔐 Admin Access Guide

## Admin Features

Admin mode faqat sizga (portfolio owner'ga) ruxsat beradi:
- ✅ Profile rasmini yuklash
- ✅ Profile rasmini o'chirish
- ✅ Boshqa foydalanuvchilar bu funksiyalarni ko'rmaydi

---

## 🔑 Admin Login

### Qanday kirish:

1. **Double-click** pastki chap burchakdagi 🔒 icon (lock icon)
2. **Modal ochiladi** - "Admin Access"
3. **Parolni kiriting**
4. **Login** tugmasini bosing

### Default Parol:
```
bahriddin2025
```

---

## 📸 Profile Image Upload (Admin Only)

Admin mode yoqilgandan keyin:

### Visible Elements:
- **📸 Button** - Purple-pink gradient (rasm yuklash)
- **🚪 Button** - Red logout button (admin mode'dan chiqish)

### How to Upload:
1. **Click** 📸 button
2. **Select** your professional photo
3. **Image saves** to localStorage
4. **All pages** automatically update

### Supported Formats:
- PNG, JPG, JPEG, WebP
- Maximum size: 5MB
- Recommended: Square 500x500px professional headshot

---

## 🚪 Admin Logout

**Click** red logout button → Admin mode deactivated

Boshqa foydalanuvchilar:
- 🔒 icon ko'radilar (transparent, small)
- Parolsiz kirolmaydilar
- Rasm yuklash imkoniyati yo'q

---

## 🔒 Security

### Password Change

Parolni o'zgartirish uchun `src/pages/_app.jsx` faylida:

```javascript
const ADMIN_PASSWORD = 'bahriddin2025'  // ← Shu qatorni o'zgartiring
```

### Production Deployment

Production serverga deploy qilganingizda:
1. Parolni **kuchli parolga** o'zgartiring
2. `ADMIN_GUIDE.md` faylni **.gitignore**'ga qo'shing
3. Environment variable ishlatishni o'ylab ko'ring

---

## 📋 Admin Checklist

- ✅ Admin password set: `bahriddin2025`
- ✅ Double-click to access admin
- ✅ Upload profile image (admin only)
- ✅ Remove profile image (admin only)
- ✅ Logout functionality working
- ✅ Other users cannot access

---

## 💡 Tips

1. **Professional Photo**: Use high-quality headshot (500x500px minimum)
2. **Background**: Clean, professional background recommended
3. **Lighting**: Good lighting for clear visibility
4. **Format**: PNG with transparent background looks best
5. **Privacy**: Only you can change the image

---

## 🎯 Quick Start

```bash
# 1. Open your portfolio
http://localhost:3000

# 2. Double-click lock icon (bottom-left)

# 3. Enter password: bahriddin2025

# 4. Click camera icon to upload photo

# 5. Done! Your photo appears everywhere
```

**Admin mode faqat sizga! Boshqa foydalanuvchilar faqat ko'radilar, o'zgartira olmaydilar!** 🔐✅

