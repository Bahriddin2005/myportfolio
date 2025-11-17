import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import TerminalHero from '@/components/TerminalHero'

export default function Home() {
  const [profileImage, setProfileImage] = useState(null)

  // Load profile image from localStorage
  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage')
    if (savedImage) {
      setProfileImage(savedImage)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Bahriddin Shavkatov — Full-Stack Developer & Software engeneer</title>
        <meta name="description" content="Bahriddin — Professional Full-Stack Developer. Portfolio: web platformalar, ta'lim loyihalari, case-study'lar. Hire me for your next project." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section - Technical/Professional */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
          {/* Grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          {/* Code-style decorative elements */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-20 left-20 font-mono text-blue-500 text-6xl">{'{ }'}</div>
            <div className="absolute bottom-20 right-20 font-mono text-cyan-500 text-6xl">{'< />'}</div>
            <div className="absolute top-1/2 left-1/4 font-mono text-purple-500 text-4xl">console.log()</div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 max-w-6xl relative z-10">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              {/* Left content */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <div className="inline-block">
                  <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600/10 border border-blue-500/30 text-blue-400 rounded-lg text-xs sm:text-sm font-mono font-semibold">
                    // Full-Stack Developer
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black leading-[0.9] tracking-tighter text-white">
                  <span className="font-mono text-green-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">&lt;</span>
                  <span className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">Bahriddin Shavkatov</span>
                  <span className="font-mono text-green-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">/&gt;</span>
                  <br />
                  <span className="text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-black tracking-tight mt-2 sm:mt-3 md:mt-4 block">
                    Building <span className="text-blue-400">digital products</span>
                  </span>
                  <span className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold tracking-tight block">
                    that drive <span className="text-cyan-400">business growth</span>
                  </span>
                </h1>

                <div className="space-y-2 sm:space-y-3 bg-gray-900/50 rounded-xl p-4 sm:p-5 md:p-6 border border-gray-800">
                  <div className="flex items-center gap-2 sm:gap-3 text-gray-300 font-mono text-xs sm:text-sm md:text-base overflow-x-auto">
                    <span className="text-purple-400 font-bold">const</span>
                    <span className="text-blue-400 font-semibold">role</span>
                    <span className="text-gray-500 font-bold">=</span>
                    <span className="text-green-400 font-semibold">"Full-Stack Developer"</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-gray-300 font-mono text-xs sm:text-sm md:text-base overflow-x-auto">
                    <span className="text-purple-400 font-bold">const</span>
                    <span className="text-blue-400 font-semibold">experience</span>
                    <span className="text-gray-500 font-bold">=</span>
                    <span className="text-orange-400 font-bold">3</span>
                    <span className="text-gray-500">+</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-gray-300 font-mono text-xs sm:text-sm md:text-base overflow-x-auto">
                    <span className="text-purple-400 font-bold">const</span>
                    <span className="text-blue-400 font-semibold">stack</span>
                    <span className="text-gray-500 font-bold">=</span>
                    <span className="text-gray-500">[</span>
                    <span className="text-yellow-400 font-semibold">"React"</span>
                    <span className="text-gray-600">,</span>
                    <span className="text-yellow-400 font-semibold">"Django"</span>
                    <span className="text-gray-600">,</span>
                    <span className="text-yellow-400 font-semibold">"Next.js"</span>
                    <span className="text-gray-500">]</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {/* View Projects - Terminal style */}
                  <a href="/projects" className="group px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-mono font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3">
                    <span className="text-green-400">$</span>
                    <span className="whitespace-nowrap">view_projects</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>

                  {/* Download Resume */}
                  <a href="/BAHRIDDIN-SHAVKATOV-RESUME.pdf" download="Bahriddin-Shavkatov-Resume.pdf" className="group px-6 sm:px-8 py-3 sm:py-4 bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700 rounded-lg font-mono font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                    <span className="whitespace-nowrap">download_resume.pdf</span>
                  </a>
                </div>

                {/* Stats - Code style */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-4 sm:pt-6 md:pt-8">
                  <div className="bg-gray-800 rounded-lg p-3 sm:p-4 border-2 border-gray-700 hover:border-blue-600 transition-all">
                    <div className="text-xl sm:text-2xl md:text-3xl font-mono font-black text-blue-400 tracking-tight">15+</div>
                    <div className="text-[10px] sm:text-xs font-mono font-bold text-gray-500 uppercase tracking-wider">projects</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 sm:p-4 border-2 border-gray-700 hover:border-green-600 transition-all">
                    <div className="text-xl sm:text-2xl md:text-3xl font-mono font-black text-green-400 tracking-tight">10K+</div>
                    <div className="text-[10px] sm:text-xs font-mono font-bold text-gray-500 uppercase tracking-wider">users</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 sm:p-4 border-2 border-gray-700 hover:border-purple-600 transition-all">
                    <div className="text-xl sm:text-2xl md:text-3xl font-mono font-black text-purple-400 tracking-tight">3+</div>
                    <div className="text-[10px] sm:text-xs font-mono font-bold text-gray-500 uppercase tracking-wider">years</div>
                  </div>
                </div>
              </div>

              {/* Right content - Terminal Widget */}
              <div className="flex justify-center">
                <TerminalHero />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects - Technical Style */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="mb-8 sm:mb-12 md:mb-16">
              <div className="inline-block mb-4 sm:mb-6">
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-900 text-green-400 rounded-lg text-xs sm:text-sm font-mono font-bold border border-gray-700">
                  // Featured Projects
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 md:mb-8 tracking-tighter text-gray-900 leading-tight">
                <span className="font-mono text-blue-600 font-black">&lt;</span>
                <span className="font-mono">Selected</span> 
                <span className="text-blue-600"> Work</span>
                <span className="font-mono text-blue-600 font-black"> /&gt;</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl leading-relaxed font-mono font-semibold">
                <span className="text-purple-600 font-bold">function</span> 
                <span className="text-blue-600 font-bold"> buildProducts</span>() 
                <span className="text-gray-500 font-bold"> {'{'}</span>
                <br className="hidden sm:block" />
                <span className="pl-0 sm:pl-6 text-gray-600 font-semibold">// Real problems → Real solutions</span>
                <br className="hidden sm:block" />
                <span className="pl-0 sm:pl-6"><span className="text-purple-600 font-bold">return</span> <span className="text-green-600 font-bold">"Business Impact"</span>;</span>
                <br className="hidden sm:block" />
                <span className="text-gray-500 font-bold">{'}'}</span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {/* Project 1 */}
              <a href="/projects/buxoro-bilimdonlar" className="group">
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-blue-600 p-5 sm:p-6 md:p-8 hover:shadow-2xl hover:bg-blue-700 transition-all duration-300 text-white hover-lift">
                  {/* Icon */}
                  <div className="absolute -right-6 -top-6 sm:-right-8 sm:-top-8 text-6xl sm:text-7xl md:text-9xl opacity-20 group-hover:opacity-30 transition-opacity">🎓</div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-5 md:mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                      🎓
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 tracking-tight">
                      Buxoro Bilimdonlar maktabi
                    </h3>
                    
                    <p className="text-blue-50 mb-3 sm:mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
                      Online ta'lim platformasi: video streaming, to'lov tizimi va analytics.
                    </p>
                    
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4 sm:mb-5 md:mb-6 border border-white/30">
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 text-center">
                        <div>
                          <div className="text-xl sm:text-2xl md:text-3xl font-black text-white">10K+</div>
                          <div className="text-[10px] sm:text-xs text-blue-100 font-semibold">Foydalanuvchi</div>
                        </div>
                        <div>
                          <div className="text-xl sm:text-2xl md:text-3xl font-black text-white">$50K+</div>
                          <div className="text-[10px] sm:text-xs text-blue-100 font-semibold">Daromad</div>
                        </div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                      <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold border border-white/30">
                        ⚡ 10K+ users
                      </div>
                      <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-green-400/30 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold border border-green-300/30">
                        💰 $50K+
                      </div>
                    </div>

                    {/* Tech stack */}
                    <div className="flex gap-1.5 sm:gap-2 flex-wrap mb-4 sm:mb-5 md:mb-6">
                      <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold border border-white/30">Django</span>
                      <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold border border-white/30">React</span>
                      <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold border border-white/30">PostgreSQL</span>
                    </div>

                    <div className="mt-4 sm:mt-6 inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-blue-600 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all">
                      Case study ko'rish
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>

              {/* Project 2 */}
              <a href="/projects/codelab" className="group">
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-purple-600 p-5 sm:p-6 md:p-8 hover:shadow-2xl hover:bg-purple-700 transition-all duration-300 text-white hover-lift">
                  {/* Icon */}
                  <div className="absolute -right-6 -top-6 sm:-right-8 sm:-top-8 text-6xl sm:text-7xl md:text-9xl opacity-20 group-hover:opacity-30 transition-opacity">💻</div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-5 md:mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                      💻
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 tracking-tight">
                      CodeLab
                    </h3>
                    
                    <p className="text-purple-50 mb-3 sm:mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
                      Interactive bootcamp platform: coding, real-time collaboration & auto-testing.
                    </p>
                    
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4 sm:mb-5 md:mb-6 border border-white/30">
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 text-center">
                        <div>
                          <div className="text-xl sm:text-2xl md:text-3xl font-black text-white">500+</div>
                          <div className="text-[10px] sm:text-xs text-purple-100 font-semibold">Students</div>
                        </div>
                        <div>
                          <div className="text-xl sm:text-2xl md:text-3xl font-black text-white">95%</div>
                          <div className="text-[10px] sm:text-xs text-purple-100 font-semibold">Completion</div>
                        </div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                      <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold border border-white/30">
                        👨‍🎓 500+ students
                      </div>
                      <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-green-400/30 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold border border-green-300/30">
                        ✅ 95% complete
                      </div>
                    </div>

                    {/* Tech stack */}
                    <div className="flex gap-1.5 sm:gap-2 flex-wrap mb-4 sm:mb-5 md:mb-6">
                      <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold border border-white/30">Next.js</span>
                      <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold border border-white/30">TypeScript</span>
                      <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold border border-white/30">MongoDB</span>
                    </div>

                    <div className="mt-4 sm:mt-6 inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-purple-600 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all">
                      Case study ko'rish
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>

              {/* Project 3 */}
              <a href="/projects/smart-inventory" className="group">
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-green-600 p-5 sm:p-6 md:p-8 hover:shadow-2xl hover:bg-green-700 transition-all duration-300 text-white hover-lift">
                  {/* Icon */}
                  <div className="absolute -right-6 -top-6 sm:-right-8 sm:-top-8 text-6xl sm:text-7xl md:text-9xl opacity-20 group-hover:opacity-30 transition-opacity">📦</div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-5 md:mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                      📦
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 tracking-tight">
                      Smart Inventory
                    </h3>
                    
                    <p className="text-green-50 mb-3 sm:mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
                      Warehouse management system: stock tracking, orders & automated reports.
                    </p>
                    
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4 sm:mb-5 md:mb-6 border border-white/30">
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 text-center">
                        <div>
                          <div className="text-xl sm:text-2xl md:text-3xl font-black text-white">20+</div>
                          <div className="text-[10px] sm:text-xs text-green-100 font-semibold">Businesses</div>
                        </div>
                        <div>
                          <div className="text-xl sm:text-2xl md:text-3xl font-black text-white">-80%</div>
                          <div className="text-[10px] sm:text-xs text-green-100 font-semibold">Errors</div>
                        </div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                      <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold border border-white/30">
                        🏢 20+ businesses
                      </div>
                      <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-orange-400/30 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold border border-orange-300/30">
                        📉 -80% errors
                      </div>
                    </div>

                    {/* Tech stack */}
                    <div className="flex gap-1.5 sm:gap-2 flex-wrap mb-4 sm:mb-5 md:mb-6">
                      <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold border border-white/30">Django</span>
                      <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold border border-white/30">Vue.js</span>
                      <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold border border-white/30">PostgreSQL</span>
                    </div>

                    <div className="mt-4 sm:mt-6 inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-green-600 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all">
                      Case study ko'rish
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>

              {/* Project 4 */}
              <a href="/projects/portfolio-generator" className="group">
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-indigo-600 p-5 sm:p-6 md:p-8 hover:shadow-2xl hover:bg-indigo-700 transition-all duration-300 text-white hover-lift">
                  {/* Icon */}
                  <div className="absolute -right-6 -top-6 sm:-right-8 sm:-top-8 text-6xl sm:text-7xl md:text-9xl opacity-20 group-hover:opacity-30 transition-opacity">🤖</div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-5 md:mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                      🤖
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 tracking-tight">
                      Portfolio Generator
                    </h3>
                    
                    <p className="text-indigo-50 mb-3 sm:mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
                      AI-powered portfolio website generator with instant deployment for developers.
                    </p>
                    
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4 sm:mb-5 md:mb-6 border border-white/30">
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 text-center">
                        <div>
                          <div className="text-xl sm:text-2xl md:text-3xl font-black text-white">1K+</div>
                          <div className="text-[10px] sm:text-xs text-indigo-100 font-semibold">Portfolios</div>
                        </div>
                        <div>
                          <div className="text-xl sm:text-2xl md:text-3xl font-black text-white">10min</div>
                          <div className="text-[10px] sm:text-xs text-indigo-100 font-semibold">Deploy Time</div>
                        </div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                      <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold border border-white/30">
                        🚀 1K+ sites
                      </div>
                      <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-400/30 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold border border-purple-300/30">
                        ⚡ 10min deploy
                      </div>
                    </div>

                    {/* Tech stack */}
                    <div className="flex gap-1.5 sm:gap-2 flex-wrap mb-4 sm:mb-5 md:mb-6">
                      <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold border border-white/30">Next.js</span>
                      <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold border border-white/30">OpenAI</span>
                      <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold border border-white/30">Vercel</span>
                    </div>

                    <div className="mt-4 sm:mt-6 inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-indigo-600 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all">
                      Case study ko'rish
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>

              {/* Project 5 */}
              <a href="/projects/restaurant-management" className="group">
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-orange-600 p-5 sm:p-6 md:p-8 hover:shadow-2xl hover:bg-orange-700 transition-all duration-300 text-white hover-lift">
                  {/* Icon */}
                  <div className="absolute -right-6 -top-6 sm:-right-8 sm:-top-8 text-6xl sm:text-7xl md:text-9xl opacity-20 group-hover:opacity-30 transition-opacity">🍽️</div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-5 md:mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                      🍽️
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 tracking-tight">
                      Restaurant POS
                    </h3>
                    
                    <p className="text-orange-50 mb-3 sm:mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
                      Complete restaurant management: orders, kitchen sync, inventory & real-time updates.
                    </p>
                    
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4 sm:mb-5 md:mb-6 border border-white/30">
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 text-center">
                        <div>
                          <div className="text-xl sm:text-2xl md:text-3xl font-black text-white">5</div>
                          <div className="text-[10px] sm:text-xs text-orange-100 font-semibold">Branches</div>
                        </div>
                        <div>
                          <div className="text-xl sm:text-2xl md:text-3xl font-black text-white">+40%</div>
                          <div className="text-[10px] sm:text-xs text-orange-100 font-semibold">Speed</div>
                        </div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                      <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold border border-white/30">
                        🏪 5 branches
                      </div>
                      <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-green-400/30 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold border border-green-300/30">
                        📈 +40% faster
                      </div>
                    </div>

                    {/* Tech stack */}
                    <div className="flex gap-1.5 sm:gap-2 flex-wrap mb-4 sm:mb-5 md:mb-6">
                      <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold border border-white/30">React</span>
                      <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold border border-white/30">Node.js</span>
                      <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold border border-white/30">Socket.io</span>
                    </div>

                    <div className="mt-4 sm:mt-6 inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-orange-600 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all">
                      Case study ko'rish
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>

              {/* Project 6 */}
              <a href="/projects/event-booking" className="group">
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-pink-600 p-5 sm:p-6 md:p-8 hover:shadow-2xl hover:bg-pink-700 transition-all duration-300 text-white hover-lift">
                  {/* Icon */}
                  <div className="absolute -right-6 -top-6 sm:-right-8 sm:-top-8 text-6xl sm:text-7xl md:text-9xl opacity-20 group-hover:opacity-30 transition-opacity">🎉</div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-5 md:mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                      🎉
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 tracking-tight">
                      Event Booking
                    </h3>
                    
                    <p className="text-pink-50 mb-3 sm:mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
                      Event venue booking platform with online payments and availability management.
                    </p>
                    
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4 sm:mb-5 md:mb-6 border border-white/30">
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 text-center">
                        <div>
                          <div className="text-xl sm:text-2xl md:text-3xl font-black text-white">50+</div>
                          <div className="text-[10px] sm:text-xs text-pink-100 font-semibold">Venues</div>
                        </div>
                        <div>
                          <div className="text-xl sm:text-2xl md:text-3xl font-black text-white">2K+</div>
                          <div className="text-[10px] sm:text-xs text-pink-100 font-semibold">Bookings</div>
                        </div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                      <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold border border-white/30">
                        🏛️ 50+ venues
                      </div>
                      <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-green-400/30 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold border border-green-300/30">
                        ✅ 2K+ bookings
                      </div>
                    </div>

                    {/* Tech stack */}
                    <div className="flex gap-1.5 sm:gap-2 flex-wrap mb-4 sm:mb-5 md:mb-6">
                      <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold border border-white/30">Next.js</span>
                      <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold border border-white/30">Node.js</span>
                      <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold border border-white/30">Stripe</span>
                    </div>

                    <div className="mt-4 sm:mt-6 inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-pink-600 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all">
                      Case study ko'rish
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="text-center mt-8 sm:mt-10 md:mt-12">
              <a href="/projects" className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 hover:bg-gray-800 text-gray-300 border-2 border-gray-700 hover:border-blue-600 rounded-lg font-mono font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-300">
                <span className="text-green-400">$</span>
                <span className="whitespace-nowrap">ls -la projects/</span>
                <span className="text-gray-500 font-normal">(6)</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section - Terminal Style */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
          {/* Grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
            {/* Terminal-style CTA */}
            <div className="bg-gray-900 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border-2 border-gray-800 shadow-2xl">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-500 text-sm font-mono ml-2">collaboration.sh</span>
              </div>

              <div className="space-y-6 font-mono">
                <div className="flex items-start gap-3">
                  <span className="text-green-400">$</span>
                  <div>
                    <span className="text-cyan-400">git clone</span>
                    <span className="text-gray-400"> your-idea.git</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-green-400">$</span>
                  <div>
                    <span className="text-purple-400">npm install</span>
                    <span className="text-gray-400"> --save bahriddin-expertise</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-green-400">$</span>
                  <div>
                    <span className="text-yellow-400">npm run</span>
                    <span className="text-gray-400"> build-million-dollar-product</span>
                  </div>
                </div>

                <div className="pl-4 text-gray-500 text-sm">
                  <span className="text-blue-400">✓</span> MVP Development<br />
                  <span className="text-blue-400">✓</span> Full-Stack Architecture<br />
                  <span className="text-blue-400">✓</span> Scaling & Optimization<br />
                  <span className="text-green-400">✓</span> Production Ready!
                </div>

                <div className="pt-4 sm:pt-6 border-t border-gray-800">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                    <span className="text-gray-500">{'{'}</span> Let's collaborate <span className="text-gray-500">{'}'}</span>
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                    Have an idea? Need technical expertise? Let's build something amazing together.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <a href="/contact" className="group px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-mono font-bold text-sm sm:text-base shadow-lg transition-all flex items-center justify-center gap-2 sm:gap-3">
                      <span className="text-green-400">$</span>
                      <span className="whitespace-nowrap">start_project</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>

                    <a href="/resume" className="group px-6 sm:px-8 py-3 sm:py-4 bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 hover:border-blue-600 text-gray-300 rounded-lg font-mono font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 sm:gap-3">
                      <span>cat</span>
                      <span className="whitespace-nowrap">resume.pdf</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics - Code style */}
            <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 font-mono text-xs sm:text-sm">
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 sm:p-4 text-center">
                <span className="text-gray-500 text-[10px] sm:text-xs">experience:</span>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-400 mt-1">3+ years</div>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 sm:p-4 text-center">
                <span className="text-gray-500 text-[10px] sm:text-xs">projects:</span>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-purple-400 mt-1">15+</div>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 sm:p-4 text-center">
                <span className="text-gray-500 text-[10px] sm:text-xs">satisfaction:</span>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-400 mt-1">100%</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
      `}</style>
    </>
  )
}

