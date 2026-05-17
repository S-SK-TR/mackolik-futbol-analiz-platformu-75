import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, BarChart2, Users, Settings, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/analytics', icon: BarChart2, label: 'Analizler' },
  { to: '/players', icon: Users, label: 'Oyuncular' },
  { to: '/settings', icon: Settings, label: 'Ayarlar' }
];

const AppShell: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setSidebarOpen(!sidebarOpen);
    }
  };

  return (
    <div className="flex h-dvh bg-[var(--bg-base)] text-[var(--text-primary)] overflow-hidden">
      {/* Desktop Sidebar */}
      <AnimatePresence>
        {(sidebarOpen || !isMobile) && (
          <motion.aside
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            exit={{ x: -250 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={cn(
              "fixed md:relative z-20 w-64 h-dvh border-r border-[var(--border)] bg-[var(--bg-surface)]",
              "backdrop-blur-md bg-[var(--glass-bg)]",
              isMobile ? 'shadow-xl' : ''
            )}
          >
            {/* Logo */}
            <div className="h-16 flex items-center justify-between px-5 border-b border-[var(--border)]">
              <span className="font-bold text-lg tracking-tight">Maçkolik</span>
              {isMobile && (
                <button onClick={toggleSidebar} className="p-1 rounded-lg hover:bg-[var(--glass-bg)]">
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Navigation */}
            <nav className="p-3 space-y-1">
              {navItems.map(({ to, icon: Icon, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end
                  onClick={isMobile ? toggleSidebar : undefined}
                  className={({ isActive }) => cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-[var(--brand-500)]/10 text-[var(--brand-500)] border-l-2 border-[var(--brand-500)]"
                      : "text-[var(--text-muted)] hover:bg-[var(--glass-bg)] hover:text-[var(--text-primary)]"
                  )}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </NavLink>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        {isMobile && (
          <header className="h-16 flex items-center justify-between px-4 border-b border-[var(--border)] bg-[var(--bg-surface)]">
            <button onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-[var(--glass-bg)]">
              <Menu size={20} />
            </button>
            <span className="font-bold text-lg tracking-tight">Maçkolik</span>
            <div className="w-10" />
          </header>
        )}

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-10 md:hidden border-t border-[var(--border)] bg-[var(--bg-surface)]"
        >
          <div className="flex justify-around py-2">
            {navItems.map(({ to, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end
                className={({ isActive }) => cn(
                  "flex flex-col items-center p-2 rounded-lg",
                  isActive
                    ? "text-[var(--brand-500)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                )}
              >
                <Icon size={20} />
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AppShell;