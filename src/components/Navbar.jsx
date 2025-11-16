import { Menu, School } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const user = (() => {
    try { return JSON.parse(localStorage.getItem('user')) } catch { return null }
  })()

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.location.href = '/'
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-slate-200 dark:bg-[#0b0e1a]/80 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div whileHover={{ rotate: 10 }} className="relative">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] ring-1 ring-slate-200 dark:bg:white/10 dark:bg-white/10 dark:ring-white/10">
                <School className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
              </div>
            </motion.div>
            <div className="font-semibold tracking-tight text-slate-900 dark:text-white">NovaSchool</div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600 dark:text-slate-300">
            <a href="#features" className="hover:text-slate-900 dark:hover:text-white transition-colors">Features</a>
            <a href="#onboarding" className="hover:text-slate-900 dark:hover:text-white transition-colors">Onboarding</a>
            <a href="#pricing" className="hover:text-slate-900 dark:hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-slate-900 dark:hover:text-white transition-colors">Customers</a>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link to="/request-demo" className="hidden sm:inline-flex items-center text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Request demo</Link>
            {!user ? (
              <>
                <Link to="/login" className="hidden sm:inline-flex items-center text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Sign in</Link>
                <Link to="/register" className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg ring-1 ring-indigo-600/20 hover:bg-indigo-500 transition">
                  Start free
                </Link>
              </>
            ) : (
              <>
                <span className="hidden sm:inline text-sm text-slate-700 dark:text-slate-300">Hi, {user.name || user.email}</span>
                <button onClick={logout} className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-900/10 hover:bg-slate-900/10 dark:bg-white/10 dark:text-slate-200 dark:ring-white/10 dark:hover:bg-white/15">
                  Log out
                </button>
              </>
            )}
            <button className="md:hidden rounded-xl p-2 hover:bg-slate-100 dark:hover:bg-white/10">
              <Menu className="h-5 w-5 text-slate-700 dark:text-slate-300" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
