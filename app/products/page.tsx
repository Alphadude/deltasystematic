'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/Footer'
import { products } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Smartphone } from 'lucide-react'

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar isHomepage={false} />

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-muted/20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-8">
              <Smartphone size={12} />
              Digital Products
            </span>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8">
              Geospatial <span className="text-secondary">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Purpose-built digital tools that harness the power of geospatial intelligence to solve real-world problems for Nigerians.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <Link href={`/products/${product.id}`}>
                <div className="group relative rounded-[3rem] border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden p-10 lg:p-16 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/5">
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

                  <div className="relative grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left */}
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border ${product.badgeColor}`}>
                          {product.tagline}
                        </span>
                      </div>
                      <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight group-hover:text-emerald-400 transition-colors">
                        {product.name}
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        {product.shortDesc}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {product.stats.map((stat) => (
                          <div key={stat.label} className="p-5 rounded-2xl bg-muted/40 border border-border/50">
                            <p className="text-2xl font-black text-emerald-400 mb-1">{stat.value}</p>
                            <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                          </div>
                        ))}
                      </div>

                      {/* Cities */}
                      <div className="flex items-center gap-2 mb-8">
                        {product.cities.map((city) => (
                          <span key={city} className="flex items-center gap-1 px-3 py-1 text-xs font-bold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <MapPin size={10} />
                            {city}
                          </span>
                        ))}
                      </div>

                      <div className="inline-flex items-center gap-2 text-emerald-400 font-bold group-hover:gap-4 transition-all">
                        Learn more <ArrowRight size={18} />
                      </div>
                    </div>

                    {/* Right: Phone mockups */}
                    <div className="relative flex justify-center lg:justify-end gap-4">
                      {product.screenshots.slice(0, 2).map((shot, i) => (
                        <div
                          key={shot.src}
                          className={`relative rounded-[2rem] overflow-hidden border border-border/50 shadow-2xl shadow-black/20 transition-transform duration-500 group-hover:scale-105 ${
                            i === 0 ? 'w-[150px] sm:w-[180px] mt-8' : 'w-[150px] sm:w-[180px] -mt-8'
                          }`}
                          style={{ aspectRatio: '9/16' }}
                        >
                          <Image src={shot.src} alt={shot.caption} fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
