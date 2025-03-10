
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';
import AnimatedTransition from '@/components/common/AnimatedTransition';
import { Heart, User, Library, Play, Plus, Music, Search, Shuffle, MoreVertical, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import MusicCard from '@/components/common/MusicCard';

const Playlists = () => {
  const [activeTab, setActiveTab] = useState<'playlists' | 'songs' | 'artists'>('playlists');
  
  const myPlaylists = [
    {
      id: 'p1',
      title: 'Chill Vibes',
      description: 'My favorite relaxing tunes',
      coverUrl: 'https://i.scdn.co/image/ab67706f00000002c414e7daf34690c9f983f76e',
      songCount: 45,
      lastUpdated: '2 days ago'
    },
    {
      id: 'p2',
      title: 'Workout Mix',
      description: 'High energy songs to keep me going',
      coverUrl: 'https://i.scdn.co/image/ab67706f00000002e4eadd417a05b2546e866934',
      songCount: 32,
      lastUpdated: '1 week ago'
    },
    {
      id: 'p3',
      title: 'Drive Time',
      description: 'Perfect for long drives',
      coverUrl: 'https://i.scdn.co/image/ab67706f000000025551996f500ba876bda73fa5',
      songCount: 28,
      lastUpdated: '3 weeks ago'
    },
    {
      id: 'p4',
      title: 'Throwback Hits',
      description: 'Nostalgic songs from my past',
      coverUrl: 'https://i.scdn.co/image/ab67706f0000000278b8aa3cf87417dbbd4445bb',
      songCount: 53,
      lastUpdated: '1 month ago'
    }
  ];
  
  const likedSongs = [
    {
      id: 's1',
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      album: 'After Hours',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36',
      duration: '3:20',
      addedAt: '2 days ago'
    },
    {
      id: 's2',
      title: 'As It Was',
      artist: 'Harry Styles',
      album: "Harry's House",
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14',
      duration: '2:47',
      addedAt: '1 week ago'
    },
    {
      id: 's3',
      title: 'Shivers',
      artist: 'Ed Sheeran',
      album: '=',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b273bb654423653d28e48ce40a19',
      duration: '3:27',
      addedAt: '2 weeks ago'
    },
    {
      id: 's4',
      title: 'Stay',
      artist: 'The Kid LAROI, Justin Bieber',
      album: 'Stay',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b273f10f5791254c53147cf9e141',
      duration: '2:21',
      addedAt: '3 weeks ago'
    },
    {
      id: 's5',
      title: 'Easy On Me',
      artist: 'Adele',
      album: '30',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b273a7579183f3e5079f5ec6e561',
      duration: '3:44',
      addedAt: '1 month ago'
    }
  ];
  
  const likedArtists = [
    {
      id: 'a1',
      name: 'Taylor Swift',
      imageUrl: 'https://i.scdn.co/image/ab6761610000e5eb5a00969a4698c3bc19d84821',
      genre: 'Pop',
      followerCount: '84.5M'
    },
    {
      id: 'a2',
      name: 'The Weeknd',
      imageUrl: 'https://i.scdn.co/image/ab6761610000e5eb214f3cf1cbe7139c1e26ffbb',
      genre: 'R&B',
      followerCount: '68.2M'
    },
    {
      id: 'a3',
      name: 'Billie Eilish',
      imageUrl: 'https://i.scdn.co/image/ab6761610000e5eb7e5b63d826af6a79a9faa358',
      genre: 'Pop',
      followerCount: '56.7M'
    },
    {
      id: 'a4',
      name: 'Drake',
      imageUrl: 'https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9',
      genre: 'Hip-Hop',
      followerCount: '72.3M'
    },
    {
      id: 'a5',
      name: 'Dua Lipa',
      imageUrl: 'https://i.scdn.co/image/ab6761610000e5eb2f76e5b549254558c4028c7c',
      genre: 'Pop',
      followerCount: '47.8M'
    },
    {
      id: 'a6',
      name: 'Ariana Grande',
      imageUrl: 'https://i.scdn.co/image/ab6761610000e5ebcdce7620dc940db079bf4952',
      genre: 'Pop',
      followerCount: '71.6M'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-spotify-black to-spotify-dark pb-20">
      <Header 
        title="Your Library" 
        showBack={true}
        showSearch={true}
        showNotification={true}
        showProfile={true}
      />
      
      <main className="px-4 pt-2 pb-24">
        <AnimatedTransition animation="fade" delay={0.1}>
          {/* Library Controls */}
          <section className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <motion.button 
                className="flex items-center justify-center h-10 w-10 bg-spotify-light/80 rounded-full"
                whileTap={{ scale: 0.95 }}
              >
                <Search size={18} />
              </motion.button>
              <motion.button 
                className="flex items-center justify-center h-10 w-10 bg-spotify-light/80 rounded-full"
                whileTap={{ scale: 0.95 }}
              >
                <Plus size={18} />
              </motion.button>
            </div>
            
            <div className="flex bg-spotify-light/50 rounded-full p-1">
              <button
                className={`px-4 py-1.5 text-xs font-medium rounded-full ${
                  activeTab === 'playlists' 
                    ? 'bg-spotify-green text-black' 
                    : 'text-white'
                }`}
                onClick={() => setActiveTab('playlists')}
              >
                Playlists
              </button>
              <button
                className={`px-4 py-1.5 text-xs font-medium rounded-full ${
                  activeTab === 'songs' 
                    ? 'bg-spotify-green text-black' 
                    : 'text-white'
                }`}
                onClick={() => setActiveTab('songs')}
              >
                Songs
              </button>
              <button
                className={`px-4 py-1.5 text-xs font-medium rounded-full ${
                  activeTab === 'artists' 
                    ? 'bg-spotify-green text-black' 
                    : 'text-white'
                }`}
                onClick={() => setActiveTab('artists')}
              >
                Artists
              </button>
            </div>
          </section>
          
          {activeTab === 'playlists' && (
            <>
              {/* Liked Songs Shortcut */}
              <section className="mb-6">
                <motion.div 
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-4 flex items-center"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="w-14 h-14 rounded-md bg-white/20 flex items-center justify-center shadow-lg">
                    <Heart size={24} className="text-white" fill="white" />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="font-bold text-lg">Liked Songs</h3>
                    <p className="text-sm text-white/80">{likedSongs.length} songs</p>
                  </div>
                  <motion.button 
                    className="h-10 w-10 bg-spotify-green rounded-full flex items-center justify-center shadow-lg"
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play size={18} className="text-black ml-0.5" />
                  </motion.button>
                </motion.div>
              </section>
              
              {/* Your Playlists */}
              <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-lg flex items-center">
                    <Library size={18} className="text-spotify-green mr-2" />
                    Your Playlists
                  </h2>
                </div>
                
                <div className="space-y-3">
                  {myPlaylists.map((playlist) => (
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
                        <p className="text-xs text-spotify-muted truncate">
                          Playlist • {playlist.songCount} songs • Updated {playlist.lastUpdated}
                        </p>
                      </div>
                      <button className="ml-2 text-spotify-muted">
                        <MoreVertical size={18} />
                      </button>
                    </motion.div>
                  ))}
                </div>
                
                {/* Create Playlist Button */}
                <motion.button 
                  className="w-full mt-4 py-3 bg-spotify-light/50 border border-white/10 text-white rounded-lg font-medium text-sm flex items-center justify-center"
                  whileHover={{ backgroundColor: 'rgba(40, 40, 40, 0.8)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Plus size={16} className="mr-2" />
                  Create New Playlist
                </motion.button>
              </section>
            </>
          )}
          
          {activeTab === 'songs' && (
            <>
              {/* Liked Songs */}
              <section className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-lg flex items-center">
                    <Heart size={18} className="text-spotify-green mr-2" />
                    Liked Songs
                  </h2>
                  <motion.button 
                    className="h-8 w-8 bg-spotify-green rounded-full flex items-center justify-center shadow-sm"
                    whileTap={{ scale: 0.9 }}
                  >
                    <Shuffle size={14} className="text-black" />
                  </motion.button>
                </div>
                
                <div className="space-y-2">
                  {likedSongs.map((song) => (
                    <motion.div 
                      key={song.id}
                      className="flex items-center p-2 bg-spotify-light/50 rounded-lg"
                      whileHover={{ backgroundColor: 'rgba(40, 40, 40, 0.9)' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="w-10 h-10 rounded overflow-hidden">
                        <img src={song.coverUrl} alt={song.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="ml-3 flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{song.title}</p>
                        <p className="text-xs text-spotify-muted truncate">{song.artist}</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs text-spotify-muted mr-3">{song.duration}</span>
                        <Heart size={16} className="text-spotify-green" fill="#1DB954" />
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-4 flex items-center justify-center">
                  <span className="text-xs text-spotify-muted">Showing 5 of {likedSongs.length} liked songs</span>
                </div>
                
                <motion.button 
                  className="w-full mt-4 py-3 bg-spotify-light/50 border border-white/10 text-white rounded-lg font-medium text-sm flex items-center justify-center"
                  whileHover={{ backgroundColor: 'rgba(40, 40, 40, 0.8)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  View All Liked Songs
                </motion.button>
              </section>
              
              {/* Recently Added */}
              <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-lg flex items-center">
                    <Clock size={18} className="text-spotify-green mr-2" />
                    Recently Added
                  </h2>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {likedSongs.slice(0, 4).map((song) => (
                    <MusicCard
                      key={song.id}
                      title={song.title}
                      artist={song.artist}
                      coverUrl={song.coverUrl}
                      size="sm"
                      orientation="vertical"
                    />
                  ))}
                </div>
              </section>
            </>
          )}
          
          {activeTab === 'artists' && (
            <>
              {/* Followed Artists */}
              <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-lg flex items-center">
                    <User size={18} className="text-spotify-green mr-2" />
                    Artists You Follow
                  </h2>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {likedArtists.map((artist) => (
                    <motion.div 
                      key={artist.id}
                      className="flex flex-col items-center"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="w-full aspect-square rounded-full overflow-hidden mb-2">
                        <img src={artist.imageUrl} alt={artist.name} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="font-medium text-sm text-center truncate w-full">{artist.name}</h3>
                      <p className="text-xs text-spotify-muted text-center">{artist.genre}</p>
                    </motion.div>
                  ))}
                </div>
                
                <motion.button 
                  className="w-full mt-6 py-3 bg-spotify-light/50 border border-white/10 text-white rounded-lg font-medium text-sm flex items-center justify-center"
                  whileHover={{ backgroundColor: 'rgba(40, 40, 40, 0.8)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  View All Followed Artists
                </motion.button>
              </section>
              
              {/* Suggested Artists */}
              <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-lg">Suggested Artists</h2>
                </div>
                
                <div className="overflow-x-auto scrollbar-none -mx-4 px-4">
                  <div className="flex space-x-4 pb-4 w-max">
                    {likedArtists.slice(2, 6).reverse().map((artist) => (
                      <motion.div 
                        key={`suggested-${artist.id}`}
                        className="flex-shrink-0 w-36 text-center"
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <div className="w-36 h-36 rounded-md overflow-hidden mb-2 bg-spotify-light">
                          <img 
                            src={artist.imageUrl} 
                            alt={artist.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="font-medium text-sm truncate">{artist.name}</h3>
                        <p className="text-xs text-spotify-muted">
                          {artist.followerCount} followers
                        </p>
                        <motion.button 
                          className="mt-2 px-4 py-1.5 bg-spotify-green text-black rounded-full text-xs font-medium w-full"
                          whileTap={{ scale: 0.95 }}
                        >
                          Follow
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            </>
          )}
        </AnimatedTransition>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Playlists;
