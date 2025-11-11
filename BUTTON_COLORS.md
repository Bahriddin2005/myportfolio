# 🎨 Button Color Guide — Portfolio Website

Har bir tugma unique gradient rangiga ega!

## 🌈 Button Color Scheme

### Home Page (/)

| Tugma | Gradient | Shadow | Hover Gradient | Purpose |
|-------|----------|--------|----------------|---------|
| **Portfolio ko'rish** | Purple → Fuchsia → Pink | Purple glow | Pink → Orange | Main CTA |
| **Gaplashamiz** | Cyan → Teal → Emerald | Cyan glow | Emerald → Blue | Contact |
| **Bepul konsultatsiya** | Orange → Amber → Yellow | Orange glow | Yellow → Red | CTA |
| **Resume ko'rish** | Glass (white/10) | None | Purple → Pink bg | Secondary |
| **Barcha loyihalar** | Slate → Gray → Dark | Slate glow | Dark hover | View All |

### Project Cards

| Card | Gradient | Features |
|------|----------|----------|
| **Buxoro Bilimdonlar** | Blue → Cyan | Blue shadow, Glass badges |
| **CodeLab** | Orange → Pink → Rose | Pink shadow, Glass badges |

### Resume Page (/resume)

| Tugma | Gradient | Purpose |
|-------|----------|---------|
| **PDF yuklab olish** | Green → Emerald → Teal | Download |
| **Aloqaga chiqish** | Orange → Red → Pink | Contact CTA |

### About Page (/about)

| Tugma | Gradient | Purpose |
|-------|----------|---------|
| **Aloqaga chiqish** | Indigo → Purple → Pink | Contact CTA |

### Contact Page (/contact)

| Tugma | Gradient | Purpose |
|-------|----------|---------|
| **Xabar yuborish** | Indigo → Purple → Fuchsia | Submit form |
| **Live Chat** | Blue → Cyan | Chat button (sidebar) |
| **Telegram** | Green → Emerald | Telegram link |

### Navigation (Navbar)

| Tugma | Gradient | Purpose |
|-------|----------|---------|
| **Bog'lanish** | Orange → Pink → Rose | Main CTA |

### Values Cards (/about)

| Card | Gradient | Icon |
|------|----------|------|
| **Innovation** | Blue → Cyan | 💡 |
| **Quality** | Pink → Rose | ❤️ |
| **Growth** | Purple → Indigo | 📈 |
| **Learning** | Green → Emerald | 🎓 |

## 🎨 CSS Classes

```css
.btn-blue       → Blue gradient
.btn-purple     → Purple/Pink gradient
.btn-cyan       → Cyan/Teal gradient
.btn-green      → Green/Emerald gradient
.btn-orange     → Orange/Amber gradient
.btn-pink       → Pink/Rose gradient
.btn-indigo     → Indigo/Purple gradient
.btn-glass      → Transparent glass effect
.btn-dark       → Dark slate gradient
```

## 💡 Usage Examples

### Primary CTA
```jsx
className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500"
```

### Secondary Action
```jsx
className="bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-500"
```

### Submit Button
```jsx
className="bg-gradient-to-r from-indigo-600 via-purple-500 to-fuchsia-500"
```

### Download
```jsx
className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500"
```

### Dark/Neutral
```jsx
className="bg-gradient-to-r from-slate-700 via-gray-800 to-slate-900"
```

## 🎯 Color Psychology

- **Purple/Pink** → Creative, premium, luxury
- **Blue/Cyan** → Trust, professional, tech
- **Green/Emerald** → Success, growth, download
- **Orange/Red** → Energy, action, urgent
- **Indigo/Purple** → Innovation, premium
- **Dark/Slate** → Professional, elegant

## ⚡ Effects

All buttons have:
- ✅ `hover:scale-110` — Scale on hover
- ✅ `hover:-translate-y-1` — Lift effect
- ✅ `shadow-2xl` — Large shadow
- ✅ `duration-500` — Smooth animation
- ✅ Gradient shift on hover
- ✅ Icon rotate/scale

## 🎬 Animations

```css
Hover → Scale 1.1x + Lift 4px + Shadow grow
Icon → Rotate 12° + Scale 1.25x
Gradient → Shift to different colors
Duration → 500ms (smooth)
```

## 📱 Responsive

```jsx
Mobile:   px-8 py-4
Desktop:  px-12 py-5
Text:     text-base → text-lg
```

## 🎨 Color Combinations

### Best Combos:
1. **Purple → Pink** — Creative/Premium
2. **Blue → Cyan** — Professional/Tech
3. **Orange → Pink** — Energetic/Bold
4. **Green → Teal** — Success/Growth
5. **Indigo → Purple** — Innovation

### Avoid:
- ❌ Too many colors on one page
- ❌ Similar gradients nearby
- ❌ Conflicting shadows

## 💎 Pro Tips

1. **Use color coding** — Similar actions = similar colors
2. **Primary CTA** → Brightest, boldest color
3. **Secondary** → Softer, glass effect
4. **Download** → Green (success/action)
5. **Contact/Chat** → Warm colors (orange/pink)

---

**Design by Bahriddin** 🎨

