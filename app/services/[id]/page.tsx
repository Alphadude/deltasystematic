'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/Footer'
import { detailedServices, petroleumAssetIntelligence } from '@/lib/data'
import { 
  CheckCircle, 
  ArrowLeft, 
  ArrowRight, 
  MessageSquare, 
  Award, 
  ShieldCheck, 
  Cpu, 
  FileCheck2, 
  Layers, 
  Droplets,
  Maximize2 
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export default function ServicePage() {
  const { id } = useParams()
  const router = useRouter()
  const [service, setService] = useState<any>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    const foundService = detailedServices.find((s) => s.id === id)
    if (!foundService) {
      router.push('/services')
      return
    }
    setService(foundService)
  }, [id, router])

  if (!service) return null

  const Icon = service.icon
  const isPetroleumGis = service.id === 'petroleum-gis'

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar isHomepage={false} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-muted/20">
        <div className="absolute inset-0">
          <div className={`absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-[120px]`} />
          <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto z-10">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>

          <div className="text-center max-w-4xl mx-auto">
            {service.tagline && (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                <Droplets size={13} />
                <span>{service.tagline}</span>
              </div>
            )}

            <div className={cn(
              "w-20 h-20 mx-auto rounded-2xl flex items-center justify-center shadow-2xl mb-8 relative group overflow-hidden border border-border/50 bg-white/80 dark:bg-black/20 backdrop-blur-md",
              service.textColor
            )}>
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10`} />
              <Icon size={40} className="relative z-10" />
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Live Indicative Metrics Strip for Petroleum GIS */}
      {isPetroleumGis && (
        <section className="bg-black/90 text-white py-6 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#8dc440] font-bold">
                Offshore Basin Alpha // Active Spatial Telemetry
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {petroleumAssetIntelligence.metrics.map((metric, i) => (
                <div key={i} className="text-center pt-3 sm:pt-0">
                  <div className="text-2xl font-black text-[#8dc440] font-mono">
                    {metric.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-white/60 font-medium mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery — Real document images */}
      {service.gallery && service.gallery.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/10 border-b border-border/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold tracking-tight">
                Work in <span className="text-primary italic">Action</span>
              </h2>
              <span className="text-xs text-muted-foreground">Click any image to enlarge</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.gallery.map((item: { src: string; caption: string }, i: number) => (
                <motion.div
                  key={item.src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setSelectedImage(item.src)}
                  className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-md hover:shadow-xl hover:border-primary/40 transition-all duration-300 cursor-pointer ${
                    i === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-x-4 bottom-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-between">
                    <p className="text-white text-xs font-semibold leading-snug drop-shadow pr-4">{item.caption}</p>
                    <Maximize2 size={16} className="text-[#8dc440] shrink-0" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <div className="relative max-w-6xl w-full max-h-[90vh] aspect-[16/9] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Four Document Modules (Deep Pillars) if available */}
      {service.modules && service.modules.length > 0 && (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20 border-b border-border/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Advisory Architecture</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2 mb-4">
                Core Petroleum Asset Intelligence Modules
              </h2>
              <p className="text-muted-foreground text-lg">
                Technical, spatial, and regulatory workflows structured to protect concession tenure and de-risk capital investment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {service.modules.map((mod: any) => (
                <motion.div
                  key={mod.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-3xl bg-card/60 backdrop-blur-xl border border-border/60 hover:border-primary/40 transition-all duration-300 shadow-lg shadow-black/5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="px-3 py-1 rounded-lg bg-primary text-primary-foreground font-mono font-bold text-xs">
                        MODULE {mod.number}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">DSL Service Suite</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 tracking-tight text-foreground">
                      {mod.title}
                    </h3>
                    <p className="text-muted-foreground italic text-sm mb-6 pb-6 border-b border-border/50">
                      "{mod.tagline}"
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs uppercase tracking-wider font-bold text-primary flex items-center gap-2 mb-3">
                          <Cpu size={14} />
                          Core Services
                        </h4>
                        <ul className="space-y-2.5">
                          {mod.coreServices.map((cs: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground/80">
                              <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                              <span>{cs}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {mod.deliverables && (
                        <div>
                          <h4 className="text-xs uppercase tracking-wider font-bold text-teal-600 dark:text-teal-400 flex items-center gap-2 mb-3">
                            <FileCheck2 size={14} />
                            {mod.number === '03' ? 'Decision-Support Outputs' : 'Client-Facing Deliverables'}
                          </h4>
                          <ul className="space-y-2">
                            {mod.deliverables.map((del: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                                <span>{del}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {mod.milestones && (
                        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                          <h4 className="text-xs uppercase tracking-wider font-bold text-amber-700 dark:text-amber-400 flex items-center gap-2 mb-2">
                            <Award size={14} />
                            Confidential Licensing Milestones
                          </h4>
                          <div className="space-y-2">
                            {mod.milestones.map((ms: any, idx: number) => (
                              <p key={idx} className="text-xs text-foreground/80 leading-relaxed">
                                <strong className="text-amber-600 dark:text-amber-400 font-mono">[{ms.year}]:</strong> {ms.text}
                              </p>
                            ))}
                          </div>
                          {mod.disclaimer && (
                            <p className="text-[10px] text-muted-foreground italic mt-2">
                              *{mod.disclaimer}
                            </p>
                          )}
                        </div>
                      )}

                      {mod.experience && (
                        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                          <h4 className="text-xs uppercase tracking-wider font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2 mb-2">
                            <ShieldCheck size={14} />
                            Relevant DSL Experience
                          </h4>
                          <ul className="space-y-1.5">
                            {mod.experience.map((exp: string, idx: number) => (
                              <li key={idx} className="text-xs text-foreground/80 flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                                <span>{exp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features & Details Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-8 tracking-tight">Key Capabilities & Workflows</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {service.features.map((feature: string, index: number) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-4 p-6 bg-card/40 rounded-2xl border border-border/50 hover:border-primary/20 transition-all group"
                    >
                      <CheckCircle size={22} className="text-secondary shrink-0 mt-0.5" />
                      <span className="text-base sm:text-lg text-foreground/80 font-medium group-hover:text-foreground transition-colors">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Platform Pillars */}
              {service.platformPillars && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 tracking-tight">Integrated Advisory Platform Scope</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.platformPillars.map((pillar: string, idx: number) => (
                      <div key={idx} className="p-4 rounded-xl bg-muted/30 border border-border/50 flex items-center gap-3 text-sm font-semibold">
                        <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                        <span>{pillar}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Institutional Experience */}
              {service.experience && (
                <div>
                  <h2 className="text-3xl font-bold mb-8 tracking-tight">Institutional Track Record</h2>
                  <div className="space-y-4">
                    {service.experience.map((exp: string, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        className="p-6 bg-muted/20 rounded-2xl border border-border/50 flex gap-4"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                        <span className="text-base sm:text-lg text-muted-foreground leading-relaxed">{exp}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Why Choose DSL */}
              <div className="p-10 bg-muted/30 rounded-[2rem] border border-border/50">
                 <h3 className="text-2xl font-bold mb-6 tracking-tight flex items-center gap-3">
                   <MessageSquare className="text-primary" />
                   Why Choose Delta Systematics?
                 </h3>
                 <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                   With over 25 years of technical leadership across the Niger Delta and Nigeria, our team of geoscientists, GIS analysts, and regulatory advisors delivers defensible spatial solutions for concession tenure, bid submissions, and asset governance.
                 </p>
                 <Link href="/contact" className="text-primary font-bold inline-flex items-center gap-2 hover:underline">
                    Engage our petroleum advisory team
                    <ArrowRight size={18} />
                 </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="p-8 bg-primary rounded-[2.5rem] text-primary-foreground shadow-2xl shadow-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-2xl font-bold mb-4 tracking-tight relative z-10">Request a Dossier</h3>
                <p className="opacity-90 mb-8 leading-relaxed relative z-10 text-sm">
                  Connect with our spatial intelligence specialists to request a tailored technical proposal or licensing round support.
                </p>
                <Link
                  href="/contact"
                  className="w-full py-4 bg-white text-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/90 transition-all shadow-xl group text-sm uppercase tracking-wider"
                >
                  Contact Us Now
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="p-8 border border-border/50 rounded-[2.5rem] bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6 tracking-tight">Other Core Services</h3>
                <div className="space-y-3">
                   {detailedServices
                     .filter(s => s.id !== id)
                     .map(s => (
                       <Link 
                         key={s.id} 
                         href={`/services/${s.id}`}
                         className="flex items-center justify-between p-4 hover:bg-muted rounded-xl transition-all group"
                       >
                         <span className="font-medium text-sm text-muted-foreground group-hover:text-primary transition-colors">{s.title}</span>
                         <ArrowRight size={16} className="text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                       </Link>
                     ))
                   }
                </div>
                <Link href="/services" className="block text-center mt-6 text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
                   View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
