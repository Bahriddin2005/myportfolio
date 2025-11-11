import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiDownload, HiArrowRight } from 'react-icons/hi'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-bg via-white to-bg text-dark min-h-[90vh] flex items-center">
      <div className="container mx-auto px-6 py-20 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                👋 Salom, men Bahriddin
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6">
              Sizning kelajagingizni{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                kodlayman
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-4 leading-relaxed">
              Full-Stack Developer & Product Designer
            </p>

            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
              Web-platformalar va ta'lim mahsulotlarini yarataman — g'oyadan million-dollargacha 
              yetkazib beraman. MVP, scaling va monetizatsiya tajribam mavjud.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects">
                <a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-primary text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition font-medium">
                  Portfolio ko'rish
                  <HiArrowRight className="text-xl" />
                </a>
              </Link>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-200 rounded-lg hover:bg-gray-50 hover:border-primary transition font-medium"
              >
                <HiDownload className="text-xl" />
                Resume yuklab olish
              </a>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-gray-600">Loyihalar</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan">10K+</div>
                <div className="text-sm text-gray-600">Foydalanuvchilar</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-gray-600">Yillik tajriba</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar/Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Main Avatar Circle */}
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-primary shadow-2xl flex items-center justify-center text-white text-6xl font-bold overflow-hidden relative animate-float">
                {/* Replace this div with actual image: <img src="/images/headshot.jpg" alt="Bahriddin" className="object-cover w-full h-full" /> */}
                <div className="text-center">
                  <div className="text-8xl mb-2">👨‍💻</div>
                  <div className="text-2xl">Bahriddin</div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3"
              >
                <div className="text-3xl">🚀</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3"
              >
                <div className="text-3xl">💡</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

