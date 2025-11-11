import React from 'react'
import Head from 'next/head'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Bahriddin</title>
        <meta name="description" content="Privacy policy for Bahriddin portfolio website" />
      </Head>

      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p className="text-sm text-gray-500">Last updated: November 11, 2025</p>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p>
              When you contact us through our website, we collect information such as your name, email address, 
              and any message content you provide. We use this information solely to respond to your inquiries.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p>
              Your information is used to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you updates about projects or services (if you opt-in)</li>
              <li>Improve our website and services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized 
              access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Cookies</h2>
            <p>
              Our website may use cookies to enhance user experience. You can choose to disable cookies through 
              your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Third-Party Services</h2>
            <p>
              We may use third-party services (like analytics) that collect, monitor, and analyze website traffic. 
              These services have their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Request correction of your data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
            <p>
              For any questions about this privacy policy, please contact us at:{' '}
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

