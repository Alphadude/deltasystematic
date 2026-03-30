'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/Footer'
import { detailedServices } from '@/lib/data'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
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
              Integrated <span className="text-secondary">Multidisciplinary</span> Solutions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Transforming environmental and resource-based challenges into bankable, sustainable opportunities through scientific expertise and geospatial intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {detailedServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Link key={service.id} href={`/services/${service.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group p-10 bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl hover:border-primary/30 transition-all duration-500 shadow-xl shadow-black/5 h-full"
                  >
                    <div className="flex flex-col h-full">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                        <Icon size={32} />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
                      <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{service.description}</p>
                      <ul className="space-y-4 mb-8">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-foreground/80 font-medium">
                            <CheckCircle size={20} className="text-secondary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto pt-8 border-t border-border/50 flex items-center text-primary font-bold gap-2 group-hover:translate-x-2 transition-transform">
                         View Details
                         <ArrowRight size={20} />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Integrated Strength Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/10 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight text-white group-hover:text-primary transition-colors">Our <span className="text-primary italic">Integrated</span> Strength</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Delta Systematics Ltd’s unique value proposition lies in our ability to converge multiple technical domains into a single integrated solution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 'env', title: 'Environmental & Biodiversity', desc: 'Deep scientific expertise across terrestrial and aquatic ecosystems.' },
              { id: 'geo', title: 'Geospatial Intelligence', desc: 'Advanced digital systems for precision mapping and analysis.' },
              { id: 'reg', title: 'Regulatory & ESG', desc: 'Alignment with national and international safeguard frameworks.' },
              { id: 'fin', title: 'Financial Modelling', desc: 'Structuring bankable, sustainable opportunities through valuation.' }
            ].map((strength, i) => (
              <motion.div
                key={strength.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-card rounded-3xl border border-border/50 text-center hover:border-primary/30 transition-all shadow-lg group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3">{strength.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{strength.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="p-12 sm:p-20 bg-primary rounded-[3rem] text-primary-foreground text-center relative overflow-hidden shadow-2xl shadow-primary/20"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight">Ready to solve your spatial challenges?</h2>
              <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
                Consult with our expert team today and discover how geospatial technology can transform your operations.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary font-bold rounded-2xl hover:bg-white/90 transition-all group shadow-xl"
              >
                Book a Consultation
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
