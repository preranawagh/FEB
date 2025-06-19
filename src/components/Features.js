import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: '🚀',
    title: 'Lightning Fast',
    description: 'Optimized performance for seamless user experience',
  },
  {
    icon: '🎨',
    title: 'Modern Design',
    description: 'Beautiful, intuitive interfaces that inspire',
  },
  {
    icon: '📱',
    title: 'Responsive',
    description: 'Perfect experience across all devices',
  },
  {
    icon: '⚡',
    title: 'Dynamic',
    description: 'Interactive elements that engage users',
  },
];

const Features = () => {
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
          Amazing Features
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Background blur effect */}
              <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 