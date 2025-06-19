import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const StrikingVisual = ({ cursorPosition }) => {
  const containerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const updatePosition = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (cursorPosition.x - centerX) / 20;
      const deltaY = (cursorPosition.y - centerY) / 20;

      controls.start({
        x: deltaX,
        y: deltaY,
        rotate: deltaX * 0.5,
      });
    };

    updatePosition();
  }, [cursorPosition, controls]);

  return (
    <section className="py-32 px-4 bg-light dark:bg-dark overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Interactive Experience
        </motion.h2>

        <div
          ref={containerRef}
          className="relative h-[60vh] flex items-center justify-center"
        >
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-secondary/10 rounded-full blur-2xl" />
          </div>

          {/* Main interactive shape */}
          <motion.div
            className="relative"
            animate={controls}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 200,
            }}
          >
            {/* Core shape */}
            <motion.div
              className="w-64 h-64 bg-gradient-to-br from-primary to-secondary rounded-[30%] shadow-2xl"
              animate={{
                borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />

            {/* Floating particles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2 + i,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Interactive hint */}
        <motion.p
          className="text-center text-gray-600 dark:text-gray-300 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Move your cursor to interact with the shape
        </motion.p>
      </div>
    </section>
  );
};

export default StrikingVisual; 