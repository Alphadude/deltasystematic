'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/Footer'
import { Scale, FileText, AlertTriangle, Handshake, Clock, Ban, CreditCard, Gavel, Mail } from 'lucide-react'

const sections = [
  {
    icon: Handshake,
    title: '1. Acceptance of Terms',
    content: 'By accessing or using the services provided by Delta Systematics Ltd ("Company", "we", "our", or "us"), you agree to be bound by these Terms of Service. These terms govern your use of our website, environmental consulting services, GIS solutions, geospatial analytics, and all related professional services.',
    items: [
      'These Terms constitute a legally binding agreement between you and Delta Systematics Ltd.',
      'If you are entering into these Terms on behalf of an organization, you represent that you have the authority to bind that organization.',
      'If you do not agree with any part of these Terms, you must discontinue use of our services immediately.',
    ],
  },
  {
    icon: FileText,
    title: '2. Scope of Services',
    content: 'Delta Systematics Ltd provides professional environmental consulting and geospatial services, including but not limited to:',
    items: [
      'Geographic Information Systems (GIS) mapping, analysis, and database development.',
      'Remote sensing, satellite imagery processing, and environmental monitoring.',
      'Environmental Impact Assessments (EIA), Environmental Evaluation Reports (EER), and compliance audits.',
      'Geotechnical, hydrological, and bathymetric surveys.',
      'Risk assessment, air quality management, and oil spill contingency planning.',
      'All services are delivered in accordance with Nigerian environmental regulations and international best practices.',
    ],
  },
  {
    icon: Scale,
    title: '3. Client Responsibilities',
    content: 'As a client of Delta Systematics Ltd, you agree to:',
    items: [
      'Provide accurate and complete information necessary for the execution of contracted services.',
      'Grant reasonable access to project sites for field surveys, sampling, and data collection as required.',
      'Ensure timely review and approval of deliverables within agreed-upon timelines.',
      'Comply with all applicable laws and regulations relevant to the project scope.',
      'Maintain the confidentiality of proprietary methodologies and tools shared during service delivery.',
    ],
  },
  {
    icon: CreditCard,
    title: '4. Payment Terms',
    content: 'Payment for our services is subject to the following terms:',
    items: [
      'Project fees are outlined in individual proposals and contracts and are subject to mutual agreement before work commences.',
      'An initial deposit (typically 40-50% of the total project cost) is required before project mobilization.',
      'Milestone-based payments are due upon completion and acceptance of defined project deliverables.',
      'Invoices are payable within 30 days of issuance unless otherwise agreed in writing.',
      'Late payments may attract an interest charge of 2% per month on outstanding balances.',
    ],
  },
  {
    icon: AlertTriangle,
    title: '5. Intellectual Property',
    content: 'Ownership and use of intellectual property is governed as follows:',
    items: [
      'All proprietary tools, software, methodologies, and frameworks developed by Delta Systematics Ltd remain our exclusive intellectual property.',
      'Project-specific deliverables (maps, reports, data sets) are owned by the client upon full payment, unless otherwise specified in the contract.',
      'Clients are granted a non-exclusive, non-transferable license to use our proprietary tools for the duration of the project.',
      'We reserve the right to use anonymized project data and outcomes for research, training, and promotional purposes.',
      'The Delta Systematics name, logo, and brand assets are protected trademarks and may not be used without written permission.',
    ],
  },
  {
    icon: Ban,
    title: '6. Limitation of Liability',
    content: 'Our liability is limited as follows:',
    items: [
      'Delta Systematics Ltd shall not be liable for indirect, incidental, consequential, or punitive damages arising from the use of our services.',
      'Our total liability for any claim shall not exceed the total fees paid by the client for the specific project giving rise to the claim.',
      'We are not liable for delays or failures in performance resulting from force majeure events, including natural disasters, government actions, or conditions beyond our reasonable control.',
      'Environmental assessments and recommendations are based on conditions observed at the time of assessment and do not guarantee future environmental conditions.',
    ],
  },
  {
    icon: Clock,
    title: '7. Termination',
    content: 'Either party may terminate the service agreement under the following conditions:',
    items: [
      'Either party may terminate with 30 days written notice for convenience, subject to payment for work completed.',
      'We may terminate immediately if the client breaches material terms, including non-payment.',
      'Upon termination, all completed deliverables paid for shall be transferred to the client.',
      'Confidentiality obligations survive termination for a period of five (5) years.',
    ],
  },
  {
    icon: Gavel,
    title: '8. Governing Law & Dispute Resolution',
    content: 'These Terms are governed by the following legal framework:',
    items: [
      'These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.',
      'Any disputes arising from these Terms shall first be resolved through good-faith negotiation between the parties.',
      'If negotiation fails, disputes shall be submitted to arbitration in Port Harcourt, Rivers State, in accordance with the Arbitration and Conciliation Act.',
      'The decision of the arbitrator shall be final and binding on both parties.',
    ],
  },
]

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar isHomepage={false} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-background to-background" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-primary/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-8 border border-secondary/20">
              <Scale size={16} className="text-secondary" />
              <span className="text-sm font-bold text-secondary uppercase tracking-widest">Legal</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8">
              Terms of <span className="text-secondary">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              These terms govern your use of Delta Systematics Ltd&apos;s professional environmental consulting and geospatial services.
            </p>
            <p className="text-sm text-muted-foreground mt-6">Last Updated: February 12, 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-8 bg-card/40 backdrop-blur-sm border border-border/50 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <section.icon size={24} />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">{section.title}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">{section.content}</p>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                    <p className="text-foreground/80 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-br from-secondary/10 via-background to-primary/10 border border-secondary/20 rounded-3xl text-center"
          >
            <Gavel size={32} className="text-secondary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              If you have any questions about these Terms of Service, please reach out to our legal team.
            </p>
            <a
              href="mailto:info@deltasystematics.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-xl font-bold hover:bg-secondary/90 transition-all"
            >
              <Mail size={18} />
              info@deltasystematics.com
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
