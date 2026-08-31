import Link from 'next/link'
import { Sparkles, Heart } from 'lucide-react'
import { SITE } from '@/lib/seo'
import { footerPrograms, footerQuickLinks } from '@/data/content'
import { GrassDivider, DoodleFlower, DoodleTree, DoodleTeddy, DoodleTrain, DoodleBalloon, DoodleCloud, DoodleButterfly, DoodleStar } from '@/components/Doodles'

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.25-1.5 1.5-1.5H16.5V4.5C16.24 4.46 15.35 4.4 14.3 4.4c-2.2 0-3.7 1.34-3.7 3.8V10.5H8v3h2.6V21h2.9Z" />
    </svg>
  )
}
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}
function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12s0-3.2-.4-4.7a3 3 0 0 0-2.1-2.1C18 4.8 12 4.8 12 4.8s-6 0-7.5.4a3 3 0 0 0-2.1 2.1C2 8.8 2 12 2 12s0 3.2.4 4.7a3 3 0 0 0 2.1 2.1c1.5.4 7.5.4 7.5.4s6 0 7.5-.4a3 3 0 0 0 2.1-2.1C22 15.2 22 12 22 12Zm-12 3V9l5.2 3-5.2 3Z" />
    </svg>
  )
}
function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.25a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM20.45 20h-3.37v-5.9c0-1.4-.5-2.36-1.76-2.36-.96 0-1.53.65-1.78 1.27-.09.22-.11.53-.11.84V20H9.9V8.5h3.34v1.45c.5-.7 1.29-1.7 3.1-1.7 2.27 0 3.98 1.48 3.98 4.66V20Z" />
    </svg>
  )
}

