import Link from 'next/link'
import { Phone } from 'lucide-react'
import { DoodlePaperPlane, DoodleStar, DoodleBalloon } from '@/components/Doodles'

export default function CtaBanner() {
  return (
    <section className="bg-white pb-20 sm:pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="bg-cream border border-yellow/30 rounded-[2rem] px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-[0_4px_24px_rgba(255,201,40,0.1)]">
          {/* Decorative */}
          <DoodlePaperPlane className="w-10 h-10 absolute right-6 top-4 hidden sm:block opacity-40" color="var(--color-orange)" />
          <DoodleStar className="w-5 h-5 absolute left-6 bottom-4 hidden sm:block animate-wiggle" />
          <DoodleBalloon className="w-6 h-9 absolute right-20 bottom-2 hidden lg:block animate-bounce-gentle delay-500" color="var(--color-purple-light)" />

          <div className="flex items-center gap-5 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-orange/15 flex items-center justify-center shrink-0">
              <span className="text-2xl">🎉</span>
            </div>
            <div>
              <p className="font-display font-bold text-lg sm:text-xl text-ink">
                Give your child the best start in life.
              </p>
              <p className="text-sm text-body mt-1">
                Admissions open for <span className="text-pink-deep font-bold">2026-2027</span>
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-orange text-white font-display font-semibold px-7 py-3.5 rounded-full hover:bg-orange-deep transition-all shrink-0 shadow-[0_4px_0_0_var(--color-orange-deep)] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_var(--color-orange-deep)] active:translate-y-[4px] active:shadow-none relative z-10"
          >
            Contact Us Today!
            <Phone className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
