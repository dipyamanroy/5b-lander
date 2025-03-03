import { Navbar } from '@/components/navbar'
import '@/styles/tailwind.css'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - 5th Bridge',
    default: '5th Bridge - Specialists in Digital Transformation',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="5th Bridge helps businesses navigate the digital landscape with expert digital transformation solutions." />
        <meta name="keywords" content="Digital Transformation, Business Innovation, Technology Consulting, 5th Bridge" />
        <meta name="author" content="5th Bridge" />

        {/* Open Graph for social media sharing */}
        <meta property="og:title" content="5th Bridge - Specialists in Digital Transformation" />
        <meta property="og:description" content="We help businesses navigate the digital landscape with expertise and innovation." />
        <meta property="og:image" content="https://i.ibb.co/0RsFPwg0/Screenshot-from-2025-02-20-21-44-38.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="https://www.fifthbridgetech.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card for better Twitter link previews */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="5th Bridge - Specialists in Digital Transformation" />
        <meta name="twitter:description" content="We help businesses navigate the digital landscape with expertise and innovation." />
        <meta name="twitter:image" content="https://i.ibb.co/0RsFPwg0/Screenshot-from-2025-02-20-21-44-38.png" />
        <meta name="twitter:site" content="@YourTwitterHandle" />

        {/* Dynamic Canonical URL (Prevents duplicate content issues) */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var canonicalLink = document.createElement('link');
              canonicalLink.rel = 'canonical';
              canonicalLink.href = window.location.origin;
              document.head.appendChild(canonicalLink);
            })();
          `
        }} />

        {/* Preconnect to optimize Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Fonts */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=JetBrains+Mono:wght@400;500;600&display=swap" />

        {/* RSS Feed for Blog */}
        {/* <link rel="alternate" type="application/rss+xml" title="The 5th Bridge Blog" href="/blog/feed.xml" /> */}
      </head>

      <body className="text-gray-950 antialiased">
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
