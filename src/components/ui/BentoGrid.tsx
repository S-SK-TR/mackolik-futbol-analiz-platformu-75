import React from 'react'
import { cn } from '@/lib/utils'

interface BentoGridProps {
  className?: string
  children: React.ReactNode
}

interface BentoCardProps {
  className?: string
  children: React.ReactNode
}

export const BentoGrid: React.FC<BentoGridProps> = ({ className, children }) => {
  return (
    <div className={cn(
      'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4',
      className
    )}>
      {children}
    </div>
  )
}

export const BentoCard: React.FC<BentoCardProps> = ({ className, children }) => {
  return (
    <div className={cn(
      'glass-card rounded-2xl p-4 md:p-6',
      className
    )}>
      {children}
    </div>
  )
}
