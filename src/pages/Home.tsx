import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useHomeApi } from '@/api/home';
import { useStore } from '@/store';
import LoadingState from '@/components/ui/LoadingState';
import ErrorState from '@/components/ui/ErrorState';
import { cn } from '@/lib/utils';

interface HomeProps {
  className?: string;
}

const Home: React.FC<HomeProps> = ({ className }) => {
  const { homeData } = useStore();
  const { dashboardStatsQuery, recentMatchesQuery } = useHomeApi();

  // Combined loading and error state
  const isLoading = dashboardStatsQuery.isLoading || recentMatchesQuery.isLoading;
  const isError = dashboardStatsQuery.isError || recentMatchesQuery.isError;

  // Memoize stats data to prevent unnecessary recalculations
  const statsData = useMemo(() => [
    { title: 'Toplam Maçlar', value: homeData.dashboardStats?.totalMatches || 0 },
    { title: 'Toplam Oyuncular', value: homeData.dashboardStats?.totalPlayers || 0 },
    { title: 'Ortalama Puan', value: homeData.dashboardStats?.averageRating || 0 },
    { title: 'Son Güncelleme', value: new Date().toLocaleDateString() }
  ], [homeData.dashboardStats]);

  if (isLoading) return <LoadingState />;
  if (isError) return <ErrorState onRetry={() => {
    dashboardStatsQuery.refetch();
    recentMatchesQuery.refetch();
  }} />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "min-h-screen p-4 md:p-8 flex flex-col gap-6",
        className
      )}
    >
      {/* Header with fade-in animation */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl font-bold text-[var(--text-primary)]"
      >
        Maçkolik Dashboard
      </motion.h1>

      {/* Stats Grid with staggered slide-up animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-6 rounded-2xl border border-[var(--glass-border)] shadow-lg"
          >
            <p className="text-[var(--text-muted)] mb-2">{stat.title}</p>
            <p className="text-3xl font-bold text-[var(--text-primary)]">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Column - Recent Matches */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-2 space-y-4"
        >
          <div className="glass-card p-6 rounded-2xl border border-[var(--glass-border)] shadow-lg">
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Son Maçlar</h2>
            <div className="space-y-3">
              {homeData.recentMatches?.map((match) => (
                <motion.div
                  key={match.id}
                  whileHover={{ scale: 1.01 }}
                  className="glass-card p-4 rounded-xl border border-[var(--glass-border)] flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium text-[var(--text-primary)]">{match.teamA} vs {match.teamB}</p>
                    <p className="text-sm text-[var(--text-muted)]">Sonuç: {match.score}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[var(--brand-500)] hover:bg-[var(--brand-600)] text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  >
                    Detaylar
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <div className="glass-card p-6 rounded-2xl border border-[var(--glass-border)] shadow-lg">
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Hızlı Eylemler</h2>
            <div className="space-y-3">
              {[
                { label: 'Yeni Maç Ekle', icon: 'Plus' },
                { label: 'Oyuncu Analizleri', icon: 'BarChart2' },
                { label: 'Takım Performansı', icon: 'Users' },
                { label: 'Raporlar', icon: 'FileText' }
              ].map((action, index) => (
                <motion.button
                  key={action.label}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  className="w-full flex items-center gap-3 p-3 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--brand-500)] transition-all duration-200"
                >
                  <div className="bg-[var(--brand-500)]/10 p-2 rounded-lg">
                    {/* Icon would be rendered here */}
                  </div>
                  <span className="text-[var(--text-primary)] font-medium">{action.label}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-6 rounded-2xl border border-[var(--glass-border)] shadow-lg"
          >
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Hızlı Bakış</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-[var(--text-muted)]">Son Güncelleme</span>
                <span className="font-medium text-[var(--text-primary)]">{new Date().toLocaleTimeString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--text-muted)]">Aktif Kullanıcılar</span>
                <span className="font-medium text-[var(--text-primary)]">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--text-muted)]">Sunucu Durumu</span>
                <span className="font-medium text-green-500">Çevrimiçi</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;