import React from 'react';
import { motion } from 'framer-motion';

const CustomCursor = ({ position, variant = 'default' }) => {
  const variants = {
    default: {
      scale: 1,
      borderColor: 'rgba(255, 255, 255, 0.8)',
      backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    hover: {
      scale: 1.5,
      borderColor: 'rgba(255, 255, 255, 1)',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  };

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
      }}
      transition={{
        type: 'spring',
        damping: 30,
        mass: 0.5,
        stiffness: 400,
      }}
    >
      <motion.div
        className="cursor-dot"
        animate={{
          scale: variant === 'hover' ? 0.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="cursor-outline"
        variants={variants}
        animate={variant}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};

export default CustomCursor; 