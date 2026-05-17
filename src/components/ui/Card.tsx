import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  title: string
  value: string
  icon: React.ElementType
  variant?: 'default' | 'primary' | 'secondary' | 'accent'
  className?: string
}

export function Card({ title, value, icon: Icon, variant = 'default', className }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={cn(
        "bg-background-surface rounded-2xl p-6 shadow-lg border border-white/10",
        "hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200",
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn(
          "p-2.5 rounded-xl",
          variant === 'primary' && "bg-primary-500/10 text-primary-500",
          variant === 'secondary' && "bg-secondary-500/10 text-secondary-500",
          variant === 'accent' && "bg-accent-500/10 text-accent-500",
          variant === 'default' && "bg-white/10 text-white"
        )}>
          <Icon size={20} />
        </div>
      </div>
      <p className="text-3xl font-bold text-white mb-1">{value}</p>
      <p className="text-sm text-gray-400">{title}</p>
    </motion.div>
  )
}