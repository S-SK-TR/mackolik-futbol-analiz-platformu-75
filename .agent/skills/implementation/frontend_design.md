---
name: frontend_design
router_kit: FullStackKit
description: >
  React + Vite + PWA premium UI tasarım rehberi.
  SaaS, Dashboard ve Profesyonel uygulama standartları.
  Mobil-first, offline-ready, production-grade.
metadata:
  skillport:
    category: frontend
    tags:
      - premium-ui
      - saas-design
      - dashboard
      - react-vite
      - pwa
      - mobile-first
      - professional
---

# 🎨 Frontend Design — React · Vite · PWA (Professional Grade)

> Projelerin "AI üretimi" gibi değil, profesyonel bir SaaS ürünü veya kurumsal bir dashboard gibi görünmesini ve hissettirmesini sağlar.

---

## ⚡ Vite + PWA Proje Kurulumu

### Zorunlu Bağımlılıklar

```bash
# Temel
npm create vite@latest my-app -- --template react-ts
cd my-app

# PWA
npm i -D vite-plugin-pwa workbox-window

# UI & Stil
npm i -D tailwindcss @tailwindcss/vite
npm i lucide-react
npm i framer-motion
npm i clsx tailwind-merge

# Routing & State
npm i react-router-dom
npm i zustand          # Hafif global state
npm i @tanstack/react-query  # Server state & cache
```

### vite.config.ts (PWA Entegrasyonu)

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'My Premium App',
        short_name: 'App',
        description: 'Production-grade PWA',
        theme_color: '#0f172a',       // Dark: slate-900
        background_color: '#0f172a',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\./,
            handler: 'NetworkFirst',
            options: { cacheName: 'api-cache', expiration: { maxAgeSeconds: 300 } }
          }
        ]
      }
    })
  ]
})
```

### tailwind.config (CSS Variables + Dark Mode)

```ts
// tailwind.config.ts
export default {
  darkMode: 'class',   // class tabanlı dark mode (sistem değil, kullanıcı tercihi)
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Design token'ları CSS var'a bağla
        brand: {
          50:  'hsl(var(--brand-50) / <alpha-value>)',
          500: 'hsl(var(--brand-500) / <alpha-value>)',
          600: 'hsl(var(--brand-600) / <alpha-value>)',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-up':   'fadeUp 0.4s ease both',
        'fade-in':   'fadeIn 0.3s ease both',
        'slide-in':  'slideIn 0.35s cubic-bezier(0.16,1,0.3,1) both',
      }
    }
  }
}
```

---

## 🏗️ Tasarım Sistemleri (Seç Birini — Karıştırma)

### Tema A — Modern SaaS (Light/Clean)
*Notion, Linear, Vercel tarzı. B2B SaaS için ideal.*

```css
:root {
  --bg-base:      theme(colors.slate.50);
  --bg-surface:   theme(colors.white);
  --bg-elevated:  theme(colors.white);
  --border:       theme(colors.slate.200);
  --text-primary: theme(colors.slate.900);
  --text-muted:   theme(colors.slate.500);
  --brand-500:    221 83% 53%;   /* blue-600 */
  --font-sans:    'Geist', 'DM Sans';
}
```

### Tema B — Pro Dashboard (Deep Dark)
*Figma, Raycast, Linear Dark tarzı. Analytics & tool UI için ideal.*

```css
:root[class~="dark"] {
  --bg-base:      #09090b;        /* zinc-950 */
  --bg-surface:   #18181b;        /* zinc-900 */
  --bg-elevated:  #27272a;        /* zinc-800 */
  --border:       #3f3f46;        /* zinc-700 */
  --text-primary: #fafafa;
  --text-muted:   #a1a1aa;
  --brand-500:    142 71% 45%;    /* emerald-500 */
  --font-sans:    'Geist', 'Inter';
}
```

### Tema C — Glassmorphism / Vibrant
*Konsumer mobil app, landing page için ideal.*

```css
:root {
  --bg-base:    linear-gradient(135deg, #1e1b4b 0%, #0f172a 50%, #134e4a 100%);
  --glass-bg:   rgba(255,255,255,0.06);
  --glass-border: rgba(255,255,255,0.12);
  --blur:       blur(16px) saturate(180%);
  --brand-500:  271 91% 65%;  /* violet-500 */
  --font-sans:  'Cal Sans', 'Plus Jakarta Sans';
}
```

---

## 🧱 Bileşen Kütüphanesi

### cn() — Utility (Her Dosyada Kullan)

```ts
// src/lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
```

### MetricCard

```tsx
import { TrendingUp, TrendingDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MetricCardProps {
  title: string
  value: string
  delta?: number
  icon: React.ElementType
  variant?: 'default' | 'success' | 'danger'
}

export function MetricCard({ title, value, delta, icon: Icon, variant = 'default' }: MetricCardProps) {
  const isPositive = delta && delta > 0
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-2xl p-5 
                 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn(
          "p-2.5 rounded-xl",
          variant === 'success' && "bg-emerald-500/10 text-emerald-500",
          variant === 'danger'  && "bg-rose-500/10 text-rose-500",
          variant === 'default' && "bg-blue-500/10 text-blue-500"
        )}>
          <Icon size={20} />
        </div>
        {delta !== undefined && (
          <span className={cn(
            "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
            isPositive ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500"
          )}>
            {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {Math.abs(delta)}%
          </span>
        )}
      </div>
      <p className="text-2xl font-bold text-[var(--text-primary)] mb-0.5">{value}</p>
      <p className="text-sm text-[var(--text-muted)]">{title}</p>
    </motion.div>
  )
}
```

### AppShell — PWA Layout (Sidebar + Mobile Bottom Nav)

```tsx
// src/components/layout/AppShell.tsx
import { NavLink, Outlet } from 'react-router-dom'
import { LayoutDashboard, BarChart2, Settings, Bell } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/',         icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/analytics', icon: BarChart2,      label: 'Analytics'  },
  { to: '/settings', icon: Settings,        label: 'Settings'   },
]

