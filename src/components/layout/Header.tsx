import { useStore } from '@/store'
import { Search, Bell, Settings, Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

interface HeaderProps {
  title?: string
}

export function Header({ title }: HeaderProps) {
  const { ui, toggleTheme, toggleSidebar } = useStore(state => ({
    ui: state.ui,
    toggleTheme: state.toggleTheme,
    toggleSidebar: state.toggleSidebar
  }))

  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-white/10">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" x2="21" y1="6" y2="6"/>
            <line x1="3" x2="21" y1="12" y2="12"/>
            <line x1="3" x2="21" y1="18" y2="18"/>
          </svg>
        </button>
        <h1 className="text-xl font-semibold">{title || 'Dashboard'}</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search matches, players..."
            className="w-64 px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
        </div>

        <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
          <Bell size={20} />
        </button>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          {ui.theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
          <Settings size={20} />
        </button>
      </div>
    </header>
  )
}