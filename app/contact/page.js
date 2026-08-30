import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import ContactForm from '@/components/ContactForm'
import { SITE, buildMetadata } from '@/lib/seo'
import { DoodleStar, DoodleHeart } from '@/components/Doodles'

export const metadata = buildMetadata({
  title: 'Contact Us',
  description:
    'Get in touch with LittleSprouts Kindergarten to schedule a tour, ask about admissions, or learn more about our programs.',
  path: '/contact',
})

const INFO = [
  { icon: Phone, title: 'Call Us', value: SITE.phoneDisplay, href: `tel:${SITE.phone}`, color: 'var(--color-purple)' },
  { icon: Mail, title: 'Email Us', value: SITE.email, href: `mailto:${SITE.email}`, color: 'var(--color-blue)' },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}`,
    color: 'var(--color-green)',
  },
  { icon: Clock, title: 'Office Hours', value: 'Mon – Fri: 7:00 AM – 6:00 PM', color: 'var(--color-orange)' },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get In Touch"
        subtitle="Have a question about admissions, tuition, or a tour? We'd love to hear from you."
      />

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 relative">
        <DoodleStar className="w-6 h-6 absolute right-12 top-8 hidden sm:block animate-wiggle" />
        <DoodleHeart className="w-5 h-5 absolute left-8 bottom-12 hidden sm:block animate-pulse-soft delay-500" />

        <div className="flex flex-col gap-4">
          {INFO.map((item) => {
            const Wrapper = item.href ? 'a' : 'div'
            return (
              <Wrapper
                key={item.title}
                {...(item.href ? { href: item.href } : {})}
                className="flex items-start gap-4 bg-white rounded-[1.25rem] p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 border border-ink/5 group"
              >
                <span
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `color-mix(in srgb, ${item.color} 12%, transparent)` }}
                >
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </span>
                <div>
                  <p className="font-display font-bold text-ink text-sm">{item.title}</p>
                  <p className="text-sm text-body mt-0.5">{item.value}</p>
                </div>
              </Wrapper>
            )
          })}
        </div>

        <ContactForm />
      </section>
    </>
  )
}
