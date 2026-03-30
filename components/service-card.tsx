'use client'

import { type LucideIcon } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  color: string
  textColor: string
  delay?: number
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  color,
  textColor,
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
          className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110",
            `bg-gradient-to-br ${color} bg-opacity-10`, // Fallback
            "bg-muted/50" // Base
          )}
          style={{ 
            backgroundColor: `rgba(var(--primary-rgb), 0.1)`, // I'll use a safer approach below
          }}
        >
          {/* Overwriting the style for dynamic light background */}
          <div className={cn(
            "w-full h-full rounded-lg flex items-center justify-center bg-white/80 dark:bg-black/20 backdrop-blur-sm border border-border/50",
            textColor
          )}>
            <Icon size={24} />
          </div>
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
