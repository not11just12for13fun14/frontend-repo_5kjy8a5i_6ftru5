import { Moon, Sun } from 'lucide-react'
import useTheme from '../hooks/useTheme'

export default function ThemeToggle({ className = '' }) {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition ${
        isDark
          ? 'border-white/15 bg-white/5 text-slate-200 hover:bg-white/10'
          : 'border-slate-300 bg-white text-slate-700 shadow-sm hover:bg-slate-50'
      } ${className}`}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'}</span>
    </button>
  )
}
