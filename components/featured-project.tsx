"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const featuredProjects = [
  {
    id: 1,
    title: "Skyline Towers",
    client: "Urban Development Corp",
    description: "A luxury residential complex featuring three towers with panoramic city views",
    image: "https://img.cadnav.com/allimg/160322/cadnav-160322221013.jpg?height=800&width=1200",
    slug: "skyline-towers",
  },
  {
    id: 2,
    title: "Eco Business Center",
    client: "Green Builders Inc",
    description: "Sustainable commercial building with innovative energy-efficient design",
    image: "https://preview.free3d.com/img/2010/03/1688650179013510941/vn09h7yi.jpg?height=800&width=1200",
    slug: "eco-business-center",
  },
  {
    id: 3,
    title: "Riverside Residences",
    client: "Luxury Homes Group",
    description: "Waterfront residential development with premium amenities and scenic views",
    image: "https://img.cadnav.com/allimg/131011/1-13101112294b14.jpg?height=800&width=1200",
    slug: "riverside-residences",
  },
]

export function FeaturedProject() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const project = featuredProjects[currentIndex]

  const nextProject = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length)
  }

  const prevProject = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
  }

  // Auto-advance every 5 seconds
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     nextProject()
  //   }, 5000)
  //   return () => clearInterval(timer)
  // }, [])

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
  }

  return (
    <div className="relative h-[600px] overflow-hidden rounded-xl">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={project.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          <div className="relative h-full w-full">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/50 backdrop-blur-sm p-8 max-w-md text-center text-white rounded-lg transform transition-all duration-300 hover:scale-105 group">
                <h3 className="text-2xl font-bold mb-2 font-forum">{project.title}</h3>
                <p className="text-lg mb-4 font-barlow">{project.client}</p>
                <p className="mb-6 text-white/80 font-barlow">{project.description}</p>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-center gap-4">
                    <Button
                      asChild
                      variant="outline"
                      className="text-white bg-transparent border-white hover:bg-white/20 hover:text-white"
                    >
                      <Link href={`/portfolio/${project.slug}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="text-white bg-transparent border-white hover:bg-white/20 hover:text-white"
                    >
                      <Link href={`/portfolio/${project.slug}`}>
                        View Gallery
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <button
        onClick={prevProject}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-10"
        aria-label="Previous project"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={nextProject}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-10"
        aria-label="Next project"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {featuredProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
