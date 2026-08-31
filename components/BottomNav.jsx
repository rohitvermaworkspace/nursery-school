'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, BookOpen, Image as ImageIcon, Mail, Menu, X, Users, GraduationCap, FileText } from 'lucide-react'

const TABS = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Programs', href: '/programs', icon: BookOpen },
  { label: 'Gallery', href: '/gallery', icon: ImageIcon },
  { label: 'Contact', href: '/contact', icon: Mail },
]

const MORE_LINKS = [
  { label: 'About Us', href: '/about', icon: Users },
  { label: 'Classes', href: '/classes', icon: GraduationCap },
  { label: 'Blog', href: '/blog', icon: FileText },
]

export default function BottomNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-[60] md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* More menu */}
      {open && (
        <div className="fixed bottom-[72px] left-0 right-0 z-[61] md:hidden px-4 pb-2">
          <div className="bg-white rounded-2xl shadow-[0_-4px_24px_rgba(0,0,0,0.12)] border border-ink/5 overflow-hidden">
            {MORE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-5 py-3.5 font-display font-semibold text-sm transition-colors ${
                  pathname === link.href
                    ? 'bg-purple/10 text-purple'
                    : 'text-ink hover:bg-lavender'
                }`}
              >
                <link.icon className="w-5 h-5" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Bottom nav bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-[55] md:hidden bg-white/95 backdrop-blur-sm border-t border-ink/5" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <div className="flex items-center justify-around h-[68px] px-2">
          {TABS.map((tab) => {
            const isActive = pathname === tab.href
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`flex flex-col items-center justify-center gap-1 w-16 h-full transition-colors ${
                  isActive ? 'text-purple' : 'text-body'
                }`}
              >
                <tab.icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : ''}`} />
                <span className={`text-[10px] font-display ${isActive ? 'font-bold' : 'font-semibold'}`}>
                  {tab.label}
                </span>
              </Link>
            )
          })}
          <button
            onClick={() => setOpen((o) => !o)}
            className={`flex flex-col items-center justify-center gap-1 w-16 h-full transition-colors ${
              open ? 'text-purple' : 'text-body'
            }`}
            aria-label="More options"
            aria-expanded={open}
          >
            {open ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
            <span className={`text-[10px] font-display ${open ? 'font-bold' : 'font-semibold'}`}>
              More
            </span>
          </button>
        </div>
      </nav>
    </>
  )
}
