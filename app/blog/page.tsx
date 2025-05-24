import Link from "next/link"
import { Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { BlogPreview } from "@/components/blog-preview"
import { MobileMenu } from "@/components/mobile-menu"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Architectural Visualization",
    excerpt:
      "Explore how emerging technologies like AR, VR, and real-time rendering are transforming the way architects and developers visualize projects. Learn about the latest tools and techniques that are setting new standards in the industry.",
    date: "May 15, 2023",
    author: "Deeksha Vyas",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?height=400&width=600",
    slug: "future-of-architectural-visualization",
    category: "Technology",
  },
  {
    id: 2,
    title: "3D Modeling Techniques for Realistic Interiors",
    excerpt:
      "Learn about the latest techniques and tools for creating photorealistic interior visualizations. This article covers lighting, materials, texturing, and composition to help you create stunning interior renderings.",
    date: "April 28, 2023",
    author: "Pushpkant Yadav",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?height=400&width=600",
    slug: "3d-modeling-techniques-for-realistic-interiors",
    category: "Tutorials",
  },
  {
    id: 3,
    title: "How 3D Models Improve Client Communication",
    excerpt:
      "Discover how detailed 3D models can enhance communication and reduce misunderstandings in architectural projects. Learn how to use 3D visualization as an effective tool for client presentations and feedback.",
    date: "April 10, 2023",
    author: "Avinash Daiya",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?height=400&width=600",
    slug: "how-3d-models-improve-client-communication",
    category: "Business",
  },
  {
    id: 4,
    title: "Sustainable Architecture and 3D Visualization",
    excerpt:
      "Explore how 3D modeling can help architects and developers showcase sustainable design features and communicate green building concepts to clients and stakeholders.",
    date: "March 22, 2023",
    author: "Deeksha Vyas",
    image: "https://images.unsplash.com/photo-1518005068251-37900150dfca?height=400&width=600",
    slug: "sustainable-architecture-and-3d-visualization",
    category: "Sustainability",
  },
  {
    id: 5,
    title: "The Role of Lighting in Architectural Visualization",
    excerpt:
      "Understand the critical role of lighting in creating realistic and impactful architectural visualizations. Learn techniques for simulating natural and artificial lighting to enhance your 3D models.",
    date: "March 5, 2023",
    author: "Pushpkant Yadav",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?height=400&width=600",
    slug: "role-of-lighting-in-architectural-visualization",
    category: "Techniques",
  },
  {
    id: 6,
    title: "Choosing the Right 3D Modeling Software for Your Project",
    excerpt:
      "A comprehensive guide to selecting the most appropriate 3D modeling software based on your project requirements, budget, and expertise level. Compare features, capabilities, and learning curves.",
    date: "February 18, 2023",
    author: "Avinash Daiya",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?height=400&width=600",
    slug: "choosing-right-3d-modeling-software",
    category: "Tools",
  },
]

export default function BlogPage() {
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
              className="text-base font-medium text-muted-foreground hover:text-primary font-barlow link-underline"
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className="text-base font-medium text-primary hover:text-primary/80 font-barlow link-underline"
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
        <SectionHeading
          title="Our Blog"
          subtitle="Insights, trends, and expertise from the world of 3D architectural modeling"
          className="mb-12"
        />

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          <Button variant="outline" className="rounded-full">
            All Categories
          </Button>
          <Button variant="ghost" className="rounded-full">
            Technology
          </Button>
          <Button variant="ghost" className="rounded-full">
            Tutorials
          </Button>
          <Button variant="ghost" className="rounded-full">
            Business
          </Button>
          <Button variant="ghost" className="rounded-full">
            Sustainability
          </Button>
          <Button variant="ghost" className="rounded-full">
            Techniques
          </Button>
          <Button variant="ghost" className="rounded-full">
            Tools
          </Button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPreview
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              author={post.author}
              image={post.image}
              slug={post.slug}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-2">
            <Button variant="outline" disabled>
              Previous
            </Button>
            <Button variant="outline" className="bg-primary text-white hover:bg-primary/90">
              1
            </Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>
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
