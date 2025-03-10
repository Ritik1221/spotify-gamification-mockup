
import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';
import MusicCard from '@/components/common/MusicCard';
import AnimatedTransition from '@/components/common/AnimatedTransition';
import DailyChallenge from '@/components/features/DailyChallenge';
import { Star, Clock, Heart, Sparkles, Radio, Headphones, Music, Play } from 'lucide-react';
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

  const newReleases = [
    {
      id: 'n1',
      title: 'Fortnight',
      artist: 'Taylor Swift',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b273b5e3c0c7d3827246a70b8369',
    },
    {
      id: 'n2',
      title: 'We Can\'t Be Friends',
      artist: 'Ariana Grande',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b273ecc3c0d082ad884112819bfa',
    },
    {
      id: 'n3',
      title: 'Espresso',
      artist: 'Sabrina Carpenter',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b273bd6f7b9e6d888a88e6b8a775',
    },
  ];

  const featuredArtists = [
    {
      id: 'a1',
      name: 'Taylor Swift',
      genre: 'Pop',
      followers: '84.5M',
      image: 'https://i.scdn.co/image/ab6761610000e5eb5a00969a4698c3bc19d84821'
    },
    {
      id: 'a2',
      name: 'Drake',
      genre: 'Hip-Hop',
      followers: '72.3M',
      image: 'https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9'
    },
    {
      id: 'a3',
      name: 'Billie Eilish',
      genre: 'Pop',
      followers: '56.7M',
      image: 'https://i.scdn.co/image/ab6761610000e5eb7e5b63d826af6a79a9faa358'
    },
    {
      id: 'a4',
      name: 'The Weeknd',
      genre: 'R&B',
      followers: '68.2M',
      image: 'https://i.scdn.co/image/ab6761610000e5eb214f3cf1cbe7139c1e26ffbb'
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
                <Music size={14} className="mr-1.5 text-blue-400" />
                <span className="text-xs font-medium whitespace-nowrap">New Releases</span>
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
          
          {/* New Releases */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg flex items-center">
                <Music size={18} className="text-spotify-green mr-2" />
                New Releases
              </h2>
              <span className="text-xs text-spotify-muted">View All</span>
            </div>
            
            <div className="space-y-3">
              {newReleases.map((item) => (
                <motion.div 
                  key={item.id}
                  className="flex items-center bg-spotify-light/70 rounded-lg overflow-hidden"
                  whileHover={{ backgroundColor: 'rgba(40, 40, 40, 0.9)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="h-16 w-16 flex-shrink-0 relative group">
                    <img 
                      src={item.coverUrl} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity">
                      <button className="h-8 w-8 rounded-full bg-spotify-green flex items-center justify-center">
                        <Play size={16} className="text-black" />
                      </button>
                    </div>
                    <span className="absolute top-1 left-1 bg-spotify-green/90 text-black text-xs py-0.5 px-1.5 rounded-sm font-medium">NEW</span>
                  </div>
                  <div className="flex-1 p-3">
                    <h3 className="font-medium text-sm">{item.title}</h3>
                    <p className="text-xs text-spotify-muted">{item.artist}</p>
                  </div>
                </motion.div>
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
          
          {/* Featured Artists */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg flex items-center">
                <Headphones size={18} className="text-spotify-green mr-2" />
                Featured Artists
              </h2>
              <span className="text-xs text-spotify-muted">View All</span>
            </div>
            
            <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-none -mx-4 px-4">
              {featuredArtists.map((artist) => (
                <motion.div 
                  key={artist.id} 
                  className="flex-shrink-0 text-center w-24"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="mx-auto w-24 h-24 rounded-full overflow-hidden mb-2 bg-spotify-light shadow-lg">
                    <img 
                      src={artist.image} 
                      alt={artist.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium text-sm truncate">{artist.name}</h3>
                  <p className="text-xs text-spotify-muted truncate">{artist.genre} • {artist.followers} followers</p>
                </motion.div>
              ))}
            </div>
          </section>
          
          {/* Listening Stats */}
          <section>
            <motion.div 
              className="relative overflow-hidden rounded-xl bg-gradient-to-tr from-blue-500/30 to-purple-700/30 p-4 border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative z-10">
                <h2 className="font-bold text-lg">Your Listening Stats</h2>
                <p className="text-sm text-spotify-muted mt-1">You've listened to 234 songs this week</p>
                <button className="mt-4 bg-white/10 hover:bg-white/20 py-2 px-4 rounded-full text-sm font-medium transition-colors">
                  See Your Stats
                </button>
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

export default Index;
