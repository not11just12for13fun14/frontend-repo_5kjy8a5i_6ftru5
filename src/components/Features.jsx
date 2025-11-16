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
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(65%_40%_at_70%_10%,rgba(99,102,241,0.12),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Built for calm, efficient administration
          </h2>
          <p className="mt-3 text-slate-600">Automate the routine, amplify outcomes. Every workflow refined for speed.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group relative rounded-2xl p-6 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-200/20 via-white to-blue-200/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 text-white flex items-center justify-center shadow-md">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">{f.title}</h3>
              </div>
              <p className="relative mt-3 text-sm text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
