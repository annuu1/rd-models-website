"use client";

import { motion } from "framer-motion";
import FloatingContactButtons from "../FloatingContactButtons";
import { AnimatedHeader } from "@/components/animated-header";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Quote } from "lucide-react";
import Image from "next/image";
import React from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "RD models delivered us the model in less than a weeks time. The model has caught the eyes of many, precision in every aspect of the model is beyond words. Seeing the model every day makes us inspired to our vision!",
    author: "Sachin Bhati",
    position: "Managing Director, Dhanraj School",
    avatar: "/images/testimonials/1.png",
  },
  {
    id: 2,
    quote:
      "The model made by RD was so nice that it was not only being appreciated by our top management and govt. Authorities at various occasions but also it's a mirror image of the actual mine to understand mining for non mining persons.",
    author: "Ramshanker Sharma",
    position: "Associate General Manager and Mine Manager, HZL - Vedanta Limited India",
    avatar: "/images/testimonials/2.png",
  },
  {
    id: 3,
    quote:
      "Please accept this letter as the formal acknowledgement of your outstanding Project Model and as an appreciation of the services to our company Fortune Dream-con PVT. LTD. has received from you. R D Models has been supplying Project Models to our company since long time and not once have we faced any problem from your side in terms of quality or delivery timing.",
    author: "Fortune Dream-Con PVT. LTD.",
    position: "",
    avatar: "/images/testimonials/3.jpg",
  },
  {
    id: 4,
    quote:
      "When I first thought to give the project to RD Models, I was not sure about it and was little confused as my architect was also not convinced. But after talking to Mr Rohitash, I felt the confidence to give him the project. He promised me to complete the model in time and with successful delivery. And yes, he and his team did tremendous work on the model with professional delivery.",
    author: "Ramesh Kapopara",
    position: "Director, Tulsi Creators, Gujarat",
    avatar: "/images/testimonials/4.jpg",
  },
  {
    id: 5,
    quote:
      "I’ve an amazing experience in first meet with Mr. Rohitash... the man has full of potential... his journey, so far, in this business is inspirational... I’ve a strong belief that Mr. Rohitash shall take this business in to a peak & my all best wishes with him for his future endeavours.",
    author: "Debasis Das",
    position: "General Manager, NCC Limited",
    avatar: "/images/testimonials/5.jpg",
  },
  {
    id: 6,
    quote:
      "Rohitash the owner of RD Models is a very humble, intelligent and grounded person. He is very sincere and a hard worker with deep technical knowledge of his profession... In my whole career, I have not seen such beautiful model work. I wish all success in his career.",
    author: "Ajay Sharma",
    position: "Director, Draupadi Constructions, Bhopal",
    avatar: "/images/testimonials/6.jpg",
  },
  {
    id: 7,
    quote:
      "I visited one model exhibition in which we saw a lot of models but one model captures our attention which was developed by RD Models... The model came out as masterpiece and we were all happy seeing our model. Model resolved our main problem too, as the visitors were not allowed to visit the whole plant because as of safety guidelines, but they can see the plant in one go.",
    author: "L.K. Jain",
    position: "Managing Director, Rajasthan Co-operative Dairy Federation",
    avatar: "/images/testimonials/7.jpg",
  },
  {
    id: 8,
    quote:
      "Words will not be enough to tell you how grateful I am to have a fantastic team... My project would never be successful without your support and hard work. I feel blessed to work with such an incredible and talented bunch of people.",
    author: "Dharmendra Patel",
    position: "Bhushan Developers",
    avatar: "/images/testimonials/8.jpg",
  },
  {
    id: 9,
    quote:
      "Mr. Rohitash Dalya has the ability to delight, inspire transform a client's thoughts into marvellous and magical reality. Every details shared with him is reconstructed to have a meaning of space and serves a purpose with a thought of clarity to make the client's sentiments more precise.",
    author: "Vinod Gera",
    position: "Operations Manager, SARAS",
    avatar: "/images/testimonials/9.jpg",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, type: "spring", bounce: 0.28 } },
  whileHover: { scale: 1.03, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.12)" },
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <AnimatedHeader />
      <main>
        <section className="py-10 md:py-20">
          <div className="container mx-auto px-4">
            <Button variant="ghost" size="sm" asChild className="mb-6">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <SectionHeading
              title="Testimonials"
              subtitle="Hear what our clients have to say about our work, service, and results."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.id}
                  className="relative bg-white/90 dark:bg-gray-900/80 rounded-2xl shadow-xl p-8 flex flex-col group border border-gray-100 dark:border-gray-800 overflow-hidden"
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="whileHover"
                  transition={{ delay: i * 0.06 }}
                >
                  {/* <Quote className="absolute -top-6 -left-6 text-blue-200 dark:text-gray-800 opacity-60 w-16 h-16 rotate-12 z-0" /> */}
                  <div className="flex items-center gap-4 mb-4 z-10 relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-200 dark:border-gray-700 bg-white flex-shrink-0">
                      <Image
                        src={t.avatar}
                        alt={t.author}
                        width={56}
                        height={56}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-900 dark:text-white text-lg leading-tight font-barlow">
                        {t.author}
                      </span>
                      {t.position && (
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">
                          {t.position}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 text-base font-barlow relative z-10 leading-relaxed group-hover:text-blue-900 dark:group-hover:text-blue-200 transition-colors duration-200">
                    {t.quote}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FloatingContactButtons />
    </div>
  );
}
