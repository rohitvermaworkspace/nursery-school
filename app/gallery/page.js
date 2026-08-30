import Image from 'next/image'
import PageHeader from '@/components/PageHeader'
import { galleryImages } from '@/data/content'
import { buildMetadata } from '@/lib/seo'
import { DoodleButterfly, DoodleFlower } from '@/components/Doodles'

export const metadata = buildMetadata({
  title: 'Gallery',
  description:
    'Browse photos from LittleSprouts Kindergarten — everyday moments of play, learning and discovery from our classrooms.',
  path: '/gallery',
})

const ALL_IMAGES = [...galleryImages, ...galleryImages].slice(0, 10)

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Captured Moments"
        subtitle="A look inside our classrooms — the everyday moments that make LittleSprouts feel like home."
      />

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24 relative">
        <DoodleButterfly className="w-12 h-9 absolute right-8 top-8 hidden sm:block animate-float-y" />
        <DoodleFlower className="w-8 h-10 absolute left-8 bottom-8 hidden sm:block" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
          {ALL_IMAGES.map((src, i) => (
            <div key={i} className="relative aspect-square rounded-2xl overflow-hidden shadow-soft border-3 border-white group hover:shadow-card transition-all duration-300">
              <Image
                src={src}
                alt={`LittleSprouts Kindergarten gallery photo ${i + 1}`}
                fill
                sizes="(min-width: 1024px) 220px, 45vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
