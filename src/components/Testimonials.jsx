import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Alicia Gomez',
    role: 'Principal, Northview Academy',
    quote: 'We onboarded in one week. Attendance, fees, and communication are finally in one calm place.',
    avatar: 'https://i.pravatar.cc/100?img=5'
  },
  {
    name: 'Marcus Lee',
    role: 'Head of Operations, Horizon High',
    quote: 'The analytics saved us hours each week and improved decision-making across the board.',
    avatar: 'https://i.pravatar.cc/100?img=15'
  },
  {
    name: 'Priya Nair',
    role: 'Teacher, Greenwood Public',
    quote: 'Parent messaging is seamless. My classes run smoother than ever.',
    avatar: 'https://i.pravatar.cc/100?img=25'
  }
]

const logos = ['Aurora Prep', 'Greenwood Public', 'Horizon High', 'Northview', 'Westlake']

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Loved by modern schools</h2>
          <p className="mt-3 text-slate-600">Trusted by forward-thinking institutions worldwide.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white/70 border border-white/60 backdrop-blur-xl p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt="" className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-slate-700">“{t.quote}”</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-white/60 bg-white/50 backdrop-blur p-6">
          <p className="text-center text-xs uppercase tracking-wider text-slate-500">Schools using NovaSchool</p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-4 text-center">
            {logos.map(l => (
              <div key={l} className="text-sm font-semibold text-slate-700 bg-gradient-to-br from-slate-50 to-white rounded-xl py-3 border border-white/70 shadow-inner">{l}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
