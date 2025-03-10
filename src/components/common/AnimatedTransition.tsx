
import React from 'react';
import { motion } from 'framer-motion';

type AnimatedTransitionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: 'fade' | 'slide' | 'scale' | 'none';
  direction?: 'up' | 'down' | 'left' | 'right';
};

const AnimatedTransition: React.FC<AnimatedTransitionProps> = ({ 
  children, 
  className = "",
  delay = 0,
  duration = 0.3,
  animation = 'fade',
  direction = 'up'
}) => {
  const getAnimationProps = () => {
    switch (animation) {
      case 'fade':
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        };
      case 'slide':
        const directionValues = {
          up: { y: 20, x: 0 },
          down: { y: -20, x: 0 },
          left: { x: 20, y: 0 },
          right: { x: -20, y: 0 },
        };
        return {
          initial: { opacity: 0, ...directionValues[direction] },
          animate: { opacity: 1, x: 0, y: 0 },
          exit: { 
            opacity: 0, 
            ...directionValues[
              direction === 'up' 
              ? 'down' 
              : direction === 'down' 
              ? 'up' 
              : direction === 'left' 
              ? 'right' 
              : 'left'
            ] 
          },
        };
      case 'scale':
        return {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.95 },
        };
      case 'none':
      default:
        return {
          initial: {},
          animate: {},
          exit: {},
        };
    }
  };

  const animationProps = getAnimationProps();

  return (
    <motion.div
      {...animationProps}
      transition={{ 
        duration, 
        delay, 
        ease: "easeInOut" 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedTransition;
