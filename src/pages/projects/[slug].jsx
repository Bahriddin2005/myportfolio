import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { projects, getProjectBySlug } from '@/lib/projectsData'

export default function ProjectDetail() {
  const router = useRouter()
  const { slug } = router.query
  
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🤔</div>
          <h2 className="text-2xl font-bold mb-4">Loyiha topilmadi</h2>
          <a href="/projects" className="text-blue-600 hover:underline">Loyihalarga qaytish</a>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{project.title} — Bahriddin Portfolio</title>
        <meta name="description" content={project.summary} />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-12">
          <div className="container mx-auto px-6 max-w-5xl">
            <a href="/projects" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8">
              ← Loyihalarga qaytish
            </a>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">{project.image}</span>
              {project.featured && (
                <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">⭐ Featured</span>
              )}
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">{project.year}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="px-4 py-2 bg-white rounded-lg border border-gray-200">
                <span className="text-sm text-gray-500">Role:</span>
                <span className="ml-2 font-medium">{project.role}</span>
              </div>
              <div className="px-4 py-2 bg-white rounded-lg border border-gray-200">
                <span className="text-sm text-gray-500">Duration:</span>
                <span className="ml-2 font-medium">{project.duration}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics */}
        {project.metrics && (
          <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-12">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key}>
                    <div className="text-3xl md:text-4xl font-bold mb-2">{value}</div>
                    <div className="text-sm opacity-80 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-5xl space-y-16">
            {/* Challenge */}
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <span className="text-4xl">🎯</span>
                Muammo (Challenge)
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">{project.challenge}</p>
            </div>

            {/* Approach */}
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <span className="text-4xl">💡</span>
                Yondashuv (Approach)
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{project.approach}</p>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold mb-4">Texnologiyalar:</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-white border border-gray-200 rounded-lg font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Impact */}
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <span className="text-4xl">📈</span>
                Natija (Impact)
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">{project.impact}</p>
            </div>
          </div>
        </section>

        {/* Next Project */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <h2 className="text-2xl font-bold mb-4">Boshqa loyihalar</h2>
            <a href="/projects" className="text-blue-600 font-medium hover:underline">
              Barchasini ko'rish →
            </a>
          </div>
        </section>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const paths = projects.map(project => ({
    params: { slug: project.slug }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {}
  }
}
