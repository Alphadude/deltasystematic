'use client'

import { motion } from 'framer-motion'
import { MapPin, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/data'

export function Projects() {
  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
            >
              Featured <span className="text-secondary">Impact</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Over 25 years of proven expertise delivering high-quality geospatial results across diverse sectors in Nigeria and beyond.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <button className="px-8 py-4 bg-muted hover:bg-muted/80 rounded-2xl font-bold transition-all flex items-center gap-3">
                View Archive
                <ExternalLink size={18} />
             </button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative h-[450px] overflow-hidden rounded-[2.5rem] border border-border/50 bg-muted/30"
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-background/10" />
              </div>
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="relative z-10">
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary text-xs font-bold rounded-full mb-4 backdrop-blur-md border border-secondary/20"
                  >
                    {project.category}
                  </motion.span>
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-tight"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-muted-foreground flex items-center gap-2 group-hover:text-primary transition-colors font-medium"
                  >
                    <MapPin size={18} className="text-secondary" />
                    {project.location}
                  </motion.p>
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-md z-20">
                 <div className="text-center p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-lg font-medium mb-6">Explore the full methodology and results of this project.</p>
                    <Link 
                      href={`/projects/${project.id}`}
                      className="inline-block px-8 py-3 bg-white text-primary rounded-xl font-bold hover:scale-105 transition-transform"
                    >
                       Read Case Study
                    </Link>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
