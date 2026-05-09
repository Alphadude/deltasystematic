'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/Footer'
import { Trash2, ShieldAlert, Clock, Mail, CheckCircle, Info } from 'lucide-react'
import { siteConfig } from '@/lib/data'

const steps = [
  {
    icon: Info,
    title: '1. Why request account deletion?',
    content: 'At Delta Systematics Ltd, we respect your privacy and give you full control over your personal data. You can request to delete your Getwell app account and all associated data if you no longer wish to use our services.',
  },
  {
    icon: Mail,
    title: '2. How to submit a request',
    content: 'To request the deletion of your Getwell account and all associated personal data, please send an email to our support team or use the contact form on this page.',
    action: `Email: info@deltasystematics.com`
  },
  {
    icon: Clock,
    title: '3. Processing time',
    content: 'Once we receive your request, our team will verify your identity and process the deletion within 30 days. You will receive a confirmation email once the process is complete.',
  },
  {
    icon: ShieldAlert,
    title: '4. What data is deleted?',
    content: 'Deletion includes your profile information, contact details, and any personal identifiers stored in our GIS and environmental service databases. Some project-related data may be retained if required for legal or regulatory compliance.',
  },
]

export default function DataDeletionPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar isHomepage={false} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-background to-background" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-primary/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 rounded-full mb-8 border border-red-500/20">
              <Trash2 size={16} className="text-red-500" />
              <span className="text-sm font-bold text-red-500 uppercase tracking-widest">Data Safety</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8">
              <span className="text-red-500">Getwell</span> Deletion
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Delta Systematics Ltd provides a transparent process for users of the Getwell app to request the permanent deletion of their accounts and associated data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 mb-16">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-card/40 backdrop-blur-sm border border-border/50 rounded-3xl"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <step.icon size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 tracking-tight">{step.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">{step.content}</p>
                    {step.action && (
                      <div className="p-4 bg-muted/50 rounded-xl font-mono text-sm border border-border/50">
                        {step.action}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Submission Form / Contact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 bg-gradient-to-br from-red-500/10 via-background to-primary/10 border border-red-500/20 rounded-[2.5rem] text-center"
          >
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <ShieldAlert size={40} className="text-red-500" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Ready to proceed?</h2>
            <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
              Please include your <strong>Account Email</strong> and <strong>Full Name</strong> in your request to help us process the deletion accurately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@deltasystematics.com?subject=Getwell%20Account%20Deletion%20Request"
                className="inline-flex items-center gap-2 px-8 py-4 bg-red-500 text-white rounded-2xl font-bold hover:bg-red-600 transition-all shadow-lg shadow-red-500/20"
              >
                <Mail size={18} />
                Send Deletion Email
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-muted text-foreground rounded-2xl font-bold hover:bg-muted/80 transition-all border border-border"
              >
                Contact Support Form
              </a>
            </div>
          </motion.div>

          <div className="mt-16 text-center text-sm text-muted-foreground italic">
            <p>Note: Delta Systematics Ltd adheres to all Nigerian data protection regulations and international standards for data privacy.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
