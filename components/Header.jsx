'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Menu, X, Sparkles } from 'lucide-react'
import { navLinks } from '@/data/content'
import { SITE } from '@/lib/seo'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-white/95 backdrop-blur-sm shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <span className="w-12 h-12 rounded-2xl bg-purple flex items-center justify-center shadow-[0_3px_0_0_var(--color-purple-deep)] group-hover:translate-y-[1px] group-hover:shadow-[0_2px_0_0_var(--color-purple-deep)] transition-all">
              <Sparkles className="w-6 h-6 text-white" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display font-extrabold text-xl text-ink tracking-tight">
                Little<span className="text-purple">Sprouts</span>
              </span>
              <span className="text-[11px] text-body font-semibold tracking-wide mt-0.5">
                {SITE.tagline}
              </span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 group">
              <span className="w-11 h-11 rounded-2xl bg-purple/10 flex items-center justify-center shrink-0 group-hover:bg-purple/15 transition-colors">
                <Phone className="w-5 h-5 text-purple" />
              </span>
              <span className="leading-tight">
                <span className="block text-[11px] text-body font-semibold">Call us today</span>
                <span className="block font-display font-bold text-sm text-ink">{SITE.phoneDisplay}</span>
              </span>
            </a>
            <Link
              href="/contact"
              className="bg-purple text-white font-display font-semibold text-sm px-6 py-3 rounded-full hover:bg-purple-deep transition-all shadow-[0_4px_0_0_var(--color-purple-deep)] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_var(--color-purple-deep)] active:translate-y-[4px] active:shadow-none"
            >
              Enroll Now
            </Link>
          </div>

          <button
            className="md:hidden p-2 -mr-2 text-ink rounded-xl hover:bg-lavender transition-colors"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Colorful pill navigation */}
      <nav className="hidden md:block bg-white/90 backdrop-blur-sm border-t border-ink/5 pb-3">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-2">
          <ul className="flex rounded-full overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            {navLinks.map((link) => (
              <li key={link.href} className="flex-1">
                <Link
                  href={link.href}
                  className="flex items-center justify-center gap-2 h-12 font-display font-semibold text-[13px] text-white transition-all hover:brightness-110 hover:scale-[1.02] hover:z-10 relative"
                  style={{ backgroundColor: link.color }}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white border-t border-ink/5 px-5 py-4 shadow-lg">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-2xl px-5 py-3.5 font-display font-semibold text-sm text-white transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: link.color }}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-3 text-ink px-5 py-3 rounded-2xl hover:bg-lavender transition-colors"
              >
                <span className="w-9 h-9 rounded-xl bg-purple/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-purple" />
                </span>
                <span className="font-display font-bold text-sm">{SITE.phoneDisplay}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
