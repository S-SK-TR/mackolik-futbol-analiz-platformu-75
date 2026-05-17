import React from 'react'
import { BentoCard } from '@/components/ui/BentoGrid'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface PlayerPerformanceProps {
  data: any
  className?: string
}

export const PlayerPerformance: React.FC<PlayerPerformanceProps> = ({ data, className }) => {
  return (
    <BentoCard className={cn('col-span-1 md:col-span-2', className)}>
      <h3 className="text-lg font-medium text-[var(--text-muted)] mb-4">Oyuncu Performansı</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: item * 0.1 }}
            className="glass-morphism rounded-xl p-4"
          >
            <div className="h-24 bg-[var(--glass-glow)] rounded-lg mb-2"></div>
            <p className="text-sm font-medium text-[var(--text-primary)]">Oyuncu {item}</p>
            <p className="text-xs text-[var(--text-muted)]">Puan: {Math.floor(Math.random() * 100)}</p>
          </motion.div>
        ))}
      </div>
    </BentoCard>
  )
}
