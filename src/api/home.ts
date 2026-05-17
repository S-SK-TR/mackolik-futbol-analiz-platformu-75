import { useQuery } from '@tanstack/react-query'

const API_BASE_URL = 'https://api.example.com'

// Mock API fonksiyonları
const fetchDashboardStats = async () => {
  // Gerçek uygulamada API çağrısı
  return {
    totalMatches: 128,
    totalPlayers: 45,
    averageRating: 7.8
  }
}

const fetchRecentMatches = async () => {
  // Gerçek uygulamada API çağrısı
  return [
    { id: 1, teamA: 'Galatasaray', teamB: 'Fenerbahçe', score: '3-2' },
    { id: 2, teamA: 'Beşiktaş', teamB: 'Trabzonspor', score: '1-1' },
    { id: 3, teamA: 'Bursaspor', teamB: 'Sivasspor', score: '2-0' }
  ]
}

export const useHomeApi = () => {
  const dashboardStatsQuery = useQuery({
    queryKey: ['dashboardStats'],
    queryFn: fetchDashboardStats,
    staleTime: 5 * 60 * 1000 // 5 dakika
  })

  const recentMatchesQuery = useQuery({
    queryKey: ['recentMatches'],
    queryFn: fetchRecentMatches,
    staleTime: 10 * 60 * 1000 // 10 dakika
  })

  return {
    dashboardStatsQuery,
    recentMatchesQuery
  }
}
