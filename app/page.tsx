'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
// import Accomplishments from '@/components/Accomplishments'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-900">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      {/* <Accomplishments /> */}
      <Contact />
      <Footer />
    </main>
  )
}
