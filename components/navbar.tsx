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
              className="w-64 h-24 relative flex items-center justify-center transition-all"
            >
              <Image 
                src="/logo.webp" 
                alt="Delta Systematics Logo" 
                fill 
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
                  className="text-sm font-bold text-foreground/60 hover:text-primary transition-all relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
            
            <div className="h-6 w-[1px] bg-border" />
            
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20 transition-all"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 hover:bg-muted rounded-2xl transition-all"
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
            className="md:hidden border-t border-border bg-background overflow-hidden"
          >
            <div className="flex flex-col space-y-2 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-lg font-bold text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold flex items-center justify-center gap-2"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
