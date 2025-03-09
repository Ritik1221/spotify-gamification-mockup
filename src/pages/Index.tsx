
import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';
import DailyChallenge from '@/components/features/DailyChallenge';
import MusicCard from '@/components/common/MusicCard';
import Badge from '@/components/common/Badge';
import AnimatedTransition from '@/components/common/AnimatedTransition';
import { Flame, Trophy, Music, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const recentlyPlayed = [
    {
      id: '1',
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36'
    },
    {
      id: '2',
      title: 'Levitating',
      artist: 'Dua Lipa',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b273d4daf28d55fe4197ede848be'
    },
    {
      id: '3',
      title: 'Peaches',
      artist: 'Justin Bieber',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b273e6f407c7f3a0ec98845e4431'
    },
    {
      id: '4',
      title: 'Stay',
      artist: 'The Kid LAROI, Justin Bieber',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b273f10f5791254c53147cf9e141'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-spotify-black to-spotify-dark pb-20">
      <Header 
        title="Good evening, Priya!" 
        showSearch={true}
        showNotification={true}
        showProfile={true}
      />
      
      <main className="px-4 pt-2 pb-24">
        <AnimatedTransition>
          {/* Daily Challenge */}
          <section className="mb-8">
            <DailyChallenge
              title="Daily Streak Challenge"
              description="Listen to 5 songs from your Discover Weekly"
              progress={60}
              streak={5}
              timeLeft="3 hours"
              reward="Earn a Melody Master badge"
              isCompleted={false}
            />
          </section>
          
          {/* Mission Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg flex items-center">
                <Trophy size={18} className="text-spotify-green mr-2" />
                Missions For You
              </h2>
              <span className="text-xs text-spotify-muted">View All</span>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <motion.div 
                className="bg-spotify-light p-3 rounded-lg border border-white/10"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 mb-2">
                  <Music size={18} />
                </div>
                <h3 className="font-medium text-sm">Rate 3 Songs</h3>
                <p className="text-xs text-spotify-muted mt-1">Unlock exclusive content</p>
                <div className="mt-2">
                  <Badge text="Easy" variant="success" size="sm" />
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-spotify-light p-3 rounded-lg border border-white/10"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500/20 text-yellow-400 mb-2">
                  <Flame size={18} />
                </div>
                <h3 className="font-medium text-sm">7-Day Streak</h3>
                <p className="text-xs text-spotify-muted mt-1">Listen every day this week</p>
                <div className="mt-2">
                  <Badge text="Ongoing" variant="streak" size="sm" />
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-spotify-light p-3 rounded-lg border border-white/10"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 mb-2">
                  <Users size={18} />
                </div>
                <h3 className="font-medium text-sm">Invite Friends</h3>
                <p className="text-xs text-spotify-muted mt-1">Get 2 weeks of Premium free</p>
                <div className="mt-2">
                  <Badge text="Reward" variant="new" size="sm" />
                </div>
              </motion.div>
              
              <motion.div 
                className="relative bg-spotify-light p-3 rounded-lg border border-white/10 overflow-hidden"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/20 text-green-400 mb-2">
                    <Trophy size={18} />
                  </div>
                  <h3 className="font-medium text-sm">Top Listener</h3>
                  <p className="text-xs text-spotify-muted mt-1">Join the leaderboard</p>
                  <div className="mt-2">
                    <Badge text="New" variant="new" size="sm" />
                  </div>
                </div>
                
                <motion.div 
                  className="absolute -top-8 -right-8 w-20 h-20 bg-green-500/10 rounded-full blur-xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.2, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                />
              </motion.div>
            </div>
          </section>
          
          {/* Recently Played */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg">Jump back in</h2>
              <span className="text-xs text-spotify-muted">View All</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {recentlyPlayed.map((item) => (
                <MusicCard
                  key={item.id}
                  title={item.title}
                  artist={item.artist}
                  coverUrl={item.coverUrl}
                  size="sm"
                  orientation="vertical"
                />
              ))}
            </div>
          </section>
          
          {/* Promotional Challenge */}
          <section>
            <motion.div 
              className="relative overflow-hidden rounded-xl bg-gradient-to-tr from-green-500/30 to-green-700/30 p-4 border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative z-10">
                <h2 className="font-bold text-lg">Up For A Exciting Mission?</h2>
                <p className="text-sm text-spotify-muted mt-1">Explore a new genre to earn rewards</p>
                <button className="mt-4 bg-spotify-green text-black py-2 px-4 rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors">
                  Start Now
                </button>
              </div>
              
              <motion.div 
                className="absolute -bottom-12 -right-12 w-40 h-40 bg-green-500/20 rounded-full blur-xl"
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

export default Index;
