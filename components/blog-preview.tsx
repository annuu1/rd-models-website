import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"

interface BlogPreviewProps {
  title: string
  excerpt: string
  date: string
  author: string
  image: string
  slug: string
}

export function BlogPreview({ title, excerpt, date, author, image, slug }: BlogPreviewProps) {
  return (
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48">
        <Link href={`/blog/${slug}`}>
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </Link>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3 font-barlow">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
          <span>•</span>
          <span>{author}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 font-forum hover:text-primary transition-colors duration-300">
          <Link href={`/blog/${slug}`} className="hover:text-primary">
            {title}
          </Link>
        </h3>
        <p className="text-muted-foreground font-barlow line-clamp-3">{excerpt}</p>
        <div className="mt-4">
          <Link
            href={`/blog/${slug}`}
            className="text-primary font-medium hover:underline inline-flex items-center font-barlow"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 h-4 w-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
