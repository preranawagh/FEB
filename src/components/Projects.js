import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-dark-900 shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(80,80,180,0.15)' }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Image with animated overlay */}
              <motion.div className="relative aspect-video overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0.7 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-sm text-primary font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <motion.button
                    className="mt-2 px-6 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-secondary transition-colors duration-300 w-fit"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    View Project
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 