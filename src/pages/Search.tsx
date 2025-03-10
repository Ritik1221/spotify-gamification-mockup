
import React, { useState } from 'react';
import { Search as SearchIcon, TrendingUp, Clock, Mic } from 'lucide-react';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';
import MusicCard from '@/components/common/MusicCard';
import AnimatedTransition from '@/components/common/AnimatedTransition';
import { motion } from 'framer-motion';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const trendingSearches = [
    'Taylor Swift', 'Billie Eilish', 'Drake', 'Weekend', 'Pop Hits', 'Rap Caviar'
  ];

  const recentSearches = [
    { type: 'artist', name: 'The Weeknd', image: 'https://i.scdn.co/image/ab6761610000e5eb214f3cf1cbe7139c1e26ffbb' },
    { type: 'playlist', name: 'Chill Hits', image: 'https://i.scdn.co/image/ab67706f00000002b1a8d8a8952d7529fff72234' },
    { type: 'track', name: 'Blinding Lights', artist: 'The Weeknd', image: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36' }
  ];

  const categories = [
    { id: 'pop', name: 'Pop', color: 'from-pink-500 to-purple-500', image: 'https://i.scdn.co/image/ab67706f000000029249b35f23fb596b6f006a15' },
    { id: 'hiphop', name: 'Hip Hop', color: 'from-yellow-500 to-orange-500', image: 'https://i.scdn.co/image/ab67706f000000025e1c4fdfe3775fd16fc9bdbb' },
    { id: 'rock', name: 'Rock', color: 'from-red-500 to-red-700', image: 'https://i.scdn.co/image/ab67706f00000002b5d033952be67870a01af0cc' },
    { id: 'indie', name: 'Indie', color: 'from-green-500 to-teal-500', image: 'https://i.scdn.co/image/ab67706f00000002baa0f99c75b0f7fd9a605bed' },
    { id: 'electronic', name: 'Electronic', color: 'from-blue-500 to-purple-500', image: 'https://i.scdn.co/image/ab67706f0000000296e08a91ef3c7a6e7bfaa9a7' },
    { id: 'latin', name: 'Latin', color: 'from-yellow-500 to-red-500', image: 'https://i.scdn.co/image/ab67706f00000002ffcd4d8aa83d25f4000f1175' }
  ];

  const searchResults = [
    {
      id: '1',
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36'
    },
    {
      id: '2',
      title: 'Save Your Tears',
      artist: 'The Weeknd',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b273a048415db06a5b6fa7ec4e1a'
    },
    {
      id: '3',
      title: 'Take My Breath',
      artist: 'The Weeknd',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b273c855c18aa8f0ac693508e989'
    },
    {
      id: '4',
      title: 'Starboy',
      artist: 'The Weeknd, Daft Punk',
      coverUrl: 'https://i.scdn.co/image/ab67616d0000b273a048415db06a5b6fa7ec4e1a'
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-spotify-black to-spotify-dark pb-20">
      <Header
        title="Search"
        subtitle="Find the music you love"
        showSearch={false}
        showNotification={true}
        showProfile={true}
      />

      <main className="px-4 pt-2 pb-24">
        <AnimatedTransition animation="fade" delay={0.1}>
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-6 mt-2">
            <div className="relative flex items-center">
              <SearchIcon size={20} className="absolute left-3 text-spotify-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Artists, songs, or podcasts"
                className="w-full bg-spotify-light/80 text-spotify-text py-3 pl-10 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-spotify-green placeholder-spotify-muted/70"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 text-spotify-muted"
                >
                  ×
                </button>
              )}
            </div>
          </form>

          {!isSearching ? (
            <>
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <section className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-bold text-lg flex items-center">
                      <Clock size={18} className="text-spotify-green mr-2" />
                      Recent Searches
                    </h2>
                    {recentSearches.length > 3 && (
                      <span className="text-xs text-spotify-muted">View All</span>
                    )}
                  </div>

                  <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-none -mx-4 px-4">
                    {recentSearches.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex-shrink-0 w-24 text-center"
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-2 bg-spotify-light">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="font-medium text-sm truncate">{item.name}</h3>
                        <p className="text-xs text-spotify-muted truncate capitalize">{item.type}</p>
                      </motion.div>
                    ))}
                  </div>
                </section>
              )}

              {/* Trending Searches */}
              <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-lg flex items-center">
                    <TrendingUp size={18} className="text-spotify-green mr-2" />
                    Trending Searches
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {trendingSearches.map((search, index) => (
                    <motion.div
                      key={index}
                      className="bg-spotify-light/50 backdrop-blur-sm p-3 rounded-lg border border-white/5"
                      whileHover={{ y: -2, backgroundColor: 'rgba(40, 40, 40, 0.8)' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <p className="font-medium text-sm">{search}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Browse Categories */}
              <section className="mb-8">
                <h2 className="font-bold text-lg mb-4">Browse All</h2>

                <div className="grid grid-cols-2 gap-3">
                  {categories.map((category) => (
                    <motion.div
                      key={category.id}
                      className={`relative overflow-hidden h-28 rounded-lg bg-gradient-to-br ${category.color}`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="absolute inset-0 flex items-center p-4">
                        <h3 className="font-bold text-white z-10">{category.name}</h3>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-16 h-16 rotate-12">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover shadow-lg rounded"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            </>
          ) : (
            <>
              {/* Voice Search Prompt */}
              <div className="flex justify-center mb-6">
                <motion.button
                  className="bg-spotify-green/20 text-spotify-green rounded-full p-4 mb-4"
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Mic size={24} />
                </motion.button>
              </div>

              {/* Search Results */}
              <section>
                <h2 className="font-bold text-lg mb-4">Top Results for "{searchQuery}"</h2>
                
                <div className="space-y-3">
                  {searchResults.map((item) => (
                    <MusicCard
                      key={item.id}
                      title={item.title}
                      artist={item.artist}
                      coverUrl={item.coverUrl}
                      size="md"
                      orientation="horizontal"
                      isPlayable={true}
                    />
                  ))}
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

export default Search;
