import React from 'react'
import { motion } from 'framer-motion'

export default function SkillsSection() {
  const skills = [
    { name: 'Frontend Development', level: 95, icon: '⚛️' },
    { name: 'Backend Development', level: 90, icon: '🔧' },
    { name: 'UI/UX Design', level: 85, icon: '🎨' },
    { name: 'Database Design', level: 88, icon: '🗄️' },
    { name: 'DevOps & Deployment', level: 80, icon: '🚀' },
    { name: 'Product Management', level: 82, icon: '📊' },
  ]

  const technologies = {
    'Frontend': ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    'Backend': ['Django', 'Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB'],
    'Tools': ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'VS Code'],
    'Others': ['SEO', 'Analytics', 'Agile', 'REST APIs', 'WebSockets', 'Testing']
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ko'nikmalar va texnologiyalar
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Zamonaviy texnologiyalar bilan professional mahsulotlar yarataman
          </p>
        </motion.div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-medium text-dark">{skill.name}</span>
                </div>
                <span className="text-primary font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-primary h-2 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {Object.entries(technologies).map(([category, techs], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-primary hover:text-white transition cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

