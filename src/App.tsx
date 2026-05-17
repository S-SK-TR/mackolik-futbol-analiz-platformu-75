import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { AppShell } from './components/layout/AppShell'
import { Dashboard } from './features/dashboard/Dashboard'
import { Matches } from './features/matches/Matches'
import { Players } from './features/players/Players'
import { Analytics } from './features/analytics/Analytics'
import { Auth } from './features/auth/Auth'

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <AppShell>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/players" element={<Players />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </AppShell>
    </AnimatePresence>
  )
}

export default App