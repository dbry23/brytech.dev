'use client'

import { motion } from 'framer-motion'
import { Code, Database, ShieldCheck, Users, PencilRuler, Clock } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: Clock,
      title: '19 Years Experience',
      description: 'Proven track record across education, e-commerce, startup, and enterprise software'
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Expert in both frontend (React, JavaScript, HTML) and backend (C#, ASP.NET, SQL, Java, Spring Boot)'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Skilled in SQL Server, PostgreSQL, SQLite, and database optimization'
    },
    {
      icon: Users,
      title: 'Team Leadership & Mentoring',
      description: 'Led teams, mentored developers, and developed coding curriculum'
    },
    {
      icon: PencilRuler,
      title: 'Technical Writing & Curriculum',
      description: 'Created educational content and technical documentation for bootcamps and teams'
    },
    {
      icon: ShieldCheck,
      title: 'Testing & Quality',
      description: 'Experience with MSTest, JUnit, Cypress, and best practices in software testing'
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
            Full-stack software engineer with 19+ years of experience building scalable, maintainable solutions across education, e-commerce, startup, and enterprise sectors that drive real impact.
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
                Over nearly two decades, I've engineered enterprise and e-commerce platforms, created effective learning material for coding bootcamps, and guided teams to success. My technical toolkit spans C#, JavaScript, SQL, ASP.NET, Java, Spring Boot, React, Docker, and more, with a proven record in both backend and frontend development.
              </p>
              <p>
                Notable achievements include boosting student job placement rates by 20% through modernized curriculum, automating CI/CD pipelines for 500+ learners, increasing e-commerce conversion rates by over 30%, and saving companies thousands of dollars. I've architected novel and unique systems that save teams hundreds of hours and delivered solutions that scale with business growth.
              </p>
              <p>
                Beyond code, I'm dedicated to mentoring developers, leading cross-functional teams, and sharing knowledge through technical writing and open-source contributions. I believe in continuous learning, agile collaboration, and building software that empowers people and organizations.
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
