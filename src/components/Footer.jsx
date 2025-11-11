import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaTelegram, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/bahriddin', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/bahriddin', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: 'https://twitter.com/bahriddin', label: 'Twitter' },
    { icon: <FaTelegram />, href: 'https://t.me/baxadevuz', label: 'Telegram' },
    { icon: <FaEnvelope />, href: 'mailto:hello@baxadevuz.dev', label: 'Email' },
  ]

  const footerLinks = [
    { href: '/about', label: 'Men haqimda' },
    { href: '/projects', label: 'Loyihalar' },
    { href: '/resume', label: 'Rezyume' },
    { href: '/contact', label: 'Aloqa' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/terms', label: 'Terms' },
  ]

  return (
    <footer className="bg-dark text-white py-12 mt-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">
              Bahriddin
            </h3>
            <p className="text-gray-400 text-sm">
              Full-Stack Developer & Product Designer. Web-platformalar va ta'lim loyihalarini yarataman.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tezkor havolalar</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="text-gray-400 hover:text-cyan transition text-sm">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Ijtimoiy tarmoqlar</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-400 hover:text-cyan transition hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="mailto:hello@baxadevuz.dev"
                className="text-cyan hover:text-white transition text-sm"
              >
                hello@baxadevuz.dev
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Bahriddin. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  )
}

