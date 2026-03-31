'use client'

import React, { useRef, useEffect, useState, ReactNode } from 'react'
import { FloatingBubble } from './FloatingBubble'

interface BubbleData {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  content: ReactNode
}

interface BubblesPhysicsFieldProps {
  bubbles: {
    id: number
    content: ReactNode
    size: number
    initialX: number // percentage
    initialY: number // percentage
  }[]
}

export function BubblesPhysicsField({ bubbles: initialBubbles }: BubblesPhysicsFieldProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [bubbles, setBubbles] = useState<BubbleData[]>([])
  
  // Initialize bubbles with physical properties
  useEffect(() => {
    if (!containerRef.current) return

    const { width, height } = containerRef.current.getBoundingClientRect()
    
    const initialized = initialBubbles.map((b) => ({
      id: b.id,
      x: (b.initialX / 100) * width,
      y: (b.initialY / 100) * height,
      vx: (Math.random() - 0.5) * 1.5, // Random slow velocity
      vy: (Math.random() - 0.5) * 1.5,
      radius: b.size / 2,
      content: b.content
    }))
    
    setBubbles(initialized)
  }, [initialBubbles])

  // Physics animation loop
  useEffect(() => {
    let animationFrameId: number
    
    const update = () => {
      if (!containerRef.current) return

      const { width, height } = containerRef.current.getBoundingClientRect()

      setBubbles((prevBubbles) => {
        const nextBubbles = prevBubbles.map(b => ({ ...b }))

        // 1. Move and check boundaries
        for (const b of nextBubbles) {
          b.x += b.vx
          b.y += b.vy

          // Bounce off walls
          if (b.x < b.radius) {
            b.x = b.radius
            b.vx *= -1
          } else if (b.x > width - b.radius) {
            b.x = width - b.radius
            b.vx *= -1
          }

          if (b.y < b.radius) {
            b.y = b.radius
            b.vy *= -1
          } else if (b.y > height - b.radius) {
            b.y = height - b.radius
            b.vy *= -1
          }
        }

        // 2. Resolve collisions between bubbles (Sphere-Sphere Collision)
        for (let i = 0; i < nextBubbles.length; i++) {
          for (let j = i + 1; j < nextBubbles.length; j++) {
            const b1 = nextBubbles[i]
            const b2 = nextBubbles[j]

            const dx = b2.x - b1.x
            const dy = b2.y - b1.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            const minDistance = b1.radius + b2.radius

            if (distance < minDistance) {
              // Collision detected!
              
              // 1. Resolve overlap (prevent sticking)
              const overlap = minDistance - distance
              const nx = dx / distance // normal vector x
              const ny = dy / distance // normal vector y
              
              b1.x -= nx * (overlap / 2)
              b1.y -= ny * (overlap / 2)
              b2.x += nx * (overlap / 2)
              b2.y += ny * (overlap / 2)

              // 2. Simple Elastic Collision Response
              // Calculate relative velocity along the normal
              const rvx = b2.vx - b1.vx
              const rvy = b2.vy - b1.vy
              const velAlongNormal = rvx * nx + rvy * ny

              // Only resolve if velocities are towards each other
              if (velAlongNormal < 0) {
                // For simplicity, treating mass as equal and restitution as 1
                const impulseScalar = -2 * velAlongNormal / 2 
                const ix = impulseScalar * nx
                const iy = impulseScalar * ny

                b1.vx -= ix
                b1.vy -= iy
                b2.vx += ix
                b2.vy += iy
              }
            }
          }
        }

        return nextBubbles
      })

      animationFrameId = requestAnimationFrame(update)
    }

    animationFrameId = requestAnimationFrame(update)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute pointer-events-auto"
          style={{
            transform: `translate(${bubble.x - bubble.radius}px, ${bubble.y - bubble.radius}px)`,
            width: bubble.radius * 2,
            height: bubble.radius * 2,
          }}
        >
          {/* We wrap current FloatingBubble but remove its internal anim for this physics mode */}
          <FloatingBubble 
            size={bubble.radius * 2} 
            x="0" 
            y="0" 
            disableInternalAnim={true} // New prop needed
          >
            {bubble.content}
          </FloatingBubble>
        </div>
      ))}
    </div>
  )
}
