import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'

const BASE_TIERS = [
  {
    name: 'Starter',
    monthly: 0,
    yearly: 0,
    features: ['Up to 100 students', 'Basic attendance', 'Email support'],
    highlighted: false,
  },
  {
    name: 'Growth',
    monthly: 199,
    // ~2 months off for annual billing
    yearly: 1990,
    features: ['Unlimited students', 'Smart fee management', 'Analytics & reports', 'Parent messaging'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    monthly: null,
    yearly: null,
    features: ['SIS integrations', 'SSO & compliance', 'Dedicated success manager'],
    highlighted: false,
  },
]

export default function Pricing() {
  const [billing, setBilling] = useState('monthly') // 'monthly' | 'yearly'

  // Persist selection so it sticks on refresh
  useEffect(() => {
    const saved = localStorage.getItem('billing')
    if (saved === 'monthly' || saved === 'yearly') setBilling(saved)
  }, [])
  useEffect(() => {
    localStorage.setItem('billing', billing)
  }, [billing])

  const tiers = useMemo(() => {
    return BASE_TIERS.map(t => {
      if (t.name === 'Enterprise') {
        return {
          ...t,
          priceLabel: 'Custom',
          periodLabel: billing === 'yearly' ? 'annual' : 'custom',
        }
      }
      const price = billing === 'yearly' ? t.yearly : t.monthly
      const priceLabel = `$${price}`
      const periodLabel = billing === 'yearly' ? 'per year (billed annually)' : 'per month'
      return { ...t, priceLabel, periodLabel }
    })
  }, [billing])

  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Pricing that scales with you</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Simple tiers, transparent value. Start free and upgrade when you grow.</p>
        </div>

        {/* Billing toggle */}
        <div className="mt-8 flex items-center justify-center">
          <div className="relative inline-flex items-center rounded-full border border-slate-200 bg-white p-1 text-sm shadow-sm dark:border-white/10 dark:bg-white/5">
            <button
              type="button"
              onClick={() => setBilling('monthly')}
              className={`relative z-10 rounded-full px-4 py-1.5 font-medium transition-colors ${
                billing === 'monthly'
                  ? 'text-slate-900 dark:text-white'
                  : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling('yearly')}
              className={`relative z-10 rounded-full px-4 py-1.5 font-medium transition-colors ${
                billing === 'yearly'
                  ? 'text-slate-900 dark:text-white'
                  : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              Yearly
            </button>
            <motion.span
              layout
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              className="absolute inset-y-1 w-1/2 rounded-full bg-slate-100 shadow-inner dark:bg-white/10"
              style={{ left: billing === 'monthly' ? '4px' : 'calc(50% + 4px)' }}
            />
          </div>
          {billing === 'yearly' && (
            <motion.span initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="ml-3 rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
              Save ~17%
            </motion.span>
          )}
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative rounded-3xl p-6 border shadow-sm ${
                t.highlighted
                  ? 'bg-indigo-50 border-indigo-200 dark:bg-white/10 dark:border-indigo-400/30'
                  : 'bg-white border-slate-200 dark:bg-white/5 dark:border-white/10 dark:shadow-[0_10px_40px_rgba(2,6,23,0.4)]'
              }`}
            >
              {t.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow">Recommended</div>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{t.name}</h3>
                <div className="text-right">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={billing + t.name}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                      className="text-3xl font-extrabold text-slate-900 dark:text-white"
                    >
                      {t.priceLabel}
                    </motion.div>
                  </AnimatePresence>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{t.periodLabel}</div>
                </div>
              </div>

              <ul className="mt-4 space-y-3 text-sm">
                {t.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white"><Check className="h-3 w-3" /></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <button className={`${
                  t.highlighted
                    ? 'text-white bg-indigo-600 hover:bg-indigo-500'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 dark:bg-white/5 dark:border-white/10 dark:text-slate-100 dark:hover:bg-white/10'
                } w-full rounded-full px-5 py-2 text-sm font-semibold shadow`}>
                  Choose {t.name}
                </button>
                {t.name === 'Growth' && (
                  <p className="mt-2 text-center text-xs text-slate-500 dark:text-slate-400">
                    {billing === 'yearly' ? 'Billed $1,990 annually' : 'Billed monthly, cancel anytime'}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full text-sm overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
            <thead>
              <tr className="bg-slate-50 dark:bg-white/10">
                <th className="px-4 py-3 text-left">Feature</th>
                {tiers.map(t => (
                  <th key={t.name} className="px-4 py-3 text-left">{t.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {['Attendance', 'Online payments', 'Analytics', 'Parent messaging', 'Integrations'].map((row) => (
                <tr key={row} className="border-t border-slate-200 dark:border-white/10">
                  <td className="px-4 py-3 font-medium">{row}</td>
                  {tiers.map((t) => (
                    <td key={t.name + row} className="px-4 py-3">{t.highlighted || t.name !== 'Starter' ? 'Included' : row === 'Attendance' ? 'Basic' : '—'}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
