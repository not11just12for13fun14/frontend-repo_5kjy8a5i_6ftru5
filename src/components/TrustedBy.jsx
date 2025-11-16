import { motion } from 'framer-motion'

const logos = [
  { name: 'Aurora Unified', color: '#6366F1' },
  { name: 'Northstar Academy', color: '#22D3EE' },
  { name: 'Cedar Grove ISD', color: '#F59E0B' },
  { name: 'Blue Ridge Prep', color: '#10B981' },
  { name: 'Summit Charter', color: '#A78BFA' },
  { name: 'Riverbend Public', color: '#60A5FA' },
  { name: 'Pioneer K-12', color: '#EF4444' },
  { name: 'Vista Heights', color: '#14B8A6' },
]

function Pill({ name, color }) {
  return (
    <div className="group relative inline-flex items-center justify-center rounded-2xl border border-slate-200/70 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
      <span
        className="absolute inset-0 -z-10 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60"
        style={{ background: `linear-gradient(90deg, ${color}33, transparent)` }}
      />
      <span
        className="mr-2 inline-block h-2 w-2 rounded-full"
        style={{ backgroundColor: color }}
      />
      {name}
    </div>
  )
}

export default function TrustedBy() {
  const row1 = [...logos, ...logos]
  const row2 = [...logos.slice().reverse(), ...logos.slice().reverse()]

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 select-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">Trusted by forward‑thinking schools</p>
          <h2 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
            Helping districts drive outcomes at scale
          </h2>
        </div>

        <div className="mt-10 space-y-6">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent dark:from-[#0f1221]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent dark:from-[#0f1221]" />
            <motion.div
              className="flex gap-4"
              initial={{ x: 0 }}
              animate={{ x: ['0%', '-50%'] }}
              transition={{ ease: 'linear', duration: 18, repeat: Infinity }}
            >
              {row1.map((l, i) => (
                <Pill key={`r1-${i}`} name={l.name} color={l.color} />
              ))}
            </motion.div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent dark:from-[#0f1221]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent dark:from-[#0f1221]" />
            <motion.div
              className="flex gap-4"
              initial={{ x: '-50%' }}
              animate={{ x: ['-50%', '0%'] }}
              transition={{ ease: 'linear', duration: 18, repeat: Infinity }}
            >
              {row2.map((l, i) => (
                <Pill key={`r2-${i}`} name={l.name} color={l.color} />
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((l) => (
            <div
              key={l.name}
              className="flex items-center justify-center rounded-xl border border-slate-200/70 bg-white/60 px-4 py-6 text-sm font-semibold text-slate-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 48 48"
                className="mr-3 h-6 w-6"
                style={{ color: l.color }}
              >
                <defs>
                  <linearGradient id={`g-${l.name.replace(/\s/g, '')}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={l.color} stopOpacity="0.9" />
                    <stop offset="100%" stopColor={l.color} stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                <rect x="6" y="6" width="36" height="36" rx="10" fill={`url(#g-${l.name.replace(/\s/g, '')})`} />
              </svg>
              {l.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
