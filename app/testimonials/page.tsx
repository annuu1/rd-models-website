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
      "We have ordered RDModels to model our world class open pit mine rampura agucha mine of m/s HZL. The model made by RD was so nice that it was not only being appreciated by our top management and govt. Authorities at various occasions but also it's a mirror image of the actual mine to understand mining for non mining persons. My appreciation to RD models and it's team members.",
    author: "Ramshanker Sharma",
    position: "Asso. GM and Mine Manager, HZL - Vedanta Limited India",
    avatar:
      "https://t4.ftcdn.net/jpg/03/80/58/23/360_F_380582318_5lJ52eVLcePphpM4pMHdew3wgopfhQSc.jpg",
  },
  {
    id: 2,
    quote:
      "RD models delivered us the model in less than a weeks time. The model has caught the eyes of many, precision in every aspect of the model is beyond words. Seeing the model every day makes us inspired to our vision! Thanks, Rohitash!!🙏🏻🙌",
    author: "Sachin Bhati",
    position: "Managing Director, Dhanraj School",
    avatar:
      "https://media.istockphoto.com/id/1136413215/photo/young-man-at-street-market.jpg?s=612x612&w=0&k=20&c=obnaR5III0jRxHKd4ZPl3LRC2pI792KbHYR2eBzKKe8=",
  },
  {
    id: 3,
    quote:
      "Dear Rohitash daiya, Please accept this letter as the formal acknowledgement of your outstanding Project Model and as an appreciation of the services to our company Fortune Dream-con PVT. LTD. has received from you. R D Models has been supplying Project Models to our company since long time and not once have we faced any problem from your side in terms of quality or delivery timing. The result is that our Customers, Staff, Friend circle & Directors are happy with the Models and we owe part of our success to you. We sincerely appreciate R D Models for the hard work making Drawing & Imagination to a shape of real Model and how Mr. Rohitash is personally involved for the perfect Micro detailing & Fine finishing of our model. With respect to that he also took care of providing us the model before committed time as well as providing the work progress snap on daily basis. hence We can always rely on your services because we know even if there is any issue; you will solve it in no time. We look forward to doing business with you and your company for many other projects and without any hesitation we also recommend R D Models to our clients, Customers, Friend as well as Business circle. Thanking you,\nYours truly, Fortune Dream-Con PVT. LTD.",
    author: "Fortune Dream-Con PVT. LTD.",
    position: "",
    avatar:
      "https://t3.ftcdn.net/jpg/03/67/70/92/360_F_367709239_wWNdUSrtEvG6psATqu1sO9AkKUXALpR8.jpg",
  },
  {
    id: 4,
    quote:
      "When I first thought to give the project to RD Models, I was not sure about it and was little confused as my architect was also not convinced. But after talking to Mr Rohitash, I felt the confidence to give him the project. He promised me to complete the model in time and with successful delivery. And yes, he and his team did tremendous work on the model with professional delivery. I and my project architect was 100% satisfied with his work. I wish the team all the best for future endeavours.",
    author: "Ramesh Kapopara",
    position: "Director, Tulsi Creators, Gujarat",
    avatar:
      "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww",
  },
  {
    id: 5,
    quote:
      "I’ve an amazing experience in first meet with Mr. Rohitash... the man has full of potential... his journey, so far, in this business is inspirational... I’ve a strong belief that Mr. Rohitash shall take this business in to a peak & my all best wishes with him for his future endeavours..",
    author: "Debasis Das",
    position: "General Manager, NCC Limited",
    avatar:
      "https://t4.ftcdn.net/jpg/01/84/54/21/360_F_184542148_ZRs7YiAIvlmF0HtSuct201pVsi5sq6jF.jpg",
  },
  {
    id: 6,
    quote:
      "Rohitash the owner of RD Models is a very humble, intelligent and grounded person. He is very sincere and a hard worker with deep technical knowledge of his profession. I knew him through WhatsApp as he sent a random message about his work. Then I contacted him and he came to meet me at Bhopal. In the meeting he wins all my faith as he has a man with a very simple and sober personality. I and my architect along with my technical head finalised the Project. And he made a very good model for our multi-storey project. In my whole career, I have not seen such beautiful model work. I wish all success in his career. And I can say that he will reach infinity heights. My wishes are always with him. I respect you Rohitash because of your passion and sincerity towards your work. And know model making is your soul and your hobby too. Once the work becomes your hobby then it turns in divine shape. Again thanks for your work.",
    author: "Ajay Sharma",
    position: "Director, Draupadi Constructions, Bhopal",
    avatar:
      "https://t4.ftcdn.net/jpg/04/32/89/63/360_F_432896398_99o08tTgBYj8YP2eatvF4zaJu3AdF40E.jpg",
  },
  {
    id: 7,
    quote:
      "I visited one model exhibition in which we saw a lot of models but one model captures our attention which was developed by RD Models. We decided to make it for our plant too. After meeting with Rohitash, he explained the details and knowledge about the model which we were not aware of. The model came out as masterpiece and we were all happy seeing our model. Model resolved our main problem too, as the visitors were not allowed to visit the whole plant because as of safety guidelines, but they can see the plant in one go. Our department also got praised well for the model.",
    author: "L.K. Jain",
    position: "Managing Director, Rajasthan Co-operative Dairy Federation",
    avatar:
      "https://img.freepik.com/free-photo/closeup-young-hispanic-man-casuals-studio_662251-600.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 8,
    quote:
      "Words will not be enough to tell you how grateful I am to have a fantastic team.Mr. Rohitas and team, you are someone I’ve always dreamt of. My project would never be successful without your support and hard work. I feel blessed to work with such an incredible and talented bunch of people.Thank you, everyone, for being so co-operative. Without your dedication, I would never be able to reach my goal. You guys are truly outstanding!Your contribution to our project cannot be described in words. We are proud to be associated with such a great team. Thank you, everyone, for taking the challenge and helping us to reach the top.-",
    author: "DHARMENDRA PATEL",
    position: "BHUSHAN DEVELOPERS.",
    avatar:
      "https://t4.ftcdn.net/jpg/03/67/70/91/360_F_367709147_W4Q2pRjMcz7jUkuH4e1BIhmtCDceu3FH.jpg",
  },
  {
    id: 9,
    quote:
      "Mr. Rohitash Dalya has the ability to delight, inspire transform a client's thoughts into marvellous and magical reality. Every details shared with him is reconstructed to have a meaning of space and serves a purpose with a thought of clarity to make the client's sentiments more precise. His results are time bound and commitments are without follow ups. His concept in model making is a combination of technology and usage of variety of material, turns the models more beautiful and attractive.",
    author: "Vinod GERA",
    position: "Operations manager SARAS",
    avatar:
      "https://www.shutterstock.com/image-photo/closeup-portrait-brutal-bearded-indian-260nw-1641477094.jpg",
  },
  {
    id: 10,
    quote:
      "Rohitash Daiya's commitment and completion of work is highly appreciable. Great work by the team. The way his work is very speechless.",
    author: "M S Sudhir",
    position: "Executive ENV Vedanta",
    avatar:
      "https://t4.ftcdn.net/jpg/01/84/54/21/360_F_184542148_ZRs7YiAIvlmF0HtSuct201pVsi5sq6jF.jpg",
  },
  {
    id: 11,
    quote:
      "We have been associated with RD Models twice and at both times the project required stringent timelines, high expectations, and quality delivery. One of the models had to capture prestigious IIT Jodhpur spread over 700 acres of land and the size of the model was as huge as 13x23 feet. Would thank RD and team that they not only delivered on time but exceeded the expectations and raised the bar. One thing is sure that they have created a loyal customer who cannot think beyond RD. We wish all the best for their endeavours.",
    author: "Manish Garg",
    position: "Director PMC Buildskills Pvt Ltd",
    avatar:
      "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.96 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, type: "spring", bounce: 0.28 },
  },
  whileHover: {
    scale: 1.03,
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.12)",
  },
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <AnimatedHeader />
      <main>
        <section className="py-10 md:py-20">
          <div className="container mx-auto px-4">
            <Button
              variant="default"
              size="sm"
              className="mb-6 rounded-full px-6 py-2 text-primary bg-transparent hover:bg-gray-100"
            >
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Link>
            </Button>
            <SectionHeading
              title="Testimonials"
              subtitle="Hear what our clients have to say about our work, service, and results."
            />
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 mt-12 [&>*]:mb-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.id}
                  className="relative bg-white/90 dark:bg-gray-900/80 rounded-2xl shadow-xl p-8 flex flex-col group border border-gray-100 dark:border-gray-800 overflow-hidden break-inside-avoid"
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="whileHover"
                  transition={{ delay: i * 0.06 }}
                >
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
