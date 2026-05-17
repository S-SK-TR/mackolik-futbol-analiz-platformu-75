import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ErrorStateProps {
  errorMessage?: string;
  onRetry?: () => void;
  className?: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({
  errorMessage = 'Verileri yüklerken bir hata oluştu.',
  onRetry,
  className
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "min-h-[50vh] flex flex-col items-center justify-center p-4 md:p-8 text-center",
        className
      )}
    >
      <div className="glass-card p-8 rounded-3xl border border-[var(--glass-border)] shadow-lg max-w-md w-full">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 20 }}
          className="bg-[var(--glass-bg)] rounded-full p-4 inline-flex mb-6"
        >
          <AlertTriangle className="h-12 w-12 text-red-500" />
        </motion.div>

        <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Hata Oluştu</h2>
        <p className="text-[var(--text-muted)] mb-6">{errorMessage}</p>

        {onRetry && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onRetry}
            className="flex items-center gap-2 bg-[var(--brand-500)] hover:bg-[var(--brand-600)] text-white px-6 py-3 rounded-xl font-medium transition-all duration-200"
          >
            <RefreshCw className="h-4 w-4" />
            Yeniden Dene
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default ErrorState;