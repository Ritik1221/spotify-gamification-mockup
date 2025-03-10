
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';
import AnimatedTransition from '@/components/common/AnimatedTransition';
import Avatar from '@/components/common/Avatar';
import Badge from '@/components/common/Badge';
import { Users, Calendar, Search, Music, Headphones, Plus, Heart, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const Connect = () => {
  const [activeTab, setActiveTab] = useState('friends');

  const friendActivity = [
    {
      id: 'f1',
      name: 'Sarah Johnson',
      avatar: 'https://i.pravatar.cc/150?img=5',
      song: 'Electric Feel',
      artist: 'MGMT',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b273658df976605570d12a386ebd',
      timestamp: 'Just now',
      status: 'online'
    },
    {
      id: 'f2',
      name: 'Mike Chen',
      avatar: 'https://i.pravatar.cc/150?img=12',
      song: 'Starboy',
      artist: 'The Weeknd',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b273a048415db06a5b6fa7ec4e1a',
      timestamp: '15 min ago',
      status: 'online'
    },
    {
      id: 'f3',
      name: 'Emma Rodriguez',
      avatar: 'https://i.pravatar.cc/150?img=29',
      song: 'Levitating',
      artist: 'Dua Lipa',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b27345e03a32e7952d7222d1a0bc',
      timestamp: '2 hours ago',
      status: 'away'
    },
    {
      id: 'f4',
      name: 'John Smith',
      avatar: 'https://i.pravatar.cc/150?img=8',
      song: 'As It Was',
      artist: 'Harry Styles',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b2739e4a3c9e73ce2429c4d9e41d',
      timestamp: '4 hours ago',
      status: 'offline'
    },
    {
      id: 'f5',
      name: 'Olivia Kim',
      avatar: 'https://i.pravatar.cc/150?img=47',
      song: 'good 4 u',
      artist: 'Olivia Rodrigo',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a',
      timestamp: 'Yesterday',
      status: 'offline'
    }
  ];

  const suggestedFriends = [
    {
      id: 's1',
      name: 'Alex Torres',
      avatar: 'https://i.pravatar.cc/150?img=33',
      mutualFriends: 4
    },
    {
      id: 's2',
      name: 'Jessica Lee',
      avatar: 'https://i.pravatar.cc/150?img=25',
      mutualFriends: 2
    },
    {
      id: 's3',
      name: 'David Wilson',
      avatar: 'https://i.pravatar.cc/150?img=53',
      mutualFriends: 7
    }
  ];

  const upcomingEvents = [
    {
      id: 'e1',
      title: 'Taylor Swift: The Eras Tour',
      description: 'Virtual listening party with friends',
      date: 'May 18',
      time: '8:00 PM',
      coverUrl: 'https://i.scdn.co/image/ab67706f00000002b84e0664e2c2d54f2865259f',
      attendees: 24,
      isVirtual: true
    },
    {
      id: 'e2',
      title: 'New Music Friday',
      description: 'Weekly group listening session',
      date: 'May 5',
      time: '5:00 PM',
      coverUrl: 'https://i.scdn.co/image/ab67706f00000002c62adfe1c8df8357e8aac5c3',
      attendees: 12,
      isVirtual: true
    },
    {
      id: 'e3',
      title: 'Jazz in the Park',
      description: 'Live music event at Central Park',
      date: 'May 20',
      time: '4:00 PM',
      coverUrl: 'https://i.scdn.co/image/ab67706f00000002c8c070cd5e3a5bb41a71fe8f',
      attendees: 35,
      isVirtual: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-spotify-black to-spotify-dark pb-20">
      <Header
        title="Connect"
        subtitle="Find friends and join events"
        showSearch={true}
        showNotification={true}
        showProfile={true}
      />

      <main className="px-4 pt-2 pb-24">
        <AnimatedTransition animation="fade" delay={0.1}>
          {/* Tab Navigation */}
          <div className="flex rounded-full bg-spotify-light/30 p-1 mb-6">
            <button
              className={`flex-1 py-2 px-4 rounded-full text-sm font-medium ${
                activeTab === 'friends' ? 'bg-spotify-green text-black' : 'text-white'
              }`}
              onClick={() => setActiveTab('friends')}
            >
              Friends
            </button>
            <button
              className={`flex-1 py-2 px-4 rounded-full text-sm font-medium ${
                activeTab === 'events' ? 'bg-spotify-green text-black' : 'text-white'
              }`}
              onClick={() => setActiveTab('events')}
            >
              Events
            </button>
          </div>

          {activeTab === 'friends' && (
            <>
              {/* Friend Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-spotify-muted" size={18} />
                <input
                  type="text"
                  placeholder="Search friends..."
                  className="w-full bg-spotify-light/50 rounded-full py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none"
                />
              </div>

              {/* Friend Activity Section */}
              <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-lg flex items-center">
                    <Users size={18} className="text-spotify-green mr-2" />
                    Friend Activity
                  </h2>
                  <Settings size={18} className="text-spotify-muted" />
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
                        status={friend.status as "online" | "offline" | "away"}
                      />
                      <div className="ml-3 flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">{friend.name}</p>
                          <span className="text-xs text-spotify-muted">{friend.timestamp}</span>
                        </div>
                        <div className="flex items-center">
                          <p className="text-xs text-spotify-muted truncate">
                            {friend.status === 'online' ? (
                              <>Listening to <span className="text-white">{friend.song}</span> by {friend.artist}</>
                            ) : (
                              <>Last played: <span className="text-white">{friend.song}</span> by {friend.artist}</>
                            )}
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

              {/* Suggested Friends */}
              <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-lg">Suggested Friends</h2>
                </div>
                
                <div className="space-y-3">
                  {suggestedFriends.map((friend) => (
                    <motion.div 
                      key={friend.id}
                      className="bg-spotify-light/50 p-3 rounded-lg flex items-center justify-between"
                      whileHover={{ backgroundColor: 'rgba(40, 40, 40, 0.8)' }}
                    >
                      <div className="flex items-center">
                        <Avatar 
                          src={friend.avatar} 
                          alt={friend.name} 
                          size="sm" 
                        />
                        <div className="ml-3">
                          <p className="text-sm font-medium">{friend.name}</p>
                          <p className="text-xs text-spotify-muted">{friend.mutualFriends} mutual friends</p>
                        </div>
                      </div>
                      <motion.button 
                        className="bg-white/10 hover:bg-white/20 p-1.5 rounded-full"
                        whileTap={{ scale: 0.9 }}
                      >
                        <Plus size={18} />
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </section>
            </>
          )}

          {activeTab === 'events' && (
            <>
              {/* Upcoming Events */}
              <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-lg flex items-center">
                    <Calendar size={18} className="text-spotify-green mr-2" />
                    Upcoming Events
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <motion.div 
                      key={event.id}
                      className="relative overflow-hidden rounded-xl bg-gradient-to-tr from-purple-500/30 to-purple-700/30 p-4 border border-white/10"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="relative z-10 flex items-start">
                        <div className="mr-4 bg-black/40 p-2 rounded-lg text-center min-w-16">
                          <Calendar size={24} className="text-purple-400 mx-auto" />
                          <div className="mt-1">
                            <span className="text-xs font-bold block">{event.date.split(' ')[1]}</span>
                            <span className="text-xs uppercase block">{event.date.split(' ')[0]}</span>
                          </div>
                          <span className="text-xs block mt-1">{event.time}</span>
                        </div>
                        
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-bold">{event.title}</h3>
                            {event.isVirtual && (
                              <Badge text="Virtual" variant="success" size="sm" className="ml-2" />
                            )}
                          </div>
                          <p className="text-sm text-spotify-muted mt-1">{event.description}</p>
                          <div className="flex items-center mt-3">
                            <div className="flex -space-x-2">
                              <Avatar src="https://i.pravatar.cc/150?img=1" alt="User" size="sm" className="border-2 border-spotify-dark" />
                              <Avatar src="https://i.pravatar.cc/150?img=2" alt="User" size="sm" className="border-2 border-spotify-dark" />
                              <Avatar src="https://i.pravatar.cc/150?img=3" alt="User" size="sm" className="border-2 border-spotify-dark" />
                            </div>
                            <span className="text-xs text-spotify-muted ml-2">+{event.attendees} going</span>
                          </div>
                          <button className="mt-3 bg-white/10 hover:bg-white/20 transition-colors py-1.5 px-4 rounded-full text-sm font-medium">
                            {event.isVirtual ? 'Join Event' : 'RSVP'}
                          </button>
                        </div>
                      </div>
                      
                      <motion.div 
                        className="absolute -bottom-12 -right-12 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                      />
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Create Event */}
              <section>
                <motion.div 
                  className="relative overflow-hidden rounded-xl bg-gradient-to-tr from-green-500/30 to-green-700/30 p-4 border border-white/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative z-10">
                    <h2 className="font-bold text-lg">Host Your Own Event</h2>
                    <p className="text-sm text-spotify-muted mt-1">Create a listening party or share your playlist with friends</p>
                    <button className="mt-4 bg-spotify-green text-black py-2 px-4 rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors">
                      Create Event
                    </button>
                  </div>
                  
                  <motion.div 
                    className="absolute -bottom-12 -right-12 w-40 h-40 bg-green-500/20 rounded-full blur-xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                  />
                </motion.div>
              </section>
            </>
          )}
        </AnimatedTransition>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Connect;
