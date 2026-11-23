import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/Footer'
import { LicensingRoundClient } from './client'

export const metadata: Metadata = {
  title: 'Licensing Round 2026 Advisory & Inquiry Portal | Delta Systematics Limited',
  description:
    'Dedicated portal for the 2026 Petroleum Licensing Round. Access acreage intelligence, block coordinate validation, bid-readiness screening, and submit confidential inquiries to Delta Systematics Limited.',
  alternates: {
    canonical: 'https://www.deltasystematics.com/licensing-round-2026',
  },
  openGraph: {
    title: 'Licensing Round 2026 Strategic Advisory & Inquiry Portal | Delta Systematics',
    description:
      'Mapping opportunities. Supporting licensing success. Creating long-term asset value. Submit technical and commercial questions directly to DSL petroleum GIS specialists.',
    url: 'https://www.deltasystematics.com/licensing-round-2026',
    images: [
      {
        url: '/petroleum-asset-intelligence-dashboard.jpg',
        width: 1200,
        height: 675,
        alt: 'Licensing Round 2026 Advisory Dashboard',
      },
    ],
  },
}

export default function LicensingRoundPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar isHomepage={false} />
      <LicensingRoundClient />
      <Footer />
    </main>
  )
}
