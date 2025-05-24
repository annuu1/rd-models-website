"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:
      "RD Models delivered exceptional 3D models for our residential project. Their attention to detail and quick turnaround time exceeded our expectations.",
    author: "John Smith",
    position: "Principal Architect, Smith & Associates",
  },
  {
    id: 2,
    quote:
      "Working with RD Models has been a game-changer for our development company. Their 3D visualizations have helped us secure investors and pre-sell units before construction even begins.",
    author: "Sarah Johnson",
    position: "CEO, Johnson Development Group",
  },
  {
    id: 3,
    quote:
      "The team at RD Models understands architectural design at a deep level. They don't just create models; they enhance our vision with their technical expertise and creative insights.",
    author: "Michael Chen",
    position: "Design Director, Chen Architecture",
  },
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="border-none shadow-lg">
        <CardContent className="p-8 md:p-12">
          <Quote className="h-12 w-12 text-primary/20 mb-6" />
          <div className="space-y-6">
            <p className="text-lg md:text-xl italic font-barlow">{testimonials[currentIndex].quote}</p>
            <div>
              <p className="font-bold font-forum">{testimonials[currentIndex].author}</p>
              <p className="text-muted-foreground font-barlow">{testimonials[currentIndex].position}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-center mt-6 gap-4">
        <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}
