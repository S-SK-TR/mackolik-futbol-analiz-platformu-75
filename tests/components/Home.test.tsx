import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Home } from '@/features/home/Home';
import { useHomeApi } from '@/api/home';
import { useStore } from '@/store';

// Mock the API hook
vi.mock('@/api/home', () => ({
  useHomeApi: vi.fn()
}));

// Mock the store
vi.mock('@/store', () => ({
  useStore: vi.fn()
}));

// Create a test query client
const createTestQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
};

// Test wrapper component
const TestWrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = createTestQueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

describe('Home Component', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    vi.clearAllMocks();
  });

  it('renders loading state when data is being fetched', async () => {
    // Mock the API to return pending state
    useHomeApi.mockReturnValue({
      dashboardStatsQuery: { isLoading: true, isError: false },
      recentMatchesQuery: { isLoading: true, isError: false },
    });

    render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    );

    // Check if loading state is rendered
    expect(screen.getByText('Yükleniyor...')).toBeInTheDocument();
  });

  it('renders error state when data fetch fails', async () => {
    // Mock the API to return error state
    useHomeApi.mockReturnValue({
      dashboardStatsQuery: { isLoading: false, isError: true, error: new Error('Failed to fetch') },
      recentMatchesQuery: { isLoading: false, isError: true, error: new Error('Failed to fetch') },
    });

    render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    );

    // Check if error state is rendered
    await waitFor(() => {
      expect(screen.getByText('Hata Oluştu')).toBeInTheDocument();
    });
  });

  it('renders dashboard content when data is successfully fetched', async () => {
    // Mock the API to return success state with sample data
    const mockData = {
      dashboardStats: {
        totalMatches: 10,
        totalPlayers: 50,
        averageRating: 4.5
      },
      recentMatches: [
        { id: 1, teamA: 'Team A', teamB: 'Team B', score: '2-1' },
        { id: 2, teamA: 'Team C', teamB: 'Team D', score: '3-2' }
      ]
    };

    // Mock the store to return the mock data
    useStore.mockReturnValue({
      homeData: mockData,
      setHomeData: vi.fn()
    });

    // Mock the API to return success state
    useHomeApi.mockReturnValue({
      dashboardStatsQuery: { isLoading: false, isError: false, data: mockData.dashboardStats },
      recentMatchesQuery: { isLoading: false, isError: false, data: mockData.recentMatches }
    });

    render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    );

    // Check if dashboard content is rendered
    await waitFor(() => {
      expect(screen.getByText('Toplam Maçlar')).toBeInTheDocument();
      expect(screen.getByText('10')).toBeInTheDocument();
      expect(screen.getByText('Son Maçlar')).toBeInTheDocument();
      expect(screen.getByText('Team A vs Team B')).toBeInTheDocument();
    });
  });

  it('displays correct statistics in the dashboard', async () => {
    // Mock the API to return success state with sample data
    const mockData = {
      dashboardStats: {
        totalMatches: 15,
        totalPlayers: 60,
        averageRating: 4.2
      },
      recentMatches: []
    };

    // Mock the store to return the mock data
    useStore.mockReturnValue({
      homeData: mockData,
      setHomeData: vi.fn()
    });

    // Mock the API to return success state
    useHomeApi.mockReturnValue({
      dashboardStatsQuery: { isLoading: false, isError: false, data: mockData.dashboardStats },
      recentMatchesQuery: { isLoading: false, isError: false, data: mockData.recentMatches }
    });

    render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    );

    // Check if statistics are displayed correctly
    await waitFor(() => {
      expect(screen.getByText('15')).toBeInTheDocument();
      expect(screen.getByText('60')).toBeInTheDocument();
      expect(screen.getByText('4.2')).toBeInTheDocument();
    });
  });

  it('displays recent matches in the dashboard', async () => {
    // Mock the API to return success state with sample data
    const mockData = {
      dashboardStats: {
        totalMatches: 10,
        totalPlayers: 50,
        averageRating: 4.5
      },
      recentMatches: [
        { id: 1, teamA: 'Team A', teamB: 'Team B', score: '2-1' },
        { id: 2, teamA: 'Team C', teamB: 'Team D', score: '3-2' }
      ]
    };

    // Mock the store to return the mock data
    useStore.mockReturnValue({
      homeData: mockData,
      setHomeData: vi.fn()
    });

    // Mock the API to return success state
    useHomeApi.mockReturnValue({
      dashboardStatsQuery: { isLoading: false, isError: false, data: mockData.dashboardStats },
      recentMatchesQuery: { isLoading: false, isError: false, data: mockData.recentMatches }
    });

    render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    );

    // Check if recent matches are displayed
    await waitFor(() => {
      expect(screen.getByText('Team A vs Team B')).toBeInTheDocument();
      expect(screen.getByText('2-1')).toBeInTheDocument();
      expect(screen.getByText('Team C vs Team D')).toBeInTheDocument();
      expect(screen.getByText('3-2')).toBeInTheDocument();
    });
  });
});