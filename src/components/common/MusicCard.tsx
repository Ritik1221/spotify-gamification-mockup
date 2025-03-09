
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Play, Plus, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface MusicCardProps {
  title: string;
  artist: string;
  coverUrl: string;
  duration?: string;
  rating?: number;
  size?: 'sm' | 'md' | 'lg';
  orientation?: 'vertical' | 'horizontal';
  isPlayable?: boolean;
  isNew?: boolean;
  onPlay?: () => void;
  onAdd?: () => void;
  onRate?: (rating: number) => void;
  className?: string;
}

const MusicCard: React.FC<MusicCardProps> = ({
  title,
  artist,
  coverUrl,
  duration,
  rating = 0,
  size = 'md',
  orientation = 'vertical',
  isPlayable = true,
  isNew = false,
  onPlay,
  onAdd,
  onRate,
  className
}) => {
  const [loaded, setLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const sizeClasses = {
    sm: {
      card: 'max-w-[140px]',
      image: 'w-32 h-32',
      title: 'text-sm',
      artist: 'text-xs'
    },
    md: {
      card: 'max-w-[180px]',
      image: 'w-40 h-40',
      title: 'text-base',
      artist: 'text-sm'
    },
    lg: {
      card: 'max-w-[220px]',
      image: 'w-48 h-48',
      title: 'text-lg',
      artist: 'text-base'
    }
  };
  
  const orientationClasses = {
    vertical: 'flex-col',
    horizontal: 'flex-row items-center gap-3'
  };

  return (
    <motion.div
      className={cn(
        'relative rounded-md overflow-hidden transition-all duration-300',
        orientationClasses[orientation],
        orientation === 'vertical' ? sizeClasses[size].card : 'w-full',
        'card-hover',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative group">
        <div 
          className={cn(
            "relative overflow-hidden rounded-md bg-spotify-light",
            orientation === 'vertical' ? sizeClasses[size].image : 'w-16 h-16'
          )}
        >
          <img
            src={coverUrl}
            alt={`${title} by ${artist}`}
            className={cn(
              "w-full h-full object-cover transition-all duration-500",
              !loaded && "image-blur-loading"
            )}
            onLoad={() => setLoaded(true)}
          />
          {!loaded && (
            <div className="absolute inset-0 bg-spotify-light animate-pulse"/>
          )}
          
          {isPlayable && isHovered && (
            <motion.div 
              className="absolute inset-0 bg-black/40 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <button 
                onClick={onPlay}
                className="bg-spotify-green text-black rounded-full p-2.5 shadow-lg transform transition-transform hover:scale-110"
              >
                <Play size={18} fill="black" />
              </button>
            </motion.div>
          )}
          
          {isNew && (
            <div className="absolute top-2 right-2">
              <span className="inline-flex items-center justify-center w-5 h-5 bg-spotify-green text-xs font-bold text-black rounded-full">
                N
              </span>
            </div>
          )}
        </div>
      </div>
      
      <div className={cn(
        "flex flex-col",
        orientation === 'vertical' ? 'mt-2' : 'flex-1 min-w-0'
      )}>
        <h3 
          className={cn(
            "font-medium text-spotify-text truncate",
            sizeClasses[size].title
          )}
        >
          {title}
        </h3>
        <p 
          className={cn(
            "text-spotify-muted truncate",
            sizeClasses[size].artist
          )}
        >
          {artist}
        </p>
        
        {duration && orientation === 'horizontal' && (
          <span className="text-xs text-spotify-muted mt-1">{duration}</span>
        )}
        
        {rating > 0 && (
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={cn(
                  "mr-0.5",
                  i < rating ? "fill-yellow-400 text-yellow-400" : "text-spotify-muted"
                )}
                onClick={() => onRate && onRate(i + 1)}
              />
            ))}
          </div>
        )}
      </div>
      
      {onAdd && orientation === 'horizontal' && (
        <button 
          className="ml-auto p-2 text-spotify-muted hover:text-spotify-green transition-colors"
          onClick={onAdd}
        >
          <Plus size={20} />
        </button>
      )}
    </motion.div>
  );
};

export default MusicCard;
