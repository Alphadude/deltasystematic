'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  { name: 'TotalEnergies', logo: '/logos/total.jpg' },
  { name: 'Shell', logo: '/logos/shell.jpg' },
  { name: 'ExxonMobil', logo: '/logos/exxonmobil.jpg' },
  { name: 'NDDC', logo: '/logos/nddc.jpg' },
  { name: 'FAAN', logo: '/logos/faan.png' },
]

export function PartnersBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8 }}
      className="absolute bottom-0 left-0 right-0 z-30"
    >
      <div className="bg-white/5 backdrop-blur-md border-t border-white/10 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          <div className="flex items-center gap-4">
            <span className="text-[10px] md:text-xs font-bold tracking-widest text-white/40 uppercase whitespace-nowrap">
              Institutional Partners & Projects
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50 contrast-125 grayscale mix-blend-screen">
             {partners.map((partner, index) => (
                <motion.div
                  key={partner.name + index}
                  whileHover={{ opacity: 1, scale: 1.05 }}
                  className="relative h-6 md:h-8 w-24 md:w-32"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </motion.div>
             ))}
          </div>
          
          {/* Subtle accent at the end (the little star/diamond from the image) */}
          <div className="hidden lg:block">
             <div className="w-1.5 h-1.5 bg-emerald-500 rotate-45" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
