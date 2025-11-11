import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import ProfileImageDisplay from '@/components/ProfileImageDisplay'
import { motion } from 'framer-motion'
import { HiAcademicCap, HiLightBulb, HiHeart, HiTrendingUp } from 'react-icons/hi'

export default function About() {
  return (
    <>
      <Head>
        <title>Men haqimda — Bahriddin | Full-Stack Developer</title>
        <meta name="description" content="Bahriddin — 21 yoshda, dasturchi va mahsulot yaratuvchisi." />
      </Head>

      <div className="min-h-screen bg-gray-900">
        {/* Hero - Terminal Style */}
        <section className="relative py-20 overflow-hidden">
          {/* Grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            {/* Bento Grid Layout */}
            <div className="grid md:grid-cols-12 gap-6 mb-12">
              {/* Main terminal card */}
              <div className="md:col-span-12 bg-gray-900 rounded-2xl p-8 shadow-2xl border-2 border-gray-800">
                {/* Terminal header */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-800">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-500 text-sm font-mono">about.sh</span>
                </div>

                {/* Terminal content */}
                <div className="font-mono space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-green-400">$</span>
                    <span className="text-cyan-400">cat developer_info.json</span>
                  </div>

                  <div className="pl-4 text-sm leading-relaxed">
                    <div className="text-gray-500 font-bold">{'{'}</div>
                    <div className="pl-4 space-y-1.5">
                      <div><span className="text-blue-400 font-bold">"name":</span> <span className="text-green-400 font-semibold">"Bahriddin"</span>,</div>
                      <div><span className="text-blue-400 font-bold">"age":</span> <span className="text-orange-400 font-bold">21</span>,</div>
                      <div><span className="text-blue-400 font-bold">"role":</span> <span className="text-green-400 font-semibold">"Full-Stack Developer & Product Designer"</span>,</div>
                      <div><span className="text-blue-400 font-bold">"experience_years":</span> <span className="text-orange-400 font-bold">3</span>,</div>
                      <div><span className="text-blue-400 font-bold">"specialization":</span> <span className="text-gray-500 font-bold">[</span></div>
                      <div className="pl-4">
                        <div><span className="text-green-400 font-semibold">"Web Platforms"</span><span className="text-gray-600">,</span></div>
                        <div><span className="text-green-400 font-semibold">"Educational Systems"</span><span className="text-gray-600">,</span></div>
                        <div><span className="text-green-400 font-semibold">"MVP Development"</span></div>
                      </div>
                      <div><span className="text-gray-500 font-bold">]</span>,</div>
                      <div><span className="text-blue-400 font-bold">"achievements":</span> <span className="text-gray-500 font-bold">[</span></div>
                      <div className="pl-4">
                        <div><span className="text-green-400 font-semibold">"Created CodeLab platform"</span><span className="text-gray-600">,</span></div>
                        <div><span className="text-green-400 font-semibold">"Built 15+ web platforms"</span><span className="text-gray-600">,</span></div>
                        <div><span className="text-green-400 font-semibold">"Served 10K+ users"</span></div>
                      </div>
                      <div><span className="text-gray-500 font-bold">]</span>,</div>
                      <div><span className="text-blue-400 font-bold">"philosophy":</span> <span className="text-cyan-400 font-semibold">"Code with purpose, build with impact"</span></div>
                    </div>
                    <div className="text-gray-500 font-bold">{'}'}</div>
                  </div>
                </div>
              </div>

              {/* Stats - Code format */}
              <div className="md:col-span-3 bg-gray-900 rounded-xl p-6 border-2 border-gray-800 hover:border-blue-600 font-mono text-center transition-all">
                <div className="text-gray-500 text-xs mb-2 font-bold uppercase tracking-wider">projects</div>
                <div className="text-5xl font-black text-blue-400 tracking-tighter">15+</div>
              </div>

              <div className="md:col-span-3 bg-gray-900 rounded-xl p-6 border-2 border-gray-800 hover:border-green-600 font-mono text-center transition-all">
                <div className="text-gray-500 text-xs mb-2 font-bold uppercase tracking-wider">users</div>
                <div className="text-5xl font-black text-green-400 tracking-tighter">10K+</div>
              </div>

              <div className="md:col-span-3 bg-gray-900 rounded-xl p-6 border-2 border-gray-800 hover:border-purple-600 font-mono text-center transition-all">
                <div className="text-gray-500 text-xs mb-2 font-bold uppercase tracking-wider">revenue</div>
                <div className="text-5xl font-black text-purple-400 tracking-tighter">$50K+</div>
              </div>

              <div className="md:col-span-3 bg-gray-900 rounded-xl p-6 border-2 border-gray-800 hover:border-cyan-600 font-mono text-center transition-all">
                <div className="text-gray-500 text-xs mb-2 font-bold uppercase tracking-wider">experience</div>
                <div className="text-5xl font-black text-cyan-400 tracking-tighter">3+</div>
              </div>
            </div>
          </div>
        </section>

        {/* Story - Premium Cards */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Journey</span>
              </h2>
              <p className="text-xl text-gray-600 font-bold">From first HTML tag to full-stack products</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-blue-200 hover:border-blue-600">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                    🚀
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Early Days</h3>
                </div>
                <p className="text-gray-700 leading-relaxed font-semibold text-base">
                  Started coding at <span className="font-black text-blue-600">age 16</span> with HTML & CSS. 
                  Built my first website and had an epiphany: <span className="font-black text-purple-600">"I can reach millions through code!"</span>
                </p>
              </div>

              {/* Card 2 */}
              <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-purple-200 hover:border-purple-600">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                    🎓
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Education</h3>
                </div>
                <p className="text-gray-700 leading-relaxed font-semibold text-base">
                  Studied <span className="font-black text-blue-600">Computer Science</span>, mastered React, Django, and modern tech. 
                  Real learning came from <span className="font-black text-purple-600">building real products</span> for real users.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-green-200 hover:border-green-600">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-cyan-600 rounded-xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                    💼
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Today</h3>
                </div>
                <p className="text-gray-700 leading-relaxed font-semibold text-base">
                  Professional <span className="font-black text-green-600">Full-Stack Developer</span>. 
                  Not just writing code, but <span className="font-black text-blue-600">solving business problems</span> and creating technical solutions with measurable impact.
                </p>
              </div>

              {/* Card 4 */}
              <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-orange-200 hover:border-orange-600">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-pink-600 rounded-xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                    🎯
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed font-semibold text-base">
                  Building <span className="font-black text-orange-600">SaaS products</span>, contributing to <span className="font-black text-purple-600">tech education</span>. 
                  Core belief: <span className="font-black text-green-600">"Good technology improves lives."</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values - Premium Cards */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <span className="px-4 py-2 bg-gray-800 border-2 border-gray-700 text-green-400 rounded-lg text-sm font-mono font-bold mb-4 inline-block">
                // Core Values
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                What <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Drives Me</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group bg-gradient-to-br from-blue-600 to-cyan-600 p-8 rounded-2xl transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/50 text-white">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all shadow-lg">
                  💡
                </div>
                <h3 className="text-2xl font-black mb-3 uppercase tracking-tight">Innovation</h3>
                <p className="text-blue-50 font-semibold leading-relaxed">Always exploring new technologies and creative solutions</p>
              </div>

              <div className="group bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-2xl transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/50 text-white">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all shadow-lg">
                  ⚡
                </div>
                <h3 className="text-2xl font-black mb-3 uppercase tracking-tight">Excellence</h3>
                <p className="text-purple-50 font-semibold leading-relaxed">Professional approach and high standards in every project</p>
              </div>

              <div className="group bg-gradient-to-br from-green-600 to-cyan-600 p-8 rounded-2xl transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/50 text-white">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all shadow-lg">
                  📈
                </div>
                <h3 className="text-2xl font-black mb-3 uppercase tracking-tight">Impact</h3>
                <p className="text-green-50 font-semibold leading-relaxed">Solutions that scale businesses and drive growth</p>
              </div>

              <div className="group bg-gradient-to-br from-orange-600 to-pink-600 p-8 rounded-2xl transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/50 text-white">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all shadow-lg">
                  🎓
                </div>
                <h3 className="text-2xl font-black mb-3 uppercase tracking-tight">Education</h3>
                <p className="text-orange-50 font-semibold leading-relaxed">Contributing to tech community through teaching</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - Premium Gradient */}
        <section className="relative py-20 overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>

          <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
              Let's Build Something
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-200">
                Amazing Together
              </span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 font-bold">
              Available for full-time roles, freelance projects, and collaborations
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 rounded-2xl font-black uppercase tracking-wider shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all">
                Start Conversation
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="/BAHRIDDIN_RESUME.pdf" 
                download="Bahriddin_Resume.pdf"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-2xl font-black uppercase tracking-wider shadow-2xl hover:bg-white/30 hover:scale-105 transition-all"
              >
                <svg className="w-6 h-6 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Get Resume
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
