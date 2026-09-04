import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-32 text-center">
      <div className="inline-flex items-center gap-2 bg-purple/10 text-purple font-display font-semibold text-sm px-4 py-2 rounded-full mb-6">
        <span className="w-2 h-2 rounded-full bg-purple animate-pulse" />
        Oops!
      </div>

      <h1 className="font-display font-extrabold text-6xl sm:text-8xl text-ink tracking-tight">
        4<span className="text-purple">0</span>4
      </h1>

      <p className="mt-6 text-body text-lg max-w-md mx-auto leading-relaxed">
        The page you are looking for does not exist or has been moved.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2.5 bg-purple text-white font-display font-semibold px-6 sm:px-8 py-3.5 rounded-full hover:bg-purple-deep transition-all shadow-[0_4px_0_0_var(--color-purple-deep)] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_var(--color-purple-deep)] active:translate-y-[4px] active:shadow-none text-sm"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Link>
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center justify-center gap-2 bg-white text-ink font-display font-semibold px-5 sm:px-7 py-3.5 rounded-full border-2 border-ink/10 hover:border-purple/30 hover:text-purple transition-all text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </button>
      </div>
    </section>
  )
}
