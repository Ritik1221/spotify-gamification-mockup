
import React from 'react';
import { cn } from '@/lib/utils';
import { Trophy, Star, Clock, Flame } from 'lucide-react';
import Badge from '../common/Badge';
import { motion } from 'framer-motion';

interface DailyChallengeProps {
  title: string;
  description: string;
  progress: number;
  streak: number;
  timeLeft?: string;
  reward?: string;
  isCompleted?: boolean;
  onClick?: () => void;
  className?: string;
}

const DailyChallenge: React.FC<DailyChallengeProps> = ({
  title,
  description,
  progress,
  streak,
  timeLeft,
  reward,
  isCompleted = false,
  onClick,
  className
}) => {
  return (
    <motion.div 
      className={cn(
        "relative overflow-hidden rounded-xl p-4",
        isCompleted ? "bg-gradient-to-tr from-spotify-green/20 to-green-700/20" : "bg-spotify-light",
        "border border-white/10 shadow-lg",
        "transition-transform duration-300 hover:translate-y-[-4px]",
        className
      )}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <div className="flex items-start gap-3">
        <div 
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full",
            isCompleted ? "bg-spotify-green text-black" : "bg-spotify-green/20 text-spotify-green"
          )}
        >
          <Trophy size={20} />
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-lg text-white">{title}</h3>
              <p className="text-sm text-spotify-muted mt-1">{description}</p>
            </div>
            
            {streak > 0 && (
              <Badge 
                text={`${streak} day streak`} 
                variant="streak" 
                size="sm"
                icon={<Flame size={12} />}
              />
            )}
          </div>
          
          <div className="mt-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-spotify-muted">Progress</span>
              <span className="text-xs font-medium">
                {isCompleted ? 'Completed' : `${progress}%`}
              </span>
            </div>
            <div className="h-2 w-full bg-spotify-dark rounded-full overflow-hidden">
              <motion.div 
                className={cn(
                  "h-full rounded-full",
                  isCompleted ? "bg-spotify-green" : "bg-spotify-green/80"
                )}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-3">
            {timeLeft && !isCompleted && (
              <div className="flex items-center text-xs text-spotify-muted">
                <Clock size={12} className="mr-1" />
                <span>{timeLeft} left</span>
              </div>
            )}
            
            {reward && (
              <div className="flex items-center text-xs text-yellow-400">
                <Star size={12} className="mr-1 fill-yellow-400" />
                <span>{reward}</span>
              </div>
            )}
            
            {isCompleted && (
              <motion.button 
                className="text-xs py-1 px-3 rounded-full bg-spotify-green/20 text-spotify-green"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 500, damping: 15 }}
              >
                Claim Reward
              </motion.button>
            )}
          </div>
        </div>
      </div>
      
      {/* Glow effect for completed challenges */}
      {isCompleted && (
        <motion.div 
          className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-spotify-green/30 blur-xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
      )}
    </motion.div>
  );
};

export default DailyChallenge;
