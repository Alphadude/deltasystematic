'use client'

import { motion } from 'framer-motion'
import { services } from '@/lib/data'
import Link from 'next/link'

export function Services() {
  return (
    <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-muted/20">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            Our Core <span className="text-primary italic">Expertise</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Comprehensive solutions designed to meet the complex needs of environmental and geospatial analysis in the modern era.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link key={index} href={`/services/${service.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  className="group relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 h-full"
                >
                  <div className="mb-8 relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon size={32} />
                    </div>
                    <div className={`absolute inset-0 blur-2xl opacity-20 bg-gradient-to-br ${service.color} -z-10`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                  
                  <div className="mt-8 pt-8 border-t border-border/50 opacity-0 group-hover:opacity-100 transition-opacity">
                     <div className="flex items-center text-xs font-bold text-primary uppercase tracking-widest gap-2">
                       Learn More
                       <div className="w-8 h-[2px] bg-primary group-hover:w-12 transition-all" />
                     </div>
                  </div>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
