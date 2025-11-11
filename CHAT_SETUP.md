# 💬 Live Chat Integration Guide

Ariza tizimi uchun Live Chat qo'shish bo'yicha qo'llanma.

## 🎯 Chat Integration Options

### Option 1: Tawk.to (Recommended - Bepul)

**Afzalliklari:**
- ✅ 100% bepul
- ✅ Unlimited chats
- ✅ Mobile app (iOS/Android)
- ✅ Email notifications
- ✅ Chat history
- ✅ Multiple operators

**Setup:**

1. **Sign up**: [tawk.to](https://www.tawk.to)
2. **Create property** — sayt uchun
3. **Get widget code** — Dashboard → Administration → Chat Widget
4. **Add to `src/pages/_document.jsx`**:

```jsx
// _document.jsx
<Head>
  {/* Other head tags */}
  
  {/* Tawk.to Live Chat */}
  <script
    dangerouslySetInnerHTML={{
      __html: `
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
        })();
      `
    }}
  />
</Head>
```

### Option 2: Crisp.chat

**Afzalliklari:**
- ✅ Clean UI
- ✅ Free plan
- ✅ Team collaboration
- ✅ Chatbot integration

**Setup:**

1. Sign up: [crisp.chat](https://crisp.chat)
2. Get website ID
3. Add code to `_document.jsx`:

```jsx
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.$crisp=[];
      window.CRISP_WEBSITE_ID="YOUR_WEBSITE_ID";
      (function(){
        d=document;
        s=d.createElement("script");
        s.src="https://client.crisp.chat/l.js";
        s.async=1;
        d.getElementsByTagName("head")[0].appendChild(s);
      })();
    `
  }}
/>
```

### Option 3: Telegram Bot

**Setup Telegram Bot:**

1. Create bot: `/newbot` @ [BotFather](https://t.me/BotFather)
2. Get API token
3. Contact form'da Telegram button qo'shing
4. Telegram link: `https://t.me/YOUR_BOT_USERNAME`

## 🚀 Qanday ishlaydi?

### Workflow:

```
1. Odamlar contact form'dan ariza yuboradi
        ↓
2. Success notification ko'rsatiladi
        ↓
3. Email notification sizga keladi
        ↓
4. Siz arizani ko'rib chiqasiz
        ↓
5. Live Chat yoki Telegram orqali gaplashasiz
```

## 📧 Email Notification Setup

### Option A: Formspree (Oson)

```jsx
// contact.jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

1. Sign up: [formspree.io](https://formspree.io)
2. Create form
3. Get form ID
4. Replace in contact.jsx

### Option B: Email.js (Frontend only)

```bash
npm install @emailjs/browser
```

```jsx
// contact.jsx
import emailjs from '@emailjs/browser';

const handleSubmit = (e) => {
  e.preventDefault();
  
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  ).then(() => {
    setStatus('success');
  });
};
```

### Option C: Custom Backend (Django/Node.js)

**Django backend:**

```python
# views.py
from django.core.mail import send_mail

@api_view(['POST'])
def contact(request):
    send_mail(
        subject=f"Ariza: {request.data['subject']}",
        message=f"""
        Ism: {request.data['name']}
        Email: {request.data['email']}
        Loyiha: {request.data['subject']}
        
        Tavsif:
        {request.data['message']}
        """,
        from_email='noreply@bahriddin.dev',
        recipient_list=['hello@bahriddin.dev'],
    )
    return Response({'status': 'success'})
```

## 🎨 Chat Widget Customization

### Tawk.to Customization:

Dashboard → Appearance → Chat Widget:

```
Color: #2563EB (blue)
Position: Bottom right
Greeting: "Salom! Sizga qanday yordam bera olaman?"
Offline message: "Hozir onlineemsman. Xabar qoldiring!"
```

### Auto-message setup:

**Trigger: User submits form**
```
Salom! Arizangiz qabul qilindi 👍
Men tez orada javob beraman.

Tezkor savol bo'lsa, bu yerda yozishingiz mumkin!
```

## 📱 Mobile Optimization

Chat widget mobile'da avtomatik optimized bo'ladi:
- Bottom position
- Small size
- Expandable on click

## 🔔 Notifications Setup

### Tawk.to Notifications:

1. **Email**: Har bir xabar uchun email
2. **Mobile app**: Push notifications
3. **Sound**: Browser notification sound
4. **Desktop**: Browser popup

### Telegram Notifications:

Tawk.to → Integrations → Telegram:
- Connect bot
- Get notifications

## 💡 Best Practices

### 1. Response Time
- **Target**: < 2 hours response
- **Goal**: < 30 min for urgent

### 2. Auto-responses
```
"Xabaringiz uchun rahmat! 
Men odatda 2 soat ichida javob beraman.
Tezkor savol bo'lsa, Telegram: @bahriddin"
```

### 3. Working Hours
```
Dush-Juma: 9:00 - 18:00 (GMT+5)
Offline message: 
"Ish vaqtidan tashqari. Ertaga javob beraman!"
```

### 4. Chat Etiquette
- ✅ Tezda salom ayt
- ✅ Savollarga aniq javob ber
- ✅ Loy iha uchun timeline ber
- ✅ Follow-up qil

## 🔧 Testing

1. **Test ariza yubor** — contact form
2. **Notification check** — email kelganini ko'r
3. **Chat widget** — ochilishini test qil
4. **Mobile** — mobile da ham test qil

## 📊 Analytics

### Track:
- Form submissions count
- Chat conversations
- Response time
- Conversion rate (Ariza → Deal)

### Tools:
- Google Analytics
- Tawk.to Dashboard
- Custom backend analytics

## 🎯 Next Steps

1. **Choose chat provider** (Tawk.to recommended)
2. **Setup account**
3. **Add widget code** to `_document.jsx`
4. **Configure email** notifications
5. **Test everything**
6. **Set working hours**
7. **Ready!** 🚀

---

**Need help?** → hello@bahriddin.dev

**Tawk.to setup video:** [YouTube Tutorial](https://youtube.com)

