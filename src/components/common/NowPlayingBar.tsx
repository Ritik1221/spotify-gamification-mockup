
import React from 'react';
import { Play, Pause, SkipForward } from 'lucide-react';
import { motion } from 'framer-motion';

const NowPlayingBar = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  return (
    <motion.div 
      className="fixed bottom-16 left-2 right-2 z-40 bg-spotify-light rounded-md overflow-hidden border border-white/10 shadow-lg"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.2 }}
    >
      <div className="flex items-center p-2">
        <div className="h-10 w-10 rounded overflow-hidden mr-3 flex-shrink-0">
          <img 
            src="https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36" 
            alt="Now playing" 
            className="h-full w-full object-cover"
          />
        </div>
        
        <div className="flex-1 min-w-0 mr-3">
          <h4 className="text-sm font-medium truncate">Blinding Lights</h4>
          <p className="text-xs text-spotify-muted truncate">The Weeknd</p>
        </div>
        
        {isPlaying ? (
          <div className="flex items-end h-6 mr-3 playing-animation">
            <div style={{ animationDelay: "0s", height: "5px" }}></div>
            <div style={{ animationDelay: "0.2s", height: "12px" }}></div>
            <div style={{ animationDelay: "0.4s", height: "8px" }}></div>
          </div>
        ) : null}
        
        <div className="flex items-center">
          <button 
            className="h-8 w-8 flex items-center justify-center mr-1.5"
            onClick={togglePlay}
          >
            {isPlaying ? 
              <Pause size={20} className="text-white" /> : 
              <Play size={20} className="text-white" fill="white" />
            }
          </button>
          
          <button className="h-8 w-8 flex items-center justify-center">
            <SkipForward size={20} className="text-white" />
          </button>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="h-1 bg-white/20 w-full">
        <div className="h-full bg-spotify-green" style={{ width: '38%' }}></div>
      </div>
    </motion.div>
  );
};

export default NowPlayingBar;
