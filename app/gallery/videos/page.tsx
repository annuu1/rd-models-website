import Link from "next/link"
import { Building2, ArrowLeft, Play, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { MobileMenu } from "@/components/mobile-menu"
import type { Metadata } from "next"
import { AnimatedHeader } from "@/components/animated-header"

export const metadata: Metadata = {
  title: "Video Gallery - RD Models 3D Architectural Visualization",
  description:
    "Explore our video gallery showcasing 3D architectural models, walkthroughs, and project presentations from our Jaipur studio serving clients across India.",
  keywords: [
    "3D model videos",
    "architectural walkthrough",
    "building visualization videos",
    "3D animation Jaipur",
    "architectural presentation videos",
  ],
}

// Sample video data
const videos = [
  {
    id: 1,
    title: "Luxury Residential Complex Walkthrough",
    description: "Complete 3D walkthrough of a luxury residential project featuring modern amenities and landscaping.",
    thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?height=800&width=1200",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "3:45",
  },
  {
    id: 2,
    title: "Commercial Office Building 360° Tour",
    description: "Interactive 360-degree tour of a modern commercial office building with detailed interior spaces.",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?height=800&width=1200",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "5:20",
  },
  {
    id: 3,
    title: "Hospital Complex Architectural Visualization",
    description:
      "Comprehensive visualization of a multi-specialty hospital complex with detailed floor plans and facilities.",
    thumbnail: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?height=800&width=1200",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "4:15",
  },
  {
    id: 4,
    title: "Shopping Mall Interior Design Showcase",
    description:
      "Detailed showcase of shopping mall interior design with retail spaces, food courts, and entertainment areas.",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?height=800&width=1200",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "6:30",
  },
  {
    id: 5,
    title: "Educational Campus Master Plan",
    description:
      "Complete master plan visualization of an educational campus with academic buildings, hostels, and recreational facilities.",
    thumbnail: "https://images.unsplash.com/photo-1562774053-701939374585?height=800&width=1200",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "7:45",
  },
  {
    id: 6,
    title: "Industrial Factory Layout Animation",
    description: "Animated presentation of industrial factory layout with production lines and workflow optimization.",
    thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?height=800&width=1200",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "4:55",
  },
  {
    id: 7,
    title: "Luxury Resort Development",
    description: "Stunning visualization of a beachfront resort with infinity pools and tropical landscaping.",
    thumbnail: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?height=800&width=1200",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "5:30",
  },
  {
    id: 8,
    title: "Urban Mixed-Use Development",
    description:
      "Comprehensive walkthrough of a mixed-use development combining residential, commercial, and retail spaces.",
    thumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?height=800&width=1200",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "8:15",
  },
]

import FloatingContactButtons from "../../FloatingContactButtons";

export default function VideoGalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedHeader />

      <main className="py-12 md:px-4">
        <div className="mb-12">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <SectionHeading
            title="Video Gallery"
            subtitle="Explore our collection of 3D architectural visualizations, walkthroughs, and project presentations showcasing our expertise in building modeling."
          />
        </div>

        {/* Premium Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-[24rem]"
            >
              <div className="relative h-full w-full overflow-hidden  bg-gray-200" style={{ backgroundImage: `url(/placeholder.svg)` }}>
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="object-fill w-full h-full group-hover:scale-105 transition-transform duration-800 ease-out "
                />
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm  flex items-center justify-center group-hover:bg-primary/80 transition-all duration-300 group-hover:scale-110">
                    <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1  text-sm font-barlow flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {video.duration}
                </div>
                {/* Subtle border on hover */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-500 " />
              </div>
              {/* Overlay and info on hover */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-full h-48 z-20 opacity-0 pointer-events-none transform -translate-y-full group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-30"></div>
                  <div className="relative w-full h-full flex flex-col items-center justify-end pb-4">
                    <h3 className="text-lg font-bold font-forum drop-shadow text-white text-center">{video.title}</h3>
                    <p className="text-xs text-white font-barlow mt-1 text-center px-2">{video.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="px-8 py-3">
            Load More Videos
          </Button>
        </div>
      </main>

      <footer className="border-t bg-muted mt-16">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary font-forum">RD Models</span>
            </div>
            <p className="text-sm text-muted-foreground font-barlow">
              © {new Date().getFullYear()} RD Models, Jaipur, Rajasthan, India. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <FloatingContactButtons />
    </div>
  )
}
