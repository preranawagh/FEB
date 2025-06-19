import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechCorp',
    image: 'https://source.unsplash.com/random/100x100?portrait-woman-1',
    content: 'Working with this team has been an absolute pleasure. Their attention to detail and innovative solutions have helped us achieve our goals faster than we imagined.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager at StartupXYZ',
    image: 'https://source.unsplash.com/random/100x100?portrait-man-1',
    content: 'The level of professionalism and technical expertise is outstanding. They delivered a beautiful, high-performing solution that our users love.',
    rating: 5,
  },
  {
    name: 'Emily Davis',
    role: 'Marketing Director at CreativeStudio',
    image: 'https://source.unsplash.com/random/100x100?portrait-woman-2',
    content: 'Their creative approach to problem-solving and commitment to excellence sets them apart. The results have exceeded our expectations.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-white dark:bg-dark-900 overflow-hidden">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading mb-6 text-primary-600 dark:text-primary-400 text-center">
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              Clients
            </span>{' '}
            Say
          </h2>
          <p className="subheading">
            Don't just take our word for it - hear from some of our satisfied clients.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-4">
          {/* Testimonial carousel */}
          <div className="relative h-[400px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full"
              >
                <div className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-8 md:p-12 shadow-xl">
                  {/* Quote icon */}
                  <div className="text-6xl text-primary-400 mb-6">❝</div>

                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <HiStar key={i} className="w-6 h-6 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
                    {testimonials[current].content}
                  </p>

                  {/* Author info */}
                  <div className="flex items-center">
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                        {testimonials[current].name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <HiChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <HiChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === current
                    ? 'bg-primary-600'
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 