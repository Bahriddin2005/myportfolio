import React, { useState, useRef } from 'react'
import Head from 'next/head'

export default function Resume() {
  const [profileImage, setProfileImage] = useState(null)
  const [pdfLoading, setPdfLoading] = useState(false)
  const pdfRef = useRef(null)

  React.useEffect(() => {
    const savedImage = typeof window !== 'undefined' ? localStorage.getItem('profileImage') : null
    if (savedImage) setProfileImage(savedImage)
  }, [])

  const handleDownloadPdf = async () => {
    if (typeof window === 'undefined' || !pdfRef.current) return
    setPdfLoading(true)
    try {
      await new Promise(r => setTimeout(r, 350))
      const html2canvas = (await import('html2canvas')).default
      const { jsPDF } = await import('jspdf')

      const el = pdfRef.current
      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
      })

      const imgData = canvas.toDataURL('image/jpeg', 0.92)
      const pdf = new jsPDF('p', 'mm', 'a4')
      const pageW = 210
      const pageH = 297
      const imgW = pageW
      const imgH = (canvas.height * pageW) / canvas.width
      let heightLeft = imgH
      let position = 0

      pdf.addImage(imgData, 'JPEG', 0, position, imgW, imgH)
      while (heightLeft > pageH) {
        pdf.addPage()
        position = position - pageH
        pdf.addImage(imgData, 'JPEG', 0, position, imgW, imgH)
        heightLeft -= pageH
      }
      pdf.save('Bahriddin_Shavkatov_Resume.pdf')
    } catch (err) {
      console.error(err)
      window.print()
    } finally {
      setPdfLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Bahriddin Shavkatov — Resume | Full-Stack Engineer</title>
        <meta name="description" content="Full-Stack Engineer. 3+ years. 10K+ users, $50K+ revenue. React, Django, Next.js, PostgreSQL. Built scalable ed-tech & SaaS." />
      </Head>

      <div className="min-h-screen bg-slate-50 resume-page">
        {/* ═══════════════════════════════════════════════════════════════
            SCREEN HERO (hidden in print)
        ═══════════════════════════════════════════════════════════════ */}
        <div className="print:hidden relative bg-[#0f172a] text-white py-14 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/10 flex-shrink-0">
                  {profileImage ? (
                    <img src={profileImage} alt="Bahriddin" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-5xl">👨‍💻</div>
                  )}
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">Bahriddin Shavkatov</h1>
                  <p className="text-lg font-semibold text-blue-200 mt-1">Full-Stack Engineer</p>
                  <p className="text-slate-400 text-sm mt-2 max-w-md">Scalable web products · 10K+ users · $50K+ revenue · React, Django, Next.js</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                  <button
                    type="button"
                    onClick={handleDownloadPdf}
                    disabled={pdfLoading}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-70 disabled:cursor-not-allowed text-white rounded-xl font-bold text-sm shadow-lg hover:shadow-blue-500/30 transition-all cursor-pointer"
                  >
                    {pdfLoading ? (
                      <>
                        <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Yuklanmoqda...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        PDF yuklab olish
                      </>
                    )}
                  </button>
                  <p className="text-slate-500 text-xs text-center">Bir marta bosing — PDF fayl yuklanadi</p>
                </div>
                <div className="flex gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-blue-400">3+</span>
                    <span className="text-slate-400">years</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-emerald-400">15+</span>
                    <span className="text-slate-400">projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-violet-400">10K+</span>
                    <span className="text-slate-400">users</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-amber-400">$50K+</span>
                    <span className="text-slate-400">revenue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            MAIN RESUME CONTENT (screen + print)
        ═══════════════════════════════════════════════════════════════ */}
        <div
          ref={pdfRef}
          className={`resume-content container mx-auto px-6 max-w-4xl py-10 print:py-0 print:max-w-none print:px-8 print:overflow-visible ${pdfLoading ? 'pdf-capture' : ''}`}
        >
          {pdfLoading ? (
            /* ═══ PDF: referens (minimal, toza, ATS-friendly) ═══ */
            <div className="resume-pdf-template">
              <div className="pdf-t-header">
                <h1 className="pdf-t-name">BAHRIDDIN SHAVKATOV</h1>
                <p className="pdf-t-title">Full-Stack Developer | Product Engineer</p>
                <div className="pdf-t-contact">
                  Email: hello@bahriddin.dev | Telegram: @baxadevuz | Location: Buxoro, Uzbekistan
                </div>
                <div className="pdf-t-contact pdf-t-contact-2">
                  GitHub: github.com/baxadevuz | LinkedIn: linkedin.com/in/bahriddin | Portfolio: bahriddin.dev
                </div>
              </div>

              <div className="pdf-t-body">
                <section className="pdf-t-section">
                  <h2 className="pdf-t-h2">Professional Summary</h2>
                  <p className="pdf-t-p">
                    Results-driven Full-Stack Developer with <b>3+ years</b> of experience building scalable web applications. Proven track record: <b>10K+ users</b>, <b>$50K+ revenue</b>. Expert in React, Django, Next.js, PostgreSQL. Strong focus on business metrics, user experience &amp; technical excellence.
                  </p>
                </section>

                <section className="pdf-t-section">
                  <h2 className="pdf-t-h2">Work Experience</h2>
                  <div className="pdf-t-job">
                    <div className="pdf-t-job-head">
                      <span className="pdf-t-job-role">Lead Full-Stack Developer | Buxoro Bilimdonlar</span>
                    </div>
                    <div className="pdf-t-job-meta">Jan 2025 – Present | Buxoro, Uzbekistan</div>
                    <ul className="pdf-t-ul">
                      <li>Architected full-stack education platform serving 10,000+ active users</li>
                      <li>Generated $50,000+ revenue in 3 months through subscription &amp; course sales</li>
                      <li>Reduced infrastructure costs by 40% via optimization (Redis caching, CDN)</li>
                      <li>Tech: Django, React, PostgreSQL, AWS S3, Stripe, Docker, Nginx</li>
                    </ul>
                  </div>
                  <div className="pdf-t-job">
                    <div className="pdf-t-job-head">
                      <span className="pdf-t-job-role">Full-Stack Developer &amp; Founder | CodeLab</span>
                    </div>
                    <div className="pdf-t-job-meta">Mar 2024 – Dec 2024 | Remote</div>
                    <ul className="pdf-t-ul">
                      <li>Built interactive bootcamp platform with real-time code collaboration &amp; testing</li>
                      <li>Achieved 95% completion rate with 500+ enrolled students, 4.8/5 rating</li>
                      <li>Implemented live code editor using Monaco Editor with syntax highlighting</li>
                      <li>Tech: Next.js, TypeScript, MongoDB, Socket.io, Redis, Monaco Editor</li>
                    </ul>
                  </div>
                  <div className="pdf-t-job">
                    <div className="pdf-t-job-head">
                      <span className="pdf-t-job-role">Software Developer | Freelance</span>
                    </div>
                    <div className="pdf-t-job-meta">2023 – 2024 | Remote</div>
                    <ul className="pdf-t-ul">
                      <li>Developed 15+ web applications for clients in education, e-commerce, SaaS</li>
                      <li>Increased client metrics by average 40% through UX &amp; performance optimization</li>
                      <li>Tech: React, Vue.js, Node.js, Django, PostgreSQL, MongoDB, AWS</li>
                    </ul>
                  </div>
                </section>

                <section className="pdf-t-section">
                  <h2 className="pdf-t-h2">Technical Skills</h2>
                  <div className="pdf-t-skills">
                    <p className="pdf-t-skill-line"><strong>Frontend:</strong> React, Next.js, Vue.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Redux</p>
                    <p className="pdf-t-skill-line"><strong>Backend:</strong> Django, Node.js, Express, FastAPI, REST API, GraphQL, WebSockets</p>
                    <p className="pdf-t-skill-line"><strong>Database:</strong> PostgreSQL, MongoDB, Redis, MySQL, Elasticsearch</p>
                    <p className="pdf-t-skill-line"><strong>DevOps &amp; Cloud:</strong> Docker, AWS (S3, EC2, RDS), Vercel, Git, CI/CD, Nginx</p>
                    <p className="pdf-t-skill-line"><strong>Other:</strong> Stripe/Payment Integration, WebRTC, Chart.js, Figma, Agile/Scrum</p>
                  </div>
                </section>

                <section className="pdf-t-section">
                  <h2 className="pdf-t-h2">Key Projects</h2>
                  <p className="pdf-t-proj-line"><strong>Buxoro Bilimdonlar</strong> – Education Platform | 10K+ users, $50K+ revenue</p>
                  <p className="pdf-t-proj-line"><strong>CodeLab</strong> – Bootcamp Platform | 500+ students, 95% completion</p>
                  <p className="pdf-t-proj-line"><strong>Smart Inventory</strong> – Management System | 20+ businesses, -80% errors</p>
                  <p className="pdf-t-proj-line"><strong>Iqromax.uz</strong> – Production hardening | Telegram OTP, Android scroll fix</p>
                </section>

                <section className="pdf-t-section">
                  <h2 className="pdf-t-h2">Education</h2>
                  <p className="pdf-t-p"><strong>Buxoro State University</strong> · Computer Science &amp; Software Engineering · 2020–2024 · GPA 3.8/4.0 · Dean&apos;s List</p>
                </section>

                <section className="pdf-t-section">
                  <h2 className="pdf-t-h2">Certifications</h2>
                  <p className="pdf-t-p">Meta React Developer (Coursera) · AWS Cloud Practitioner · Google UX Design · JavaScript Algorithms (freeCodeCamp)</p>
                </section>
              </div>
            </div>
          ) : (
            <>
          {/* ─── PDF/Print-only: Premium header (chiroyli dizayn) ─── */}
          <div className="hidden print:block print:mb-6 resume-print-header pdf-capture-header">
            <div className="resume-print-header-bar">
              <div className="resume-print-header-inner">
                <h1 className="resume-print-name">Bahriddin Shavkatov</h1>
                <p className="resume-print-title">Full-Stack Engineer</p>
              </div>
            </div>
            <div className="resume-print-contact">
              <span>hello@bahriddin.dev</span>
              <span className="resume-print-dot">·</span>
              <span>t.me/baxadevuz</span>
              <span className="resume-print-dot">·</span>
              <span>github.com/baxadevuz</span>
              <span className="resume-print-dot">·</span>
              <span>Buxoro, Uzbekistan</span>
            </div>
            <div className="resume-print-impact">
              <span><strong>10,000+</strong> users</span>
              <span className="resume-print-dot">·</span>
              <span><strong>$50K+</strong> revenue</span>
              <span className="resume-print-dot">·</span>
              <span><strong>15+</strong> projects</span>
              <span className="resume-print-dot">·</span>
              <span><strong>3+</strong> years</span>
            </div>
            <div className="resume-print-accent-line" />
          </div>

          {/* ─── Professional Summary ─── */}
          <section className="mb-10 print:mb-6">
            <h2 className="resume-heading">Professional Summary</h2>
            <p className="text-slate-700 leading-relaxed text-[15px] print:text-sm">
              <strong className="text-slate-900">Full-Stack Engineer</strong> with <strong>3+ years</strong> designing and shipping scalable systems. 
              Delivered products serving <strong>10,000+ MAU</strong> and <strong>$50K+ revenue</strong>. 
              Strong ownership: end-to-end architecture, <strong>performance</strong> (40% cost reduction via caching/CDN), and <strong>security</strong> (auth, OTP, data integrity). 
              Proficient in <strong>React</strong>, <strong>Next.js</strong>, <strong>Django</strong>, <strong>PostgreSQL</strong>; experience with distributed systems patterns. 
              Focus on measurable impact, clean code, and production reliability. Seeking to contribute to large-scale products at top-tier technology companies.
            </p>
          </section>

          {/* ─── Work Experience ─── */}
          <section className="mb-10 print:mb-6">
            <h2 className="resume-heading">Work Experience</h2>

            <div className="space-y-8 print:space-y-6">
              {/* Job 1 */}
              <div>
                <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                  <h3 className="text-lg font-bold text-slate-900">Lead Full-Stack Developer</h3>
                  <span className="text-sm text-slate-500 font-medium">Jan 2025 – Present</span>
                </div>
                <div className="text-blue-700 font-semibold text-sm mb-3">Buxoro Bilimdonlar · Buxoro, Uzbekistan</div>
                <ul className="space-y-2 text-slate-700 text-[15px] print:text-sm">
                  <li className="flex gap-2"><span className="text-blue-600 font-bold flex-shrink-0">•</span><span><strong>Architected and shipped</strong> full-stack education platform serving <strong>10,000+ users</strong> — video streaming (AWS S3/CloudFront), Stripe payments, analytics dashboard.</span></li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold flex-shrink-0">•</span><span><strong>Drove</strong> <strong>$50,000+ revenue</strong> in 3 months via subscription model; <strong>reduced infrastructure cost 40%</strong> through query optimization, Redis caching, CDN.</span></li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold flex-shrink-0">•</span><span><strong>Owned</strong> backend (Django REST), frontend (React), DevOps (Docker, Nginx). Tech: Django, React, PostgreSQL, AWS S3, Stripe, Redis.</span></li>
                </ul>
              </div>

              {/* Job 2 */}
              <div>
                <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                  <h3 className="text-lg font-bold text-slate-900">Full-Stack Developer & Founder</h3>
                  <span className="text-sm text-slate-500 font-medium">Mar 2024 – Dec 2024</span>
                </div>
                <div className="text-indigo-700 font-semibold text-sm mb-3">CodeLab · Bootcamp Platform · Remote</div>
                <ul className="space-y-2 text-slate-700 text-[15px] print:text-sm">
                  <li className="flex gap-2"><span className="text-indigo-600 font-bold flex-shrink-0">•</span><span><strong>Built from scratch</strong> real-time coding platform: WebSocket collaboration, Monaco Editor, automated test execution. <strong>500+ students</strong>, <strong>95%</strong> course completion rate.</span></li>
                  <li className="flex gap-2"><span className="text-indigo-600 font-bold flex-shrink-0">•</span><span><strong>Reduced</strong> mentor review time by <strong>70%</strong> via automated feedback pipeline. Tech: Next.js, TypeScript, Node.js, MongoDB, Socket.io, Redis, Docker.</span></li>
                </ul>
              </div>

              {/* Job 3 */}
              <div>
                <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                  <h3 className="text-lg font-bold text-slate-900">Software Developer</h3>
                  <span className="text-sm text-slate-500 font-medium">2023 – 2024</span>
                </div>
                <div className="text-emerald-700 font-semibold text-sm mb-3">Freelance · Remote</div>
                <ul className="space-y-2 text-slate-700 text-[15px] print:text-sm">
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold flex-shrink-0">•</span><span><strong>Shipped</strong> <strong>15+ production web applications</strong> across ed-tech, e-commerce, SaaS; improved client metrics by <strong>~40%</strong> via performance and UX.</span></li>
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold flex-shrink-0">•</span><span><strong>Led production debugging</strong> for <strong>Iqromax.uz</strong>: fixed Android scroll (100dvh, overflow architecture), implemented Telegram Bot + OTP auth, enforced DB unique constraints (1 account per user). Tech: React, Vue.js, Next.js, Django, PostgreSQL, MongoDB.</span></li>
                </ul>
              </div>
            </div>
          </section>

          {/* ─── Technical Skills ─── */}
          <section className="mb-10 print:mb-6">
            <h2 className="resume-heading">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 print:grid-cols-2 print:gap-3">
              <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm print:shadow-none print:rounded print:border print:p-3">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Frontend</h3>
                <p className="text-slate-700 text-sm font-medium">React, Next.js, Vue.js, TypeScript, Tailwind CSS, Redux</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm print:shadow-none print:rounded print:border print:p-3">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Backend & API</h3>
                <p className="text-slate-700 text-sm font-medium">Django, Node.js, Express, FastAPI, REST, GraphQL</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm print:shadow-none print:rounded print:border print:p-3">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Data & Storage</h3>
                <p className="text-slate-700 text-sm font-medium">PostgreSQL, MongoDB, Redis, AWS S3, Supabase</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm print:shadow-none print:rounded print:border print:p-3">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">DevOps & Tools</h3>
                <p className="text-slate-700 text-sm font-medium">Docker, Git, AWS, Vercel, Nginx, CI/CD</p>
              </div>
            </div>
          </section>

          {/* ─── Key Projects ─── */}
          <section className="mb-10 print:mb-6">
            <h2 className="resume-heading">Key Projects</h2>
            <div className="space-y-5 print:space-y-4">
              <div className="bg-white rounded-xl p-5 border-l-4 border-blue-500 border border-slate-200 shadow-sm print:shadow-none print:rounded print:p-4">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <h3 className="font-bold text-slate-900">Buxoro Bilimdonlar</h3>
                  <span className="text-xs font-semibold text-slate-500">2025</span>
                </div>
                <p className="text-slate-600 text-sm mb-3">Ed-tech platform: video streaming, payments, analytics. <strong>10K+ users</strong>, <strong>$50K+</strong> revenue, <strong>40%</strong> cost reduction.</p>
                <p className="text-xs text-slate-500 font-medium">Django · React · PostgreSQL · AWS S3 · Stripe · Redis</p>
              </div>
              <div className="bg-white rounded-xl p-5 border-l-4 border-indigo-500 border border-slate-200 shadow-sm print:shadow-none print:rounded print:p-4">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <h3 className="font-bold text-slate-900">CodeLab</h3>
                  <span className="text-xs font-semibold text-slate-500">2024</span>
                </div>
                <p className="text-slate-600 text-sm mb-3">Real-time coding bootcamp. <strong>500+</strong> students, <strong>95%</strong> completion rate. Monaco Editor, WebSocket collaboration.</p>
                <p className="text-xs text-slate-500 font-medium">Next.js · TypeScript · MongoDB · Socket.io · Docker</p>
              </div>
              <div className="bg-white rounded-xl p-5 border-l-4 border-emerald-500 border border-slate-200 shadow-sm print:shadow-none print:rounded print:p-4">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <h3 className="font-bold text-slate-900">Smart Inventory</h3>
                  <span className="text-xs font-semibold text-slate-500">2024</span>
                </div>
                <p className="text-slate-600 text-sm mb-3">Warehouse management. <strong>20+</strong> businesses, <strong>-80%</strong> errors, real-time stock & reports.</p>
                <p className="text-xs text-slate-500 font-medium">Django · Vue.js · PostgreSQL · Celery · Redis</p>
              </div>
              <div className="bg-white rounded-xl p-5 border-l-4 border-teal-500 border border-slate-200 shadow-sm print:shadow-none print:rounded print:p-4">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <h3 className="font-bold text-slate-900">Iqromax.uz</h3>
                  <span className="text-xs font-semibold text-slate-500">2024 · <a href="https://iqromax.uz" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Live</a></span>
                </div>
                <p className="text-slate-600 text-sm mb-3">Production-grade fixes: Android scroll (100dvh), Telegram OTP auth, unique constraints. Stable, secure, scalable.</p>
                <p className="text-xs text-slate-500 font-medium">Next.js · React · Tailwind</p>
              </div>
            </div>
          </section>

          {/* ─── Education ─── */}
          <section className="mb-10 print:mb-6">
            <h2 className="resume-heading">Education</h2>
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm print:shadow-none print:rounded print:p-4">
              <div className="flex flex-wrap justify-between items-baseline gap-2">
                <div>
                  <h3 className="font-bold text-slate-900">Computer Science & Software Engineering</h3>
                  <p className="text-slate-600 text-sm font-medium">Buxoro State University</p>
                </div>
                <div className="text-right text-sm">
                  <span className="font-semibold text-slate-700">2020 – 2024</span>
                  <span className="text-slate-500"> · GPA 3.8/4.0</span>
                </div>
              </div>
              <p className="text-slate-600 text-sm mt-2">Data Structures, Algorithms, Databases, Web Development, Software Engineering. Dean&apos;s List; Best Final Year Project.</p>
            </div>
          </section>

          {/* ─── Certifications ─── */}
          <section className="mb-10 print:mb-6">
            <h2 className="resume-heading">Certifications</h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold">Meta React Developer (Coursera)</span>
              <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold">AWS Cloud Practitioner</span>
              <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold">Google UX Design</span>
              <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold">JavaScript Algorithms (freeCodeCamp)</span>
            </div>
          </section>

          {/* ─── Languages ─── */}
          <section className="mb-10 print:mb-6">
            <h2 className="resume-heading">Languages</h2>
            <div className="flex flex-wrap gap-6 text-sm">
              <span><strong className="text-slate-800">Uzbek</strong> — Native</span>
              <span><strong className="text-slate-800">English</strong> — Professional working</span>
              <span><strong className="text-slate-800">Russian</strong> — Professional working</span>
            </div>
          </section>

          {/* ─── CTA (screen only, PDF da ko'rinmasin) ─── */}
          <section className="print:hidden pdf-hide-cta bg-slate-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold mb-2">Open to opportunities</h2>
            <p className="text-slate-300 text-sm mb-6">Full-time · Contract · Remote or relocate</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-sm transition">Contact</a>
              <a href="https://t.me/baxadevuz" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl font-bold text-sm transition">Telegram</a>
              <a href="https://github.com/baxadevuz" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl font-bold text-sm transition">GitHub</a>
            </div>
          </section>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        .resume-heading {
          font-size: 1.125rem;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: 0.02em;
          border-bottom: 2px solid #0f172a;
          padding-bottom: 0.35rem;
          margin-bottom: 0.75rem;
        }
        .resume-page :global(strong) {
          color: #0f172a;
          font-weight: 700;
        }

        /* ═══ PDF/Print: Premium header (yuklab olinganda chiroyli) ═══ */
        .resume-print-header-bar {
          background: linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%);
          color: #fff;
          padding: 1rem 0 1.25rem 0;
          margin: 0 -2rem 0 -2rem;
          padding-left: 2rem;
          padding-right: 2rem;
        }
        .resume-print-header-inner {
          max-width: 210mm;
          margin: 0 auto;
        }
        .resume-print-name {
          font-size: 1.75rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 0;
          line-height: 1.2;
        }
        .resume-print-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: #93c5fd;
          margin: 0.25rem 0 0 0;
          letter-spacing: 0.02em;
        }
        .resume-print-contact {
          font-size: 0.8rem;
          color: #475569;
          margin-top: 0.6rem;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.35rem;
        }
        .resume-print-dot {
          color: #cbd5e1;
          margin: 0 0.1rem;
        }
        .resume-print-impact {
          font-size: 0.8rem;
          color: #334155;
          margin-top: 0.5rem;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.35rem;
        }
        .resume-print-impact strong {
          color: #1e40af;
          font-weight: 700;
        }
        .resume-print-accent-line {
          height: 3px;
          background: linear-gradient(90deg, #2563eb 0%, #0ea5e9 100%);
          margin-top: 0.75rem;
          margin-left: -2rem;
          margin-right: -2rem;
        }

        /* PDF yig'ish: fon oq, CTA yashirin */
        .resume-content.pdf-capture {
          background: #ffffff;
        }
        .resume-content.pdf-capture .pdf-hide-cta {
          display: none !important;
        }

        /* ═══ PDF: referens (minimal, toza, ATS-friendly) ═══ */
        .resume-pdf-template {
          width: 100%;
          max-width: 210mm;
          margin: 0 auto;
          background: #ffffff;
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
          color: #1a1a1a;
        }
        .pdf-t-header {
          padding: 0 0 14px 0;
          border-bottom: 2px solid #1a1a1a;
          margin-bottom: 14px;
        }
        .pdf-t-name {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: 0.02em;
          margin: 0;
          line-height: 1.2;
          color: #1a1a1a;
        }
        .pdf-t-title {
          font-size: 12px;
          font-weight: 600;
          color: #333;
          margin: 4px 0 0 0;
        }
        .pdf-t-contact {
          font-size: 10px;
          color: #444;
          margin-top: 8px;
          line-height: 1.4;
        }
        .pdf-t-contact-2 {
          margin-top: 2px;
        }
        .pdf-t-body {
          padding: 0;
        }
        .pdf-t-section {
          margin-bottom: 14px;
        }
        .pdf-t-h2 {
          font-size: 11px;
          font-weight: 800;
          color: #1a1a1a;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin: 0 0 8px 0;
        }
        .pdf-t-p {
          font-size: 10.5px;
          color: #333;
          line-height: 1.5;
          margin: 0;
        }
        .pdf-t-job {
          margin-bottom: 12px;
        }
        .pdf-t-job-head {
          margin-bottom: 0;
        }
        .pdf-t-job-role {
          font-size: 11px;
          font-weight: 700;
          color: #1a1a1a;
        }
        .pdf-t-job-meta {
          font-size: 10px;
          color: #555;
          margin-top: 2px;
          margin-bottom: 6px;
        }
        .pdf-t-ul {
          margin: 0;
          padding-left: 16px;
          font-size: 10px;
          color: #333;
          line-height: 1.45;
          list-style: none;
        }
        .pdf-t-ul li {
          margin-bottom: 3px;
          position: relative;
        }
        .pdf-t-ul li::before {
          content: '¢';
          position: absolute;
          left: -14px;
          font-size: 10px;
          color: #1a1a1a;
          font-weight: 700;
        }
        .pdf-t-ul b {
          font-weight: 700;
          color: #1a1a1a;
        }
        .pdf-t-skills {
          margin: 0;
        }
        .pdf-t-skill-line {
          font-size: 10px;
          color: #333;
          margin: 0 0 4px 0;
          line-height: 1.4;
        }
        .pdf-t-skill-line strong {
          color: #1a1a1a;
        }
        .pdf-t-proj-line {
          font-size: 10px;
          color: #333;
          margin: 0 0 4px 0;
          line-height: 1.4;
        }
        .pdf-t-proj-line strong {
          color: #1a1a1a;
        }

        /* PDF: premium dizayn — kompaniyalarni jalb qiladi */
        .resume-content.pdf-capture .resume-heading {
          border-bottom: none;
          border-left: 4px solid #1d4ed8;
          padding-left: 0.75rem;
          margin-bottom: 1rem;
          color: #0f172a;
          font-size: 1.05rem;
        }
        .resume-content.pdf-capture section {
          margin-bottom: 1.25rem;
        }
        .resume-content.pdf-capture .resume-print-header-bar {
          padding: 1.25rem 2rem 1.5rem;
          background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 50%, #0f172a 100%);
          box-shadow: 0 2px 8px rgba(30, 64, 175, 0.2);
        }
        .resume-content.pdf-capture .resume-print-name {
          font-size: 1.85rem;
          letter-spacing: -0.03em;
        }
        .resume-content.pdf-capture .resume-print-title {
          font-size: 1rem;
          color: #93c5fd;
          margin-top: 0.35rem;
        }
        .resume-content.pdf-capture .resume-print-accent-line {
          height: 4px;
          background: linear-gradient(90deg, #2563eb 0%, #06b6d4 50%, #8b5cf6 100%);
          margin-top: 1rem;
        }
        .resume-content.pdf-capture .resume-print-impact strong {
          color: #1d4ed8;
        }
        /* Loyiha kartochkalari PDF da yanada aniq */
        .resume-content.pdf-capture [class*="border-l-4"] {
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
          border-radius: 8px;
        }
        .resume-content.pdf-capture {
          font-size: 15px;
        }
        .resume-content.pdf-capture .resume-print-contact {
          font-size: 0.85rem;
          color: #334155;
        }
        .resume-content.pdf-capture .resume-print-impact {
          font-size: 0.85rem;
        }

        @media print {
          @page {
            margin: 0.5in;
            size: A4;
          }
          html, body {
            background: #fff !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            height: auto !important;
            overflow: visible !important;
          }
          .resume-page {
            background: #fff !important;
            min-height: auto !important;
            overflow: visible !important;
          }
          .resume-content {
            overflow: visible !important;
          }
          .resume-content section {
            page-break-inside: avoid;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:flex {
            display: flex !important;
          }
          .print\\:block {
            display: block !important;
          }
          .shadow-sm, .shadow-lg, .shadow-xl, .shadow-2xl {
            box-shadow: none !important;
          }
          .rounded-xl, .rounded-2xl {
            border-radius: 6px !important;
          }
          .resume-print-header-bar {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            margin-left: -2rem;
            margin-right: -2rem;
            padding-left: 2rem;
            padding-right: 2rem;
          }
          .resume-print-accent-line {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            margin-left: -2rem;
            margin-right: -2rem;
          }
          .resume-heading {
            border-bottom-color: #1e40af;
            color: #0f172a;
          }
          .resume-page :global(.text-blue-600),
          .resume-page :global(.text-blue-700) {
            color: #1d4ed8 !important;
          }
          .resume-page :global(.text-indigo-600),
          .resume-page :global(.text-indigo-700) {
            color: #4338ca !important;
          }
          .resume-page :global(.text-emerald-600),
          .resume-page :global(.text-emerald-700) {
            color: #047857 !important;
          }
          .resume-page :global(.text-teal-600) {
            color: #0d9488 !important;
          }
          a[href^="http"]:after {
            content: none !important;
          }
        }
      `}</style>
    </>
  )
}
