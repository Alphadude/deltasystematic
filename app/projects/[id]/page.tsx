'use client'

import { use } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/Footer'
import { projects } from '@/lib/data'
import { ArrowLeft, MapPin, Calendar, Users, CheckCircle, Phone, Mail, Globe, Shield, Target } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params)
  const project = projects.find(p => p.id === unwrappedParams.id)

  if (!project) {
    return (
      <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
        <Navbar isHomepage={false} />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you are looking for does not exist or has been moved.</p>
          <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-all">
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar isHomepage={false} />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Link href="/projects" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 font-bold transition-colors">
                <ArrowLeft size={18} />
                Explore Projects
              </Link>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-1.5 bg-primary/20 backdrop-blur-md rounded-full text-xs font-bold tracking-wider uppercase border border-primary/30 text-primary-foreground">
                  {project.category}
                </span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight text-balance max-w-4xl">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Meta */}
      <section className="relative z-10 -mt-10 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-8 bg-card/40 backdrop-blur-2xl border border-border/50 rounded-3xl shadow-2xl shadow-black/10"
          >
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Location</p>
                <p className="font-bold text-foreground">{project.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <Calendar size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Year</p>
                <p className="font-bold text-foreground">{project.year || '2023'}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <Users size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Team</p>
                <p className="font-bold text-foreground">{project.team || '6 Specialists'}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Shield size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Client</p>
                <p className="font-bold text-foreground truncate max-w-[150px]">{project.client || 'Enterprise Partner'}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-1 bg-primary rounded-full" />
                  <h2 className="text-2xl font-bold tracking-tight">Project Overview</h2>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </motion.div>

              {/* Objectives */}
              {project.objectives && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-1 bg-secondary rounded-full" />
                    <h2 className="text-2xl font-bold tracking-tight">Strategic Objectives</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.objectives.map((obj, idx) => (
                      <div key={idx} className="flex gap-4 p-6 bg-muted/30 rounded-2xl border border-border/50">
                        <CheckCircle size={24} className="text-primary flex-shrink-0" />
                        <p className="font-medium text-foreground/80">{obj}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Methodology */}
              {project.methodology && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-1 bg-accent rounded-full" />
                    <h2 className="text-2xl font-bold tracking-tight">Methodology & Process</h2>
                  </div>
                  <div className="space-y-4">
                    {project.methodology.map((step, idx) => (
                      <div key={idx} className="group flex gap-6 p-6 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/30 transition-all duration-300">
                        <span className="text-4xl font-bold text-primary/20 group-hover:text-primary transition-colors">0{idx + 1}</span>
                        <p className="text-lg text-muted-foreground leading-relaxed pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar Results */}
            <div className="lg:col-span-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10 border border-primary/20 rounded-3xl sticky top-32"
              >
                <div className="flex items-center gap-3 mb-8">
                  <Target size={28} className="text-primary" />
                  <h2 className="text-2xl font-bold tracking-tight">Key Outcomes</h2>
                </div>
                <div className="space-y-6">
                  {project.outcomes?.map((outcome, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <p className="font-medium text-foreground/90">{outcome}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-12 border-t border-border/50">
                  <h3 className="text-lg font-bold mb-6">Need a similar solution?</h3>
                  <Link 
                    href="/contact" 
                    className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-primary-foreground rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 group"
                  >
                    Start Your Project
                    <Globe size={20} className="group-hover:rotate-12 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Projects (Quick Toggle) */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Continue Exploring</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {projects.slice(0, 3).map((p) => (
              <Link
                key={p.id}
                href={`/projects/${p.id}`}
                className="group p-6 bg-card border border-border/50 rounded-2xl hover:border-primary/30 transition-all"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                  <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-bold text-lg mb-2 line-clamp-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
