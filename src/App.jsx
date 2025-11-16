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
      {/* Clean, solid theme – no gradients */}
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
