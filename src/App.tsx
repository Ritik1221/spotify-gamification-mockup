
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import NowPlayingBar from "./components/common/NowPlayingBar";

// Pages
import Index from "./pages/Index";
import Search from "./pages/Search";
import Connect from "./pages/Connect";
import Leaderboard from "./pages/Leaderboard";
import Playlists from "./pages/Playlists";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

// Create query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1
    }
  }
});

// Loading component
const LoadingScreen = () => (
  <div className="min-h-screen flex items-center justify-center bg-spotify-dark">
    <div className="text-center">
      <div className="h-16 w-16 mx-auto mb-4 loading-pulse">
        <svg viewBox="0 0 1134 340" fill="#1DB954" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 171.4C8 101.4 63.5 45 134.6 45c70.7 0 126.5 56.1 126.5 126.4 0 70-55.8 126.4-126.5 126.4-71 0-126.6-56.4-126.6-126.4zm48.2 0c0 43.1 35.1 78.2 78.4 78.2 43.1 0 78-35.1 78-78.2 0-43.4-34.9-78.2-78-78.2-43.3 0-78.4 34.8-78.4 78.2zm108.7-74.9c-4.7-2.7-11.4-.3-11.4 6.4v147.3c0 6.5 6.6 9.1 11.4 6.4l126.8-73.6c4.6-2.7 4.6-9.5 0-12.1l-126.8-74.4z"/>
        </svg>
      </div>
      <p className="text-spotify-muted animate-pulse">Loading your experience...</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner position="top-center" />
      <BrowserRouter>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/search" element={<Search />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/profile" element={<Profile />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <NowPlayingBar />
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
