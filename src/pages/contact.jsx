import React, { useState } from 'react'
import Head from 'next/head'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => {
        setStatus('')
      }, 5000)
    }, 1500)
  }

  return (
    <>
      <Head>
        <title>Aloqa — Bahriddin | Full-Stack Developer</title>
        <meta name="description" content="Bahriddin bilan bog'laning. Loyiha muhokama qilish yoki ishga yollash uchun aloqaga chiqing." />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-20">
          <div className="container mx-auto px-6 max-w-7xl text-center">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-bold border-2 border-blue-200">
                💬 Aloqa variantlari
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
              Let's <span className="text-blue-600 font-mono">talk</span>
              <span className="block text-4xl md:text-6xl text-gray-600 font-bold tracking-tight mt-4">
                about your next project
              </span>
            </h1>
            <div className="max-w-3xl mx-auto space-y-4 mb-8">
              <p className="text-2xl font-black text-gray-900 uppercase tracking-tight">
                4 Ways to Connect
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                Schedule a <span className="font-black text-red-600 border-b-2 border-red-600">video call</span>, submit a <span className="font-black text-blue-600 border-b-2 border-blue-600">project inquiry</span>, 
                start a <span className="font-black text-purple-600 border-b-2 border-purple-600">live chat</span>, or 
                message on <span className="font-black text-cyan-600 border-b-2 border-cyan-600">Telegram</span> — choose what works for you.
              </p>
            </div>

            {/* Contact Options */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12">
              {/* Video Call - NEW! */}
              <a 
                href="https://calendly.com/baxadevuz/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-red-500 via-orange-500 to-red-600 rounded-2xl p-8 shadow-xl hover-lift text-white relative overflow-hidden group hover:from-red-600 hover:via-orange-600 hover:to-red-700 transition-all cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto backdrop-blur-sm group-hover:scale-110 transition-transform">
                    🎥
                  </div>
                  <h3 className="font-black text-xl mb-2 tracking-tight">Video Call</h3>
                  <p className="text-sm text-red-50 font-semibold">Schedule 15-60 min consultation</p>
                  <div className="mt-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Book Now
                  </div>
                  {/* NEW badge */}
                  <div className="absolute top-3 right-3 px-2 py-1 bg-yellow-400 text-red-900 rounded-full text-[10px] font-black uppercase animate-pulse">
                    NEW
                  </div>
                </div>
              </a>

              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border-2 border-blue-200 hover:border-blue-600 hover-lift group relative overflow-hidden transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform">
                    📝
                  </div>
                  <h3 className="font-black text-xl mb-2 tracking-tight">Submit Inquiry</h3>
                  <p className="text-sm text-gray-700 font-semibold">Detailed project brief, 24hr response</p>
                </div>
              </div>

              <div className="bg-purple-600 rounded-2xl p-8 shadow-xl hover-lift text-white relative overflow-hidden group hover:bg-purple-700 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto backdrop-blur-sm group-hover:scale-110 transition-transform">
                    💬
                  </div>
                  <h3 className="font-black text-xl mb-2 tracking-tight">Live Chat</h3>
                  <p className="text-sm text-purple-100 font-semibold">Instant response, direct conversation</p>
                  <div className="mt-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Online Now
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border-2 border-cyan-200 hover:border-cyan-600 hover-lift group relative overflow-hidden transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-cyan-600 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform">
                    ✈️
                  </div>
                  <h3 className="font-black text-xl mb-2 tracking-tight">Telegram</h3>
                  <p className="text-sm text-gray-700 font-semibold">Message @baxadevuz directly</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Video Call CTA */}
        <section className="container mx-auto px-6 py-16 max-w-7xl">
          <div className="relative bg-gradient-to-br from-red-500 via-orange-500 to-red-600 rounded-3xl overflow-hidden shadow-2xl">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-700 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            <div className="relative z-10 p-8 sm:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left: Content */}
                <div className="text-white">
                  <div className="inline-block mb-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-black uppercase tracking-wider border border-white/30">
                      🎥 Video Consultation
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 tracking-tight leading-tight">
                    Let's Discuss Your Project <span className="text-yellow-300">Face-to-Face</span>
                  </h2>
                  <p className="text-lg text-red-50 font-semibold mb-6 leading-relaxed">
                    Loyihangiz haqida batafsil gaplashing. Texnologiya tanlash, narx muhokamasi, va boshqa savollaringizga javob olasiz.
                  </p>
                  
                  {/* Benefits */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-900" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 14.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white font-bold">15, 30, yoki 60 daqiqalik uchrashuv</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-900" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 14.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white font-bold">Google Meet yoki Zoom orqali</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-900" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 14.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white font-bold">Bepul maslahat va narx hisoblash</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-900" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 14.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white font-bold">O'zbekcha yoki Inglizcha</span>
                    </div>
                  </div>

                  <a 
                    href="https://calendly.com/baxadevuz/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-50 text-red-600 rounded-xl font-black text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all uppercase tracking-wide"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Vaqt Band Qilish
                    <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Right: Video Preview / Illustration */}
                <div className="hidden lg:block">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                    <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20">
                      <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl flex items-center justify-center mb-4 relative overflow-hidden">
                        {/* Fake video interface */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="text-6xl">🎥</div>
                        <div className="absolute bottom-4 right-4 px-3 py-1 bg-red-600 text-white rounded-lg text-xs font-bold flex items-center gap-1">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          LIVE
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-2xl">
                          👤
                        </div>
                        <div className="aspect-video bg-gradient-to-br from-green-600 to-cyan-600 rounded-lg flex items-center justify-center text-2xl ring-2 ring-yellow-400">
                          👨‍💻
                        </div>
                        <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center opacity-50">
                          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Aloqa ma'lumotlari</h2>

              <div className="space-y-6 mb-8">
                {/* Video Call - Premium */}
                <a 
                  href="https://calendly.com/baxadevuz/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl border-2 border-red-200 hover:border-red-400 hover:shadow-lg transition-all group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                    🎥
                  </div>
                  <div>
                    <div className="text-sm text-red-600 font-bold mb-1 flex items-center gap-2">
                      Video Call
                      <span className="px-1.5 py-0.5 bg-yellow-400 text-red-900 rounded text-[10px] font-black uppercase">
                        NEW
                      </span>
                    </div>
                    <div className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                      Schedule a consultation →
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                    📧
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email</div>
                    <a href="baxadev0121@gmail.com" className="font-medium hover:text-blue-600">
                      hello@baxadevuz.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                    📞
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Telefon</div>
                    <a href="tel:+998953355855" className="font-medium hover:text-blue-600">
                      +998 95 335 58 55
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                    📍
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Manzil</div>
                    <div className="font-medium">Buxoro, Uzbekistan</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
                <h3 className="font-semibold mb-4">Ijtimoiy tarmoqlar</h3>
                <div className="space-y-3">
                  <a href="https://github.com/bahriddin" target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:text-blue-600 transition">
                    🔗 GitHub
                  </a>
                  <a href="https://linkedin.com/in/bahriddin" target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:text-blue-600 transition">
                    🔗 LinkedIn
                  </a>
                  <a href="https://t.me/baxadevuz" target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:text-blue-600 transition">
                    🔗 Telegram
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Xabar yuborish</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Ismingiz *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
                        placeholder="Ism Familiya"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Loyiha turi *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
                  >
                    <option value="">Tanlang...</option>
                    <option value="Web platformasi">🌐 Web platformasi yaratish</option>
                    <option value="Ta'lim platformasi">🎓 Ta'lim platformasi</option>
                    <option value="E-commerce">🛒 E-commerce sayt</option>
                    <option value="MVP yaratish">🚀 MVP/Startup yaratish</option>
                    <option value="Mavjud loyihani yaxshilash">⚡ Mavjud loyihani yaxshilash</option>
                    <option value="Konsultatsiya">💼 Konsultatsiya</option>
                    <option value="Boshqa">📦 Boshqa</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Loyiha tavsifi *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
                    placeholder="Loyihangiz haqida batafsil yozing:&#10;- Nima yaratmoqchisiz?&#10;- Qanday funksiyalar kerak?&#10;- Budjet va vaqt oralig'i?&#10;- Boshqa muhim ma'lumotlar..."
                  />
                </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`group w-full px-6 py-5 bg-blue-600 text-white rounded-2xl font-bold shadow-xl hover:bg-blue-700 hover:shadow-2xl hover:scale-105 transition-all duration-300 ${
                      status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {status === 'sending' ? (
                        <>
                          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Yuborilmoqda...
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          Xabar yuborish
                        </>
                      )}
                    </span>
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>

                  {status === 'success' && (
                    <div className="relative p-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 text-green-800 rounded-2xl shadow-xl animate-slide-up overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500"></div>
                      
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <svg className="w-12 h-12 text-green-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-2xl font-bold">Ariza qabul qilindi!</span>
                      </div>
                      
                      <p className="text-center mb-6">
                        Sizning arizangiz muvaffaqiyatli yuborildi. Men 24 soat ichida ko'rib chiqaman va sizga xabar beraman.
                      </p>

                      <div className="bg-white/50 rounded-xl p-6 mb-6">
                        <h3 className="font-bold mb-3 flex items-center gap-2">
                          <span className="text-2xl">💬</span>
                          Keyingi qadam:
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <span className="text-green-600">✓</span>
                            Men arizangizni ko'rib chiqaman
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-green-600">✓</span>
                            Email orqali tasdiq xabari keladi
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-green-600">✓</span>
                            Chat orqali batafsil gaplashamiz
                          </li>
                        </ul>
                      </div>

                      {/* Chat buttons */}
                      <div className="grid md:grid-cols-2 gap-3">
                        <button
                          onClick={() => {
                            // Open chat widget (Tawk.to, Crisp, etc.)
                            if (typeof window !== 'undefined' && window.Tawk_API) {
                              window.Tawk_API.toggle();
                            }
                          }}
                          className="group flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:scale-105 transition-all"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          Live Chat ochish
                        </button>
                        <a
                          href="https://t.me/baxadevuz"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-green-500 text-green-600 rounded-xl font-semibold hover:bg-green-50 hover:scale-105 transition-all"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                          </svg>
                          Telegram orqali
                        </a>
                      </div>

                      <p className="text-xs text-center mt-4 text-gray-600">
                        Tezkor javob kerakmi? Telegram orqali yoki live chat orqali bevosita gaplashing.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
