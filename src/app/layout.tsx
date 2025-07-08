import { Navbar } from '@/components/navbar'
import '@/styles/tailwind.css'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '5th Bridge - Specialists in Digital Transformation',
  description: '5th Bridge helps businesses navigate the digital landscape with expert digital transformation solutions.',
  keywords: ['Digital Transformation', 'Business Innovation', 'Technology Consulting', '5th Bridge'],
  authors: [{ name: '5th Bridge' }],
  openGraph: {
    title: '5th Bridge - Specialists in Digital Transformation',
    description: 'We help businesses navigate the digital landscape with expertise and innovation.',
    url: 'https://www.fifthbridgetech.com',
    siteName: '5th Bridge',
    images: [
      {
        url: 'https://previewengine-accl.zohoexternal.com/image/WD/1ix3105e9b64a256b478bb1d61720b3ed9213?version=1.0&width=2046&height=1536',
        width: 1200,
        height: 630,
        type: 'image/png',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '5th Bridge - Specialists in Digital Transformation',
    description: 'We help businesses navigate the digital landscape with expertise and innovation.',
    images: ['https://i.ibb.co/0RsFPwg0/Screenshot-from-2025-02-20-21-44-38.png'],
    site: '@YourTwitterHandle',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="text-gray-950 antialiased">
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}