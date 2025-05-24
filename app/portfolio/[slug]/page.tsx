import Link from "next/link"
import Image from "next/image"
import { Building2, ArrowLeft, Calendar, User, Tag, ExternalLink, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { MobileMenu } from "@/components/mobile-menu"

// Sample project data - in a real application, this would come from a database or API
const projects = [
  {
    id: 1,
    title: "Skyline Towers",
    category: "Residential",
    client: "Urban Development Corp",
    date: "January 2023",
    location: "New York, USA",
    mainImage: "https://img.cadnav.com/allimg/160322/cadnav-160322221013.jpg?height=800&width=1200",
    description:
      "Skyline Towers is a luxury residential complex featuring three towers with panoramic city views. The project includes 120 premium apartments, rooftop gardens, a fitness center, and underground parking. Our 3D modeling team created detailed exterior and interior visualizations to help the client secure investors and pre-sell units before construction began.",
    challenge:
      "The main challenge was to accurately represent the complex architectural details of the three interconnected towers while showcasing the panoramic views from different apartments.",
    solution:
      "We utilized advanced 3D modeling techniques to create highly detailed exterior renderings and developed a custom solution to accurately represent the views from different floors and orientations.",
    gallery: [
      "https://img.cadnav.com/allimg/160322/cadnav-160322221013.jpg?height=600&width=800",
      "https://img.cadnav.com/allimg/160322/cadnav-160322221013-0.jpg?height=600&width=800",
      "https://img.cadnav.com/allimg/160322/cadnav-160322221013-1.jpg?height=600&width=800",
      "https://img.cadnav.com/allimg/160322/cadnav-160322221013-2.jpg?height=600&width=800",
    ],
    slug: "skyline-towers",
  },
  {
    id: 2,
    title: "Eco Business Center",
    category: "Commercial",
    client: "Green Builders Inc",
    date: "March 2023",
    location: "Portland, USA",
    mainImage: "https://preview.free3d.com/img/2010/03/1688650179013510941/vn09h7yi.jpg?height=800&width=1200",
    description:
      "The Eco Business Center is a sustainable commercial building with innovative energy-efficient design. The 15-story structure features solar panels, green roofs, rainwater harvesting systems, and natural ventilation. Our team created comprehensive 3D models to visualize both the exterior architecture and the sustainable systems integrated throughout the building.",
    challenge:
      "The client needed detailed visualizations of the building's sustainable features that would be invisible in traditional architectural renderings.",
    solution:
      "We developed cutaway and exploded view models to showcase the internal sustainable systems, along with detailed exterior renderings that highlighted the green features.",
    gallery: [
      "https://preview.free3d.com/img/2010/03/1688650179013510941/vn09h7yi.jpg?height=600&width=800",
      "https://preview.free3d.com/img/2010/03/1688650179013510941/vn09h7yi-1.jpg?height=600&width=800",
      "https://preview.free3d.com/img/2010/03/1688650179013510941/vn09h7yi-2.jpg?height=600&width=800",
      "https://preview.free3d.com/img/2010/03/1688650179013510941/vn09h7yi-3.jpg?height=600&width=800",
    ],
    slug: "eco-business-center",
  },
  {
    id: 5,
    title: "Riverside Residences",
    category: "Residential",
    client: "Luxury Homes Group",
    date: "June 2023",
    location: "Chicago, USA",
    mainImage: "https://img.cadnav.com/allimg/131011/1-13101112294b14.jpg?height=800&width=1200",
    description:
      "Riverside Residences is a waterfront residential development with premium amenities and scenic views. The project includes 80 luxury apartments, a private marina, infinity pool, and landscaped gardens. Our 3D modeling work focused on creating photorealistic renderings that showcased the relationship between the buildings and the waterfront setting.",
    challenge:
      "The client needed to convey the premium nature of the development while accurately representing the waterfront views and how they would be experienced from different units.",
    solution:
      "We created highly detailed exterior and interior visualizations with special attention to lighting conditions at different times of day to showcase how natural light interacts with the spaces.",
    gallery: [
      "https://img.cadnav.com/allimg/131011/1-13101112294b14.jpg?height=600&width=800",
      "https://img.cadnav.com/allimg/131011/1-13101112294b14-0.jpg?height=600&width=800",
      "https://img.cadnav.com/allimg/131011/1-13101112294b14-1.jpg?height=600&width=800",
      "https://img.cadnav.com/allimg/131011/1-13101112294b14-2.jpg?height=600&width=800",
    ],
    slug: "riverside-residences",
  },
]

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // Find the project that matches the slug
  const project = projects.find((p) => p.slug === params.slug)

  // If no project is found, you could redirect or show an error
  if (!project) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/portfolio">Back to Portfolio</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b bg-white">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary font-forum">RD Models</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className="text-base font-medium text-muted-foreground hover:text-primary font-barlow link-underline"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-base font-medium text-muted-foreground hover:text-primary font-barlow link-underline"
            >
              About Us
            </Link>
            <Link
              href="/portfolio"
              className="text-base font-medium text-primary hover:text-primary/80 font-barlow link-underline"
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className="text-base font-medium text-muted-foreground hover:text-primary font-barlow link-underline"
            >
              Blog
            </Link>
            <Link
              href="/#contact"
              className="text-base font-medium text-muted-foreground hover:text-primary font-barlow link-underline"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex font-barlow text-base">
              <Link href="/#contact">Get a Quote</Link>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="container py-12">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
          <SectionHeading title={project.title} subtitle={project.description.split(".")[0]} />
        </div>

        <div className="relative h-[500px] mb-12 rounded-xl overflow-hidden">
          <Image
            src={project.mainImage || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-forum">Project Overview</h3>
              <p className="text-muted-foreground font-barlow">{project.description}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 font-forum">Challenge</h3>
              <p className="text-muted-foreground font-barlow">{project.challenge}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 font-forum">Solution</h3>
              <p className="text-muted-foreground font-barlow">{project.solution}</p>
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg h-fit">
            <h3 className="text-xl font-bold mb-6 font-forum">Project Details</h3>
            <div className="space-y-4 font-barlow">
              <div className="flex items-start gap-4">
                <User className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Client</p>
                  <p className="text-muted-foreground">{project.client}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Calendar className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Date</p>
                  <p className="text-muted-foreground">{project.date}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">{project.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Tag className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Category</p>
                  <p className="text-muted-foreground">{project.category}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild className="w-full">
                <Link href="/#contact">
                  Request Similar Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 font-forum">Project Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((image, index) => (
              <div key={index} className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 font-forum">Interested in working with us?</h3>
          <p className="text-muted-foreground mb-8 font-barlow max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and discover how our 3D modeling services can bring
            your architectural vision to life.
          </p>
          <Button size="lg" asChild>
            <Link href="/#contact">Get in Touch</Link>
          </Button>
        </div>
      </main>

      <footer className="border-t bg-muted mt-12">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary font-forum">RD Models</span>
            </div>
            <p className="text-sm text-muted-foreground font-barlow">
              © {new Date().getFullYear()} RD Models. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
