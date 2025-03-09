
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  status?: 'online' | 'offline' | 'none';
  isActive?: boolean;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 'md',
  status = 'none',
  isActive = false,
  className
}) => {
  const [loaded, setLoaded] = useState(false);
  
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base'
  };
  
  const statusClasses = {
    online: 'after:absolute after:bottom-0 after:right-0 after:w-2.5 after:h-2.5 after:bg-spotify-green after:rounded-full after:border-2 after:border-spotify-dark',
    offline: 'after:absolute after:bottom-0 after:right-0 after:w-2.5 after:h-2.5 after:bg-gray-400 after:rounded-full after:border-2 after:border-spotify-dark',
    none: ''
  };

  return (
    <div 
      className={cn(
        "relative rounded-full overflow-hidden flex-shrink-0", 
        sizeClasses[size], 
        statusClasses[status],
        isActive && "ring-2 ring-spotify-green",
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-all duration-300",
          !loaded && "image-blur-loading"
        )}
        onLoad={() => setLoaded(true)}
      />
      {!loaded && (
        <div className="absolute inset-0 bg-spotify-light animate-pulse"/>
      )}
    </div>
  );
};

export default Avatar;
