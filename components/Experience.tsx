'use client'

import { useContext } from 'react'
import { YearsExperienceContext } from './YearsExperience/YearsExperienceContext'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const yearsOfExperience = useContext(YearsExperienceContext)
  const experiences = [
    {
      title: 'Software Engineer & Curriculum Developer',
      company: 'Tech Elevator',
      location: 'Remote',
      period: 'Jan 2020 - Dec 2025',
      description: 'Develop and maintain curriculum and software solutions for a coding bootcamp, focusing on backend development, DevOps, and automated testing to enhance student learning outcomes.',
      achievements: [
        'Architected API and database capstone project modeled after Venmo, in dual tech stacks (C#/ASP.NET/SQL Server and Java/Spring/PostgreSQL), driving improved engagement and module completion rates for 2,000+ learners.',
        'Designed automated CI/CD pipelines and curriculum versioning system that reduced deployment time from 3 days to 3 hours, enabling rapid curriculum iteration for 800+ concurrent students across multiple programs and start dates.',
        'Built AI-assisted pipeline to generate and validate Check-For-Understanding questions, compressing an 8-month timeline to under 3 months while identifying and correcting errors in existing curriculum materials.',
        'Engineered automated testing and scoring pipelines using custom Docker images and multiple testing frameworks, reducing per-instructor grading workload by 15+ hours per week and enabling more direct student support.',
        'Implemented scalable Express-based APIs as teaching resources for lab exercises, giving learners hands-on experience consuming REST endpoints and working with distributed systems.',
        'Developed React and ES6 curriculum modules to replace legacy Vue content, ensuring students learned modern industry-standard technologies.',
        'Mentored junior developers through training, pair programming, and constructive code reviews, helping them build confidence and level up their skills.'
      ],
      technologies: ['C#', 'Java', 'ASP.NET', 'Spring Boot', 'MSTest', 'JUnit', 'SQL Server', 'PostgreSQL', 'HTML/CSS/JS', 'React', 'Vue.js', 'CI/CD', 'Docker', 'Git'],
      links: [
        {
          label: 'Express-based APIs',
          url: 'https://teapi.netlify.app/'
        }
      ]
    },
    {
      title: 'Independent Developer',
      company: "Bry's Marine",
      location: 'Remote',
      period: 'Oct 2019 - Dec 2019',
      description: "Redesigned and developed a new website for Bry's Marine, a boat dealership and service center, focusing on improved user experience and performance.",
      achievements: [
        'Rebuilt website with lightweight CMS, achieving 90+ Lighthouse scores in performance, best practices, and SEO.'
      ],
      technologies: ['Grav CMS', 'PHP/Twig', 'jQuery', 'HTML/CSS/JS', 'DreamHost', 'Cloudinary', 'Git'],
      links: [
        {
          label: "Bry's Marine",
          url: 'https://www.brysmarine.com'
        }
      ]
    },
    {
      title: 'Lead Software Engineer / Software Engineer',
      company: 'Traffic Safety Store',
      location: 'Hybrid / Philadelphia, PA',
      period: 'Jul 2016 - Sep 2019',
      description: 'Led development of e-commerce platform for traffic safety products, focusing on enhancing user experience, expanding product offerings, and improving operational efficiency.',
      achievements: [
        'Implemented new interface for road construction signs using ASP.NET and React, expanding the product catalog to 200+ new signs and generating $150k+ in additional annual revenue.',
        'Built interactive custom sign builder with JavaScript and Cloudinary, driving $60k+ in new revenue within six months and significantly improving conversion rates in A/B tests.',
        'Developed live search and filtering for safety vest products using JavaScript and Elasticsearch, increasing average order value by $500+ on safety vest purchases.',
        'Led 3-person team to launch admin site with ASP.NET and React, unifying phone and online orders across 4 storefronts and enabling bulk product management for inventory, pricing, and promotions.'
      ],
      technologies: ['ASP.NET', 'SQL', 'React', 'jQuery', 'HTML/CSS/JS', 'LESS', 'SQL Server', 'Elasticsearch', 'FluentMigrator', 'Git'],
      links: [
        {
          label: 'Road Construction Signs',
          url: 'https://www.trafficsafetystore.com/traffic-signs/roll-up-48'
        },
        {
          label: 'Custom Sign Builder',
          url: 'https://www.trafficsafetystore.com/Product/Customization?ProductOptionID=4664'
        },
        {
          label: 'Safety Vests',
          url: 'https://www.trafficsafetystore.com/safety-vests'
        }
      ]
    },
    {
      title: 'IT Applications Developer',
      company: 'Dechert LLP',
      location: 'Philadelphia, PA',
      period: 'Jan 2011 - Jul 2016',
      description: 'Developed and maintained internal applications for a global law firm, focusing on automating processes, integrating third-party services, and enhancing document management systems to improve operational efficiency.',
      achievements: [
        'Architected and developed ASP.NET system to automate conflict-of-interest document restrictions in iManage document management platform, saving legal and IT teams 20+ hours per week.',
        'Built searchable skills database using ASP.NET and JavaScript, enabling legal teams to find internal translators and subject matter experts and saving $25k+ annually in external consultant fees.',
        'Integrated Okta and Box REST APIs to automate application provisioning and external document sharing, reducing manual work for Help Desk and IT Operations teams.'
      ],
      technologies: ['ASP.NET', 'SQL', 'HTML/CSS/JS', 'jQuery', 'SQL Server', 'SSRS', 'SSIS', 'iManage', 'Git']
    },
    {
      title: 'Associate Software Engineer',
      company: 'Coventry First',
      location: 'Fort Washington, PA',
      period: 'Feb 2010 - Jan 2011',
      achievements: [
        'Enhanced ASP.NET and SQL applications for Contract Analysis department by expanding data capture and optimizing keyboard navigation, helping analysts process contracts more quickly and reducing daily backlog by 20%.'
      ],
      technologies: ['ASP.NET', 'WinForms', 'SQL', 'HTML/CSS/JS', 'SQL Server']
    },
    {
      title: 'Applications Developer',
      company: 'Capmark Financial Group, Inc.',
      location: 'Horsham, PA',
      period: 'Jan 2007 - Feb 2010',
      achievements: [
        'Migrated mission-critical data transfer process from legacy Perl script to a .NET Windows Service, improving reliability and reducing manual reruns by 80%.'
      ],
      technologies: ['ASP.NET', 'HTML/CSS/JS', 'SQL', 'SQL Server', 'iManage']
    },
    {
      title: '.NET Developer',
      company: 'School of Tourism & Hospitality Management, Temple University',
      location: 'Philadelphia, PA',
      period: 'Jun 2006 - Jan 2007',
      achievements: [
        'Created ASP.NET web applications demonstrating and sharing knowledge for hospitality management professionals, leading to better information sharing among remote users.'
      ],
      technologies: ['ASP.NET', 'Classic ASP', 'HTML', 'SQL', 'SQL Server']
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
            A journey through {yearsOfExperience}+ years of software development with a focus on delivering exceptional results.
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

              {experience.links && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Links:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    {experience.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

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