export function AppShell() {
  return (
    <div className="flex h-dvh bg-[var(--bg-base)] text-[var(--text-primary)] overflow-hidden">
      
      {/* ── Desktop Sidebar ── */}
      <aside className="hidden md:flex flex-col w-60 border-r border-[var(--border)] 
                        bg-[var(--bg-surface)] shrink-0">
        {/* Logo */}
        <div className="h-16 flex items-center px-5 border-b border-[var(--border)]">
          <span className="font-bold text-lg tracking-tight">AppName</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-0.5">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink key={to} to={to} end className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
              isActive
                ? "bg-blue-500/10 text-blue-500"
                : "text-[var(--text-muted)] hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
            )}>
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* User Footer */}
        <div className="p-3 border-t border-[var(--border)]">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg 
                             hover:bg-[var(--bg-elevated)] transition-colors">
            <img src="/avatar.png" className="w-8 h-8 rounded-full object-cover" alt="avatar" />
            <div className="flex-1 text-left">
              <p className="text-xs font-semibold">John Doe</p>
              <p className="text-xs text-[var(--text-muted)]">john@example.com</p>
            </div>
            <Settings size={14} className="text-[var(--text-muted)]" />
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="h-16 shrink-0 flex items-center justify-between px-4 md:px-6 
                           border-b border-[var(--border)] bg-[var(--bg-surface)]/80 
                           backdrop-blur-xl sticky top-0 z-30">
          <h1 className="font-semibold text-[var(--text-primary)]">Dashboard</h1>
          <button className="relative p-2 rounded-lg hover:bg-[var(--bg-elevated)] transition-colors">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full" />
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
          <Outlet />
        </main>
      </div>

      {/* ── Mobile Bottom Navigation (PWA Safe Area) ── */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 
                      bg-[var(--bg-surface)]/90 backdrop-blur-xl 
                      border-t border-[var(--border)]
                      pb-[env(safe-area-inset-bottom)]">
        <div className="flex h-16">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink key={to} to={to} end className={({ isActive }) => cn(
              "flex-1 flex flex-col items-center justify-center gap-1 text-[10px] font-medium transition-colors",
              isActive ? "text-blue-500" : "text-[var(--text-muted)]"
            )}>
              <Icon size={22} />
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
}
```

### PageContainer — Sayfa Sarmalayıcı

```tsx
// src/components/layout/PageContainer.tsx
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface PageContainerProps {
  children: React.ReactNode
  className?: string
  title?: string
  description?: string
  actions?: React.ReactNode
}

