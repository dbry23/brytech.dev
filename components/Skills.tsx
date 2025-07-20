'use client'

import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript/TypeScript', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'C#', level: 80 },
        { name: 'Go', level: 75 },
        { name: 'Rust', level: 70 }
      ]
    },
    {
      title: 'Frontend Frameworks',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Vue.js', level: 90 },
        { name: 'Angular', level: 85 },
        { name: 'Next.js', level: 90 },
        { name: 'Svelte', level: 80 },
        { name: 'Tailwind CSS', level: 95 }
      ]
    },
    {
      title: 'Backend & APIs',
      skills: [
        { name: 'Node.js', level: 95 },
        { name: 'Express.js', level: 90 },
        { name: 'Django', level: 85 },
        { name: 'FastAPI', level: 80 },
        { name: 'GraphQL', level: 85 },
        { name: 'REST APIs', level: 95 }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'Elasticsearch', level: 75 },
        { name: 'DynamoDB', level: 80 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 90 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 80 },
        { name: 'Terraform', level: 75 },
        { name: 'CI/CD', level: 90 },
        { name: 'Microservices', level: 85 }
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Linux', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Jira', level: 85 },
        { name: 'Jenkins', level: 80 },
        { name: 'Prometheus', level: 75 }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit of languages, frameworks, and platforms I've mastered
            over 19 years of software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-dark-800 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-500 to-blue-500 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Machine Learning', 'Data Analysis', 'System Design', 'Performance Optimization',
              'Security Best Practices', 'Agile Methodologies', 'Technical Writing', 'Code Review',
              'API Design', 'Database Optimization', 'Load Testing', 'Monitoring & Logging',
              'Serverless Architecture', 'Event-Driven Systems', 'Message Queues', 'Caching Strategies'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="skill-badge"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
