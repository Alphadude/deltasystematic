'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/Footer'
import { projects } from '@/lib/data'
import { ArrowRight, MapPin, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const categories = ['All Projects', 'Mapping & Analysis', 'Remote Sensing', 'Geospatial Analysis', 'Risk Assessment', 'Environmental Monitoring']

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects')

  const filteredProjects = selectedCategory === 'All Projects'
    ? projects
    : projects.filter(p => p.category === selectedCategory || p.category.includes(selectedCategory))

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
              Our <span className="text-secondary">Impact</span> Portfolio
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A showcase of over 25 years delivering specialized spatial products and strategic environmental solutions across diverse sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 z-40 py-8 bg-background/80 backdrop-blur-xl border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 min-h-[600px]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <Link
                    href={`/projects/${project.id}`}
                    className="group flex flex-col h-full bg-card/40 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-xl shadow-black/5"
                  >
                    <div className="relative aspect-video overflow-hidden bg-transparent">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-transparent opacity-0" />
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-1.5 bg-background/80 backdrop-blur-md rounded-full text-xs font-bold tracking-wider uppercase border border-white/10">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-2 text-primary font-bold text-sm mb-3">
                        <MapPin size={16} />
                        <span>{project.location}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-3 mb-8 text-lg">
                        {project.description}
                      </p>
                      <div className="mt-auto flex items-center gap-2 font-bold text-primary group-hover:gap-4 transition-all duration-300">
                        View Project Details
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-40">
              <Search size={64} className="mx-auto text-muted-foreground/30 mb-6" />
              <h3 className="text-2xl font-bold mb-2">No projects found</h3>
              <p className="text-muted-foreground">Try adjusting your filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
