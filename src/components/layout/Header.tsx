
import React from 'react';
import { ChevronLeft, Bell, Search, User } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  showSearch?: boolean;
  showNotification?: boolean;
  showProfile?: boolean;
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  showBack = false,
  showSearch = false,
  showNotification = false,
  showProfile = false,
  transparent = false
}) => {
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className={`sticky top-0 z-10 px-4 py-3 ${transparent ? 'bg-transparent' : 'bg-spotify-black/80 backdrop-blur-md'}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {showBack && (
            <motion.button 
              className="mr-3 h-8 w-8 flex items-center justify-center rounded-full bg-spotify-light/80"
              onClick={handleBack}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} />
            </motion.button>
          )}
          
          {title && (
            <div>
              <h1 className="font-bold text-xl leading-tight">{title}</h1>
              {subtitle && <p className="text-xs text-spotify-muted">{subtitle}</p>}
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-3">
          {showSearch && (
            <Link to="/search">
              <motion.button 
                className="h-8 w-8 flex items-center justify-center rounded-full bg-spotify-light/80"
                whileTap={{ scale: 0.9 }}
              >
                <Search size={18} />
              </motion.button>
            </Link>
          )}
          
          {showNotification && (
            <motion.button 
              className="h-8 w-8 flex items-center justify-center rounded-full bg-spotify-light/80 relative"
              whileTap={{ scale: 0.9 }}
            >
              <Bell size={18} />
              <span className="absolute top-0 right-0 h-2 w-2 bg-spotify-green rounded-full"></span>
            </motion.button>
          )}
          
          {showProfile && (
            <Link to="/profile">
              <motion.button 
                className="h-8 w-8 flex items-center justify-center rounded-full bg-spotify-light/80 overflow-hidden"
                whileTap={{ scale: 0.9 }}
              >
                <User size={18} />
              </motion.button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
