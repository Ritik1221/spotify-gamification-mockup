
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';
import AnimatedTransition from '@/components/common/AnimatedTransition';
import { Trophy, Star, Flame, Clock, Music, Users, Gift, Award, Calendar, ChevronRight, BarChart4 } from 'lucide-react';
import { motion } from 'framer-motion';
import Avatar from '@/components/common/Avatar';
import Badge from '@/components/common/Badge';

const Leaderboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'weekly' | 'monthly' | 'allTime'>('weekly');
  
  const periods = [
    { id: 'weekly', label: 'This Week' },
    { id: 'monthly', label: 'This Month' },
    { id: 'allTime', label: 'All Time' }
  ];
  
  const userRank = {
    position: 42,
    points: 1250,
    change: '+3'
  };
  
  const leaderboard = [
    {
      position: 1,
      name: 'Sarah J.',
      avatar: 'https://i.pravatar.cc/150?img=5',
      points: 3856,
      change: '0',
      badges: ['Tastemaker', 'Streak Master', 'Super Listener'],
      isFollowing: true
    },
    {
      position: 2,
      name: 'Michael T.',
      avatar: 'https://i.pravatar.cc/150?img=4',
      points: 3721,
      change: '+1',
      badges: ['Explorer', 'Streak Master'],
      isFollowing: false
    },
    {
      position: 3,
      name: 'Jessica K.',
      avatar: 'https://i.pravatar.cc/150?img=18',
      points: 3615,
      change: '-1',
      badges: ['Super Listener', 'Genre Master'],
      isFollowing: true
    },
    {
      position: 4,
      name: 'David R.',
      avatar: 'https://i.pravatar.cc/150?img=53',
      points: 3502,
      change: '+2',
      badges: ['Tastemaker', 'Explorer'],
      isFollowing: false
    },
    {
      position: 5,
      name: 'Emma L.',
      avatar: 'https://i.pravatar.cc/150?img=32',
      points: 3487,
      change: '0',
      badges: ['Genre Master', 'Early Adopter'],
      isFollowing: true
    }
  ];
  
  const missions = [
    {
      id: 'mission1',
      title: 'Music Explorer',
      description: 'Listen to 5 new genres this week',
      icon: <Music size={22} />,
      iconBg: 'bg-purple-500/20',
      iconColor: 'text-purple-400',
      progress: 60,
      reward: 150,
      difficulty: 'Easy'
    },
    {
      id: 'mission2',
      title: 'Social Butterfly',
      description: 'Connect with 3 new friends',
      icon: <Users size={22} />,
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
      progress: 33,
      reward: 200,
      difficulty: 'Medium'
    },
    {
      id: 'mission3',
      title: 'Daily Streaker',
      description: 'Listen every day for 7 days straight',
      icon: <Flame size={22} />,
      iconBg: 'bg-yellow-500/20',
      iconColor: 'text-yellow-400',
      progress: 85,
      reward: 300,
      difficulty: 'Hard'
    },
    {
      id: 'mission4',
      title: 'Artist Devotee',
      description: 'Listen to 20 songs from one artist',
      icon: <Star size={22} />,
      iconBg: 'bg-green-500/20',
      iconColor: 'text-green-400',
      progress: 45,
      reward: 175,
      difficulty: 'Medium'
    }
  ];
  
  const achievements = [
    {
      id: 'ach1',
      title: 'First Steps',
      description: 'Complete your first mission',
      icon: <Award size={22} />,
      iconBg: 'bg-green-500/20',
      iconColor: 'text-green-400',
      date: 'April 15, 2023',
      points: 50,
      unlocked: true
    },
    {
      id: 'ach2',
      title: 'Genre Explorer',
      description: 'Listen to 10 different genres',
      icon: <Music size={22} />,
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
      date: 'May 2, 2023',
      points: 100,
      unlocked: true
    },
    {
      id: 'ach3',
      title: 'Playlist Maestro',
      description: 'Create 5 playlists with at least 10 songs each',
      icon: <Star size={22} />,
      iconBg: 'bg-yellow-500/20',
      iconColor: 'text-yellow-400',
      date: null,
      points: 150,
      unlocked: false,
      progress: 60
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-spotify-black to-spotify-dark pb-20">
      <Header 
        title="Leaderboard" 
        subtitle="Missions & Achievements"
        showBack={true}
        showSearch={false}
        showNotification={true}
        showProfile={true}
      />
      
      <main className="px-4 pt-2 pb-24">
        <AnimatedTransition animation="fade" delay={0.1}>
          {/* User Standing */}
          <section className="mb-6">
            <motion.div 
              className="bg-spotify-light/70 rounded-lg p-4 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-lg font-bold mb-3">Your Standing</h2>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-spotify-green/20 flex items-center justify-center text-xl font-bold">
                  {userRank.position}
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex items-center">
                    <p className="font-medium">Priya</p>
                    <span className={`text-xs ml-2 px-2 py-0.5 rounded-full ${
                      userRank.change.startsWith('+') 
                        ? 'bg-green-500/20 text-green-400' 
                        : userRank.change === '0' 
                        ? 'bg-gray-500/20 text-gray-400' 
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {userRank.change}
                    </span>
                  </div>
                  <p className="text-xs text-spotify-muted mt-0.5 flex items-center">
                    <Trophy size={12} className="text-yellow-500 mr-1" />
                    {userRank.points} points
                  </p>
                </div>
                <motion.button 
                  className="bg-spotify-green text-black text-xs font-medium py-1.5 px-4 rounded-full"
                  whileTap={{ scale: 0.97 }}
                >
                  View Stats
                </motion.button>
              </div>
            </motion.div>
          </section>
          
          {/* Leaderboard Period Selector */}
          <section className="mb-6">
            <div className="flex bg-spotify-light/50 rounded-lg p-1">
              {periods.map((period) => (
                <button
                  key={period.id}
                  className={`flex-1 py-2 text-xs font-medium rounded-md ${
                    selectedPeriod === period.id 
                      ? 'bg-spotify-green text-black' 
                      : 'text-white'
                  }`}
                  onClick={() => setSelectedPeriod(period.id as 'weekly' | 'monthly' | 'allTime')}
                >
                  {period.label}
                </button>
              ))}
            </div>
          </section>
          
          {/* Leaderboard */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg flex items-center">
                <Trophy size={18} className="text-spotify-green mr-2" />
                Top Listeners
              </h2>
            </div>
            
            <div className="space-y-3">
              {leaderboard.map((user) => (
                <motion.div 
                  key={user.position}
                  className="flex items-center p-3 bg-spotify-light/70 rounded-lg border border-white/5"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="w-8 h-8 rounded-full bg-spotify-green/10 flex items-center justify-center font-bold text-sm">
                    {user.position}
                  </div>
                  <Avatar
                    src={user.avatar}
                    alt={user.name}
                    size="sm"
                    className="ml-3"
                  />
                  <div className="ml-3 flex-1">
                    <div className="flex items-center">
                      <p className="text-sm font-medium">{user.name}</p>
                      <Badge 
                        text={user.change === '0' ? 'no change' : user.change} 
                        variant={
                          user.change.startsWith('+') 
                            ? 'success' 
                            : user.change === '0' 
                            ? 'default' 
                            : 'new'
                        }
                        size="sm"
                        className="ml-2"
                      />
                    </div>
                    <div className="flex items-center mt-0.5">
                      <p className="text-xs text-spotify-muted mr-3">
                        <Trophy size={10} className="text-yellow-500 inline mr-1" />
                        {user.points} pts
                      </p>
                      <div className="flex">
                        {user.badges.slice(0, 2).map((badge, idx) => (
                          <span 
                            key={idx} 
                            className="text-xs bg-spotify-light rounded-full px-2 py-0.5 mr-1"
                          >
                            {badge}
                          </span>
                        ))}
                        {user.badges.length > 2 && (
                          <span className="text-xs text-spotify-muted">+{user.badges.length - 2}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button className={`ml-2 text-xs font-medium py-1.5 px-3 rounded-full ${
                    user.isFollowing 
                      ? 'bg-white/10 text-white' 
                      : 'bg-spotify-green text-black'
                  }`}>
                    {user.isFollowing ? 'Following' : 'Follow'}
                  </button>
                </motion.div>
              ))}
              
              <button className="w-full py-2.5 text-sm text-spotify-green border border-spotify-green/30 rounded-full flex items-center justify-center mt-2 bg-spotify-green/10">
                View Complete Leaderboard
              </button>
            </div>
          </section>
          
          {/* Missions */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg flex items-center">
                <Flame size={18} className="text-spotify-green mr-2" />
                Missions For You
              </h2>
              <span className="text-xs text-spotify-muted">View All</span>
            </div>
            
            <div className="space-y-3">
              {missions.map((mission) => (
                <motion.div 
                  key={mission.id}
                  className="bg-spotify-light/70 p-3 rounded-lg border border-white/5"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-md ${mission.iconBg} ${mission.iconColor} flex items-center justify-center`}>
                      {mission.icon}
                    </div>
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{mission.title}</h3>
                        <div className="flex items-center">
                          <Trophy size={12} className="text-yellow-500 mr-1" />
                          <span className="text-xs">{mission.reward} pts</span>
                        </div>
                      </div>
                      <p className="text-xs text-spotify-muted mt-0.5">{mission.description}</p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex-1 mr-3">
                          <div className="h-1.5 bg-spotify-dark rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-spotify-green rounded-full"
                              style={{ width: `${mission.progress}%` }}
                            />
                          </div>
                          <p className="text-xs text-spotify-muted mt-1">{mission.progress}% complete</p>
                        </div>
                        <Badge
                          text={mission.difficulty}
                          variant={
                            mission.difficulty === 'Easy' 
                              ? 'success' 
                              : mission.difficulty === 'Medium' 
                              ? 'default' 
                              : 'streak'
                          }
                          size="sm"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
          
          {/* Achievements */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg flex items-center">
                <Award size={18} className="text-spotify-green mr-2" />
                Achievements
              </h2>
              <span className="text-xs text-spotify-muted">View All</span>
            </div>
            
            <div className="space-y-3">
              {achievements.map((achievement) => (
                <motion.div 
                  key={achievement.id}
                  className={`bg-spotify-light/70 p-3 rounded-lg border ${
                    achievement.unlocked 
                      ? 'border-white/5' 
                      : 'border-dashed border-white/20'
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-md ${achievement.iconBg} ${achievement.iconColor} flex items-center justify-center ${
                      !achievement.unlocked && 'opacity-60'
                    }`}>
                      {achievement.icon}
                    </div>
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium flex items-center">
                          {achievement.title}
                          {achievement.unlocked && (
                            <Trophy size={12} className="text-yellow-500 ml-2" />
                          )}
                        </h3>
                        <div className="flex items-center">
                          <Star size={12} className="text-yellow-500 mr-1" />
                          <span className="text-xs">{achievement.points} pts</span>
                        </div>
                      </div>
                      <p className="text-xs text-spotify-muted mt-0.5">{achievement.description}</p>
                      
                      {achievement.unlocked ? (
                        <p className="text-xs text-spotify-muted mt-2 flex items-center">
                          <Calendar size={10} className="mr-1" />
                          Unlocked on {achievement.date}
                        </p>
                      ) : (
                        <div className="mt-2">
                          <div className="h-1.5 bg-spotify-dark rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-spotify-green/60 rounded-full"
                              style={{ width: `${achievement.progress}%` }}
                            />
                          </div>
                          <p className="text-xs text-spotify-muted mt-1">{achievement.progress}% progress</p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
          
          {/* Point Rewards */}
          <section>
            <motion.div 
              className="relative overflow-hidden rounded-xl bg-gradient-to-tr from-blue-500/30 to-purple-700/30 p-4 border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <h2 className="font-bold text-lg flex items-center">
                    <Gift size={18} className="text-spotify-green mr-2" />
                    Rewards Shop
                  </h2>
                  <BarChart4 size={18} className="text-spotify-green" />
                </div>
                <p className="text-sm text-spotify-muted mt-1">Redeem your points for exclusive rewards</p>
                
                <div className="mt-4 bg-black/20 px-3 py-2 rounded-md flex items-center justify-between">
                  <div>
                    <p className="text-sm">Your Points</p>
                    <p className="text-lg font-bold">{userRank.points} pts</p>
                  </div>
                  <button className="bg-spotify-green text-black text-xs font-medium py-1.5 px-4 rounded-full flex items-center">
                    View Rewards
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
              
              <motion.div 
                className="absolute -bottom-12 -right-12 w-40 h-40 bg-blue-500/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
              />
            </motion.div>
          </section>
        </AnimatedTransition>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Leaderboard;
