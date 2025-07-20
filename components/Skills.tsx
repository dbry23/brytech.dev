'use client'

import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C#', level: 95 },
        { name: 'JavaScript', level: 95 },
        { name: 'SQL', level: 90 },
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'Java', level: 75 },
      ]
    },
    {
      title: 'Frameworks / Libraries',
      skills: [
        { name: 'ASP.NET', level: 95 },
        { name: 'React', level: 90 },
        { name: 'Spring Boot', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'Vue.js', level: 85 },
        { name: 'Razor', level: 80 },
        { name: 'Entity Framework', level: 80 },
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'VS Code', level: 95 },
        { name: 'Visual Studio', level: 90 },
        { name: 'IntelliJ', level: 90 },
        { name: 'Bash', level: 90 },
        { name: 'Docker', level: 85 },
        { name: 'GitLab CI/CD', level: 85 },
      ]
    },
    {
      title: 'Testing',
      skills: [
        { name: 'MSTest', level: 95 },
        { name: 'JUnit', level: 95 },
        { name: 'Cypress', level: 85 },
        { name: 'Vitest', level: 65 },
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'SQL Server', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'SQLite', level: 80 },
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
              // Make the first category span both columns on large screens
              className={`bg-gray-50 dark:bg-dark-800 rounded-lg p-6
                ${ categoryIndex === 0 ? 'lg:col-span-2' : '' }`}
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
              'Full Stack', 'Front End', 'Back End', 'Leadership', 'Mentor/Coach', 'Agile Methodologies', 'Kanban', 'RDBMS', 'REST API', 'CI/CD', 'Unit Testing', 'Version Control', 'Cloud', 'Performance Optimization', 'Technical Writing', 'Code Review', 'API Design', 'Database Optimization', 'Subject Matter Expert', 'Continuous Learner', 'Product Development', 'Technical Support', 'Investigative', 'Software Debugging', 'Data Structures', 'Algorithms', 'Collaborative Team Player'
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
