import { NavLink } from 'react-router-dom'
import { useStore } from '@/store'
import { LayoutDashboard, Trophy, Users, BarChart, Settings, LogOut } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/matches', icon: Trophy, label: 'Matches' },
  { to: '/players', icon: Users, label: 'Players' },
  { to: '/analytics', icon: BarChart, label: 'Analytics' },
  { to: '/settings', icon: Settings, label: 'Settings' }
]

export function Sidebar() {
  const { ui, logout } = useStore(state => ({
    ui: state.ui,
    logout: state.logout
  }))

  return (
    <AnimatePresence>
      {ui.sidebarOpen && (
        <motion.aside
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-64 bg-background-surface border-r border-white/10 flex flex-col h-full"
        >
          <div className="h-16 flex items-center px-6 border-b border-white/10">
            <span className="text-xl font-bold text-primary-500">FA Hub</span>
          </div>

          <nav className="flex-1 p-3 space-y-0.5">
            {navItems.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                end
                className={({ isActive }) => (
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ` +
                  (isActive ? 'bg-primary-500/10 text-primary-500' : 'text-text-muted hover:bg-white/5')
                )}
              >
                <Icon size={18} />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="p-3 border-t border-white/10">
            <button
              onClick={logout}
              className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-text-muted hover:bg-white/5 transition-colors"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}