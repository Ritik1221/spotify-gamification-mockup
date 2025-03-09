
import React from 'react';
import { Home, Search, Radio, Users, Trophy } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const BottomNav: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Search', path: '/search' },
    { icon: Users, label: 'Friends', path: '/connect' },
    { icon: Trophy, label: 'Leaderboard', path: '/leaderboard' },
    { icon: Radio, label: 'Library', path: '/playlists' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav 
      className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-t border-white/10 z-10 px-2 py-2"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.3, duration: 0.3 }}
    >
      <div className="flex items-center justify-between">
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path}
            className="flex flex-col items-center justify-center px-3 py-1 relative"
          >
            <div 
              className={`p-1.5 rounded-full ${
                isActive(item.path) 
                  ? 'text-spotify-green' 
                  : 'text-spotify-muted hover:text-white transition-colors'
              }`}
            >
              <item.icon size={20} />
              {isActive(item.path) && (
                <motion.span 
                  className="absolute -top-1 left-1/2 w-1.5 h-1.5 bg-spotify-green rounded-full"
                  layoutId="activeIndicator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  style={{ transform: 'translateX(-50%)' }}
                />
              )}
            </div>
            <span 
              className={`text-xs mt-0.5 ${
                isActive(item.path) 
                  ? 'text-spotify-green font-medium' 
                  : 'text-spotify-muted'
              }`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default BottomNav;
