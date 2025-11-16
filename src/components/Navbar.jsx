import { Menu, School, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl/0 bg-[#0b0e1a]/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div whileHover={{ rotate: 10 }} className="relative">
              <div className="absolute inset-0 blur-xl bg-gradient-to-tr from-indigo-500/40 via-sky-400/40 to-fuchsia-400/40 rounded-full" />
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] ring-1 ring-white/10">
                <School className="h-5 w-5 text-indigo-300" />
              </div>
            </motion.div>
            <div className="font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-sky-300 bg-clip-text text-transparent">NovaSchool</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#onboarding" className="hover:text-white transition-colors">Onboarding</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Customers</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#pricing" className="hidden sm:inline-flex items-center text-sm font-medium text-slate-300 hover:text-white">Sign in</a>
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/10 ring-1 ring-white/15 hover:bg-white/15 transition">
              <Sparkles className="h-4 w-4" />
              Start free
            </a>
            <button className="md:hidden rounded-xl p-2 hover:bg-white/10">
              <Menu className="h-5 w-5 text-slate-300" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
