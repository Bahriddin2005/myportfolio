import React from 'react'
import Head from 'next/head'

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service — Bahriddin</title>
        <meta name="description" content="Terms of service for Bahriddin portfolio website" />
      </Head>

      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p className="text-sm text-gray-500">Last updated: November 11, 2025</p>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provisions 
              of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily view the materials on this website for personal, 
              non-commercial transitory viewing only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
            <p>
              All content, including but not limited to text, graphics, logos, and code, is the property 
              of Bahriddin and protected by copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Disclaimer</h2>
            <p>
              The materials on this website are provided on an 'as is' basis. We make no warranties, 
              expressed or implied, and hereby disclaim all other warranties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Limitations</h2>
            <p>
              In no event shall Bahriddin or its suppliers be liable for any damages arising out of the 
              use or inability to use the materials on this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Links</h2>
            <p>
              We have not reviewed all of the sites linked to our website and are not responsible for 
              the contents of any such linked site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Modifications</h2>
            <p>
              We may revise these terms of service at any time without notice. By using this website, 
              you are agreeing to be bound by the current version of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Contact</h2>
            <p>
              For questions about these terms, please contact:{' '}
              <a href="mailto:hello@bahriddin.dev" className="text-primary hover:underline">
                hello@bahriddin.dev
              </a>
            </p>
          </section>
        </div>
      </div>
    </>
  )
}

