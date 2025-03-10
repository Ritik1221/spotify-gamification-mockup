
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Search, Library, User, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const BottomNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <motion.nav 
      className="fixed bottom-0 left-0 right-0 z-50 bg-spotify-black/90 backdrop-blur-lg border-t border-white/10 py-2"
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="flex justify-around items-center max-w-lg mx-auto px-2">
        <NavLink 
          to="/"
          className={({ isActive }) => 
            `flex flex-col items-center pt-1 pb-0.5 w-16 ${isActive ? 'text-white' : 'text-spotify-muted'}`
          }
        >
          {({ isActive }) => (
            <>
              <Home 
                size={22} 
                className={isActive ? 'text-white' : 'text-spotify-muted'} 
                fill={isActive ? 'white' : 'transparent'}
              />
              <span className="text-xs mt-1 font-medium">Home</span>
            </>
          )}
        </NavLink>
        
        <NavLink 
          to="/search"
          className={({ isActive }) => 
            `flex flex-col items-center pt-1 pb-0.5 w-16 ${isActive ? 'text-white' : 'text-spotify-muted'}`
          }
        >
          {({ isActive }) => (
            <>
              <Search 
                size={22} 
                className={isActive ? 'text-white' : 'text-spotify-muted'} 
              />
              <span className="text-xs mt-1 font-medium">Search</span>
            </>
          )}
        </NavLink>
        
        <NavLink 
          to="/playlists"
          className={({ isActive }) => 
            `flex flex-col items-center pt-1 pb-0.5 w-16 ${isActive ? 'text-white' : 'text-spotify-muted'}`
          }
        >
          {({ isActive }) => (
            <>
              <Library 
                size={22} 
                className={isActive ? 'text-white' : 'text-spotify-muted'} 
              />
              <span className="text-xs mt-1 font-medium">Library</span>
            </>
          )}
        </NavLink>
        
        <NavLink 
          to="/connect"
          className={({ isActive }) => 
            `flex flex-col items-center pt-1 pb-0.5 w-16 ${isActive ? 'text-white' : 'text-spotify-muted'}`
          }
        >
          {({ isActive }) => (
            <>
              <User 
                size={22} 
                className={isActive ? 'text-white' : 'text-spotify-muted'} 
              />
              <span className="text-xs mt-1 font-medium">Friends</span>
            </>
          )}
        </NavLink>
        
        <NavLink 
          to="/leaderboard"
          className={({ isActive }) => 
            `flex flex-col items-center pt-1 pb-0.5 w-16 ${isActive ? 'text-white' : 'text-spotify-muted'}`
          }
        >
          {({ isActive }) => (
            <>
              <Trophy 
                size={22} 
                className={isActive ? 'text-white' : 'text-spotify-muted'} 
              />
              <span className="text-xs mt-1 font-medium">Missions</span>
            </>
          )}
        </NavLink>
      </div>
    </motion.nav>
  );
};

export default BottomNav;
