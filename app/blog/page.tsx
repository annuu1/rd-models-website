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
    date: "May 15, 2025",
    author: "Urvashi",
    image: "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/blog/blog_1.jpg",
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

        {/* Blog Posts Flex Container */}
        <div className="flex flex-wrap justify-center gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="max-w-sm w-full">
              <BlogPreview
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                author={post.author}
                image={post.image}
                slug={post.slug}
              />
            </div>
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
    </div>
  )
}