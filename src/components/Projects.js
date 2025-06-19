import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight, HiExternalLink } from 'react-icons/hi';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with real-time inventory and payment processing.',
    category: 'Web Development',
    image: 'https://source.unsplash.com/random/800x600?ecommerce',
    link: '#',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with interactive data visualization.',
    category: 'Data Analytics',
    image: 'https://source.unsplash.com/random/800x600?analytics',
    link: '#',
    tech: ['Vue.js', 'D3.js', 'Firebase', 'TailwindCSS'],
  },
  {
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracking app with personalized workout plans.',
    category: 'Mobile Development',
    image: 'https://source.unsplash.com/random/800x600?fitness',
    link: '#',
    tech: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
  },
  {
    title: 'AI Content Platform',
    description: 'Content management system powered by AI for automated content generation.',
    category: 'AI/ML',
    image: 'https://source.unsplash.com/random/800x600?artificial-intelligence',
    link: '#',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-dark-800">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading mb-6">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              Projects
            </span>
          </h2>
          <p className="subheading">
            Explore our latest work and see how we help businesses grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-dark-900 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6">
                <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 rounded-full">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-dark-800 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <motion.a
                  href={project.link}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                  whileHover={{ x: 5 }}
                >
                  View Project
                  <HiArrowRight className="ml-2 w-5 h-5" />
                </motion.a>
              </div>

              {/* Hover overlay */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 bg-primary-600/10 dark:bg-primary-400/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute top-4 right-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <HiExternalLink className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 