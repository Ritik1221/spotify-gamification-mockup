import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';
import LeaderboardComponent from '@/components/features/Leaderboard';
import Badge from '@/components/common/Badge';
import AnimatedTransition from '@/components/common/AnimatedTransition';
import { Filter, Users, Award, Clock } from 'lucide-react';
import { toast } from "sonner";
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

const LeaderboardPage = () => {
  const [activeFilter, setActiveFilter] = useState('friends');

  const leaderboardData: LeaderboardUser[] = [
    {
      id: 'u1',
      name: 'Raj',
      avatar: 'https://i.pravatar.cc/150?img=11',
      points: 1250,
      position: 1,
      positionChange: 'up'
    },
    {
      id: 'u2',
      name: 'Anita',
      avatar: 'https://i.pravatar.cc/150?img=5',
      points: 1120,
      position: 2,
      positionChange: 'up'
    },
    {
      id: 'u3',
      name: 'Vikram',
      avatar: 'https://i.pravatar.cc/150?img=12',
      points: 980,
      position: 3,
      positionChange: 'down'
    },
    {
      id: 'u4',
      name: 'Meera',
      avatar: 'https://i.pravatar.cc/150?img=10',
      points: 875,
      position: 4,
      positionChange: 'none'
    },
    {
      id: 'u5',
      name: 'Priya',
      avatar: 'https://i.pravatar.cc/150?img=32',
      points: 820,
      position: 5,
      positionChange: 'up',
      isCurrentUser: true
    },
    {
      id: 'u6',
      name: 'Arjun',
      avatar: 'https://i.pravatar.cc/150?img=15',
      points: 780,
      position: 6,
      positionChange: 'down'
    },
    {
      id: 'u7',
      name: 'Deepak',
      avatar: 'https://i.pravatar.cc/150?img=22',
      points: 695,
      position: 7,
      positionChange: 'none'
    }
  ];

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    toast.info(`Filter changed to ${filter}`);
  };

  const handleClaimReward = () => {
    toast.success("Reward claimed successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-spotify-black to-spotify-dark pb-20">
      <Header 
        title="Leaderboard" 
        showSearch={true}
        showNotification={true}
        showProfile={true}
      />
      
      <main className="px-4 pt-2 pb-24">
        <AnimatedTransition>
          {/* Filter Section */}
          <section className="mb-6">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-lg">Rankings</h2>
              <div className="flex items-center space-x-2">
                <button 
                  className={`flex items-center gap-1 text-xs py-2 px-4 rounded-full border border-white/10 transition-colors ${activeFilter === 'friends' ? 'bg-spotify-green text-black font-medium' : 'hover:bg-white/5 text-spotify-muted'}`}
                  onClick={() => handleFilterChange('friends')}
                >
                  <Users size={14} />
                  Friends
                </button>
                <button 
                  className={`flex items-center gap-1 text-xs py-2 px-4 rounded-full border border-white/10 transition-colors ${activeFilter === 'global' ? 'bg-spotify-green text-black font-medium' : 'hover:bg-white/5 text-spotify-muted'}`}
                  onClick={() => handleFilterChange('global')}
                >
                  <Award size={14} />
                  Global
                </button>
              </div>
            </div>
          </section>
          
          {/* Leaderboard */}
          <LeaderboardComponent 
            users={leaderboardData}
            className="mb-8"
          />
          
          {/* Rewards Section */}
          <section className="mb-8">
            <div className="bg-spotify-light rounded-xl p-4 border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-sm">Weekly Rewards</h3>
                <Badge text="Ends in 2d" variant="streak" size="sm" icon={<Clock size={12} />} />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-spotify-dark/50 rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-400 mx-auto mb-2">
                    <Award size={16} />
                  </div>
                  <h4 className="text-xs font-medium">Top 10</h4>
                  <p className="text-xs text-spotify-muted mt-1">Exclusive Badge</p>
                </div>
                
                <div className="bg-spotify-dark/50 rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20 text-green-400 mx-auto mb-2">
                    <Users size={16} />
                  </div>
                  <h4 className="text-xs font-medium">Top 50</h4>
                  <p className="text-xs text-spotify-muted mt-1">Community Shoutout</p>
                </div>
              </div>
              
              <button 
                className="w-full mt-4 py-2 px-4 rounded-full bg-spotify-green text-black text-sm font-medium hover:bg-opacity-90 transition-colors"
                onClick={handleClaimReward}
              >
                Claim Reward
              </button>
            </div>
          </section>
          
          {/* Promotional Content */}
          <motion.div 
            className="relative overflow-hidden rounded-xl bg-gradient-to-tr from-purple-500/30 to-purple-700/30 p-4 border border-white/10"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="relative z-10">
              <h2 className="font-bold text-lg">New Challenges Await</h2>
              <p className="text-sm text-spotify-muted mt-1">Compete in new challenges to climb the leaderboard</p>
              <button className="mt-4 bg-spotify-green text-black py-2 px-4 rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors">
                Explore Challenges
              </button>
            </div>
            
            <motion.div 
              className="absolute -bottom-12 -right-12 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            />
          </motion.div>
        </AnimatedTransition>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default LeaderboardPage;
