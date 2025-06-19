import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with real-time inventory and payment processing.',
    category: 'Web Development',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with interactive data visualization.',
    category: 'Data Analytics',
  },
  {
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracking app with personalized workout plans.',
    category: 'Mobile Development',
  },
  {
    title: 'AI Content Platform',
    description: 'Content management system powered by AI for automated content generation.',
    category: 'AI/ML',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section bg-gray-50 dark:bg-dark-800 overflow-hidden">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="heading mb-6 text-primary-600 dark:text-primary-400">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              Projects
            </span>
          </h2>
          <p className="subheading">
            Explore our latest work and see how we help businesses grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-dark-900 shadow-lg cursor-pointer p-8"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(80,80,180,0.15)' }}
            >
              <span className="text-sm text-primary font-medium mb-2 block">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 