import { Clock } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import { buildMetadata } from '@/lib/seo'
import { DoodleStar, DoodleSun } from '@/components/Doodles'

export const metadata = buildMetadata({
  title: 'Class Schedule',
  description:
    'View LittleSprouts Kindergarten daily class schedule and session times for Play School, Pre-K and Kindergarten programs.',
  path: '/classes',
})

const SCHEDULE = [
  { name: 'Early Drop Off', time: '7:00 AM – 8:30 AM', note: 'Quiet play and breakfast', color: 'var(--color-teal)' },
  { name: 'Morning Circle & Lessons', time: '8:30 AM – 11:30 AM', note: 'Core learning activities', color: 'var(--color-purple)' },
  { name: 'Lunch & Rest', time: '11:30 AM – 1:00 PM', note: 'Meal time and nap', color: 'var(--color-orange)' },
  { name: 'Afternoon Activities', time: '1:00 PM – 3:30 PM', note: 'Art, music and outdoor play', color: 'var(--color-green)' },
  { name: 'Late Pick-Up', time: '3:30 PM – 6:00 PM', note: 'Supervised free play', color: 'var(--color-blue)' },
]

export default function ClassesPage() {
  return (
    <>
      <PageHeader
        title="Class Schedule"
        subtitle="A predictable daily rhythm gives children the security to explore confidently."
      />

      <section className="max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <div className="flex flex-col gap-3">
          {SCHEDULE.map((slot, i) => (
            <div
              key={slot.name}
              className="flex items-center justify-between gap-4 bg-white rounded-[1.25rem] px-6 py-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 border border-ink/5"
            >
              <div className="flex items-center gap-4">
                <span
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `color-mix(in srgb, ${slot.color} 12%, transparent)` }}
                >
                  <Clock className="w-5 h-5" style={{ color: slot.color }} />
                </span>
                <div>
                  <p className="font-display font-bold text-ink">{slot.name}</p>
                  <p className="text-xs text-body mt-0.5">{slot.note}</p>
                </div>
              </div>
              <span className="text-sm font-semibold text-body shrink-0 bg-lavender/60 px-4 py-2 rounded-full">{slot.time}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-body mt-10">
          Monday – Friday. Closed on weekends and major holidays.
        </p>
      </section>
    </>
  )
}
