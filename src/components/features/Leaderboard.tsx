import React from 'react';
import { cn } from '@/lib/utils';
import Avatar from '../common/Avatar';
import { Trophy, ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

interface LeaderboardUser {
  id: string;
  name: string;
  avatar: string;
  points: number;
  position: number;
  positionChange?: 'up' | 'down' | 'none';
  isCurrentUser?: boolean;
}

interface LeaderboardProps {
  users: LeaderboardUser[];
  title?: string;
  className?: string;
}

const Leaderboard: React.FC<LeaderboardProps> = ({
  users,
  title = "Leaderboard",
  className
}) => {
  // Sort users by position
  const sortedUsers = [...users].sort((a, b) => a.position - b.position);
  
  // Get top 3 users
  const topUsers = sortedUsers.slice(0, 3);
  
  // Get remaining users
  const otherUsers = sortedUsers.slice(3);

  return (
    <div className={cn("rounded-xl overflow-hidden bg-spotify-light shadow-lg", className)}>
      {title && (
        <div className="px-4 py-3 border-b border-white/10">
          <h2 className="font-bold text-lg">{title}</h2>
        </div>
      )}
      
      {/* Top 3 podium */}
      <div className="flex items-end justify-center py-6 px-4 bg-gradient-to-tr from-spotify-dark to-spotify-light">
        {topUsers.map((user, index) => {
          // Determine podium heights and positions
          const positions = [1, 0, 2]; // middle, left, right
          const heights = ['h-24', 'h-32', 'h-20'];
          const position = positions[index];
          
          return (
            <motion.div 
              key={user.id}
              className={cn(
                "flex flex-col items-center mx-2 relative",
                index === 1 ? 'order-2' : index === 0 ? 'order-1' : 'order-3'
              )}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <div className="relative mb-2">
                <Avatar 
                  src={user.avatar} 
                  alt={user.name}
                  size="lg"
                  isActive={user.isCurrentUser}
                  className={cn(user.isCurrentUser && "ring-2 ring-spotify-green")}
                />
                
                <div className={cn(
                  "absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                  index === 1 ? "bg-yellow-400 text-black" : 
                  index === 0 ? "bg-gray-300 text-black" : 
                  "bg-amber-700 text-white"
                )}>
                  {user.position}
                </div>
              </div>
              
              <p className="text-sm font-medium truncate max-w-[70px] text-center">
                {user.name}
              </p>
              
              <p className="text-xs text-spotify-muted mt-1">
                {user.points} pts
              </p>
              
              <div 
                className={cn(
                  "w-16 rounded-t-md mt-2 flex items-center justify-center",
                  heights[index],
                  index === 1 ? "bg-yellow-400/20 border-t-2 border-yellow-400" : 
                  index === 0 ? "bg-gray-300/20 border-t-2 border-gray-300" : 
                  "bg-amber-700/20 border-t-2 border-amber-700"
                )}
              >
                <Trophy 
                  size={20} 
                  className={cn(
                    index === 1 ? "text-yellow-400" : 
                    index === 0 ? "text-gray-300" : 
                    "text-amber-700"
                  )} 
                />
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Other rankings */}
      <div className="px-4 py-2">
        {otherUsers.map((user, index) => (
          <motion.div 
            key={user.id}
            className={cn(
              "flex items-center py-3 px-2 rounded-lg",
              user.isCurrentUser ? "bg-spotify-green/10" : "hover:bg-white/5",
              index < otherUsers.length - 1 && "border-b border-white/5"
            )}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.05, duration: 0.2 }}
          >
            <div className="flex items-center justify-center w-6 mr-3">
              <span 
                className={cn(
                  "font-medium text-sm",
                  user.isCurrentUser ? "text-spotify-green" : "text-spotify-muted"
                )}
              >
                {user.position}
              </span>
            </div>
            
            <Avatar 
              src={user.avatar} 
              alt={user.name} 
              size="sm"
              isActive={user.isCurrentUser}
            />
            
            <div className="ml-3 flex-1 min-w-0">
              <p className={cn(
                "text-sm font-medium truncate",
                user.isCurrentUser && "text-spotify-green"
              )}>
                {user.name}
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">{user.points}</span>
              
              <div className={cn(
                "flex items-center justify-center",
                user.positionChange === 'up' ? "text-green-400" :
                user.positionChange === 'down' ? "text-red-400" :
                "text-spotify-muted"
              )}>
                {user.positionChange === 'up' && <ArrowUp size={16} />}
                {user.positionChange === 'down' && <ArrowDown size={16} />}
                {user.positionChange === 'none' && <Minus size={16} />}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