export function PageContainer({ children, className, title, description, actions }: PageContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={cn("p-4 md:p-6 max-w-7xl mx-auto w-full", className)}
    >
      {(title || actions) && (
        <div className="flex items-start justify-between mb-6 gap-4">
          <div>
            {title && <h2 className="text-xl font-bold text-[var(--text-primary)]">{title}</h2>}
            {description && <p className="text-sm text-[var(--text-muted)] mt-0.5">{description}</p>}
          </div>
          {actions && <div className="shrink-0">{actions}</div>}
        </div>
      )}
      {children}
    </motion.div>
  )
}
```

### Button — Variant Sistemi

```tsx
// src/components/ui/Button.tsx
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  icon?: React.ElementType
}

export function Button({ variant = 'primary', size = 'md', loading, icon: Icon, children, className, disabled, ...props }: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-150 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
        {
          'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/20': variant === 'primary',
          'bg-[var(--bg-elevated)] hover:bg-[var(--border)] text-[var(--text-primary)] border border-[var(--border)]': variant === 'secondary',
          'hover:bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[var(--text-primary)]': variant === 'ghost',
          'bg-rose-600 hover:bg-rose-500 text-white': variant === 'destructive',
          'h-8 px-3 text-xs':  size === 'sm',
          'h-10 px-4 text-sm': size === 'md',
          'h-12 px-6 text-base': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {loading ? <Loader2 size={16} className="animate-spin" /> : Icon && <Icon size={16} />}
      {children}
    </button>
  )
}
```

---

## 📱 PWA-Spesifik Kurallar

### 1. Viewport & Safe Area
```html
<!-- index.html -->
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
```

```css
/* Safe area desteği (notch, home indicator) */
.bottom-nav  { padding-bottom: env(safe-area-inset-bottom); }
.content     { padding-top: env(safe-area-inset-top); }
```

### 2. Touch Optimizasyonu
```css
/* Tüm interaktif elementlerde */
.touch-target {
  min-height: 44px;   /* Apple HIG minimum */
  min-width: 44px;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}
```

### 3. Offline Durumu Banner'ı

```tsx
// src/components/OfflineBanner.tsx
import { WifiOff } from 'lucide-react'
import { useEffect, useState } from 'react'

export function OfflineBanner() {
  const [offline, setOffline] = useState(!navigator.onLine)
  useEffect(() => {
    const on  = () => setOffline(false)
    const off = () => setOffline(true)
    window.addEventListener('online', on)
    window.addEventListener('offline', off)
    return () => { window.removeEventListener('online', on); window.removeEventListener('offline', off) }
  }, [])
  if (!offline) return null
  return (
    <div className="fixed top-0 inset-x-0 z-[100] flex items-center justify-center gap-2 
                    h-10 bg-amber-500 text-amber-950 text-sm font-medium">
      <WifiOff size={14} /> Çevrimdışı — Değişiklikler kaydedilecek
    </div>
  )
}
```

### 4. PWA Install Prompt

```tsx
// src/hooks/usePWAInstall.ts
import { useEffect, useState } from 'react'

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export function usePWAInstall() {
  const [prompt, setPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  useEffect(() => {
    const handler = (e: Event) => { e.preventDefault(); setPrompt(e as BeforeInstallPromptEvent) }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])
  const install = async () => { if (!prompt) return; await prompt.prompt(); setPrompt(null) }
  return { canInstall: !!prompt, install }
}
```

---

## 🎞️ Animasyon Rehberi (Framer Motion)

### Sayfa Geçiş Şablonu

```tsx
// src/components/layout/PageTransition.tsx
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const variants = {
  initial:  { opacity: 0, x: 10 },
  animate:  { opacity: 1, x: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  exit:     { opacity: 0, x: -10, transition: { duration: 0.15 } }
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} {...variants} className="h-full">
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
```

### Staggered List (Listeler için)

```tsx
const container = { animate: { transition: { staggerChildren: 0.07 } } }
const item = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.16,1,0.3,1] } }
}

