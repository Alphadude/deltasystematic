'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/Footer'
import { products } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Check, ChevronLeft } from 'lucide-react'
import { useState } from 'react'
import { notFound } from 'next/navigation'

export default function GetWellPage() {
  const product = products.find((p) => p.id === 'getwell')
  if (!product) notFound()

  const [activeScreenshot, setActiveScreenshot] = useState(0)

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar isHomepage={false} />

      {/* Hero */}
      <section className="relative pt-36 pb-0 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[160px]" />
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-teal-500/8 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-12"
          >
            <Link href="/products" className="flex items-center gap-1 hover:text-emerald-400 transition-colors font-medium">
              <ChevronLeft size={16} />
              Products
            </Link>
            <span>/</span>
            <span className="text-emerald-400 font-semibold">GetWell</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20 items-center pb-20">
            {/* Left: Copy */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-8"
              >
                <MapPin size={12} />
                {product.tagline}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-none"
              >
                Get<span className="text-emerald-400">Well</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-2xl text-muted-foreground font-light mb-4"
              >
                {product.headline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base text-muted-foreground leading-relaxed mb-10 max-w-xl"
              >
                {product.description}
              </motion.p>

              {/* Cities */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="flex items-center gap-2 flex-wrap mb-10"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mr-2">Available in:</span>
                {product.cities.map((city) => (
                  <span key={city} className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <MapPin size={10} />
                    {city}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 text-white font-bold rounded-2xl hover:bg-emerald-600 transition-all group shadow-lg shadow-emerald-500/25"
                >
                  Request a Demo
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="/#contact"
                  className="px-8 py-4 border border-border/50 rounded-2xl font-bold hover:border-emerald-500/30 transition-colors text-muted-foreground hover:text-foreground"
                >
                  Contact Us
                </a>
              </motion.div>
            </div>

            {/* Right: Phone mockups */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative flex gap-4 items-end">
                {product.screenshots.slice(0, 3).map((shot, i) => {
                  const offsets = ['mb-0', 'mb-12', 'mb-4']
                  const sizes = ['w-[160px]', 'w-[180px]', 'w-[160px]']
                  return (
                    <motion.div
                      key={shot.src}
                      whileHover={{ y: -8, scale: 1.02 }}
                      onClick={() => setActiveScreenshot(i)}
                      className={`relative rounded-[2.5rem] overflow-hidden border-2 shadow-2xl cursor-pointer transition-all duration-300 ${sizes[i]} ${offsets[i]} ${
                        activeScreenshot === i
                          ? 'border-emerald-400 shadow-emerald-500/30'
                          : 'border-border/50 shadow-black/30'
                      }`}
                      style={{ aspectRatio: '9/17' }}
                    >
                      <Image src={shot.src} alt={shot.caption} fill className="object-cover" />
                    </motion.div>
                  )
                })}
                {/* Glow disk */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-80 h-20 bg-emerald-500/20 rounded-full blur-3xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20 border-y border-border/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {product.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl font-black text-emerald-400 mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
            >
              Everything You Need to{' '}
              <span className="text-emerald-400 italic">Find Care</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Powered by Delta Systematics' geospatial expertise, GetWell goes beyond simple search — it's a complete healthcare access platform.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group p-8 bg-card/40 backdrop-blur-sm border border-border/50 rounded-3xl hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${feature.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Screenshots Carousel */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/10 border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            >
              See It in <span className="text-emerald-400 italic">Action</span>
            </motion.h2>
            <p className="text-muted-foreground">Real screenshots from the GetWell mobile app</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {product.screenshots.map((shot, i) => (
              <motion.div
                key={shot.src}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group flex flex-col items-center gap-4"
              >
                <div
                  className="relative rounded-[2rem] overflow-hidden border border-border/50 shadow-2xl shadow-black/30 hover:border-emerald-400/40 transition-all duration-300 w-[160px] sm:w-[180px]"
                  style={{ aspectRatio: '9/17' }}
                >
                  <Image src={shot.src} alt={shot.caption} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs text-muted-foreground text-center font-medium max-w-[160px] leading-snug">
                  {shot.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Categories */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-6"
              >
                What You Can Find
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
              >
                16+ Health <span className="text-emerald-400 italic">Categories</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground leading-relaxed mb-10"
              >
                GetWell covers the full spectrum of healthcare, from primary care to specialized medical services — all discoverable through location-aware search.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 text-white font-bold rounded-2xl hover:bg-emerald-600 transition-all group shadow-lg shadow-emerald-500/20"
                >
                  Get Access
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3"
            >
              {product.categories.map((cat, i) => (
                <motion.div
                  key={cat}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-card/40 border border-border/50 hover:border-emerald-500/30 transition-colors"
                >
                  <Check size={14} className="text-emerald-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground/80">{cat}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative p-16 sm:p-24 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[3rem] text-white text-center overflow-hidden shadow-2xl shadow-emerald-500/25"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
                Ready to experience GetWell?
              </h2>
              <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
                Contact Delta Systematics to learn how GetWell can be deployed for your organization, government partner, or community.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-600 font-bold rounded-2xl hover:bg-white/90 transition-all group shadow-xl"
              >
                Contact Our Team
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
