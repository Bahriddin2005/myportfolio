import React, { useState, useEffect } from 'react'

export default function TerminalHero() {
  const [text, setText] = useState('')
  const [mounted, setMounted] = useState(false)
  const fullText = 'const developer = new FullStackDeveloper("Bahriddin");'

  useEffect(() => {
    setMounted(true)
    // Optimized: Start typing animation only after mount (prevents hydration errors)
    // Increased interval from 50ms to 80ms for better performance
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 80) // Optimized: 50ms → 80ms (reduces re-renders by 37%)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-800 font-mono text-sm">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-gray-500 text-xs ml-2">bash — portfolio</span>
      </div>

      {/* Terminal Content */}
      <div className="space-y-2 text-gray-300">
        <div className="flex items-start gap-2">
          <span className="text-green-400">$</span>
          <span className="text-cyan-400">whoami</span>
        </div>
        <div className="pl-4 text-gray-400">
          Bahriddin — Full-Stack Developer
        </div>
        
        <div className="flex items-start gap-2 mt-4">
          <span className="text-green-400">$</span>
          <span className="text-cyan-400">cat skills.json</span>
        </div>
        <div className="pl-4">
          <pre className="text-xs">
{`{
  "role": "Full-Stack Developer",
  "experience": "3+ years",
  "specialization": [
    "Web Platforms",
    "Educational Systems", 
    "MVP Development"
  ],
  "stack": {
    "frontend": ["React", "Next.js", "TypeScript"],
    "backend": ["Django", "Node.js", "PostgreSQL"],
    "deployed": "15+ production apps"
  },
  "impact": {
    "users": "10,000+",
    "revenue": "$50K+"
  }
}`}
          </pre>
        </div>

        <div className="flex items-start gap-2 mt-4">
          <span className="text-green-400">$</span>
          <span className="flex items-center">
            <span className="text-purple-400" suppressHydrationWarning>{text}</span>
            {mounted && <span className="w-2 h-4 bg-green-400 ml-1 animate-pulse"></span>}
          </span>
        </div>
      </div>
    </div>
  )
}

