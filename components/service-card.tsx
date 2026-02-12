'use client'

import { type LucideIcon } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  color: string
  delay?: number
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  color,
  delay = 0,
}: ServiceCardProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={cn(
        'group bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2',
        isVisible ? 'animate-fadeInUp' : 'opacity-0'
      )}
      style={{
        animationDelay: isVisible ? `${delay}ms` : '0ms',
      }}
    >
      <div className="mb-4">
        <div
          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
        >
          <Icon size={24} />
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
