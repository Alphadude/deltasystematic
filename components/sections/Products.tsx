'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Smartphone } from 'lucide-react'
import { products } from '@/lib/data'

export function Products() {
  const product = products[0] // GetWell

  return (
    <section
      id="products"
      data-nav-theme="dark"
      className="py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -left-40 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-6"
            >
              <Smartphone size={12} />
              Digital Products
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
            >
              Our <span className="text-secondary">Products</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Geospatial intelligence powered digital tools built to transform how Nigerians access critical services.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/products"
              className="px-8 py-4 bg-muted hover:bg-muted/80 rounded-2xl font-bold transition-all flex items-center gap-3 group"
            >
              View All Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* GetWell Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden p-10 lg:p-16"
        >
          {/* Card glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-2xl bg-emerald-500/15 flex items-center justify-center">
                  <MapPin size={18} className="text-emerald-400" />
                </span>
                <span className="text-xs font-black uppercase tracking-widest text-emerald-400">
                  {product.tagline}
                </span>
              </div>

              <h3 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
                {product.name}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {product.shortDesc}
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                {product.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-5 rounded-2xl bg-muted/40 border border-border/50"
                  >
                    <p className="text-2xl font-black text-emerald-400 mb-1">{stat.value}</p>
                    <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2 mb-10">
                {product.features.slice(0, 4).map((f) => {
                  const Icon = f.icon
                  return (
                    <span
                      key={f.title}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border bg-muted/30 border-border/50 text-foreground/70"
                    >
                      <Icon size={10} />
                      {f.title}
                    </span>
                  )
                })}
              </div>

              {/* Cities */}
              <div className="flex items-center gap-2 mb-10">
                {product.cities.map((city) => (
                  <span
                    key={city}
                    className="flex items-center gap-1 px-3 py-1 text-xs font-bold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  >
                    <MapPin size={10} />
                    {city}
                  </span>
                ))}
              </div>

              <Link
                href={`/products/${product.id}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 text-white font-bold rounded-2xl hover:bg-emerald-600 transition-all group shadow-lg shadow-emerald-500/20"
              >
                Explore GetWell
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right: Phone screenshots */}
            <div className="relative flex justify-center lg:justify-end gap-4">
              {product.screenshots.slice(0, 2).map((shot, i) => (
                <motion.div
                  key={shot.src}
                  initial={{ opacity: 0, y: i % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`relative rounded-[2rem] overflow-hidden border border-border/50 shadow-2xl shadow-black/20 ${
                    i === 0 ? 'w-[150px] sm:w-[180px] mt-8' : 'w-[150px] sm:w-[180px] -mt-8'
                  }`}
                  style={{ aspectRatio: '9/16' }}
                >
                  <Image
                    src={shot.src}
                    alt={shot.caption}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
              {/* Decorative ring */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 rounded-full blur-3xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