<motion.ul variants={container} initial="initial" animate="animate">
  {items.map(i => <motion.li key={i.id} variants={item}>{i.name}</motion.li>)}
</motion.ul>
```

---

## ♿ Erişilebilirlik Minimumleri

```tsx
// Her interaktif element için
<button
  aria-label="Bildirimleri aç"
  aria-pressed={isOpen}
  role="button"
>

// Focus ring — Tailwind
className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"

// Renk kontrast kuralı
// Light: text-slate-900 üzeri bg-white  → ✅ 15:1
// Dark:  text-zinc-100  üzeri bg-zinc-900 → ✅ 12:1
// Muted: text-slate-500 üzeri bg-slate-50 → ⚠️ 4.5:1 (minimum)
```

---

## 🚫 Anti-Patterns (Asla Yapma)

| ❌ Amatör / AI Slop | ✅ Premium SaaS (Linear/Vercel) |
|-----------|-----------|
| `onClick={() => console.log()}` ile test bırakma | Temiz, production-ready kod |
| `px-2 py-1` veya rasgele boşluklar | Kesin **8px Grid** sistemi (p-2, p-4, p-8) |
| `text-[#333]` inline hex, gökkuşağı UI | 2-3 ana renkli sofistike palet (Design token) |
| Her yerde `useEffect` + `useState` fetch | `@tanstack/react-query` veya Server State |
| `z-index: 9999` | Katmanlı `z-10/20/30/50` sistemi |
| Keskin köşe (`rounded`) | `rounded-xl` veya `rounded-2xl` ve Soft Shadow |
| Overflow scroll gizli | `overflow-hidden` + `min-w-0` flex |
| `window.innerWidth` ile breakpoint | Tailwind responsive prefix |
| Jenerik, AI hissi veren tasarımlar | Startup ürünü gibi hissettiren rafine UI |

---

## 📋 Production Checklist

### PWA
- [ ] `manifest.json` dolu ve ikon seti tam (192 + 512px)
- [ ] `theme_color` navbar rengiyle eşleşiyor
- [ ] HTTPS (Lighthouse PWA skoru ≥ 90)
- [ ] Service Worker cache stratejisi seçildi
- [ ] Offline fallback sayfası var

### Performans
- [ ] `React.lazy` + `Suspense` ile route-level code splitting
- [ ] Görseller WebP/AVIF, `loading="lazy"`
- [ ] Tailwind PurgeCSS aktif (prod build'de)
- [ ] Lighthouse Performance ≥ 90

### UI/UX
- [ ] Touch target minimum 44×44px
- [ ] `safe-area-inset-*` uygulandı
- [ ] Dark / Light mode geçişi anlık (no flash)
- [ ] Skeleton loader (veri yüklenirken boş ekran yok)
- [ ] Error boundary ile graceful hata sayfası
- [ ] Toast / notification sistemi (sonner veya react-hot-toast)

### Erişilebilirlik
- [ ] Renk kontrastı WCAG AA (4.5:1)
- [ ] Keyboard navigation çalışıyor
- [ ] `aria-label` tüm icon-only butonlarda mevcut

---

*Frontend Design PWA v1.0 — React · Vite · Production Grade*
