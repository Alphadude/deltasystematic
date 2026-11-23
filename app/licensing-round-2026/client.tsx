'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Droplets, 
  MapPin, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Layers, 
  FileCheck2, 
  Cpu, 
  Maximize2,
  Mail,
  Building2,
  User,
  Briefcase,
  Phone,
  HelpCircle,
  ChevronDown,
  Send,
  AlertCircle,
  Copy,
  Check,
  Compass,
  Scale
} from 'lucide-react'
import { siteConfig } from '@/lib/data'
import { cn } from '@/lib/utils'

const faqItems = [
  {
    question: 'What geodetic coordinate validation does DSL perform prior to bid submission?',
    answer: 'We perform multi-source geodetic datum harmonisation (e.g. Minna Datum vs. WGS84, UTM zones 31/32/33N) to guarantee that all block boundary vertices, polygon corners, and concession limits are mathematically reconciled and legally defensible before regulatory lodgement with NUPRC.'
  },
  {
    question: 'How does DSL protect confidential consortium data during the licensing round?',
    answer: 'All technical evaluations, block rankings, and proprietary bid models are partitioned under strict bilateral Non-Disclosure Agreements (NDAs). We maintain air-gapped data rooms and segregated project teams to prevent any cross-client conflict of interest.'
  },
  {
    question: 'Can DSL integrate environmental sensitivity and ESIA baseline data into our bid package?',
    answer: 'Yes. Beyond subsurface and cadastre, DSL brings 25+ years of environmental consulting experience. We overlay Environmental Sensitivity Index (ESI) mapping, flood depth analysis, and community settlement buffer zones directly onto your concession maps to fulfill mandatory PIA environmental safeguards.'
  },
  {
    question: 'What is the typical turnaround time for an initial Acreage Screening Dossier?',
    answer: 'For prioritized blocks in the licensing round, our rapid-response team delivers initial block intelligence dossiers (spatial extent, bathymetry, offset wells, seismic coverage, and surface constraints) within 5 to 7 business days.'
  },
  {
    question: 'How does DSL support technical prequalification documentation?',
    answer: 'We coordinate the end-to-end technical prequalification docket, compiling technical competence statements, spatial asset management methodology, personnel credentials, and ESG management plans aligned with NUPRC tender specifications.'
  }
]

const inquiryCategories = [
  'Acreage & Block Screening',
  'Geodetic Datum & Coordinate Validation',
  'Technical Bid Package & Regulatory Liaison',
  'Environmental Constraints & ESI Analysis',
  'Data Room Preparation & Subsurface GIS',
  'Commercial Due Diligence & Asset Evaluation',
  'General Technical Inquiry'
]

