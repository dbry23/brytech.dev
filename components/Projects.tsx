'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Globe } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Pick For Me TV',
      description: 'Developed website to pick a random episode from a user-defined list of TV shows. Utilized TMDB (The Movie Database) REST API, Vue.js front end, and Express.js back end.',
      image: '/projects/pick-for-me-tv.gif',
      technologies: ['Vue.js', 'Express.js', 'REST API', 'TMDB'],
      liveUrl: 'https://pickforme.tv',
      repoUrl: null,
      featured: true
    },
    {
      title: 'BryTech',
      description: "An experiment in AI-assisted vibe coding. Modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring dark mode and animations. Learned about Vercel platform and its CI/CD tools.",
      image: '/projects/brytech.gif',
      technologies: ['Cursor AI', 'Vibe Coding', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      liveUrl: 'https://www.brytech.dev',
      repoUrl: 'https://github.com/dbry23/brytech.dev',
      featured: true
    },
    {
      title: "Bry's Marine website",
      description: 'Redesigned company website with lightweight CMS to improve SEO and user experience, resulting in 15% more sales over the previous year.',
      image: '/projects/brys-marine.png',
      technologies: ['Grav CMS', 'PHP/Twig', 'jQuery', 'HTML/CSS/JS', 'DreamHost', 'Cloudinary'],
      liveUrl: 'https://www.brysmarine.com',
      repoUrl: null,
      featured: true
    },
    {
      title: 'Traffic Safety Store - Sign Gallery',
      description: 'Deployed new interface for roll-up signs with legend search using React, JavaScript, and ASP.NET, boosting sales of high-volume signs and enabling company to sell more than 200 new legends.',
      image: '/projects/traffic-safety-store-sign-gallery.gif',
      technologies: ['ASP.NET (C# MVC)', 'React', 'HTML/CSS/JS', 'Entity Framework'],
      liveUrl: 'https://www.trafficsafetystore.com/traffic-signs/roll-up-48',
      repoUrl: null,
      featured: false
    },
    {
      title: 'Traffic Safety Store - Sign Designer',
      description: 'Delivered interactive sign designer using JavaScript and Cloudinary APIs. Generated more than $30,000 of additional e-commerce sales and higher conversion rates compared to previous version in A/B tests.',
      image: '/projects/traffic-safety-store-sign-customization.gif',
      technologies: ['ASP.NET (C# MVC)', 'jQuery', 'HTML/CSS/JS', 'Cloudinary'],
      liveUrl: 'https://www.trafficsafetystore.com/product/customization?productoptionid=4625',
      repoUrl: null,
      featured: false
    },
  ]

  return (
    <section id="projects" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development,
            modern frameworks, and innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white dark:bg-dark-700 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow ${
                project.featured ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              <div className="relative">
                {project.image ? (
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900 dark:to-blue-900 flex items-center justify-center">
                    <span className="text-primary-600 dark:text-primary-400 font-medium">
                      Project Preview
                    </span>
                  </div>
                )}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="skill-badge text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe size={16} className="mr-1" />
                      Live Site
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm font-medium transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Side Projects Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Side Projects & Open Source
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'React Component Library',
                description: 'A collection of reusable React components with TypeScript support and comprehensive documentation.',
                tech: 'React, TypeScript, Storybook',
                stars: '150+'
              },
              {
                title: 'CLI Task Manager',
                description: 'Command-line task management tool with project organization and time tracking features.',
                tech: 'Node.js, Commander.js, SQLite',
                stars: '85+'
              },
              {
                title: 'Weather CLI Tool',
                description: 'Terminal-based weather application with location detection and detailed forecasts.',
                tech: 'Python, Click, OpenWeather API',
                stars: '120+'
              },
              {
                title: 'Database Migration Tool',
                description: 'Automated database migration tool supporting multiple database types and version control.',
                tech: 'Go, PostgreSQL, MySQL, MongoDB',
                stars: '200+'
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-dark-800 p-6 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {project.tech}
                  </span>
                  <span className="text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-2 py-1 rounded">
                    ⭐ {project.stars}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

export default Projects
