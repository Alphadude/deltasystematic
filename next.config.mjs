/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/services/petroleum-gis',
        destination: '/environmental-petroleum-gis-asset-management',
      },
    ]
  },
}

export default nextConfig
