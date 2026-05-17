import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Home from '@/pages/Home'
import { useHomeStore } from '@/stores/homeStore'

// Mock the API hook
vi.mock('@/api/home', () => ({
  useHomeApi: () => ({
    dashboardStatsQuery: {
      data: {
        totalMatches: 128,
        totalPlayers: 45,
        averageRating: 7.8
      },
      refetch: vi.fn()
    },
    recentMatchesQuery: {
      data: [
        { id: 1, teamA: 'Galatasaray', teamB: 'Fenerbahçe', score: '3-2' }
      ],
      refetch: vi.fn()
    }
  })
}))

// Mock the Zustand store
vi.mock('@/stores/homeStore', () => ({
  useHomeStore: vi.fn()
}))

describe('Home Page', () => {
  it('renders loading state initially', () => {
    vi.mocked(useHomeStore).mockReturnValue({
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
      fetchHomeData: vi.fn().mockImplementation(() => new Promise(() => {}))
    })

    render(<Home />)
    expect(screen.getByText('Veriler yükleniyor...')).toBeInTheDocument()
  })

  it('renders dashboard stats after loading', async () => {
    vi.mocked(useHomeStore).mockReturnValue({
      homeData: {
        dashboardStats: {
          totalMatches: 128,
          totalPlayers: 45,
          averageRating: 7.8
        },
        recentMatches: [
          { id: 1, teamA: 'Galatasaray', teamB: 'Fenerbahçe', score: '3-2' }
        ],
        teamStats: null,
        playerPerformance: null
      },
      preferences: {
        theme: 'dark',
        notifications: true
      },
      fetchHomeData: vi.fn().mockResolvedValue(undefined)
    })

    render(<Home />)
    expect(await screen.findByText('128')).toBeInTheDocument()
    expect(screen.getByText('45')).toBeInTheDocument()
    expect(screen.getByText('7.8')).toBeInTheDocument()
  })
})
