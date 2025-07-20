'use client'

import { motion } from 'framer-motion'
import { Trophy, Award, Star, TrendingUp, Users, Zap } from 'lucide-react'

const Accomplishments = () => {
  const accomplishments = [
    {
      icon: Trophy,
      title: 'Employee of the Year',
      company: 'TechCorp Solutions',
      year: '2023',
      description: 'Recognized for exceptional leadership and technical contributions to major platform overhaul.'
    },
    {
      icon: Award,
      title: 'Best Technical Innovation',
      company: 'Tech Innovation Awards',
      year: '2022',
      description: 'Awarded for developing a revolutionary microservices architecture that improved system performance by 60%.'
    },
    {
      icon: Star,
      title: 'Top Performer',
      company: 'InnovateTech',
      year: '2020',
      description: 'Consistently exceeded performance metrics and delivered projects ahead of schedule.'
    },
    {
      icon: TrendingUp,
      title: 'Scalability Achievement',
      company: 'Cloud Excellence Awards',
      year: '2019',
      description: 'Successfully scaled application to handle 10M+ concurrent users with 99.9% uptime.'
    },
    {
      icon: Users,
      title: 'Leadership Excellence',
      company: 'Developer Leadership Summit',
      year: '2018',
      description: 'Recognized for outstanding team leadership and mentoring of junior developers.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      company: 'Performance Engineering Conference',
      year: '2017',
      description: 'Presented innovative techniques for reducing application load times by 70%.'
    }
  ]

  const metrics = [
    {
      number: '50+',
      label: 'Projects Delivered',
      description: 'Successfully completed projects across various industries'
    },
    {
      number: '15+',
      label: 'Technologies Mastered',
      description: 'Proficient in modern programming languages and frameworks'
    },
    {
      number: '25+',
      label: 'Team Members Mentored',
      description: 'Helped develop the next generation of software engineers'
    },
    {
      number: '99.9%',
      label: 'System Uptime',
      description: 'Maintained high availability across production systems'
    }
  ]

  return (
    <section id="accomplishments" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Career Accomplishments
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Recognition and achievements that highlight my commitment to excellence
            and continuous improvement in software development.
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {metric.number}
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-300">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Awards and Recognition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {accomplishments.map((accomplishment, index) => (
            <motion.div
              key={`${accomplishment.title}-${accomplishment.year}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <accomplishment.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {accomplishment.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {accomplishment.year}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-2">
                    {accomplishment.company}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {accomplishment.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Additional Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Published 10+ technical articles on Medium and Dev.to',
              'Speaker at 5+ developer conferences and meetups',
              'Maintained 15+ open-source projects on GitHub',
              'Achieved AWS Solutions Architect certification',
              'Led successful migration of legacy systems to cloud',
              'Established coding standards adopted by 3 companies'
            ].map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-dark-700 p-4 rounded-lg border-l-4 border-primary-500"
              >
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {highlight}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Accomplishments
