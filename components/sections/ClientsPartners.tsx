'use client'

import { motion } from 'framer-motion'
import { clients, partners } from '@/lib/data'
import Image from 'next/image'

export function ClientsPartners() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Clients Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Valued Clients</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Trusted by leading organizations across the energy and public sectors.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative group bg-background rounded-2xl border border-border/50 p-8 flex items-center justify-center h-32 hover:border-primary/20 transition-all shadow-sm overflow-hidden"
              >
                <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                {/* Tooltip on hover */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
                   <span className="text-white text-xs font-bold">{client.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Technology Partners</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Collaborating with global leaders in GIS and remote sensing technology.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative group bg-background rounded-2xl border border-border/50 p-8 flex items-center justify-center h-32 hover:border-primary/20 transition-all shadow-sm overflow-hidden"
              >
                <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
                   <span className="text-white text-xs font-bold">{partner.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
