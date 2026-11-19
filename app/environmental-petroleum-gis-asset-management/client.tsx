'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Droplets, 
  MapPin, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Layers, 
  FileCheck2, 
  Cpu, 
  Maximize2,
  Compass,
  Globe2,
  Database,
  BarChart3,
  Calendar,
  Lock,
  MessageSquare
} from 'lucide-react'
import { petroleumAssetIntelligence, detailedServices } from '@/lib/data'
import { cn } from '@/lib/utils'

export function PetroleumAssetIntelligenceClient() {
  const [activeModule, setActiveModule] = useState(0)
  const [isImageZoomed, setIsImageZoomed] = useState(false)

  const modules = petroleumAssetIntelligence.modules

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#040e0b] text-white border-b border-white/10">
        <div className="absolute inset-0 bg-radial-gradient from-[#09221c]/70 via-[#040e0b] to-[#020705] -z-10" />
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white/60 hover:text-[#8dc440] transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to All Services
          </Link>

          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md text-[#8dc440] text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Droplets size={13} className="text-amber-400" />
              <span>DELTA SYSTEMATICS LIMITED / PETROLEUM ASSET INTELLIGENCE & ACREAGE MANAGEMENT</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight uppercase"
            >
              Petroleum Asset Intelligence <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8dc440] via-emerald-400 to-teal-300">
                & Acreage Management
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-2xl text-white/90 font-light max-w-3xl mx-auto mb-4 tracking-tight"
            >
              Mapping opportunities. Supporting licensing success. Creating long-term asset value.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto leading-relaxed"
            >
              A technically defensible spatial platform that converges environmental intelligence, digital petroleum cadastre, competitive bid advisory, and regulatory asset governance.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Live Indicative Metrics Strip */}
      <section className="bg-black/90 text-white py-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#8dc440] font-bold">
              Offshore Basin Alpha // Spatial Telemetry & Asset Profile
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

      {/* Attached Image Dashboard Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-primary font-bold">Operational GIS Platform</span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground mt-1">
                Concession Mapping & Decision-Support System
              </h2>
            </div>
            <button
              onClick={() => setIsImageZoomed(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border/60 text-xs font-bold uppercase tracking-wider hover:border-primary/50 transition-colors"
            >
              <Maximize2 size={14} className="text-primary" />
              Expand High-Res Dashboard
            </button>
          </div>

          <div 
            onClick={() => setIsImageZoomed(true)}
            className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-border/60 bg-black/60 shadow-2xl cursor-zoom-in group"
          >
            <Image
              src="/petroleum-asset-intelligence-dashboard.jpg"
              alt="Petroleum Asset Intelligence & Acreage Management Dashboard"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white pointer-events-none">
              <span className="text-xs font-mono bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                Offshore Basin — Alpha // Blocks B-101 to B-104
              </span>
              <span className="text-xs font-semibold bg-primary text-black px-3 py-1.5 rounded-lg shadow">
                Click to inspect
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Screen Image Modal */}
      <AnimatePresence>
        {isImageZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsImageZoomed(false)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <div className="relative max-w-6xl w-full max-h-[90vh] aspect-[16/9] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
              <Image
                src="/petroleum-asset-intelligence-dashboard.jpg"
                alt="Petroleum Asset Intelligence & Acreage Management Full Dashboard"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The 4 Deep Service Pillars from Presentation Document */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/40 border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Website Services Presentation</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mt-2 mb-4">
              Four Core Service Pillars
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Structured advisory workflows from digital cadastre and competitive bid screening to technical due diligence and spatial asset governance.
            </p>
          </div>

          {/* Module Selector Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {modules.map((m, i) => (
              <button
                key={m.number}
                onClick={() => setActiveModule(i)}
                className={cn(
                  "p-5 rounded-2xl text-left border transition-all duration-300 relative",
                  activeModule === i
                    ? "bg-primary/10 border-primary shadow-lg shadow-primary/10"
                    : "bg-card/50 border-border/50 hover:bg-muted/50"
                )}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={cn(
                    "text-xs font-mono font-bold px-2 py-0.5 rounded",
                    activeModule === i ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  )}>
                    PILLAR {m.number}
                  </span>
                  {activeModule === i && (
                    <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  )}
                </div>
                <h3 className="text-base font-bold text-foreground leading-snug">
                  {m.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Active Module Detailed Card */}
          <div className="bg-card rounded-3xl p-8 sm:p-12 border border-border/60 shadow-xl shadow-black/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModule}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-12 gap-10"
              >
                {/* Left Description */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-primary font-bold uppercase tracking-wider">
                    <span>DSL Presentation Module {modules[activeModule].number}</span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-foreground leading-tight">
                    {modules[activeModule].title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed italic border-l-2 border-primary pl-4">
                    "{modules[activeModule].tagline}"
                  </p>

                  {/* Confidential Licensing Milestones for Module 02 */}
                  {modules[activeModule].milestones && (
                    <div className="pt-4 space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-2">
                        <Award size={16} />
                        Confidential Licensing Milestones
                      </div>
                      <div className="space-y-3">
                        {modules[activeModule].milestones?.map((m: any, idx: number) => (
                          <div key={idx} className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm leading-relaxed">
                            <span className="font-mono font-bold text-amber-600 dark:text-amber-400 mr-2">[{m.year}]:</span>
                            <span className="text-foreground/90">{m.text}</span>
                          </div>
                        ))}
                      </div>
                      {modules[activeModule].disclaimer && (
                        <p className="text-[11px] text-muted-foreground italic">
                          *{modules[activeModule].disclaimer}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Relevant Experience for Module 04 */}
                  {modules[activeModule].experience && (
                    <div className="pt-4 space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                        <ShieldCheck size={16} />
                        Relevant DSL Institutional Experience
                      </div>
                      <div className="space-y-2.5">
                        {modules[activeModule].experience?.map((exp: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                            <span>{exp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Core Services & Deliverables */}
                <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8 bg-muted/30 p-8 rounded-2xl border border-border/50">
                  <div className="space-y-4">
                    <h4 className="text-xs uppercase tracking-wider text-primary font-bold flex items-center gap-2">
                      <Cpu size={16} />
                      Core Services
                    </h4>
                    <ul className="space-y-3.5">
                      {modules[activeModule].coreServices.map((svc: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-foreground/90 font-medium">
                          <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                          <span>{svc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 sm:border-l sm:border-border/50 sm:pl-8">
                    <h4 className="text-xs uppercase tracking-wider text-teal-600 dark:text-teal-400 font-bold flex items-center gap-2">
                      <FileCheck2 size={16} />
                      {modules[activeModule].deliverables ? 'Client-Facing Deliverables' : 'Decision-Support Outputs'}
                    </h4>
                    <ul className="space-y-3.5">
                      {(modules[activeModule].deliverables || modules[activeModule].coreServices).map((del: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 7-Pillared Integrated Advisory Platform Scope */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 sm:p-14 rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-card to-background border border-border/60 shadow-2xl">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-mono text-primary uppercase tracking-widest font-bold">DSL Advisory Platform</span>
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                  Integrated Spatial Tenure & Concession Governance
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Delta Systematics Limited acts as an accountable technical partner to upstream operators, regulatory bodies, and transaction advisors. Our systems validate boundaries, screen environmental risk, and ensure defensible asset decisions.
                </p>
                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold text-xs uppercase tracking-widest rounded-full hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                  >
                    Engage Our Advisory Team
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                {petroleumAssetIntelligence.platformPillars.map((pillar, i) => (
                  <div 
                    key={i}
                    className="p-5 rounded-2xl bg-card border border-border/60 hover:border-primary/40 transition-colors flex items-center gap-3.5 text-sm font-semibold text-foreground/90 shadow-sm"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Convergence Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 border-t border-border/50">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Convergence of Subsurface & Environmental Intelligence
          </h3>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Unlike standalone petroleum cadastre providers, DSL integrates full ecological safeguards, ESIA compliance, flood modeling (Safe Shelter Index), and blue carbon opportunities with concession analytics.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/services/biological-capital"
              className="px-6 py-3 rounded-full bg-card border border-border/60 text-xs font-bold uppercase tracking-wider hover:border-primary transition-colors"
            >
              Biological Capital Advisory
            </Link>
            <Link 
              href="/services/environmental-esg"
              className="px-6 py-3 rounded-full bg-card border border-border/60 text-xs font-bold uppercase tracking-wider hover:border-primary transition-colors"
            >
              Climate & ESG Safeguards
            </Link>
            <Link 
              href="/projects"
              className="px-6 py-3 rounded-full bg-card border border-border/60 text-xs font-bold uppercase tracking-wider hover:border-primary transition-colors"
            >
              Case Studies & Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
