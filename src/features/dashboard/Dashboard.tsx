import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { useStore } from '@/store'
import { BarChart, PieChart, TrendingUp, Users, Trophy } from 'lucide-react'

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

export function Dashboard() {
  const { matches, players } = useStore(state => ({
    matches: state.matches,
    players: state.players
  }))

  return (
    <div className="space-y-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <motion.div variants={itemVariants}>
          <Card
            title="Total Matches"
            value={matches.length.toString()}
            icon={Trophy}
            variant="primary"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card
            title="Total Players"
            value={players.length.toString()}
            icon={Users}
            variant="secondary"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card
            title="Top Performers"
            value="8"
            icon={TrendingUp}
            variant="accent"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card
            title="Recent Activity"
            value="12"
            icon={BarChart}
            variant="default"
          />
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-3 gap-4"
      >
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <div className="bg-background-surface rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Match Performance</h2>
            <div className="h-80 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-xl flex items-center justify-center">
              <p className="text-gray-400">Chart will be implemented here</p>
            </div>
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <div className="bg-background-surface rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Player Stats</h2>
            <div className="h-80 bg-gradient-to-br from-accent-500/10 to-primary-500/10 rounded-xl flex items-center justify-center">
              <p className="text-gray-400">Chart will be implemented here</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}