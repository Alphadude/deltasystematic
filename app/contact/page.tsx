'use client'

import React, { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/Footer'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Globe, ChevronRight } from 'lucide-react'
import { siteConfig } from '@/lib/data'

const offices = [
  {
    name: 'Port Harcourt (Head Office)',
    address: '36 Onne Road G.R.A Phase II, Rivers State, Nigeria',
    phone: ['08033386435', '08033088811', '084-880984'],
    email: 'ph-office@deltasystematics.com'
  },
  {
    name: 'Abuja Office',
    address: '8 Abriba Close, Area 7, Abuja',
    phone: ['08034316911'],
    email: 'abuja@deltasystematics.com'
  },
  {
    name: 'Calabar Office',
    address: '123 Akim Road, Calabar',
    phone: ['08037050012'],
    email: 'calabar@deltasystematics.com'
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar isHomepage={false} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-muted/20">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8">
              Connect <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">With Us</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Ready to transform your environmental challenges into strategic advantages? Our experts are here to help you navigate the landscape of GIS and sustainability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                  <Globe size={14} />
                  Main Channels
                </div>
                <h2 className="text-4xl font-bold mb-8 tracking-tight">Direct Contact</h2>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-8 bg-card/40 backdrop-blur-sm border border-border/50 rounded-3xl hover:border-primary/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                      <Mail size={24} />
                    </div>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">Email Support</p>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-lg font-bold hover:text-primary transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                  <div className="p-8 bg-card/40 backdrop-blur-sm border border-border/50 rounded-3xl hover:border-primary/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                      <Phone size={24} />
                    </div>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">Call Us</p>
                    <a href={`tel:${siteConfig.contact.phones[0].replace(/\s/g, '')}`} className="text-lg font-bold hover:text-primary transition-colors">
                      {siteConfig.contact.phones[0]}
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                <h3 className="text-2xl font-bold tracking-tight">Regional Offices</h3>
                <div className="space-y-4">
                  {offices.map((office, idx) => (
                    <div key={idx} className="group p-6 bg-muted/30 hover:bg-muted/50 border border-border/50 rounded-2xl transition-all duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="font-bold text-lg">{office.name}</h4>
                        <ChevronRight className="text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" size={20} />
                      </div>
                      <div className="flex items-start gap-3 text-muted-foreground mb-4">
                        <MapPin size={18} className="translate-y-1 text-primary flex-shrink-0" />
                        <p>{office.address}</p>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        {office.phone.map((p, i) => (
                          <a key={i} href={`tel:${p}`} className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors">
                            <Phone size={14} />
                            {p}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-1 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-[2.5rem]"
            >
              <div className="bg-card/90 backdrop-blur-3xl p-8 sm:p-12 rounded-[2.25rem] border border-white/10 shadow-2xl">
                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-2">Send Message</h2>
                  <p className="text-muted-foreground">Fill out the form below and our team will get back to you within 24 hours.</p>
                </div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} className="text-secondary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground">Thank you for reaching out. We've received your inquiry.</p>
                    </motion.div>
                  ) : (
                    <form key="form" onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                          <input
                            required
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-6 py-4 bg-muted/50 border border-border/50 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                          <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-6 py-4 bg-muted/50 border border-border/50 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Subject</label>
                        <input
                          required
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-6 py-4 bg-muted/50 border border-border/50 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium"
                          placeholder="How can we help?"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Your Message</label>
                        <textarea
                          required
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          className="w-full px-6 py-4 bg-muted/50 border border-border/50 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium resize-none"
                          placeholder="Tell us more about your project goals..."
                        />
                      </div>
                      <button
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full py-5 bg-primary text-primary-foreground rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 transition-all disabled:opacity-50 flex items-center justify-center gap-3 active:scale-95"
                      >
                        {isSubmitting ? (
                          <div className="w-6 h-6 border-4 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        ) : (
                          <>
                            Send Message
                            <Send size={20} />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 bg-muted/30 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Clock size={48} className="mx-auto text-primary mb-8 opacity-50" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              "Technical excellence is not an act, but a habit of meticulous precision and relentless innovation."
            </h2>
            <p className="text-xl text-primary font-bold">— Delta Systematics Vision</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
