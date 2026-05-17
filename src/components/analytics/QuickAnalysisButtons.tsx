import React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

const analysisOptions = [
  { label: 'Son 7 Gün', value: 'week' },
  { label: 'Son 30 Gün', value: 'month' },
  { label: 'Tüm Zamanlar', value: 'all' }
]

interface QuickAnalysisButtonsProps {
  className?: string
}

export const QuickAnalysisButtons: React.FC<QuickAnalysisButtonsProps> = ({ className }) => {
  const [activeOption, setActiveOption] = React.useState('week')

  return (
    <div className={cn('flex gap-2', className)}>
      {analysisOptions.map((option) => (
        <motion.button
          key={option.value}
          onClick={() => setActiveOption(option.value)}
          className={cn(
            'px-4 py-2 rounded-lg text-sm font-medium transition-all',
            activeOption === option.value
              ? 'bg-[var(--brand-500)] text-white shadow-md'
              : 'bg-[var(--glass-bg)] text-[var(--text-primary)] hover:bg-[var(--glass-glow)]'
          )}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {option.label}
        </motion.button>
      ))}
    </div>
  )
}
