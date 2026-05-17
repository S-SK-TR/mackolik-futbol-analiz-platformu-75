import { useStore } from '@/store'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { BarChart, PieChart, LineChart, TrendingUp, Activity } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export function Analytics() {
  const { matchStats, playerStats, analyticsLoading, analyticsError, fetchMatchAnalytics } = useStore(state => ({
    matchStats: state.matchStats,
    playerStats: state.playerStats,
    analyticsLoading: state.analyticsLoading,
    analyticsError: state.analyticsError,
    fetchMatchAnalytics: state.fetchMatchAnalytics
  }))

  useEffect(() => {
    fetchMatchAnalytics('sample-match-id')
  }, [fetchMatchAnalytics])

  if (analyticsLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  if (analyticsError) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-red-500">{analyticsError}</p>
      </div>
    )
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div variants={itemVariants}>
          <Card
            title="Possession"
            value={`${matchStats?.possession || 0}%`}
            icon={PieChart}
            variant="primary"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card
            title="Shots"
            value={(matchStats?.shots || 0).toString()}
            icon={Activity}
            variant="secondary"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card
            title="Passes"
            value={(matchStats?.passes || 0).toString()}
            icon={TrendingUp}
            variant="accent"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card
            title="Fouls"
            value={(matchStats?.fouls || 0).toString()}
            icon={BarChart}
            variant="default"
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={itemVariants}>
          <div className="bg-background-surface rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Match Performance</h2>
            <div className="h-80 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-xl flex items-center justify-center">
              <p className="text-gray-400">Chart will be implemented here</p>
            </div>
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <div className="bg-background-surface rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Player Performance</h2>
            <div className="h-80 bg-gradient-to-br from-accent-500/10 to-primary-500/10 rounded-xl flex items-center justify-center">
              <p className="text-gray-400">Chart will be implemented here</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}