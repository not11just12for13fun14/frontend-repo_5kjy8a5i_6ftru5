import { Link } from 'react-router-dom'

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 dark:bg-[#0f1221] dark:text-slate-100">
      <div className="flex-1 grid place-items-center px-4">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <Link to="/" className="inline-flex items-center justify-center text-2xl font-bold tracking-tight text-slate-900 dark:text-white">NovaSchool</Link>
            <h1 className="mt-6 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{title}</h1>
            {subtitle && <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">{subtitle}</p>}
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            {children}
          </div>
          <p className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} NovaSchool. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
