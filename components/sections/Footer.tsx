'use client'

import { siteConfig, navLinks } from '@/lib/data'
import { Phone, Mail, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link href="/" className="flex items-center">
              <div className="w-64 h-31 relative flex items-center justify-center -ml-4">
                <Image 
                  src="/logo.webp" 
                  alt="Delta Systematics Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Delta Systematics Ltd is a leading scientific consulting firm providing environmental and GIS solutions.
            </p>
            <div className="flex items-center gap-4">
               {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all">
                   <Icon size={18} />
                 </a>
               ))}
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-bold text-lg mb-8 uppercase tracking-widest text-xs">Site Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary group-hover:scale-150 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary group-hover:scale-150 transition-all" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-bold text-lg mb-8 uppercase tracking-widest text-xs">Our Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services/gis-solutions" className="text-muted-foreground hover:text-primary transition-colors">GIS Solutions</Link></li>
              <li><Link href="/services/remote-sensing" className="text-muted-foreground hover:text-primary transition-colors">Remote Sensing</Link></li>
              <li><Link href="/services/environmental-consulting" className="text-muted-foreground hover:text-primary transition-colors">Env Consulting</Link></li>
              <li><Link href="/services/geospatial-analytics" className="text-muted-foreground hover:text-primary transition-colors">Geospatial Analytics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-bold text-lg mb-8 uppercase tracking-widest text-xs">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center shrink-0 border border-primary/10">
                  <Phone size={18} className="text-primary" />
                </div>
                <div className="text-sm">
                   <p className="font-bold text-foreground mb-1">Call Us</p>
                   <p className="text-muted-foreground leading-relaxed">{siteConfig.contact.phones.join(', ')}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center shrink-0 border border-primary/10">
                  <Mail size={18} className="text-primary" />
                </div>
                <div className="text-sm">
                   <p className="font-bold text-foreground mb-1">Email Us</p>
                   <p className="text-muted-foreground">{siteConfig.contact.email}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <p suppressHydrationWarning>&copy; {new Date().getFullYear()} Delta Systematics Ltd. Powering environmental insights.</p>
          <div className="flex items-center gap-8">
             <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
             <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
