
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';
import AnimatedTransition from '@/components/common/AnimatedTransition';
import Badge from '@/components/common/Badge';
import { cn } from '@/lib/utils';
import { Trophy, ChevronUp, ChevronDown, Music, Flame, Users, Filter, Star, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

type LeaderboardUser = {
  id: string;
  name: string;
  avatar: string;
  points: number;
  position: number;
  positionChange: "up" | "down" | "none";
  isCurrentUser?: boolean;
};

type MissionType = {
  id: string;
  title: string;
  description: string;
  points: number;
  difficulty: "easy" | "medium" | "hard";
  icon: React.ReactNode;
  completed?: boolean;
  progress?: number;
  deadline?: string;
};

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState('leaderboard');
  const [timeframe, setTimeframe] = useState('weekly');
  const [missionFilter, setMissionFilter] = useState('all');

  const users: LeaderboardUser[] = [
    {
      id: "1",
      name: "Emma S.",
      avatar: "https://i.pravatar.cc/150?img=1",
      points: 2345,
      position: 1,
      positionChange: "none"
    },
    {
      id: "2",
      name: "David K.",
      avatar: "https://i.pravatar.cc/150?img=2",
      points: 2210,
      position: 2,
      positionChange: "up"
    },
    {
      id: "3",
      name: "Sophie T.",
      avatar: "https://i.pravatar.cc/150?img=3",
      points: 2150,
      position: 3,
      positionChange: "down"
    },
    {
      id: "4",
      name: "Alex M.",
      avatar: "https://i.pravatar.cc/150?img=4",
      points: 1980,
      position: 4,
      positionChange: "up"
    },
    {
      id: "5",
      name: "Priya",
      avatar: "https://i.pravatar.cc/150?img=5",
      points: 1840,
      position: 5,
      positionChange: "up",
      isCurrentUser: true
    },
    {
      id: "6",
      name: "Michael R.",
      avatar: "https://i.pravatar.cc/150?img=6",
      points: 1725,
      position: 6,
      positionChange: "down"
    },
    {
      id: "7",
      name: "Olivia P.",
      avatar: "https://i.pravatar.cc/150?img=7",
      points: 1650,
      position: 7,
      positionChange: "none"
    }
  ];

  const missions: MissionType[] = [
    {
      id: "m1",
      title: "Rate 3 Songs",
      description: "Rate three songs to improve your recommendations",
      points: 100,
      difficulty: "easy",
      icon: <Music size={18} />,
      completed: false,
      progress: 1,
      deadline: "3 days left"
    },
    {
      id: "m2",
      title: "7-Day Streak",
      description: "Listen to music every day for a week",
      points: 200,
      difficulty: "medium",
      icon: <Flame size={18} />,
      completed: false,
      progress: 5,
      deadline: "2 days left"
    },
    {
      id: "m3",
      title: "Invite Friends",
      description: "Get 2 weeks of Premium free by inviting 3 friends",
      points: 300,
      difficulty: "easy",
      icon: <Users size={18} />,
      completed: false,
      progress: 1,
      deadline: "No deadline"
    },
    {
      id: "m4",
      title: "Top Listener",
      description: "Listen to 100 songs this week",
      points: 400,
      difficulty: "hard",
      icon: <Trophy size={18} />,
      completed: false,
      progress: 65,
      deadline: "4 days left"
    },
    {
      id: "m5",
      title: "Genre Explorer",
      description: "Listen to 5 different music genres",
      points: 150,
      difficulty: "medium",
      icon: <Star size={18} />,
      completed: true
    },
    {
      id: "m6",
      title: "Daily Challenge",
      description: "Complete today's music discovery challenge",
      points: 75,
      difficulty: "easy",
      icon: <Calendar size={18} />,
      completed: true
    }
  ];

  const getPositionChangeIcon = (change: "up" | "down" | "none") => {
    if (change === "up") {
      return <ChevronUp size={16} className="text-green-400" />;
    } else if (change === "down") {
      return <ChevronDown size={16} className="text-red-400" />;
    }
    return null;
  };

  const getMissionsByFilter = () => {
    if (missionFilter === 'completed') {
      return missions.filter(mission => mission.completed);
    } else if (missionFilter === 'in-progress') {
      return missions.filter(mission => !mission.completed);
    }
    return missions;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'text-green-400 bg-green-400/20';
      case 'medium':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'hard':
        return 'text-red-400 bg-red-400/20';
      default:
        return 'text-spotify-muted bg-spotify-light';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-spotify-black to-spotify-dark pb-20">
      <Header
        title="Achievements"
        subtitle="Track your progress and rewards"
        showSearch={false}
        showNotification={true}
        showProfile={true}
      />

      <main className="px-4 pt-2 pb-24">
        <AnimatedTransition animation="fade" delay={0.1}>
          {/* Tab Navigation */}
          <div className="flex rounded-full bg-spotify-light/30 p-1 mb-6">
            <button
              className={`flex-1 py-2 px-4 rounded-full text-sm font-medium ${
                activeTab === 'leaderboard' ? 'bg-spotify-green text-black' : 'text-white'
              }`}
              onClick={() => setActiveTab('leaderboard')}
            >
              Leaderboard
            </button>
            <button
              className={`flex-1 py-2 px-4 rounded-full text-sm font-medium ${
                activeTab === 'missions' ? 'bg-spotify-green text-black' : 'text-white'
              }`}
              onClick={() => setActiveTab('missions')}
            >
              Missions
            </button>
          </div>

          {activeTab === 'leaderboard' && (
            <>
              {/* Timeframe Filter */}
              <div className="flex rounded-full bg-spotify-light/30 p-1 mb-6">
                <button
                  className={`flex-1 py-1.5 px-4 rounded-full text-xs font-medium ${
                    timeframe === 'weekly' ? 'bg-spotify-light text-white' : 'text-spotify-muted'
                  }`}
                  onClick={() => setTimeframe('weekly')}
                >
                  This Week
                </button>
                <button
                  className={`flex-1 py-1.5 px-4 rounded-full text-xs font-medium ${
                    timeframe === 'monthly' ? 'bg-spotify-light text-white' : 'text-spotify-muted'
                  }`}
                  onClick={() => setTimeframe('monthly')}
                >
                  This Month
                </button>
                <button
                  className={`flex-1 py-1.5 px-4 rounded-full text-xs font-medium ${
                    timeframe === 'alltime' ? 'bg-spotify-light text-white' : 'text-spotify-muted'
                  }`}
                  onClick={() => setTimeframe('alltime')}
                >
                  All Time
                </button>
              </div>

              {/* Top Users */}
              <div className="mb-8">
                <h2 className="font-bold text-lg flex items-center mb-4">
                  <Trophy size={18} className="text-spotify-green mr-2" />
                  Top Listeners
                </h2>

                <div className="space-y-3">
                  {users.map((user) => (
                    <motion.div
                      key={user.id}
                      className={cn(
                        "p-3 rounded-lg flex items-center",
                        user.isCurrentUser
                          ? "bg-spotify-green/20 border border-spotify-green/30"
                          : "bg-spotify-light/70 border border-white/5"
                      )}
                      whileHover={{ y: -2 }}
                      initial={user.isCurrentUser ? { scale: 1.02 } : { scale: 1 }}
                    >
                      <div className="w-6 text-center font-bold mr-3">
                        {user.position}
                      </div>
                      <div className="relative">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className={cn(
                            "w-10 h-10 rounded-full object-cover border-2",
                            user.isCurrentUser ? "border-spotify-green" : "border-transparent"
                          )}
                        />
                        {user.positionChange !== "none" && (
                          <div className="absolute -bottom-1 -right-1 rounded-full bg-spotify-dark p-0.5">
                            {getPositionChangeIcon(user.positionChange)}
                          </div>
                        )}
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex items-center">
                          <p className="font-medium text-sm">{user.name}</p>
                          {user.isCurrentUser && (
                            <Badge text="You" variant="success" size="xs" className="ml-2" />
                          )}
                        </div>
                        <p className="text-xs text-spotify-muted">
                          {user.points.toLocaleString()} points
                        </p>
                      </div>
                      <div className="text-right">
                        {user.positionChange === "up" && (
                          <span className="text-xs text-green-400">▲ 1</span>
                        )}
                        {user.positionChange === "down" && (
                          <span className="text-xs text-red-400">▼ 1</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Your Stats */}
              <div className="bg-spotify-light/50 rounded-lg p-4 mb-6">
                <h3 className="font-medium text-sm mb-3">Your Stats</h3>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-spotify-light p-3 rounded-lg text-center">
                    <p className="text-xs text-spotify-muted">Rank</p>
                    <p className="text-lg font-bold text-spotify-green">5th</p>
                  </div>
                  <div className="bg-spotify-light p-3 rounded-lg text-center">
                    <p className="text-xs text-spotify-muted">Points</p>
                    <p className="text-lg font-bold">1,840</p>
                  </div>
                  <div className="bg-spotify-light p-3 rounded-lg text-center">
                    <p className="text-xs text-spotify-muted">Badges</p>
                    <p className="text-lg font-bold">12</p>
                  </div>
                </div>
              </div>

              {/* Points to earn */}
              <motion.div
                className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-4 rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-medium">Next Rank Up</h3>
                <p className="text-xs text-spotify-muted mb-2">Earn 371 more points to reach 4th place</p>
                <div className="h-2 w-full bg-spotify-dark/50 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-spotify-green"
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </motion.div>
            </>
          )}

          {activeTab === 'missions' && (
            <>
              {/* Mission Filters */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-lg flex items-center">
                  <Trophy size={18} className="text-spotify-green mr-2" />
                  Missions For You
                </h2>
                <div className="relative">
                  <motion.button
                    className="bg-spotify-light/50 p-1.5 rounded-full flex items-center"
                    whileTap={{ scale: 0.95 }}
                  >
                    <Filter size={18} />
                  </motion.button>
                  <div className="absolute top-full right-0 mt-2 bg-spotify-light rounded-lg shadow-lg p-2 flex flex-col gap-1">
                    <button
                      className={`px-3 py-1.5 text-xs rounded-md ${
                        missionFilter === 'all' ? 'bg-spotify-green text-black' : ''
                      }`}
                      onClick={() => setMissionFilter('all')}
                    >
                      All Missions
                    </button>
                    <button
                      className={`px-3 py-1.5 text-xs rounded-md ${
                        missionFilter === 'in-progress' ? 'bg-spotify-green text-black' : ''
                      }`}
                      onClick={() => setMissionFilter('in-progress')}
                    >
                      In Progress
                    </button>
                    <button
                      className={`px-3 py-1.5 text-xs rounded-md ${
                        missionFilter === 'completed' ? 'bg-spotify-green text-black' : ''
                      }`}
                      onClick={() => setMissionFilter('completed')}
                    >
                      Completed
                    </button>
                  </div>
                </div>
              </div>

              {/* Missions Grid */}
              <div className="grid grid-cols-1 gap-4 mb-6">
                {getMissionsByFilter().map((mission) => (
                  <motion.div
                    key={mission.id}
                    className={cn(
                      "p-4 rounded-lg border",
                      mission.completed
                        ? "bg-spotify-green/10 border-spotify-green/30"
                        : "bg-spotify-light border-white/10"
                    )}
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="flex items-start">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center mr-3",
                          mission.completed
                            ? "bg-spotify-green/20 text-spotify-green"
                            : getDifficultyColor(mission.difficulty)
                        )}
                      >
                        {mission.icon}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{mission.title}</h3>
                          <span className="text-xs font-medium">
                            {mission.points} pts
                          </span>
                        </div>
                        <p className="text-xs text-spotify-muted mt-1">
                          {mission.description}
                        </p>

                        {mission.progress !== undefined && !mission.completed && (
                          <div className="mt-3">
                            <div className="flex justify-between text-xs text-spotify-muted mb-1">
                              <span>Progress</span>
                              {mission.id === "m1" && <span>1/3</span>}
                              {mission.id === "m2" && <span>5/7</span>}
                              {mission.id === "m3" && <span>1/3</span>}
                              {mission.id === "m4" && <span>65/100</span>}
                            </div>
                            <div className="h-1.5 w-full bg-spotify-dark/80 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-spotify-green/80"
                                initial={{ width: 0 }}
                                animate={{ width: `${(mission.progress / (
                                  mission.id === "m1" ? 3 :
                                  mission.id === "m2" ? 7 :
                                  mission.id === "m3" ? 3 :
                                  mission.id === "m4" ? 100 : 1
                                )) * 100}%` }}
                                transition={{ duration: 1 }}
                              />
                            </div>
                          </div>
                        )}

                        <div className="flex items-center justify-between mt-3">
                          {mission.deadline && !mission.completed && (
                            <span className="text-xs text-spotify-muted">
                              {mission.deadline}
                            </span>
                          )}
                          <Badge
                            text={mission.completed ? "Completed" : mission.difficulty}
                            variant={
                              mission.completed
                                ? "success"
                                : mission.difficulty === "easy"
                                ? "success"
                                : mission.difficulty === "medium"
                                ? "warning"
                                : "error"
                            }
                            size="sm"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* New Missions Coming */}
              <motion.div
                className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-lg flex items-center"
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-white/10 p-2 rounded-lg mr-3">
                  <Calendar size={24} className="text-spotify-green" />
                </div>
                <div>
                  <h3 className="font-medium">New Missions Coming Soon</h3>
                  <p className="text-xs text-spotify-muted">Check back on Monday for fresh challenges</p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatedTransition>
      </main>

      <BottomNav />
    </div>
  );
};

export default Leaderboard;
