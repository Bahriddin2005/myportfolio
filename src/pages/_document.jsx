import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="uz">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Bahriddin" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="uz_UZ" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@bahriddin" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Bahriddin",
              "jobTitle": "Full-Stack Developer & Product Designer",
              "url": "https://bahriddin.dev",
              "sameAs": [
                "https://github.com/bahriddin",
                "https://linkedin.com/in/bahriddin",
                "https://twitter.com/bahriddin"
              ],
              "knowsAbout": ["Web Development", "Full-Stack Development", "UI/UX Design", "Product Management"],
              "description": "Full-Stack Developer specializing in building scalable web applications and educational platforms."
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

