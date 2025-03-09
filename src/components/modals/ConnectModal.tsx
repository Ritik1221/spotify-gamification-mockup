
import React from 'react';
import { X, Facebook, Phone, User, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnectContacts: () => void;
  onConnectFacebook: () => void;
  onInviteFriends: () => void;
}

const ConnectModal: React.FC<ConnectModalProps> = ({
  isOpen,
  onClose,
  onConnectContacts,
  onConnectFacebook,
  onInviteFriends
}) => {
  if (!isOpen) return null;

  const connectionOptions = [
    {
      icon: Phone,
      title: "Connect Contacts",
      description: "Find friends who are already on Spotify",
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      onClick: onConnectContacts
    },
    {
      icon: Facebook,
      title: "Connect Facebook",
      description: "Expand your music network with Facebook friends",
      color: "text-blue-500",
      bgColor: "bg-blue-600/20",
      onClick: onConnectFacebook
    },
    {
      icon: User,
      title: "Invite Friends",
      description: "Invite friends to join and collaborate",
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      onClick: onInviteFriends
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-spotify-light border border-white/10 rounded-t-xl sm:rounded-xl w-full max-w-md mx-auto overflow-hidden shadow-xl"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div className="flex items-center">
                <Users size={20} className="text-spotify-green mr-2" />
                <h2 className="text-lg font-bold">Connect with Friends</h2>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-spotify-muted hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-5">
              <p className="text-sm text-spotify-muted mb-5">
                Find friends on Spotify to share music, collaborate on playlists, and compete on leaderboards.
              </p>
              
              <div className="space-y-3">
                {connectionOptions.map((option, index) => (
                  <motion.button
                    key={option.title}
                    className="w-full flex items-center p-4 rounded-xl bg-spotify-black/40 border border-white/5 hover:bg-white/5 transition-colors"
                    onClick={option.onClick}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${option.bgColor} ${option.color} mr-3`}>
                      <option.icon size={20} />
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium">{option.title}</h3>
                      <p className="text-xs text-spotify-muted mt-1">{option.description}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
              
              <div className="mt-6 text-xs text-center text-spotify-muted">
                <p>We'll never post without your permission.</p>
                <p className="mt-1">Your data is protected as per our Privacy Policy.</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConnectModal;
