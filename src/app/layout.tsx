import '@/styles/tailwind.css'
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - 5th Bridge',
    default: '5th Bridge - Close every deal',
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
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The 5th Bridge Blog"
          href="/blog/feed.xml"
        />
      </head>
      <body className="text-gray-950 antialiased">
          {children}
          <Analytics />
        </body>
    </html>
  )
}
