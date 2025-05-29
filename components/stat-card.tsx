"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedButton } from "./animated-button"
import Link from "next/link"

interface StatCardProps {
  number: string
  label: string
  description: string
  link?: string
}

export function StatCard({ number, label, description, link }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  // Parse the target number (remove any non-numeric characters except for decimal points)
  const targetNumber = Number.parseInt(number.replace(/[^0-9]/g, ""))

  useEffect(() => {
    if (!isInView) return

    // Reset count when coming into view
    setCount(0)

    // Calculate animation duration based on number size
    const duration = 2000 // 2 seconds
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameDuration)
    const increment = targetNumber / totalFrames

    let currentFrame = 0
    const counter = setInterval(() => {
      currentFrame++
      setCount(Math.min(Math.floor(increment * currentFrame), targetNumber))

      if (currentFrame === totalFrames) {
        clearInterval(counter)
      }
    }, frameDuration)

    return () => clearInterval(counter)
  }, [isInView, targetNumber])

  // Format the count with the same suffix as the original number
  const suffix = number.match(/[^0-9]+$/)?.[0] || ""
  const formattedCount = `${count}${suffix}`

  return (
    <div className="group">
      <Card ref={ref} className="relative transition-all duration-300 group-hover:shadow-lg hover:bg-primary">
        <CardContent className="p-6 text-center">
          <p className="text-4xl font-bold text-primary mb-2 font-forum group-hover:text-white transition-colors duration-300">{formattedCount}</p>
          <p className="font-bold text-lg text-muted-foreground font-barlow group-hover:text-white transition-colors duration-300">{label}</p>
          <p className="text-sm text-muted-foreground mt-2 font-barlow group-hover:text-white transition-colors duration-300 line-clamp-2">{description}</p>
          {link && (
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <AnimatedButton variant="outline" size="sm" className="bg-primary text-white">
                <Link href={link}>Read More</Link>
              </AnimatedButton>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}