import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    features: ['Up to 100 students', 'Basic attendance', 'Email support'],
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$199',
    period: 'per month',
    features: ['Unlimited students', 'Smart fee management', 'Analytics & reports', 'Parent messaging'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'annual',
    features: ['SIS integrations', 'SSO & compliance', 'Dedicated success manager'],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Pricing that scales with you</h2>
          <p className="mt-3 text-slate-300">Simple tiers, transparent value. Start free and upgrade when you grow.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div key={t.name} initial={{ y: 16, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className={`relative rounded-3xl p-6 backdrop-blur-xl border shadow-[0_10px_40px_rgba(2,6,23,0.4)] ${t.highlighted ? 'bg-white/10 border-indigo-400/30' : 'bg-white/5 border-white/10'}`}>
              {t.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow">Recommended</div>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-slate-100">{t.name}</h3>
                <div className="text-right">
                  <div className="text-3xl font-extrabold text-white">{t.price}</div>
                  <div className="text-xs text-slate-400">{t.period}</div>
                </div>
              </div>

              <ul className="mt-4 space-y-3 text-sm">
                {t.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-slate-200">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white"><Check className="h-3 w-3" /></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <button className={`w-full rounded-full px-5 py-2 text-sm font-semibold shadow ${t.highlighted ? 'text-white bg-indigo-600 hover:bg-indigo-500' : 'bg-white/5 border border-white/10 text-slate-100 hover:bg-white/10'}`}>Choose {t.name}</button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full text-sm overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-slate-200">
            <thead>
              <tr className="bg-white/10">
                <th className="px-4 py-3 text-left">Feature</th>
                {tiers.map(t => (
                  <th key={t.name} className="px-4 py-3 text-left">{t.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {['Attendance', 'Online payments', 'Analytics', 'Parent messaging', 'Integrations'].map((row) => (
                <tr key={row} className="border-t border-white/10">
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
