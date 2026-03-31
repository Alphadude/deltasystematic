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
}

export function FloatingBubble({ 
  children, 
  size = 120, 
  delay = 0, 
  x = '50%', 
  y = '50%',
  duration = 10
}: FloatingBubbleProps) {
  return (
    <motion.div
      initial={{ x: x, y: y, opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [`${parseFloat(y)}%`, `${parseFloat(y) - 5}%`, `${parseFloat(y)}%`],
        x: [`${parseFloat(x)}%`, `${parseFloat(x) + 2}%`, `${parseFloat(x)}%`],
      }}
      transition={{
        opacity: { duration: 1, delay },
        scale: { duration: 1, delay },
        y: { duration, repeat: Infinity, ease: "easeInOut", delay },
        x: { duration: duration * 1.5, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className="absolute z-20 group"
      style={{ width: size, height: size }}
    >
      {/* The Bubble Effect */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Main Glassy Circle */}
        <div 
          className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-[2px] border border-white/20 overflow-hidden"
          style={{
            boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.1), 0 0 15px rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Surface Shine (Soap Bubble style) */}
          <div className="absolute top-[10%] left-[10%] w-[80%] h-[80%] rounded-full opacity-40 bg-gradient-to-br from-white/30 via-transparent to-transparent blur-[2px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] rounded-full opacity-20 bg-gradient-to-tl from-emerald-500/30 via-transparent to-transparent blur-[2px]" />
          
          {/* Animated Reflection */}
          <motion.div
            animate={{
              rotate: 360
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-[50%] bg-gradient-conic from-transparent via-white/5 to-transparent pointer-events-none"
          />
        </div>

        {/* Content (Icon/Image) */}
        <div className="relative z-30 transform group-hover:scale-110 transition-transform duration-500">
          {children}
        </div>

        {/* Hover Glow */}
        <div className="absolute inset-0 rounded-full group-hover:bg-emerald-500/10 transition-colors duration-500" />
      </div>
    </motion.div>
  )
}
