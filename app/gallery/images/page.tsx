import Link from "next/link"
import Image from "next/image"
import { Building2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { MobileMenu } from "@/components/mobile-menu"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Image Gallery - RD Models 3D Architectural Visualization",
  description:
    "Browse our extensive image gallery featuring high-quality 3D architectural renderings, building models, and interior visualizations from our Jaipur studio.",
  keywords: [
    "3D architectural images",
    "building renderings",
    "architectural visualization gallery",
    "3D model images Jaipur",
    "construction visualization images",
  ],
}

// Sample image data
const images = [
  {
    id: 1,
    title: "Modern Residential Villa",
    description: "Contemporary villa design with clean lines and modern amenities",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?height=800&width=1200",
  },
  {
    id: 2,
    title: "Corporate Office Building",
    description: "Multi-story corporate office with glass facade and modern architecture",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?height=800&width=1200",
  },
  {
    id: 3,
    title: "Luxury Hotel Interior",
    description: "Elegant hotel lobby with premium finishes and sophisticated lighting",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?height=800&width=1200",
  },
  {
    id: 4,
    title: "Shopping Mall Exterior",
    description: "Modern shopping complex with contemporary design and landscaping",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?height=800&width=1200",
  },
  {
    id: 5,
    title: "Educational Campus",
    description: "University campus with academic buildings and green spaces",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?height=800&width=1200",
  },
  {
    id: 6,
    title: "Healthcare Facility",
    description: "Modern hospital building with patient-friendly design",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?height=800&width=1200",
  },
  {
    id: 7,
    title: "Industrial Complex",
    description: "Manufacturing facility with efficient layout and modern infrastructure",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?height=800&width=1200",
  },
  {
    id: 8,
    title: "Residential Apartment",
    description: "High-rise residential building with balconies and modern amenities",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?height=800&width=1200",
  },
  {
    id: 9,
    title: "Restaurant Interior",
    description: "Contemporary restaurant design with open kitchen and dining areas",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?height=800&width=1200",
  },
  {
    id: 10,
    title: "Luxury Resort",
    description: "Beachfront resort with infinity pools and tropical landscaping",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?height=800&width=1200",
  },
  {
    id: 11,
    title: "Urban Mixed-Use Development",
    description: "Mixed-use complex combining residential, commercial, and retail spaces",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?height=800&width=1200",
  },
  {
    id: 12,
    title: "Cultural Center",
    description: "Contemporary cultural center with exhibition halls and performance spaces",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?height=800&width=1200",
  },
]

export default function ImageGalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b bg-white">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary font-forum">RD Models</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-base font-medium text-muted-foreground hover:text-primary font-barlow">
              Home
            </Link>
            <Link href="/about" className="text-base font-medium text-muted-foreground hover:text-primary font-barlow">
              About Us
            </Link>
            <Link
              href="/portfolio"
              className="text-base font-medium text-muted-foreground hover:text-primary font-barlow"
            >
              Portfolio
            </Link>
            <Link
              href="/gallery/videos"
              className="text-base font-medium text-muted-foreground hover:text-primary font-barlow"
            >
              Videos
            </Link>
            <Link
              href="/gallery/images"
              className="text-base font-medium text-primary hover:text-primary/80 font-barlow"
            >
              Images
            </Link>
            <Link
              href="/publications"
              className="text-base font-medium text-muted-foreground hover:text-primary font-barlow"
            >
              Publications
            </Link>
            <Link href="/blog" className="text-base font-medium text-muted-foreground hover:text-primary font-barlow">
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium text-muted-foreground hover:text-primary font-barlow"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex font-barlow text-base">
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="container py-12">
        <div className="mb-12">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <SectionHeading
            title="Image Gallery"
            subtitle="Browse our extensive collection of high-quality 3D architectural renderings, building models, and interior visualizations showcasing our expertise."
          />
        </div>

        {/* Premium Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 ${
                index % 7 === 0 || index % 7 === 3
                  ? "md:col-span-2 md:row-span-2"
                  : index % 7 === 1 || index % 7 === 4
                    ? "md:row-span-2"
                    : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  index % 7 === 0 || index % 7 === 3
                    ? "aspect-[4/3]"
                    : index % 7 === 1 || index % 7 === 4
                      ? "aspect-[3/4]"
                      : "aspect-square"
                }`}
              >
                <Image
                  src={image.image || "/placeholder.svg"}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold mb-2 font-forum">{image.title}</h3>
                    <p className="text-sm font-barlow opacity-90 line-clamp-2">{image.description}</p>
                  </div>
                </div>

                {/* Subtle border on hover */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-500 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="px-8 py-3">
            Load More Images
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
    </div>
  )
}
