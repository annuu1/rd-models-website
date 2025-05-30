'use client'
import React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:
      "We have ordered RDModels to model our world class open pit mine rampura agucha mine of m/s HZL. The model made by RD was so nice that it was not only being appreciated by our top management and govt. Authorities at various occasions but also it's a mirror image of the actual mine to understand mining for non mining persons. My appreciation to RD models and it's team members.",
    author: "Ramshanker Sharma",
    position: "Asso. Gm and mine manager HZL - Vedanta limited India",
  },
  {
    id: 2,
    quote:
      "RD models delivered us the model in less than a weeks time. The model has caught the eyes of many, precision in every aspect of the model is beyond words. Seeing the model every day makes us inspired to our vision! Thanks, Rohitash!! 🙏🏻🙌",
    author: "Sachin Bhati",
    position: "Managing Director Dhanraj School",
  },
  {
    id: 3,
    quote:
      "Dear Rohitash Daiya, Please accept this letter as the formal acknowledgement of your outstanding Project Model and as an appreciation of the services to our company Fortune Dream-con PVT. LTD. has received from you. R D Models has been supplying Project Models to our company since long time and not once have we faced any problem from your side in terms of quality or delivery timing. The result is that our Customers, Staff, Friend circle & Directors are happy with the Models and we owe part of our success to you. We sincerely appreciate R D Models for the hard work making Drawing & Imagination to a shape of real Model and how Mr. Rohitash is personally involved for the perfect Micro detailing & Fine finishing of our model. With respect to that he also took care of providing us the model before committed time as well as providing the work progress snap on daily basis. Hence we can always rely on your services because we know even if there is any issue; you will solve it in no time. We look forward to doing business with you and your company for many other projects and without any hesitation we also recommend R D Models to our clients, Customers, Friend as well as Business circle.",
    author: "Fortune Dream-Con PVT. LTD.",
    position: "",
  },
  {
    id: 4,
    quote:
      "When I first thought to give the project to RD Models, I was not sure about it and was little confused as my architect was also not convinced. But after talking to Mr Rohitash, I felt the confidence to give him the project. He promised me to complete the model in time and with successful delivery. And yes, he and his team did tremendous work on the model with professional delivery. I and my project architect was 100% satisfied with his work. I wish the team all the best for future endeavours.",
    author: "Ramesh Kapopara",
    position: "Directors Tulsi Creators, Gujarat",
  },
  {
    id: 5,
    quote:
      "I’ve an amazing experience in first meet with Mr. Rohitash... the man has full of potential... his journey, so far, in this business is inspirational... I’ve a strong belief that Mr. Rohitash shall take this business in to a peak & my all best wishes with him for his future endeavours.",
    author: "Debasis Das",
    position: "General Manager, NCC Limited",
  },
  {
    id: 6,
    quote:
      "Rohitash the owner of RD Models is a very humble, intelligent and grounded person. He is very sincere and a hard worker with deep technical knowledge of his profession. I knew him through WhatsApp as he sent a random message about his work. Then I contacted him and he came to meet me at Bhopal. In the meeting he wins all my faith as he has a man with a very simple and sober personality. I and my architect along with my technical head finalised the Project. And he made a very good model for our multi-storey project. In my whole career, I have not seen such beautiful model work. I wish all success in his career. And I can say that he will reach infinity heights. My wishes are always with him. I respect you Rohitash because of your passion and sincerity towards your work. And know model making is your soul and your hobby too. Once the work becomes your hobby then it turns in divine shape. Again thanks for your work.",
    author: "Ajay Sharma",
    position: "Director Draupadi Constructions, Bhopal",
  },
  {
    id: 7,
    quote:
      "I visited one model exhibition in which we saw a lot of models but one model captures our attention which was developed by RD Models. We decided to make it for our plant too. After meeting with Rohitash, he explained the details and knowledge about the model which we were not aware of. The model came out as masterpiece and we were all happy seeing our model. Model resolved our main problem too, as the visitors were not allowed to visit the whole plant because as of safety guidelines, but they can see the plant in one go. Our department also got praised well for the model.",
    author: "L.K. Jain",
    position: "Managing Director Rajasthan Co-operative Dairy Federation",
  },
  {
    id: 8,
    quote:
      "Words will not be enough to tell you how grateful I am to have a fantastic team. Mr. Rohitash and team, you are someone I’ve always dreamt of. My project would never be successful without your support and hard work. I feel blessed to work with such an incredible and talented bunch of people. Thank you, everyone, for being so co-operative. Without your dedication, I would never be able to reach my goal. You guys are truly outstanding! Your contribution to our project cannot be described in words. We are proud to be associated with such a great team.",
    author: "Dharmendra Patel",
    position: "Bhushan Developers",
  },
  {
    id: 9,
    quote:
      "Mr. Rohitash Daiya has the ability to delight, inspire transform a client's thoughts into marvellous and magical reality. Every details shared with him is reconstructed to have a meaning of space and serves a purpose with a thought of clarity to make the client's sentiments more precise. His results are time bound and commitments are without follow ups. His concept in model making is a combination of technology and usage of variety of material, turns the models more beautiful and attractive.",
    author: "Vinod Gera",
    position: "Operations Manager SARAS",
  },
  {
    id: 10,
    quote:
      "Rohitash Daiya's commitment and completion of work is highly appreciable. Great work by the team. The way his work is very speechless.",
    author: "M S Sudhir",
    position: "Executive ENV Vedanta",
  },
  {
    id: 11,
    quote:
      "We have been associated with RD Models twice and at both times the project required stringent timelines, high expectations, and quality delivery. One of the models had to capture prestigious IIT Jodhpur spread over 700 acres of land and the size of the model was as huge as 13x23 feet. Would thank RD and team that they not only delivered on time but exceeded the expectations and raised the bar. One thing is sure that they have created a loyal customer who cannot think beyond RD. We wish all the best for their endeavours.",
    author: "Manish Garg",
    position: "Director PMC Buildskills Pvt Ltd",
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
      <Card className="border-none shadow-lg md:min-h-64">
        <CardContent className="p-8 md:p-4">
          <div className="space-y-6">
            <p className="text-lg md:text-xl italic font-forum">{testimonials[currentIndex].quote}</p>
            <div className="text-center">
              <div className="flex justify-center items-center gap-3">
                <div className="">
                  <img
                    src="/images/testimonials/testimonial.png"
                    alt="Testimonial"
                    className="w-12 h-12 rounded-full mx-auto border-2 border-primary p-1 bg-white object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold font-forum">{testimonials[currentIndex].author}</p>
                  <p className="text-muted-foreground font-forum">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-center mt-6 gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTestimonial}
          className="rounded-full hover:bg-primary hover:text-white hover:scale-110 transition-transform duration-100"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextTestimonial}
          className="rounded-full hover:bg-primary hover:text-white hover:scale-110 transition-transform duration-100"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}