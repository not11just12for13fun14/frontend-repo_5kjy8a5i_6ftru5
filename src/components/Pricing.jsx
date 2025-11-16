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
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_70%_0%,rgba(59,130,246,0.10),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Pricing that scales with you</h2>
          <p className="mt-3 text-slate-600">Simple tiers, transparent value. Start free and upgrade when you grow.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div key={t.name} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className={`relative rounded-3xl p-6 backdrop-blur-xl border shadow-xl ${t.highlighted ? 'bg-white/80 border-indigo-200 shadow-indigo-500/20' : 'bg-white/60 border-white/60'}`}>
              {t.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 px-3 py-1 text-xs font-semibold text-white shadow">Recommended</div>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <div className="text-right">
                  <div className="text-3xl font-extrabold">{t.price}</div>
                  <div className="text-xs text-slate-500">{t.period}</div>
                </div>
              </div>

              <ul className="mt-4 space-y-3 text-sm">
                {t.features.map(f => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white"><Check className="h-3 w-3" /></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <button className={`w-full rounded-full px-5 py-2 text-sm font-semibold shadow ${t.highlighted ? 'text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600' : 'bg-white border border-white/60 text-slate-700'}`}>Choose {t.name}</button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full text-sm overflow-hidden rounded-2xl border border-white/60 bg-white/60">
            <thead>
              <tr className="bg-white/80">
                <th className="px-4 py-3 text-left">Feature</th>
                {tiers.map(t => (
                  <th key={t.name} className="px-4 py-3 text-left">{t.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {['Attendance', 'Online payments', 'Analytics', 'Parent messaging', 'Integrations'].map((row) => (
                <tr key={row} className="border-t border-white/60">
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
