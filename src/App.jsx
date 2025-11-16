import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Onboarding from './components/Onboarding'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <Onboarding />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <footer className="py-12 text-center text-sm text-slate-500">© {new Date().getFullYear()} NovaSchool. All rights reserved.</footer>
    </div>
  )
}

export default App
