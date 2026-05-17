import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { useQuery } from '@tanstack/react-query'
import { useHomeApi } from '@/api/home'

// Tip tanımları
interface HomeData {
  dashboardStats: {
    totalMatches: number
    totalPlayers: number
    averageRating: number
  }
  recentMatches: Array<{
    id: number
    teamA: string
    teamB: string
    score: string
  }>
  teamStats: any
  playerPerformance: any
}

interface HomeStore {
  // State
  homeData: HomeData
  preferences: {
    theme: 'light' | 'dark'
    notifications: boolean
  }
  
  // Actions
  setHomeData: (key: keyof HomeData, value: any) => void
  updatePreferences: (prefs: Partial<HomeStore['preferences']>) => void
  fetchHomeData: () => Promise<void>
}

export const useHomeStore = create<HomeStore>()(
  persist(
    (set, get) => ({
      // Initial state
      homeData: {
        dashboardStats: {
          totalMatches: 0,
          totalPlayers: 0,
          averageRating: 0
        },
        recentMatches: [],
        teamStats: null,
        playerPerformance: null
      },
      preferences: {
        theme: 'dark',
        notifications: true
      },

      // Actions
      setHomeData: (key, value) => set(state => ({
        homeData: {
          ...state.homeData,
          [key]: value
        }
      })),

      updatePreferences: (prefs) => set(state => ({
        preferences: {
          ...state.preferences,
          ...prefs
        }
      })),

      fetchHomeData: async () => {
        const { dashboardStatsQuery, recentMatchesQuery } = useHomeApi()
        try {
          // TanStack Query kullanarak veri çekme
          const [dashboardStats, recentMatches] = await Promise.all([
            dashboardStatsQuery.refetch(),
            recentMatchesQuery.refetch()
          ])

          // Verileri store'a kaydet
          set(state => ({
            homeData: {
              ...state.homeData,
              dashboardStats: dashboardStats.data,
              recentMatches: recentMatches.data
            }
          }))
        } catch (error) {
          console.error('Failed to fetch home data:', error)
        }
      }
    }),
    {
      name: 'home-store',
      partialize: (state) => ({
        preferences: state.preferences
      })
    }
  )
)
