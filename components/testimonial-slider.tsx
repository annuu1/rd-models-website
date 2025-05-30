'use client'
import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:
      "Welcome to our company! We're so excited to have you as part of our team. We're glad you're here, and we want to show you how much we appreciate you by giving you a special incentive. We want to show you how much we value your contributions, and we want to show you that we care about your success. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    author: "Ben Parket",
    position: "Product Manager",
  },
  {
    id: 2,
    quote:
      "The team at this company has been incredible to work with. Their dedication and expertise have made a huge difference in our projects. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    author: "Jenny Smith",
    position: "Project Lead",
  },
  {
    id: 3,
    quote:
      "I'm truly impressed by the professionalism and support I've received here. It's been a fantastic experience. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    author: "Robert Godwin",
    position: "Senior Developer",
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

  const getTestimonialIndex = (offset: number) => {
    return (currentIndex + offset + testimonials.length) % testimonials.length
  }

  return (
    <div className="relative max-w-5xl mx-auto py-8">
      <h2 className="text-white text-2xl font-bold mb-6">SUCCESSFUL CASES:</h2>
      <div className="relative flex items-center justify-center gap-4">
        {/* Left testimonial (faded, partially visible) */}
        <div className="w-80 h-96 transition-all duration-300 transform scale-90 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80 z-10"></div>
          <div className="w-full h-full bg-gradient-to-br from-purple-600/50 to-blue-900/50 rounded-lg p-6 flex flex-col justify-between">
            <p className="text-white text-sm italic line-clamp-6">{testimonials[getTestimonialIndex(-1)].quote}</p>
            <div className="text-center">
              <div className="flex justify-center items-center gap-3">
                <div>
                  <img
                    src="/images/testimonials/testimonial.png"
                    alt="Testimonial"
                    className="w-10 h-10 rounded-full mx-auto border-2 border-white/50 p-1 bg-white object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{testimonials[getTestimonialIndex(-1)].author}</p>
                  <p className="text-gray-400 text-xs">{testimonials[getTestimonialIndex(-1)].position}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center testimonial (main focus) */}
        <div className="w-96 h-96 z-10 transition-all duration-300 transform scale-100">
          <div className="w-full h-full bg-gradient-to-br from-purple-600/70 to-blue-900/70 rounded-lg p-6 flex flex-col justify-between">
            <p className="text-white text-base italic line-clamp-6">{testimonials[currentIndex].quote}</p>
            <div className="text-center">
              <div className="flex justify-center items-center gap-3">
                <div>
                  <img
                    src="/images/testimonials/testimonial.png"
                    alt="Testimonial"
                    className="w-12 h-12 rounded-full mx-auto border-2 border-white p-1 bg-white object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonials[currentIndex].author}</p>
                  <p className="text-gray-400">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right testimonial (faded, partially visible) */}
        <div className="w-80 h-96 transition-all duration-300 transform scale-90 relative">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/80 z-10"></div>
          <div className="w-full h-full bg-gradient-to-br from-purple-600/50 to-blue-900/50 rounded-lg p-6 flex flex-col justify-between">
            <p className="text-white text-sm italic line-clamp-6">{testimonials[getTestimonialIndex(1)].quote}</p>
            <div className="text-center">
              <div className="flex justify-center items-center gap-3">
                <div>
                  <img
                    src="/images/testimonials/testimonial.png"
                    alt="Testimonial"
                    className="w-10 h-10 rounded-full mx-auto border-2 border-white/50 p-1 bg-white object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{testimonials[getTestimonialIndex(1)].author}</p>
                  <p className="text-gray-400 text-xs">{testimonials[getTestimonialIndex(1)].position}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2"
      >
        <ChevronLeft className="h-8 w-8" />
        <span className="sr-only">Previous testimonial</span>
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2"
      >
        <ChevronRight className="h-8 w-8" />
        <span className="sr-only">Next testimonial</span>
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-pink-500" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Go to testimonial {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}