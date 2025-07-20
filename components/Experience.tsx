'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2020 - Present',
      description: 'Leading full-stack development for enterprise-scale applications. Architected and implemented microservices infrastructure serving 2M+ users.',
      achievements: [
        'Reduced system latency by 40% through performance optimization',
        'Led migration from monolithic to microservices architecture',
        'Mentored 5 junior developers and established coding standards',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL']
    },
    {
      title: 'Lead Developer',
      company: 'InnovateTech',
      location: 'Austin, TX',
      period: '2017 - 2020',
      description: 'Spearheaded development of cloud-native applications and led a team of 8 developers. Delivered multiple high-impact projects on time and budget.',
      achievements: [
        'Built scalable e-commerce platform processing $50M+ annually',
        'Implemented real-time analytics dashboard for business intelligence',
        'Reduced infrastructure costs by 35% through cloud optimization',
        'Established agile development practices across the organization'
      ],
      technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'Redis', 'AWS']
    },
    {
      title: 'Full-Stack Developer',
      company: 'StartupHub',
      location: 'Seattle, WA',
      period: '2014 - 2017',
      description: 'Developed innovative web applications and mobile solutions. Contributed to rapid prototyping and MVP development for multiple startups.',
      achievements: [
        'Developed 15+ MVP applications for various startup clients',
        'Created reusable component library used across 8 projects',
        'Implemented automated testing achieving 90% code coverage',
        'Optimized database queries improving performance by 50%'
      ],
      technologies: ['Angular', 'Java', 'Spring Boot', 'MySQL', 'Docker', 'Jenkins']
    },
    {
      title: 'Software Engineer',
      company: 'Enterprise Systems',
      location: 'Boston, MA',
      period: '2010 - 2014',
      description: 'Built enterprise software solutions and internal tools. Collaborated with cross-functional teams to deliver business-critical applications.',
      achievements: [
        'Developed internal CRM system used by 500+ employees',
        'Created automated reporting system saving 20 hours/week',
        'Implemented security best practices across all applications',
        'Contributed to open-source projects and technical documentation'
      ],
      technologies: ['C#', '.NET', 'SQL Server', 'JavaScript', 'HTML/CSS', 'Git']
    },
    {
      title: 'Junior Developer',
      company: 'Digital Solutions',
      location: 'Chicago, IL',
      period: '2005 - 2010',
      description: 'Started career building web applications and learning modern development practices. Contributed to various client projects and internal tools.',
      achievements: [
        'Built 20+ client websites and web applications',
        'Learned multiple programming languages and frameworks',
        'Contributed to team code reviews and documentation',
        'Participated in hackathons and developer meetups'
      ],
      technologies: ['PHP', 'JavaScript', 'MySQL', 'HTML/CSS', 'Linux', 'Apache']
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A journey through 19 years of software development, from junior developer
            to senior engineer, with a focus on delivering exceptional results.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {experience.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <Building size={16} className="mr-1" />
                      {experience.company}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {experience.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {experience.period}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {experience.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Key Achievements:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="skill-badge text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
