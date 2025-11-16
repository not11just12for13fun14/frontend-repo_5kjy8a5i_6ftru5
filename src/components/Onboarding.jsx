import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

const steps = [
  { title: 'Create school account', desc: 'Tell us about your institution and preferences.' },
  { title: 'Add teachers and students', desc: 'Import via CSV or invite via secure links.' },
  { title: 'Set up classes, fees, timetable', desc: 'Configure subjects, sections, schedules, and fee rules.' },
  { title: 'Dashboard ready', desc: 'You’re set. Launch your operational command center.' },
]

export default function Onboarding() {
  const [current, setCurrent] = useState(0)

  return (
    <section id="onboarding" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">Delightful onboarding</h2>
          <p className="mt-3 text-slate-300">A guided flow that gets your school running in minutes.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 shadow-[0_10px_40px_rgba(2,6,23,0.4)]">
            <div className="flex items-center justify-between">
              <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500"
                  initial={false}
                  animate={{ width: `${((current + 1) / steps.length) * 100}%` }}
                  transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                />
              </div>
              <span className="ml-3 text-xs font-semibold text-slate-300">Step {current + 1} of {steps.length}</span>
            </div>

            <div className="mt-6 relative h-56 sm:h-64">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-900/20 via-white/5 to-sky-900/10 border border-white/10"
                >
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-slate-100">{steps[current].title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{steps[current].desc}</p>

                    <div className="mt-6 grid grid-cols-3 gap-3">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="h-20 rounded-xl bg-white/5 border border-white/10 shadow-inner" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button onClick={() => setCurrent(Math.max(0, current - 1))} className="rounded-full px-4 py-2 text-sm font-semibold bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10">
                Back
              </button>
              <button onClick={() => setCurrent(Math.min(steps.length - 1, current + 1))} className="rounded-full px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 shadow">
                {current === steps.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {steps.map((s, i) => (
              <div key={s.title} className="flex items-start gap-3">
                <CheckCircle2 className={`h-5 w-5 ${i <= current ? 'text-indigo-400' : 'text-slate-600'}`} />
                <div>
                  <p className="font-semibold text-slate-100">{s.title}</p>
                  <p className="text-sm text-slate-300">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
