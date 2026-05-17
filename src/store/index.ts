import { create } from 'zustand'
import { AuthState, AuthActions } from './authStore'
import { MatchesState, MatchesActions } from './matchesStore'
import { PlayersState, PlayersActions } from './playersStore'
import { AnalyticsState, AnalyticsActions } from './analyticsStore'
import { UIState, UIActions } from './uiStore'

type StoreState = AuthState & MatchesState & PlayersState & AnalyticsState & UIState
type StoreActions = AuthActions & MatchesActions & PlayersActions & AnalyticsActions & UIActions
type Store = StoreState & StoreActions

export const useStore = create<Store>((set) => ({
  // Auth
  user: null,
  token: null,
  isAuthenticated: false,
  login: (user, token) => set({ user, token, isAuthenticated: true }),
  logout: () => set({ user: null, token: null, isAuthenticated: false }),

  // Matches
  currentMatch: null,
  matches: [],
  matchesLoading: false,
  matchesError: null,
  fetchMatches: async () => {
    set({ matchesLoading: true, matchesError: null })
    try {
      // API call would go here
      const mockMatches = [/* mock data */]
      set({ matches: mockMatches, matchesLoading: false })
    } catch (error) {
      set({ matchesError: 'Failed to fetch matches', matchesLoading: false })
    }
  },

  // Players
  currentPlayer: null,
  players: [],
  playersLoading: false,
  playersError: null,
  fetchPlayers: async () => {
    set({ playersLoading: true, playersError: null })
    try {
      // API call would go here
      const mockPlayers = [/* mock data */]
      set({ players: mockPlayers, playersLoading: false })
    } catch (error) {
      set({ playersError: 'Failed to fetch players', playersLoading: false })
    }
  },

  // Analytics
  matchStats: null,
  playerStats: null,
  analyticsLoading: false,
  analyticsError: null,
  fetchMatchAnalytics: async (matchId) => {
    set({ analyticsLoading: true, analyticsError: null })
    try {
      // API call would go here
      const mockStats = {/* mock data */}
      set({ matchStats: mockStats, analyticsLoading: false })
    } catch (error) {
      set({ analyticsError: 'Failed to fetch analytics', analyticsLoading: false })
    }
  },

  // UI
  theme: 'dark',
  sidebarOpen: true,
  activeTab: 'dashboard',
  toggleTheme: () => set(state => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
  toggleSidebar: () => set(state => ({ sidebarOpen: !state.sidebarOpen })),
  setActiveTab: (tab) => set({ activeTab: tab })
}))