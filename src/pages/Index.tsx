
import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';
import DailyChallenge from '@/components/features/DailyChallenge';
import MusicCard from '@/components/common/MusicCard';
import Badge from '@/components/common/Badge';
import AnimatedTransition from '@/components/common/AnimatedTransition';
import { Flame, Trophy, Music, Users, Heart, Star, Clock, Sparkles, Radio, Calendar, BarChart4, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import Avatar from '@/components/common/Avatar';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    // Set greeting time
    const now = new Date();
    const hours = now.getHours();
    let timeGreeting = "Good morning";
    
    if (hours >= 12 && hours < 17) {
      timeGreeting = "Good afternoon";
    } else if (hours >= 17) {
      timeGreeting = "Good evening";
    }
    
    setCurrentTime(timeGreeting);
    
    return () => clearTimeout(timer);
  }, []);

  const recentlyPlayed = [
    {
      id: '1',
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36',
      lastPlayed: '2 hrs ago'
    },
    {
      id: '2',
      title: 'Levitating',
      artist: 'Dua Lipa',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b273d4daf28d55fe4197ede848be',
      lastPlayed: '1 day ago'
    },
    {
      id: '3',
      title: 'Peaches',
      artist: 'Justin Bieber',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b273e6f407c7f3a0ec98845e4431',
      lastPlayed: '3 days ago'
    },
    {
      id: '4',
      title: 'Stay',
      artist: 'The Kid LAROI, Justin Bieber',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b273f10f5791254c53147cf9e141',
      lastPlayed: 'Yesterday'
    }
  ];
  
  const topPlaylists = [
    {
      id: 'p1',
      title: 'Today\'s Top Hits',
      description: 'New music from Taylor Swift, Drake and more',
      coverUrl: 'https://i.scdn.co/image/ab67706f00000002b1a8d8a8952d7529fff72234'
    },
    {
      id: 'p2',
      title: 'RapCaviar',
      description: 'Hip-hop\'s heavyweight playlist',
      coverUrl: 'https://i.scdn.co/image/ab67706f00000002b101421957a2d0fc6bf3e88f'
    },
    {
      id: 'p3',
      title: 'Mood Booster',
      description: 'Get happy with this playlist',
      coverUrl: 'https://i.scdn.co/image/ab67706f00000002bd0e19e810bb4b55ab164a95'
    }
  ];
  
  const friendActivity = [
    {
      id: 'f1',
      name: 'Sarah',
      avatar: 'https://i.pravatar.cc/150?img=5',
      song: 'Electric Feel',
      artist: 'MGMT',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b273658df976605570d12a386ebd',
      timestamp: 'Just now'
    },
    {
      id: 'f2',
      name: 'Mike',
      avatar: 'https://i.pravatar.cc/150?img=12',
      song: 'Starboy',
      artist: 'The Weeknd',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b273a048415db06a5b6fa7ec4e1a',
      timestamp: '15 min ago'
    }
  ];
  
  const madeForYou = [
    {
      id: 'mix1',
      title: 'Daily Mix 1',
      description: 'Lana Del Rey, The Marias and more',
      coverUrl: 'https://seed-mix-image.spotifycdn.com/v6/img/desc/pop/1/en/default'
    },
    {
      id: 'mix2',
      title: 'Release Radar',
      description: 'New releases from artists you follow',
      coverUrl: 'https://i.scdn.co/image/ab67706f000000025cb7c5c9760d5ac8c0eabd5a'
    },
    {
      id: 'mix3',
      title: 'Discover Weekly',
      description: 'New music recommendation every Monday',
      coverUrl: 'https://i.scdn.co/image/ab67706f0000000278b8aa3cf87417dbbd4445bb'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-spotify-black to-spotify-dark pb-20">
      <Header 
        title={`${currentTime}, Priya!`} 
        showSearch={true}
        showNotification={true}
        showProfile={true}
      />
      
      <main className="px-4 pt-2 pb-24">
        <AnimatedTransition animation="fade" delay={0.1}>
          {/* Quick Links */}
          <section className="mb-6">
            <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none">
              <motion.div 
                className="flex-shrink-0 bg-spotify-light/80 backdrop-blur-sm px-4 py-2.5 rounded-full flex items-center shadow-sm border border-white/5"
                whileTap={{ scale: 0.97 }}
              >
                <Star size={14} className="mr-1.5 text-spotify-green" />
                <span className="text-xs font-medium whitespace-nowrap">Made for You</span>
              </motion.div>
              <motion.div 
                className="flex-shrink-0 bg-spotify-light/80 backdrop-blur-sm px-4 py-2.5 rounded-full flex items-center shadow-sm border border-white/5"
                whileTap={{ scale: 0.97 }}
              >
                <Clock size={14} className="mr-1.5 text-spotify-muted" />
                <span className="text-xs font-medium whitespace-nowrap">Recently Played</span>
              </motion.div>
              <motion.div 
                className="flex-shrink-0 bg-spotify-light/80 backdrop-blur-sm px-4 py-2.5 rounded-full flex items-center shadow-sm border border-white/5"
                whileTap={{ scale: 0.97 }}
              >
                <Heart size={14} className="mr-1.5 text-red-500" />
                <span className="text-xs font-medium whitespace-nowrap">Your Favorites</span>
              </motion.div>
              <motion.div 
                className="flex-shrink-0 bg-spotify-light/80 backdrop-blur-sm px-4 py-2.5 rounded-full flex items-center shadow-sm border border-white/5"
                whileTap={{ scale: 0.97 }}
              >
                <Trophy size={14} className="mr-1.5 text-yellow-500" />
                <span className="text-xs font-medium whitespace-nowrap">Missions</span>
              </motion.div>
            </div>
          </section>
          
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
          
          {/* Friend Activity Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg flex items-center">
                <Users size={18} className="text-spotify-green mr-2" />
                Friend Activity
              </h2>
              <span className="text-xs text-spotify-muted">View All</span>
            </div>
            
            <div className="space-y-3">
              {friendActivity.map((friend) => (
                <motion.div 
                  key={friend.id}
                  className="bg-spotify-light/90 p-3 rounded-lg flex items-center border border-white/5"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Avatar 
                    src={friend.avatar} 
                    alt={friend.name} 
                    size="sm" 
                    status="online"
                  />
                  <div className="ml-3 flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{friend.name}</p>
                      <span className="text-xs text-spotify-muted">{friend.timestamp}</span>
                    </div>
                    <div className="flex items-center">
                      <p className="text-xs text-spotify-muted truncate">
                        Listening to <span className="text-white">{friend.song}</span> by {friend.artist}
                      </p>
                    </div>
                  </div>
                  <div className="ml-3 w-10 h-10 rounded-md flex-shrink-0 overflow-hidden">
                    <img src={friend.coverUrl} alt={friend.song} className="w-full h-full object-cover" />
                  </div>
                </motion.div>
              ))}
              
              <motion.button 
                className="w-full py-2.5 text-sm text-spotify-green border border-spotify-green/30 rounded-full flex items-center justify-center mt-2 bg-spotify-green/10"
                whileHover={{ backgroundColor: 'rgba(29, 185, 84, 0.2)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Users size={15} className="mr-2" />
                Connect with more friends
              </motion.button>
            </div>
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
          
          {/* Made for You Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg flex items-center">
                <Sparkles size={18} className="text-spotify-green mr-2" />
                Made For You
              </h2>
              <span className="text-xs text-spotify-muted">View All</span>
            </div>
            
            <div className="overflow-x-auto scrollbar-none -mx-4 px-4">
              <div className="flex space-x-4 pb-4">
                {madeForYou.map((mix) => (
                  <motion.div 
                    key={mix.id} 
                    className="flex-shrink-0 w-36"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="rounded-md overflow-hidden bg-spotify-light mb-2 shadow-md">
                      <img 
                        src={mix.coverUrl} 
                        alt={mix.title} 
                        className="w-full h-36 object-cover"
                      />
                    </div>
                    <h3 className="font-medium text-sm truncate">{mix.title}</h3>
                    <p className="text-xs text-spotify-muted truncate">{mix.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Recently Played */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg flex items-center">
                <Clock size={18} className="text-spotify-green mr-2" />
                Jump Back In
              </h2>
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
          
          {/* Popular Playlists */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg flex items-center">
                <Radio size={18} className="text-spotify-green mr-2" />
                Popular Playlists
              </h2>
              <span className="text-xs text-spotify-muted">View All</span>
            </div>
            
            <div className="space-y-3">
              {topPlaylists.map((playlist) => (
                <motion.div 
                  key={playlist.id}
                  className="flex items-center p-2.5 bg-spotify-light/70 rounded-lg"
                  whileHover={{ backgroundColor: 'rgba(40, 40, 40, 0.9)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 rounded-md overflow-hidden shadow-md">
                    <img src={playlist.coverUrl} alt={playlist.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="ml-3 flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{playlist.title}</p>
                    <p className="text-xs text-spotify-muted truncate">{playlist.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
          
          {/* Events */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg flex items-center">
                <Calendar size={18} className="text-spotify-green mr-2" />
                Upcoming Events
              </h2>
              <span className="text-xs text-spotify-muted">View All</span>
            </div>
            
            <motion.div 
              className="relative overflow-hidden rounded-xl bg-gradient-to-tr from-purple-500/30 to-purple-700/30 p-4 border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative z-10 flex items-start">
                <div className="mr-4 bg-black/40 p-2 rounded-lg">
                  <Calendar size={36} className="text-purple-400" />
                  <div className="text-center mt-1">
                    <span className="text-xs font-bold">18</span>
                    <span className="text-xs block">MAY</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold">Taylor Swift: The Eras Tour</h3>
                  <p className="text-sm text-spotify-muted mt-1">Virtual listening party with friends</p>
                  <div className="flex items-center mt-3">
                    <div className="flex -space-x-2">
                      <Avatar src="https://i.pravatar.cc/150?img=1" alt="User" size="sm" className="border-2 border-spotify-dark" />
                      <Avatar src="https://i.pravatar.cc/150?img=2" alt="User" size="sm" className="border-2 border-spotify-dark" />
                      <Avatar src="https://i.pravatar.cc/150?img=3" alt="User" size="sm" className="border-2 border-spotify-dark" />
                    </div>
                    <span className="text-xs text-spotify-muted ml-2">+24 friends going</span>
                  </div>
                </div>
              </div>
              
              <button className="mt-3 bg-white/10 hover:bg-white/20 transition-colors py-1.5 px-4 rounded-full text-sm font-medium">
                Join Event
              </button>
              
              <motion.div 
                className="absolute -bottom-12 -right-12 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
              />
            </motion.div>
          </section>
          
          {/* Listening Goals */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg flex items-center">
                <BarChart4 size={18} className="text-spotify-green mr-2" />
                Your Listening Goals
              </h2>
              <span className="text-xs text-spotify-muted">View Stats</span>
            </div>
            
            <div className="bg-spotify-light/80 rounded-lg p-4 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-spotify-green/20 flex items-center justify-center">
                    <Headphones size={20} className="text-spotify-green" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">Weekly Listening</h3>
                    <p className="text-xs text-spotify-muted">Goal: 10 hours</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium">6.2h</span>
                  <p className="text-xs text-spotify-muted">62% complete</p>
                </div>
              </div>
              
              <div className="h-2 w-full bg-spotify-dark rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-spotify-green/80 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '62%' }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              
              <div className="mt-4 flex items-center">
                <span className="text-xs text-spotify-muted flex items-center">
                  <Flame size={12} className="text-yellow-500 mr-1" />
                  3 day streak
                </span>
                <span className="text-xs text-spotify-muted ml-auto">3.8h left to reach goal</span>
              </div>
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
                <h2 className="font-bold text-lg">Up For An Exciting Mission?</h2>
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
