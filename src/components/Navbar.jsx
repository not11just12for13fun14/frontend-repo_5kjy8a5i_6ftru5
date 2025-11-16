import { Menu, School, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.div whileHover={{ rotate: 10 }} className="relative">
              <div className="absolute inset-0 blur-xl bg-gradient-to-tr from-indigo-400/40 via-sky-400/40 to-fuchsia-400/40 rounded-full" />
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] ring-1 ring-black/5">
                <School className="h-5 w-5 text-indigo-600" />
              </div>
            </motion.div>
            <div className="font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">NovaSchool</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#onboarding" className="hover:text-indigo-600 transition-colors">Onboarding</a>
            <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-indigo-600 transition-colors">Customers</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#pricing" className="hidden sm:inline-flex items-center text-sm font-medium text-slate-700 hover:text-indigo-600">Sign in</a>
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-shadow">
              <Sparkles className="h-4 w-4" />
              Start free
            </a>
            <button className="md:hidden rounded-xl p-2 hover:bg-white/70">
              <Menu className="h-5 w-5 text-slate-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
