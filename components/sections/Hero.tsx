'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[90vh] flex items-center">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary rounded-full blur-[140px]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10 w-full text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Pioneering environmental excellence
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Environmental <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Solutions</span> Through <br />
            Technology
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed text-balance">
            Delta Systematics delivers cutting-edge spatial data and analytical services across Africa, transforming complex environmental challenges into sustainable opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="#contact"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
            >
              Start Your Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#projects"
              className="px-8 py-4 border-2 border-primary/20 bg-background/50 backdrop-blur-sm text-primary rounded-xl font-semibold hover:bg-primary/5 hover:border-primary/40 transition-all flex items-center justify-center shadow-lg"
            >
              Explore Our Work
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="hidden lg:block relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-square max-w-md mx-auto">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
             {/* Abstract GIS visual effect */}
             <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="w-[150%] h-[150%] border-[1px] border-primary/20 rounded-full flex items-center justify-center"
                >
                  <div className="w-[80%] h-[80%] border-[2px] border-dashed border-secondary/20 rounded-full flex items-center justify-center" />
                  <div className="w-[60%] h-[60%] border-[1px] border-accent/20 rounded-full" />
                </motion.div>
                <div className="absolute inset-0 backdrop-blur-[2px]" />
                <div className="z-20 flex flex-col items-center">
                   <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center shadow-2xl mb-4 transform -rotate-12 border border-white/20">
                      <span className="text-3xl font-bold text-white">DS</span>
                   </div>
                   <div className="px-6 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-medium text-sm">
                      GIS & Remote Sensing
                   </div>
                </div>
             </div>
          </div>
          {/* Floating tags */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -right-4 bg-white/90 backdrop-blur p-4 rounded-xl shadow-xl border border-border/50 z-20"
          >
             <p className="text-sm font-bold text-secondary">25+ Years</p>
             <p className="text-xs text-muted-foreground">Regional Expertise</p>
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-4 bg-primary p-4 rounded-xl shadow-xl border border-white/10 z-20"
          >
             <p className="text-sm font-bold text-white">ESRI Partner</p>
             <p className="text-xs text-white/70">Certified Excellence</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
