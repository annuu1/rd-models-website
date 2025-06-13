import Link from "next/link"
import { Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { BlogPreview } from "@/components/blog-preview"
import { MobileMenu } from "@/components/mobile-menu"
import { AnimatedHeader } from "@/components/animated-header"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Sometimes Rome Is Built in a Day—Or Less",
    excerpt:
      "Explore how emerging technologies like AR, VR, and real-time rendering are transforming the way architects and developers visualize projects. Learn about the latest tools and techniques that are setting new standards in the industry.",
    date: "May 15, 2023",
    author: "Urvashi",
    image: "https://www.fodors.com/wp-content/uploads/2019/07/01_BestAncientSitesInRome__RomanForum_shutterstock_351471179.jpg",
    slug: "sometimes-rome-is-built-in-a-day",
    category: "Technology",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedHeader />

      <main className="container py-12">
        <SectionHeading
          title="Our Blog"
          subtitle="Insights, trends, and expertise from the world of 3D architectural modeling"
          className="mb-12"
        />

        {/* Categories */}
        {/* <div className="flex flex-wrap gap-2 mb-10 justify-center">
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
        </div> */}

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

      {/* <footer className="border-t bg-muted mt-12">
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
      </footer> */}
    </div>
  )
}
