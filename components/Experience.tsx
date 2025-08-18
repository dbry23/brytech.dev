'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Curriculum Developer',
      company: 'Tech Elevator / Stride',
      location: 'Remote',
      period: 'Jan 2020 - Present',
      description: 'Designing and developing educational content for coding bootcamp students, focusing on full-stack development and modern web technologies.',
      achievements: [
        'Led cross-functional team to build new React curriculum, replacing outdated single-page application content and enhancing existing web material for a smoother transition. By introducing ES6, responsive web design, and a modern framework, student job placement rates increased by 20% with higher starting salaries.',
        'Established curriculum versioning strategy and automated CI/CD process, bundling learning material from over 30 Git repositories into LMS and cohort repositories. Process handles consumer and enterprise product offerings and enables bootcamp to rapidly iterate and support over 500 concurrent students.',
        'Designed module capstone project for students to demonstrate knowledge in client-server REST API applications and SQL databases, resulting in increased module graduation rate and student confidence.',
        'Built automated testing and scoring process using custom Docker images to test student labs with MSTest, JUnit, Cypress, Mocha, and Vitest unit tests, enabling instructors to have more time for individual student engagement.',
        'Rolled out custom serverless functions with Express.js acting as read-only RESTful APIs, leading to better student understanding of real-world APIs by using non-local servers for lab exercises.'
      ],
      technologies: ['C#', 'Java', 'ASP.NET', 'Spring Boot', 'MSTest', 'JUnit', 'SQL Server', 'PostgreSQL', 'HTML/CSS/JS', 'Vue.js', 'React', 'Docker', 'Git'],
      links: [
        {
          label: 'Tech Elevator APIs',
          url: 'https://teapi.netlify.app/'
        }
      ]
    },
    {
      title: 'Web Developer',
      company: 'Bry\'s Marine',
      location: 'Remote',
      period: 'Oct 2019 - Dec 2019',
      description: 'Modernized company website with more professional look and feel and product photos.',
      achievements: [
        'Redesigned company website with lightweight CMS to improve SEO and user experience, resulting in 15% more sales over the previous year.'
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
      description: 'Developed and maintained e-commerce websites and admin site for traffic safety products.',
      achievements: [
        'Co-led team of four in launching new e-commerce admin site using ASP.NET, Razor, and React, achieving goals of unified logins, access to online & phone orders, and quickly toggling on-sale/out-of-stock for products on all storefronts.',
        'Deployed new responsive web design interface for signs with legend search using React, JavaScript, and ASP.NET, boosting sales of high-volume signs and enabling company to sell more than 200 new legends.',
        'Enhanced product category layout with live search and filtering capabilities with JavaScript, Elasticsearch, and ASP.NET, increasing conversion rates by more than 30% over previous versions in A/B tests.',
        'Delivered interactive sign designer using JavaScript and Cloudinary APIs, generating more than $30,000 of additional e-commerce sales and higher conversion rates compared to previous version in A/B tests.'
      ],
      technologies: ['ASP.NET (C# MVC)', 'SQL', 'React', 'jQuery', 'HTML/CSS/JS', 'Microsoft SQL Server', 'Elasticsearch', 'FluentMigrator', 'Git'],
      links: [
        {
          label: 'Roll-up Signs',
          url: 'https://www.trafficsafetystore.com/traffic-signs/roll-up-48'
        },
        {
          label: 'Safety Vests',
          url: 'https://www.trafficsafetystore.com/safety-vests'
        },
        {
          label: 'Sign Designer',
          url: 'https://www.trafficsafetystore.com/Product/Customization?ProductOptionID=4664'
        }
      ]
    },
    {
      title: 'IT Applications Developer',
      company: 'Dechert LLP',
      location: 'Philadelphia, PA',
      period: 'Jan 2011 - Jul 2016',
      description: 'Developed enterprise applications for law firm operations, focusing on document management and internal systems.',
      achievements: [
        'Architected and developed ethical screen management system, automatically applying access lists to secure iManage digital documents and workspaces, saving application support and general counsel teams more than 20 hours/week.',
        'Implemented dynamic internal skills & experience tracking application using ASP.NET, CSS, and Photoshop mockups, saving law firm over $25,000 annually by leveraging internal resources over external resources.'
      ],
      technologies: ['ASP.NET (VB Web Forms, C# MVC)', 'SQL', 'HTML/CSS/JS', 'jQuery', 'Microsoft SQL Server', 'SSRS', 'SSIS', 'iManage', 'Git']
    },
    {
      title: 'Associate Software Engineer',
      company: 'Coventry First',
      location: 'Fort Washington, PA',
      period: 'Feb 2010 - Jan 2011',
      achievements: [
        'Improved key systems of Contract Analysis department with enhancements to ASP.NET application and SQL databases, enabling more efficient data captur and boosting analyst productivity resulting in 20% reduction in daily backlog.'
      ],
      technologies: ['ASP.NET (VB Web Forms)', 'VB.NET WinForms', 'SQL', 'HTML/CSS/JS', 'Microsoft SQL Server']
    },
    {
      title: 'Applications Developer',
      company: 'Capmark Financial Group, Inc.',
      location: 'Horsham, PA',
      period: 'Jan 2007 - Feb 2010',
      achievements: [
        'Upgraded major finance applications to ASP.NET 2.0 and SQL Server 2008, implementing new features from business requirements and integrating with iManage document management systems.'
      ],
      technologies: ['ASP.NET (VB Web Forms)', 'HTML/CSS/JS', 'SQL', 'Microsoft SQL Server', 'iManage']
    },
    {
      title: '.NET Developer',
      company: 'School of Tourism & Hospitality Management, Temple University',
      location: 'Philadelphia, PA',
      period: 'Jun 2006 - Jan 2007',
      achievements: [
        'Created ASP.NET web applications demonstrating and sharing knowledge for hospitality management professionals, leading to better information sharing among remote users.'
      ],
      technologies: ['ASP.NET (VB Web Forms)', 'Classic ASP', 'HTML', 'SQL', 'Microsoft SQL Server']
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
            A journey through 19+ years of software development with a focus on delivering exceptional results.
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
