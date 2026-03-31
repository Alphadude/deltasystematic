'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '@/lib/data'

interface NavbarProps {
  isHomepage?: boolean
}

export function Navbar({ isHomepage = true }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      suppressHydrationWarning
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/5'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center group">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative flex items-center justify-center transition-all"
            >
              <Image 
                src="/logo.webp" 
                alt="Delta Systematics Logo" 
                width={282}
                height={106}
                className="object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[10px] font-black text-white/50 hover:text-emerald-400 transition-all relative group uppercase tracking-widest"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
            
            <div className="h-6 w-[1px] bg-white/10" />
            
            <Link
              href="/contact"
              className="px-8 py-3 bg-white/5 backdrop-blur-xl border border-white/20 text-white rounded-full text-[10px] font-black tracking-widest hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all uppercase"
            >
              Get a Consult
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 hover:bg-white/10 rounded-2xl transition-all text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-[#020806]/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-2 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-sm font-black text-white/70 hover:text-emerald-400 hover:bg-white/5 rounded-xl transition-all uppercase tracking-widest"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full px-8 py-4 bg-white/5 border border-white/20 text-white rounded-xl font-black flex items-center justify-center gap-2 uppercase tracking-widest"
                >
                  Get a Consult
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
