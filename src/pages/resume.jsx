import React, { useState } from 'react'
import Head from 'next/head'
import AvatarUpload from '@/components/AvatarUpload'

export default function Resume() {
  const [profileImage, setProfileImage] = useState(null)

  // Load profile image
  React.useEffect(() => {
    const savedImage = localStorage.getItem('profileImage')
    if (savedImage) setProfileImage(savedImage)
  }, [])

  return (
    <>
      <Head>
        <title>Resume — Bahriddin | Full-Stack Developer</title>
        <meta name="description" content="Bahriddin professional resume. Full-Stack Developer — experience, skills, education." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Print-friendly header */}
        <div className="hidden print:block bg-white p-8">
          <h1 className="text-4xl font-black mb-2">BAHRIDDIN</h1>
          <p className="text-lg font-semibold text-gray-700 mb-4">Full-Stack Developer | Product Engineer</p>
          <div className="flex gap-4 text-sm">
            <span>📧 hello@bahriddin.dev</span>
            <span>📱 @baxadevuz</span>
            <span>📍 Buxoro, Uzbekistan</span>
          </div>
        </div>

        {/* Screen Header - Premium */}
        <div className="print:hidden relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white py-16 overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>

          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Left - Avatar */}
              <div className="flex justify-center">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
                  <div className="relative w-48 h-48 rounded-3xl overflow-hidden shadow-2xl">
                    {profileImage ? (
                      <img 
                        src={profileImage} 
                        alt="Bahriddin" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-7xl">
                        👨‍💻
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Center - Info */}
              <div className="text-center md:text-left">
                <h1 className="text-6xl md:text-7xl font-black mb-4 tracking-tighter leading-tight">
                  BAHRIDDIN
                </h1>
                <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6 uppercase tracking-wide">
                  Full-Stack Developer
                </p>
                <div className="space-y-2 text-sm font-bold text-gray-300">
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    hello@bahriddin.dev
                  </div>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                    Buxoro, Uzbekistan
                  </div>
                  <div className="flex gap-3 mt-4 justify-center md:justify-start">
                    <a href="https://github.com/baxadevuz" target="_blank" className="text-blue-400 hover:text-blue-300 font-black uppercase text-xs tracking-wider">GitHub</a>
                    <span className="text-gray-600">•</span>
                    <a href="https://linkedin.com/in/bahriddin" target="_blank" className="text-blue-400 hover:text-blue-300 font-black uppercase text-xs tracking-wider">LinkedIn</a>
                    <span className="text-gray-600">•</span>
                    <a href="https://t.me/baxadevuz" target="_blank" className="text-cyan-400 hover:text-cyan-300 font-black uppercase text-xs tracking-wider">Telegram</a>
                  </div>
                </div>
              </div>

              {/* Right - Download */}
              <div className="flex flex-col gap-4">
                <a
                  href="/BAHRIDDIN_RESUME.pdf"
                  download="Bahriddin_Resume.pdf"
                  className="group flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl font-black uppercase tracking-wider shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all"
                >
                  <svg className="w-7 h-7 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </a>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
                    <div className="text-2xl font-black text-blue-400">3+</div>
                    <div className="text-xs font-bold text-gray-400">Years</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
                    <div className="text-2xl font-black text-green-400">15+</div>
                    <div className="text-xs font-bold text-gray-400">Projects</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
                    <div className="text-2xl font-black text-purple-400">10K+</div>
                    <div className="text-xs font-bold text-gray-400">Users</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 max-w-5xl py-12">
          {/* Professional Summary */}
          <section className="mb-12 print:mb-8">
            <h2 className="text-2xl font-black mb-4 uppercase tracking-wide border-b-4 border-blue-600 pb-2">Professional Summary</h2>
            <p className="text-gray-800 leading-relaxed font-semibold text-lg">
              Results-driven <span className="font-black text-blue-600">Full-Stack Developer</span> with <span className="font-black">3+ years</span> of experience building scalable web applications. 
              Proven track record of delivering high-impact products: <span className="font-black text-green-600">10K+ users</span>, <span className="font-black text-blue-600">$50K+ revenue</span>. 
              Expert in <span className="font-bold">React, Django, Next.js, PostgreSQL</span>. Strong focus on business metrics, user experience, and technical excellence.
            </p>
          </section>

          {/* Work Experience */}
          <section className="mb-12 print:mb-8">
            <h2 className="text-2xl font-black mb-6 uppercase tracking-wide border-b-4 border-blue-600 pb-2">Work Experience</h2>
            
            <div className="space-y-8">
              {/* Experience 1 */}
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-black text-gray-900">Lead Full-Stack Developer</h3>
                    <div className="text-blue-600 font-bold">Buxoro Bilimdonlar</div>
                  </div>
                  <div className="text-right">
                    <div className="font-black text-gray-900">Jan 2025 - Present</div>
                    <div className="text-sm text-gray-600">Buxoro, Uzbekistan</div>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex gap-2 items-start">
                    <span className="text-blue-600 font-black">•</span>
                    <span className="font-semibold">Architected and deployed full-stack online education platform serving <span className="font-black text-blue-600">10,000+ users</span> with video streaming, payment integration, and analytics dashboard</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-blue-600 font-black">•</span>
                    <span className="font-semibold">Generated <span className="font-black text-green-600">$50,000+ revenue</span> within 3 months through subscription model and course sales</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-blue-600 font-black">•</span>
                    <span className="font-semibold">Reduced server costs by <span className="font-black">40%</span> through optimized database queries and caching strategies (Redis, CDN)</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-blue-600 font-black">•</span>
                    <span className="font-semibold">Tech Stack: <span className="font-bold">Django, React, PostgreSQL, AWS S3, Stripe, Docker</span></span>
                  </li>
                </ul>
              </div>

              {/* Experience 2 */}
              <div className="border-l-4 border-purple-600 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-black text-gray-900">Full-Stack Developer & Founder</h3>
                    <div className="text-purple-600 font-bold">CodeLab - Bootcamp Platform</div>
                  </div>
                  <div className="text-right">
                    <div className="font-black text-gray-900">Mar 2024 - Dec 2024</div>
                    <div className="text-sm text-gray-600">Remote</div>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex gap-2 items-start">
                    <span className="text-purple-600 font-black">•</span>
                    <span className="font-semibold">Built interactive bootcamp platform from scratch with <span className="font-black">real-time code collaboration</span> and automated testing</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-purple-600 font-black">•</span>
                    <span className="font-semibold">Achieved <span className="font-black text-green-600">95% course completion rate</span> with <span className="font-black">500+ enrolled students</span></span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-purple-600 font-black">•</span>
                    <span className="font-semibold">Implemented live code editor using Monaco Editor with syntax highlighting and auto-completion</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-purple-600 font-black">•</span>
                    <span className="font-semibold">Tech Stack: <span className="font-bold">Next.js, TypeScript, MongoDB, Socket.io, Redis</span></span>
                  </li>
                </ul>
              </div>

              {/* Experience 3 */}
              <div className="border-l-4 border-green-600 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-black text-gray-900">Software Developer</h3>
                    <div className="text-green-600 font-bold">Freelance Projects</div>
                  </div>
                  <div className="text-right">
                    <div className="font-black text-gray-900">2023 - 2024</div>
                    <div className="text-sm text-gray-600">Remote</div>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex gap-2 items-start">
                    <span className="text-green-600 font-black">•</span>
                    <span className="font-semibold">Developed <span className="font-black">15+ web applications</span> for clients across education, e-commerce, and SaaS domains</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-green-600 font-black">•</span>
                    <span className="font-semibold">Increased client business metrics by <span className="font-black">average 40%</span> through performance optimization and UX improvements</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-green-600 font-black">•</span>
                    <span className="font-semibold">Tech Stack: <span className="font-bold">React, Vue.js, Node.js, Django, PostgreSQL, MongoDB</span></span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-12 print:mb-8">
            <h2 className="text-2xl font-black mb-6 uppercase tracking-wide border-b-4 border-blue-600 pb-2">Technical Skills</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-lg">
                <h3 className="font-black text-lg mb-4 text-blue-600 uppercase tracking-wide">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-lg font-bold text-sm">React</span>
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-lg font-bold text-sm">Next.js</span>
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-lg font-bold text-sm">Vue.js</span>
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-lg font-bold text-sm">TypeScript</span>
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-lg font-bold text-sm">Tailwind CSS</span>
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-lg font-bold text-sm">Redux</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-lg">
                <h3 className="font-black text-lg mb-4 text-green-600 uppercase tracking-wide">Backend Development</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-green-100 text-green-800 rounded-lg font-bold text-sm">Django</span>
                  <span className="px-3 py-1.5 bg-green-100 text-green-800 rounded-lg font-bold text-sm">Node.js</span>
                  <span className="px-3 py-1.5 bg-green-100 text-green-800 rounded-lg font-bold text-sm">Express</span>
                  <span className="px-3 py-1.5 bg-green-100 text-green-800 rounded-lg font-bold text-sm">FastAPI</span>
                  <span className="px-3 py-1.5 bg-green-100 text-green-800 rounded-lg font-bold text-sm">REST API</span>
                  <span className="px-3 py-1.5 bg-green-100 text-green-800 rounded-lg font-bold text-sm">GraphQL</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-lg">
                <h3 className="font-black text-lg mb-4 text-purple-600 uppercase tracking-wide">Database & Storage</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-purple-100 text-purple-800 rounded-lg font-bold text-sm">PostgreSQL</span>
                  <span className="px-3 py-1.5 bg-purple-100 text-purple-800 rounded-lg font-bold text-sm">MongoDB</span>
                  <span className="px-3 py-1.5 bg-purple-100 text-purple-800 rounded-lg font-bold text-sm">Redis</span>
                  <span className="px-3 py-1.5 bg-purple-100 text-purple-800 rounded-lg font-bold text-sm">AWS S3</span>
                  <span className="px-3 py-1.5 bg-purple-100 text-purple-800 rounded-lg font-bold text-sm">Firebase</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-lg">
                <h3 className="font-black text-lg mb-4 text-orange-600 uppercase tracking-wide">DevOps & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-orange-100 text-orange-800 rounded-lg font-bold text-sm">Docker</span>
                  <span className="px-3 py-1.5 bg-orange-100 text-orange-800 rounded-lg font-bold text-sm">Git</span>
                  <span className="px-3 py-1.5 bg-orange-100 text-orange-800 rounded-lg font-bold text-sm">AWS</span>
                  <span className="px-3 py-1.5 bg-orange-100 text-orange-800 rounded-lg font-bold text-sm">Vercel</span>
                  <span className="px-3 py-1.5 bg-orange-100 text-orange-800 rounded-lg font-bold text-sm">CI/CD</span>
                  <span className="px-3 py-1.5 bg-orange-100 text-orange-800 rounded-lg font-bold text-sm">Nginx</span>
                </div>
              </div>
            </div>
          </section>

          {/* Key Projects */}
          <section className="mb-12 print:mb-8">
            <h2 className="text-2xl font-black mb-6 uppercase tracking-wide border-b-4 border-blue-600 pb-2">Key Projects</h2>
            
            <div className="space-y-6">
              {/* Project 1 */}
              <div className="bg-white rounded-xl p-6 border-2 border-blue-200 shadow-lg">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-black text-gray-900">Buxoro Bilimdonlar - Education Platform</h3>
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-lg font-bold text-sm">2025</span>
                </div>
                <p className="text-gray-700 mb-3 font-semibold">
                  Full-featured online learning platform with video streaming, subscription payments, and comprehensive analytics.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="text-2xl font-black text-blue-600">10,000+</div>
                    <div className="text-xs font-bold text-gray-600 uppercase">Active Users</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl font-black text-green-600">$50K+</div>
                    <div className="text-xs font-bold text-gray-600 uppercase">Revenue Generated</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="text-2xl font-black text-purple-600">40%</div>
                    <div className="text-xs font-bold text-gray-600 uppercase">Cost Reduction</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 text-white rounded text-xs font-bold">Django</span>
                  <span className="px-3 py-1 bg-gray-800 text-white rounded text-xs font-bold">React</span>
                  <span className="px-3 py-1 bg-gray-800 text-white rounded text-xs font-bold">PostgreSQL</span>
                  <span className="px-3 py-1 bg-gray-800 text-white rounded text-xs font-bold">AWS S3</span>
                  <span className="px-3 py-1 bg-gray-800 text-white rounded text-xs font-bold">Stripe</span>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white rounded-xl p-6 border-2 border-purple-200 shadow-lg">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-black text-gray-900">CodeLab - Interactive Bootcamp Platform</h3>
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-lg font-bold text-sm">2024</span>
                </div>
                <p className="text-gray-700 mb-3 font-semibold">
                  Real-time collaborative coding platform with automated testing, progress tracking, and certificate generation.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="text-2xl font-black text-purple-600">500+</div>
                    <div className="text-xs font-bold text-gray-600 uppercase">Students Enrolled</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl font-black text-green-600">95%</div>
                    <div className="text-xs font-bold text-gray-600 uppercase">Completion Rate</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="text-2xl font-black text-blue-600">4.8/5</div>
                    <div className="text-xs font-bold text-gray-600 uppercase">Student Rating</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 text-white rounded text-xs font-bold">Next.js</span>
                  <span className="px-3 py-1 bg-gray-800 text-white rounded text-xs font-bold">TypeScript</span>
                  <span className="px-3 py-1 bg-gray-800 text-white rounded text-xs font-bold">MongoDB</span>
                  <span className="px-3 py-1 bg-gray-800 text-white rounded text-xs font-bold">Socket.io</span>
                  <span className="px-3 py-1 bg-gray-800 text-white rounded text-xs font-bold">Monaco Editor</span>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white rounded-xl p-6 border-2 border-green-200 shadow-lg">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-black text-gray-900">Smart Inventory Management System</h3>
                  <span className="px-3 py-1 bg-green-600 text-white rounded-lg font-bold text-sm">2023</span>
                </div>
                <p className="text-gray-700 mb-3 font-semibold">
                  Warehouse management system with real-time stock tracking, automated ordering, and analytics dashboard.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl font-black text-green-600">20+</div>
                    <div className="text-xs font-bold text-gray-600 uppercase">Businesses Using</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="text-2xl font-black text-orange-600">-80%</div>
                    <div className="text-xs font-bold text-gray-600 uppercase">Error Reduction</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="text-2xl font-black text-blue-600">60%</div>
                    <div className="text-xs font-bold text-gray-600 uppercase">Time Saved</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 text-white rounded text-xs font-bold">Django</span>
                  <span className="px-3 py-1 bg-gray-800 text-white rounded text-xs font-bold">Vue.js</span>
                  <span className="px-3 py-1 bg-gray-800 text-white rounded text-xs font-bold">PostgreSQL</span>
                  <span className="px-3 py-1 bg-gray-800 text-white rounded text-xs font-bold">Chart.js</span>
                  <span className="px-3 py-1 bg-gray-800 text-white rounded text-xs font-bold">Celery</span>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-12 print:mb-8">
            <h2 className="text-2xl font-black mb-6 uppercase tracking-wide border-b-4 border-blue-600 pb-2">Education</h2>
            
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-black text-gray-900">Computer Science & Software Engineering</h3>
                  <div className="text-blue-600 font-bold">Buxoro State University</div>
                </div>
                <div className="text-right">
                  <div className="font-black text-gray-900">2020 - 2024</div>
                  <div className="text-sm font-bold text-green-600">GPA: 3.8/4.0</div>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex gap-2 items-start">
                  <span className="text-blue-600 font-black">•</span>
                  <span className="font-semibold">Relevant Coursework: Data Structures, Algorithms, Database Systems, Web Development, Software Engineering</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-blue-600 font-black">•</span>
                  <span className="font-semibold">Honors: Dean's List (2022-2024), Best Final Year Project Award</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-12 print:mb-8">
            <h2 className="text-2xl font-black mb-6 uppercase tracking-wide border-b-4 border-blue-600 pb-2">Certifications & Achievements</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200 shadow">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-2xl">🏆</div>
                <div>
                  <div className="font-black text-gray-900">Meta React Developer Certificate</div>
                  <div className="text-sm text-gray-600 font-semibold">Coursera, 2024</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200 shadow">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-2xl">✅</div>
                <div>
                  <div className="font-black text-gray-900">AWS Cloud Practitioner</div>
                  <div className="text-sm text-gray-600 font-semibold">Amazon Web Services, 2023</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200 shadow">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-2xl">🎓</div>
                <div>
                  <div className="font-black text-gray-900">Google UX Design Certificate</div>
                  <div className="text-sm text-gray-600 font-semibold">Google, 2023</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200 shadow">
                <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center text-2xl">⚡</div>
                <div>
                  <div className="font-black text-gray-900">JavaScript Algorithms Expert</div>
                  <div className="text-sm text-gray-600 font-semibold">freeCodeCamp, 2023</div>
                </div>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section className="mb-12 print:mb-8">
            <h2 className="text-2xl font-black mb-6 uppercase tracking-wide border-b-4 border-blue-600 pb-2">Languages</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-5 border-2 border-gray-200 shadow-lg text-center">
                <div className="text-3xl mb-2">🇺🇿</div>
                <div className="font-black text-gray-900 mb-1">O'zbek</div>
                <div className="text-sm font-bold text-blue-600">Native</div>
              </div>
              <div className="bg-white rounded-xl p-5 border-2 border-gray-200 shadow-lg text-center">
                <div className="text-3xl mb-2">🇬🇧</div>
                <div className="font-black text-gray-900 mb-1">English</div>
                <div className="text-sm font-bold text-green-600">Professional Working Proficiency</div>
              </div>
              <div className="bg-white rounded-xl p-5 border-2 border-gray-200 shadow-lg text-center">
                <div className="text-3xl mb-2">🇷🇺</div>
                <div className="font-black text-gray-900 mb-1">Russian</div>
                <div className="text-sm font-bold text-purple-600">Professional Working Proficiency</div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="print:hidden bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center shadow-2xl">
            <h2 className="text-3xl font-black mb-4 uppercase tracking-wide">Ready to Work Together?</h2>
            <p className="text-lg mb-6 font-semibold text-blue-100">
              I'm available for full-time roles, contract work, and exciting freelance projects.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-black uppercase tracking-wider shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                Contact Me
              </a>
              <a
                href="https://t.me/baxadevuz"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-xl font-black uppercase tracking-wider shadow-xl hover:bg-white/30 hover:scale-105 transition-all"
              >
                Telegram
              </a>
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        @media print {
          @page {
            margin: 1in;
            size: letter;
          }
          body {
            background: white;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:block {
            display: block !important;
          }
          .shadow-lg, .shadow-xl, .shadow-2xl {
            box-shadow: none !important;
          }
          .rounded-xl, .rounded-2xl, .rounded-3xl {
            border-radius: 8px !important;
          }
        }
      `}</style>
    </>
  )
}
