"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:
      "We have ordered RDModels to model our world class open pit mine rampura agucha mine of m/s HZL.The model made by RD was so nice that it was not only being appreciated by our top management and govt. Authorities at various occasions but also it's a mirror image of the actual mine to understand mining for non mining persons. My appreciation to RD models and it's team members.",
    author: "Ramshanker Sharma",
    position: "Asso. Gm and mine manager HZL -Vedanta limited india",
  },
  {
    id: 2,
    quote:
      "When I first thought to give the project to RD Models, I was not sure about it and was little confused as my architect was also not convinced. But after talking to Mr Rohitash, I felt the confidence to give him the project. He promised me to complete the model in time and with successful delivery. And yes, he and his team did tremendous work on the model with professional delivery. I and my project architect was 100% satisfied with his work. I wish the team all the best for future endeavours.",
    author: "Ramesh Kapopara",
    position: "directors Tulsi creators, Gujrat",
  },
  {
    id: 3,
    quote:
      "I visited one model personally exhibition in which we saw a lot of models but one model captures our attention which was developed by RD Models. We decided to make it for our plant too. After meeting with Rohitash, he explained the details and knowledge about the model which we were not aware of. The model came out as masterpiece and we were all happy seeing our model. Model resolved our main problem too, as the visitors were not allowed to visit the whole plant because as of safety guidelines, but they can see the plant in one go. Our department also got praised well for the model.",
    author: "L.K. Jain",
    position: "Managing Director Rajasthan Co-operative Dairy Federation",
  },
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="border-none shadow-lg">
        <CardContent className="p-8 md:p-4">
          <div className="space-y-6">
            <p className="text-lg md:text-xl italic font-forum">{testimonials[currentIndex].quote}</p>
            <div className="text-center">
              <p className="font-bold font-forum">{testimonials[currentIndex].author}</p>
              <p className="text-muted-foreground font-forum">{testimonials[currentIndex].position}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-center mt-6 gap-4">
        <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}