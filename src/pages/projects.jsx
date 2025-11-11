import React, { useState } from 'react'
import Head from 'next/head'
import { projects } from '@/lib/projectsData'

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTech, setSelectedTech] = useState('All')

  const allTechs = ['All', ...new Set(projects.flatMap(p => p.tech))]

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.summary.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTech = selectedTech === 'All' || project.tech.includes(selectedTech)
    return matchesSearch && matchesTech
  })

  return (
    <>
      <Head>
        <title>Loyihalar — Bahriddin | Full-Stack Developer</title>
        <meta name="description" content="Bahriddin tomonidan yaratilgan web platformalar va loyihalar." />
      </Head>

      <div className="min-h-screen bg-gray-900">
        {/* Header - Terminal Style */}
        <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 py-20 border-b-2 border-gray-800 overflow-hidden">
          {/* Grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="text-center mb-12">
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-gray-800 border-2 border-gray-700 text-green-400 rounded-lg text-sm font-mono font-bold">
                  // All Projects
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-white leading-tight">
                <span className="font-mono text-blue-400">&lt;</span>
                <span className="font-mono">Portfolio</span>
                <span className="font-mono text-blue-400">/&gt;</span>
                <span className="block text-3xl md:text-5xl text-gray-400 font-bold tracking-tight mt-4">
                  Real problems → Real solutions
                </span>
              </h1>
            </div>

            {/* Search - Terminal Style */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-green-400 font-bold">
                  $
                </div>
                <input
                  type="text"
                  placeholder="search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800 border-2 border-gray-700 text-gray-200 rounded-lg focus:border-blue-600 outline-none transition-all font-mono text-base font-semibold placeholder:text-gray-600 placeholder:font-normal"
                />
              </div>
            </div>

            {/* Filters - Terminal Commands */}
            <div className="flex flex-wrap gap-3 justify-center">
              {allTechs.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-mono font-bold transition-all border-2 ${
                    selectedTech === tech
                      ? 'bg-blue-600 text-white border-blue-500 shadow-lg'
                      : 'bg-gray-800 text-gray-300 border-gray-700 hover:border-blue-600 hover:text-white'
                  }`}
                >
                  <span className="text-green-400">$</span> {tech.toLowerCase()}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid - Terminal Style */}
        <section className="container mx-auto px-6 py-20 max-w-7xl">
          {filteredProjects.length > 0 ? (
            <>
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-gray-800 border-2 border-gray-700 rounded-lg">
                  <span className="font-mono text-gray-500 text-sm font-semibold">
                    <span className="text-green-400 font-bold">$</span> found: 
                    <span className="text-blue-400 font-bold ml-2">{filteredProjects.length}</span>
                    <span className="text-gray-400"> projects</span>
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <a key={project.id} href={`/projects/${project.slug}`} className="group">
                    <div className="bg-gray-800 border-2 border-gray-700 rounded-2xl overflow-hidden hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-600/20 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                      {/* Icon Header */}
                      <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-7xl border-b-2 border-gray-700 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                        <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                          {project.image}
                        </div>
                      </div>
                      
                      <div className="p-6 flex flex-col flex-1">
                        {/* Title */}
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-black text-white tracking-tight font-mono">
                            {project.title}
                          </h3>
                          {project.year && (
                            <span className="text-xs font-mono font-bold text-gray-500 bg-gray-700 px-2 py-1 rounded">
                              {project.year}
                            </span>
                          )}
                        </div>
                        
                        {/* Description */}
                        <p className="text-sm text-gray-400 mb-4 leading-relaxed font-mono flex-grow">
                          {project.summary}
                        </p>
                        
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.slice(0, 3).map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-700 border border-gray-600 text-cyan-400 text-xs rounded font-mono font-semibold">
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        {/* View Button */}
                        <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-sm font-bold group-hover:text-blue-300 transition-colors">
                          <span className="text-green-400">$</span>
                          <span>view_details</span>
                          <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="inline-block bg-gray-800 border-2 border-gray-700 rounded-2xl p-12">
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-3xl font-black text-white mb-4 font-mono tracking-tight">
                  <span className="text-red-400">ERROR:</span> No results found
                </h3>
                <p className="text-gray-400 font-mono text-sm font-semibold">
                  <span className="text-green-400">$</span> Try different search terms or filters
                </p>
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  )
}
