import { useStore } from '@/store'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Trophy, Calendar, MapPin, Clock } from 'lucide-react'

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

export function Matches() {
  const { matches, matchesLoading, matchesError, fetchMatches } = useStore(state => ({
    matches: state.matches,
    matchesLoading: state.matchesLoading,
    matchesError: state.matchesError,
    fetchMatches: state.fetchMatches
  }))

  useEffect(() => {
    fetchMatches()
  }, [fetchMatches])

  if (matchesLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  if (matchesError) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-red-500">{matchesError}</p>
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
        {matches.length > 0 ? (
          matches.map((match) => (
            <motion.div key={match.id} variants={itemVariants}>
              <Card
                title={`${match.homeTeam.name} vs ${match.awayTeam.name}`}
                value={match.score ? `${match.score.home}-${match.score.away}` : 'VS'}
                icon={Trophy}
                variant="primary"
                className="h-full"
              >
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-text-muted">
                    <Calendar size={14} />
                    <span>{new Date(match.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-muted">
                    <MapPin size={14} />
                    <span>{match.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-muted">
                    <Clock size={14} />
                    <span>{match.status}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-text-muted">No matches found. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}