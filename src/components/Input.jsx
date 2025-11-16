export default function Input({ label, type = "text", name, value, onChange, placeholder, autoComplete, required, error }) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 inline-block text-slate-700 dark:text-slate-200">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className={`w-full rounded-xl border bg-white/80 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-white/10 dark:bg-white/10 dark:text-white ${error ? 'border-red-500 focus:ring-red-500' : 'border-slate-200'}`}
      />
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  )
}
