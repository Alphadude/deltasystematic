'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TreePine, Cloud, Orbit, Droplets } from 'lucide-react'
import Link from 'next/link'
import { TopoBackground } from '@/components/visuals/TopoBackground'
import { FloatingBubble } from '@/components/visuals/FloatingBubble'
import { BubblesPhysicsField } from '@/components/visuals/BubblesPhysicsField'

export function Hero() {
  return (
    <section data-nav-theme="dark" className="relative min-h-screen bg-[#020806] flex items-center overflow-hidden pt-20">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-radial-gradient from-[#061a15] via-[#020806] to-[#010504] z-0" />
      
      {/* Topographic Background */}
      <TopoBackground />

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 leading-[1] tracking-tighter uppercase max-w-2xl">
              'TRANSFORMING <br />
              NATURAL ASSETS <br />
              INTO BANKABLE <br />
              INTELLIGENCE.'
            </h1>
            
            <p className="text-lg md:text-xl text-white/50 mb-12 max-w-xl leading-relaxed tracking-tight">
              Integrated consulting for biological capital, ESG advisory, petroleum geospatial systems, and the blue economy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/projects" 
                className="px-10 py-5 bg-[#0e3a31] text-emerald-400 font-bold tracking-widest rounded-full hover:bg-emerald-500 hover:text-white transition-all shadow-lg hover:shadow-emerald-500/20 active:scale-95 text-center text-xs uppercase"
              >
                Explore Our Assets
              </Link>
              <button 
                className="px-10 py-5 bg-transparent border border-white/20 text-white font-bold tracking-widest rounded-full hover:bg-white/5 transition-all active:scale-95 text-center text-xs uppercase flex items-center justify-center gap-3"
              >
                Watch Case Study
                <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center bg-white/10 group">
                   <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-white border-b-4 border-b-transparent ml-0.5" />
                </div>
              </button>
            </div>
          </motion.div>

          {/* Right Column - Floating Bubbles & Visual Elements */}
          <div className="hidden lg:block lg:col-span-6 relative h-[700px]">
            <BubblesPhysicsField 
              bubbles={[
                {
                  id: 1,
                  size: 190,
                  initialX: 15,
                  initialY: 65,
                  content: (
                    <div className="text-emerald-400 p-4">
                      <TreePine size={80} strokeWidth={1} className="drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]" />
                    </div>
                  )
                },
                {
                  id: 2,
                  size: 150,
                  initialX: 45,
                  initialY: 30,
                  content: (
                    <div className="flex flex-col items-center justify-center text-white p-4">
                      <div className="relative">
                        <Cloud size={60} strokeWidth={1} className="opacity-80" />
                        <span className="absolute inset-0 flex items-center justify-center text-[12px] font-bold mt-2 tracking-widest text-emerald-100">CO2</span>
                      </div>
                    </div>
                  )
                },
                {
                  id: 3,
                  size: 170,
                  initialX: 75,
                  initialY: 60,
                  content: (
                    <div className="text-white/80 p-4 flex flex-col items-center">
                      <svg 
                        width="64" 
                        height="64" 
                        viewBox="0 0 48 48" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                      >
                        <path d="M24 4L34 44H14L24 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        <rect x="20" y="14" width="8" height="3" fill="currentColor" fillOpacity="0.3" stroke="currentColor" />
                        <rect x="18" y="22" width="12" height="3" fill="currentColor" fillOpacity="0.3" stroke="currentColor" />
                        <rect x="16" y="30" width="16" height="3" fill="currentColor" fillOpacity="0.3" stroke="currentColor" />
                        <circle cx="38" cy="16" r="4" fill="currentColor" fillOpacity="0.5" className="animate-pulse" />
                      </svg>
                      <span className="text-[9px] uppercase tracking-[0.2em] mt-3 font-bold opacity-40">Petroleum GIS</span>
                    </div>
                  )
                },
                {
                  id: 4,
                  size: 160,
                  initialX: 85,
                  initialY: 15,
                  content: (
                    <div className="text-emerald-300 p-4">
                      <Orbit size={70} strokeWidth={0.5} className="opacity-70" />
                    </div>
                  )
                }
              ]}
            />

            {/* Extra glow elements */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
          </div>
        </div>
      </div>

    </section>
  )
}
