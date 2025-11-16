import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Features from './components/Features'
import Onboarding from './components/Onboarding'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FinalCTA from './components/FinalCTA'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased dark:bg-[#0f1221] dark:text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <Onboarding />
        <Testimonials />
        <Pricing />
        <FinalCTA />

        <div className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-200/70 bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Try the School Dashboard</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Requires sign in</p>
                </div>
                <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg ring-1 ring-indigo-600/20 hover:bg-indigo-500 transition">Open dashboard</Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-600 dark:text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} NovaSchool. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-slate-900 dark:hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-slate-900 dark:hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-slate-900 dark:hover:text-white transition-colors">Customers</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
