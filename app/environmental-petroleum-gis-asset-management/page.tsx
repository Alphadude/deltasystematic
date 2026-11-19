import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/Footer'
import { PetroleumAssetIntelligenceClient } from './client'

export const metadata: Metadata = {
  title: 'Environmental Intelligence, Petroleum GIS & Asset Management | Delta Systematics',
  description:
    'Petroleum Asset Intelligence & Acreage Management: Mapping opportunities. Supporting licensing success. Creating long-term asset value through integrated spatial cadastre, bid advisory, and asset governance.',
  alternates: {
    canonical: 'https://www.deltasystematics.com/environmental-petroleum-gis-asset-management',
  },
  openGraph: {
    title: 'Environmental Intelligence, Petroleum GIS & Asset Management | Delta Systematics',
    description:
      'Mapping opportunities. Supporting licensing success. Creating long-term asset value with trusted spatial foundations for petroleum concession and licence administration.',
    url: 'https://www.deltasystematics.com/environmental-petroleum-gis-asset-management',
    images: [
      {
        url: '/petroleum-asset-intelligence-dashboard.jpg',
        width: 1200,
        height: 675,
        alt: 'DSL Petroleum Asset Intelligence & Acreage Management Dashboard',
      },
    ],
  },
}

export default function EnvironmentalPetroleumGisPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar isHomepage={false} />
      <PetroleumAssetIntelligenceClient />
      <Footer />
    </main>
  )
}
