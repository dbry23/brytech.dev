import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BryTech - Software Engineer Portfolio',
  description: 'Senior Software Engineer with 19 years of experience in full-stack development, software architecture, and innovative technical solutions.',
  keywords: ['software engineer', 'full-stack developer', 'software architecture', 'web development', 'curriculum development', 'technical writing', 'mentoring', 'team leadership', 'e-commerce', 'enterprise software', 'startup', 'software development', 'software engineering'],
  authors: [{ name: 'Dave Bry' }],
  robots: 'index, follow',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
