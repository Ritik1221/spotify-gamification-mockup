
import React from 'react';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';
import Leaderboard from '@/components/features/Leaderboard';
import Badge from '@/components/common/Badge';
import AnimatedTransition from '@/components/common/AnimatedTransition';
import { Music, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

const LeaderboardPage = () => {
  const users = [
    {
      id: '1',
      name: 'Tara',
      avatar: 'https://i.pravatar.cc/150?img=1',
      points: 140,
      position: 1,
      positionChange: 'up'
    },
    {
      id: '2',
      name: 'Aditya',
      avatar: 'https://i.pravatar.cc/150?img=3',
      points: 115,
      position: 2,
      positionChange: 'none',
      isCurrentUser: true
    },
    {
      id: '3',
      name: 'Rishi',
      avatar: 'https://i.pravatar.cc/150?img=4',
      points: 110,
      position: 3,
      positionChange: 'down'
    },
    {
      id: '4',
      name: 'Sanya',
      avatar: 'https://i.pravatar.cc/150?img=5',
      points: 100,
      position: 4,
      positionChange: 'none'
    },
    {
      id: '5',
      name: 'Arjun',
      avatar: 'https://i.pravatar.cc/150?img=6',
      points: 90,
      position: 5,
      positionChange: 'up'
    },
    {
      id: '6',
      name: 'Kavya',
      avatar: 'https://i.pravatar.cc/150?img=7',
      points: 85,
      position: 6,
      positionChange: 'down'
    },
    {
      id: '7',
      name: 'Jay',
      avatar: 'https://i.pravatar.cc/150?img=8',
      points: 75,
      position: 7,
      positionChange: 'up'
    }
  ];

  const activityLog = [
    { id: '1', user: 'Aditya', action: 'completed a daily challenge', points: '+15', time: '2h ago' },
    { id: '2', user: 'Tara', action: 'rated 5 songs', points: '+10', time: '3h ago' },
    { id: '3', user: 'Rishi', action: 'maintained a 7-day streak', points: '+25', time: '5h ago' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-spotify-black to-spotify-dark pb-20">
      <Header 
        title="Leaderboard" 
        subtitle="See where you rank"
        showSearch={false}
        showProfile={true}
      />
      
      <main className="px-4 pt-2 pb-24">
        <AnimatedTransition>
          {/* User Stats */}
          <section className="mb-6">
            <motion.div 
              className="bg-spotify-light rounded-xl p-4 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-base">Your Stats</h3>
                <Badge text="Top 10%" variant="success" size="sm" />
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center w-8 h-8 mx-auto rounded-full bg-spotify-green/20 text-spotify-green mb-1">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <span className="text-xs text-spotify-muted">Rank</span>
                </div>
                
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center w-8 h-8 mx-auto rounded-full bg-blue-500/20 text-blue-400 mb-1">
                    <span className="text-sm font-bold">115</span>
                  </div>
                  <span className="text-xs text-spotify-muted">Points</span>
                </div>
                
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center w-8 h-8 mx-auto rounded-full bg-yellow-500/20 text-yellow-400 mb-1">
                    <Flame size={16} />
                  </div>
                  <span className="text-xs text-spotify-muted">5 Day Streak</span>
                </div>
              </div>
            </motion.div>
          </section>
          
          {/* Main Leaderboard */}
          <section className="mb-6">
            <Leaderboard 
              users={users}
              title="Weekly Challenge"
            />
          </section>
          
          {/* Recent Activity */}
          <section>
            <div className="mb-3">
              <h2 className="font-bold text-lg">Recent Activity</h2>
            </div>
            
            <motion.div 
              className="bg-spotify-light rounded-xl overflow-hidden border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {activityLog.map((activity, index) => (
                <motion.div 
                  key={activity.id}
                  className={`p-3 ${index < activityLog.length - 1 ? 'border-b border-white/5' : ''}`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium">{activity.user}</span>
                      <span className="text-spotify-muted"> {activity.action}</span>
                    </div>
                    <div className="text-spotify-green text-sm font-medium">
                      {activity.points}
                    </div>
                  </div>
                  <div className="text-xs text-spotify-muted mt-1">
                    {activity.time}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </AnimatedTransition>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default LeaderboardPage;
