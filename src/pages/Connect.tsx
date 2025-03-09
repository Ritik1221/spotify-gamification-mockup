
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';
import Connect from '@/components/features/Connect';
import ConnectModal from '@/components/modals/ConnectModal';
import AnimatedTransition from '@/components/common/AnimatedTransition';
import { toast } from "sonner";

const ConnectPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const friends = [
    {
      id: '1',
      name: 'Raj Kumar',
      avatar: 'https://i.pravatar.cc/150?img=11',
      mutualFriends: 5,
      mutualTracks: 23,
      isNew: true
    },
    {
      id: '2',
      name: 'Anita Desai',
      avatar: 'https://i.pravatar.cc/150?img=5',
      mutualFriends: 3,
      mutualTracks: 12
    },
    {
      id: '3',
      name: 'Vikram Seth',
      avatar: 'https://i.pravatar.cc/150?img=12',
      mutualFriends: 1,
      mutualTracks: 8
    },
    {
      id: '4',
      name: 'Meera Patel',
      avatar: 'https://i.pravatar.cc/150?img=10',
      mutualFriends: 7,
      mutualTracks: 42
    }
  ];

  const handleConnectContacts = () => {
    setIsModalOpen(false);
    toast.success("Syncing your contacts");
  };

  const handleConnectFacebook = () => {
    setIsModalOpen(false);
    toast.success("Connecting to Facebook");
  };

  const handleInviteFriends = () => {
    setIsModalOpen(false);
    toast.success("Invitation link copied to clipboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-spotify-black to-spotify-dark pb-20">
      <Header 
        title="Connect" 
        subtitle="Find friends on Spotify"
        showSearch={true}
        showProfile={true}
      />
      
      <main className="px-4 pt-2 pb-24">
        <AnimatedTransition>
          <div className="mb-6 text-center">
            <p className="text-spotify-muted text-sm">
              Get more out of Spotify by connecting with friends.
              Share music, collaborate on playlists, and compete on leaderboards.
            </p>
          </div>
          
          <Connect 
            friends={friends}
            onConnectContacts={() => setIsModalOpen(true)}
            onConnectFacebook={() => setIsModalOpen(true)}
            onFindMore={() => setIsModalOpen(true)}
          />
        </AnimatedTransition>
      </main>
      
      <ConnectModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConnectContacts={handleConnectContacts}
        onConnectFacebook={handleConnectFacebook}
        onInviteFriends={handleInviteFriends}
      />
      
      <BottomNav />
    </div>
  );
};

export default ConnectPage;
