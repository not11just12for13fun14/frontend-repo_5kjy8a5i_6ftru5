import { motion } from 'framer-motion'
import { CalendarCheck2, CreditCard, BarChart3, MessageSquare } from 'lucide-react'

const features = [
  { icon: CalendarCheck2, title: 'Attendance automation', desc: 'Face/QR-enabled attendance with instant roll-up and alerts.' },
  { icon: CreditCard, title: 'Smart fee management', desc: 'Online payments, reminders, waivers, and reconciliation.' },
  { icon: BarChart3, title: 'Real-time analytics', desc: 'Dashboards for leaders with KPIs across academics & ops.' },
  { icon: MessageSquare, title: 'Parent–teacher communication', desc: 'Chats, announcements, and meeting scheduling in one place.' },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
            Built for calm, efficient administration
          </h2>
          <p className="mt-3 text-slate-300">Automate the routine, amplify outcomes. Every workflow refined for speed.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ y: 16, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group relative rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(2,6,23,0.4)]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-transparent to-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 text-white flex items-center justify-center shadow-md">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-slate-100">{f.title}</h3>
              </div>
              <p className="relative mt-3 text-sm text-slate-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
