
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-spotify-black to-spotify-dark p-4">
      <motion.div 
        className="max-w-md w-full rounded-xl bg-spotify-light border border-white/10 overflow-hidden shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-6">
          <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-red-500/20 text-red-400 mb-4">
            <X size={32} />
          </div>
          
          <h1 className="text-2xl font-bold text-center mb-2">Page Not Found</h1>
          
          <p className="text-spotify-muted text-center mb-6">
            The page you're looking for doesn't seem to exist in our playlist.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="/" 
              className="inline-flex items-center justify-center rounded-full bg-spotify-green text-black py-3 px-6 font-medium text-sm transition-transform hover:scale-105"
            >
              Back to Home
            </a>
          </div>
        </div>
        
        <div className="bg-spotify-dark/50 py-4 px-6 text-center">
          <p className="text-xs text-spotify-muted">
            Check out other features like daily challenges, collaborative playlists, and leaderboards!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
