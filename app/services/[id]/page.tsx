'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/Footer'
import { detailedServices } from '@/lib/data'
import { CheckCircle, ArrowLeft, ArrowRight, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ServicePage() {
  const { id } = useParams()
  const router = useRouter()
  const [service, setService] = useState<any>(null)

  useEffect(() => {
    const foundService = detailedServices.find((s) => s.id === id)
    if (!foundService) {
      router.push('/services')
      return
    }
    setService(foundService)
  }, [id, router])

  if (!service) return null

  const Icon = service.icon

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar isHomepage={false} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-muted/20">
        <div className="absolute inset-0">
          <div className={`absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-[120px]`} />
          <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto z-10">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors mb-12 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-2xl mb-8`}>
                <Icon size={40} />
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-8">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-border/50 shadow-2xl bg-card"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`} />
              <div className="absolute inset-0 flex items-center justify-center">
                 <Icon size={120} className="text-foreground/10" />
              </div>
              <div className="absolute inset-x-8 bottom-8 p-8 bg-background/60 backdrop-blur-xl border border-white/10 rounded-3xl">
                 <p className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Service Excellence</p>
                 <p className="text-lg font-medium text-foreground/90">Pioneering sustainable solutions since 1986.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features & Details */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-8 tracking-tight">Key Features & Capabilities</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {service.features.map((feature: string, index: number) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-6 bg-card/40 rounded-2xl border border-border/50 hover:border-primary/20 transition-all group"
                    >
                      <CheckCircle size={24} className="text-secondary shrink-0 mt-1" />
                      <span className="text-lg text-foreground/80 font-medium group-hover:text-foreground transition-colors">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="p-10 bg-muted/30 rounded-[2rem] border border-border/50">
                 <h3 className="text-2xl font-bold mb-6 tracking-tight flex items-center gap-3">
                   <MessageSquare className="text-primary" />
                   Why Choose Delta Systematics?
                 </h3>
                 <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                   With over 25 years of experience in the Niger Delta and across Nigeria, our multi-disciplined team of scientists and engineers provides unparalleled expertise in {service.title.toLowerCase()}. We combine cutting-edge technology with deep local knowledge to deliver results that exceed expectations.
                 </p>
                 <Link href="/contact" className="text-primary font-bold inline-flex items-center gap-2 hover:underline">
                    Talk to our specialists
                    <ArrowRight size={18} />
                 </Link>
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-8 bg-primary rounded-[2.5rem] text-primary-foreground shadow-2xl shadow-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-2xl font-bold mb-6 tracking-tight relative z-10">Get a Quote</h3>
                <p className="opacity-90 mb-8 leading-relaxed relative z-10">
                  Ready to start your project? Contact us for a detailed proposal tailored to your specific needs.
                </p>
                <Link
                  href="/contact"
                  className="w-full py-4 bg-white text-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/90 transition-all shadow-xl group"
                >
                  Contact Us Now
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="p-8 border border-border/50 rounded-[2.5rem] bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6 tracking-tight">Other Services</h3>
                <div className="space-y-3">
                   {detailedServices
                     .filter(s => s.id !== id)
                     .slice(0, 5)
                     .map(s => (
                       <Link 
                         key={s.id} 
                         href={`/services/${s.id}`}
                         className="flex items-center justify-between p-4 hover:bg-muted rounded-xl transition-all group"
                       >
                         <span className="font-medium text-muted-foreground group-hover:text-primary transition-colors">{s.title}</span>
                         <ArrowRight size={16} className="text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                       </Link>
                     ))
                   }
                </div>
                <Link href="/services" className="block text-center mt-6 text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
                   View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
