import Link from "next/link"
import Image from "next/image"
import { Building2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { MobileMenu } from "@/components/mobile-menu"

// Sample portfolio projects data
const projects = [
  {
    id: 1,
    title: "Skyline Towers",
    category: "residential",
    client: "Urban Development Corp",
    image: "https://img.cadnav.com/allimg/160322/cadnav-160322221013.jpg?height=400&width=600",
    description: "A luxury residential complex featuring three towers with panoramic city views",
    slug: "skyline-towers",
  },
  {
    id: 2,
    title: "Eco Business Center",
    category: "commercial",
    client: "Green Builders Inc",
    image: "https://preview.free3d.com/img/2010/03/1688650179013510941/vn09h7yi.jpg?height=400&width=600",
    description: "Sustainable commercial building with innovative energy-efficient design",
    slug: "eco-business-center",
  },
  {
    id: 3,
    title: "University Campus",
    category: "institutional",
    client: "State Education Board",
    image:
      "https://media.cgtrader.com/variants/ht1X7QuTDn7p9WmgxwFFwxUq/a26e47dab5f2d22c43d6c5ce4b4b46ecc30c70918878397cba1a10c1e35d7bfc/Untitled_Viewport_001.jpg?height=400&width=600",
    description: "A comprehensive university campus with academic buildings, dormitories, and recreational facilities",
    slug: "university-campus",
  },
  {
    id: 4,
    title: "Luxury Penthouse Interior",
    category: "interior",
    client: "Elite Properties",
    image: "https://www.all3dfree.net/uploads/5/1/9/6/51967249/5695580_orig.jpg?height=400&width=600",
    description: "Detailed interior visualization of a luxury penthouse with custom furnishings",
    slug: "luxury-penthouse",
  },
  {
    id: 5,
    title: "Riverside Residences",
    category: "residential",
    client: "Luxury Homes Group",
    image: "https://img.cadnav.com/allimg/131011/1-13101112294b14.jpg?height=400&width=600",
    description: "Waterfront residential development with premium amenities and scenic views",
    slug: "riverside-residences",
  },
  {
    id: 6,
    title: "Shopping Mall",
    category: "commercial",
    client: "Retail Developers Inc",
    image:
      "https://p.turbosquid.com/ts-thumb/4C/i9YvRz/FM/_cover/jpg/1674469562/600x600/fit_q87/ee66153063b5f65da3ca8df1ab442a52914075aa/_cover.jpg?height=400&width=600",
    description: "A multi-level shopping mall with over 100 retail spaces and entertainment venues",
    slug: "shopping-mall",
  },
  {
    id: 7,
    title: "Modern Office Complex",
    category: "commercial",
    client: "Corporate Spaces Ltd",
    image: "https://img.cadnav.com/allimg/140807/cadnav-140FG14035.jpg?height=400&width=600",
    description: "Contemporary office complex with flexible workspaces and collaborative areas",
    slug: "modern-office-complex",
  },
  {
    id: 8,
    title: "Beachfront Hotel",
    category: "hospitality",
    client: "Coastal Resorts",
    image: "https://img.cadnav.com/allimg/140807/cadnav-140FG14035-0.jpg?height=400&width=600",
    description: "Luxury beachfront hotel with stunning ocean views and premium amenities",
    slug: "beachfront-hotel",
  },
  {
    id: 9,
    title: "Urban Park",
    category: "landscape",
    client: "City Development Authority",
    image: "https://img.cadnav.com/allimg/140807/cadnav-140FG14035-1.jpg?height=400&width=600",
    description: "Public urban park with recreational facilities, walking paths, and landscaped areas",
    slug: "urban-park",
  },
]

export default function PortfolioPage() {
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
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <SectionHeading
            title="Our Portfolio"
            subtitle="Explore our collection of meticulously crafted 3D building models, showcasing our expertise in architectural visualization."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={`/portfolio/${project.slug}`} className="group">
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                <div className="relative h-64">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-sm font-medium">{project.client}</p>
                    <p className="text-xs uppercase tracking-wider">{project.category}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-forum group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-barlow line-clamp-2">{project.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
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
