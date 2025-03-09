
import React from 'react';
import { cn } from '@/lib/utils';
import { Music, Users, Star, Lock, Globe, Plus } from 'lucide-react';
import Avatar from '../common/Avatar';
import { motion } from 'framer-motion';

interface Collaborator {
  id: string;
  name: string;
  avatar: string;
}

interface Playlist {
  id: string;
  title: string;
  coverUrl: string;
  collaborators: Collaborator[];
  trackCount: number;
  privacy: 'private' | 'public' | 'collaborative';
  rating?: number;
  isRatingEnabled?: boolean;
}

interface PlaylistCollaborationProps {
  playlists: Playlist[];
  onCreatePlaylist?: () => void;
  onPlaylistClick?: (id: string) => void;
  className?: string;
}

const PlaylistCollaboration: React.FC<PlaylistCollaborationProps> = ({
  playlists,
  onCreatePlaylist,
  onPlaylistClick,
  className
}) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-spotify-green/20 flex items-center justify-center mr-2">
            <Users size={16} className="text-spotify-green" />
          </div>
          <h2 className="font-bold text-lg">Collaborative Playlists</h2>
        </div>
        
        <button 
          onClick={onCreatePlaylist}
          className="p-2 rounded-full bg-spotify-light hover:bg-white/10 transition-colors text-spotify-muted hover:text-white"
        >
          <Plus size={20} />
        </button>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {playlists.map((playlist) => (
          <motion.div 
            key={playlist.id}
            className="rounded-xl overflow-hidden bg-spotify-light border border-white/10 hover:bg-white/5 transition-colors"
            variants={itemVariants}
            onClick={() => onPlaylistClick && onPlaylistClick(playlist.id)}
          >
            <div className="flex p-3">
              {/* Playlist cover */}
              <div className="w-20 h-20 rounded-md overflow-hidden shadow-lg flex-shrink-0">
                <img 
                  src={playlist.coverUrl} 
                  alt={playlist.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Playlist info */}
              <div className="ml-3 flex-1 min-w-0">
                <div className="flex items-center">
                  <h3 className="font-medium truncate">{playlist.title}</h3>
                  <div className="ml-2 text-spotify-muted">
                    {playlist.privacy === 'private' && <Lock size={14} />}
                    {playlist.privacy === 'public' && <Globe size={14} />}
                    {playlist.privacy === 'collaborative' && <Users size={14} />}
                  </div>
                </div>
                
                <div className="flex items-center mt-1 text-xs text-spotify-muted">
                  <span className="flex items-center mr-3">
                    <Music size={12} className="mr-1" />
                    {playlist.trackCount} tracks
                  </span>
                </div>
                
                {/* Rating */}
                {playlist.isRatingEnabled && (
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={cn(
                          "mr-0.5",
                          i < (playlist.rating || 0) ? "fill-yellow-400 text-yellow-400" : "text-spotify-muted"
                        )}
                      />
                    ))}
                    <span className="ml-1 text-xs text-spotify-muted">
                      {playlist.rating && `${playlist.rating.toFixed(1)}/5`}
                    </span>
                  </div>
                )}
                
                {/* Collaborators */}
                <div className="flex items-center mt-2">
                  <div className="flex -space-x-2">
                    {playlist.collaborators.slice(0, 3).map((collaborator) => (
                      <Avatar 
                        key={collaborator.id}
                        src={collaborator.avatar} 
                        alt={collaborator.name}
                        size="sm"
                        className="border-2 border-spotify-light"
                      />
                    ))}
                    
                    {playlist.collaborators.length > 3 && (
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-spotify-light text-xs font-medium border-2 border-spotify-light">
                        +{playlist.collaborators.length - 3}
                      </div>
                    )}
                  </div>
                  
                  <span className="ml-2 text-xs text-spotify-muted">
                    {playlist.collaborators.length} collaborators
                  </span>
                </div>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="grid grid-cols-2 divide-x divide-white/10 border-t border-white/10">
              <button className="py-2 text-sm font-medium text-spotify-muted hover:text-white transition-colors">
                Collaborate
              </button>
              <button className="py-2 text-sm font-medium text-spotify-muted hover:text-white transition-colors">
                Share
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PlaylistCollaboration;
