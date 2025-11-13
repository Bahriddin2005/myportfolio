import React, { useState, useEffect } from 'react'
import Head from 'next/head'

export default function Contact() {
  const [showCalendar, setShowCalendar] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Load Calendly widget script
  useEffect(() => {
    if (showCalendar && typeof window !== 'undefined') {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      document.body.appendChild(script)
      
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script)
        }
      }
    }
  }, [showCalendar])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Save to localStorage
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]')
    submissions.push({
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now()
    })
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions))
    
    setFormSubmitted(true)
    setShowCalendar(true)
    
    // Scroll to calendar
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 300)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Head>
        <title>Aloqa — Bahriddin | Full-Stack Developer</title>
        <meta name="description" content="Bahriddin bilan bog'laning. Ariza qoldiring va video konsultatsiya booking qiling - to'liq o'z saytimizda!" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Hero Header */}
        <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 py-20 overflow-hidden">
          {/* Animated background blobs */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-ping"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-yellow-300 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-20 right-1/4 w-3 h-3 bg-pink-300 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
          </div>

          <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            <div className="inline-block mb-6 animate-slide-up">
              <span className="px-5 py-2 bg-white/20 backdrop-blur-xl text-white rounded-full text-sm font-black uppercase tracking-wider border-2 border-white/30 shadow-2xl">
                📝 O'z Saytimizda
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight text-white animate-slide-up">
              Keling, Loyihangizni
              <span className="block text-yellow-300 mt-2">Muhokama Qilaylik! 🚀</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-50 leading-relaxed font-semibold max-w-2xl mx-auto animate-slide-up">
              ✅ Ariza qoldiring → ✅ Video booking qiling → ✅ Chatda gaplashing
              <span className="block mt-2 text-yellow-300 font-black">
                (Boshqa saytga o'tmaysiz!)
              </span>
            </p>
          </div>
        </section>

        {/* Main Content - Form or Calendar */}
        <section className="container mx-auto px-6 py-16 max-w-4xl">
          {!formSubmitted ? (
            /* Contact Form */
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border-2 border-gray-100 animate-slide-up">
              <div className="text-center mb-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6 shadow-xl">
                  📝
                </div>
                <h2 className="text-3xl sm:text-4xl font-black mb-4 text-gray-900">
                  Ariza Qoldiring
                </h2>
                <p className="text-lg text-gray-600 font-semibold">
                  Ma'lumotlaringizni qoldiring, keyin video booking qilamiz
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-black text-gray-900 mb-2 uppercase tracking-wide">
                    Ismingiz *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all font-bold text-gray-900 placeholder:text-gray-400"
                    placeholder="Ism Familiya"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-black text-gray-900 mb-2 uppercase tracking-wide">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all font-bold text-gray-900 placeholder:text-gray-400"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-black text-gray-900 mb-2 uppercase tracking-wide">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all font-bold text-gray-900 placeholder:text-gray-400"
                    placeholder="+998 90 123 45 67"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-black text-gray-900 mb-2 uppercase tracking-wide">
                    Loyihangiz Haqida
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all font-bold text-gray-900 placeholder:text-gray-400 resize-none"
                    placeholder="Qanday loyiha qilmoqchisiz? Qanday funksiyalar kerak?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-black text-xl shadow-2xl hover:shadow-blue-500/50 transition-all uppercase tracking-wide hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-3">
                    Yuborish va Video Booking Qilish
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </form>

              {/* Quick Note */}
              <div className="mt-8 p-6 bg-blue-50 rounded-2xl border-2 border-blue-200">
                <p className="text-sm text-blue-900 font-bold text-center">
                  💬 <span className="font-black">Tezroq gaplashmoqchimisiz?</span> Pastda o'ng tomonda chat tugmasini bosing va darhol yozing!
                </p>
              </div>
            </div>
          ) : (
            /* Calendly Embedded Widget */
            <div className="animate-slide-up">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6 shadow-xl animate-bounce">
                  ✅
                </div>
                <h2 className="text-3xl sm:text-4xl font-black mb-4 text-gray-900">
                  Ariza Qabul Qilindi!
                </h2>
                <p className="text-lg text-gray-600 font-semibold mb-2">
                  Endi video konsultatsiya vaqtini tanlang 👇
                </p>
                <p className="text-sm text-green-600 font-black bg-green-50 inline-block px-4 py-2 rounded-full">
                  ✨ Boshqa saytga o'tmaysiz, bu yerda booking qiling!
                </p>
              </div>

              {/* Embedded Calendly Widget */}
              <div 
                className="calendly-inline-widget bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100" 
                data-url="https://calendly.com/baxadevuz/30min?hide_gdpr_banner=1&hide_event_type_details=1&background_color=ffffff&text_color=000000&primary_color=3b82f6"
                style={{minWidth: '320px', height: '700px'}}
              ></div>
              
              <div className="mt-8 text-center space-y-4">
                <button
                  onClick={() => {
                    setFormSubmitted(false)
                    setShowCalendar(false)
                    setFormData({ name: '', email: '', phone: '', message: '' })
                  }}
                  className="text-gray-600 hover:text-gray-900 font-bold underline text-lg"
                >
                  ← Ortga qaytish (yangi ariza)
                </button>
                
                <p className="text-sm text-gray-500 font-semibold">
                  💬 Yoki pastda o'ng tomondagi chat orqali darhol yozing!
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Alternative Contact - Simple */}
        <section className="container mx-auto px-6 py-12 max-w-4xl">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-8 sm:p-12 text-center text-white">
              <h3 className="text-2xl sm:text-3xl font-black mb-6">
                Boshqa Aloqa Usullari
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {/* Telegram */}
                <a 
                  href="https://t.me/baxadevuz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold transition-all hover:scale-105"
                >
                  <span className="text-2xl">✈️</span>
                  <div className="text-left">
                    <div className="text-xs uppercase tracking-wider opacity-80">Telegram</div>
                    <div>@baxadevuz</div>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href="mailto:baxadev0121@gmail.com"
                  className="flex items-center gap-3 px-6 py-4 bg-purple-600 hover:bg-purple-700 rounded-xl font-bold transition-all hover:scale-105"
                >
                  <span className="text-2xl">📧</span>
                  <div className="text-left">
                    <div className="text-xs uppercase tracking-wider opacity-80">Email</div>
                    <div className="text-sm">baxadev0121@gmail.com</div>
                  </div>
                </a>
              </div>
              
              <p className="mt-8 text-sm text-gray-400 font-semibold">
                💬 <span className="text-white font-black">Chat widget</span> ham mavjud - pastda o'ng tomonda!
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
