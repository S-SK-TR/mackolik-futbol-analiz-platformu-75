import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useHomeStore } from '@/stores/homeStore'
import { cn } from '@/lib/utils'
import { BentoGrid } from '@/components/ui/BentoGrid'
import { MatchCard } from '@/components/analytics/MatchCard'
import { PlayerPerformance } from '@/components/analytics/PlayerPerformance'
import { TeamStats } from '@/components/analytics/TeamStats'
import { RecentMatches } from '@/components/analytics/RecentMatches'
import { QuickAnalysisButtons } from '@/components/analytics/QuickAnalysisButtons'
import { LoadingState } from '@/components/ui/LoadingState'
import { ErrorState } from '@/components/ui/ErrorState'

const Home: React.FC = () => {
  const { homeData, preferences, fetchHomeData } = useHomeStore()
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchHomeData()
        setIsLoading(false)
      } catch (err) {
        setError('Veri yüklenirken bir hata oluştu')
        setIsLoading(false)
      }
    }
    loadData()
  }, [])

  if (isLoading) return <LoadingState />
  if (error) return <ErrorState message={error} />

  return (
    <div className={cn(
      'min-h-screen p-4 md:p-6 lg:p-8',
      preferences.theme === 'dark' ? 'dark' : 'light'
    )}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto space-y-6"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h1 className="text-3xl font-bold text-[var(--text-primary)]">Dashboard</h1>
          <QuickAnalysisButtons />
        </div>

        <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <MatchCard
            title="Toplam Maçlar"
            value={homeData.dashboardStats.totalMatches.toString()}
            delta={5.2}
          />
          <MatchCard
            title="Toplam Oyuncular"
            value={homeData.dashboardStats.totalPlayers.toString()}
            delta={-1.8}
          />
          <MatchCard
            title="Ortalama Puan"
            value={homeData.dashboardStats.averageRating.toFixed(1)}
            delta={2.1}
          />

          <RecentMatches matches={homeData.recentMatches} />
          <PlayerPerformance data={homeData.playerPerformance} />
          <TeamStats data={homeData.teamStats} />
        </BentoGrid>
      </motion.div>
    </div>
  )
}

export default Home