export function LicensingRoundClient() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    title: '',
    email: '',
    phone: '',
    category: inquiryCategories[0],
    question: '',
  })

  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  // Configurable destination email provided by the user
  const destinationEmail = siteConfig.contact.licensingEmail || 'licensing2026@deltasystematics.com'

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(destinationEmail)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 3000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const subject = `[Licensing Round 2026 Inquiry] ${formData.category} - ${formData.company || formData.name}`
    const body = `LICENSING ROUND 2026 INQUIRY DETAILS:
--------------------------------------------------
Contact Name: ${formData.name}
Company Represented: ${formData.company}
Title / Position: ${formData.title}
Official Email (Reply-To): ${formData.email}
Phone Number: ${formData.phone || 'Not provided'}
Inquiry Category: ${formData.category}

TECHNICAL QUESTION / STATEMENT OF NEED:
${formData.question}
--------------------------------------------------
Submitted via Delta Systematics Licensing Round 2026 Portal
Target Advisory Email: ${destinationEmail}`

    const mailtoUrl = `mailto:${destinationEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Open mail client
    window.location.href = mailtoUrl

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 800)
  }

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#040e0b] text-white border-b border-white/10">
        <div className="absolute inset-0 bg-radial-gradient from-[#09221c]/70 via-[#040e0b] to-[#020705] -z-10" />
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <Link 
            href="/environmental-petroleum-gis-asset-management" 
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white/60 hover:text-[#8dc440] transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Petroleum Asset Intelligence Dossier
          </Link>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md text-[#8dc440] text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Droplets size={14} className="text-amber-400" />
              <span>Petroleum Licensing Round 2026 // Strategic Advisory Desk</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight uppercase"
            >
              Licensing Round 2026: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8dc440] via-emerald-400 to-teal-300">
                Bid Readiness & Technical Q&A
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-2xl text-white/90 font-light max-w-3xl mb-6 tracking-tight leading-relaxed"
            >
              Mapping opportunities. Supporting licensing success. Creating long-term asset value.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm sm:text-base text-white/70 max-w-3xl leading-relaxed mb-8"
            >
              Delta Systematics Limited (DSL) provides upstream oil & gas operators, international bid consortia, and institutional investors with technically defensible spatial foundations, digital cadastre, boundary verification, and confidential bid advisory for the 2026 acreage licensing round.
            </motion.p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#inquiry-form"
                className="px-8 py-4 bg-[#8dc440] text-black font-extrabold text-xs uppercase tracking-widest rounded-full hover:bg-emerald-400 transition-all shadow-lg shadow-[#8dc440]/20 active:scale-95 flex items-center gap-2"
              >
                Submit Direct Inquiry
                <ArrowRight size={16} />
              </a>
              <a
                href="#licensing-info"
                className="px-8 py-4 bg-white/5 border border-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white/10 transition-all"
              >
                Round Information & Scope
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights & Key Numbers */}
      <section className="bg-black/90 text-white py-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-3xl font-black text-[#8dc440] font-mono">PIA 2021</div>
              <div className="text-xs uppercase tracking-wider text-white/60 mt-1 font-semibold">Regulatory Standard</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-3xl font-black text-[#8dc440] font-mono">2022 & 2025</div>
              <div className="text-xs uppercase tracking-wider text-white/60 mt-1 font-semibold">Proven Bid Track Record</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-3xl font-black text-[#8dc440] font-mono">100%</div>
              <div className="text-xs uppercase tracking-wider text-white/60 mt-1 font-semibold">Confidentiality & NDA</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-3xl font-black text-[#8dc440] font-mono">25+ Yrs</div>
              <div className="text-xs uppercase tracking-wider text-white/60 mt-1 font-semibold">Niger Delta Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Regarding the 2026 Licensing Round */}
      <section id="licensing-info" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20 border-b border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Strategic Context</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 mb-4">
              Licensing Round 2026 Advisory Framework
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              The 2026 Petroleum Licensing Round invites competitive bidding for high-value offshore and onshore acreage. Success requires rigorous technical due diligence, geodetic certainty, and environmental compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                num: '01',
                title: 'Acreage Screening & Basin Intelligence',
                desc: 'Digital cadastre evaluation of block coordinate limits, bathymetric profiles, historical seismic coverage, and nearby production infrastructure.',
                icon: Layers,
                deliverable: 'Prospect & block screening dossiers'
              },
              {
                num: '02',
                title: 'Datum & Coordinate Validation',
                desc: 'Eliminating concession boundary overlap and sliver polygons via geodetic transformation algorithms between Minna Datum and WGS84.',
                icon: Compass,
                deliverable: 'Legally defensible boundary maps'
              },
              {
                num: '03',
                title: 'Bid Package & Regulatory Liaison',
                desc: 'Compiling technical qualification dossiers, local content alignment, and compliance reporting under the NUPRC regulatory regime.',
                icon: FileCheck2,
                deliverable: 'Turnkey submission packages'
              },
              {
                num: '04',
                title: 'Environmental & Surface Constraints',
                desc: 'Integrating Environmental Sensitivity Index (ESI) mapping, Safe Shelter flood analysis, and marine ecosystem constraints.',
                icon: ShieldCheck,
                deliverable: 'ESG risk & mitigation briefs'
              }
            ].map((pillar) => {
              const IconComp = pillar.icon
              return (
                <div 
                  key={pillar.num}
                  className="p-8 rounded-3xl bg-card border border-border/60 hover:border-primary/40 transition-all shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                        PILLAR {pillar.num}
                      </span>
                      <IconComp size={22} className="text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 tracking-tight text-foreground">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{pillar.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-border/50 text-xs text-foreground/80 font-semibold flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-primary shrink-0" />
                    <span>{pillar.deliverable}</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Confidential Track Record Callout */}
          <div className="p-8 sm:p-10 rounded-3xl bg-black/90 text-white border border-white/10 shadow-2xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                  <Award size={16} />
                  <span>Demonstrated Licensing Mandate Experience</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Confidential Licensing Milestones
                </h3>
                <div className="space-y-2 text-sm text-white/80 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8dc440] mt-2 shrink-0" />
                    <span><strong>2022 Bid Round Success:</strong> Successfully supported client bid win in competitive licensing round (operator identity protected under NDA).</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8dc440] mt-2 shrink-0" />
                    <span><strong>2025 Pre-Qualification:</strong> Successfully guided client pre-qualification docket through technical evaluation.</span>
                  </div>
                </div>
                <p className="text-xs text-white/40 italic pt-1">*All published case descriptions are subject to DSL client confidentiality protocols.</p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 text-xs">
                  <span className="text-white/50 block mb-1">Direct Technical Desk</span>
                  <span className="font-mono text-sm text-[#8dc440]">{destinationEmail}</span>
                </div>
                <a 
                  href="#inquiry-form" 
                  className="w-full py-3.5 bg-[#8dc440] text-black font-extrabold text-xs uppercase tracking-widest rounded-xl text-center hover:bg-emerald-400 transition-colors"
                >
                  Ask a Question
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ & Options Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/40 border-b border-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
              <HelpCircle size={14} />
              <span>Common Questions & Technical Scope</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Licensing Round 2026 FAQs
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">
              Click any question below to review our technical approach, or submit your specific question in the form below.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx
              return (
                <div 
                  key={idx}
                  className="border border-border/60 rounded-2xl overflow-hidden bg-card transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg hover:text-primary transition-colors"
                  >
                    <span>{item.question}</span>
                    <ChevronDown 
                      size={20} 
                      className={cn("shrink-0 text-muted-foreground transition-transform duration-300", isOpen && "rotate-180 text-primary")} 
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 text-sm sm:text-base text-muted-foreground leading-relaxed border-t border-border/40 pt-4"
                      >
                        {item.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Form Section: Name, Company, Title, Question */}
      <section id="inquiry-form" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/10">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-14 rounded-[2.5rem] bg-card border border-border/60 shadow-2xl shadow-black/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            {/* Form Header */}
            <div className="mb-10 text-center sm:text-left">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">Confidential Inquiry Portal</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-2 mb-3">
                Submit Your Licensing Round 2026 Question
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Provide your details below. Your submission routes directly to our Upstream Advisory Desk so our team can provide a tailored technical response under full confidentiality.
              </p>

              {/* Recipient Notice Banner */}
              <div className="mt-4 p-4 rounded-2xl bg-primary/10 border border-primary/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5 text-foreground/90">
                  <Mail size={16} className="text-primary shrink-0" />
                  <span>
                    Inquiries are delivered directly to: <strong className="font-mono text-primary">{destinationEmail}</strong>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card border border-border/50 text-foreground/80 hover:text-primary transition-colors text-[11px] font-semibold self-start sm:self-auto shrink-0"
                >
                  {copiedEmail ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
                </button>
              </div>
            </div>

            {/* Submission Status Message */}
            {isSubmitted && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-4"
              >
                <CheckCircle2 size={24} className="text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-foreground text-base">Inquiry Prepared for Dispatch</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                    Your inquiry has been compiled and handed off to your email client to send to <strong className="text-foreground">{destinationEmail}</strong>. A DSL Upstream Technical Advisor will reply directly to your official email address.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                
                {/* 1. Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
                    <User size={14} className="text-primary" />
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Dr. Emmanuel Okon"
                    className="w-full px-4 py-3.5 rounded-xl bg-muted/40 border border-border/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground text-sm transition-all"
                  />
                </div>

                {/* 2. Company */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
                    <Building2 size={14} className="text-primary" />
                    Company You Represent <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="e.g. Apex Energy Resources Ltd."
                    className="w-full px-4 py-3.5 rounded-xl bg-muted/40 border border-border/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground text-sm transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* 3. Title */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
                    <Briefcase size={14} className="text-primary" />
                    Your Official Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g. Exploration Director / VP Subsurface"
                    className="w-full px-4 py-3.5 rounded-xl bg-muted/40 border border-border/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground text-sm transition-all"
                  />
                </div>

                {/* 4. Email (for reply) */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
                    <Mail size={14} className="text-primary" />
                    Official Email (For Direct Reply) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. e.okon@apexenergy.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-muted/40 border border-border/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground text-sm transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* 5. Phone */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
                    <Phone size={14} className="text-primary" />
                    Direct Phone / WhatsApp (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +234 803 000 0000"
                    className="w-full px-4 py-3.5 rounded-xl bg-muted/40 border border-border/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground text-sm transition-all"
                  />
                </div>

                {/* 6. Category Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
                    <Layers size={14} className="text-primary" />
                    Inquiry Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-muted/40 border border-border/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground text-sm transition-all"
                  >
                    {inquiryCategories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 7. Specific Question Textarea */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
                  <HelpCircle size={14} className="text-primary" />
                  Your Question / Scope of Technical Need <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="question"
                  required
                  rows={5}
                  value={formData.question}
                  onChange={handleInputChange}
                  placeholder="Please describe your specific inquiry regarding the 2026 licensing round (e.g. blocks of interest, datum verification requirements, bid prequalification timelines, or due diligence support)..."
                  className="w-full px-4 py-3.5 rounded-xl bg-muted/40 border border-border/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground text-sm transition-all leading-relaxed"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-5 bg-primary text-primary-foreground font-black text-xs uppercase tracking-widest rounded-full hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'Preparing Transmission...' : 'Transmit Licensing Inquiry'}</span>
                </button>

                <div className="text-[11px] text-muted-foreground text-center sm:text-right">
                  <p>Encrypted under bilateral NDA protocols</p>
                  <p>Replies sent directly to your official email</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Advisory Hotline Strip */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30 border-t border-border/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div>
            <h4 className="font-bold text-foreground">Need Urgent Data Room Support?</h4>
            <p className="text-muted-foreground text-xs mt-0.5">
              Contact our Upstream Technical Directors directly in Port Harcourt or Abuja.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold">
            <a href="tel:+2348037361230" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} className="text-primary" />
              <span>PH Office: 0803 736 1230 / 0805 524 6065</span>
            </a>
            <a href="tel:+2348060902464" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} className="text-primary" />
              <span>Abuja: 0806 090 2464 / 0706 919 6287</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
