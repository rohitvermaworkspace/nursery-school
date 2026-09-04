import AppImage from '@/components/AppImage'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, Heart, Sprout } from 'lucide-react'
import { DoodleRainbow, DoodleSun, DoodleStar, DoodlePaperPlane, DoodleCloud, DoodleBalloon, DoodleHeart } from '@/components/Doodles'

const BADGES = [
  { icon: ShieldCheck, label: 'Safe & Secure Environment' },
  { icon: Heart, label: 'Experienced Teachers' },
  { icon: Sprout, label: 'Play, Learn & Grow Together' },
]

export default function Hero() {
  return (
    <section className="bg-lavender relative">
      {/* Decorative elements */}
      

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
        <DoodleCloud className="w-28 h-18 absolute left-[5%] top-8 hidden sm:block opacity-60 animate-float-x" />
      <DoodleCloud className="w-20 h-13 absolute right-[15%] top-14 hidden lg:block opacity-40 animate-float-x delay-500" />
      <DoodleRainbow className="w-28 h-18 absolute left-2 -top-2 hidden sm:block" />
      <DoodleSun className="w-14 h-14 absolute right-24 top-8 hidden sm:block animate-spin-slow" />
      <DoodleStar className="w-7 h-7 absolute left-72 top-6 hidden lg:block animate-wiggle" />
      <DoodlePaperPlane className="w-12 h-12 absolute right-8 top-28 hidden sm:block animate-float-y" />
      <DoodleBalloon className="w-8 h-12 absolute left-[12%] bottom-20 hidden lg:block animate-bounce-gentle delay-300" color="var(--color-pink)" />
      <DoodleBalloon className="w-7 h-10 absolute right-[8%] bottom-32 hidden lg:block animate-bounce-gentle delay-700" color="var(--color-yellow)" />
      <DoodleHeart className="w-5 h-5 absolute right-[20%] top-40 hidden lg:block animate-pulse-soft delay-200" />
      <DoodleStar className="w-5 h-5 absolute left-[30%] bottom-16 hidden lg:block animate-wiggle delay-300" color="var(--color-orange)" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-purple/10 text-purple font-display font-semibold text-sm px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-purple animate-pulse" />
            Welcome to LittleSprouts
          </div>

          <h1 className="font-display font-extrabold text-[1.75rem] sm:text-[2.5rem] lg:text-[3.4rem] leading-[1.1] text-ink tracking-tight">
            Nurturing young minds for a{' '}
            <span className="text-purple">brighter</span>{' '}
            <span className="text-orange">tomorrow</span>
          </h1>

          <p className="mt-6 text-body text-lg max-w-lg leading-relaxed">
            A perfect place for your child to learn, grow, explore and shine every day.
            We make learning an exciting adventure!
          </p>

          <div className="mt-8 flex flex-row items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 bg-purple text-white font-display font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-purple-deep transition-all shadow-[0_5px_0_0_var(--color-purple-deep)] hover:translate-y-[2px] hover:shadow-[0_3px_0_0_var(--color-purple-deep)] active:translate-y-[5px] active:shadow-none text-sm sm:text-[15px]"
            >
              Join Us Today!
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-white text-ink font-display font-semibold px-5 sm:px-7 py-3.5 sm:py-4 rounded-full border-2 border-ink/10 hover:border-purple/30 hover:text-purple transition-all text-sm sm:text-[15px]"
            >
              Learn More About LittleSprouts
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-5">
            {BADGES.map((badge) => (
              <div key={badge.label} className="flex items-center gap-3 max-w-[170px]">
                <span className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-soft">
                  <badge.icon className="w-5 h-5 text-purple" />
                </span>
                <span className="text-[13px] font-semibold text-ink leading-snug">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Decorative blob behind image */}
          <div className="absolute -inset-4 bg-purple/5 rounded-[3rem] rotate-3" />
          <div className="absolute -inset-4 bg-yellow/10 rounded-[3rem] -rotate-2" />

          <div className="rounded-[2rem] overflow-hidden aspect-[4/3.3] relative shadow-[0_8px_40px_rgba(123,63,228,0.12)] border-4 border-white">
            <AppImage
              src="/images/teacher-helping.jpg"
              alt="A teacher helping two young children build with colorful blocks"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Floating decorative elements around image */}
          <DoodleStar className="w-8 h-8 absolute -top-4 right-12 hidden sm:block animate-wiggle" color="var(--color-yellow)" />
          <DoodleHeart className="w-6 h-6 absolute -bottom-2 left-8 hidden sm:block animate-bounce-gentle" />
          <DoodleCloud className="w-16 h-10 absolute -left-6 top-1/2 hidden lg:block opacity-50" />
        </div>
      </div>
    </section>
  )
}
