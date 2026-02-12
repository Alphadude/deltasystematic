'use client'

import { motion } from 'framer-motion'
import { stats } from '@/lib/data'

export function About() {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-20 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-bold mb-10 tracking-tight"
            >
              A Legacy of <span className="text-primary italic">Precision</span>
            </motion.h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Delta Systematics Ltd. is a scientific consulting firm specializing in providing a full range of environmental consulting services. With over 25 years of experience, we have successfully completed numerous projects across the Niger Delta region.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Our commitment to technical excellence is reflected in our multi-disciplined staff of scientists and engineers. We are dedicated to providing innovative business solutions that create lasting environmental value.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="pt-6"
              >
                 <div className="flex items-center gap-4 p-6 bg-background rounded-2xl border border-border/50 shadow-sm">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <div>
                       <p className="font-bold text-foreground">ESRI Business Partner</p>
                       <p className="text-sm text-muted-foreground">Certified products reseller for Sub-Saharan Africa</p>
                    </div>
                 </div>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-[2rem] bg-background border border-border/50 shadow-lg shadow-black/5 hover:border-primary/20 transition-all text-center lg:text-left"
              >
                <div className="text-5xl font-extrabold text-primary mb-2 tabular-nums">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
