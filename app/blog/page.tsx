"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { BlogPreview } from "@/components/blog-preview";
import { AnimatedHeader } from "@/components/animated-header";

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch("/api/blogs?type=preview")
      .then((res) => res.json())
      .then((data) => {
        setBlogPosts(data); 
        console.log("Fetched blog posts:", data);
      })
      .catch((err) => console.error("Failed to fetch blogs:", err));
  }, []);

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
          {blogPosts.map((post: any) => (
            <div key={post._id?.$oid || post._id} className="max-w-sm w-full">
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
  );
}