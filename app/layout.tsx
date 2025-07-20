import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BryTech - Software Engineer Portfolio',
  description: 'Senior Software Engineer with 19 years of experience in full-stack development, cloud architecture, and innovative software solutions.',
  keywords: ['software engineer', 'full-stack developer', 'cloud architecture', 'web development', 'mobile development'],
  authors: [{ name: 'BryTech' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
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
      </body>
    </html>
  )
}
