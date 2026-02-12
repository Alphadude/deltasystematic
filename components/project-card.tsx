'use client'

import { MapPin } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  title: string
  location: string
  category: string
  delay?: number
}

export function ProjectCard({
  title,
  location,
  category,
  delay = 0,
}: ProjectCardProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={cn(
        'group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border p-8 hover:border-primary/30 transition-all duration-300',
        isVisible ? 'animate-fadeInUp' : 'opacity-0'
      )}
      style={{
        animationDelay: isVisible ? `${delay}ms` : '0ms',
      }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/5 to-secondary/5 transition-opacity duration-300"></div>
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full mb-2 group-hover:bg-secondary/20 transition-colors">
              {category}
            </span>
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>
        </div>
        <p className="text-muted-foreground flex items-center gap-2">
          <MapPin size={16} className="text-accent flex-shrink-0" />
          {location}
        </p>
      </div>
    </div>
  )
}
