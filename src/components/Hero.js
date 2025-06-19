import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-[#e0e7ff] via-[#f0fdfa] to-[#fef9c3] dark:from-dark-800 dark:via-dark-900 dark:to-dark-900"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute w-96 h-96 bg-primary-400/30 rounded-full blur-3xl left-[-10%] top-[-10%] z-0"
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-secondary-400/30 rounded-full blur-2xl right-[-8%] top-[20%] z-0"
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-primary-200/40 rounded-full blur-2xl left-[20%] bottom-[-10%] z-0"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-600 animate-gradient-x">
            Strategize Your Marketing.
          </span>
          <span className="block mt-2 text-3xl md:text-5xl font-light text-gray-700 dark:text-gray-200">
            Accelerate Your Growth.
          </span>
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Unlock the power of tailored marketing strategies and seamless digital experiences for your business.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.a
            href="#contact"
            className="btn text-lg px-8 py-4 shadow-lg"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Started
          </motion.a>
          <motion.a
            href="#features"
            className="btn-outline text-lg px-8 py-4"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 