'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, Send } from 'lucide-react'
import { siteConfig } from '@/lib/data'

export function Contact() {
  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-primary rounded-[3rem] overflow-hidden relative shadow-2xl shadow-primary/20">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 skew-x-12 translate-x-1/4 pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 relative z-10">
            <div className="p-10 sm:p-20 text-primary-foreground">
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">Let's build a <br /><span className="text-secondary italic">sustainable</span> future</h2>
              <p className="text-primary-foreground/80 text-lg mb-12">
                Ready to transform your environmental and geospatial challenges into opportunities? Get in touch with our expert team today.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Technical Support</h3>
                    <p className="text-primary-foreground/70">
                      {siteConfig.contact.phones.join(' / ')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Direct Inquiry</h3>
                    <p className="text-primary-foreground/70">
                      {siteConfig.contact.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 sm:p-20 bg-white/5 backdrop-blur-3xl border-l border-white/10">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary-foreground/80">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary-foreground/80">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary-foreground/80">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project requirements..."
                    className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-5 bg-secondary text-secondary-foreground font-bold rounded-2xl hover:bg-secondary/90 hover:scale-[1.01] transition-all flex items-center justify-center gap-3 shadow-lg shadow-black/10"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
