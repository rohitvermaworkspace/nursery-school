import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import { newsPosts } from '@/data/content'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Blog & News',
  description:
    'News, events and parenting resources from LittleSprouts Kindergarten — camps, workshops and updates from our classrooms.',
  path: '/blog',
})

const EXTRA_POSTS = [
  {
    id: 'reading-corner',
    date: 'Apr 18, 2026',
    title: 'Building a Reading Corner Kids Actually Use',
    excerpt: 'Simple tips for creating a cozy reading nook that pulls kids in at home.',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=700&auto=format&fit=crop',
  },
]

export default function BlogPage() {
  const posts = [...newsPosts, ...EXTRA_POSTS]

  return (
    <>
      <PageHeader
        title="Blog & News"
        subtitle="Updates from our classrooms, plus resources for families raising curious kids."
      />

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-[1.5rem] overflow-hidden shadow-card hover:shadow-card-hover active:scale-[0.98] transition-all duration-300 hover:-translate-y-1.5 border border-ink/5 group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 360px, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center gap-1.5 bg-purple/10 text-purple text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </div>
                <h2 className="font-display font-bold text-lg text-ink mb-2 leading-snug line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-body leading-relaxed mb-5">{post.excerpt}</p>
                <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-purple hover:text-purple-deep transition-colors">
                  Read More
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
