import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LoadingStateProps {
  className?: string
}

export const LoadingState: React.FC<LoadingStateProps> = ({ className }) => {
  return (
    <div className={cn(
      'flex flex-col items-center justify-center min-h-screen p-4',
      className
    )}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="w-12 h-12 border-4 border-[var(--brand-500)] border-t-transparent rounded-full mb-4"
      />
      <motion.p
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
        className="text-lg font-medium text-[var(--text-primary)]"
      >
        Veriler yükleniyor...
      </motion.p>
    </div>
  )
}
