import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Onboarding from './components/Onboarding'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0f1221] text-slate-100 antialiased">
      {/* Background orbs and subtle grid */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute top-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/15 blur-[120px]" />
        <div className="absolute bottom-[-12rem] left-1/2 -translate-x-1/2 h-[32rem] w-[32rem] rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0,transparent_95%,rgba(255,255,255,0.05)_95%),linear-gradient(to_bottom,transparent_0,transparent_95%,rgba(255,255,255,0.05)_95%)] bg-[size:24px_24px] opacity-[0.12]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Onboarding />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} NovaSchool. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Customers</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
