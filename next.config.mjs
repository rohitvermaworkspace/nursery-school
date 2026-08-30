/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nursery-school',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
