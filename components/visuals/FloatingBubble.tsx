'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FloatingBubbleProps {
  children: ReactNode
  size?: number | string
  delay?: number
  x?: string
  y?: string
  duration?: number
  disableInternalAnim?: boolean
}

export function FloatingBubble({ 
  children, 
  size = 120, 
  delay = 0, 
  x = '50%', 
  y = '50%',
  duration = 10,
  disableInternalAnim = false
}: FloatingBubbleProps) {
  return (
    <motion.div
      initial={disableInternalAnim ? false : { x: x, y: y, opacity: 0, scale: 0.8 }}
      animate={disableInternalAnim ? { opacity: 1, scale: 1 } : { 
        opacity: 1, 
        scale: 1,
        y: [`${parseFloat(y)}%`, `${parseFloat(y) - 5}%`, `${parseFloat(y)}%`],
        x: [`${parseFloat(x)}%`, `${parseFloat(x) + 2}%`, `${parseFloat(x)}%`],
      }}
      transition={disableInternalAnim ? { opacity: { duration: 1, delay }, scale: { duration: 1, delay } } : {
        opacity: { duration: 1, delay },
        scale: { duration: 1, delay },
        y: { duration, repeat: Infinity, ease: "easeInOut", delay },
        x: { duration: duration * 1.5, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className={disableInternalAnim ? "relative z-20 group" : "absolute z-20 group"}
      style={{ width: size, height: size }}
    >
      {/* The Bubble Effect */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Main Glassy Circle */}
        <div 
          className="absolute inset-0 rounded-full bg-white/[0.03] backdrop-blur-[4px] border border-white/30 overflow-hidden"
          style={{
            boxShadow: `
              inset 0 0 40px rgba(255, 255, 255, 0.1), 
              inset 0 10px 20px rgba(255, 255, 255, 0.15),
              0 0 25px rgba(255, 255, 255, 0.05),
              0 15px 35px rgba(0, 0, 0, 0.2)
            `,
          }}
        >
          {/* Top-Left Main Reflection (The bright "window" reflection) */}
          <div className="absolute top-[8%] left-[15%] w-[40%] h-[30%] rounded-[100%] bg-white/40 blur-[4px] rotate-[-15deg] pointer-events-none" />
          
          {/* Outer Ring Highlight (Fresnel effect) */}
          <div className="absolute inset-0 rounded-full border-[1.5px] border-t-white/40 border-l-white/30 border-r-white/5 border-b-white/10 pointer-events-none" />
          
          {/* Inner Depth Gradient (Darker bottom) */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-black/20 pointer-events-none" />
          
          {/* Subtle Color Tint (Based on background) */}
          <div className="absolute -bottom-[20%] -right-[20%] w-[80%] h-[80%] rounded-full bg-emerald-500/20 blur-[30px] pointer-events-none" />

          {/* Dynamic "Swirly" Reflection Overlay */}
          <motion.div
            animate={{
              rotate: 360
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-[50%] bg-gradient-conic from-transparent via-white/5 to-transparent opacity-40 pointer-events-none"
          />
        </div>

        {/* Inner Content (The Icon/Graphic) */}
        <div className="relative z-30 transform group-hover:scale-110 transition-transform duration-700 ease-out flex items-center justify-center">
          {children}
        </div>

        {/* Soft External Glow */}
        <div className="absolute -inset-4 rounded-full bg-emerald-500/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
      </div>
    </motion.div>
  )
}
