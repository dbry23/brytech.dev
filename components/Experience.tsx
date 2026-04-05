'use client'

import { useContext } from 'react'
import { YearsExperienceContext } from './YearsExperience/YearsExperienceContext'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const yearsOfExperience = useContext(YearsExperienceContext)
  const experiences = [
    {
      title: 'Senior Software Engineer & Curriculum Developer',
      company: 'Tech Elevator',
      location: 'Remote',
      period: 'Jan 2020 - Dec 2025',
      description: 'Develop and maintain curriculum and software solutions for a coding bootcamp, focusing on fullstack development, DevOps, and automated testing to enhance student learning outcomes.',
      achievements: [
        'Delivered 8-month project in 3 months by designing an AI-assisted workflow to streamline generation and validation of curriculum assessment questions',
        'Automated curriculum deployments with custom CI/CD pipelines, reducing release time from 3 days to 3 hours and supporting 500+ students across 4-5 concurrent cohorts',
        'Developed automated exercise scoring pipelines using custom Docker images with MSTest, JUnit, Cypress, Mocha, and Vitest, eliminating manual grading across 4 weekly exercises and freeing instructors for direct student support',
        'Architected REST APIs and database schemas for knowledge assessment projects in C# and Java stacks (ASP.NET/SQL Server and Spring/PostgreSQL), used by 20+ cohorts and 2,000+ learners',
        'Rewrote SPA curriculum from Vue to React with modern ES6/JSX patterns, aligning with industry adoption trends and improving graduate employability',
        'Built Node.js APIs as Netlify serverless functions for real-world lab exercises, giving learners hands-on experience consuming non-local REST endpoints',
        'Mentored 4+ junior developers through pair programming and code reviews, providing architectural guidance and reinforcing engineering best practices'
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
      title: 'Lead Software Engineer',
      company: 'Traffic Safety Store',
      location: 'Philadelphia, PA / Remote',
      period: 'Jul 2016 - Sep 2019',
      description: 'Led development of e-commerce platform for traffic safety products, focusing on enhancing user experience, expanding product offerings, and improving operational efficiency.',
      achievements: [
        'Led 3-person team to unify product and order management across 5 data sources and 4 storefronts into a single admin platform, making common management tasks 5-10x faster',
        'Replaced insecure homegrown authentication with role-based access control using Microsoft Identity and implemented audit trails on data changes, hardening security and data integrity across all storefronts',
        'Increased annual revenue $150k+ by replacing a static 30-item product grid with a live-filtering React interface, enabling customers to search 200+ road construction sign legends',
        'Developed Elasticsearch-powered live filtering of safety vest inventory by size, color, and ANSI safety rating, increasing conversion rates from 17% to 23% as validated through A/B testing',
        'Drove $60k+ in new sales within six months by building a custom sign configurator with live preview and near real-time rendering using JavaScript and Cloudinary API',
        'Integrated Avalara sales tax API to replace incomplete state-only tax calculations with accurate local and county rates, eliminating recurring manual corrections and automating the exemption approval process'
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
      title: 'Software Engineer',
      company: 'Dechert LLP',
      location: 'Philadelphia, PA',
      period: 'Jan 2011 - Jul 2016',
      description: 'Developed and maintained internal applications for a global law firm, focusing on automating processes, integrating third-party services, and enhancing document management systems to improve operational efficiency.',
      achievements: [
        "Architected ASP.NET/SQL Server system to automate conflict-of-interest document restrictions in iManage across the firm's distributed global infrastructure, saving legal and IT teams 20+ hours per week",
        'Saved firm $25k+ annually by building a searchable internal skills database that reduced reliance on costly consultants',
        'Integrated Okta REST API with internal systems to automate app provisioning, eliminating manual IT steps for employee onboarding and access requests',
        "Integrated Box REST API with iManage to enable secure external document sharing, extending collaboration capabilities beyond the firm's internal platform",
        'Reverse engineered legacy ASP.NET applications and MSSQL stored procedures from defunct vendors to resolve critical issues including DST handling failures and Windows/IE compatibility problems, ensuring business continuity'
      ],
      technologies: ['ASP.NET', 'SQL', 'HTML/CSS/JS', 'jQuery', 'SQL Server', 'SSRS', 'SSIS', 'iManage', 'Git']
    },
    {
      title: 'Associate Software Engineer',
      company: 'Coventry First',
      location: 'Fort Washington, PA',
      period: 'Feb 2010 - Jan 2011',
      achievements: [
        'Enhanced ASP.NET and SQL applications for Contract Analysis department by expanding data capture and optimizing keyboard navigation, enabling analysts to process contracts faster and reducing daily backlog by 20%',
        'Designed policy review application with approval workflow and audit trail, reducing errors and re-reviews for the 5-6 person review team',
        'Developed internal project management tool for the engineering department, automating deployment plan generation and replacing an error-prone manual process'
      ],
      technologies: ['ASP.NET', 'WinForms', 'SQL', 'HTML/CSS/JS', 'SQL Server']
    },
    {
      title: 'Junior Software Engineer',
      company: 'Capmark Financial Group',
      location: 'Horsham, PA',
      period: 'Jan 2007 - Feb 2010',
      achievements: [
        'Rebuilt mission-critical data transfer process from legacy Perl script to a .NET Windows Service, improving reliability and reducing manual reruns by 80%',
        'Upgraded major finance applications to ASP.NET 2.0 and SQL Server 2008, implementing new business features, stored procedures, and tighter integration with iManage document management systems'
      ],
      technologies: ['ASP.NET', 'HTML/CSS/JS', 'SQL', 'SQL Server', 'iManage']
    },
    {
      title: 'Student Software Engineer',
      company: 'School of Tourism & Hospitality Management, Temple University',
      location: 'Philadelphia, PA',
      period: 'Jun 2006 - Jan 2007',
      achievements: [
        'Migrated Classic ASP web applications to ASP.NET 1.1 for the hospitality management department, serving faculty and industry professionals'
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
