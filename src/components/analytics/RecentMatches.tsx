import React from 'react'
import { BentoCard } from '@/components/ui/BentoGrid'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface Match {
  id: number
  teamA: string
  teamB: string
  score: string
}

interface RecentMatchesProps {
  matches: Match[]
  className?: string
}

export const RecentMatches: React.FC<RecentMatchesProps> = ({ matches, className }) => {
  return (
    <BentoCard className={cn('col-span-1 md:col-span-2', className)}>
      <h3 className="text-lg font-medium text-[var(--text-muted)] mb-4">Son Maçlar</h3>
      <div className="space-y-3">
        {matches.slice(0, 3).map((match, index) => (
          <motion.div
            key={match.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-morphism rounded-lg p-3 flex justify-between items-center"
          >
            <div>
              <p className="text-sm font-medium text-[var(--text-primary)]">{match.teamA} vs {match.teamB}</p>
              <p className="text-xs text-[var(--text-muted)]">Skor: {match.score}</p>
            </div>
            <span className="text-sm font-medium px-2 py-1 rounded-full bg-[var(--glass-glow)] text-[var(--text-primary)]">Detay</span>
          </motion.div>
        ))}
      </div>
    </BentoCard>
  )
}
