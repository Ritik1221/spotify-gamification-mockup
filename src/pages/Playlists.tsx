
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';
import PlaylistCollaboration from '@/components/features/PlaylistCollaboration';
import MusicCard from '@/components/common/MusicCard';
import AnimatedTransition from '@/components/common/AnimatedTransition';
import { motion } from 'framer-motion';
import { toast } from "sonner";
import { BadgePlus, Search } from 'lucide-react';

const PlaylistsPage = () => {
  const [searchText, setSearchText] = useState('');

  const playlists = [
    {
      id: '1',
      title: 'Weekend Vibes',
      coverUrl: 'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a4',
      collaborators: [
        { id: 'u1', name: 'Raj', avatar: 'https://i.pravatar.cc/150?img=11' },
        { id: 'u2', name: 'Anita', avatar: 'https://i.pravatar.cc/150?img=5' },
        { id: 'u3', name: 'Vikram', avatar: 'https://i.pravatar.cc/150?img=12' },
        { id: 'u4', name: 'Meera', avatar: 'https://i.pravatar.cc/150?img=10' }
      ],
      trackCount: 24,
      privacy: 'collaborative',
      rating: 4.5,
      isRatingEnabled: true
    },
    {
      id: '2',
      title: 'Bollywood Beats',
      coverUrl: 'https://i.scdn.co/image/ab67706f00000002eb966fcc90d58e8b0771428a',
      collaborators: [
        { id: 'u2', name: 'Anita', avatar: 'https://i.pravatar.cc/150?img=5' },
        { id: 'u5', name: 'Priya', avatar: 'https://i.pravatar.cc/150?img=32' }
      ],
      trackCount: 42,
      privacy: 'public',
      rating: 4.0,
      isRatingEnabled: true
    },
    {
      id: '3',
      title: 'Study Time',
      coverUrl: 'https://i.scdn.co/image/ab67706f00000002e4eadd417a05b2546e866934',
      collaborators: [
        { id: 'u5', name: 'Priya', avatar: 'https://i.pravatar.cc/150?img=32' }
      ],
      trackCount: 18,
      privacy: 'private',
      isRatingEnabled: false
    }
  ];

  const recommendedSongs = [
    {
      id: 's1',
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36',
      duration: '3:20'
    },
    {
      id: 's2',
      title: 'Levitating',
      artist: 'Dua Lipa',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b273d4daf28d55fe4197ede848be',
      duration: '3:23'
    },
    {
      id: 's3',
      title: 'Dynamite',
      artist: 'BTS',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b273a7a6aea163d67fdfe51025a6',
      duration: '3:19'
    }
  ];

  const handleCreatePlaylist = () => {
    toast.success("Create a new collaborative playlist");
  };

  const handlePlaylistClick = (id: string) => {
    toast.success(`Opening playlist`);
  };

  const handleAddSong = () => {
    toast.success("Song added to playlist");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-spotify-black to-spotify-dark pb-20">
      <Header 
        title="Collaborative Playlists" 
        showSearch={true}
        showProfile={true}
      />
      
      <main className="px-4 pt-2 pb-24">
        <AnimatedTransition>
          {/* Search for songs */}
          <section className="mb-6">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-spotify-muted" size={18} />
              <input
                type="text"
                placeholder="Search for songs..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full bg-spotify-light py-3 pl-10 pr-4 rounded-full text-sm border border-white/10 focus:outline-none focus:ring-2 focus:ring-spotify-green/50"
              />
            </div>
          </section>
          
          {/* Playlists */}
          <PlaylistCollaboration 
            playlists={playlists}
            onCreatePlaylist={handleCreatePlaylist}
            onPlaylistClick={handlePlaylistClick}
            className="mb-8"
          />
          
          {/* Recommended Songs */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg">Song Discovery</h2>
              <BadgePlus size={18} className="text-spotify-muted" />
            </div>
            
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {recommendedSongs.map((song, index) => (
                <motion.div 
                  key={song.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <MusicCard
                    title={song.title}
                    artist={song.artist}
                    coverUrl={song.coverUrl}
                    duration={song.duration}
                    orientation="horizontal"
                    onAdd={handleAddSong}
                    isPlayable={true}
                    onRate={(rating) => toast.success(`Rated ${song.title} ${rating} stars`)}
                    rating={0}
                  />
                </motion.div>
              ))}
              
              <motion.div 
                className="py-3 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <button className="text-sm text-spotify-green">
                  View More Recommendations
                </button>
              </motion.div>
            </motion.div>
          </section>
        </AnimatedTransition>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default PlaylistsPage;
