'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Droplets, 
  Map, 
  Award, 
  BarChart3, 
  ShieldCheck, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Globe2, 
  Compass, 
  Maximize2,
  FileCheck2,
  SearchCheck,
  TrendingUp,
  Cpu
} from 'lucide-react'
import { petroleumAssetIntelligence } from '@/lib/data'
import { cn } from '@/lib/utils'

export function PetroleumAssetIntelligenceSection() {
  const [activeModule, setActiveModule] = useState(0)
  const [isImageZoomed, setIsImageZoomed] = useState(false)

  const modules = petroleumAssetIntelligence.modules

  return (
    <section 
      id="petroleum-asset-intelligence" 
      data-nav-theme="dark" 
      className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#040e0b] text-white border-y border-white/10"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial-gradient from-[#09221c]/70 via-[#040e0b] to-[#020705] -z-10" />
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md text-[#8dc440] text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Droplets size={14} className="text-amber-400" />
            <span>Petroleum Asset Intelligence & Acreage Management</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight uppercase"
          >
            Mapping Opportunities. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8dc440] via-emerald-400 to-teal-300">
              Supporting Licensing Success.
            </span> <br />
            Creating Long-Term Asset Value.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Delta Systematics Limited (DSL) provides an integrated spatial advisory platform linking acreage intelligence, digital concession cadastre, competitive bid advisory, and regulatory asset governance into defensible, bankable decision-making.
          </motion.p>
        </div>

        {/* Interactive Dashboard Showcase (Using the Uploaded Image) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden border border-white/15 bg-black/40 backdrop-blur-2xl shadow-2xl shadow-black/80 mb-20 group"
        >
          {/* Top Window Bar */}
          <div className="px-6 py-4 bg-white/[0.03] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-white/50 pl-3 border-l border-white/10 hidden sm:inline">
                DSL Spatial Cadastre Engine // Offshore Basin - Alpha
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Asset Telemetry
              </span>
              <button
                onClick={() => setIsImageZoomed(true)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-colors"
                title="Expand View"
              >
                <Maximize2 size={15} />
              </button>
            </div>
          </div>

          {/* Main Dashboard Image with Hover Zoom Hint */}
          <div 
            onClick={() => setIsImageZoomed(true)}
            className="relative aspect-[16/9] w-full cursor-zoom-in overflow-hidden bg-black/60"
          >
            <Image
              src="/petroleum-asset-intelligence-dashboard.jpg"
              alt="Petroleum Asset Intelligence & Acreage Management Dashboard"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040e0b] via-transparent to-transparent opacity-40 pointer-events-none" />

            <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15 text-xs text-white/80 flex items-center gap-2 pointer-events-none">
              <Maximize2 size={13} className="text-[#8dc440]" />
              Click to view high-resolution dashboard
            </div>
          </div>

          {/* Live Indicative Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 divide-y sm:divide-y-0 sm:divide-x divide-white/10 border-t border-white/10 bg-black/60">
            {petroleumAssetIntelligence.metrics.map((metric, i) => (
              <div key={i} className="p-4 sm:p-5 text-center">
                <div className="text-xl sm:text-2xl font-black text-[#8dc440] font-mono tracking-tight">
                  {metric.value}
                </div>
                <div className="text-[11px] uppercase tracking-wider text-white/60 font-medium mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Modal for full-screen inspection of the attached image */}
        <AnimatePresence>
          {isImageZoomed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsImageZoomed(false)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative max-w-6xl w-full max-h-[90vh] aspect-[16/9] rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
              >
                <Image
                  src="/petroleum-asset-intelligence-dashboard.jpg"
                  alt="Petroleum Asset Intelligence & Acreage Management Full Dashboard"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Document Details: The 4 Deep Service Pillars */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-white/10">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#8dc440] font-bold mb-2">Integrated Advisory Architecture</p>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Four Core Pillars of Petroleum GIS & Asset Governance
              </h3>
            </div>
            <Link
              href="/environmental-petroleum-gis-asset-management"
              className="text-xs uppercase tracking-widest font-bold text-[#8dc440] hover:text-white flex items-center gap-2 group transition-colors"
            >
              Full Service Dossier
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Module Navigation Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {modules.map((m, i) => (
              <button
                key={m.number}
                onClick={() => setActiveModule(i)}
                className={cn(
                  "p-4 rounded-2xl text-left border transition-all duration-300 relative",
                  activeModule === i
                    ? "bg-white/[0.08] border-[#8dc440] shadow-lg shadow-[#8dc440]/10"
                    : "bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={cn(
                    "text-xs font-mono font-bold px-2 py-0.5 rounded",
                    activeModule === i ? "bg-[#8dc440] text-black" : "bg-white/10 text-white/60"
                  )}>
                    {m.number}
                  </span>
                  {activeModule === i && (
                    <span className="w-2 h-2 rounded-full bg-[#8dc440] animate-ping" />
                  )}
                </div>
                <h4 className="text-sm font-bold text-white leading-snug line-clamp-2">
                  {m.title}
                </h4>
              </button>
            ))}
          </div>

          {/* Active Module Details Display */}
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModule}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-12 gap-8 items-start"
              >
                {/* Left: Module Scope & Tagline */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                    <span>Module {modules[activeModule].number}</span>
                    <span>•</span>
                    <span>Advisory Specification</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    {modules[activeModule].title}
                  </h3>
                  <p className="text-white/70 text-base leading-relaxed italic border-l-2 border-[#8dc440] pl-4">
                    "{modules[activeModule].tagline}"
                  </p>

                  {/* If Milestone exists (Module 02) */}
                  {modules[activeModule].milestones && (
                    <div className="pt-4 space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                        <Award size={15} />
                        Confidential Licensing Milestones
                      </div>
                      <div className="space-y-2.5">
                        {modules[activeModule].milestones?.map((m: any, idx: number) => (
                          <div key={idx} className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs leading-relaxed">
                            <span className="font-mono font-bold text-amber-300 mr-2">[{m.year}]</span>
                            <span className="text-white/90">{m.text}</span>
                          </div>
                        ))}
                      </div>
                      {modules[activeModule].disclaimer && (
                        <p className="text-[11px] text-white/40 italic">
                          *{modules[activeModule].disclaimer}
                        </p>
                      )}
                    </div>
                  )}

                  {/* If Track Record Experience exists (Module 04) */}
                  {modules[activeModule].experience && (
                    <div className="pt-4 space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                        <ShieldCheck size={15} />
                        Proven Institutional Track Record
                      </div>
                      <div className="space-y-2">
                        {modules[activeModule].experience?.map((exp: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-white/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                            <span>{exp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right: Core Services & Deliverables */}
                <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 bg-black/40 p-6 sm:p-8 rounded-2xl border border-white/5">
                  {/* Core Services */}
                  <div className="space-y-4">
                    <h5 className="text-xs uppercase tracking-wider text-[#8dc440] font-bold flex items-center gap-2">
                      <Cpu size={15} />
                      Core Advisory Services
                    </h5>
                    <ul className="space-y-3">
                      {modules[activeModule].coreServices.map((svc: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-white/90">
                          <CheckCircle2 size={16} className="text-[#8dc440] shrink-0 mt-0.5" />
                          <span>{svc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables / Outputs */}
                  <div className="space-y-4 sm:border-l sm:border-white/10 sm:pl-6">
                    <h5 className="text-xs uppercase tracking-wider text-teal-400 font-bold flex items-center gap-2">
                      <FileCheck2 size={15} />
                      {modules[activeModule].deliverables ? 'Client Deliverables' : 'Decision-Support Outputs'}
                    </h5>
                    <ul className="space-y-3">
                      {(modules[activeModule].deliverables || modules[activeModule].coreServices).map((del: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
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

        {/* Integrated Advisory Platform - 7 Pillared Foundation */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-white/[0.04] to-white/[0.01] border border-white/10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono text-[#8dc440] uppercase tracking-widest font-bold">DSL Integrated Platform</span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Defensible Spatial Governance Across the Petroleum Lifecycle
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                From initial reconnaissance and competitive bid packages to field appraisal, pipeline corridor geofencing, and statutory reporting — DSL links technical subsurface data with legally defensible cadastre.
              </p>
              <div className="pt-2">
                <Link
                  href="/environmental-petroleum-gis-asset-management"
                  className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#8dc440] text-black font-extrabold text-xs uppercase tracking-widest rounded-full hover:bg-emerald-400 transition-all shadow-lg shadow-[#8dc440]/20 active:scale-95"
                >
                  Explore Petroleum GIS Services
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
              {petroleumAssetIntelligence.platformPillars.map((pillar, i) => (
                <div 
                  key={i}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#8dc440]/40 transition-colors flex items-center gap-3 text-xs font-semibold text-white/90"
                >
                  <div className="w-2 h-2 rounded-full bg-[#8dc440] shrink-0" />
                  <span>{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
