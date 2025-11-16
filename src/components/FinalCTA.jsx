import { Link } from 'react-router-dom'

export default function FinalCTA() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-900 shadow-sm dark:border-white/10 dark:bg-[#141833] dark:text-white dark:shadow-[0_20px_80px_rgba(2,6,23,0.6)]">
          <h3 className="relative text-3xl sm:text-4xl font-extrabold tracking-tight">Begin your school’s transformation today</h3>
          <p className="relative mt-4 max-w-2xl mx-auto text-slate-700 dark:text-white/90">Join thousands of educators moving to a calmer, smarter operating system for schools.</p>
          <div className="relative mt-8 flex items-center justify-center gap-3">
            <a href="#pricing" className="inline-flex items-center rounded-full bg-indigo-600 text-white px-6 py-3 font-semibold shadow-lg hover:bg-indigo-500 transition">Get started</a>
            <Link to="/request-demo" className="inline-flex items-center rounded-full px-6 py-3 font-semibold bg-white border border-slate-200 text-slate-900 shadow-sm hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:text-white dark:hover:bg-white/15">Request a demo</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
