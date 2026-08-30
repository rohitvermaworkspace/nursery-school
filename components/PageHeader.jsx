import { DoodleStar, DoodleSun, DoodleCloud, DoodleHeart, DoodleBalloon } from '@/components/Doodles'

export default function PageHeader({ title, subtitle }) {
  return (
    <section className="bg-lavender relative overflow-hidden">
      <DoodleSun className="w-12 h-12 absolute left-10 top-8 hidden sm:block animate-spin-slow" />
      <DoodleStar className="w-7 h-7 absolute right-16 top-10 hidden sm:block animate-wiggle" />
      <DoodleCloud className="w-24 h-15 absolute right-[8%] top-6 hidden md:block opacity-30 animate-float-x" />
      <DoodleHeart className="w-5 h-5 absolute left-[25%] top-14 hidden lg:block animate-pulse-soft delay-300" />
      <DoodleBalloon className="w-7 h-10 absolute right-[25%] bottom-8 hidden lg:block animate-bounce-gentle delay-500" color="var(--color-yellow)" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-24 text-center relative z-10">
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight">{title}</h1>
        {subtitle && (
          <p className="mt-5 text-body max-w-2xl mx-auto leading-relaxed text-[15px] sm:text-base">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
