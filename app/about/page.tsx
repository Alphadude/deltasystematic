'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/Footer'
import { coreValues, partners, stats, team, disciplines } from '@/lib/data'
import { CheckCircle, Globe, Shield, Zap, Award, Users, ChevronRight } from 'lucide-react'

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar isHomepage={false} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-muted/20">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8">
              Pioneering <span className="text-secondary">Scientific</span> Solutions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Building a sustainable future through data-driven environmental consulting and advanced GIS technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold tracking-tight">Our Legacy of Excellence</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Delta Systematics Ltd. is a scientific consulting firm specializing in providing a full range of environmental consulting services to the commercial, industrial, private, and public market sectors. For more than 25 years, we've been at the forefront of addressing some of the toughest problems facing industry today.
                </p>
                <p>
                  Today, we operate as a certified ESRI Business Partner and reseller for sub-Saharan Africa, acts as a clearinghouse for various Nigerian University Consultancy Services, and renders advanced Remote Sensing and digital GIS services.
                </p>
              </div>
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <h3 className="font-bold text-lg mb-2 text-primary">Ownership & History</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Delta Systematics Ltd. is a 100% indigenous private limited liability company. Incorporated on August 31, 1998, we have operated as a registered partnership since April 9, 1986.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[3rem] overflow-hidden border border-border/50"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe size={200} className="text-primary/10 animate-pulse" />
              </div>
              <div className="absolute bottom-10 left-10 p-8 bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl">
                <Shield className="text-secondary mb-4" size={32} />
                <div className="font-bold text-xl mb-1 text-foreground">Certified Partner</div>
                <div className="text-sm text-muted-foreground">ESRI Business Network</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide every project we undertake.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-card border border-border/50 rounded-2xl hover:border-primary/30 transition-all shadow-lg shadow-black/5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplines Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Technical Disciplines</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We maintain a balance of senior, mid-level, and junior staff to ensure project continuity and technical excellence.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {disciplines.map((discipline) => (
              <div key={discipline} className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl border border-border/50 group hover:border-primary/30 transition-all">
                <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                <span className="text-sm font-medium">{discipline}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <Users size={14} />
              Our Leadership
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">Expert professionals committed to your project's success.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative p-8 bg-card border border-border/50 rounded-3xl hover:border-primary/30 transition-all shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 text-xs font-bold text-primary/60 uppercase tracking-widest">{member.role}</div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{member.name}</h3>
                <div className="mt-6 flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-white transition-all">
                    <ChevronRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners List */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Trusted Technology Partners</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((partner) => (
              <span 
                key={partner.name}
                className="px-8 py-4 bg-muted/50 border border-border/50 rounded-2xl font-bold text-foreground/70 hover:text-primary hover:bg-primary/5 hover:border-primary/30 transition-all cursor-default"
              >
                {partner.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
