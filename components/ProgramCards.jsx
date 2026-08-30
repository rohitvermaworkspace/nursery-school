import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { programs } from '@/data/content'

export default function ProgramCards() {
  return (
    <section className="bg-white py-20 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-purple/10 text-purple font-display font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Our Programs
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink">
            What We <span className="text-purple">Offer</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <article
              key={program.id}
              className="rounded-[1.75rem] p-5 flex flex-col text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover shadow-card group"
              style={{ backgroundColor: program.color }}
            >
              <h3 className="font-display font-bold text-lg text-center">{program.title}</h3>
              <p className="text-xs text-center text-white/80 font-semibold mb-4">
                {program.subtitle}
              </p>

              <div className="relative rounded-2xl overflow-hidden aspect-square mb-4 border-2 border-white/20">
                <Image
                  src={program.image}
                  alt={`${program.title} at LittleSprouts Kindergarten`}
                  fill
                  sizes="(min-width: 1024px) 220px, 45vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <p className="text-sm text-white/90 leading-relaxed flex-1 text-center">
                {program.desc}
              </p>

              <Link
                href={program.href}
                className="mt-4 inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all rounded-full py-3 text-sm font-display font-semibold border border-white/20"
              >
                Learn More
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