const SOCIAL_LINKS = [
  { href: SITE.social.facebook, label: 'Facebook', Icon: FacebookIcon },
  { href: SITE.social.instagram, label: 'Instagram', Icon: InstagramIcon },
  { href: SITE.social.youtube, label: 'YouTube', Icon: YoutubeIcon },
  { href: SITE.social.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
]

export default function Footer() {
  return (
    <>
      {/* Green illustrated footer */}
      <footer className="relative bg-green-deep overflow-hidden">
        {/* Wavy grass top */}
        <GrassDivider className="w-full h-10 sm:h-14 block" />

        {/* Landscape decorations — positioned in the lower portion */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Grass tufts */}
          <svg className="absolute bottom-0 left-0 w-full h-24 opacity-20" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path d="M0 100 Q50 60 100 100 Q150 50 200 100 Q250 70 300 100 Q350 40 400 100 Q450 65 500 100 Q550 55 600 100 Q650 45 700 100 Q750 60 800 100 Q850 50 900 100 Q950 65 1000 100 Q1050 55 1100 100 Q1150 70 1200 100Z" fill="white" opacity="0.15" />
          </svg>

          {/* Trees */}
          <DoodleTree className="w-16 h-20 absolute left-[5%] bottom-12 opacity-25" />
          <DoodleTree className="w-14 h-18 absolute left-[22%] bottom-10 opacity-20" />
          <DoodleTree className="w-16 h-20 absolute right-[8%] bottom-12 opacity-25" />
          <DoodleTree className="w-12 h-16 absolute right-[25%] bottom-10 opacity-18" />

          {/* Flowers scattered */}
          <DoodleFlower className="w-7 h-9 absolute left-[12%] bottom-8 opacity-30" />
          <DoodleFlower className="w-6 h-8 absolute left-[35%] bottom-10 opacity-25" color="var(--color-yellow)" />
          <DoodleFlower className="w-7 h-9 absolute right-[15%] bottom-8 opacity-30" />
          <DoodleFlower className="w-5 h-7 absolute right-[38%] bottom-12 opacity-25" color="var(--color-yellow)" />

          {/* Butterflies */}
          <DoodleButterfly className="w-10 h-8 absolute left-[18%] bottom-28 opacity-25 animate-float-y" />
          <DoodleButterfly className="w-8 h-6 absolute right-[20%] bottom-32 opacity-20 animate-float-y delay-700" />

          {/* Clouds */}
          <DoodleCloud className="w-24 h-15 absolute left-[8%] top-6 opacity-15" />
          <DoodleCloud className="w-20 h-13 absolute right-[12%] top-10 opacity-12" />

          {/* Stars */}
          <DoodleStar className="w-5 h-5 absolute left-[40%] top-8 opacity-20 animate-twinkle" />
          <DoodleStar className="w-4 h-4 absolute right-[42%] top-4 opacity-15 animate-twinkle delay-500" />

          {/* Balloons */}
          <DoodleBalloon className="w-8 h-12 absolute left-[30%] top-4 opacity-20 animate-bounce-gentle delay-300" color="var(--color-yellow)" />
          <DoodleBalloon className="w-7 h-10 absolute right-[32%] top-8 opacity-18 animate-bounce-gentle delay-700" color="var(--color-pink)" />
        </div>

        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-6 pb-6 sm:pt-10 sm:pb-10 relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 sm:gap-10 text-white">
            {/* Brand */}
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-yellow" />
                </span>
                <div className="leading-none">
                  <p className="font-display font-extrabold text-base">{SITE.shortName}</p>
                  <p className="text-[10px] text-white/70 mt-0.5">{SITE.tagline}</p>
                </div>
              </div>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                Nurturing young minds in a safe, fun, and stimulating environment where every child
                can thrive and reach their full potential.
              </p>
              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center hover:bg-white/25 transition-all hover:scale-105"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold text-sm mb-2 relative">
                Quick Links
                <span className="block w-6 h-0.5 bg-yellow rounded-full mt-1.5" />
              </h4>
              <ul className="space-y-1.5 text-xs text-white/80">
                {footerQuickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-yellow transition-colors inline-flex items-center gap-1.5 group py-1">
                      <span className="w-1 h-1 rounded-full bg-white/40 group-hover:bg-yellow transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-display font-bold text-sm mb-2 relative">
                Programs
                <span className="block w-6 h-0.5 bg-yellow rounded-full mt-1.5" />
              </h4>
              <ul className="space-y-1.5 text-xs text-white/80">
                {footerPrograms.map((label) => (
                  <li key={label}>
                    <Link href="/programs" className="hover:text-yellow transition-colors inline-flex items-center gap-1.5 group py-1">
                      <span className="w-1 h-1 rounded-full bg-white/40 group-hover:bg-yellow transition-colors" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Decorative landscape bottom — teddy left, train right */}
        <div className="relative h-16 sm:h-24 pointer-events-none">
          {/* Teddy bear — bottom left */}
          <DoodleTeddy className="w-14 h-18 sm:w-20 sm:h-24 absolute left-[6%] sm:left-[10%] bottom-0" />

          {/* Train — bottom right */}
          <DoodleTrain className="w-20 h-12 sm:w-28 sm:h-16 absolute right-[4%] sm:right-[8%] bottom-2" />

          {/* Extra flowers around corners */}
          <DoodleFlower className="w-6 h-8 absolute left-[28%] bottom-2 opacity-40" />
          <DoodleFlower className="w-5 h-7 absolute right-[30%] bottom-3 opacity-35" color="var(--color-yellow)" />
          <DoodleFlower className="w-5 h-7 absolute left-[2%] bottom-0 opacity-30" />
          <DoodleFlower className="w-5 h-7 absolute right-[2%] bottom-0 opacity-30" color="var(--color-yellow)" />
        </div>
      </footer>

      {/* Cream copyright strip */}
      <div className="bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-body">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed with <Heart className="w-3 h-3 text-pink fill-pink" /> for children
          </p>
        </div>
        {/* Tiny decorative flowers */}
        <DoodleFlower className="w-4 h-5 absolute left-[20%] top-1 opacity-25 hidden sm:block" />
        <DoodleFlower className="w-3 h-4 absolute right-[15%] bottom-1 opacity-20 hidden sm:block" color="var(--color-yellow)" />
      </div>
    </>
  )
}
