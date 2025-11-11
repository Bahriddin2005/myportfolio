import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const navLinks = [
    { href: '/', label: 'Bosh sahifa' },
    { href: '/about', label: 'Men haqimda' },
    { href: '/projects', label: 'Loyihalar' },
    { href: '/resume', label: 'Rezyume' },
    { href: '/contact', label: 'Aloqa' },
  ]

  const isActive = (path) => router.pathname === path

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-6 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="text-2xl font-heading font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform">
              Bahriddin
            </a>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.href) ? 'text-primary' : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <a className="px-5 py-2 bg-gradient-primary text-white rounded-lg text-sm font-medium hover:shadow-lg hover:scale-[1.02] transition">
                Ish boshlaymizmi?
              </a>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-dark"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.href) ? 'text-primary' : 'text-gray-700'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <a
                className="mt-4 inline-block px-5 py-2 bg-gradient-primary text-white rounded-lg text-sm font-medium hover:shadow-lg transition"
                onClick={() => setIsOpen(false)}
              >
                Ish boshlaymizmi?
              </a>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

