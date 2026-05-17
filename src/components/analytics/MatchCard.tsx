import React from 'react'
import { BentoCard } from '@/components/ui/BentoGrid'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface MatchCardProps {
  title: string
  value: string
  delta?: number
  className?: string
}

export const MatchCard: React.FC<MatchCardProps> = ({ title, value, delta, className }) => {
  return (
    <BentoCard className={cn('flex flex-col justify-between', className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-[var(--text-muted)]">{title}</h3>
        {delta && (
          <span className={cn(
            'text-sm font-medium px-2 py-1 rounded-full',
            delta > 0 ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'
          )}>
            {delta > 0 ? '+' : ''}{delta}%
          </span>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold text-[var(--text-primary)] mt-4"
      >
        {value}
      </motion.div>
    </BentoCard>
  )
}
