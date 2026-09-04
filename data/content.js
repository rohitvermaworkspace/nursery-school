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
      '/images/kids-painting.jpg',
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
      '/images/kids-playing.jpg',
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
      '/images/kids-learning.jpg',
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
      '/images/child-painting.jpg',
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
      '/images/kids-outdoors.jpg',
  },
  {
    id: 'parent-workshop',
    date: 'May 5, 2026',
    title: 'Parent Workshop',
    excerpt: 'Join our upcoming workshop on positive parenting & child growth.',
    image:
      '/images/parent-workshop.jpg',
  },
]

export const galleryImages = [
  '/images/kids-playing.jpg',
  '/images/playground.jpg',
  '/images/teacher-helping.jpg',
  '/images/child-painting.jpg',
  '/images/kids-learning.jpg',
  '/images/kids-painting.jpg',
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
