import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ErrorStateProps {
  message: string
  className?: string
}

export const ErrorState: React.FC<ErrorStateProps> = ({ message, className }) => {
  return (
    <div className={cn(
      'flex flex-col items-center justify-center min-h-screen p-4',
      className
    )}>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="text-6xl text-rose-500 mb-4"
      >
        🚨
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg font-medium text-[var(--text-primary)] mb-2"
      >
        Hata Oluştu
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-[var(--text-muted)] text-center max-w-md"
      >
        {message}
      </motion.p>
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6 px-6 py-2 bg-[var(--brand-500)] text-white rounded-lg font-medium hover:bg-[var(--brand-600)] transition-colors"
        onClick={() => window.location.reload()}
      >
        Yeniden Dene
      </motion.button>
    </div>
  )
}
