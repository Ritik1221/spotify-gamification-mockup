
import React from 'react';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';
import AnimatedTransition from '@/components/common/AnimatedTransition';
import { User, Settings, Edit, FileText, Award, Trophy, Calendar, Clock, Heart, Music, Share2, ChevronRight, Headphones, BarChart4, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import Badge from '@/components/common/Badge';

const Profile = () => {
  const userProfile = {
    name: 'Priya',
    username: '@priyamusic',
    bio: 'Music enthusiast | Concert lover | Always exploring new sounds',
    profileImage: 'https://i.pravatar.cc/300?img=25',
    coverImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    followers: 248,
    following: 187,
    joinDate: 'January 2022',
    location: 'Seattle, WA'
  };
  
  const listeningStats = {
    topGenre: 'Pop',
    monthlyListeningTime: '42h 30m',
    artistsDiscovered: 18,
    songsLiked: 327
  };
  
  const achievements = [
    {
      id: 'a1',
      name: 'Early Adopter',
      icon: <Award size={16} />,
      description: 'Joined within the first month of launch',
      date: 'Jan 15, 2022',
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-400'
    },
    {
      id: 'a2',
      name: 'Playlist Master',
      icon: <Music size={16} />,
      description: 'Created 10 playlists with at least 20 songs each',
      date: 'Mar 3, 2022',
      iconBg: 'bg-purple-500/20',
      iconColor: 'text-purple-400'
    },
    {
      id: 'a3',
      name: '30-Day Streak',
      icon: <Calendar size={16} />,
      description: 'Listened to music for 30 days straight',
      date: 'Apr 22, 2022',
      iconBg: 'bg-red-500/20',
      iconColor: 'text-red-400'
    },
    {
      id: 'a4',
      name: 'Tastemaker',
      icon: <Trophy size={16} />,
      description: 'Shared music that 50+ people listened to',
      date: 'Jul 10, 2022',
      iconBg: 'bg-green-500/20',
      iconColor: 'text-green-400'
    },
    {
      id: 'a5',
      name: 'Genre Explorer',
      icon: <Headphones size={16} />,
      description: 'Listened to 15 different genres',
      date: 'Aug 5, 2022',
      iconBg: 'bg-yellow-500/20',
      iconColor: 'text-yellow-400'
    }
  ];
  
  const badges = [
    {
      id: 'b1',
      name: 'Melody Master',
      image: '🎵',
      level: 3
    },
    {
      id: 'b2',
      name: 'Rising Star',
      image: '⭐',
      level: 2
    },
    {
      id: 'b3',
      name: 'Social Butterfly',
      image: '🦋',
      level: 4
    },
    {
      id: 'b4',
      name: 'Beat Keeper',
      image: '🥁',
      level: 1
    },
    {
      id: 'b5',
      name: 'Early Bird',
      image: '🐦',
      level: 5
    },
    {
      id: 'b6',
      name: 'Playlist Pro',
      image: '📝',
      level: 3
    }
  ];
  
  const recentActivity = [
    {
      id: 'act1',
      type: 'liked',
      content: 'Liked the song "Anti-Hero" by Taylor Swift',
      time: '2 hours ago',
      icon: <Heart size={16} className="text-red-400" />
    },
    {
      id: 'act2',
      type: 'playlist',
      content: 'Created playlist "Summer Vibes 2023"',
      time: '1 day ago',
      icon: <Music size={16} className="text-blue-400" />
    },
    {
      id: 'act3',
      type: 'followed',
      content: 'Started following Ariana Grande',
      time: '3 days ago',
      icon: <Users size={16} className="text-green-400" />
    },
    {
      id: 'act4',
      type: 'achievement',
      content: 'Earned "Weekly Listener" badge',
      time: '1 week ago',
      icon: <Trophy size={16} className="text-yellow-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-spotify-black to-spotify-dark pb-20">
      <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url(${userProfile.coverImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-spotify-black/80" />
        <Header 
          showBack={true}
          showNotification={true}
          showSearch={false}
          transparent={true}
        />
      </div>
      
      <main className="px-4 pb-24 relative">
        <AnimatedTransition animation="fade" delay={0.1}>
          {/* Profile Header */}
          <section className="relative -mt-16 mb-6">
            <div className="flex items-end">
              <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-spotify-black bg-spotify-black">
                <img 
                  src={userProfile.profileImage} 
                  alt={userProfile.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 ml-4 mb-3">
                <h1 className="text-xl font-bold">{userProfile.name}</h1>
                <p className="text-sm text-spotify-muted">{userProfile.username}</p>
              </div>
              
              <motion.button 
                className="bg-spotify-light/60 p-2 rounded-full flex-shrink-0 mb-3"
                whileTap={{ scale: 0.9 }}
              >
                <Settings size={20} />
              </motion.button>
            </div>
            
            <p className="text-sm text-spotify-muted mt-3 ml-1">{userProfile.bio}</p>
            
            <div className="flex items-center mt-3 ml-1 text-sm">
              <span className="mr-4">{userProfile.followers} followers</span>
              <span>{userProfile.following} following</span>
            </div>
            
            <div className="flex gap-2 mt-3">
              <motion.button 
                className="flex-1 py-2 bg-spotify-green text-black rounded-full text-sm font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Edit Profile
              </motion.button>
              <motion.button 
                className="p-2 bg-spotify-light/60 rounded-full"
                whileTap={{ scale: 0.9 }}
              >
                <Share2 size={20} />
              </motion.button>
            </div>
          </section>
          
          {/* Stats Card */}
          <section className="mb-6">
            <motion.div 
              className="bg-spotify-light/70 rounded-lg p-4 border border-white/10"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-bold text-base flex items-center">
                  <BarChart4 size={16} className="text-spotify-green mr-2" />
                  Listening Stats
                </h2>
                <button className="text-xs text-spotify-green">View Full Stats</button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/20 p-2.5 rounded-md">
                  <p className="text-xs text-spotify-muted">Top Genre</p>
                  <p className="font-medium mt-1">{listeningStats.topGenre}</p>
                </div>
                <div className="bg-black/20 p-2.5 rounded-md">
                  <p className="text-xs text-spotify-muted">Monthly Listening</p>
                  <p className="font-medium mt-1">{listeningStats.monthlyListeningTime}</p>
                </div>
                <div className="bg-black/20 p-2.5 rounded-md">
                  <p className="text-xs text-spotify-muted">Artists Discovered</p>
                  <p className="font-medium mt-1">{listeningStats.artistsDiscovered}</p>
                </div>
                <div className="bg-black/20 p-2.5 rounded-md">
                  <p className="text-xs text-spotify-muted">Songs Liked</p>
                  <p className="font-medium mt-1">{listeningStats.songsLiked}</p>
                </div>
              </div>
            </motion.div>
          </section>
          
          {/* Badges */}
          <section className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg flex items-center">
                <Trophy size={18} className="text-spotify-green mr-2" />
                Your Badges
              </h2>
              <span className="text-xs text-spotify-muted">View All</span>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {badges.map((badge) => (
                <motion.div 
                  key={badge.id}
                  className="bg-spotify-light/70 rounded-lg p-3 flex flex-col items-center border border-white/5"
                  whileHover={{ y: -5, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="text-3xl mb-2">{badge.image}</div>
                  <h3 className="text-sm font-medium text-center">{badge.name}</h3>
                  <div className="mt-1.5 flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-1.5 h-1.5 rounded-full mx-0.5 ${
                          i < badge.level ? 'bg-spotify-green' : 'bg-spotify-muted/30'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-spotify-muted mt-1">Level {badge.level}</p>
                </motion.div>
              ))}
            </div>
          </section>
          
          {/* Achievements */}
          <section className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg flex items-center">
                <Award size={18} className="text-spotify-green mr-2" />
                Achievements
              </h2>
              <span className="text-xs text-spotify-muted">View All</span>
            </div>
            
            <div className="space-y-3">
              {achievements.slice(0, 3).map((achievement) => (
                <motion.div 
                  key={achievement.id}
                  className="bg-spotify-light/70 p-3 rounded-lg flex items-center border border-white/5"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className={`h-10 w-10 rounded-md ${achievement.iconBg} ${achievement.iconColor} flex items-center justify-center`}>
                    {achievement.icon}
                  </div>
                  <div className="ml-3 flex-1">
                    <h3 className="text-sm font-medium">{achievement.name}</h3>
                    <p className="text-xs text-spotify-muted">{achievement.description}</p>
                  </div>
                  <div className="ml-2 text-right">
                    <p className="text-xs text-spotify-muted">{achievement.date}</p>
                  </div>
                </motion.div>
              ))}
              
              <motion.button 
                className="w-full py-2.5 text-sm text-spotify-green border border-spotify-green/30 rounded-lg flex items-center justify-center mt-2 bg-spotify-green/10"
                whileTap={{ scale: 0.98 }}
              >
                View All Achievements
              </motion.button>
            </div>
          </section>
          
          {/* Recent Activity */}
          <section className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg flex items-center">
                <Clock size={18} className="text-spotify-green mr-2" />
                Recent Activity
              </h2>
            </div>
            
            <div className="space-y-3">
              {recentActivity.map((activity) => (
                <motion.div 
                  key={activity.id}
                  className="bg-spotify-light/60 p-3 rounded-lg flex items-center border border-white/5"
                  whileHover={{ backgroundColor: 'rgba(40, 40, 40, 0.9)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center">
                    {activity.icon}
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm">{activity.content}</p>
                    <p className="text-xs text-spotify-muted">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
          
          {/* Account Info */}
          <section className="space-y-2">
            <motion.div 
              className="bg-spotify-light/60 p-4 rounded-lg flex items-center justify-between border border-white/5"
              whileHover={{ backgroundColor: 'rgba(40, 40, 40, 0.9)' }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center">
                <User size={18} className="text-spotify-green mr-3" />
                <p className="text-sm">Account Settings</p>
              </div>
              <ChevronRight size={18} className="text-spotify-muted" />
            </motion.div>
            
            <motion.div 
              className="bg-spotify-light/60 p-4 rounded-lg flex items-center justify-between border border-white/5"
              whileHover={{ backgroundColor: 'rgba(40, 40, 40, 0.9)' }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center">
                <FileText size={18} className="text-spotify-green mr-3" />
                <p className="text-sm">Privacy Policy</p>
              </div>
              <ChevronRight size={18} className="text-spotify-muted" />
            </motion.div>
            
            <motion.div 
              className="bg-spotify-light/60 p-4 rounded-lg flex items-center justify-between border border-white/5"
              whileHover={{ backgroundColor: 'rgba(40, 40, 40, 0.9)' }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center">
                <Edit size={18} className="text-spotify-green mr-3" />
                <p className="text-sm">Help & Support</p>
              </div>
              <ChevronRight size={18} className="text-spotify-muted" />
            </motion.div>
          </section>
        </AnimatedTransition>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Profile;
