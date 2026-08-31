import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sun } from 'lucide-react'
import { newsPosts } from '@/data/content'
import { DoodleFlower, DoodleStar } from '@/components/Doodles'

export default function WelcomeNews() {
  return (
    <section className="bg-white pb-20 sm:pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16">
        {/* Welcome */}
        <div className="relative">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink flex items-center gap-3 mb-6">
            <span className="w-1.5 h-8 rounded-full bg-yellow inline-block" />
            Welcome to Our Kindergarten!
            <Sun className="w-7 h-7 text-yellow animate-spin-slow" />
          </h2>

          <div className="rounded-[1.75rem] overflow-hidden aspect-[16/10] relative mb-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] border-3 border-white">
            <Image
              src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?q=80&w=900&auto=format&fit=crop"
              alt="Children sitting together on a colorful classroom rug"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div>

          <p className="text-body leading-relaxed text-[15px]">
            At LittleSprouts, we believe every child is unique and capable of amazing things.
            Our caring teachers create a nurturing environment that inspires curiosity,
            creativity and a love for learning that lasts a lifetime.
          </p>
          <p className="text-body leading-relaxed mt-3 text-[15px]">
            We offer a perfect blend of academics, play and values to help children grow into
            confident and responsible individuals.
          </p>

          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2.5 bg-green text-white font-display font-semibold px-7 py-3.5 rounded-full hover:bg-green-deep transition-all shadow-[0_4px_0_0_var(--color-green-deep)] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_var(--color-green-deep)] active:translate-y-[4px] active:shadow-none"
          >
            Read More About Us
            <ArrowRight className="w-4 h-4" />
          </Link>

          <DoodleFlower className="w-10 h-12 absolute -right-3 bottom-0 hidden sm:block" />
          <DoodleStar className="w-5 h-5 absolute right-24 -top-2 hidden sm:block animate-wiggle delay-300" />
        </div>

        {/* News */}
        <div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink flex items-center gap-3 mb-6">
            <span className="w-1.5 h-8 rounded-full bg-blue inline-block" />
            Latest News &amp; Events
          </h2>

          <div className="flex flex-col gap-4">
            {newsPosts.map((post) => (
              <article
                key={post.id}
                className="flex gap-5 bg-cream/80 rounded-[1.5rem] p-4 sm:p-5 items-center border border-yellow/10 hover:shadow-card active:scale-[0.98] transition-all duration-300"
              >
                <div className="relative w-32 h-28 sm:w-36 sm:h-32 rounded-2xl overflow-hidden shrink-0 border-2 border-white shadow-soft">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="144px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-1.5 bg-white/80 text-body font-semibold text-xs px-3 py-1 rounded-full mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple" />
                    {post.date}
                  </div>
                  <h3 className="font-display font-bold text-ink text-[15px] mb-1.5 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-body leading-snug">{post.excerpt}</p>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-purple mt-2 hover:text-purple-deep transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <Link
            href="/blog"
            className="mt-6 inline-flex items-center gap-2 font-display font-semibold text-purple hover:text-purple-deep transition-colors"
          >
            View All News
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
