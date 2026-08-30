import { Home, Users, BookOpen, GraduationCap, Image as ImageIcon, FileText, Mail } from 'lucide-react'

export const navLinks = [
  { label: 'Home', href: '/', icon: Home, color: 'var(--color-purple)' },
  { label: 'About Us', href: '/about', icon: Users, color: 'var(--color-orange)' },
  { label: 'Programs', href: '/programs', icon: BookOpen, color: 'var(--color-green)' },
  { label: 'Classes', href: '/classes', icon: GraduationCap, color: 'var(--color-teal)' },
  { label: 'Gallery', href: '/gallery', icon: ImageIcon, color: 'var(--color-pink)' },
  { label: 'Blog', href: '/blog', icon: FileText, color: 'var(--color-blue)' },
  { label: 'Contact', href: '/contact', icon: Mail, color: 'var(--color-purple-light)' },
]

export const programs = [
  {
    id: 'why-choose-us',
    title: 'Why Choose Us',
    subtitle: 'Our Advantages',
    color: 'var(--color-purple)',
    colorDeep: 'var(--color-purple-deep)',
    image:
      'https://images.unsplash.com/photo-1544776193-352d25ca82cd?q=80&w=600&auto=format&fit=crop',
    desc: 'We provide a safe, fun and stimulating environment where children love to learn and grow.',
    href: '/about',
  },
  {
    id: 'play-school',
    title: 'Play School',
    subtitle: 'Ages 2 – 3 Years',
    color: 'var(--color-orange)',
    colorDeep: 'var(--color-orange-deep)',
    image:
      'https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=600&auto=format&fit=crop',
    desc: 'Fun-filled activities to build confidence, creativity and social skills.',
    href: '/programs#play-school',
  },
  {
    id: 'pre-k',
    title: 'Pre-K Program',
    subtitle: 'Ages 3 – 5 Years',
    color: 'var(--color-green)',
    colorDeep: 'var(--color-green-deep)',
    image:
      'https://images.unsplash.com/photo-1526634332515-d56c5fd16991?q=80&w=600&auto=format&fit=crop',
    desc: 'Hands-on learning that prepares your child for kindergarten and beyond.',
    href: '/programs#pre-k',
  },
  {
    id: 'kindergarten',
    title: 'Kindergarten',
    subtitle: 'Ages 5+ Years',
    color: 'var(--color-blue)',
    colorDeep: 'var(--color-blue-deep)',
    image:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=600&auto=format&fit=crop',
    desc: 'A strong foundation in academics with a focus on holistic development.',
    href: '/programs#kindergarten',
  },
]

export const newsPosts = [
  {
    id: 'summer-camp-2026',
    date: 'May 20, 2026',
    title: 'Summer Camp 2026',
    excerpt: 'Exciting activities, outdoor fun & creative workshops for kids.',
    image:
      'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'parent-workshop',
    date: 'May 5, 2026',
    title: 'Parent Workshop',
    excerpt: 'Join our upcoming workshop on positive parenting & child growth.',
    image:
      'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=600&auto=format&fit=crop',
  },
]

export const galleryImages = [
  'https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1607453998774-d533f65dac99?q=80&w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560785496-3c9d27877182?q=80&w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526634332515-d56c5fd16991?q=80&w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544776193-352d25ca82cd?q=80&w=500&auto=format&fit=crop',
]

export const footerPrograms = ['Play School', 'Pre-K Program', 'Kindergarten', 'After School Care', 'Summer Camp']
export const footerQuickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Classes', href: '/classes' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]
