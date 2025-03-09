
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Users, Import, Facebook, Phone, Music, Plus } from 'lucide-react';
import Avatar from '../common/Avatar';
import Badge from '../common/Badge';
import { motion } from 'framer-motion';

interface Friend {
  id: string;
  name: string;
  avatar: string;
  mutualFriends?: number;
  mutualTracks?: number;
  isNew?: boolean;
}

interface ConnectProps {
  friends: Friend[];
  onConnectContacts?: () => void;
  onConnectFacebook?: () => void;
  onFindMore?: () => void;
  className?: string;
}

const Connect: React.FC<ConnectProps> = ({
  friends,
  onConnectContacts,
  onConnectFacebook,
  onFindMore,
  className
}) => {
  const [showImportOptions, setShowImportOptions] = useState(false);

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Animation variants for items
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className={cn("space-y-4", className)}>
      {/* Connect buttons */}
      <motion.div 
        className="space-y-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button 
          onClick={() => setShowImportOptions(!showImportOptions)}
          className="w-full flex items-center justify-between p-4 rounded-xl bg-spotify-light border border-white/10 hover:bg-white/5 transition-colors"
        >
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-spotify-green/20 text-spotify-green mr-3">
              <Import size={20} />
            </div>
            <span className="font-medium">One-Click Import</span>
          </div>
          <Badge text="Fast" variant="success" size="sm" />
        </button>
        
        {showImportOptions && (
          <motion.div 
            className="space-y-2 pl-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button 
              className="w-full flex items-center justify-between p-3 rounded-xl bg-spotify-light/70 border border-white/5 hover:bg-white/5 transition-colors"
              variants={itemVariants}
              onClick={onConnectContacts}
            >
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 mr-3">
                  <Phone size={16} />
                </div>
                <span className="font-medium text-sm">Import Contacts</span>
              </div>
            </motion.button>
            
            <motion.button 
              className="w-full flex items-center justify-between p-3 rounded-xl bg-spotify-light/70 border border-white/5 hover:bg-white/5 transition-colors"
              variants={itemVariants}
              onClick={onConnectFacebook}
            >
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/20 text-blue-500 mr-3">
                  <Facebook size={16} />
                </div>
                <span className="font-medium text-sm">Connect Facebook</span>
              </div>
            </motion.button>
          </motion.div>
        )}
      </motion.div>
      
      {/* Friends list */}
      <div className="rounded-xl overflow-hidden bg-spotify-light border border-white/10">
        <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center">
            <Users size={18} className="text-spotify-muted mr-2" />
            <h2 className="font-bold">Friends on Spotify</h2>
          </div>
          <Badge text={`${friends.length}`} variant="default" size="sm" />
        </div>
        
        <motion.div 
          className="divide-y divide-white/5"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {friends.map((friend) => (
            <motion.div 
              key={friend.id}
              className="flex items-center p-4 hover:bg-white/5 transition-colors"
              variants={itemVariants}
            >
              <Avatar 
                src={friend.avatar} 
                alt={friend.name} 
                size="md"
              />
              
              <div className="ml-3 flex-1 min-w-0">
                <p className="font-medium truncate">
                  {friend.name}
                  {friend.isNew && (
                    <span className="ml-2">
                      <Badge text="New" variant="new" size="sm" />
                    </span>
                  )}
                </p>
                
                <div className="flex items-center mt-1 text-xs text-spotify-muted">
                  {friend.mutualFriends && (
                    <span className="flex items-center mr-3">
                      <Users size={12} className="mr-1" />
                      {friend.mutualFriends} mutual
                    </span>
                  )}
                  
                  {friend.mutualTracks && (
                    <span className="flex items-center">
                      <Music size={12} className="mr-1" />
                      {friend.mutualTracks} songs
                    </span>
                  )}
                </div>
              </div>
              
              <button className="ml-2 p-2 text-spotify-muted hover:text-spotify-green transition-colors">
                <Plus size={20} />
              </button>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="p-3 border-t border-white/10">
          <button 
            onClick={onFindMore}
            className="w-full py-2 px-4 rounded-full text-sm font-medium bg-white/10 hover:bg-white/15 transition-colors"
          >
            Find More Friends
          </button>
        </div>
      </div>
    </div>
  );
};

export default Connect;
