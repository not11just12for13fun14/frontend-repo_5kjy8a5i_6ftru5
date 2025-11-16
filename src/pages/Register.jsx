import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import Input from '../components/Input'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Registration failed')
      localStorage.setItem('token', data.access_token)
      localStorage.setItem('user', JSON.stringify(data.user))
      navigate('/')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout title="Create your account" subtitle="Start your free trial in seconds">
      <form onSubmit={onSubmit} className="space-y-4">
        {error && <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300">{error}</div>}
        <Input label="Full name" name="name" value={form.name} onChange={onChange} placeholder="Alex Johnson" autoComplete="name" required />
        <Input label="Email" type="email" name="email" value={form.email} onChange={onChange} placeholder="you@school.com" autoComplete="email" required />
        <Input label="Password" type="password" name="password" value={form.password} onChange={onChange} placeholder="••••••••" autoComplete="new-password" required />
        <button disabled={loading} className="w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-500 disabled:opacity-50">{loading ? 'Creating account…' : 'Create account'}</button>
      </form>
      <div className="mt-4 text-center text-sm text-slate-600 dark:text-slate-300">
        Already have an account? <Link to="/login" className="font-medium text-indigo-600 hover:underline dark:text-indigo-400">Sign in</Link>
      </div>
    </AuthLayout>
  )
}
