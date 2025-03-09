
import React, { useState, useEffect } from 'react';
import { Search, Bell } from 'lucide-react';
import Avatar from '../common/Avatar';
import { motion } from 'framer-motion';

interface HeaderProps {
  title: string;
  subtitle?: string;
  showSearch?: boolean;
  showNotification?: boolean;
  showProfile?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  showSearch = true,
  showNotification = true,
  showProfile = true
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <motion.header 
      className={`sticky top-0 z-10 w-full px-4 py-3 flex items-center transition-all duration-300 ${
        scrolled ? 'nav-blur shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex-1">
        <h1 className="text-lg font-bold truncate">{title}</h1>
        {subtitle && (
          <p className="text-xs text-spotify-muted">{subtitle}</p>
        )}
      </div>
      
      <div className="flex items-center gap-4">
        {showSearch && (
          <button className="p-2 text-spotify-muted hover:text-spotify-text transition-colors">
            <Search size={20} />
          </button>
        )}
        
        {showNotification && (
          <div className="relative">
            <button className="p-2 text-spotify-muted hover:text-spotify-text transition-colors">
              <Bell size={20} />
            </button>
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-spotify-green text-xs font-medium text-black rounded-full">
                {notificationCount}
              </span>
            )}
          </div>
        )}
        
        {showProfile && (
          <Avatar 
            src="https://i.pravatar.cc/150?img=32" 
            alt="Profile" 
            size="sm"
            status="online"
          />
        )}
      </div>
    </motion.header>
  );
};

export default Header;
