import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project Alpha',
    description: 'Modern web application with advanced features',
    image: '/images/project1.jpg',
    category: 'Web Development',
  },
  {
    title: 'Project Beta',
    description: 'Mobile-first e-commerce platform',
    image: '/images/project2.jpg',
    category: 'E-commerce',
  },
  {
    title: 'Project Gamma',
    description: 'Interactive dashboard with real-time data',
    image: '/images/project3.jpg',
    category: 'Dashboard',
  },
  {
    title: 'Project Delta',
    description: 'AI-powered content management system',
    image: '/images/project4.jpg',
    category: 'AI/ML',
  },
];

const Showcase = () => {
  return (
    <section className="py-20 px-4 bg-light dark:bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Project Image */}
              <motion.div
                className="aspect-video bg-gray-200 dark:bg-gray-800"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
              </motion.div>

              {/* Content Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="text-sm text-primary font-medium mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300">
                  {project.description}
                </p>

                {/* View Project Button */}
                <motion.button
                  className="mt-4 px-6 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-secondary transition-colors duration-300 w-fit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase; 