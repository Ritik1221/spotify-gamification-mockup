
import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';

interface BadgeProps {
  text: string;
  variant?: 'default' | 'success' | 'new' | 'streak';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  text,
  variant = 'default',
  size = 'md',
  icon,
  className
}) => {
  const variantClasses = {
    default: 'bg-spotify-light text-spotify-text',
    success: 'bg-spotify-green/20 text-spotify-green border border-spotify-green/40',
    new: 'bg-blue-500/20 text-blue-400 border border-blue-500/40',
    streak: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40'
  };
  
  const sizeClasses = {
    sm: 'text-xs py-0.5 px-2',
    md: 'text-sm py-1 px-3',
    lg: 'text-base py-1.5 px-4'
  };

  return (
    <motion.span 
      className={cn(
        "inline-flex items-center rounded-full font-medium whitespace-nowrap",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {text}
    </motion.span>
  );
};

export default Badge;
