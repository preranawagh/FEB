import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    text: "The attention to detail and smooth animations make this product stand out. Absolutely love it!",
    author: "Sarah Johnson",
    role: "Product Designer",
    avatar: "/images/avatar1.jpg"
  },
  {
    text: "Incredible user experience. The interface is both beautiful and functional.",
    author: "Michael Chen",
    role: "Tech Lead",
    avatar: "/images/avatar2.jpg"
  },
  {
    text: "This is exactly what we needed. The animations and interactions are perfect.",
    author: "Emma Davis",
    role: "Creative Director",
    avatar: "/images/avatar3.jpg"
  }
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [current]);

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-20 px-4 bg-light dark:bg-dark overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What People Say
        </motion.h2>

        <div className="relative">
          {/* Carousel container */}
          <div className="relative h-[400px] w-full">
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
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full"
              >
                <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 md:p-12 shadow-xl">
                  {/* Quote icon */}
                  <div className="text-6xl text-primary mb-6">❝</div>

                  {/* Testimonial text */}
                  <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
                    {testimonials[current].text}
                  </p>

                  {/* Author info */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 mr-4" />
                    <div>
                      <h4 className="font-semibold text-lg">
                        {testimonials[current].author}
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
              className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrevious}
            >
              ←
            </motion.button>
            <motion.button
              className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
            >
              →
            </motion.button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === current
                    ? 'bg-primary'
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

export default Carousel; 