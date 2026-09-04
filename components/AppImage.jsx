import Image from 'next/image'

const BASE_PATH = '/nursery-school'

export default function AppImage({ src, alt = '', ...props }) {
  const resolvedSrc = src?.startsWith('/') ? `${BASE_PATH}${src}` : src
  return <Image src={resolvedSrc} alt={alt} unoptimized {...props} />
}
