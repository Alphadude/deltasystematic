'use client'

import { motion } from 'framer-motion'
import { clients, partners } from '@/lib/data'

export function ClientsPartners() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Clients Side */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Valued Clients</h2>
              <p className="text-muted-foreground">Trusted by leading organizations across the energy and public sectors.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {clients.map((client, index) => (
                <motion.div
                  key={client}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 bg-background rounded-2xl border border-border/50 flex items-center justify-center text-center hover:border-primary/20 transition-all shadow-sm group"
                >
                  <span className="font-bold text-sm text-muted-foreground group-hover:text-primary transition-colors">{client}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Partners Side */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Technology Partners</h2>
              <p className="text-muted-foreground">Collaborating with global leaders in GIS and remote sensing technology.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 bg-background rounded-2xl border border-border/50 flex items-center justify-center text-center hover:border-primary/20 transition-all shadow-sm group"
                >
                  <span className="font-bold text-sm text-muted-foreground group-hover:text-primary transition-colors">{partner}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
