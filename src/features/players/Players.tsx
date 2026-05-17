import { useStore } from '@/store'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Users, Shield, Activity, Star } from 'lucide-react'

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

export function Players() {
  const { players, playersLoading, playersError, fetchPlayers } = useStore(state => ({
    players: state.players,
    playersLoading: state.playersLoading,
    playersError: state.playersError,
    fetchPlayers: state.fetchPlayers
  }))

  useEffect(() => {
    fetchPlayers()
  }, [fetchPlayers])

  if (playersLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  if (playersError) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-red-500">{playersError}</p>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.length > 0 ? (
          players.map((player) => (
            <motion.div key={player.id} variants={itemVariants}>
              <Card
                title={player.name}
                value={player.position}
                icon={Users}
                variant="secondary"
                className="h-full"
              >
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-text-muted">
                    <Shield size={14} />
                    <span>{player.team.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-muted">
                    <Activity size={14} />
                    <span>Goals: {player.stats.goals}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-muted">
                    <Star size={14} />
                    <span>Rating: {player.stats.rating}/10</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-text-muted">No players found. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}