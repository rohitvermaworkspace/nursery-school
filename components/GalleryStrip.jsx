import AppImage from '@/components/AppImage'
import { galleryImages } from '@/data/content'
import { DoodleButterfly, DoodleTree, DoodleHeart, DoodleCloud, DoodleFlower } from '@/components/Doodles'

export default function GalleryStrip() {
  return (
    <section className="bg-sky relative overflow-hidden py-20 sm:py-24">
      

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Decorative elements */}
      <DoodleButterfly className="w-14 h-10 absolute left-8 top-12 hidden sm:block animate-float-y" />
      <DoodleButterfly className="w-12 h-9 absolute right-12 top-16 hidden sm:block animate-float-y delay-700" />
      <DoodleTree className="w-16 h-18 absolute left-4 bottom-4 hidden lg:block" />
      <DoodleTree className="w-16 h-18 absolute right-4 bottom-4 hidden lg:block" />
      <DoodleCloud className="w-24 h-15 absolute right-[10%] top-8 hidden sm:block opacity-40 animate-float-x" />
      <DoodleCloud className="w-18 h-12 absolute left-[15%] top-20 hidden lg:block opacity-30 animate-float-x delay-500" />
      <DoodleFlower className="w-8 h-10 absolute left-[20%] bottom-8 hidden lg:block" />
      <DoodleFlower className="w-7 h-9 absolute right-[22%] bottom-12 hidden lg:block delay-300" />
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-blue/10 text-blue font-display font-semibold text-sm px-4 py-2 rounded-full mb-4">
            <DoodleHeart className="w-4 h-4" />
            Our Gallery
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink">
            Captured <span className="text-blue">Moments</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
          {galleryImages.map((src, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-soft border-3 border-white hover:shadow-card transition-shadow duration-300 group"
            >
              <AppImage
                src={src}
                alt={`Photo from LittleSprouts Kindergarten activities, ${i + 1}`}
                fill
                sizes="(min-width: 640px) 140px, 30vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
