import Image from 'next/image'
import { ShieldCheck, Heart, Sprout, Users, Check } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import { buildMetadata } from '@/lib/seo'
import { DoodleStar, DoodleFlower } from '@/components/Doodles'

export const metadata = buildMetadata({
  title: 'About Us',
  description:
    'Learn about LittleSprouts Kindergarten — our mission, our experienced teachers, and the safe, nurturing environment where children grow and thrive.',
  path: '/about',
})

const VALUES = [
  { icon: ShieldCheck, title: 'Safe & Secure', desc: 'Secure facilities and trained staff, so every family feels at ease.', color: 'var(--color-purple)' },
  { icon: Heart, title: 'Caring Teachers', desc: 'Experienced educators who know every child by name.', color: 'var(--color-pink)' },
  { icon: Sprout, title: 'Play-Based Learning', desc: 'Curiosity-led activities that make learning feel like play.', color: 'var(--color-green)' },
  { icon: Users, title: 'Community Focused', desc: 'Strong partnerships between teachers, children and families.', color: 'var(--color-blue)' },
]

const FEATURES = [
  'Safe learning environment',
  'Experienced teachers',
  'Fun educational activities',
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About LittleSprouts"
        subtitle="Bright minds, bright futures — since day one, our mission has been to give every child a joyful, confident start."
      />

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="absolute -inset-3 bg-purple/5 rounded-[2.5rem] rotate-2" />
          <div className="rounded-[2rem] overflow-hidden aspect-[4/3.2] relative shadow-[0_4px_24px_rgba(0,0,0,0.08)] border-4 border-white">
            <Image
              src="https://images.unsplash.com/photo-1544776527-6b3d6f9b3c5b?q=80&w=900&auto=format&fit=crop"
              alt="Teacher reading a story to a group of young children"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div>
          <DoodleStar className="w-7 h-7 absolute -top-3 right-8 hidden sm:block animate-wiggle" />
          <DoodleFlower className="w-8 h-10 absolute -bottom-2 left-8 hidden sm:block" />
        </div>
        <div>
          <span className="inline-block bg-green/10 text-green font-display font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Welcome
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink mb-2">
            Welcome to Our Kindergarten!
          </h2>
          <span className="block w-12 h-1.5 bg-yellow rounded-full mb-6" />
          <p className="text-body leading-relaxed mb-4 text-[15px]">
            LittleSprouts was founded on a simple idea: young children learn best when they feel
            safe, seen, and free to explore. What started as a single classroom has grown into a
            full early-childhood program spanning play school through kindergarten.
          </p>
          <p className="text-body leading-relaxed mb-6 text-[15px]">
            Every day, our teachers blend structured learning with open-ended play, so children
            build real academic foundations while staying curious, kind, and confident.
          </p>
          <ul className="space-y-3 mb-7">
            {FEATURES.map((feat) => (
              <li key={feat} className="flex items-center gap-3 text-sm font-semibold text-ink">
                <span className="w-6 h-6 rounded-lg bg-green/15 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-green" strokeWidth={3} />
                </span>
                {feat}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-lavender py-16 sm:py-24 relative overflow-hidden">
        <DoodleStar className="w-6 h-6 absolute right-12 top-8 hidden sm:block animate-wiggle delay-300" />
        <DoodleFlower className="w-8 h-10 absolute left-8 bottom-8 hidden sm:block" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block bg-purple/10 text-purple font-display font-semibold text-sm px-4 py-2 rounded-full mb-4">
              Our Values
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink">
              What We <span className="text-purple">Stand For</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white rounded-[1.5rem] p-7 text-center shadow-card hover:shadow-card-hover transition-shadow duration-300 hover:-translate-y-1 transform">
                <span
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: `color-mix(in srgb, ${v.color} 12%, transparent)` }}
                >
                  <v.icon className="w-6 h-6" style={{ color: v.color }} />
                </span>
                <h3 className="font-display font-bold text-ink text-[15px] mb-2">{v.title}</h3>
                <p className="text-sm text-body leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
