import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-56 bg-gradient-to-br from-primary/10 to-cyan/10 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
          {project.image || '🎨'}
        </div>
        {/* Tags overlay */}
        <div className="absolute top-4 left-4 flex gap-2">
          {project.featured && (
            <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
              ⭐ Asosiy
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-heading font-semibold text-dark group-hover:text-primary transition">
            {project.title}
          </h3>
          {project.year && (
            <span className="text-sm text-gray-500 font-medium">{project.year}</span>
          )}
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {project.summary}
        </p>

        {/* Metrics */}
        {project.metrics && (
          <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
            {project.metrics.users && (
              <span>👥 {project.metrics.users}</span>
            )}
            {project.metrics.growth && (
              <span>📈 {project.metrics.growth}</span>
            )}
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg font-medium"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg font-medium">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* CTA */}
        <Link href={`/projects/${project.slug}`}>
          <a className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all">
            Batafsil ko'rish
            <HiArrowRight className="text-lg" />
          </a>
        </Link>
      </div>
    </motion.article>
  )
}

