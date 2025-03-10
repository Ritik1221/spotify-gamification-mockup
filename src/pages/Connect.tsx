
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';
import AnimatedTransition from '@/components/common/AnimatedTransition';
import { Users, UserPlus, Calendar, Music, Bell, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import Avatar from '@/components/common/Avatar';
import Badge from '@/components/common/Badge';

const Connect = () => {
  const [activeTab, setActiveTab] = useState<'friends' | 'events'>('friends');
  
  const friends = [
    {
      id: 'f1',
      name: 'Sarah Johnson',
      avatar: 'https://i.pravatar.cc/150?img=5',
      song: 'Electric Feel',
      artist: 'MGMT',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b273658df976605570d12a386ebd',
      timestamp: 'Just now',
      status: 'online',
      mutualFriends: 12,
      mutualArtists: ['The Weeknd', 'Dua Lipa']
    },
    {
      id: 'f2',
      name: 'Mike Chen',
      avatar: 'https://i.pravatar.cc/150?img=12',
      song: 'Starboy',
      artist: 'The Weeknd',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b273a048415db06a5b6fa7ec4e1a',
      timestamp: '15 min ago',
      status: 'online',
      mutualFriends: 8,
      mutualArtists: ['Taylor Swift', 'Post Malone']
    },
    {
      id: 'f3',
      name: 'Alex Rodríguez',
      avatar: 'https://i.pravatar.cc/150?img=8',
      song: 'As It Was',
      artist: 'Harry Styles',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14',
      timestamp: '2 hrs ago',
      status: 'offline',
      mutualFriends: 5,
      mutualArtists: ['Billie Eilish', 'Drake']
    }
  ];
  
  const suggestedFriends = [
    {
      id: 's1',
      name: 'Emma Watson',
      avatar: 'https://i.pravatar.cc/150?img=9',
      mutualFriends: 15,
      mutualArtists: ['The Weeknd', 'Taylor Swift', 'Drake']
    },
    {
      id: 's2',
      name: 'Lucas Kim',
      avatar: 'https://i.pravatar.cc/150?img=11',
      mutualFriends: 7,
      mutualArtists: ['Doja Cat', 'Kendrick Lamar']
    }
  ];
  
  const events = [
    {
      id: 'e1',
      title: 'Taylor Swift: The Eras Tour',
      type: 'Virtual listening party',
      date: 'May 18, 2023',
      time: '8:00 PM',
      image: 'https://i.scdn.co/image/ab6761610000e5eb5a00969a4698c3bc19d84821',
      attendees: 156,
      friends: [
        { id: 'f1', avatar: 'https://i.pravatar.cc/150?img=5' },
        { id: 'f2', avatar: 'https://i.pravatar.cc/150?img=12' },
        { id: 'f3', avatar: 'https://i.pravatar.cc/150?img=8' }
      ]
    },
    {
      id: 'e2',
      title: 'New Music Friday',
      type: 'Weekly release party',
      date: 'Every Friday',
      time: '12:00 PM',
      image: 'https://i.scdn.co/image/ab67706f00000002b5d033952be67870a01af0cc',
      attendees: 328,
      friends: [
        { id: 'f1', avatar: 'https://i.pravatar.cc/150?img=5' },
        { id: 'f2', avatar: 'https://i.pravatar.cc/150?img=12' }
      ]
    },
    {
      id: 'e3',
      title: 'Drake Album Premiere',
      type: 'Album listening party',
      date: 'June 3, 2023',
      time: '9:00 PM',
      image: 'https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9',
      attendees: 421,
      friends: [
        { id: 'f3', avatar: 'https://i.pravatar.cc/150?img=8' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-spotify-black to-spotify-dark pb-20">
      <Header 
        title="Connect" 
        subtitle="Friends & Events"
        showBack={true}
        showSearch={true}
        showNotification={true}
        showProfile={true}
      />
      
      <main className="px-4 pt-2 pb-24">
        <AnimatedTransition animation="fade" delay={0.1}>
          {/* Tabs */}
          <div className="flex gap-2 mb-6 pt-2">
            <button
              className={`flex-1 py-2.5 px-4 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-colors ${
                activeTab === 'friends'
                  ? 'bg-spotify-green text-black'
                  : 'bg-spotify-light/80 text-white'
              }`}
              onClick={() => setActiveTab('friends')}
            >
              <Users size={16} />
              Friends
            </button>
            <button
              className={`flex-1 py-2.5 px-4 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-colors ${
                activeTab === 'events'
                  ? 'bg-spotify-green text-black'
                  : 'bg-spotify-light/80 text-white'
              }`}
              onClick={() => setActiveTab('events')}
            >
              <Calendar size={16} />
              Events
            </button>
          </div>

          {activeTab === 'friends' ? (
            <>
              {/* Friend Activity */}
              <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-lg flex items-center">
                    <Headphones size={18} className="text-spotify-green mr-2" />
                    Friend Activity
                  </h2>
                </div>
                
                <div className="space-y-3">
                  {friends.map((friend) => (
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
                        status={friend.status as "online" | "offline" | "none"}
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
                </div>
              </section>
              
              {/* Suggested Friends */}
              <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-lg flex items-center">
                    <UserPlus size={18} className="text-spotify-green mr-2" />
                    Suggested Friends
                  </h2>
                </div>
                
                <div className="space-y-3">
                  {suggestedFriends.map((friend) => (
                    <motion.div 
                      key={friend.id}
                      className="bg-spotify-light/90 p-3 rounded-lg flex items-center justify-between border border-white/5"
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="flex items-center">
                        <Avatar 
                          src={friend.avatar} 
                          alt={friend.name} 
                          size="sm"
                        />
                        <div className="ml-3">
                          <p className="text-sm font-medium">{friend.name}</p>
                          <p className="text-xs text-spotify-muted">
                            {friend.mutualFriends} mutual friends • {friend.mutualArtists.length} mutual artists
                          </p>
                        </div>
                      </div>
                      
                      <button className="bg-spotify-green text-black rounded-full py-1.5 px-4 text-xs font-medium">
                        Follow
                      </button>
                    </motion.div>
                  ))}
                </div>
              </section>
            </>
          ) : (
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
                  {events.map((event) => (
                    <motion.div 
                      key={event.id}
                      className="relative overflow-hidden rounded-xl bg-spotify-light/80 border border-white/10"
                      whileHover={{ y: -3 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="flex p-3">
                        <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                          <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                        </div>
                        
                        <div className="ml-3 flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-medium text-base">{event.title}</h3>
                              <p className="text-xs text-spotify-muted">{event.type}</p>
                              <p className="text-xs mt-1">
                                <span className="text-spotify-green">{event.date}</span> • {event.time}
                              </p>
                            </div>
                            <Badge text="Join" variant="success" size="sm" />
                          </div>
                          
                          <div className="flex items-center mt-2">
                            <div className="flex -space-x-2">
                              {event.friends.map((friend) => (
                                <Avatar 
                                  key={friend.id}
                                  src={friend.avatar}
                                  alt="Friend"
                                  size="sm"
                                  className="border-2 border-spotify-dark"
                                />
                              ))}
                            </div>
                            <span className="text-xs text-spotify-muted ml-2">
                              {event.friends.length} friends • {event.attendees} attending
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex border-t border-white/5">
                        <button className="flex-1 py-2 text-xs font-medium text-center border-r border-white/5 flex justify-center items-center">
                          <Bell size={12} className="mr-1 text-spotify-green" />
                          Remind Me
                        </button>
                        <button className="flex-1 py-2 text-xs font-medium text-center flex justify-center items-center">
                          <Music size={12} className="mr-1 text-spotify-green" />
                          View Details
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
              
              {/* Create Event Button */}
              <motion.button 
                className="w-full py-3 bg-spotify-green text-black rounded-full font-medium text-sm flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar size={16} className="mr-2" />
                Create New Event
              </motion.button>
            </>
          )}
        </AnimatedTransition>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Connect;
