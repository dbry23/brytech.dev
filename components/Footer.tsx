'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-dark-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-40 h-12 relative rounded-lg overflow-hidden">
                <Image
                  src="/logo-text-light.png"
                  alt="BryTech logo"
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Senior software engineer with 19 years of experience building innovative
              solutions that drive business success and user satisfaction.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/dave-bry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/dbry23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://stackoverflow.com/users/1034308/dave-bry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Stack Overflow
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Full-Stack Engineering</span>
              </li>
              <li>
                <span className="text-gray-300">Technical Leadership</span>
              </li>
              <li>
                <span className="text-gray-300">Mentorship & Training</span>
              </li>
              <li>
                <span className="text-gray-300">System Architecture</span>
              </li>
              <li>
                <span className="text-gray-300">Custom Code Solutions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} BryTech. All rights reserved.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center text-gray-400 text-sm mt-4 md:mt-0"
            >
              Made with{' '}
              <Heart size={16} className="mx-1 text-red-500" />{' '}
              using Next.js & Tailwind CSS
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
