import { useState } from 'react'
import Navbar from '../components/Navbar'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function RequestDemo() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    school: '',
    preferred_time: '',
    message: ''
  })
  const [status, setStatus] = useState({ loading: false, error: '', success: '' })

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, error: '', success: '' })
    try {
      const res = await fetch(`${API_BASE}/demo/request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Unable to submit. Please try again.')
      setStatus({ loading: false, error: '', success: 'Thanks! We’ll contact you shortly to schedule your demo.' })
      setForm({ name: '', email: '', school: '', preferred_time: '', message: '' })
    } catch (err) {
      setStatus({ loading: false, error: err.message, success: '' })
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#0f1221] dark:text-white">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold tracking-tight">Request a live demo</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Tell us a bit about your school and we’ll reach out to set up a walkthrough.</p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          {status.error && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300">{status.error}</div>
          )}
          {status.success && (
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">{status.success}</div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1">Full name</label>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Alex Johnson"
              required
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-white/10 dark:bg-white/5 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Work email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="you@school.org"
              required
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-white/10 dark:bg:white/5 dark:bg-white/5 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">School / Organization</label>
            <input
              name="school"
              value={form.school}
              onChange={onChange}
              placeholder="Springfield High School"
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border:white/10 dark:border-white/10 dark:bg-white/5 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Preferred time (optional)</label>
            <input
              name="preferred_time"
              value={form.preferred_time}
              onChange={onChange}
              placeholder="e.g. Tue/Thu 2–4pm ET"
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-white/10 dark:bg-white/5 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Anything else?</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows={4}
              placeholder="Goals, timelines, what you want to see in the demo"
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-white/10 dark:bg-white/5 dark:text-white"
            />
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className="inline-flex items-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg ring-1 ring-indigo-600/20 hover:bg-indigo-500 disabled:opacity-50"
          >
            {status.loading ? 'Submitting…' : 'Request demo'}
          </button>
        </form>
      </main>
    </div>
  )
}
