import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useStore } from '@/store';

// API base URL
const API_BASE_URL = 'https://api.example.com';

// API endpoints
const API_ENDPOINTS = {
  DASHBOARD_STATS: '/dashboard/stats',
  RECENT_MATCHES: '/matches/recent',
  TEAM_STATS: '/teams/stats',
  PLAYER_PERFORMANCE: '/players/performance'
};

// API client with axios
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Home API service
class HomeApiService {
  // Fetch dashboard statistics
  static async getDashboardStats() {
    const response = await apiClient.get(API_ENDPOINTS.DASHBOARD_STATS);
    return response.data;
  }

  // Fetch recent matches
  static async getRecentMatches() {
    const response = await apiClient.get(API_ENDPOINTS.RECENT_MATCHES);
    return response.data;
  }

  // Fetch team statistics
  static async getTeamStats(teamId: string) {
    const response = await apiClient.get(`${API_ENDPOINTS.TEAM_STATS}/${teamId}`);
    return response.data;
  }

  // Fetch player performance
  static async getPlayerPerformance(playerId: string) {
    const response = await apiClient.get(`${API_ENDPOINTS.PLAYER_PERFORMANCE}/${playerId}`);
    return response.data;
  }
}

export const useHomeApi = () => {
  const setHomeData = useStore(state => state.setHomeData);

  // Dashboard stats query
  const dashboardStatsQuery = useQuery({
    queryKey: ['dashboardStats'],
    queryFn: HomeApiService.getDashboardStats,
    onSuccess: (data) => {
      setHomeData('dashboardStats', data);
    },
    staleTime: 5 * 60 * 1000 // 5 dakika önbellek
  });

  // Recent matches query
  const recentMatchesQuery = useQuery({
    queryKey: ['recentMatches'],
    queryFn: HomeApiService.getRecentMatches,
    onSuccess: (data) => {
      setHomeData('recentMatches', data);
    },
    staleTime: 5 * 60 * 1000 // 5 dakika önbellek
  });

  // Team stats query
  const teamStatsQuery = (teamId: string) => useQuery({
    queryKey: ['teamStats', teamId],
    queryFn: () => HomeApiService.getTeamStats(teamId),
    onSuccess: (data) => {
      setHomeData('teamStats', data);
    },
    staleTime: 5 * 60 * 1000 // 5 dakika önbellek
  });

  // Player performance query
  const playerPerformanceQuery = (playerId: string) => useQuery({
    queryKey: ['playerPerformance', playerId],
    queryFn: () => HomeApiService.getPlayerPerformance(playerId),
    onSuccess: (data) => {
      setHomeData('playerPerformance', data);
    },
    staleTime: 5 * 60 * 1000 // 5 dakika önbellek
  });

  return {
    dashboardStatsQuery,
    recentMatchesQuery,
    teamStatsQuery,
    playerPerformanceQuery
  };
};