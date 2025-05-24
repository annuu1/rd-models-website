import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Linkedin, Twitter } from "lucide-react"

interface TeamMemberProps {
  name: string
  position: string
  image: string
  bio: string
}

export function TeamMember({ name, position, image, bio }: TeamMemberProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-80 w-full">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-bold mb-1 font-forum">{name}</h3>
        <p className="text-primary mb-3 font-barlow">{position}</p>
        <p className="text-muted-foreground mb-4 font-barlow">{bio}</p>
        <div className="flex justify-center gap-4">
          <a href="#" className="text-muted-foreground hover:text-primary">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary">
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
