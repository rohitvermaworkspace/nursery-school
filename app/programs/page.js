import Image from 'next/image'
import { Check } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import { programs } from '@/data/content'
import { buildMetadata } from '@/lib/seo'
import { DoodleStar, DoodleFlower } from '@/components/Doodles'

export const metadata = buildMetadata({
  title: 'Our Programs',
  description:
    'Explore LittleSprouts Kindergarten programs — Play School, Pre-K, and Kindergarten — designed around how young children actually learn.',
  path: '/programs',
})

const HIGHLIGHTS = {
  'play-school': ['Sensory play & motor skills', 'Music, movement and stories', 'Gentle daily routines'],
  'pre-k': ['Early literacy & numeracy', 'Hands-on group projects', 'School-readiness skills'],
  kindergarten: ['Reading & writing foundations', 'Science and social studies', 'Confidence & independence'],
}

export default function ProgramsPage() {
  const list = programs.filter((p) => p.id !== 'why-choose-us')

  return (
    <>
      <PageHeader
        title="Our Programs"
        subtitle="Age-appropriate programs that grow with your child, from first days away from home through kindergarten readiness."
      />

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24 flex flex-col gap-20">
        {list.map((program, i) => (
          <div
            key={program.id}
            id={program.id}
            className={`grid lg:grid-cols-2 gap-12 items-center scroll-mt-24 ${
              i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2.5rem] rotate-2" style={{ backgroundColor: `color-mix(in srgb, ${program.color} 8%, transparent)` }} />
              <div className="rounded-[2rem] overflow-hidden aspect-[4/3.2] relative shadow-[0_4px_24px_rgba(0,0,0,0.08)] border-4 border-white">
                <Image
                  src={program.image}
                  alt={`${program.title} classroom at LittleSprouts Kindergarten`}
                  fill
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                />
              </div>
              <DoodleStar className="w-6 h-6 absolute -top-3 right-8 hidden sm:block animate-wiggle" />
            </div>
            <div>
              <span
                className="inline-block font-display font-semibold text-sm px-5 py-2 rounded-full mb-4 text-white"
                style={{ backgroundColor: program.color }}
              >
                {program.subtitle}
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink mb-4">
                {program.title}
              </h2>
              <p className="text-body leading-relaxed mb-6 text-[15px]">{program.desc}</p>
              <ul className="space-y-3">
                {HIGHLIGHTS[program.id]?.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-semibold text-ink">
                    <span
                      className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 text-white"
                      style={{ backgroundColor: program.color }}
                    >
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
