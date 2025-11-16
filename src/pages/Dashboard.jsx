import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { BookOpen, Calendar, GraduationCap, Users, ClipboardList, Bell } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    const storedUser = (() => { try { return JSON.parse(localStorage.getItem('user')) } catch { return null } })()
    if (storedUser) setUser(storedUser)

    async function fetchMe() {
      if (!token) { setLoading(false); return }
      try {
        const res = await fetch(`${API_BASE}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        if (!res.ok) throw new Error('Session expired')
        const data = await res.json()
        setUser(data)
        localStorage.setItem('user', JSON.stringify(data))
      } catch (e) {
        setError('Your session has expired. Please sign in again.')
        localStorage.removeItem('token')
        localStorage.removeItem('user')
      } finally {
        setLoading(false)
      }
    }

    fetchMe()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0f1221] flex items-center justify-center">
        <div className="animate-pulse text-slate-600 dark:text-slate-300">Loading your dashboard…</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0f1221] flex items-center justify-center p-6">
        <div className="max-w-md w-full rounded-2xl border border-slate-200/70 bg-white p-6 text-center dark:border-white/10 dark:bg-white/5">
          <div className="mb-3 text-red-600 dark:text-red-400">{error}</div>
          <Link to="/login" className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg ring-1 ring-indigo-600/20 hover:bg-indigo-500 transition">Go to sign in</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#0f1221] dark:text-white">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight">Welcome back{user?.name ? `, ${user.name}` : ''} 👋</h1>
          <p className="text-slate-600 dark:text-slate-300 mt-1">Here’s a quick overview of your school today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Students', value: '1,284', icon: Users, trend: '+3.1%' },
            { title: 'Teachers', value: '86', icon: GraduationCap, trend: '+1.2%' },
            { title: 'Classes', value: '342', icon: BookOpen, trend: '+0.8%' },
            { title: 'Attendance', value: '96.2%', icon: ClipboardList, trend: '-0.4%' },
          ].map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-2xl border border-slate-200/70 bg-white p-5 dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{card.title}</p>
                  <p className="mt-1 text-2xl font-semibold">{card.value}</p>
                </div>
                <div className="rounded-xl bg-slate-100 p-3 ring-1 ring-slate-200 dark:bg-white/10 dark:ring-white/10">
                  <card.icon className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">Monthly change: {card.trend}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="lg:col-span-2 rounded-2xl border border-slate-200/70 bg-white p-5 dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Upcoming events</h2>
              <button className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-slate-900/10 hover:bg-slate-900/10 dark:bg-white/10 dark:text-slate-200 dark:ring-white/10 dark:hover:bg-white/15">
                <Calendar className="h-4 w-4" /> Add event
              </button>
            </div>
            <div className="mt-4 space-y-3">
              {[
                { date: 'Mon, 10:00', title: 'Staff meeting', desc: 'Weekly planning with department heads' },
                { date: 'Wed, 13:00', title: 'Science fair prep', desc: 'Student project walkthroughs' },
                { date: 'Fri, 09:00', title: 'Parent outreach', desc: 'PTA logistics and agenda' },
              ].map((e) => (
                <div key={e.title} className="flex items-start gap-4 rounded-xl border border-slate-200/70 p-3 dark:border-white/10">
                  <div className="text-xs font-medium text-indigo-600 dark:text-indigo-300">{e.date}</div>
                  <div>
                    <div className="font-medium">{e.title}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">{e.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="rounded-2xl border border-slate-200/70 bg-white p-5 dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Notifications</h2>
              <button className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-slate-900/10 hover:bg-slate-900/10 dark:bg-white/10 dark:text-slate-200 dark:ring-white/10 dark:hover:bg-white/15">
                <Bell className="h-4 w-4" /> Mark all read
              </button>
            </div>
            <div className="mt-4 space-y-3">
              {[
                { title: 'Low attendance in Class 8B', time: '2h ago' },
                { title: 'New admission: Sara K.', time: '4h ago' },
                { title: 'Schedule updated for next week', time: '1d ago' },
              ].map((n) => (
                <div key={n.title} className="rounded-xl border border-slate-200/70 p-3 dark:border-white/10">
                  <div className="font-medium">{n.title}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{n.time}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
