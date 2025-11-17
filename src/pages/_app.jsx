import '@/styles/globals.css'
import React, { useState } from 'react'
import ChatWidget from '@/components/ChatWidget'
import dynamic from 'next/dynamic'
import Link from 'next/link'

// Dynamically import ChatWidget to prevent SSR (fixes hydration errors)
const ChatWidgetNoSSR = dynamic(() => import('@/components/ChatWidget'), {
  ssr: false
})

export default function App({ Component, pageProps }) {
  const [showImageUpload, setShowImageUpload] = useState(false)
  const [showAdminLogin, setShowAdminLogin] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [adminPassword, setAdminPassword] = useState('')
  const [unreadCount, setUnreadCount] = useState(0)
  const [mounted, setMounted] = useState(false)

  // Check admin status on load (client-side only)
  React.useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      const adminStatus = localStorage.getItem('isAdmin')
      setIsAdmin(adminStatus === 'true')
    }
  }, [])

  // Check unread messages (client-side only)
  React.useEffect(() => {
    if (!mounted) return
    
    const checkUnread = () => {
      if (typeof window !== 'undefined') {
        const chatMessages = JSON.parse(localStorage.getItem('chatMessages') || '[]')
        const unread = chatMessages.filter(c => c.unread).length
        setUnreadCount(unread)
      }
    }
    
    checkUnread()
    // Optimized: Check every 10 seconds instead of 5 (reduces localStorage reads)
    const interval = setInterval(checkUnread, 10000)
    return () => clearInterval(interval)
  }, [mounted])

  const handleAdminLogin = (e) => {
    e.preventDefault()
    const ADMIN_PASSWORD = 'bahriddin0121'
    
    if (adminPassword === ADMIN_PASSWORD) {
      localStorage.setItem('isAdmin', 'true')
      setIsAdmin(true)
      setShowAdminLogin(false)
      setAdminPassword('')
      alert('Admin mode activated! ✅')
    } else {
      alert('Incorrect password! ❌')
      setAdminPassword('')
    }
  }

  const handleAdminLogout = () => {
    localStorage.removeItem('isAdmin')
    setIsAdmin(false)
    alert('Admin mode deactivated')
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        localStorage.setItem('profileImage', reader.result)
        setShowImageUpload(false)
        window.location.reload()
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    localStorage.removeItem('profileImage')
    setShowImageUpload(false)
    window.location.reload()
  }

  return (
    <div>
      {/* Developer-style Nav */}
      <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800 shadow-lg">
        <div className="container mx-auto px-6 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo - Terminal Style */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="px-3 py-2 bg-gray-800 border-2 border-gray-700 group-hover:border-blue-600 rounded-lg transition-all">
                <span className="font-mono text-gray-400 text-xs">~/</span>
                <span className="font-mono font-bold text-white">bahriddin</span>
              </div>
              <div className="hidden md:block font-mono text-xs">
                <div className="text-gray-500">
                  <span className="text-blue-400">const</span> role <span className="text-gray-600">=</span> <span className="text-green-400">"developer"</span>
                </div>
              </div>
            </Link>

            {/* Desktop Menu - Larger Terminal Commands - Optimized with Next.js Link */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="group font-mono text-base text-gray-400 hover:text-blue-400 transition-all flex items-center gap-2 px-4 py-3 hover:bg-gray-800 rounded-lg">
                <span className="text-green-400 text-lg">$</span>
                <span className="font-bold">home</span>
              </Link>
              <Link href="/about" className="group font-mono text-base text-gray-400 hover:text-purple-400 transition-all flex items-center gap-2 px-4 py-3 hover:bg-gray-800 rounded-lg">
                <span className="text-green-400 text-lg">$</span>
                <span className="font-bold">about</span>
              </Link>
              <Link href="/projects" className="group font-mono text-base text-gray-400 hover:text-cyan-400 transition-all flex items-center gap-2 px-4 py-3 hover:bg-gray-800 rounded-lg">
                <span className="text-green-400 text-lg">$</span>
                <span className="font-bold">projects</span>
              </Link>
              <Link href="/resume" className="group font-mono text-base text-gray-400 hover:text-yellow-400 transition-all flex items-center gap-2 px-4 py-3 hover:bg-gray-800 rounded-lg">
                <span className="text-green-400 text-lg">$</span>
                <span className="font-bold">resume</span>
              </Link>
              {mounted && isAdmin && (
                <Link href="/administration" className="group font-mono text-base text-gray-400 hover:text-purple-400 transition-all flex items-center gap-2 px-4 py-3 hover:bg-gray-800 rounded-lg border-2 border-purple-600/30 hover:border-purple-600 relative">
                  <span className="text-purple-400 text-lg">⚙️</span>
                  <span className="font-bold">admin</span>
                  <span className="px-2 py-0.5 bg-purple-600 text-white rounded text-xs font-black">ADMIN</span>
                  {unreadCount > 0 && (
                    <div className="absolute -top-1 -right-1">
                      <div className="relative">
                        <div className="absolute inset-0 bg-red-500 rounded-full animate-ping"></div>
                        <div className="relative w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-black border-2 border-gray-900">
                          {unreadCount}
                        </div>
                      </div>
                    </div>
                  )}
                </Link>
              )}
              <Link href="/contact" className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 border-2 border-blue-500 text-white rounded-lg font-mono text-base font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-3">
                <span className="text-green-300 text-lg">$</span>
                <span>contact</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Component {...pageProps} />
      </main>

      {/* Live Chat Widget - No SSR to prevent hydration errors */}
      <ChatWidgetNoSSR />

      {/* Admin Login Button - Double Click Logo */}
      {mounted && (
        <div 
          onDoubleClick={() => !isAdmin && setShowAdminLogin(true)}
          className="fixed bottom-6 left-6 z-40"
        >
          {!isAdmin ? (
          <div 
            className="group p-3 bg-gray-800 hover:bg-gray-700 rounded-lg cursor-pointer transition-all opacity-30 hover:opacity-100"
            title="Double-click for admin"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={() => setShowImageUpload(true)}
              className="group p-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-110"
              title="Upload Profile Image"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </button>
            <button
              onClick={handleAdminLogout}
              className="p-3 bg-red-600 hover:bg-red-700 rounded-xl transition-all"
              title="Logout Admin"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
          )}
        </div>
      )}

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-gray-900 rounded-3xl p-8 max-w-md w-full shadow-2xl border-2 border-gray-800">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-3xl">
                🔐
              </div>
              <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-2">Admin Access</h3>
              <p className="text-gray-400 font-semibold">Enter password to manage portfolio</p>
            </div>

            <form onSubmit={handleAdminLogin} className="space-y-4">
              <input
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                placeholder="Enter admin password..."
                className="w-full px-5 py-4 bg-gray-800 border-2 border-gray-700 text-white rounded-xl focus:border-blue-600 outline-none transition-all font-mono font-bold placeholder:text-gray-600"
                autoFocus
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-black uppercase tracking-wide transition-all shadow-xl"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAdminLogin(false)
                    setAdminPassword('')
                  }}
                  className="px-6 py-4 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-xl font-black uppercase tracking-wide transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

      {/* Upload Modal */}
      {showImageUpload && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border-2 border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Profile Photo</h3>
                <p className="text-sm text-gray-600 font-semibold mt-1">Upload your professional headshot</p>
              </div>
              <button
                onClick={() => setShowImageUpload(false)}
                className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg p-2 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-6">
              <label className="block w-full cursor-pointer">
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center hover:border-purple-600 hover:bg-purple-50 transition-all group">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform shadow-lg">
                    📸
                  </div>
                  <p className="text-gray-900 font-black mb-2 uppercase tracking-wide text-lg">Click to Upload</p>
                  <p className="text-sm text-gray-600 font-bold mb-3">Professional headshot recommended</p>
                  <p className="text-xs text-gray-500 font-semibold">PNG, JPG, WebP • Max 5MB</p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>

            {mounted && typeof window !== 'undefined' && localStorage.getItem('profileImage') && (
              <div className="flex gap-3">
                <button
                  onClick={removeImage}
                  className="flex-1 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-black uppercase tracking-wide transition-all shadow-lg text-sm"
                >
                  Remove
                </button>
                <button
                  onClick={() => setShowImageUpload(false)}
                  className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-xl font-black uppercase tracking-wide transition-all text-sm"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Developer-style Footer */}
      <footer className="relative bg-gray-950 border-t-2 border-gray-800 text-white overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:30px_30px]"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="py-12">
            {/* Terminal footer */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 font-mono text-sm">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Info */}
                <div>
                  <div className="text-gray-500 mb-3">// Developer Info</div>
                  <div className="space-y-2 text-gray-400">
                    <div><span className="text-blue-400">name:</span> "Bahriddin"</div>
                    <div><span className="text-blue-400">role:</span> "Full-Stack Developer"</div>
                    <div><span className="text-blue-400">status:</span> <span className="text-green-400">"Available"</span></div>
                  </div>
                </div>

                {/* Quick Links - Optimized with Next.js Link */}
                <div>
                  <div className="text-gray-500 mb-3">// Quick Access</div>
                  <div className="space-y-2">
                    <div><Link href="/about" className="text-gray-400 hover:text-purple-400 transition">→ ./about</Link></div>
                    <div><Link href="/projects" className="text-gray-400 hover:text-cyan-400 transition">→ ./projects</Link></div>
                    <div><Link href="/resume" className="text-gray-400 hover:text-yellow-400 transition">→ ./resume</Link></div>
                    <div><Link href="/contact" className="text-gray-400 hover:text-blue-400 transition">→ ./contact</Link></div>
                  </div>
                </div>

                {/* Social */}
                <div>
                  <div className="text-gray-500 mb-3">// Connect</div>
                  <div className="flex gap-3">
                    <a href="https://github.com/bahriddin" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg flex items-center justify-center hover:scale-110 transition-all">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.430.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    <a href="https://linkedin.com/in/bahriddin" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg flex items-center justify-center hover:scale-110 transition-all">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a href="https://t.me/baxadevuz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg flex items-center justify-center hover:scale-110 transition-all">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6 font-mono text-xs">
              <div className="flex justify-between items-center text-gray-500">
                <span><span className="text-green-400">$</span> echo "© 2025 Bahriddin"</span>
                <div className="flex gap-4">
                  <Link href="/privacy" className="hover:text-blue-400">./privacy</Link>
                  <Link href="/terms" className="hover:text-purple-400">./terms</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

