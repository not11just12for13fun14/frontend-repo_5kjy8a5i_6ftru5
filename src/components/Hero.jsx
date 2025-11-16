import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Play, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(99,102,241,0.20),transparent),radial-gradient(60%_60%_at_20%_20%,rgba(147,51,234,0.15),transparent),radial-gradient(60%_60%_at_80%_20%,rgba(59,130,246,0.15),transparent)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative pt-24 pb-16 sm:pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 px-3 py-1 text-xs text-slate-700 shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
              New: AI-assisted school administration
            </span>
          </motion.div>

          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.7 }} className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
            <span className="bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 bg-clip-text text-transparent">Smarter Schools Start Here</span>
          </motion.h1>

          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="mt-5 text-lg text-slate-600">
            Automate attendance, fees, communication, and analytics in one delightful platform. Designed for modern institutions that value clarity, speed, and precision.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.6 }} className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#pricing" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 px-6 py-3 text-white font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all">
              Start free trial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#demo" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-indigo-700 bg-white/70 border border-white/50 backdrop-blur shadow-sm font-semibold">
              <Play className="h-4 w-4" />
              Watch demo
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-12 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/70 border border-white/60 p-4 shadow-xl backdrop-blur-md">
              <div className="h-28 rounded-xl bg-gradient-to-br from-indigo-100 via-white to-blue-100" />
              <p className="mt-3 text-sm font-semibold text-slate-700">Attendance widget</p>
            </div>
            <div className="rounded-2xl bg-white/70 border border-white/60 p-4 shadow-xl backdrop-blur-md">
              <div className="h-28 rounded-xl bg-gradient-to-br from-fuchsia-100 via-white to-indigo-100" />
              <p className="mt-3 text-sm font-semibold text-slate-700">Analytics card</p>
            </div>
          </motion.div>
        </div>

        <div className="relative h-[520px]">
          <div className="absolute inset-0 rounded-[28px] border border-white/50 bg-white/40 shadow-[0_10px_40px_rgba(79,70,229,0.15)] overflow-hidden">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute -inset-10 bg-gradient-to-t from-white to-transparent opacity-60" />
        </div>
      </div>
    </section>
  )
}
