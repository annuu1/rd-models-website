"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.9 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    } else if (!isInView && hasAnimated) {
      setHasAnimated(false)
    }
  }, [isInView, hasAnimated])

  return (
    <div ref={ref} className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl font-bold text-primary mb-4 font-forum relative inline-block">
        {title}
        <span
          className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-700 ease-out ${
            hasAnimated ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </h2>
      {subtitle && <p className="text-muted-foreground max-w-3xl mx-auto font-barlow">{subtitle}</p>}
    </div>
  )
}
