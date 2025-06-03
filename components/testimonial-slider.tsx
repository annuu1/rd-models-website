'use client'
import React, { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const testimonials = [
  {
    id: 1,
    quote: "RD models delivered us the model in less than a weeks time. The model has caught the eyes of many, precision in every aspect of the model is beyond words. Seeing the model every day makes us inspired to our vision!",
    author: "Sachin Bhati",
    position: "Managing Director, Dhanraj School"
  },
  {
    id: 2,
    quote: "The model made by RD was so nice that it was not only being appreciated by our top management and govt. Authorities at various occasions but also it's a mirror image of the actual mine to understand mining for non mining persons.",
    author: "Ramshanker Sharma",
    position: "Associate General Manager and Mine Manager, HZL - Vedanta Limited India"
  },
  {
    id: 3,
    quote: "Please accept this letter as the formal acknowledgement of your outstanding Project Model and as an appreciation of the services to our company Fortune Dream-con PVT. LTD. has received from you. R D Models has been supplying Project Models to our company since long time and not once have we faced any problem from your side in terms of quality or delivery timing.",
    author: "Fortune Dream-Con PVT. LTD.",
    position: ""
  },
  {
    id: 4,
    quote: "When I first thought to give the project to RD Models, I was not sure about it and was little confused as my architect was also not convinced. But after talking to Mr Rohitash, I felt the confidence to give him the project. He promised me to complete the model in time and with successful delivery. And yes, he and his team did tremendous work on the model with professional delivery.",
    author: "Ramesh Kapopara",
    position: "Director, Tulsi Creators, Gujarat"
  },
  {
    id: 5,
    quote: "I’ve an amazing experience in first meet with Mr. Rohitash... the man has full of potential... his journey, so far, in this business is inspirational... I’ve a strong belief that Mr. Rohitash shall take this business in to a peak & my all best wishes with him for his future endeavours.",
    author: "Debasis Das",
    position: "General Manager, NCC Limited"
  },
  {
    id: 6,
    quote: "Rohitash the owner of RD Models is a very humble, intelligent and grounded person. He is very sincere and a hard worker with deep technical knowledge of his profession... In my whole career, I have not seen such beautiful model work. I wish all success in his career.",
    author: "Ajay Sharma",
    position: "Director, Draupadi Constructions, Bhopal"
  },
  {
    id: 7,
    quote: "I visited one model exhibition in which we saw a lot of models but one model captures our attention which was developed by RD Models... The model came out as masterpiece and we were all happy seeing our model. Model resolved our main problem too, as the visitors were not allowed to visit the whole plant because as of safety guidelines, but they can see the plant in one go.",
    author: "L.K. Jain",
    position: "Managing Director, Rajasthan Co-operative Dairy Federation"
  },
  {
    id: 8,
    quote: "Words will not be enough to tell you how grateful I am to have a fantastic team... My project would never be successful without your support and hard work. I feel blessed to work with such an incredible and talented bunch of people.",
    author: "Dharmendra Patel",
    position: "Bhushan Developers"
  },
  {
    id: 9,
    quote: "Mr. Rohitash Dalya has the ability to delight, inspire transform a client's thoughts into marvellous and magical reality. Every details shared with him is reconstructed to have a meaning of space and serves a purpose with a thought of clarity to make the client's sentiments more precise.",
    author: "Vinod Gera",
    position: "Operations Manager, SARAS"
  },
  {
    id: 10,
    quote: "Rohitash Daiya's commitment and completion of work is highly appreciable. Great work by the team. The way his work is very speechless.",
    author: "M S Sudhir",
    position: "Executive ENV, Vedanta"
  },
  {
    id: 11,
    quote: "We have been associated with RD Models twice and at both times the project required stringent timelines, high expectations, and quality delivery. One of the models had to capture prestigious IIT Jodhpur spread over 700 acres of land and the size of the model was as huge as 13x23 feet. Would thank RD and team that they not only delivered on time but exceeded the expectations and raised the bar.",
    author: "Manish Garg",
    position: "Director, PMC Buildskills Pvt Ltd"
  }
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const getTestimonialIndex = (offset: number) => {
    return (currentIndex + offset + testimonials.length) % testimonials.length
  }

  // Animation variants for sliding
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute" as const,
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative" as const,
      transition: { x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      position: "absolute" as const,
      transition: { x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } },
    }),
  }

  return (
    <section className="bg-white py-16 md:py-8" id="testimonials">
      <div className="max-w-5xl mx-auto">
        {/* Testimonial Slider */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prevTestimonial}
            className="text-white p-3 rounded-full bg-black/50 hover:bg-primary/80 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="h-8 w-8" />
            <span className="sr-only">Previous testimonial</span>
          </button>
          <div className="relative">
            <div className="flex items-center justify-center gap-0">
              {/* Left testimonial (faded, partially visible) */}
              <div className="w-80 h-96 transition-all duration-300 transform scale-90 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-white/10 backdrop-blur-[1px] rounded-lg z-10"></div>
                <div className="w-full h-full bg-gray-400 rounded-lg p-6 flex flex-col justify-between">
                  <p className="text-white text-sm italic line-clamp-6">{testimonials[getTestimonialIndex(-1)].quote}</p>
                  <div className="text-center">
                    <div className="flex justify-center items-center gap-3">
                      <div>
                        <img
                          src="/images/testimonials/testimonial.png"
                          alt="Testimonial"
                          className="w-10 h-10 rounded-full mx-auto border-2 border-white/50 p-1 bg-white object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{testimonials[getTestimonialIndex(-1)].author}</p>
                        <p className="text-gray-400 text-xs">{testimonials[getTestimonialIndex(-1)].position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center testimonial (main focus) with slide animation */}
              <div className="w-96 h-96 z-10 flex items-center justify-center relative overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-full h-full bg-gradient-to-b from-primary via-primary/100 to-primary/100 rounded-lg p-6 flex flex-col justify-between"
                    style={{ position: "absolute", width: "100%", height: "100%" }}
                  >
                    <p className="text-white text-base italic line-clamp-6">{testimonials[currentIndex].quote}</p>
                    <div className="text-center">
                      <div className="flex justify-center items-center gap-3">
                        <div>
                          <img
                            src="/images/testimonials/testimonial.png"
                            alt="Testimonial"
                            className="w-12 h-12 rounded-full mx-auto border-2 border-white p-1 bg-white object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-white font-semibold">{testimonials[currentIndex].author}</p>
                          <p className="text-gray-700">{testimonials[currentIndex].position}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right testimonial (faded, partially visible) */}
              <div className="w-80 h-96 transition-all duration-300 transform scale-90 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-white/10 backdrop-blur-[1px] rounded-lg z-10"></div>
                <div className="w-full h-full bg-gray-400 rounded-lg p-6 flex flex-col justify-between">
                  <p className="text-white text-sm italic line-clamp-6">{testimonials[getTestimonialIndex(1)].quote}</p>
                  <div className="text-center">
                    <div className="flex justify-center items-center gap-3">
                      <div>
                        <img
                          src="/images/testimonials/testimonial.png"
                          alt="Testimonial"
                          className="w-10 h-10 rounded-full mx-auto border-2 border-white/50 p-1 bg-white object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{testimonials[getTestimonialIndex(1)].author}</p>
                        <p className="text-gray-400 text-xs">{testimonials[getTestimonialIndex(1)].position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-4 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-primary" : "bg-primary/30"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <span className="sr-only">Go to testimonial {index + 1}</span>
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={nextTestimonial}
            className="text-white p-3 rounded-full bg-black/50 hover:bg-primary transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="h-8 w-8" />
            <span className="sr-only">Next testimonial</span>
          </button>
        </div>
      </div>
    </section>
  )
}