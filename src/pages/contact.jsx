import React, { useState } from 'react'
import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Video Konsultatsiya — Bahriddin | Full-Stack Developer</title>
        <meta name="description" content="Bahriddin bilan video orqali gaplashing. Loyihangiz haqida batafsil muhokama qiling." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Hero Header - Video Call Focus */}
        <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 py-32 overflow-hidden">
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

          <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
            <div className="inline-block mb-8 animate-slide-up">
              <span className="px-6 py-3 bg-white/20 backdrop-blur-xl text-white rounded-full text-sm font-black uppercase tracking-wider border-2 border-white/30 shadow-2xl">
                🎥 Video Consultation
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] text-white animate-slide-up">
              Let's <span className="text-yellow-300 font-mono relative inline-block">
                discuss
                <div className="absolute -bottom-2 left-0 right-0 h-2 bg-yellow-300 rounded-full opacity-30 blur-sm"></div>
              </span>
              <span className="block text-3xl md:text-5xl text-blue-100 font-bold tracking-tight mt-6">
                your project face-to-face 🎥
              </span>
            </h1>
            <div className="max-w-3xl mx-auto space-y-6 mb-16 animate-slide-up">
              <p className="text-xl sm:text-2xl text-blue-50 leading-relaxed font-semibold">
                Loyihangiz haqida video orqali batafsil gaplashib, savollaringizga javob oling. Google Meet yoki Zoom orqali 15-60 daqiqalik bepul konsultatsiya.
              </p>
            </div>

            {/* Main CTA Button - Extra Large */}
            <div className="max-w-3xl mx-auto animate-slide-up">
              <a 
                href="https://calendly.com/baxadevuz/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative block"
              >
                {/* Outer glow - animated */}
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                
                {/* Button */}
                <div className="relative bg-gradient-to-br from-red-500 via-orange-500 to-red-600 rounded-3xl p-16 shadow-2xl group-hover:shadow-red-500/50 text-white overflow-hidden group-hover:from-red-600 group-hover:via-orange-600 group-hover:to-red-700 transition-all duration-500">
                  {/* Animated background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-600 opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className="w-40 h-40 bg-white/20 rounded-3xl flex items-center justify-center text-8xl mb-8 mx-auto backdrop-blur-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                      🎥
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight">
                      Vaqt Band Qiling
                    </h2>
                    
                    {/* Description */}
                    <p className="text-xl sm:text-2xl text-red-50 font-semibold mb-10 max-w-2xl mx-auto leading-relaxed">
                      15, 30, yoki 60 daqiqalik bepul konsultatsiya. Loyihangiz haqida batafsil gaplashib, savollaringizga professional javob oling!
                    </p>
                    
                    {/* Action Button */}
                    <div className="inline-flex items-center gap-4 px-12 py-6 bg-white text-red-600 rounded-2xl font-black text-2xl shadow-2xl group-hover:scale-110 transition-all uppercase tracking-wide">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Calendly'da Ochish
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500"></div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="container mx-auto px-6 py-20 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-gray-900">
              Nima Oling?
            </h2>
            <p className="text-xl text-gray-600 font-semibold max-w-3xl mx-auto">
              Video konsultatsiya orqali loyihangizni professional darajada muhokama qiling
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-xl">
                ⏰
              </div>
              <h3 className="text-xl font-black mb-3 text-gray-900">Tez Uchrashuv</h3>
              <p className="text-gray-600 font-semibold leading-relaxed">
                15, 30, yoki 60 daqiqalik konsultatsiya. O'zingizga qulay vaqtni tanlang.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-purple-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-xl">
                💻
              </div>
              <h3 className="text-xl font-black mb-3 text-gray-900">Professional Maslahat</h3>
              <p className="text-gray-600 font-semibold leading-relaxed">
                Texnologiya tanlash, arxitektura, va eng yaxshi yechimlar haqida.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-green-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-xl">
                💰
              </div>
              <h3 className="text-xl font-black mb-3 text-gray-900">Bepul Narx Hisob</h3>
              <p className="text-gray-600 font-semibold leading-relaxed">
                Loyihangiz narxi va muddatlari haqida aniq ma'lumot oling.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-orange-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-xl">
                🌍
              </div>
              <h3 className="text-xl font-black mb-3 text-gray-900">Istalgan Joydan</h3>
              <p className="text-gray-600 font-semibold leading-relaxed">
                Google Meet yoki Zoom. O'zbekcha yoki Inglizcha gaplashing.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-6 py-20 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-gray-900">
              Ko'p So'raladigan Savollar
            </h2>
          </div>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
              <h3 className="text-xl font-black mb-3 text-gray-900 flex items-center gap-3">
                <span className="text-3xl">❓</span>
                Video call bepulmi?
              </h3>
              <p className="text-gray-700 font-semibold leading-relaxed ml-12">
                Ha, to'liq bepul! Birinchi konsultatsiya doim bepul. Loyihangiz haqida gaplashib, savollaringizga javob olasiz.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
              <h3 className="text-xl font-black mb-3 text-gray-900 flex items-center gap-3">
                <span className="text-3xl">🎥</span>
                Qaysi platforma ishlatiladi?
              </h3>
              <p className="text-gray-700 font-semibold leading-relaxed ml-12">
                Google Meet yoki Zoom. Calendly orqali booking qilganingizda avtomatik link yaratiladi va emailingizga yuboriladi.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
              <h3 className="text-xl font-black mb-3 text-gray-900 flex items-center gap-3">
                <span className="text-3xl">⏰</span>
                Qancha davom etadi?
              </h3>
              <p className="text-gray-700 font-semibold leading-relaxed ml-12">
                Siz tanlaysiz: 15 daqiqa (tez savol), 30 daqiqa (standard), yoki 60 daqiqa (batafsil muhokama). Ko'pincha 30 daqiqa etarli.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
              <h3 className="text-xl font-black mb-3 text-gray-900 flex items-center gap-3">
                <span className="text-3xl">📝</span>
                Tayyorgarlik kerakmi?
              </h3>
              <p className="text-gray-700 font-semibold leading-relaxed ml-12">
                Yo'q, lekin loyihangiz haqida qisqacha ma'lumot tayyorlasangiz yaxshi. Nima qilmoqchi ekanligingiz, kim uchun, va qanday funksiyalar kerak - shularni gaplashamiz.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-6 py-20 max-w-4xl">
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            <div className="relative z-10 p-12 sm:p-16 text-center text-white">
              <h2 className="text-3xl sm:text-4xl font-black mb-6">
                Tayyor? Boshlaylik! 🚀
              </h2>
              <p className="text-xl text-gray-300 font-semibold mb-10 max-w-2xl mx-auto">
                Calendly orqali qulay vaqtni tanlang va men bilan gaplashing. Loyihangizni birga muhokama qilamiz!
              </p>
              
              <a 
                href="https://calendly.com/baxadevuz/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-all uppercase tracking-wide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Hozir Band Qiling
                <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
