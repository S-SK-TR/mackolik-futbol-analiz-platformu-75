import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LoadingStateProps {
  className?: string;
}

const LoadingState: React.FC<LoadingStateProps> = ({ className }) => {
  return (
    <div className={cn(
      "min-h-screen p-4 md:p-8 flex flex-col gap-6",
      className
    )}>
      {/* Header Skeleton */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="h-12 w-64 bg-[var(--glass-bg)] rounded-xl animate-pulse"
      />

      {/* Stats Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: i * 0.1,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="glass-card p-6 rounded-2xl border border-[var(--glass-border)] shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-[var(--glass-bg)] rounded-xl animate-pulse" />
              <div className="flex-1 space-y-3">
                <div className="h-4 w-24 bg-[var(--glass-bg)] rounded animate-pulse" />
                <div className="h-6 w-32 bg-[var(--glass-bg)] rounded animate-pulse" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Skeleton */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-6 rounded-2xl border border-[var(--glass-border)] shadow-lg h-96"
          >
            <div className="h-6 w-48 bg-[var(--glass-bg)] rounded animate-pulse mb-6" />
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-4 w-full bg-[var(--glass-bg)] rounded animate-pulse" />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-6 rounded-2xl border border-[var(--glass-border)] shadow-lg h-64"
          >
            <div className="h-6 w-32 bg-[var(--glass-bg)] rounded animate-pulse mb-6" />
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-4 w-full bg-[var(--glass-bg)] rounded animate-pulse" />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-6 rounded-2xl border border-[var(--glass-border)] shadow-lg h-32"
          >
            <div className="h-6 w-40 bg-[var(--glass-bg)] rounded animate-pulse mb-4" />
            <div className="h-4 w-24 bg-[var(--glass-bg)] rounded animate-pulse" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoadingState;