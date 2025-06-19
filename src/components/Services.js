import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCode, HiDesktopComputer, HiDeviceMobile, HiChartBar } from 'react-icons/hi';

const services = [
  {
    name: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    icon: HiCode,
    features: ['React/Next.js', 'Node.js/Express', 'MongoDB/PostgreSQL', 'REST/GraphQL APIs'],
  },
  {
    name: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed for optimal user experience.',
    icon: HiDesktopComputer,
    features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
  },
  {
    name: 'Mobile Development',
    description: 'Cross-platform mobile applications that work seamlessly on all devices.',
    icon: HiDeviceMobile,
    features: ['React Native', 'iOS/Android', 'Push Notifications', 'Offline Support'],
  },
  {
    name: 'Analytics & SEO',
    description: 'Data-driven insights and optimization for maximum visibility.',
    icon: HiChartBar,
    features: ['Performance Tracking', 'SEO Optimization', 'Conversion Analysis', 'A/B Testing'],
  },
];

const Services = ({ onMouseEnter, onMouseLeave }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      id="services"
      className="section bg-white dark:bg-dark-900"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container">
        <motion.h2
          className="heading mb-6 text-primary-600 dark:text-primary-400 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>

        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="subheading">
            Comprehensive solutions to help your business thrive in the digital world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex(null)}
            >
              <div className="h-full bg-gray-50 dark:bg-dark-800 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:shadow-xl">
                {/* Icon */}
                <motion.div
                  className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <service.icon className="w-7 h-7" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {service.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>

                {/* Features list */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.ul
                      className="space-y-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                        >
                          <span className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                          {feature}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 