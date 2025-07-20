'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Users, Award, Clock } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: Clock,
      title: '19 Years Experience',
      description: 'Extensive experience across multiple industries and technologies'
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Expert in both frontend and backend development'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Specialized in scalable cloud solutions and DevOps'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Proficient in SQL and NoSQL database systems'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Led development teams and mentored junior developers'
    },
    {
      icon: Award,
      title: 'Problem Solver',
      description: 'Delivered innovative solutions to complex business challenges'
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A passionate software engineer with nearly two decades of experience building
            innovative solutions that drive business success.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Transforming Ideas into Reality
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                With 19 years of experience in software development, I've had the privilege
                of working on diverse projects that have shaped my expertise across the
                entire technology stack. From early-stage startups to enterprise-level
                applications, I've consistently delivered solutions that exceed expectations.
              </p>
              <p>
                My passion lies in creating scalable, maintainable code that not only
                solves immediate problems but also anticipates future needs. I specialize
                in modern web technologies, cloud architecture, and building robust
                systems that can handle the demands of growing businesses.
              </p>
              <p>
                Beyond technical skills, I believe in the power of collaboration and
                knowledge sharing. I've mentored numerous developers throughout my career
                and enjoy contributing to the broader tech community through open-source
                projects and technical writing.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mr-3">
                    <highlight.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {highlight.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
