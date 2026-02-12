'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/Footer'
import { Shield, Lock, Eye, Database, Bell, UserCheck, Globe, Mail } from 'lucide-react'

const sections = [
  {
    icon: Eye,
    title: '1. Information We Collect',
    content: `Delta Systematics Ltd ("we", "our", or "us") collects information necessary to provide our environmental consulting, GIS, and geospatial services. This includes:`,
    items: [
      'Contact information (name, email, phone number, company name) provided when you reach out to us via our contact form or email.',
      'Project-related data shared by clients for the purpose of delivering our consulting, mapping, and environmental assessment services.',
      'Technical data such as IP address, browser type, and device information collected automatically when you visit our website.',
      'Usage data including pages visited, time spent, and navigation patterns to help us improve our website.',
    ],
  },
  {
    icon: Database,
    title: '2. How We Use Your Information',
    content: 'We use the information we collect for the following purposes:',
    items: [
      'To provide, maintain, and improve our environmental consulting and GIS services.',
      'To communicate with you about projects, service inquiries, and business matters.',
      'To process and fulfill contractual obligations with our clients.',
      'To send relevant updates about our services, industry developments, and company news (with your consent).',
      'To comply with legal obligations and regulatory requirements in the environmental consulting sector.',
      'To analyze website usage and improve user experience.',
    ],
  },
  {
    icon: Lock,
    title: '3. Data Security',
    content: 'We implement industry-standard security measures to protect your information:',
    items: [
      'All sensitive client data is encrypted both in transit and at rest using AES-256 encryption.',
      'Access to client project data is restricted to authorized personnel on a need-to-know basis.',
      'We conduct regular security assessments and vulnerability testing of our systems.',
      'Our GIS databases and environmental datasets are protected by multi-layered access controls.',
      'Physical security measures are in place at our offices to protect hardware and documents.',
    ],
  },
  {
    icon: UserCheck,
    title: '4. Your Rights',
    content: 'You have the following rights regarding your personal data:',
    items: [
      'Right to access: You may request a copy of the personal information we hold about you.',
      'Right to correction: You may request that we correct any inaccurate or incomplete information.',
      'Right to deletion: You may request deletion of your personal data, subject to legal and contractual obligations.',
      'Right to restrict processing: You may request that we limit how we use your data.',
      'Right to withdraw consent: Where processing is based on consent, you may withdraw it at any time.',
    ],
  },
  {
    icon: Globe,
    title: '5. Third-Party Sharing',
    content: 'We may share your information in the following circumstances:',
    items: [
      'With trusted technology partners (e.g., ESRI, Trimble) solely for the purpose of delivering our GIS and geospatial services.',
      'With regulatory bodies when required by Nigerian environmental law or international environmental regulations.',
      'With subcontractors or field specialists engaged to deliver specific project components, under strict confidentiality agreements.',
      'We never sell your personal data to third parties for marketing purposes.',
    ],
  },
  {
    icon: Bell,
    title: '6. Updates to This Policy',
    content: 'We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or services. When we make material changes:',
    items: [
      'We will update the "Last Updated" date at the top of this page.',
      'For significant changes, we will notify affected clients directly via email.',
      'Continued use of our website or services after changes constitutes acceptance of the updated policy.',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar isHomepage={false} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-secondary/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8 border border-primary/20">
              <Shield size={16} className="text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-widest">Legal</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your trust is essential to us. This policy outlines how Delta Systematics Ltd collects, uses, and protects your information.
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
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <section.icon size={24} />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">{section.title}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">{section.content}</p>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
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
            className="p-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10 border border-primary/20 rounded-3xl text-center"
          >
            <Mail size={32} className="text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Questions About Your Privacy?</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact our Data Protection Officer.
            </p>
            <a
              href="mailto:info@deltasystematics.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-all"
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
