import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Play, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative pt-24 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
              New: AI-assisted school administration
            </span>
          </motion.div>

          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.7 }} className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.05] text-slate-900 dark:text-white">
            Smarter Schools Start Here
          </motion.h1>

          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="mt-5 text-lg text-slate-600 max-w-xl dark:text-slate-300">
            Automate attendance, fees, communication, and analytics in one delightful platform. Designed for modern institutions that value clarity, speed, and precision.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.6 }} className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#pricing" className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-white font-semibold shadow-lg hover:bg-indigo-500 transition-all">
              Start free trial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#demo" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-slate-700 bg-white border border-slate-200 shadow-sm font-semibold hover:bg-slate-50 dark:text-slate-100 dark:bg-white/10 dark:border-white/10 dark:hover:bg-white/15">
              <Play className="h-4 w-4" />
              Watch demo
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-12 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-xl">
              <div className="h-28 rounded-xl bg-slate-100 dark:bg-[#141833]" />
              <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-slate-200">Attendance widget</p>
            </div>
            <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-xl">
              <div className="h-28 rounded-xl bg-slate-100 dark:bg-[#141833]" />
              <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-slate-200">Analytics card</p>
            </div>
          </motion.div>
        </div>

        <div className="relative h:[520px] lg:h-[520px] h-[420px]">
          <div className="absolute inset-0 rounded-[28px] border border-slate-200 bg-white shadow-[0_10px_40px_rgba(2,6,23,0.08)] overflow-hidden dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_80px_rgba(14,165,233,0.15)]">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
