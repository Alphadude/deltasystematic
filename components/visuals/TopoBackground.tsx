'use client'

import { motion } from 'framer-motion'

export function TopoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <g className="topo-glow">
          {/* Layer 1 - Deep contours */}
          <motion.path
            d="M-100 200 C 100 150, 300 350, 500 300 S 800 100, 1100 150"
            stroke="rgba(34, 197, 94, 0.2)"
            strokeWidth="0.5"
            animate={{
              d: [
                "M-100 200 C 100 150, 300 350, 500 300 S 800 100, 1100 150",
                "M-100 210 C 110 160, 310 340, 510 310 S 810 110, 1100 160",
                "M-100 200 C 100 150, 300 350, 500 300 S 800 100, 1100 150",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M-100 250 C 120 200, 320 400, 520 350 S 820 150, 1100 200"
            stroke="rgba(34, 197, 94, 0.3)"
            strokeWidth="1"
            animate={{
              d: [
                "M-100 250 C 120 200, 320 400, 520 350 S 820 150, 1100 200",
                "M-100 260 C 130 210, 330 390, 530 360 S 830 160, 1100 210",
                "M-100 250 C 120 200, 320 400, 520 350 S 820 150, 1100 200",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Layer 2 - More pronounced lines */}
          <motion.path
            d="M-100 400 C 150 350, 350 550, 550 500 S 850 300, 1100 350"
            stroke="rgba(34, 197, 94, 0.4)"
            strokeWidth="1.5"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Main "Ridge" line - matching the image flow */}
          <motion.path
            d="M 1200 400 Q 1000 350 850 550 T 600 650 T 400 500 T 100 600"
            stroke="rgba(34, 197, 94, 0.6)"
            strokeWidth="2"
            strokeDasharray="4 4"
            animate={{
              strokeDashoffset: [0, -20],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          {/* More complex grouped ridges */}
          {[...Array(6)].map((_, i) => (
             <motion.path
               key={i}
               d={`M -100 ${500 + i * 20} C 200 ${450 + i * 15}, 400 ${650 + i * 25}, 600 ${600 + i * 20} S 900 ${400 + i * 15}, 1100 ${450 + i * 20}`}
               stroke={`rgba(34, 197, 94, ${0.1 + i * 0.05})`}
               strokeWidth="1"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: i * 0.2 }}
             />
          ))}

          {/* Glowing "active" ridge */}
          <motion.path
            d="M 1100 300 C 900 250, 800 500, 600 600 S 300 750, -100 700"
            stroke="rgba(34, 197, 94, 0.8)"
            strokeWidth="2.5"
            className="topo-glow"
            animate={{
              strokeWidth: [2.5, 3.5, 2.5],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>

        {/* Subtle grid pattern */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(34, 197, 94, 0.05)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}
