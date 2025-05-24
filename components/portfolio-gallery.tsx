"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = [
  { id: "all", name: "All Projects" },
  { id: "residential", name: "Residential" },
  { id: "commercial", name: "Commercial" },
  { id: "institutional", name: "Institutional" },
  { id: "interior", name: "Interior" },
]

const projects = [
  {
    id: 1,
    title: "Modern Residential Complex",
    category: "residential",
    image: "https://img.cadnav.com/allimg/160322/cadnav-160322221013.jpg?height=400&width=600",
    description: "A contemporary residential complex featuring 3 towers with 120 luxury apartments.",
  },
  {
    id: 2,
    title: "Corporate Headquarters",
    category: "commercial",
    image: "https://preview.free3d.com/img/2010/03/1688650179013510941/vn09h7yi.jpg?height=400&width=600",
    description: "A 25-story corporate headquarters with sustainable design features.",
  },
  {
    id: 3,
    title: "University Campus",
    category: "institutional",
    image: "https://media.cgtrader.com/variants/ht1X7QuTDn7p9WmgxwFFwxUq/a26e47dab5f2d22c43d6c5ce4b4b46ecc30c70918878397cba1a10c1e35d7bfc/Untitled_Viewport_001.jpg?height=400&width=600",
    description: "A comprehensive university campus with academic buildings, dormitories, and recreational facilities.",
  },
  {
    id: 4,
    title: "Luxury Penthouse Interior",
    category: "interior",
    image: "https://www.all3dfree.net/uploads/5/1/9/6/51967249/5695580_orig.jpg?height=400&width=600",
    description: "Detailed interior visualization of a luxury penthouse with custom furnishings.",
  },
  {
    id: 5,
    title: "Suburban Housing Development",
    category: "residential",
    image: "https://img.cadnav.com/allimg/131011/1-13101112294b14.jpg?height=400&width=600",
    description: "A planned community of 50 single-family homes with shared amenities.",
  },
  {
    id: 6,
    title: "Shopping Mall",
    category: "commercial",
    image: "https://p.turbosquid.com/ts-thumb/4C/i9YvRz/FM/_cover/jpg/1674469562/600x600/fit_q87/ee66153063b5f65da3ca8df1ab442a52914075aa/_cover.jpg?height=400&width=600",
    description: "A multi-level shopping mall with over 100 retail spaces and entertainment venues.",
  },
]

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [visibleProjects, setVisibleProjects] = useState(6)

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const displayedProjects = filteredProjects.slice(0, visibleProjects)

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 3)
  }

  return (
    <div className="space-y-8">
      <Tabs defaultValue="all" onValueChange={setActiveCategory} className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="font-barlow">
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={activeCategory} className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-grenda">{project.title}</h3>
                  <p className="text-muted-foreground font-barlow">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          {filteredProjects.length > visibleProjects && (
            <div className="flex justify-center mt-8">
              <Button onClick={loadMore} variant="outline" className="font-barlow">
                Load More
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
