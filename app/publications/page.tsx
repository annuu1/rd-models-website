import Link from "next/link"
import Image from "next/image"
import { Building2, ArrowLeft, Calendar, User, FileText, ExternalLink, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MobileMenu } from "@/components/mobile-menu"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Publications - RD Models Research & Industry Insights",
  description:
    "Explore our publications, research papers, and industry insights on 3D architectural modeling, visualization techniques, and construction technology from our Jaipur-based team.",
  keywords: [
    "architectural research",
    "3D modeling publications",
    "construction technology papers",
    "visualization research",
    "architectural industry insights",
  ],
}

// Sample publications data
const publications = [
  {
    id: 1,
    title: "Advanced 3D Modeling Techniques for Sustainable Architecture",
    description:
      "A comprehensive study on integrating sustainable design principles with advanced 3D modeling workflows for energy-efficient buildings.",
    authors: ["Dr. Rohitash Daiya", "Ar. Deeksha Vyas"],
    journal: "International Journal of Architectural Technology",
    date: "December 2024",
    type: "Research Paper",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?height=400&width=600",
    downloadUrl: "#",
    externalUrl: "#",
    tags: ["Sustainability", "3D Modeling", "Green Architecture"],
  },
  {
    id: 2,
    title: "Digital Twin Technology in Construction: A Case Study from Rajasthan",
    description:
      "Exploring the implementation of digital twin technology in construction projects across Rajasthan, with focus on heritage building preservation.",
    authors: ["Er. Pushpkant Yadav", "CA. Avinash Daiya"],
    journal: "Construction Technology Review",
    date: "November 2024",
    type: "Case Study",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?height=400&width=600",
    downloadUrl: "#",
    externalUrl: "#",
    tags: ["Digital Twin", "Construction", "Heritage"],
  },
  {
    id: 3,
    title: "Virtual Reality in Architectural Visualization: Enhancing Client Experience",
    description:
      "An analysis of VR implementation in architectural presentations and its impact on client decision-making processes in the Indian market.",
    authors: ["Ar. Deeksha Vyas", "Dr. Rohitash Daiya"],
    journal: "Architectural Innovation Quarterly",
    date: "October 2024",
    type: "Research Paper",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?height=400&width=600",
    downloadUrl: "#",
    externalUrl: "#",
    tags: ["Virtual Reality", "Client Experience", "Visualization"],
  },
  {
    id: 4,
    title: "AI-Powered Design Optimization in 3D Architectural Modeling",
    description:
      "Investigating the role of artificial intelligence in optimizing design workflows and improving accuracy in 3D architectural modeling.",
    authors: ["Er. Pushpkant Yadav"],
    journal: "AI in Architecture Journal",
    date: "September 2024",
    type: "Technical Paper",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?height=400&width=600",
    downloadUrl: "#",
    externalUrl: "#",
    tags: ["Artificial Intelligence", "Design Optimization", "Automation"],
  },
  {
    id: 5,
    title: "Traditional Rajasthani Architecture in Modern 3D Visualization",
    description:
      "Preserving and presenting traditional Rajasthani architectural elements through contemporary 3D modeling and visualization techniques.",
    authors: ["Dr. Rohitash Daiya", "Ar. Deeksha Vyas", "Heritage Team"],
    journal: "Cultural Architecture Preservation",
    date: "August 2024",
    type: "Cultural Study",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?height=400&width=600",
    downloadUrl: "#",
    externalUrl: "#",
    tags: ["Traditional Architecture", "Cultural Preservation", "Rajasthan"],
  },
  {
    id: 6,
    title: "BIM Integration in Indian Construction Industry: Challenges and Opportunities",
    description:
      "A comprehensive analysis of Building Information Modeling adoption in India's construction sector, with recommendations for implementation.",
    authors: ["CA. Avinash Daiya", "Er. Pushpkant Yadav"],
    journal: "Indian Construction Review",
    date: "July 2024",
    type: "Industry Report",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?height=400&width=600",
    downloadUrl: "#",
    externalUrl: "#",
    tags: ["BIM", "Construction Industry", "Technology Adoption"],
  },
]

const publicationTypes = ["All", "Research Paper", "Case Study", "Technical Paper", "Cultural Study", "Industry Report"]

export default function PublicationsPage() {
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
              className="text-base font-medium text-muted-foreground hover:text-primary font-barlow"
            >
              Images
            </Link>
            <Link href="/publications" className="text-base font-medium text-primary hover:text-primary/80 font-barlow">
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
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <SectionHeading
            title="Publications & Research"
            subtitle="Explore our research contributions, industry insights, and technical publications in the field of 3D architectural modeling and visualization technology."
          />
        </div>

        {/* Publication Type Filter */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {publicationTypes.map((type) => (
            <Button key={type} variant={type === "All" ? "default" : "outline"} className="rounded-full">
              {type}
            </Button>
          ))}
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {publications.map((publication) => (
            <Card key={publication.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={publication.image || "/placeholder.svg"}
                    alt={publication.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="bg-primary text-white">
                      {publication.type}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-3 font-forum hover:text-primary transition-colors duration-300">
                      {publication.title}
                    </h3>
                    <p className="text-muted-foreground font-barlow mb-4 line-clamp-3">{publication.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground font-barlow">
                        <User className="h-4 w-4" />
                        <span>{publication.authors.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground font-barlow">
                        <FileText className="h-4 w-4" />
                        <span>{publication.journal}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground font-barlow">
                        <Calendar className="h-4 w-4" />
                        <span>{publication.date}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {publication.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Publications
          </Button>
        </div>

        {/* Research Areas */}
        <section className="mt-16 py-12 bg-muted rounded-lg">
          <div className="container">
            <SectionHeading
              title="Our Research Areas"
              subtitle="Key areas of focus in our research and development initiatives"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold mb-2 font-forum">3D Modeling Innovation</h4>
                <p className="text-muted-foreground font-barlow text-sm">
                  Advancing techniques in architectural 3D modeling and visualization technology.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold mb-2 font-forum">Sustainable Design</h4>
                <p className="text-muted-foreground font-barlow text-sm">
                  Integrating sustainability principles with modern architectural visualization.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold mb-2 font-forum">Cultural Preservation</h4>
                <p className="text-muted-foreground font-barlow text-sm">
                  Preserving traditional Indian architecture through digital documentation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold mb-2 font-forum">AI & Automation</h4>
                <p className="text-muted-foreground font-barlow text-sm">
                  Exploring artificial intelligence applications in architectural design.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold mb-2 font-forum">Virtual Reality</h4>
                <p className="text-muted-foreground font-barlow text-sm">
                  Enhancing client experience through immersive VR technologies.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold mb-2 font-forum">Industry Standards</h4>
                <p className="text-muted-foreground font-barlow text-sm">
                  Developing best practices for the Indian construction industry.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted mt-12">
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
